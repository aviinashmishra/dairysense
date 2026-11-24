/*
  Dairy Sense - smart monitoring node for the physical model
  Board: NodeMCU / Wemos D1 mini (ESP8266), Arduino IDE

  What it does
    - reads shed temperature + humidity from a DHT11
    - shows them on a 16x2 I2C LCD
    - drives the water pump through an L293D motor driver
    - watches the IR sensor at the gate and flashes the red LED
    - serves everything over Wi-Fi as JSON, so the Dairy Sense 3D twin
      (index.html -> "Link device") can show and control the real model

  It starts its own hotspot, so no router is needed at the exhibition:
      Wi-Fi name  DairySense      password  milkday2026
      address     http://192.168.4.1

  Libraries (Arduino IDE > Library Manager)
    - "DHT sensor library" by Adafruit (plus "Adafruit Unified Sensor")
    - "LiquidCrystal I2C" by Frank de Brabander

  Wiring
    DHT11  DATA -> D4      (VCC 3V3, GND)
    LCD    SDA  -> D2, SCL -> D1   (VCC 5V/VIN, GND)
    L293D  EN1  -> D5, IN1 -> D6, IN2 -> D7
           VCC1 (pin 16, logic supply) -> 5V/VIN
           OUT1/OUT2 -> pump motor, VCC2 -> pump supply (5-9 V), GNDs joined
    IR     OUT  -> D0      (most modules pull LOW when they see something)
    LED    red  -> D8 through a 220 ohm resistor to GND

  NOTE: this sketch has been written to match the twin's API but has not
  been run on hardware by its author. Check the pin choices against your
  own board before powering the pump.
*/
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DHT.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

const char *AP_NAME = "DairySense";
const char *AP_PASS = "milkday2026";

const uint8_t PIN_DHT = D4, PIN_EN = D5, PIN_IN1 = D6, PIN_IN2 = D7, PIN_IR = D0, PIN_LED = D8;
const bool IR_ACTIVE_LOW = true;
const float PUMP_AUTO_OFF_TEMP = 60.0;   // safety: never run if the sensor reads nonsense

DHT dht(PIN_DHT, DHT11);
LiquidCrystal_I2C lcd(0x27, 16, 2);      // try 0x3F if the display stays blank
ESP8266WebServer server(80);

float tempC = NAN, hum = NAN;
bool pumpOn = false;
bool irNow = false, irLatched = false;   // latched until the twin has read it once
unsigned long crossings = 0, lastRead = 0, ledUntil = 0;

void setPump(bool on) {
  pumpOn = on;
  digitalWrite(PIN_IN1, on ? HIGH : LOW);
  digitalWrite(PIN_IN2, LOW);
  analogWrite(PIN_EN, on ? 1023 : 0);
}

void cors() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Private-Network", "true");
  server.sendHeader("Cache-Control", "no-store");
}

String stateJson() {
  String j = "{";
  j += "\"temp\":" + (isnan(tempC) ? String("null") : String(tempC, 1));
  j += ",\"hum\":" + (isnan(hum) ? String("null") : String(hum, 0));
  j += ",\"pump\":" + String(pumpOn ? "true" : "false");
  j += ",\"ir\":" + String(irLatched ? "true" : "false");
  j += ",\"crossings\":" + String(crossings);
  j += ",\"uptime\":" + String(millis() / 1000);
  j += "}";
  return j;
}

void handleState() {
  cors();
  server.send(200, "application/json", stateJson());
  irLatched = false;
}

void handlePump() {
  cors();
  if (server.hasArg("on")) setPump(server.arg("on") == "1");
  server.send(200, "application/json", stateJson());
}

void handleRoot() {
  String h = F("<!doctype html><meta name=viewport content='width=device-width,initial-scale=1'>"
               "<meta http-equiv=refresh content=3><title>Dairy Sense node</title>"
               "<body style='font-family:sans-serif;background:#1f4e2e;color:#fff;padding:24px'>"
               "<h1>Dairy Sense</h1><p style='font-size:28px'>");
  h += isnan(tempC) ? String("Sensor not ready") : String(tempC, 1) + " &deg;C &middot; " + String(hum, 0) + " % humidity";
  h += F("</p><p>Pump is <b>");
  h += pumpOn ? "ON" : "OFF";
  h += F("</b> &middot; <a style='color:#f2b632' href='/api/pump?on=1'>switch on</a> &middot; "
         "<a style='color:#f2b632' href='/api/pump?on=0'>switch off</a></p><p>Gate crossings: ");
  h += String(crossings);
  h += F("</p></body>");
  server.send(200, "text/html", h);
}

void setup() {
  pinMode(PIN_EN, OUTPUT); pinMode(PIN_IN1, OUTPUT); pinMode(PIN_IN2, OUTPUT);
  pinMode(PIN_LED, OUTPUT); pinMode(PIN_IR, INPUT);
  setPump(false);

  Serial.begin(115200);
  dht.begin();
  Wire.begin(D2, D1);
  lcd.init(); lcd.backlight();
  lcd.setCursor(0, 0); lcd.print("Dairy Sense");
  lcd.setCursor(0, 1); lcd.print("starting...");

  WiFi.mode(WIFI_AP);
  WiFi.softAP(AP_NAME, AP_PASS);
  Serial.print("\nHotspot up, open http://"); Serial.println(WiFi.softAPIP());

  server.on("/", handleRoot);
  server.on("/api/state", handleState);
  server.on("/api/pump", handlePump);
  server.onNotFound([]() { cors(); server.send(404, "application/json", "{\"error\":\"not found\"}"); });
  server.begin();
}

void loop() {
  server.handleClient();
  unsigned long now = millis();

  // gate: count each new beam break and flash the LED for half a second
  bool seen = digitalRead(PIN_IR) == (IR_ACTIVE_LOW ? LOW : HIGH);
  if (seen && !irNow) { crossings++; irLatched = true; ledUntil = now + 500; }
  irNow = seen;
  digitalWrite(PIN_LED, now < ledUntil ? HIGH : LOW);

  // the DHT11 can only be read about once every two seconds
  if (now - lastRead >= 2000) {
    lastRead = now;
    float t = dht.readTemperature(), h = dht.readHumidity();
    if (!isnan(t) && !isnan(h)) { tempC = t; hum = h; }
    if (!isnan(tempC) && tempC > PUMP_AUTO_OFF_TEMP) setPump(false);

    lcd.setCursor(0, 0);
    if (isnan(tempC)) lcd.print("Sensor error    ");
    else { lcd.print("Temp:"); lcd.print(tempC, 1); lcd.print((char)223); lcd.print("C    "); }
    lcd.setCursor(0, 1);
    lcd.print("Hum:"); lcd.print(isnan(hum) ? 0 : (int)hum); lcd.print("% Pump:"); lcd.print(pumpOn ? "ON " : "OFF");
  }
}
