@echo off
rem Builds Dairy Sense once, then serves it and opens the browser.
cd /d "%~dp0"
if not exist node_modules call npm install
if not exist .next\BUILD_ID call npm run build
start "" http://localhost:3000
call npm start
