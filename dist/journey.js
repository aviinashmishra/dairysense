(()=>{var Tl="170";var Tu=0,Mc=1,Au=2;var go=1,Ru=2,On=3,ni=0,we=1,Ie=2,wn=0,ji=1,Gr=2,bc=3,Sc=4,Cu=5,yi=100,Pu=101,Iu=102,Du=103,Lu=104,Uu=200,Nu=201,Fu=202,Ou=203,ca=204,ha=205,zu=206,Bu=207,ku=208,Hu=209,Vu=210,Gu=211,Wu=212,Xu=213,qu=214,ua=0,da=1,fa=2,is=3,pa=4,ma=5,ga=6,xa=7,Al=0,Yu=1,$u=2,ei=0,Rl=1,Cl=2,Pl=3,er=4,Zu=5,Il=6,Dl=7;var Lh=300,ss=301,rs=302,_a=303,va=304,xo=306,tn=1e3,Si=1001,ya=1002,je=1003,Ju=1004;var ur=1005;var bn=1006,Do=1007;var wi=1008;var Hn=1009,Uh=1010,Nh=1011,$s=1012,Ll=1013,Ei=1014,Sn=1015,en=1016,Ul=1017,Nl=1018,os=1020,Fh=35902,Oh=1021,zh=1022,gn=1023,Bh=1024,kh=1025,ts=1026,as=1027,Fl=1028,Ol=1029,Hh=1030,zl=1031;var Bl=1033,zr=33776,Br=33777,kr=33778,Hr=33779,Ma=35840,ba=35841,Sa=35842,wa=35843,Ea=36196,Ta=37492,Aa=37496,Ra=37808,Ca=37809,Pa=37810,Ia=37811,Da=37812,La=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,za=37818,Ba=37819,ka=37820,Ha=37821,Vr=36492,Va=36494,Ga=36495,Vh=36283,Wa=36284,Xa=36285,qa=36286;var Wr=2300,Ya=2301,Lo=2302,wc=2400,Ec=2401,Tc=2402;var Ku=3200,Qu=3201;var kl=0,ju=1,Mn="",Pe="srgb",ms="srgb-linear",_o="linear",oe="srgb";var Fi=7680;var Ac=519,td=512,ed=513,nd=514,Gh=515,id=516,sd=517,rd=518,od=519,Rc=35044;var Cc="300 es",Bn=2e3,Xr=2001,ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=1234567,Xs=Math.PI/180,Zs=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function ad(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ld(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function cd(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function hd(i,t=1){return t-Math.abs(Hl(i,t*2)-t)}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pd(i,t){return i+Math.random()*(t-i)}function md(i){return i*(.5-Math.random())}function gd(i){i!==void 0&&(Pc=i);let t=Pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(i){return i*Xs}function _d(i){return i*Zs}function vd(i){return(i&i-1)===0&&i!==0}function yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),p=a((t-n)/2),l=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*f,c*p,o*h);break;case"YZY":i.set(c*p,o*u,c*f,o*h);break;case"ZXZ":i.set(c*f,c*p,o*u,o*h);break;case"XZX":i.set(o*u,c*x,c*l,o*h);break;case"YXY":i.set(c*l,o*u,c*x,o*h);break;case"ZYZ":i.set(c*x,c*l,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vl={DEG2RAD:Xs,RAD2DEG:Zs,generateUUID:gs,clamp:Ve,euclideanModulo:Hl,mapLinear:ad,inverseLerp:ld,lerp:qs,damp:cd,pingpong:hd,smoothstep:ud,smootherstep:dd,randInt:fd,randFloat:pd,randFloatSpread:md,seededRandom:gd,degToRad:xd,radToDeg:_d,isPowerOfTwo:vd,ceilPowerOfTwo:yd,floorPowerOfTwo:Md,setQuaternionFromProperEuler:bd,normalize:ke,denormalize:Ki},Ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,a,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],f=n[7],p=n[2],l=n[5],x=n[8],v=s[0],g=s[3],d=s[6],b=s[1],S=s[4],M=s[7],z=s[2],U=s[5],F=s[8];return r[0]=a*v+o*b+c*z,r[3]=a*g+o*S+c*U,r[6]=a*d+o*M+c*F,r[1]=h*v+u*b+f*z,r[4]=h*g+u*S+f*U,r[7]=h*d+u*M+f*F,r[2]=p*v+l*b+x*z,r[5]=p*g+l*S+x*U,r[8]=p*d+l*M+x*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],f=u*a-o*h,p=o*c-u*r,l=h*r-a*c,x=e*f+n*p+s*l;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=f*v,t[1]=(s*h-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=p*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=l*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Uo=new Yt;function Wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){let i=qr("canvas");return i.style.display="block",i}var Ic={};function Gs(i){i in Ic||(Ic[i]=!0,console.warn(i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ed(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Td(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?_o:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Dc=[.64,.33,.3,.6,.15,.06],Lc=[.2126,.7152,.0722],Uc=[.3127,.329],Nc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[ms]:{primaries:Dc,whitePoint:Uc,transfer:_o,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Lc,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Dc,whitePoint:Uc,transfer:oe,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Lc,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var Oi,$a=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=qr("canvas")),Oi.width=t.width,Oi.height=t.height;let n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ad=0,Yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(No(s[a].image)):r.push(No(s[a]))}else r=No(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function No(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rd=0,Ye=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Si,s=Si,r=bn,a=wi,o=gn,c=Hn,h=i.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=gs(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Lh;Ye.DEFAULT_ANISOTROPY=1;var ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],f=c[8],p=c[1],l=c[5],x=c[9],v=c[2],g=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+v)<.1&&Math.abs(x+g)<.1&&Math.abs(h+l+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(h+1)/2,M=(l+1)/2,z=(d+1)/2,U=(u+p)/4,F=(f+v)/4,V=(x+g)/4;return S>M&&S>z?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=U/n,r=F/n):M>z?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=U/s,r=V/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=F/r,s=V/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-x)*(g-x)+(f-v)*(f-v)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(f-v)/b,this.z=(p-u)/b,this.w=Math.acos((h+l+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends Za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$r=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3],p=r[a+0],l=r[a+1],x=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=l,t[e+2]=x,t[e+3]=v;return}if(f!==v||c!==p||h!==l||u!==x){let g=1-o,d=c*p+h*l+u*x+f*v,b=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let z=Math.sqrt(S),U=Math.atan2(z,d*b);g=Math.sin(g*U)/z,o=Math.sin(o*U)/z}let M=o*b;if(c=c*g+p*M,h=h*g+l*M,u=u*g+x*M,f=f*g+v*M,g===1-o){let z=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=z,h*=z,u*=z,f*=z}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a],p=r[a+1],l=r[a+2],x=r[a+3];return t[e]=o*x+u*f+c*l-h*p,t[e+1]=c*x+u*p+h*f-o*l,t[e+2]=h*x+u*l+o*p-c*f,t[e+3]=u*x-o*f-c*p-h*l,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),f=o(r/2),p=c(n/2),l=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=p*u*f+h*l*x,this._y=h*l*f-p*u*x,this._z=h*u*x+p*l*f,this._w=h*u*f-p*l*x;break;case"YXZ":this._x=p*u*f+h*l*x,this._y=h*l*f-p*u*x,this._z=h*u*x-p*l*f,this._w=h*u*f+p*l*x;break;case"ZXY":this._x=p*u*f-h*l*x,this._y=h*l*f+p*u*x,this._z=h*u*x+p*l*f,this._w=h*u*f-p*l*x;break;case"ZYX":this._x=p*u*f-h*l*x,this._y=h*l*f+p*u*x,this._z=h*u*x-p*l*f,this._w=h*u*f+p*l*x;break;case"YZX":this._x=p*u*f+h*l*x,this._y=h*l*f+p*u*x,this._z=h*u*x-p*l*f,this._w=h*u*f-p*l*x;break;case"XZY":this._x=p*u*f-h*l*x,this._y=h*l*f-p*u*x,this._z=h*u*x+p*l*f,this._w=h*u*f+p*l*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],f=e[10],p=n+o+f;if(p>0){let l=.5/Math.sqrt(p+1);this._w=.25/l,this._x=(u-c)*l,this._y=(r-h)*l,this._z=(a-s)*l}else if(n>o&&n>f){let l=2*Math.sqrt(1+n-o-f);this._w=(u-c)/l,this._x=.25*l,this._y=(s+a)/l,this._z=(r+h)/l}else if(o>f){let l=2*Math.sqrt(1+o-n-f);this._w=(r-h)/l,this._x=(s+a)/l,this._y=.25*l,this._z=(c+u)/l}else{let l=2*Math.sqrt(1+f-n-o);this._w=(a-s)/l,this._x=(r+h)/l,this._y=(c+u)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let l=1-e;return this._w=l*a+e*this._w,this._x=l*n+e*this._x,this._y=l*s+e*this._y,this._z=l*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),f=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*h+a*f-o*u,this.y=n+c*u+o*h-r*f,this.z=s+c*f+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fo.copy(this).projectOnVector(t),this.sub(Fo)}reflect(t){return this.sub(Fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fo=new W,Oc=new $e,Vn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),fr.subVectors(this.max,Ns),zi.subVectors(t.a,Ns),Bi.subVectors(t.b,Ns),ki.subVectors(t.c,Ns),Zn.subVectors(Bi,zi),Jn.subVectors(ki,Bi),fi.subVectors(zi,ki);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!Oo(e,zi,Bi,ki,fr)||(e=[1,0,0,0,1,0,0,0,1],!Oo(e,zi,Bi,ki,fr))?!1:(pr.crossVectors(Zn,Jn),e=[pr.x,pr.y,pr.z],Oo(e,zi,Bi,ki,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new W,new W,new W,new W,new W,new W,new W,new W],fn=new W,dr=new Vn,zi=new W,Bi=new W,ki=new W,Zn=new W,Jn=new W,fi=new W,Ns=new W,fr=new W,pr=new W,pi=new W;function Oo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);let o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=t.dot(pi),h=e.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Cd=new Vn,Fs=new W,zo=new W,Gn=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);let e=Fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(zo)),this.expandByPoint(Fs.copy(t.center).sub(zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new W,Bo=new W,mr=new W,Kn=new W,ko=new W,gr=new W,Ho=new W,Js=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bo.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Bo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=Kn.dot(this.direction),c=-Kn.dot(mr),h=Kn.lengthSq(),u=Math.abs(1-a*a),f,p,l,x;if(u>0)if(f=a*c-o,p=a*o-c,x=r*u,f>=0)if(p>=-x)if(p<=x){let v=1/u;f*=v,p*=v,l=f*(f+a*p+2*o)+p*(a*f+p+2*c)+h}else p=r,f=Math.max(0,-(a*p+o)),l=-f*f+p*(p+2*c)+h;else p=-r,f=Math.max(0,-(a*p+o)),l=-f*f+p*(p+2*c)+h;else p<=-x?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-c),r),l=-f*f+p*(p+2*c)+h):p<=x?(f=0,p=Math.min(Math.max(-r,-c),r),l=p*(p+2*c)+h):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-c),r),l=-f*f+p*(p+2*c)+h);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),l=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bo).addScaledVector(mr,p),l}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){ko.subVectors(e,t),gr.subVectors(n,t),Ho.crossVectors(ko,gr);let a=this.direction.dot(Ho),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);let c=o*this.direction.dot(gr.crossVectors(Kn,gr));if(c<0)return null;let h=o*this.direction.dot(ko.cross(Kn));if(h<0||c+h>a)return null;let u=-o*Kn.dot(Ho);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class i{constructor(t,e,n,s,r,a,o,c,h,u,f,p,l,x,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,f,p,l,x,v,g)}set(t,e,n,s,r,a,o,c,h,u,f,p,l,x,v,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=h,d[6]=u,d[10]=f,d[14]=p,d[3]=l,d[7]=x,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=a*u,l=a*f,x=o*u,v=o*f;e[0]=c*u,e[4]=-c*f,e[8]=h,e[1]=l+x*h,e[5]=p-v*h,e[9]=-o*c,e[2]=v-p*h,e[6]=x+l*h,e[10]=a*c}else if(t.order==="YXZ"){let p=c*u,l=c*f,x=h*u,v=h*f;e[0]=p+v*o,e[4]=x*o-l,e[8]=a*h,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=l*o-x,e[6]=v+p*o,e[10]=a*c}else if(t.order==="ZXY"){let p=c*u,l=c*f,x=h*u,v=h*f;e[0]=p-v*o,e[4]=-a*f,e[8]=x+l*o,e[1]=l+x*o,e[5]=a*u,e[9]=v-p*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let p=a*u,l=a*f,x=o*u,v=o*f;e[0]=c*u,e[4]=x*h-l,e[8]=p*h+v,e[1]=c*f,e[5]=v*h+p,e[9]=l*h-x,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let p=a*c,l=a*h,x=o*c,v=o*h;e[0]=c*u,e[4]=v-p*f,e[8]=x*f+l,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=l*f+x,e[10]=p-v*f}else if(t.order==="XZY"){let p=a*c,l=a*h,x=o*c,v=o*h;e[0]=c*u,e[4]=-f,e[8]=h*u,e[1]=p*f+v,e[5]=a*u,e[9]=l*f-x,e[2]=x*f-l,e[6]=o*u,e[10]=v*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pd,t,Id)}lookAt(t,e,n){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Qn.crossVectors(n,Ke),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Qn.crossVectors(n,Ke)),Qn.normalize(),xr.crossVectors(Ke,Qn),s[0]=Qn.x,s[4]=xr.x,s[8]=Ke.x,s[1]=Qn.y,s[5]=xr.y,s[9]=Ke.y,s[2]=Qn.z,s[6]=xr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],f=n[5],p=n[9],l=n[13],x=n[2],v=n[6],g=n[10],d=n[14],b=n[3],S=n[7],M=n[11],z=n[15],U=s[0],F=s[4],V=s[8],E=s[12],y=s[1],B=s[5],m=s[9],w=s[13],N=s[2],Y=s[6],R=s[10],C=s[14],T=s[3],q=s[7],Z=s[11],K=s[15];return r[0]=a*U+o*y+c*N+h*T,r[4]=a*F+o*B+c*Y+h*q,r[8]=a*V+o*m+c*R+h*Z,r[12]=a*E+o*w+c*C+h*K,r[1]=u*U+f*y+p*N+l*T,r[5]=u*F+f*B+p*Y+l*q,r[9]=u*V+f*m+p*R+l*Z,r[13]=u*E+f*w+p*C+l*K,r[2]=x*U+v*y+g*N+d*T,r[6]=x*F+v*B+g*Y+d*q,r[10]=x*V+v*m+g*R+d*Z,r[14]=x*E+v*w+g*C+d*K,r[3]=b*U+S*y+M*N+z*T,r[7]=b*F+S*B+M*Y+z*q,r[11]=b*V+S*m+M*R+z*Z,r[15]=b*E+S*w+M*C+z*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],f=t[6],p=t[10],l=t[14],x=t[3],v=t[7],g=t[11],d=t[15];return x*(+r*c*f-s*h*f-r*o*p+n*h*p+s*o*l-n*c*l)+v*(+e*c*l-e*h*p+r*a*p-s*a*l+s*h*u-r*c*u)+g*(+e*h*f-e*o*l-r*a*f+n*a*l+r*o*u-n*h*u)+d*(-s*o*u-e*c*f+e*o*p+s*a*f-n*a*p+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],f=t[9],p=t[10],l=t[11],x=t[12],v=t[13],g=t[14],d=t[15],b=f*g*h-v*p*h+v*c*l-o*g*l-f*c*d+o*p*d,S=x*p*h-u*g*h-x*c*l+a*g*l+u*c*d-a*p*d,M=u*v*h-x*f*h+x*o*l-a*v*l-u*o*d+a*f*d,z=x*f*c-u*v*c-x*o*p+a*v*p+u*o*g-a*f*g,U=e*b+n*S+s*M+r*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/U;return t[0]=b*F,t[1]=(v*p*r-f*g*r-v*s*l+n*g*l+f*s*d-n*p*d)*F,t[2]=(o*g*r-v*c*r+v*s*h-n*g*h-o*s*d+n*c*d)*F,t[3]=(f*c*r-o*p*r-f*s*h+n*p*h+o*s*l-n*c*l)*F,t[4]=S*F,t[5]=(u*g*r-x*p*r+x*s*l-e*g*l-u*s*d+e*p*d)*F,t[6]=(x*c*r-a*g*r-x*s*h+e*g*h+a*s*d-e*c*d)*F,t[7]=(a*p*r-u*c*r+u*s*h-e*p*h-a*s*l+e*c*l)*F,t[8]=M*F,t[9]=(x*f*r-u*v*r-x*n*l+e*v*l+u*n*d-e*f*d)*F,t[10]=(a*v*r-x*o*r+x*n*h-e*v*h-a*n*d+e*o*d)*F,t[11]=(u*o*r-a*f*r-u*n*h+e*f*h+a*n*l-e*o*l)*F,t[12]=z*F,t[13]=(u*v*s-x*f*s+x*n*p-e*v*p-u*n*g+e*f*g)*F,t[14]=(x*o*s-a*v*s-x*n*c+e*v*c+a*n*g-e*o*g)*F,t[15]=(a*f*s-u*o*s+u*n*c-e*f*c-a*n*p+e*o*p)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,f=o+o,p=r*h,l=r*u,x=r*f,v=a*u,g=a*f,d=o*f,b=c*h,S=c*u,M=c*f,z=n.x,U=n.y,F=n.z;return s[0]=(1-(v+d))*z,s[1]=(l+M)*z,s[2]=(x-S)*z,s[3]=0,s[4]=(l-M)*U,s[5]=(1-(p+d))*U,s[6]=(g+b)*U,s[7]=0,s[8]=(x+S)*F,s[9]=(g-b)*F,s[10]=(1-(p+v))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Hi.set(s[0],s[1],s[2]).length(),a=Hi.set(s[4],s[5],s[6]).length(),o=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);let h=1/r,u=1/a,f=1/o;return pn.elements[0]*=h,pn.elements[1]*=h,pn.elements[2]*=h,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Bn){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),l,x;if(o===Bn)l=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Xr)l=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Bn){let c=this.elements,h=1/(e-t),u=1/(n-s),f=1/(a-r),p=(e+t)*h,l=(n+s)*u,x,v;if(o===Bn)x=(a+r)*f,v=-2*f;else if(o===Xr)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-l,c[2]=0,c[6]=0,c[10]=v,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Hi=new W,pn=new Kt,Pd=new W(0,0,0),Id=new W(1,1,1),Qn=new W,xr=new W,Ke=new W,zc=new Kt,Bc=new $e,Ge=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],f=s[2],p=s[6],l=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,l),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,l),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,l),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,l),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,l));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ge.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dd=0,kc=new W,Vi=new $e,Un=new Kt,_r=new W,Os=new W,Ld=new W,Ud=new $e,Hc=new W(1,0,0),Vc=new W(0,1,0),Gc=new W(0,0,1),Wc={type:"added"},Nd={type:"removed"},Gi={type:"childadded",child:null},Vo={type:"childremoved",child:null},Ee=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new Ge,n=new $e,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Yt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Hc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return kc.copy(t).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Os,_r,this.up):Un.lookAt(_r,Os,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Un),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),f=a(t.shapes),p=a(t.skeletons),l=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),l.length>0&&(n.animations=l),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new W(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new W,Nn=new W,Go=new W,Fn=new W,Wi=new W,Xi=new W,Xc=new W,Wo=new W,Xo=new W,qo=new W,Yo=new ie,$o=new ie,Zo=new ie,Mi=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Nn.subVectors(n,e),Go.subVectors(t,e);let a=mn.dot(mn),o=mn.dot(Nn),c=mn.dot(Go),h=Nn.dot(Nn),u=Nn.dot(Go),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,l=(h*c-o*u)*p,x=(a*u-o*c)*p;return r.set(1-l-x,x,l)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Yo.setScalar(0),$o.setScalar(0),Zo.setScalar(0),Yo.fromBufferAttribute(t,e),$o.fromBufferAttribute(t,n),Zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector($o,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Nn.subVectors(t,e),mn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),mn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,n),Xi.subVectors(r,n),Wo.subVectors(t,n);let c=Wi.dot(Wo),h=Xi.dot(Wo);if(c<=0&&h<=0)return e.copy(n);Xo.subVectors(t,s);let u=Wi.dot(Xo),f=Xi.dot(Xo);if(u>=0&&f<=u)return e.copy(s);let p=c*f-u*h;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Wi,a);qo.subVectors(t,r);let l=Wi.dot(qo),x=Xi.dot(qo);if(x>=0&&l<=x)return e.copy(r);let v=l*h-c*x;if(v<=0&&h>=0&&x<=0)return o=h/(h-x),e.copy(n).addScaledVector(Xi,o);let g=u*x-l*f;if(g<=0&&f-u>=0&&l-x>=0)return Xc.subVectors(r,s),o=(f-u)/(f-u+(l-x)),e.copy(s).addScaledVector(Xc,o);let d=1/(g+v+p);return a=v*d,o=p*d,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Jo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Hl(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jo(a,r,t+1/3),this.g=Jo(a,r,t),this.b=Jo(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Qt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ve(ze.r*255,0,255))*65536+Math.round(Ve(ze.g*255,0,255))*256+Math.round(Ve(ze.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Pe){Qt.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(vr);let n=qs(jn.h,vr.h,e),s=qs(jn.s,vr.s,e),r=qs(jn.l,vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Dt;Dt.NAMES=Xh;var Fd=0,En=class extends ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=gs(),this.name="",this.blending=ji,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xe=class extends En{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new W,yr=new Ft,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rc&&(t.usage=this.usage),t}};var Jr=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Kr=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Od=0,an=new Kt,Ko=new Ee,qi=new W,Qe=new Vn,zs=new Vn,Ce=new W,ae=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wh(t)?Kr:Jr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Qe.min,zs.min),Qe.expandByPoint(Ce),Ce.addVectors(Qe.max,zs.max),Qe.expandByPoint(Ce)):(Qe.expandByPoint(zs.min),Qe.expandByPoint(zs.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Ce.fromBufferAttribute(o,h),c&&(qi.fromBufferAttribute(t,h),Ce.add(qi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let V=0;V<n.count;V++)o[V]=new W,c[V]=new W;let h=new W,u=new W,f=new W,p=new Ft,l=new Ft,x=new Ft,v=new W,g=new W;function d(V,E,y){h.fromBufferAttribute(n,V),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,y),p.fromBufferAttribute(r,V),l.fromBufferAttribute(r,E),x.fromBufferAttribute(r,y),u.sub(h),f.sub(h),l.sub(p),x.sub(p);let B=1/(l.x*x.y-x.x*l.y);isFinite(B)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(f,-l.y).multiplyScalar(B),g.copy(f).multiplyScalar(l.x).addScaledVector(u,-x.x).multiplyScalar(B),o[V].add(v),o[E].add(v),o[y].add(v),c[V].add(g),c[E].add(g),c[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let V=0,E=b.length;V<E;++V){let y=b[V],B=y.start,m=y.count;for(let w=B,N=B+m;w<N;w+=3)d(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let S=new W,M=new W,z=new W,U=new W;function F(V){z.fromBufferAttribute(s,V),U.copy(z);let E=o[V];S.copy(E),S.sub(z.multiplyScalar(z.dot(E))).normalize(),M.crossVectors(U,E);let B=M.dot(c[V])<0?-1:1;a.setXYZW(V,S.x,S.y,S.z,B)}for(let V=0,E=b.length;V<E;++V){let y=b[V],B=y.start,m=y.count;for(let w=B,N=B+m;w<N;w+=3)F(t.getX(w+0)),F(t.getX(w+1)),F(t.getX(w+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,l=n.count;p<l;p++)n.setXYZ(p,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,h=new W,u=new W,f=new W;if(t)for(let p=0,l=t.count;p<l;p+=3){let x=t.getX(p+0),v=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),o.add(u),c.add(u),h.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,l=e.count;p<l;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,f=o.normalized,p=new h.constructor(c.length*u),l=0,x=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?l=c[v]*o.data.stride+o.offset:l=c[v]*u;for(let d=0;d<u;d++)p[x++]=h[l++]}return new _e(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,f=h.length;u<f;u++){let p=h[u],l=t(p,n);c.push(l)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let f=0,p=h.length;f<p;f++){let l=h[f];u.push(l.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],f=r[h];for(let p=0,l=f.length;p<l;p++)u.push(f[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new Kt,mi=new Js,Mr=new Gn,Yc=new W,br=new W,Sr=new W,wr=new W,Qo=new W,Er=new W,$c=new W,Tr=new W,jt=class extends Ee{constructor(t=new ae,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Er.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],f=r[c];u!==0&&(Qo.fromBufferAttribute(f,t),a?Er.addScaledVector(Qo,u):Er.addScaledVector(Qo.sub(e),u))}e.add(Er)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Mr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Mr,Yc)===null||mi.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&(qc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,l=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){let g=p[x],d=a[g.materialIndex],b=Math.max(g.start,l.start),S=Math.min(o.count,Math.min(g.start+g.count,l.start+l.count));for(let M=b,z=S;M<z;M+=3){let U=o.getX(M),F=o.getX(M+1),V=o.getX(M+2);s=Ar(this,d,t,n,h,u,f,U,F,V),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,l.start),v=Math.min(o.count,l.start+l.count);for(let g=x,d=v;g<d;g+=3){let b=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);s=Ar(this,a,t,n,h,u,f,b,S,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){let g=p[x],d=a[g.materialIndex],b=Math.max(g.start,l.start),S=Math.min(c.count,Math.min(g.start+g.count,l.start+l.count));for(let M=b,z=S;M<z;M+=3){let U=M,F=M+1,V=M+2;s=Ar(this,d,t,n,h,u,f,U,F,V),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,l.start),v=Math.min(c.count,l.start+l.count);for(let g=x,d=v;g<d;g+=3){let b=g,S=g+1,M=g+2;s=Ar(this,a,t,n,h,u,f,b,S,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function zd(i,t,e,n,s,r,a,o){let c;if(t.side===we?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ni,o),c===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Tr);return h<e.near||h>e.far?null:{distance:h,point:Tr.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,br),i.getVertexPosition(c,Sr),i.getVertexPosition(h,wr);let u=zd(i,t,e,n,br,Sr,wr,$c);if(u){let f=new W;Mi.getBarycoord($c,br,Sr,wr,f),s&&(u.uv=Mi.getInterpolatedAttribute(s,o,c,h,f,new Ft)),r&&(u.uv1=Mi.getInterpolatedAttribute(r,o,c,h,f,new Ft)),a&&(u.normal=Mi.getInterpolatedAttribute(a,o,c,h,f,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:c,c:h,normal:new W,materialIndex:0};Mi.getNormal(br,Sr,wr,p.normal),u.face=p,u.barycoord=f}return u}var ln=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],f=[],p=0,l=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function x(v,g,d,b,S,M,z,U,F,V,E){let y=M/F,B=z/V,m=M/2,w=z/2,N=U/2,Y=F+1,R=V+1,C=0,T=0,q=new W;for(let Z=0;Z<R;Z++){let K=Z*B-w;for(let et=0;et<Y;et++){let Q=et*y-m;q[v]=Q*b,q[g]=K*S,q[d]=N,h.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[d]=U>0?1:-1,u.push(q.x,q.y,q.z),f.push(et/F),f.push(1-Z/V),C+=1}}for(let Z=0;Z<V;Z++)for(let K=0;K<F;K++){let et=p+K+Y*Z,Q=p+K+Y*(Z+1),H=p+(K+1)+Y*(Z+1),X=p+(K+1)+Y*Z;c.push(et,Q,X),c.push(Q,H,X),T+=6}o.addGroup(l,T,E),l+=T,p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=ls(i[e]);for(let s in n)t[s]=n[s]}return t}function Bd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Cn={clone:ls,merge:He},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends En{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Qr=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new W,Zc=new Ft,Jc=new Ft,Be=class extends Qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Zc,Jc),e.subVectors(Jc,Zc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,$i=1,Ka=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Yi,$i,t,e);s.layers=this.layers,this.add(s);let r=new Be(Yi,$i,t,e);r.layers=this.layers,this.add(r);let a=new Be(Yi,$i,t,e);a.layers=this.layers,this.add(a);let o=new Be(Yi,$i,t,e);o.layers=this.layers,this.add(o);let c=new Be(Yi,$i,t,e);c.layers=this.layers,this.add(c);let h=new Be(Yi,$i,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),l=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,p,l),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},jr=class extends Ye{constructor(t,e,n,s,r,a,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qa=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ln(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:wn});r.uniforms.tEquirect.value=e;let a=new jt(s,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=bn),new Ka(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},jo=new W,Vd=new W,Gd=new Yt,zn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=jo.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(jo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new Gn,Rr=new W,Ks=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],f=s[6],p=s[7],l=s[8],x=s[9],v=s[10],g=s[11],d=s[12],b=s[13],S=s[14],M=s[15];if(n[0].setComponents(c-r,p-h,g-l,M-d).normalize(),n[1].setComponents(c+r,p+h,g+l,M+d).normalize(),n[2].setComponents(c+a,p+u,g+x,M+b).normalize(),n[3].setComponents(c-a,p-u,g-x,M-b).normalize(),n[4].setComponents(c-o,p-f,g-v,M-S).normalize(),e===Bn)n[5].setComponents(c+o,p+f,g+v,M+S).normalize();else if(e===Xr)n[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wd(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,f=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,u),o.onUploadCallback();let l;if(h instanceof Float32Array)l=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?l=i.HALF_FLOAT:l=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)l=i.SHORT;else if(h instanceof Uint32Array)l=i.UNSIGNED_INT;else if(h instanceof Int32Array)l=i.INT;else if(h instanceof Int8Array)l=i.BYTE;else if(h instanceof Uint8Array)l=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)l=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:l,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,h){let u=c.array,f=c.updateRanges;if(i.bindBuffer(h,o),f.length===0)i.bufferSubData(h,0,u);else{f.sort((l,x)=>l.start-x.start);let p=0;for(let l=1;l<f.length;l++){let x=f[p],v=f[l];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++p,f[p]=v)}f.length=p+1;for(let l=0,x=f.length;l<x;l++){let v=f[l];i.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var cn=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,f=t/o,p=e/c,l=[],x=[],v=[],g=[];for(let d=0;d<u;d++){let b=d*p-a;for(let S=0;S<h;S++){let M=S*f-r;x.push(M,-b,0),v.push(0,0,1),g.push(S/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){let S=b+h*d,M=b+h*(d+1),z=b+1+h*(d+1),U=b+1+h*d;l.push(S,M,U),l.push(M,z,U)}this.setIndex(l),this.setAttribute("position",new Xt(x,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Xd,alphahash_pars_fragment:qd,alphamap_fragment:Yd,alphamap_pars_fragment:$d,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:Kd,aomap_pars_fragment:Qd,batching_pars_vertex:jd,batching_vertex:tf,begin_vertex:ef,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:of,clipping_planes_fragment:af,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:hf,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:xf,displacementmap_pars_vertex:_f,displacementmap_vertex:vf,emissivemap_fragment:yf,emissivemap_pars_fragment:Mf,colorspace_fragment:bf,colorspace_pars_fragment:Sf,envmap_fragment:wf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:zf,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:Pf,fog_fragment:If,fog_pars_fragment:Df,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Uf,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Ff,lights_pars_begin:Of,lights_toon_fragment:Bf,lights_toon_pars_fragment:kf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Kf,map_fragment:Qf,map_pars_fragment:jf,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:op,morphtarget_pars_vertex:ap,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:hp,normal_pars_fragment:up,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:yp,premultiplied_alpha_fragment:Mp,project_vertex:bp,dithering_fragment:Sp,dithering_pars_fragment:wp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Pp,skinbase_vertex:Ip,skinning_pars_vertex:Dp,skinning_vertex:Lp,skinnormal_vertex:Up,specularmap_fragment:Np,specularmap_pars_fragment:Fp,tonemapping_fragment:Op,tonemapping_pars_fragment:zp,transmission_fragment:Bp,transmission_pars_fragment:kp,uv_pars_fragment:Hp,uv_pars_vertex:Vp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:Xp,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:$p,cube_vert:Zp,cube_frag:Jp,depth_vert:Kp,depth_frag:Qp,distanceRGBA_vert:jp,distanceRGBA_frag:tm,equirect_vert:em,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:om,meshlambert_vert:am,meshlambert_frag:lm,meshmatcap_vert:cm,meshmatcap_frag:hm,meshnormal_vert:um,meshnormal_frag:dm,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:xm,meshtoon_frag:_m,points_vert:vm,points_frag:ym,shadow_vert:Mm,shadow_frag:bm,sprite_vert:Sm,sprite_frag:wm},Ct={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},yn={basic:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:He([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:He([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:He([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:He([Ct.points,Ct.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:He([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:He([Ct.common,Ct.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:He([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:He([Ct.sprite,Ct.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:He([Ct.common,Ct.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:He([Ct.lights,Ct.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};yn.physical={uniforms:He([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Cr={r:0,b:0,g:0},xi=new Ge,Em=new Kt;function Tm(i,t,e,n,s,r,a){let o=new Dt(0),c=r===!0?0:1,h,u,f=null,p=0,l=null;function x(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function v(b){let S=!1,M=x(b);M===null?d(o,c):M&&M.isColor&&(d(M,1),S=!0);let z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,a):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,S){let M=x(S);M&&(M.isCubeTexture||M.mapping===xo)?(u===void 0&&(u=new jt(new ln(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:ls(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(S.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(xi)),u.material.toneMapped=Qt.getTransfer(M.colorSpace)!==oe,(f!==M||p!==M.version||l!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,p=M.version,l=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new jt(new cn(2,2),new ve({name:"BackgroundMaterial",uniforms:ls(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(M.colorSpace)!==oe,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||l!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,l=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function d(b,S){b.getRGB(Cr,qh(i)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),c=S,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(o,c)},render:v,addToRenderList:g}}function Am(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(y,B,m,w,N){let Y=!1,R=f(w,m,B);r!==R&&(r=R,h(r.object)),Y=l(y,w,m,N),Y&&x(y,w,m,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(y,B,m,w),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,B,m){let w=m.wireframe===!0,N=n[y.id];N===void 0&&(N={},n[y.id]=N);let Y=N[B.id];Y===void 0&&(Y={},N[B.id]=Y);let R=Y[w];return R===void 0&&(R=p(c()),Y[w]=R),R}function p(y){let B=[],m=[],w=[];for(let N=0;N<e;N++)B[N]=0,m[N]=0,w[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:m,attributeDivisors:w,object:y,attributes:{},index:null}}function l(y,B,m,w){let N=r.attributes,Y=B.attributes,R=0,C=m.getAttributes();for(let T in C)if(C[T].location>=0){let Z=N[T],K=Y[T];if(K===void 0&&(T==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),T==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),Z===void 0||Z.attribute!==K||K&&Z.data!==K.data)return!0;R++}return r.attributesNum!==R||r.index!==w}function x(y,B,m,w){let N={},Y=B.attributes,R=0,C=m.getAttributes();for(let T in C)if(C[T].location>=0){let Z=Y[T];Z===void 0&&(T==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),T==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));let K={};K.attribute=Z,Z&&Z.data&&(K.data=Z.data),N[T]=K,R++}r.attributes=N,r.attributesNum=R,r.index=w}function v(){let y=r.newAttributes;for(let B=0,m=y.length;B<m;B++)y[B]=0}function g(y){d(y,0)}function d(y,B){let m=r.newAttributes,w=r.enabledAttributes,N=r.attributeDivisors;m[y]=1,w[y]===0&&(i.enableVertexAttribArray(y),w[y]=1),N[y]!==B&&(i.vertexAttribDivisor(y,B),N[y]=B)}function b(){let y=r.newAttributes,B=r.enabledAttributes;for(let m=0,w=B.length;m<w;m++)B[m]!==y[m]&&(i.disableVertexAttribArray(m),B[m]=0)}function S(y,B,m,w,N,Y,R){R===!0?i.vertexAttribIPointer(y,B,m,N,Y):i.vertexAttribPointer(y,B,m,w,N,Y)}function M(y,B,m,w){v();let N=w.attributes,Y=m.getAttributes(),R=B.defaultAttributeValues;for(let C in Y){let T=Y[C];if(T.location>=0){let q=N[C];if(q===void 0&&(C==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),C==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){let Z=q.normalized,K=q.itemSize,et=t.get(q);if(et===void 0)continue;let Q=et.buffer,H=et.type,X=et.bytesPerElement,G=H===i.INT||H===i.UNSIGNED_INT||q.gpuType===Ll;if(q.isInterleavedBufferAttribute){let rt=q.data,ct=rt.stride,xt=q.offset;if(rt.isInstancedInterleavedBuffer){for(let At=0;At<T.locationSize;At++)d(T.location+At,rt.meshPerAttribute);y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let At=0;At<T.locationSize;At++)g(T.location+At);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let At=0;At<T.locationSize;At++)S(T.location+At,K/T.locationSize,H,Z,ct*X,(xt+K/T.locationSize*At)*X,G)}else{if(q.isInstancedBufferAttribute){for(let rt=0;rt<T.locationSize;rt++)d(T.location+rt,q.meshPerAttribute);y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let rt=0;rt<T.locationSize;rt++)g(T.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let rt=0;rt<T.locationSize;rt++)S(T.location+rt,K/T.locationSize,H,Z,K*X,K/T.locationSize*rt*X,G)}}else if(R!==void 0){let Z=R[C];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(T.location,Z);break;case 3:i.vertexAttrib3fv(T.location,Z);break;case 4:i.vertexAttrib4fv(T.location,Z);break;default:i.vertexAttrib1fv(T.location,Z)}}}}b()}function z(){V();for(let y in n){let B=n[y];for(let m in B){let w=B[m];for(let N in w)u(w[N].object),delete w[N];delete B[m]}delete n[y]}}function U(y){if(n[y.id]===void 0)return;let B=n[y.id];for(let m in B){let w=B[m];for(let N in w)u(w[N].object),delete w[N];delete B[m]}delete n[y.id]}function F(y){for(let B in n){let m=n[B];if(m[y.id]===void 0)continue;let w=m[y.id];for(let N in w)u(w[N].object),delete w[N];delete m[y.id]}}function V(){E(),a=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:E,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function Rm(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,f){f!==0&&(i.drawArraysInstanced(n,h,u,f),e.update(u,n,f))}function o(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,f);let l=0;for(let x=0;x<f;x++)l+=u[x];e.update(l,n,1)}function c(h,u,f,p){if(f===0)return;let l=t.get("WEBGL_multi_draw");if(l===null)for(let x=0;x<h.length;x++)a(h[x],u[x],p[x]);else{l.multiDrawArraysInstancedWEBGL(n,h,0,u,0,p,0,f);let x=0;for(let v=0;v<f;v++)x+=u[v]*p[v];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==gn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let V=F===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Hn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Sn&&!V)}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=x>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:l,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:z,maxSamples:U}}function Pm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let l=f.length!==0||p||n!==0||s;return s=p,n=f.length,l},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,l){let x=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?u(null):h();else{let b=r?0:n,S=b*4,M=d.clippingState||null;c.value=M,M=u(x,p,S,l);for(let z=0;z!==S;++z)M[z]=e[z];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,p,l,x){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=c.value,x!==!0||g===null){let d=l+v*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let S=0,M=l;S!==v;++S,M+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Im(i){let t=new WeakMap;function e(a,o){return o===_a?a.mapping=ss:o===va&&(a.mapping=rs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===_a||o===va)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new Qa(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var cs=class extends Qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,Kc=[.125,.215,.35,.446,.526,.582],bi=20,ta=new cs,Qc=new Dt,ea=null,na=0,ia=0,sa=!1,vi=(1+Math.sqrt(5))/2,Zi=1/vi,jc=[new W(-vi,Zi,0),new W(vi,Zi,0),new W(-Zi,0,vi),new W(Zi,0,vi),new W(0,vi,-Zi),new W(0,vi,Zi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=sa,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:en,format:gn,colorSpace:ms,depthBuffer:!1},s=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(r)),this._blurMaterial=Lm(r,t,e)}return s}_compileMaterial(t){let e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,s){let o=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Qc),u.toneMapping=ei,u.autoClear=!1;let l=new xe({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),x=new jt(new ln,l),v=!1,g=t.background;g?g.isColor&&(l.color.copy(g),t.background=null,v=!0):(l.color.copy(Qc),v=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(o.up.set(0,c[d],0),o.lookAt(h[d],0,0)):b===1?(o.up.set(0,0,c[d]),o.lookAt(0,h[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,h[d]));let S=this._cubeSize;Pr(s,b*S,d>2?S:0,S,S),u.setRenderTarget(s),v&&u.render(x,o),u.render(t,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Pr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jc[(s-r-1)%jc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new jt(this._lodPlanes[s],h),p=h.uniforms,l=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*l):2*Math.PI/(2*bi-1),v=r/x,g=isFinite(r)?1+Math.floor(u*v):bi;g>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);let d=[],b=0;for(let F=0;F<bi;++F){let V=F/v,E=Math.exp(-V*V/2);d.push(E),F===0?b+=E:F<g&&(b+=2*E)}for(let F=0;F<d.length;F++)d[F]=d[F]/b;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:S}=this;p.dTheta.value=x,p.mipInt.value=S-n;let M=this._sizeLods[s],z=3*M*(s>S-Qi?s-S+Qi:0),U=4*(this._cubeSize-M);Pr(e,z,U,3*M,2*M),c.setRenderTarget(e),c.render(f,ta)}};function Dm(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+Kc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Qi?c=Kc[a-i+Qi-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],l=6,x=6,v=3,g=2,d=1,b=new Float32Array(v*x*l),S=new Float32Array(g*x*l),M=new Float32Array(d*x*l);for(let U=0;U<l;U++){let F=U%3*2/3-1,V=U>2?0:-1,E=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];b.set(E,v*x*U),S.set(p,g*x*U);let y=[U,U,U,U,U,U];M.set(y,d*x*U)}let z=new ae;z.setAttribute("position",new _e(b,v)),z.setAttribute("uv",new _e(S,g)),z.setAttribute("faceIndex",new _e(M,d)),t.push(z),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function th(i,t,e){let n=new Ne(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){let n=new Float32Array(bi),s=new W(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function eh(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function nh(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Um(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===_a||c===va,u=c===ss||c===rs;if(h||u){let f=t.get(o),p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new hs(i)),f=h?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let l=o.image;return h&&l&&l.height>0||u&&l&&s(l)?(e===null&&(e=new hs(i)),f=h?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Nm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,t,e,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);for(let x in p.morphAttributes){let v=p.morphAttributes[x];for(let g=0,d=v.length;g<d;g++)t.remove(v[g])}p.removeEventListener("dispose",a),delete s[p.id];let l=r.get(p);l&&(t.remove(l),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(f){let p=f.attributes;for(let x in p)t.update(p[x],i.ARRAY_BUFFER);let l=f.morphAttributes;for(let x in l){let v=l[x];for(let g=0,d=v.length;g<d;g++)t.update(v[g],i.ARRAY_BUFFER)}}function h(f){let p=[],l=f.index,x=f.attributes.position,v=0;if(l!==null){let b=l.array;v=l.version;for(let S=0,M=b.length;S<M;S+=3){let z=b[S+0],U=b[S+1],F=b[S+2];p.push(z,U,U,F,F,z)}}else if(x!==void 0){let b=x.array;v=x.version;for(let S=0,M=b.length/3-1;S<M;S+=3){let z=S+0,U=S+1,F=S+2;p.push(z,U,U,F,F,z)}}else return;let g=new(Wh(p)?Kr:Jr)(p,1);g.version=v;let d=r.get(f);d&&t.remove(d),r.set(f,g)}function u(f){let p=r.get(f);if(p){let l=f.index;l!==null&&p.version<l.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Om(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,l){i.drawElements(n,l,r,p*a),e.update(l,n,1)}function h(p,l,x){x!==0&&(i.drawElementsInstanced(n,l,r,p*a,x),e.update(l,n,x))}function u(p,l,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,p,0,x);let g=0;for(let d=0;d<x;d++)g+=l[d];e.update(g,n,1)}function f(p,l,x,v){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)h(p[d]/a,l[d],v[d]);else{g.multiDrawElementsInstancedWEBGL(n,l,0,r,p,0,v,0,x);let d=0;for(let b=0;b<x;b++)d+=l[b]*v[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bm(i,t,e){let n=new WeakMap,s=new ie;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==f){let E=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();let l=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;l===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let M=o.attributes.position.count*S,z=1;M>t.maxTextureSize&&(z=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let U=new Float32Array(M*z*4*f),F=new $r(U,M,z,f);F.type=Sn,F.needsUpdate=!0;let V=S*4;for(let y=0;y<f;y++){let B=g[y],m=d[y],w=b[y],N=M*z*4*y;for(let Y=0;Y<B.count;Y++){let R=Y*V;l===!0&&(s.fromBufferAttribute(B,Y),U[N+R+0]=s.x,U[N+R+1]=s.y,U[N+R+2]=s.z,U[N+R+3]=0),x===!0&&(s.fromBufferAttribute(m,Y),U[N+R+4]=s.x,U[N+R+5]=s.y,U[N+R+6]=s.z,U[N+R+7]=0),v===!0&&(s.fromBufferAttribute(w,Y),U[N+R+8]=s.x,U[N+R+9]=s.y,U[N+R+10]=s.z,U[N+R+11]=w.itemSize===4?s.w:1)}}p={count:f,texture:F,size:new Ft(M,z)},n.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let l=0;for(let v=0;v<h.length;v++)l+=h[v];let x=o.morphTargetsRelative?1:1-l;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function km(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var to=class extends Ye{constructor(t,e,n,s,r,a,o,c,h,u=ts){if(u!==ts&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=Ei),n===void 0&&u===as&&(n=os),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$h=new Ye,ih=new to(1,1),Zh=new $r,Jh=new Ja,Kh=new jr,sh=[],rh=[],oh=new Float32Array(16),ah=new Float32Array(9),lh=new Float32Array(4);function xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sh[s];if(r===void 0&&(r=new Float32Array(s),sh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vo(i,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Xm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;lh.set(n),i.uniformMatrix2fv(this.addr,!1,lh),Ae(e,n)}}function qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),Ae(e,n)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),Ae(e,n)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function n0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ih.compareFunction=Gh,r=ih):r=$h,e.setTexture2D(t||r,s)}function i0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kh,s)}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zh,s)}function o0(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return jm;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(i,t){i.uniform1fv(this.addr,t)}function l0(i,t){let e=xs(t,this.size,2);i.uniform2fv(this.addr,e)}function c0(i,t){let e=xs(t,this.size,3);i.uniform3fv(this.addr,e)}function h0(i,t){let e=xs(t,this.size,4);i.uniform4fv(this.addr,e)}function u0(i,t){let e=xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function d0(i,t){let e=xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function f0(i,t){let e=xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function p0(i,t){i.uniform1iv(this.addr,t)}function m0(i,t){i.uniform2iv(this.addr,t)}function g0(i,t){i.uniform3iv(this.addr,t)}function x0(i,t){i.uniform4iv(this.addr,t)}function _0(i,t){i.uniform1uiv(this.addr,t)}function v0(i,t){i.uniform2uiv(this.addr,t)}function y0(i,t){i.uniform3uiv(this.addr,t)}function M0(i,t){i.uniform4uiv(this.addr,t)}function b0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$h,r[a])}function S0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jh,r[a])}function w0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Kh,r[a])}function E0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zh,r[a])}function T0(i){switch(i){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return x0;case 5125:return _0;case 36294:return v0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return E0}}var ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o0(e.type)}},tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T0(e.type)}},el=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ra=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function A0(i,t,e){let n=i.name,s=n.length;for(ra.lastIndex=0;;){let r=ra.exec(n),a=ra.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){ch(e,h===void 0?new ja(o,i,t):new tl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new el(o),ch(e,f)),e=f}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);A0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function hh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var R0=37297,C0=0;function P0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var uh=new Yt;function I0(i){Qt._getMatrix(uh,Qt.workingColorSpace,i);let t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case _o:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+P0(i.getShaderSource(t),a)}else return s}function D0(i,t){let e=I0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function L0(i,t){let e;switch(t){case Rl:e="Linear";break;case Cl:e="Reinhard";break;case Pl:e="Cineon";break;case er:e="ACESFilmic";break;case Il:e="AgX";break;case Dl:e="Neutral";break;case Zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ir=new W;function U0(){Qt.getLuminanceCoefficients(Ir);let i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function F0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function O0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ws(i){return i!==""}function fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(z0,k0)}var B0=new Map;function k0(i,t){let e=Zt[t];if(e===void 0){let n=B0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}var H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace(H0,V0)}function V0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function G0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===go?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function W0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function X0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Al:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function Y0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=G0(e),h=W0(e),u=X0(e),f=q0(e),p=Y0(e),l=N0(e),x=F0(r),v=s.createProgram(),g,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ws).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ws).join(`
`),d.length>0&&(d+=`
`)):(g=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),d=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ei?L0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,D0("linearToOutputTexel",e.outputColorSpace),U0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),a=nl(a),a=fh(a,e),a=ph(a,e),o=nl(o),o=fh(o,e),o=ph(o,e),a=mh(a),o=mh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=b+g+a,M=b+d+o,z=hh(s,s.VERTEX_SHADER,S),U=hh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,z),s.attachShader(v,U),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function F(B){if(i.debug.checkShaderErrors){let m=s.getProgramInfoLog(v).trim(),w=s.getShaderInfoLog(z).trim(),N=s.getShaderInfoLog(U).trim(),Y=!0,R=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,z,U);else{let C=dh(s,z,"vertex"),T=dh(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+m+`
`+C+`
`+T)}else m!==""?console.warn("THREE.WebGLProgram: Program Info Log:",m):(w===""||N==="")&&(R=!1);R&&(B.diagnostics={runnable:Y,programLog:m,vertexShader:{log:w,prefix:g},fragmentShader:{log:N,prefix:d}})}s.deleteShader(z),s.deleteShader(U),V=new ns(s,v),E=O0(s,v)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,R0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=z,this.fragmentShader=U,this}var Z0=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sl(t),e.set(t,n)),n}},sl=class{constructor(t){this.id=Z0++,this.code=t,this.usedTimes=0}};function J0(i,t,e,n,s,r,a){let o=new Zr,c=new il,h=new Set,u=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures,l=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return h.add(E),E===0?"uv":`uv${E}`}function g(E,y,B,m,w){let N=m.fog,Y=w.geometry,R=E.isMeshStandardMaterial?m.environment:null,C=(E.isMeshStandardMaterial?e:t).get(E.envMap||R),T=C&&C.mapping===xo?C.image.height:null,q=x[E.type];E.precision!==null&&(l=s.getMaxPrecision(E.precision),l!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",l,"instead."));let Z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,K=Z!==void 0?Z.length:0,et=0;Y.morphAttributes.position!==void 0&&(et=1),Y.morphAttributes.normal!==void 0&&(et=2),Y.morphAttributes.color!==void 0&&(et=3);let Q,H,X,G;if(q){let te=yn[q];Q=te.vertexShader,H=te.fragmentShader}else Q=E.vertexShader,H=E.fragmentShader,c.update(E),X=c.getVertexShaderID(E),G=c.getFragmentShaderID(E);let rt=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),xt=w.isInstancedMesh===!0,At=w.isBatchedMesh===!0,Bt=!!E.map,vt=!!E.matcap,Tt=!!C,I=!!E.aoMap,ht=!!E.lightMap,nt=!!E.bumpMap,L=!!E.normalMap,$=!!E.displacementMap,pt=!!E.emissiveMap,dt=!!E.metalnessMap,A=!!E.roughnessMap,_=E.anisotropy>0,D=E.clearcoat>0,O=E.dispersion>0,it=E.iridescence>0,J=E.sheen>0,mt=E.transmission>0,lt=_&&!!E.anisotropyMap,gt=D&&!!E.clearcoatMap,zt=D&&!!E.clearcoatNormalMap,ft=D&&!!E.clearcoatRoughnessMap,Mt=it&&!!E.iridescenceMap,wt=it&&!!E.iridescenceThicknessMap,Pt=J&&!!E.sheenColorMap,bt=J&&!!E.sheenRoughnessMap,kt=!!E.specularMap,Ht=!!E.specularColorMap,ee=!!E.specularIntensityMap,k=mt&&!!E.transmissionMap,yt=mt&&!!E.thicknessMap,st=!!E.gradientMap,ut=!!E.alphaMap,Et=E.alphaTest>0,Rt=!!E.alphaHash,Vt=!!E.extensions,pe=ei;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Re={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:Q,fragmentShader:H,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:l,batching:At,batchingColor:At&&w._colorsTexture!==null,instancing:xt,instancingColor:xt&&w.instanceColor!==null,instancingMorph:xt&&w.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ms,alphaToCoverage:!!E.alphaToCoverage,map:Bt,matcap:vt,envMap:Tt,envMapMode:Tt&&C.mapping,envMapCubeUVHeight:T,aoMap:I,lightMap:ht,bumpMap:nt,normalMap:L,displacementMap:p&&$,emissiveMap:pt,normalMapObjectSpace:L&&E.normalMapType===ju,normalMapTangentSpace:L&&E.normalMapType===kl,metalnessMap:dt,roughnessMap:A,anisotropy:_,anisotropyMap:lt,clearcoat:D,clearcoatMap:gt,clearcoatNormalMap:zt,clearcoatRoughnessMap:ft,dispersion:O,iridescence:it,iridescenceMap:Mt,iridescenceThicknessMap:wt,sheen:J,sheenColorMap:Pt,sheenRoughnessMap:bt,specularMap:kt,specularColorMap:Ht,specularIntensityMap:ee,transmission:mt,transmissionMap:k,thicknessMap:yt,gradientMap:st,opaque:E.transparent===!1&&E.blending===ji&&E.alphaToCoverage===!1,alphaMap:ut,alphaTest:Et,alphaHash:Rt,combine:E.combine,mapUv:Bt&&v(E.map.channel),aoMapUv:I&&v(E.aoMap.channel),lightMapUv:ht&&v(E.lightMap.channel),bumpMapUv:nt&&v(E.bumpMap.channel),normalMapUv:L&&v(E.normalMap.channel),displacementMapUv:$&&v(E.displacementMap.channel),emissiveMapUv:pt&&v(E.emissiveMap.channel),metalnessMapUv:dt&&v(E.metalnessMap.channel),roughnessMapUv:A&&v(E.roughnessMap.channel),anisotropyMapUv:lt&&v(E.anisotropyMap.channel),clearcoatMapUv:gt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:zt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(E.sheenRoughnessMap.channel),specularMapUv:kt&&v(E.specularMap.channel),specularColorMapUv:Ht&&v(E.specularColorMap.channel),specularIntensityMapUv:ee&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:yt&&v(E.thicknessMap.channel),alphaMapUv:ut&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(L||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!Y.attributes.uv&&(Bt||ut),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ct,skinning:w.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:et,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Bt&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===oe,decodeVideoTextureEmissive:pt&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===we,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Vt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&E.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Re.vertexUv1s=h.has(1),Re.vertexUv2s=h.has(2),Re.vertexUv3s=h.has(3),h.clear(),Re}function d(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let B in E.defines)y.push(B),y.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(b(y,E),S(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function b(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){let y=x[E.type],B;if(y){let m=yn[y];B=Cn.clone(m.uniforms)}else B=E.uniforms;return B}function z(E,y){let B;for(let m=0,w=u.length;m<w;m++){let N=u[m];if(N.cacheKey===y){B=N,++B.usedTimes;break}}return B===void 0&&(B=new $0(i,y,E,r),u.push(B)),B}function U(E){if(--E.usedTimes===0){let y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function F(E){c.remove(E)}function V(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:z,releaseProgram:U,releaseShaderCache:F,programs:u,dispose:V}}function K0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _h(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,p,l,x,v,g){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:l,groupOrder:x,renderOrder:f.renderOrder,z:v,group:g},i[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=l,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=v,d.group=g),t++,d}function o(f,p,l,x,v,g){let d=a(f,p,l,x,v,g);l.transmission>0?n.push(d):l.transparent===!0?s.push(d):e.push(d)}function c(f,p,l,x,v,g){let d=a(f,p,l,x,v,g);l.transmission>0?n.unshift(d):l.transparent===!0?s.unshift(d):e.unshift(d)}function h(f,p){e.length>1&&e.sort(f||Q0),n.length>1&&n.sort(p||xh),s.length>1&&s.sort(p||xh)}function u(){for(let f=t,p=i.length;f<p;f++){let l=i[f];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function j0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _h,i.set(n,[a])):s>=r.length?(a=new _h,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Dt};break;case"SpotLight":e={position:new W,direction:new W,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ng=0;function ig(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sg(i){let t=new tg,e=eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new W);let s=new W,r=new Kt,a=new Kt;function o(h){let u=0,f=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let l=0,x=0,v=0,g=0,d=0,b=0,S=0,M=0,z=0,U=0,F=0;h.sort(ig);for(let E=0,y=h.length;E<y;E++){let B=h[E],m=B.color,w=B.intensity,N=B.distance,Y=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=m.r*w,f+=m.g*w,p+=m.b*w;else if(B.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(B.sh.coefficients[R],w);F++}else if(B.isDirectionalLight){let R=t.get(B);if(R.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let C=B.shadow,T=e.get(B);T.shadowIntensity=C.intensity,T.shadowBias=C.bias,T.shadowNormalBias=C.normalBias,T.shadowRadius=C.radius,T.shadowMapSize=C.mapSize,n.directionalShadow[l]=T,n.directionalShadowMap[l]=Y,n.directionalShadowMatrix[l]=B.shadow.matrix,b++}n.directional[l]=R,l++}else if(B.isSpotLight){let R=t.get(B);R.position.setFromMatrixPosition(B.matrixWorld),R.color.copy(m).multiplyScalar(w),R.distance=N,R.coneCos=Math.cos(B.angle),R.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),R.decay=B.decay,n.spot[v]=R;let C=B.shadow;if(B.map&&(n.spotLightMap[z]=B.map,z++,C.updateMatrices(B),B.castShadow&&U++),n.spotLightMatrix[v]=C.matrix,B.castShadow){let T=e.get(B);T.shadowIntensity=C.intensity,T.shadowBias=C.bias,T.shadowNormalBias=C.normalBias,T.shadowRadius=C.radius,T.shadowMapSize=C.mapSize,n.spotShadow[v]=T,n.spotShadowMap[v]=Y,M++}v++}else if(B.isRectAreaLight){let R=t.get(B);R.color.copy(m).multiplyScalar(w),R.halfWidth.set(B.width*.5,0,0),R.halfHeight.set(0,B.height*.5,0),n.rectArea[g]=R,g++}else if(B.isPointLight){let R=t.get(B);if(R.color.copy(B.color).multiplyScalar(B.intensity),R.distance=B.distance,R.decay=B.decay,B.castShadow){let C=B.shadow,T=e.get(B);T.shadowIntensity=C.intensity,T.shadowBias=C.bias,T.shadowNormalBias=C.normalBias,T.shadowRadius=C.radius,T.shadowMapSize=C.mapSize,T.shadowCameraNear=C.camera.near,T.shadowCameraFar=C.camera.far,n.pointShadow[x]=T,n.pointShadowMap[x]=Y,n.pointShadowMatrix[x]=B.shadow.matrix,S++}n.point[x]=R,x++}else if(B.isHemisphereLight){let R=t.get(B);R.skyColor.copy(B.color).multiplyScalar(w),R.groundColor.copy(B.groundColor).multiplyScalar(w),n.hemi[d]=R,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=p;let V=n.hash;(V.directionalLength!==l||V.pointLength!==x||V.spotLength!==v||V.rectAreaLength!==g||V.hemiLength!==d||V.numDirectionalShadows!==b||V.numPointShadows!==S||V.numSpotShadows!==M||V.numSpotMaps!==z||V.numLightProbes!==F)&&(n.directional.length=l,n.spot.length=v,n.rectArea.length=g,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+z-U,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=F,V.directionalLength=l,V.pointLength=x,V.spotLength=v,V.rectAreaLength=g,V.hemiLength=d,V.numDirectionalShadows=b,V.numPointShadows=S,V.numSpotShadows=M,V.numSpotMaps=z,V.numLightProbes=F,n.version=ng++)}function c(h,u){let f=0,p=0,l=0,x=0,v=0,g=u.matrixWorldInverse;for(let d=0,b=h.length;d<b;d++){let S=h[d];if(S.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(S.isSpotLight){let M=n.spot[l];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),l++}else if(S.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),p++}else if(S.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function vh(i){let t=new sg(i),e=[],n=[];function s(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function rg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new vh(i),t.set(s,[o])):r>=a.length?(o=new vh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var rl=class extends En{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ol=class extends En{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lg(i,t,e){let n=new Ks,s=new Ft,r=new Ft,a=new ie,o=new rl({depthPacking:Qu}),c=new ol,h={},u=e.maxTextureSize,f={[ni]:we,[we]:ni,[Ie]:Ie},p=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:og,fragmentShader:ag}),l=p.clone();l.defines.HORIZONTAL_PASS=1;let x=new ae;x.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new jt(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let d=this.type;this.render=function(U,F,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;let E=i.getRenderTarget(),y=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),m=i.state;m.setBlending(wn),m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let w=d!==On&&this.type===On,N=d===On&&this.type!==On;for(let Y=0,R=U.length;Y<R;Y++){let C=U[Y],T=C.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);let q=T.getFrameExtents();if(s.multiply(q),r.copy(T.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,T.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,T.mapSize.y=r.y)),T.map===null||w===!0||N===!0){let K=this.type!==On?{minFilter:je,magFilter:je}:{};T.map!==null&&T.map.dispose(),T.map=new Ne(s.x,s.y,K),T.map.texture.name=C.name+".shadowMap",T.camera.updateProjectionMatrix()}i.setRenderTarget(T.map),i.clear();let Z=T.getViewportCount();for(let K=0;K<Z;K++){let et=T.getViewport(K);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),m.viewport(a),T.updateMatrices(C,K),n=T.getFrustum(),M(F,V,T.camera,C,this.type)}T.isPointLightShadow!==!0&&this.type===On&&b(T,V),T.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(E,y,B)};function b(U,F){let V=t.update(v);p.defines.VSM_SAMPLES!==U.blurSamples&&(p.defines.VSM_SAMPLES=U.blurSamples,l.defines.VSM_SAMPLES=U.blurSamples,p.needsUpdate=!0,l.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ne(s.x,s.y)),p.uniforms.shadow_pass.value=U.map.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(F,null,V,p,v,null),l.uniforms.shadow_pass.value=U.mapPass.texture,l.uniforms.resolution.value=U.mapSize,l.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(F,null,V,l,v,null)}function S(U,F,V,E){let y=null,B=V.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)y=B;else if(y=V.isPointLight===!0?c:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let m=y.uuid,w=F.uuid,N=h[m];N===void 0&&(N={},h[m]=N);let Y=N[w];Y===void 0&&(Y=y.clone(),N[w]=Y,F.addEventListener("dispose",z)),y=Y}if(y.visible=F.visible,y.wireframe=F.wireframe,E===On?y.side=F.shadowSide!==null?F.shadowSide:F.side:y.side=F.shadowSide!==null?F.shadowSide:f[F.side],y.alphaMap=F.alphaMap,y.alphaTest=F.alphaTest,y.map=F.map,y.clipShadows=F.clipShadows,y.clippingPlanes=F.clippingPlanes,y.clipIntersection=F.clipIntersection,y.displacementMap=F.displacementMap,y.displacementScale=F.displacementScale,y.displacementBias=F.displacementBias,y.wireframeLinewidth=F.wireframeLinewidth,y.linewidth=F.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let m=i.properties.get(y);m.light=V}return y}function M(U,F,V,E,y){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&y===On)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,U.matrixWorld);let w=t.update(U),N=U.material;if(Array.isArray(N)){let Y=w.groups;for(let R=0,C=Y.length;R<C;R++){let T=Y[R],q=N[T.materialIndex];if(q&&q.visible){let Z=S(U,q,E,y);U.onBeforeShadow(i,U,F,V,w,Z,T),i.renderBufferDirect(V,null,w,Z,U,T),U.onAfterShadow(i,U,F,V,w,Z,T)}}}else if(N.visible){let Y=S(U,N,E,y);U.onBeforeShadow(i,U,F,V,w,Y,null),i.renderBufferDirect(V,null,w,Y,U,null),U.onAfterShadow(i,U,F,V,w,Y,null)}}let m=U.children;for(let w=0,N=m.length;w<N;w++)M(m[w],F,V,E,y)}function z(U){U.target.removeEventListener("dispose",z);for(let V in h){let E=h[V],y=U.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}var cg={[ua]:da,[fa]:ga,[pa]:xa,[is]:ma,[da]:ua,[ga]:fa,[xa]:pa,[ma]:is};function hg(i,t){function e(){let k=!1,yt=new ie,st=null,ut=new ie(0,0,0,0);return{setMask:function(Et){st!==Et&&!k&&(i.colorMask(Et,Et,Et,Et),st=Et)},setLocked:function(Et){k=Et},setClear:function(Et,Rt,Vt,pe,Re){Re===!0&&(Et*=pe,Rt*=pe,Vt*=pe),yt.set(Et,Rt,Vt,pe),ut.equals(yt)===!1&&(i.clearColor(Et,Rt,Vt,pe),ut.copy(yt))},reset:function(){k=!1,st=null,ut.set(-1,0,0,0)}}}function n(){let k=!1,yt=!1,st=null,ut=null,Et=null;return{setReversed:function(Rt){if(yt!==Rt){let Vt=t.get("EXT_clip_control");yt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let pe=Et;Et=null,this.setClear(pe)}yt=Rt},getReversed:function(){return yt},setTest:function(Rt){Rt?rt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(Rt){st!==Rt&&!k&&(i.depthMask(Rt),st=Rt)},setFunc:function(Rt){if(yt&&(Rt=cg[Rt]),ut!==Rt){switch(Rt){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Rt}},setLocked:function(Rt){k=Rt},setClear:function(Rt){Et!==Rt&&(yt&&(Rt=1-Rt),i.clearDepth(Rt),Et=Rt)},reset:function(){k=!1,st=null,ut=null,Et=null,yt=!1}}}function s(){let k=!1,yt=null,st=null,ut=null,Et=null,Rt=null,Vt=null,pe=null,Re=null;return{setTest:function(te){k||(te?rt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(te){yt!==te&&!k&&(i.stencilMask(te),yt=te)},setFunc:function(te,Fe,Ue){(st!==te||ut!==Fe||Et!==Ue)&&(i.stencilFunc(te,Fe,Ue),st=te,ut=Fe,Et=Ue)},setOp:function(te,Fe,Ue){(Rt!==te||Vt!==Fe||pe!==Ue)&&(i.stencilOp(te,Fe,Ue),Rt=te,Vt=Fe,pe=Ue)},setLocked:function(te){k=te},setClear:function(te){Re!==te&&(i.clearStencil(te),Re=te)},reset:function(){k=!1,yt=null,st=null,ut=null,Et=null,Rt=null,Vt=null,pe=null,Re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,u={},f={},p=new WeakMap,l=[],x=null,v=!1,g=null,d=null,b=null,S=null,M=null,z=null,U=null,F=new Dt(0,0,0),V=0,E=!1,y=null,B=null,m=null,w=null,N=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,C=0,T=i.getParameter(i.VERSION);T.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(T)[1]),R=C>=1):T.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),R=C>=2);let q=null,Z={},K=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),Q=new ie().fromArray(K),H=new ie().fromArray(et);function X(k,yt,st,ut){let Et=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(k,Rt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<st;Vt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(yt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Rt}let G={};G[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(is),nt(!1),L(Mc),rt(i.CULL_FACE),I(wn);function rt(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ct(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function xt(k,yt){return f[k]!==yt?(i.bindFramebuffer(k,yt),f[k]=yt,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=yt),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function At(k,yt){let st=l,ut=!1;if(k){st=p.get(yt),st===void 0&&(st=[],p.set(yt,st));let Et=k.textures;if(st.length!==Et.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Vt=Et.length;Rt<Vt;Rt++)st[Rt]=i.COLOR_ATTACHMENT0+Rt;st.length=Et.length,ut=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ut=!0);ut&&i.drawBuffers(st)}function Bt(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let vt={[yi]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};vt[Du]=i.MIN,vt[Lu]=i.MAX;let Tt={[Uu]:i.ZERO,[Nu]:i.ONE,[Fu]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[Xu]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function I(k,yt,st,ut,Et,Rt,Vt,pe,Re,te){if(k===wn){v===!0&&(ct(i.BLEND),v=!1);return}if(v===!1&&(rt(i.BLEND),v=!0),k!==Cu){if(k!==g||te!==E){if((d!==yi||M!==yi)&&(i.blendEquation(i.FUNC_ADD),d=yi,M=yi),te)switch(k){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gr:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,S=null,z=null,U=null,F.set(0,0,0),V=0,g=k,E=te}return}Et=Et||yt,Rt=Rt||st,Vt=Vt||ut,(yt!==d||Et!==M)&&(i.blendEquationSeparate(vt[yt],vt[Et]),d=yt,M=Et),(st!==b||ut!==S||Rt!==z||Vt!==U)&&(i.blendFuncSeparate(Tt[st],Tt[ut],Tt[Rt],Tt[Vt]),b=st,S=ut,z=Rt,U=Vt),(pe.equals(F)===!1||Re!==V)&&(i.blendColor(pe.r,pe.g,pe.b,Re),F.copy(pe),V=Re),g=k,E=!1}function ht(k,yt){k.side===Ie?ct(i.CULL_FACE):rt(i.CULL_FACE);let st=k.side===we;yt&&(st=!st),nt(st),k.blending===ji&&k.transparent===!1?I(wn):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ut=k.stencilWrite;o.setTest(ut),ut&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),pt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function L(k){k!==Tu?(rt(i.CULL_FACE),k!==B&&(k===Mc?i.cullFace(i.BACK):k===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),B=k}function $(k){k!==m&&(R&&i.lineWidth(k),m=k)}function pt(k,yt,st){k?(rt(i.POLYGON_OFFSET_FILL),(w!==yt||N!==st)&&(i.polygonOffset(yt,st),w=yt,N=st)):ct(i.POLYGON_OFFSET_FILL)}function dt(k){k?rt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function A(k){k===void 0&&(k=i.TEXTURE0+Y-1),q!==k&&(i.activeTexture(k),q=k)}function _(k,yt,st){st===void 0&&(q===null?st=i.TEXTURE0+Y-1:st=q);let ut=Z[st];ut===void 0&&(ut={type:void 0,texture:void 0},Z[st]=ut),(ut.type!==k||ut.texture!==yt)&&(q!==st&&(i.activeTexture(st),q=st),i.bindTexture(k,yt||G[k]),ut.type=k,ut.texture=yt)}function D(){let k=Z[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function O(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){Q.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Q.copy(k))}function bt(k){H.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),H.copy(k))}function kt(k,yt){let st=h.get(yt);st===void 0&&(st=new WeakMap,h.set(yt,st));let ut=st.get(k);ut===void 0&&(ut=i.getUniformBlockIndex(yt,k.name),st.set(k,ut))}function Ht(k,yt){let ut=h.get(yt).get(k);c.get(yt)!==ut&&(i.uniformBlockBinding(yt,ut,k.__bindingPointIndex),c.set(yt,ut))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},q=null,Z={},f={},p=new WeakMap,l=[],x=null,v=!1,g=null,d=null,b=null,S=null,M=null,z=null,U=null,F=new Dt(0,0,0),V=0,E=!1,y=null,B=null,m=null,w=null,N=null,Q.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:ct,bindFramebuffer:xt,drawBuffers:At,useProgram:Bt,setBlending:I,setMaterial:ht,setFlipSided:nt,setCullFace:L,setLineWidth:$,setPolygonOffset:pt,setScissorTest:dt,activeTexture:A,bindTexture:_,unbindTexture:D,compressedTexImage2D:O,compressedTexImage3D:it,texImage2D:Mt,texImage3D:wt,updateUBOMapping:kt,uniformBlockBinding:Ht,texStorage2D:zt,texStorage3D:ft,texSubImage2D:J,texSubImage3D:mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:gt,scissor:Pt,viewport:bt,reset:ee}}function yh(i,t,e,n){let s=ug(n);switch(e){case Oh:return i*t;case Bh:return i*t;case kh:return i*t*2;case Fl:return i*t/s.components*s.byteLength;case Ol:return i*t/s.components*s.byteLength;case Hh:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case zh:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case Bl:return i*t*4/s.components*s.byteLength;case zr:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case wa:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case Sa:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vr:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vh:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(i){switch(i){case Hn:case Uh:return{byteLength:1,components:1};case $s:case Nh:case en:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case Ei:case Ll:case Sn:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ft,u=new WeakMap,f,p=new WeakMap,l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return l?new OffscreenCanvas(A,_):qr("canvas")}function v(A,_,D){let O=1,it=dt(A);if((it.width>D||it.height>D)&&(O=D/Math.max(it.width,it.height)),O<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(O*it.width),mt=Math.floor(O*it.height);f===void 0&&(f=x(J,mt));let lt=_?x(J,mt):f;return lt.width=J,lt.height=mt,lt.getContext("2d").drawImage(A,0,0,J,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+mt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function g(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,_,D,O,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=_;if(_===i.RED&&(D===i.FLOAT&&(J=i.R32F),D===i.HALF_FLOAT&&(J=i.R16F),D===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(J=i.R8UI),D===i.UNSIGNED_SHORT&&(J=i.R16UI),D===i.UNSIGNED_INT&&(J=i.R32UI),D===i.BYTE&&(J=i.R8I),D===i.SHORT&&(J=i.R16I),D===i.INT&&(J=i.R32I)),_===i.RG&&(D===i.FLOAT&&(J=i.RG32F),D===i.HALF_FLOAT&&(J=i.RG16F),D===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(J=i.RG8UI),D===i.UNSIGNED_SHORT&&(J=i.RG16UI),D===i.UNSIGNED_INT&&(J=i.RG32UI),D===i.BYTE&&(J=i.RG8I),D===i.SHORT&&(J=i.RG16I),D===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(J=i.RGB8UI),D===i.UNSIGNED_SHORT&&(J=i.RGB16UI),D===i.UNSIGNED_INT&&(J=i.RGB32UI),D===i.BYTE&&(J=i.RGB8I),D===i.SHORT&&(J=i.RGB16I),D===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),D===i.UNSIGNED_INT&&(J=i.RGBA32UI),D===i.BYTE&&(J=i.RGBA8I),D===i.SHORT&&(J=i.RGBA16I),D===i.INT&&(J=i.RGBA32I)),_===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),_===i.RGBA){let mt=it?_o:Qt.getTransfer(O);D===i.FLOAT&&(J=i.RGBA32F),D===i.HALF_FLOAT&&(J=i.RGBA16F),D===i.UNSIGNED_BYTE&&(J=mt===oe?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(A,_){let D;return A?_===null||_===Ei||_===os?D=i.DEPTH24_STENCIL8:_===Sn?D=i.DEPTH32F_STENCIL8:_===$s&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ei||_===os?D=i.DEPTH_COMPONENT24:_===Sn?D=i.DEPTH_COMPONENT32F:_===$s&&(D=i.DEPTH_COMPONENT16),D}function z(A,_){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==je&&A.minFilter!==bn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function U(A){let _=A.target;_.removeEventListener("dispose",U),V(_),_.isVideoTexture&&u.delete(_)}function F(A){let _=A.target;_.removeEventListener("dispose",F),y(_)}function V(A){let _=n.get(A);if(_.__webglInit===void 0)return;let D=A.source,O=p.get(D);if(O){let it=O[_.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(A),Object.keys(O).length===0&&p.delete(D)}n.remove(A)}function E(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let D=A.source,O=p.get(D);delete O[_.__cacheKey],a.memory.textures--}function y(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let it=0;it<_.__webglFramebuffer[O].length;it++)i.deleteFramebuffer(_.__webglFramebuffer[O][it]);else i.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)i.deleteFramebuffer(_.__webglFramebuffer[O]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let D=A.textures;for(let O=0,it=D.length;O<it;O++){let J=n.get(D[O]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(D[O])}n.remove(A)}let B=0;function m(){B=0}function w(){let A=B;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function N(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Y(A,_){let D=n.get(A);if(A.isVideoTexture&&$(A),A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){let O=A.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(D,A,_);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+_)}function R(A,_){let D=n.get(A);if(A.version>0&&D.__version!==A.version){H(D,A,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+_)}function C(A,_){let D=n.get(A);if(A.version>0&&D.__version!==A.version){H(D,A,_);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+_)}function T(A,_){let D=n.get(A);if(A.version>0&&D.__version!==A.version){X(D,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+_)}let q={[tn]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},Z={[je]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},K={[td]:i.NEVER,[od]:i.ALWAYS,[ed]:i.LESS,[Gh]:i.LEQUAL,[nd]:i.EQUAL,[rd]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function et(A,_){if(_.type===Sn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===bn||_.magFilter===Do||_.magFilter===ur||_.magFilter===wi||_.minFilter===bn||_.minFilter===Do||_.minFilter===ur||_.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,q[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Z[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Z[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,K[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===je||_.minFilter!==ur&&_.minFilter!==wi||_.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Q(A,_){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",U));let O=_.source,it=p.get(O);it===void 0&&(it={},p.set(O,it));let J=N(_);if(J!==A.__cacheKey){it[J]===void 0&&(it[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),it[J].usedTimes++;let mt=it[A.__cacheKey];mt!==void 0&&(it[A.__cacheKey].usedTimes--,mt.usedTimes===0&&E(_)),A.__cacheKey=J,A.__webglTexture=it[J].texture}return D}function H(A,_,D){let O=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=i.TEXTURE_3D);let it=Q(A,_),J=_.source;e.bindTexture(O,A.__webglTexture,i.TEXTURE0+D);let mt=n.get(J);if(J.version!==mt.__version||it===!0){e.activeTexture(i.TEXTURE0+D);let lt=Qt.getPrimaries(Qt.workingColorSpace),gt=_.colorSpace===Mn?null:Qt.getPrimaries(_.colorSpace),zt=_.colorSpace===Mn||lt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ft=v(_.image,!1,s.maxTextureSize);ft=pt(_,ft);let Mt=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),Pt=S(_.internalFormat,Mt,wt,_.colorSpace,_.isVideoTexture);et(O,_);let bt,kt=_.mipmaps,Ht=_.isVideoTexture!==!0,ee=mt.__version===void 0||it===!0,k=J.dataReady,yt=z(_,ft);if(_.isDepthTexture)Pt=M(_.format===as,_.type),ee&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Pt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ft.width,ft.height,0,Mt,wt,null));else if(_.isDataTexture)if(kt.length>0){Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,kt[0].width,kt[0].height);for(let st=0,ut=kt.length;st<ut;st++)bt=kt[st],Ht?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,bt.width,bt.height,Mt,wt,bt.data):e.texImage2D(i.TEXTURE_2D,st,Pt,bt.width,bt.height,0,Mt,wt,bt.data);_.generateMipmaps=!1}else Ht?(ee&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,ft.width,ft.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Mt,wt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,ft.width,ft.height,0,Mt,wt,ft.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ht&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,kt[0].width,kt[0].height,ft.depth);for(let st=0,ut=kt.length;st<ut;st++)if(bt=kt[st],_.format!==gn)if(Mt!==null)if(Ht){if(k)if(_.layerUpdates.size>0){let Et=yh(bt.width,bt.height,_.format,_.type);for(let Rt of _.layerUpdates){let Vt=bt.data.subarray(Rt*Et/bt.data.BYTES_PER_ELEMENT,(Rt+1)*Et/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Rt,bt.width,bt.height,1,Mt,Vt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,bt.width,bt.height,ft.depth,Mt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Pt,bt.width,bt.height,ft.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,bt.width,bt.height,ft.depth,Mt,wt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Pt,bt.width,bt.height,ft.depth,0,Mt,wt,bt.data)}else{Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,kt[0].width,kt[0].height);for(let st=0,ut=kt.length;st<ut;st++)bt=kt[st],_.format!==gn?Mt!==null?Ht?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Pt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,bt.width,bt.height,Mt,wt,bt.data):e.texImage2D(i.TEXTURE_2D,st,Pt,bt.width,bt.height,0,Mt,wt,bt.data)}else if(_.isDataArrayTexture)if(Ht){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,ft.width,ft.height,ft.depth),k)if(_.layerUpdates.size>0){let st=yh(ft.width,ft.height,_.format,_.type);for(let ut of _.layerUpdates){let Et=ft.data.subarray(ut*st/ft.data.BYTES_PER_ELEMENT,(ut+1)*st/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,ft.width,ft.height,1,Mt,wt,Et)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Mt,wt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ft.width,ft.height,ft.depth,0,Mt,wt,ft.data);else if(_.isData3DTexture)Ht?(ee&&e.texStorage3D(i.TEXTURE_3D,yt,Pt,ft.width,ft.height,ft.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Mt,wt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ft.width,ft.height,ft.depth,0,Mt,wt,ft.data);else if(_.isFramebufferTexture){if(ee)if(Ht)e.texStorage2D(i.TEXTURE_2D,yt,Pt,ft.width,ft.height);else{let st=ft.width,ut=ft.height;for(let Et=0;Et<yt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Pt,st,ut,0,Mt,wt,null),st>>=1,ut>>=1}}else if(kt.length>0){if(Ht&&ee){let st=dt(kt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Pt,st.width,st.height)}for(let st=0,ut=kt.length;st<ut;st++)bt=kt[st],Ht?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Mt,wt,bt):e.texImage2D(i.TEXTURE_2D,st,Pt,Mt,wt,bt);_.generateMipmaps=!1}else if(Ht){if(ee){let st=dt(ft);e.texStorage2D(i.TEXTURE_2D,yt,Pt,st.width,st.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,wt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Mt,wt,ft);g(_)&&d(O),mt.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function X(A,_,D){if(_.image.length!==6)return;let O=Q(A,_),it=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+D);let J=n.get(it);if(it.version!==J.__version||O===!0){e.activeTexture(i.TEXTURE0+D);let mt=Qt.getPrimaries(Qt.workingColorSpace),lt=_.colorSpace===Mn?null:Qt.getPrimaries(_.colorSpace),gt=_.colorSpace===Mn||mt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let zt=_.isCompressedTexture||_.image[0].isCompressedTexture,ft=_.image[0]&&_.image[0].isDataTexture,Mt=[];for(let ut=0;ut<6;ut++)!zt&&!ft?Mt[ut]=v(_.image[ut],!0,s.maxCubemapSize):Mt[ut]=ft?_.image[ut].image:_.image[ut],Mt[ut]=pt(_,Mt[ut]);let wt=Mt[0],Pt=r.convert(_.format,_.colorSpace),bt=r.convert(_.type),kt=S(_.internalFormat,Pt,bt,_.colorSpace),Ht=_.isVideoTexture!==!0,ee=J.__version===void 0||O===!0,k=it.dataReady,yt=z(_,wt);et(i.TEXTURE_CUBE_MAP,_);let st;if(zt){Ht&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,kt,wt.width,wt.height);for(let ut=0;ut<6;ut++){st=Mt[ut].mipmaps;for(let Et=0;Et<st.length;Et++){let Rt=st[Et];_.format!==gn?Pt!==null?Ht?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et,0,0,Rt.width,Rt.height,Pt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et,kt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et,0,0,Rt.width,Rt.height,Pt,bt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et,kt,Rt.width,Rt.height,0,Pt,bt,Rt.data)}}}else{if(st=_.mipmaps,Ht&&ee){st.length>0&&yt++;let ut=dt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,kt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(ft){Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Mt[ut].width,Mt[ut].height,Pt,bt,Mt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,kt,Mt[ut].width,Mt[ut].height,0,Pt,bt,Mt[ut].data);for(let Et=0;Et<st.length;Et++){let Vt=st[Et].image[ut].image;Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et+1,0,0,Vt.width,Vt.height,Pt,bt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et+1,kt,Vt.width,Vt.height,0,Pt,bt,Vt.data)}}else{Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Pt,bt,Mt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,kt,Pt,bt,Mt[ut]);for(let Et=0;Et<st.length;Et++){let Rt=st[Et];Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et+1,0,0,Pt,bt,Rt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et+1,kt,Pt,bt,Rt.image[ut])}}}g(_)&&d(i.TEXTURE_CUBE_MAP),J.__version=it.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function G(A,_,D,O,it,J){let mt=r.convert(D.format,D.colorSpace),lt=r.convert(D.type),gt=S(D.internalFormat,mt,lt,D.colorSpace),zt=n.get(_),ft=n.get(D);if(ft.__renderTarget=_,!zt.__hasExternalTextures){let Mt=Math.max(1,_.width>>J),wt=Math.max(1,_.height>>J);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,J,gt,Mt,wt,_.depth,0,mt,lt,null):e.texImage2D(it,J,gt,Mt,wt,0,mt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),L(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,it,ft.__webglTexture,0,nt(_)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,it,ft.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,_,D){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let O=_.depthTexture,it=O&&O.isDepthTexture?O.type:null,J=M(_.stencilBuffer,it),mt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=nt(_);L(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,J,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let O=_.textures;for(let it=0;it<O.length;it++){let J=O[it],mt=r.convert(J.format,J.colorSpace),lt=r.convert(J.type),gt=S(J.internalFormat,mt,lt,J.colorSpace),zt=nt(_);D&&L(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,gt,_.width,_.height):L(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,gt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,gt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(_.depthTexture);O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);let it=O.__webglTexture,J=nt(_);if(_.depthTexture.format===ts)L(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(_.depthTexture.format===as)L(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function xt(A){let _=n.get(A),D=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let O=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){let it=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",it)};O.addEventListener("dispose",it),_.__depthDisposeCallback=it}_.__boundDepthTexture=O}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ct(_.__webglFramebuffer,A)}else if(D){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=i.createRenderbuffer(),rt(_.__webglDepthbuffer[O],A,!1);else{let it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),rt(_.__webglDepthbuffer,A,!1);else{let O=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,_,D){let O=n.get(A);_!==void 0&&G(O.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&xt(A)}function Bt(A){let _=A.texture,D=n.get(A),O=n.get(_);A.addEventListener("dispose",F);let it=A.textures,J=A.isWebGLCubeRenderTarget===!0,mt=it.length>1;if(mt||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=_.version,a.memory.textures++),J){D.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[lt]=[];for(let gt=0;gt<_.mipmaps.length;gt++)D.__webglFramebuffer[lt][gt]=i.createFramebuffer()}else D.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)D.__webglFramebuffer[lt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(mt)for(let lt=0,gt=it.length;lt<gt;lt++){let zt=n.get(it[lt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&L(A)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let lt=0;lt<it.length;lt++){let gt=it[lt];D.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[lt]);let zt=r.convert(gt.format,gt.colorSpace),ft=r.convert(gt.type),Mt=S(gt.internalFormat,zt,ft,gt.colorSpace,A.isXRRenderTarget===!0),wt=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,D.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(D.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),et(i.TEXTURE_CUBE_MAP,_);for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)G(D.__webglFramebuffer[lt][gt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt);else G(D.__webglFramebuffer[lt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let lt=0,gt=it.length;lt<gt;lt++){let zt=it[lt],ft=n.get(zt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),et(i.TEXTURE_2D,zt),G(D.__webglFramebuffer,A,zt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),g(zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,O.__webglTexture),et(lt,_),_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)G(D.__webglFramebuffer[gt],A,_,i.COLOR_ATTACHMENT0,lt,gt);else G(D.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,lt,0);g(_)&&d(lt),e.unbindTexture()}A.depthBuffer&&xt(A)}function vt(A){let _=A.textures;for(let D=0,O=_.length;D<O;D++){let it=_[D];if(g(it)){let J=b(A),mt=n.get(it).__webglTexture;e.bindTexture(J,mt),d(J),e.unbindTexture()}}}let Tt=[],I=[];function ht(A){if(A.samples>0){if(L(A)===!1){let _=A.textures,D=A.width,O=A.height,it=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),lt=_.length>1;if(lt)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let zt=n.get(_[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,D,O,0,0,D,O,it,i.NEAREST),c===!0&&(Tt.length=0,I.length=0,Tt.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Tt.push(J),I.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let zt=n.get(_[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function nt(A){return Math.min(s.maxSamples,A.samples)}function L(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $(A){let _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function pt(A,_){let D=A.colorSpace,O=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==ms&&D!==Mn&&(Qt.getTransfer(D)===oe?(O!==gn||it!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=w,this.resetTextureUnits=m,this.setTexture2D=Y,this.setTexture2DArray=R,this.setTexture3D=C,this.setTextureCube=T,this.rebindTextures=At,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=G,this.useMultisampledRTT=L}function fg(i,t){function e(n,s=Mn){let r,a=Qt.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===zh)return i.RGB;if(n===gn)return i.RGBA;if(n===Bh)return i.LUMINANCE;if(n===kh)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Fl)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===Hh)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===zr||n===Br||n===kr||n===Hr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===ba||n===Sa||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===Ia||n===Da||n===La||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vr)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var al=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Jt=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},pg={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),d=this._getHandJoint(h,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),l=.02,x=.005;h.inputState.pinching&&p>l+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=l-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:mg,fragmentShader:gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cl=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,p=null,l=null,x=null,v=new ll,g=e.getContextAttributes(),d=null,b=null,S=[],M=[],z=new Ft,U=null,F=new Be;F.viewport=new ie;let V=new Be;V.viewport=new ie;let E=[F,V],y=new al,B=null,m=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=S[H];return X===void 0&&(X=new Ys,S[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=S[H];return X===void 0&&(X=new Ys,S[H]=X),X.getGripSpace()},this.getHand=function(H){let X=S[H];return X===void 0&&(X=new Ys,S[H]=X),X.getHandSpace()};function w(H){let X=M.indexOf(H.inputSource);if(X===-1)return;let G=S[X];G!==void 0&&(G.update(H.inputSource,H.frame,h||a),G.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",Y);for(let H=0;H<S.length;H++){let X=M[H];X!==null&&(M[H]=null,S[H].disconnect(X))}B=null,m=null,v.reset(),t.setRenderTarget(d),l=null,p=null,f=null,s=null,b=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(H){h=H},this.getBaseLayer=function(){return p!==null?p:l},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",N),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){let X={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};l=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:l}),t.setPixelRatio(1),t.setSize(l.framebufferWidth,l.framebufferHeight,!1),b=new Ne(l.framebufferWidth,l.framebufferHeight,{format:gn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,G=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=g.stencil?as:ts,G=g.stencil?os:Ei);let ct={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(ct),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Ne(p.textureWidth,p.textureHeight,{format:gn,type:Hn,depthTexture:new to(p.textureWidth,p.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(H){for(let X=0;X<H.removed.length;X++){let G=H.removed[X],rt=M.indexOf(G);rt>=0&&(M[rt]=null,S[rt].disconnect(G))}for(let X=0;X<H.added.length;X++){let G=H.added[X],rt=M.indexOf(G);if(rt===-1){for(let xt=0;xt<S.length;xt++)if(xt>=M.length){M.push(G),rt=xt;break}else if(M[xt]===null){M[xt]=G,rt=xt;break}if(rt===-1)break}let ct=S[rt];ct&&ct.connect(G)}}let R=new W,C=new W;function T(H,X,G){R.setFromMatrixPosition(X.matrixWorld),C.setFromMatrixPosition(G.matrixWorld);let rt=R.distanceTo(C),ct=X.projectionMatrix.elements,xt=G.projectionMatrix.elements,At=ct[14]/(ct[10]-1),Bt=ct[14]/(ct[10]+1),vt=(ct[9]+1)/ct[5],Tt=(ct[9]-1)/ct[5],I=(ct[8]-1)/ct[0],ht=(xt[8]+1)/xt[0],nt=At*I,L=At*ht,$=rt/(-I+ht),pt=$*-I;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(pt),H.translateZ($),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ct[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let dt=At+$,A=Bt+$,_=nt-pt,D=L+(rt-pt),O=vt*Bt/A*dt,it=Tt*Bt/A*dt;H.projectionMatrix.makePerspective(_,D,O,it,dt,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function q(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let X=H.near,G=H.far;v.texture!==null&&(v.depthNear>0&&(X=v.depthNear),v.depthFar>0&&(G=v.depthFar)),y.near=V.near=F.near=X,y.far=V.far=F.far=G,(B!==y.near||m!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),B=y.near,m=y.far),F.layers.mask=H.layers.mask|2,V.layers.mask=H.layers.mask|4,y.layers.mask=F.layers.mask|V.layers.mask;let rt=H.parent,ct=y.cameras;q(y,rt);for(let xt=0;xt<ct.length;xt++)q(ct[xt],rt);ct.length===2?T(y,F,V):y.projectionMatrix.copy(F.projectionMatrix),Z(H,y,rt)};function Z(H,X,G){G===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(G.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Zs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&l===null))return c},this.setFoveation=function(H){c=H,p!==null&&(p.fixedFoveation=H),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let K=null;function et(H,X){if(u=X.getViewerPose(h||a),x=X,u!==null){let G=u.views;l!==null&&(t.setRenderTargetFramebuffer(b,l.framebuffer),t.setRenderTarget(b));let rt=!1;G.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let xt=0;xt<G.length;xt++){let At=G[xt],Bt=null;if(l!==null)Bt=l.getViewport(At);else{let Tt=f.getViewSubImage(p,At);Bt=Tt.viewport,xt===0&&(t.setRenderTargetTextures(b,Tt.colorTexture,p.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(b))}let vt=E[xt];vt===void 0&&(vt=new Be,vt.layers.enable(xt),vt.viewport=new ie,E[xt]=vt),vt.matrix.fromArray(At.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(At.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),xt===0&&(y.matrix.copy(vt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(vt)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){let xt=f.getDepthInformation(G[0]);xt&&xt.isValid&&xt.texture&&v.init(t,xt,s.renderState)}}for(let G=0;G<S.length;G++){let rt=M[G],ct=S[G];rt!==null&&ct!==void 0&&ct.update(rt,X,h||a)}K&&K(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),x=null}let Q=new Yh;Q.setAnimationLoop(et),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}},_i=new Ge,xg=new Kt;function _g(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,qh(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,b,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&l(g,d,M)):d.isMeshMatcapMaterial?(r(g,d),x(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,b,S):d.isSpriteMaterial?h(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===we&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===we&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let b=t.get(d),S=b.envMap,M=b.envMapRotation;S&&(g.envMap.value=S,_i.copy(M),_i.x*=-1,_i.y*=-1,_i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),g.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(_i)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,b,S){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=S*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function l(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===we&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){let b=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let M=S.program;n.uniformBlockBinding(b,M)}function h(b,S){let M=s[b.id];M===void 0&&(x(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",g));let z=S.program;n.updateUBOMapping(b,z);let U=t.render.frame;r[b.id]!==U&&(p(b),r[b.id]=U)}function u(b){let S=f();b.__bindingPointIndex=S;let M=i.createBuffer(),z=b.__size,U=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,z,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){let S=s[b.id],M=b.uniforms,z=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let U=0,F=M.length;U<F;U++){let V=Array.isArray(M[U])?M[U]:[M[U]];for(let E=0,y=V.length;E<y;E++){let B=V[E];if(l(B,U,E,z)===!0){let m=B.__offset,w=Array.isArray(B.value)?B.value:[B.value],N=0;for(let Y=0;Y<w.length;Y++){let R=w[Y],C=v(R);typeof R=="number"||typeof R=="boolean"?(B.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,m+N,B.__data)):R.isMatrix3?(B.__data[0]=R.elements[0],B.__data[1]=R.elements[1],B.__data[2]=R.elements[2],B.__data[3]=0,B.__data[4]=R.elements[3],B.__data[5]=R.elements[4],B.__data[6]=R.elements[5],B.__data[7]=0,B.__data[8]=R.elements[6],B.__data[9]=R.elements[7],B.__data[10]=R.elements[8],B.__data[11]=0):(R.toArray(B.__data,N),N+=C.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,m,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function l(b,S,M,z){let U=b.value,F=S+"_"+M;if(z[F]===void 0)return typeof U=="number"||typeof U=="boolean"?z[F]=U:z[F]=U.clone(),!0;{let V=z[F];if(typeof U=="number"||typeof U=="boolean"){if(V!==U)return z[F]=U,!0}else if(V.equals(U)===!1)return V.copy(U),!0}return!1}function x(b){let S=b.uniforms,M=0,z=16;for(let F=0,V=S.length;F<V;F++){let E=Array.isArray(S[F])?S[F]:[S[F]];for(let y=0,B=E.length;y<B;y++){let m=E[y],w=Array.isArray(m.value)?m.value:[m.value];for(let N=0,Y=w.length;N<Y;N++){let R=w[N],C=v(R),T=M%z,q=T%C.boundary,Z=T+q;M+=q,Z!==0&&z-Z<C.storage&&(M+=z-Z),m.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),m.__offset=M,M+=C.storage}}}let U=M%z;return U>0&&(M+=z-U),b.__size=M,b.__cache={},this}function v(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function g(b){let S=b.target;S.removeEventListener("dispose",g);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:h,dispose:d}}var eo=class{constructor(t={}){let{canvas:e=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let l;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=n.getContextAttributes().alpha}else l=a;let x=new Uint32Array(4),v=new Int32Array(4),g=null,d=null,b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=ei,this.toneMappingExposure=1;let M=this,z=!1,U=0,F=0,V=null,E=-1,y=null,B=new ie,m=new ie,w=null,N=new Dt(0),Y=0,R=e.width,C=e.height,T=1,q=null,Z=null,K=new ie(0,0,R,C),et=new ie(0,0,R,C),Q=!1,H=new Ks,X=!1,G=!1,rt=new Kt,ct=new Kt,xt=new W,At=new ie,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function Tt(){return V===null?T:1}let I=n;function ht(P,j){return e.getContext(P,j)}try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tl}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),I===null){let j="webgl2";if(I=ht(j,P),I===null)throw ht(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let nt,L,$,pt,dt,A,_,D,O,it,J,mt,lt,gt,zt,ft,Mt,wt,Pt,bt,kt,Ht,ee,k;function yt(){nt=new Nm(I),nt.init(),Ht=new fg(I,nt),L=new Cm(I,nt,t,Ht),$=new hg(I,nt),L.reverseDepthBuffer&&p&&$.buffers.depth.setReversed(!0),pt=new zm(I),dt=new K0,A=new dg(I,nt,$,dt,L,Ht,pt),_=new Im(M),D=new Um(M),O=new Wd(I),ee=new Am(I,O),it=new Fm(I,O,pt,ee),J=new km(I,it,O,pt),Pt=new Bm(I,L,A),ft=new Pm(dt),mt=new J0(M,_,D,nt,L,ee,ft),lt=new _g(M,dt),gt=new j0,zt=new rg(nt),wt=new Tm(M,_,D,$,J,l,c),Mt=new lg(M,J,L),k=new vg(I,pt,L,$),bt=new Rm(I,nt,pt),kt=new Om(I,nt,pt),pt.programs=mt.programs,M.capabilities=L,M.extensions=nt,M.properties=dt,M.renderLists=gt,M.shadowMap=Mt,M.state=$,M.info=pt}yt();let st=new cl(M,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let P=nt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=nt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(P){P!==void 0&&(T=P,this.setSize(R,C,!1))},this.getSize=function(P){return P.set(R,C)},this.setSize=function(P,j,ot=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=P,C=j,e.width=Math.floor(P*T),e.height=Math.floor(j*T),ot===!0&&(e.style.width=P+"px",e.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(R*T,C*T).floor()},this.setDrawingBufferSize=function(P,j,ot){R=P,C=j,T=ot,e.width=Math.floor(P*ot),e.height=Math.floor(j*ot),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(K)},this.setViewport=function(P,j,ot,at){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,j,ot,at),$.viewport(B.copy(K).multiplyScalar(T).round())},this.getScissor=function(P){return P.copy(et)},this.setScissor=function(P,j,ot,at){P.isVector4?et.set(P.x,P.y,P.z,P.w):et.set(P,j,ot,at),$.scissor(m.copy(et).multiplyScalar(T).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(P){$.setScissorTest(Q=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(P=!0,j=!0,ot=!0){let at=0;if(P){let tt=!1;if(V!==null){let St=V.texture.format;tt=St===Bl||St===zl||St===Ol}if(tt){let St=V.texture.type,It=St===Hn||St===Ei||St===$s||St===os||St===Ul||St===Nl,Lt=wt.getClearColor(),Ut=wt.getClearAlpha(),Gt=Lt.r,qt=Lt.g,Nt=Lt.b;It?(x[0]=Gt,x[1]=qt,x[2]=Nt,x[3]=Ut,I.clearBufferuiv(I.COLOR,0,x)):(v[0]=Gt,v[1]=qt,v[2]=Nt,v[3]=Ut,I.clearBufferiv(I.COLOR,0,v))}else at|=I.COLOR_BUFFER_BIT}j&&(at|=I.DEPTH_BUFFER_BIT),ot&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),gt.dispose(),zt.dispose(),dt.dispose(),_.dispose(),D.dispose(),J.dispose(),ee.dispose(),k.dispose(),mt.dispose(),st.dispose(),st.removeEventListener("sessionstart",fc),st.removeEventListener("sessionend",pc),di.stop()};function ut(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let P=pt.autoReset,j=Mt.enabled,ot=Mt.autoUpdate,at=Mt.needsUpdate,tt=Mt.type;yt(),pt.autoReset=P,Mt.enabled=j,Mt.autoUpdate=ot,Mt.needsUpdate=at,Mt.type=tt}function Rt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){let j=P.target;j.removeEventListener("dispose",Vt),pe(j)}function pe(P){Re(P),dt.remove(P)}function Re(P){let j=dt.get(P).programs;j!==void 0&&(j.forEach(function(ot){mt.releaseProgram(ot)}),P.isShaderMaterial&&mt.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,ot,at,tt,St){j===null&&(j=Bt);let It=tt.isMesh&&tt.matrixWorld.determinant()<0,Lt=Su(P,j,ot,at,tt);$.setMaterial(at,It);let Ut=ot.index,Gt=1;if(at.wireframe===!0){if(Ut=it.getWireframeAttribute(ot),Ut===void 0)return;Gt=2}let qt=ot.drawRange,Nt=ot.attributes.position,ne=qt.start*Gt,ce=(qt.start+qt.count)*Gt;St!==null&&(ne=Math.max(ne,St.start*Gt),ce=Math.min(ce,(St.start+St.count)*Gt)),Ut!==null?(ne=Math.max(ne,0),ce=Math.min(ce,Ut.count)):Nt!=null&&(ne=Math.max(ne,0),ce=Math.min(ce,Nt.count));let ue=ce-ne;if(ue<0||ue===1/0)return;ee.setup(tt,at,Lt,ot,Ut);let qe,se=bt;if(Ut!==null&&(qe=O.get(Ut),se=kt,se.setIndex(qe)),tt.isMesh)at.wireframe===!0?($.setLineWidth(at.wireframeLinewidth*Tt()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(tt.isLine){let Ot=at.linewidth;Ot===void 0&&(Ot=1),$.setLineWidth(Ot*Tt()),tt.isLineSegments?se.setMode(I.LINES):tt.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else tt.isPoints?se.setMode(I.POINTS):tt.isSprite&&se.setMode(I.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)se.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))se.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Ot=tt._multiDrawStarts,In=tt._multiDrawCounts,re=tt._multiDrawCount,dn=Ut?O.get(Ut).bytesPerElement:1,Ni=dt.get(at).currentProgram.getUniforms();for(let Je=0;Je<re;Je++)Ni.setValue(I,"_gl_DrawID",Je),se.render(Ot[Je]/dn,In[Je])}else if(tt.isInstancedMesh)se.renderInstances(ne,ue,tt.count);else if(ot.isInstancedBufferGeometry){let Ot=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,In=Math.min(ot.instanceCount,Ot);se.renderInstances(ne,ue,In)}else se.render(ne,ue)};function te(P,j,ot){P.transparent===!0&&P.side===Ie&&P.forceSinglePass===!1?(P.side=we,P.needsUpdate=!0,hr(P,j,ot),P.side=ni,P.needsUpdate=!0,hr(P,j,ot),P.side=Ie):hr(P,j,ot)}this.compile=function(P,j,ot=null){ot===null&&(ot=P),d=zt.get(ot),d.init(j),S.push(d),ot.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(d.pushLight(tt),tt.castShadow&&d.pushShadow(tt))}),P!==ot&&P.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(d.pushLight(tt),tt.castShadow&&d.pushShadow(tt))}),d.setupLights();let at=new Set;return P.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let St=tt.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let Lt=St[It];te(Lt,ot,tt),at.add(Lt)}else te(St,ot,tt),at.add(St)}),S.pop(),d=null,at},this.compileAsync=function(P,j,ot=null){let at=this.compile(P,j,ot);return new Promise(tt=>{function St(){if(at.forEach(function(It){dt.get(It).currentProgram.isReady()&&at.delete(It)}),at.size===0){tt(P);return}setTimeout(St,10)}nt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Fe=null;function Ue(P){Fe&&Fe(P)}function fc(){di.stop()}function pc(){di.start()}let di=new Yh;di.setAnimationLoop(Ue),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(P){Fe=P,st.setAnimationLoop(P),P===null?di.stop():di.start()},st.addEventListener("sessionstart",fc),st.addEventListener("sessionend",pc),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(j),j=st.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,j,V),d=zt.get(P,S.length),d.init(j),S.push(d),ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H.setFromProjectionMatrix(ct),G=this.localClippingEnabled,X=ft.init(this.clippingPlanes,G),g=gt.get(P,b.length),g.init(),b.push(g),st.enabled===!0&&st.isPresenting===!0){let St=M.xr.getDepthSensingMesh();St!==null&&Io(St,j,-1/0,M.sortObjects)}Io(P,j,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(q,Z),vt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,vt&&wt.addToRenderList(g,P),this.info.render.frame++,X===!0&&ft.beginShadows();let ot=d.state.shadowsArray;Mt.render(ot,P,j),X===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let at=g.opaque,tt=g.transmissive;if(d.setupLights(),j.isArrayCamera){let St=j.cameras;if(tt.length>0)for(let It=0,Lt=St.length;It<Lt;It++){let Ut=St[It];gc(at,tt,P,Ut)}vt&&wt.render(P);for(let It=0,Lt=St.length;It<Lt;It++){let Ut=St[It];mc(g,P,Ut,Ut.viewport)}}else tt.length>0&&gc(at,tt,P,j),vt&&wt.render(P),mc(g,P,j);V!==null&&(A.updateMultisampleRenderTarget(V),A.updateRenderTargetMipmap(V)),P.isScene===!0&&P.onAfterRender(M,P,j),ee.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(d=S[S.length-1],X===!0&&ft.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Io(P,j,ot,at){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)ot=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||H.intersectsSprite(P)){at&&At.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ct);let It=J.update(P),Lt=P.material;Lt.visible&&g.push(P,It,Lt,ot,At.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||H.intersectsObject(P))){let It=J.update(P),Lt=P.material;if(at&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),At.copy(P.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),At.copy(It.boundingSphere.center)),At.applyMatrix4(P.matrixWorld).applyMatrix4(ct)),Array.isArray(Lt)){let Ut=It.groups;for(let Gt=0,qt=Ut.length;Gt<qt;Gt++){let Nt=Ut[Gt],ne=Lt[Nt.materialIndex];ne&&ne.visible&&g.push(P,It,ne,ot,At.z,Nt)}}else Lt.visible&&g.push(P,It,Lt,ot,At.z,null)}}let St=P.children;for(let It=0,Lt=St.length;It<Lt;It++)Io(St[It],j,ot,at)}function mc(P,j,ot,at){let tt=P.opaque,St=P.transmissive,It=P.transparent;d.setupLightsView(ot),X===!0&&ft.setGlobalState(M.clippingPlanes,ot),at&&$.viewport(B.copy(at)),tt.length>0&&cr(tt,j,ot),St.length>0&&cr(St,j,ot),It.length>0&&cr(It,j,ot),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function gc(P,j,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[at.id]===void 0&&(d.state.transmissionRenderTarget[at.id]=new Ne(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?en:Hn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let St=d.state.transmissionRenderTarget[at.id],It=at.viewport||B;St.setSize(It.z,It.w);let Lt=M.getRenderTarget();M.setRenderTarget(St),M.getClearColor(N),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),vt&&wt.render(ot);let Ut=M.toneMapping;M.toneMapping=ei;let Gt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),d.setupLightsView(at),X===!0&&ft.setGlobalState(M.clippingPlanes,at),cr(P,ot,at),A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St),nt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Nt=0,ne=j.length;Nt<ne;Nt++){let ce=j[Nt],ue=ce.object,qe=ce.geometry,se=ce.material,Ot=ce.group;if(se.side===Ie&&ue.layers.test(at.layers)){let In=se.side;se.side=we,se.needsUpdate=!0,xc(ue,ot,at,qe,se,Ot),se.side=In,se.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St))}M.setRenderTarget(Lt),M.setClearColor(N,Y),Gt!==void 0&&(at.viewport=Gt),M.toneMapping=Ut}function cr(P,j,ot){let at=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,St=P.length;tt<St;tt++){let It=P[tt],Lt=It.object,Ut=It.geometry,Gt=at===null?It.material:at,qt=It.group;Lt.layers.test(ot.layers)&&xc(Lt,j,ot,Ut,Gt,qt)}}function xc(P,j,ot,at,tt,St){P.onBeforeRender(M,j,ot,at,tt,St),P.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),tt.onBeforeRender(M,j,ot,at,P,St),tt.transparent===!0&&tt.side===Ie&&tt.forceSinglePass===!1?(tt.side=we,tt.needsUpdate=!0,M.renderBufferDirect(ot,j,at,tt,P,St),tt.side=ni,tt.needsUpdate=!0,M.renderBufferDirect(ot,j,at,tt,P,St),tt.side=Ie):M.renderBufferDirect(ot,j,at,tt,P,St),P.onAfterRender(M,j,ot,at,tt,St)}function hr(P,j,ot){j.isScene!==!0&&(j=Bt);let at=dt.get(P),tt=d.state.lights,St=d.state.shadowsArray,It=tt.state.version,Lt=mt.getParameters(P,tt.state,St,j,ot),Ut=mt.getProgramCacheKey(Lt),Gt=at.programs;at.environment=P.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(P.isMeshStandardMaterial?D:_).get(P.envMap||at.environment),at.envMapRotation=at.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,Gt===void 0&&(P.addEventListener("dispose",Vt),Gt=new Map,at.programs=Gt);let qt=Gt.get(Ut);if(qt!==void 0){if(at.currentProgram===qt&&at.lightsStateVersion===It)return vc(P,Lt),qt}else Lt.uniforms=mt.getUniforms(P),P.onBeforeCompile(Lt,M),qt=mt.acquireProgram(Lt,Ut),Gt.set(Ut,qt),at.uniforms=Lt.uniforms;let Nt=at.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Nt.clippingPlanes=ft.uniform),vc(P,Lt),at.needsLights=Eu(P),at.lightsStateVersion=It,at.needsLights&&(Nt.ambientLightColor.value=tt.state.ambient,Nt.lightProbe.value=tt.state.probe,Nt.directionalLights.value=tt.state.directional,Nt.directionalLightShadows.value=tt.state.directionalShadow,Nt.spotLights.value=tt.state.spot,Nt.spotLightShadows.value=tt.state.spotShadow,Nt.rectAreaLights.value=tt.state.rectArea,Nt.ltc_1.value=tt.state.rectAreaLTC1,Nt.ltc_2.value=tt.state.rectAreaLTC2,Nt.pointLights.value=tt.state.point,Nt.pointLightShadows.value=tt.state.pointShadow,Nt.hemisphereLights.value=tt.state.hemi,Nt.directionalShadowMap.value=tt.state.directionalShadowMap,Nt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Nt.spotShadowMap.value=tt.state.spotShadowMap,Nt.spotLightMatrix.value=tt.state.spotLightMatrix,Nt.spotLightMap.value=tt.state.spotLightMap,Nt.pointShadowMap.value=tt.state.pointShadowMap,Nt.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=qt,at.uniformsList=null,qt}function _c(P){if(P.uniformsList===null){let j=P.currentProgram.getUniforms();P.uniformsList=ns.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function vc(P,j){let ot=dt.get(P);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function Su(P,j,ot,at,tt){j.isScene!==!0&&(j=Bt),A.resetTextureUnits();let St=j.fog,It=at.isMeshStandardMaterial?j.environment:null,Lt=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ms,Ut=(at.isMeshStandardMaterial?D:_).get(at.envMap||It),Gt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,qt=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Nt=!!ot.morphAttributes.position,ne=!!ot.morphAttributes.normal,ce=!!ot.morphAttributes.color,ue=ei;at.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ue=M.toneMapping);let qe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,se=qe!==void 0?qe.length:0,Ot=dt.get(at),In=d.state.lights;if(X===!0&&(G===!0||P!==y)){let on=P===y&&at.id===E;ft.setState(at,P,on)}let re=!1;at.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==In.state.version||Ot.outputColorSpace!==Lt||tt.isBatchedMesh&&Ot.batching===!1||!tt.isBatchedMesh&&Ot.batching===!0||tt.isBatchedMesh&&Ot.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Ot.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Ot.instancing===!1||!tt.isInstancedMesh&&Ot.instancing===!0||tt.isSkinnedMesh&&Ot.skinning===!1||!tt.isSkinnedMesh&&Ot.skinning===!0||tt.isInstancedMesh&&Ot.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Ot.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Ot.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Ot.instancingMorph===!1&&tt.morphTexture!==null||Ot.envMap!==Ut||at.fog===!0&&Ot.fog!==St||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ft.numPlanes||Ot.numIntersection!==ft.numIntersection)||Ot.vertexAlphas!==Gt||Ot.vertexTangents!==qt||Ot.morphTargets!==Nt||Ot.morphNormals!==ne||Ot.morphColors!==ce||Ot.toneMapping!==ue||Ot.morphTargetsCount!==se)&&(re=!0):(re=!0,Ot.__version=at.version);let dn=Ot.currentProgram;re===!0&&(dn=hr(at,j,tt));let Ni=!1,Je=!1,Ls=!1,de=dn.getUniforms(),vn=Ot.uniforms;if($.useProgram(dn.program)&&(Ni=!0,Je=!0,Ls=!0),at.id!==E&&(E=at.id,Je=!0),Ni||y!==P){$.buffers.depth.getReversed()?(rt.copy(P.projectionMatrix),Ed(rt),Td(rt),de.setValue(I,"projectionMatrix",rt)):de.setValue(I,"projectionMatrix",P.projectionMatrix),de.setValue(I,"viewMatrix",P.matrixWorldInverse);let Yn=de.map.cameraPosition;Yn!==void 0&&Yn.setValue(I,xt.setFromMatrixPosition(P.matrixWorld)),L.logarithmicDepthBuffer&&de.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&de.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,Je=!0,Ls=!0)}if(tt.isSkinnedMesh){de.setOptional(I,tt,"bindMatrix"),de.setOptional(I,tt,"bindMatrixInverse");let on=tt.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),de.setValue(I,"boneTexture",on.boneTexture,A))}tt.isBatchedMesh&&(de.setOptional(I,tt,"batchingTexture"),de.setValue(I,"batchingTexture",tt._matricesTexture,A),de.setOptional(I,tt,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",tt._indirectTexture,A),de.setOptional(I,tt,"batchingColorTexture"),tt._colorsTexture!==null&&de.setValue(I,"batchingColorTexture",tt._colorsTexture,A));let Us=ot.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&Pt.update(tt,ot,dn),(Je||Ot.receiveShadow!==tt.receiveShadow)&&(Ot.receiveShadow=tt.receiveShadow,de.setValue(I,"receiveShadow",tt.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(vn.envMap.value=Ut,vn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(vn.envMapIntensity.value=j.environmentIntensity),Je&&(de.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ot.needsLights&&wu(vn,Ls),St&&at.fog===!0&&lt.refreshFogUniforms(vn,St),lt.refreshMaterialUniforms(vn,at,T,C,d.state.transmissionRenderTarget[P.id]),ns.upload(I,_c(Ot),vn,A)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ns.upload(I,_c(Ot),vn,A),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&de.setValue(I,"center",tt.center),de.setValue(I,"modelViewMatrix",tt.modelViewMatrix),de.setValue(I,"normalMatrix",tt.normalMatrix),de.setValue(I,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){let on=at.uniformsGroups;for(let Yn=0,$n=on.length;Yn<$n;Yn++){let yc=on[Yn];k.update(yc,dn),k.bind(yc,dn)}}return dn}function wu(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Eu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,j,ot){dt.get(P.texture).__webglTexture=j,dt.get(P.depthTexture).__webglTexture=ot;let at=dt.get(P);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=ot===void 0,at.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,j){let ot=dt.get(P);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,ot=0){V=P,U=j,F=ot;let at=!0,tt=null,St=!1,It=!1;if(P){let Ut=dt.get(P);if(Ut.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(I.FRAMEBUFFER,null),at=!1;else if(Ut.__webglFramebuffer===void 0)A.setupRenderTarget(P);else if(Ut.__hasExternalTextures)A.rebindTextures(P,dt.get(P.texture).__webglTexture,dt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Nt=P.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&dt.has(Nt)&&(P.width!==Nt.image.width||P.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(P)}}let Gt=P.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(It=!0);let qt=dt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qt[j])?tt=qt[j][ot]:tt=qt[j],St=!0):P.samples>0&&A.useMultisampledRTT(P)===!1?tt=dt.get(P).__webglMultisampledFramebuffer:Array.isArray(qt)?tt=qt[ot]:tt=qt,B.copy(P.viewport),m.copy(P.scissor),w=P.scissorTest}else B.copy(K).multiplyScalar(T).floor(),m.copy(et).multiplyScalar(T).floor(),w=Q;if($.bindFramebuffer(I.FRAMEBUFFER,tt)&&at&&$.drawBuffers(P,tt),$.viewport(B),$.scissor(m),$.setScissorTest(w),St){let Ut=dt.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ut.__webglTexture,ot)}else if(It){let Ut=dt.get(P.texture),Gt=j||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ut.__webglTexture,ot||0,Gt)}E=-1},this.readRenderTargetPixels=function(P,j,ot,at,tt,St,It){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=dt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){$.bindFramebuffer(I.FRAMEBUFFER,Lt);try{let Ut=P.texture,Gt=Ut.format,qt=Ut.type;if(!L.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-at&&ot>=0&&ot<=P.height-tt&&I.readPixels(j,ot,at,tt,Ht.convert(Gt),Ht.convert(qt),St)}finally{let Ut=V!==null?dt.get(V).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(P,j,ot,at,tt,St,It){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=dt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){let Ut=P.texture,Gt=Ut.format,qt=Ut.type;if(!L.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=P.width-at&&ot>=0&&ot<=P.height-tt){$.bindFramebuffer(I.FRAMEBUFFER,Lt);let Nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),I.readPixels(j,ot,at,tt,Ht.convert(Gt),Ht.convert(qt),0);let ne=V!==null?dt.get(V).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,ne);let ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wd(I,ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.deleteBuffer(Nt),I.deleteSync(ce),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,j=null,ot=0){P.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1]);let at=Math.pow(2,-ot),tt=Math.floor(P.image.width*at),St=Math.floor(P.image.height*at),It=j!==null?j.x:0,Lt=j!==null?j.y:0;A.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,ot,0,0,It,Lt,tt,St),$.unbindTexture()},this.copyTextureToTexture=function(P,j,ot=null,at=null,tt=0){P.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,P=arguments[1],j=arguments[2],tt=arguments[3]||0,ot=null);let St,It,Lt,Ut,Gt,qt,Nt,ne,ce,ue=P.isCompressedTexture?P.mipmaps[tt]:P.image;ot!==null?(St=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Lt=ot.isBox3?ot.max.z-ot.min.z:1,Ut=ot.min.x,Gt=ot.min.y,qt=ot.isBox3?ot.min.z:0):(St=ue.width,It=ue.height,Lt=ue.depth||1,Ut=0,Gt=0,qt=0),at!==null?(Nt=at.x,ne=at.y,ce=at.z):(Nt=0,ne=0,ce=0);let qe=Ht.convert(j.format),se=Ht.convert(j.type),Ot;j.isData3DTexture?(A.setTexture3D(j,0),Ot=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(A.setTexture2DArray(j,0),Ot=I.TEXTURE_2D_ARRAY):(A.setTexture2D(j,0),Ot=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);let In=I.getParameter(I.UNPACK_ROW_LENGTH),re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ni=I.getParameter(I.UNPACK_SKIP_ROWS),Je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);let Ls=P.isDataArrayTexture||P.isData3DTexture,de=j.isDataArrayTexture||j.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let vn=dt.get(P),Us=dt.get(j),on=dt.get(vn.__renderTarget),Yn=dt.get(Us.__renderTarget);$.bindFramebuffer(I.READ_FRAMEBUFFER,on.__webglFramebuffer),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let $n=0;$n<Lt;$n++)Ls&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dt.get(P).__webglTexture,tt,qt+$n),P.isDepthTexture?(de&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dt.get(j).__webglTexture,tt,ce+$n),I.blitFramebuffer(Ut,Gt,St,It,Nt,ne,St,It,I.DEPTH_BUFFER_BIT,I.NEAREST)):de?I.copyTexSubImage3D(Ot,tt,Nt,ne,ce+$n,Ut,Gt,St,It):I.copyTexSubImage2D(Ot,tt,Nt,ne,ce+$n,Ut,Gt,St,It);$.bindFramebuffer(I.READ_FRAMEBUFFER,null),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else de?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(Ot,tt,Nt,ne,ce,St,It,Lt,qe,se,ue.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Ot,tt,Nt,ne,ce,St,It,Lt,qe,ue.data):I.texSubImage3D(Ot,tt,Nt,ne,ce,St,It,Lt,qe,se,ue):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,tt,Nt,ne,St,It,qe,se,ue.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,tt,Nt,ne,ue.width,ue.height,qe,ue.data):I.texSubImage2D(I.TEXTURE_2D,tt,Nt,ne,St,It,qe,se,ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,In),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ni),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je),tt===0&&j.generateMipmaps&&I.generateMipmap(Ot),$.unbindTexture()},this.copyTextureToTexture3D=function(P,j,ot=null,at=null,tt=0){return P.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,at=arguments[1]||null,P=arguments[2],j=arguments[3],tt=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,j,ot,at,tt)},this.initRenderTarget=function(P){dt.get(P).__webglFramebuffer===void 0&&A.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?A.setTextureCube(P,0):P.isData3DTexture?A.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?A.setTexture2DArray(P,0):A.setTexture2D(P,0),$.unbindTexture()},this.resetState=function(){U=0,F=0,V=null,$.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}},no=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var us=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var hl=class extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,c,h=je,u=je,f,p){super(null,a,o,c,h,u,s,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class extends _e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ji=new Kt,Mh=new Kt,Dr=[],bh=new Vn,yg=new Kt,Bs=new jt,ks=new Gn,Wn=class extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),bh.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),ks.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),Mh.multiplyMatrices(n,Ji),Bs.matrixWorld=Mh,Bs.raycast(t,Dr);for(let a=0,o=Dr.length;a<o;a++){let c=Dr[a];c.instanceId=r,c.object=this,e.push(c)}Dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hl(new Float32Array(s*this.count),s,this.count,Fl,Sn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Qs=class extends En{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},io=new W,so=new W,Sh=new Kt,Hs=new Js,Lr=new Gn,oa=new W,wh=new W,ul=class extends Ee{constructor(t=new ae,e=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)io.fromBufferAttribute(e,s-1),so.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=io.distanceTo(so);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;Sh.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Sh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){let l=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=l,g=x-1;v<g;v+=h){let d=u.getX(v),b=u.getX(v+1),S=Ur(this,t,Hs,c,d,b);S&&e.push(S)}if(this.isLineLoop){let v=u.getX(x-1),g=u.getX(l),d=Ur(this,t,Hs,c,v,g);d&&e.push(d)}}else{let l=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let v=l,g=x-1;v<g;v+=h){let d=Ur(this,t,Hs,c,v,v+1);d&&e.push(d)}if(this.isLineLoop){let v=Ur(this,t,Hs,c,x-1,l);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ur(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(io.fromBufferAttribute(a,s),so.fromBufferAttribute(a,r),e.distanceSqToSegment(io,so,oa,wh)>n)return;oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oa);if(!(c<t.near||c>t.far))return{distance:c,point:wh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Eh=new W,Th=new W,ro=class extends ul{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eh.distanceTo(Th);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ai=class extends En{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ah=new Kt,dl=new Js,Nr=new Gn,Fr=new W,ds=class extends Ee{constructor(t=new ae,e=new Ai){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Ah.copy(s).invert(),dl.copy(t.ray).applyMatrix4(Ah);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),l=Math.min(h.count,a.start+a.count);for(let x=p,v=l;x<v;x++){let g=h.getX(x);Fr.fromBufferAttribute(f,g),Rh(Fr,g,c,s,t,e,this)}}else{let p=Math.max(0,a.start),l=Math.min(f.count,a.start+a.count);for(let x=p,v=l;x<v;x++)Fr.fromBufferAttribute(f,x),Rh(Fr,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rh(i,t,e,n,s,r,a){let o=dl.distanceSqToPoint(i);if(o<e){let c=new W;dl.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var si=class extends Ye{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tn=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],l=[],x=0,v=[],g=n/2,d=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(l,2));function b(){let M=new W,z=new W,U=0,F=(e-t)/n;for(let V=0;V<=r;V++){let E=[],y=V/r,B=y*(e-t)+t;for(let m=0;m<=s;m++){let w=m/s,N=w*c+o,Y=Math.sin(N),R=Math.cos(N);z.x=B*Y,z.y=-y*n+g,z.z=B*R,f.push(z.x,z.y,z.z),M.set(Y,F,R).normalize(),p.push(M.x,M.y,M.z),l.push(w,1-y),E.push(x++)}v.push(E)}for(let V=0;V<s;V++)for(let E=0;E<r;E++){let y=v[E][V],B=v[E+1][V],m=v[E+1][V+1],w=v[E][V+1];(t>0||E!==0)&&(u.push(y,B,w),U+=3),(e>0||E!==r-1)&&(u.push(B,m,w),U+=3)}h.addGroup(d,U,0),d+=U}function S(M){let z=x,U=new Ft,F=new W,V=0,E=M===!0?t:e,y=M===!0?1:-1;for(let m=1;m<=s;m++)f.push(0,g*y,0),p.push(0,y,0),l.push(.5,.5),x++;let B=x;for(let m=0;m<=s;m++){let N=m/s*c+o,Y=Math.cos(N),R=Math.sin(N);F.x=E*R,F.y=g*y,F.z=E*Y,f.push(F.x,F.y,F.z),p.push(0,y,0),U.x=Y*.5+.5,U.y=R*.5*y+.5,l.push(U.x,U.y),x++}for(let m=0;m<s;m++){let w=z+m,N=B+m;M===!0?u.push(N,N+1,w):u.push(N+1,N,w),V+=3}h.addGroup(d,V,M===!0?1:2),d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oo=class i extends Tn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fl=class i extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),h(n),u(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let S=new W,M=new W,z=new W;for(let U=0;U<e.length;U+=3)l(e[U+0],S),l(e[U+1],M),l(e[U+2],z),c(S,M,z,b)}function c(b,S,M,z){let U=z+1,F=[];for(let V=0;V<=U;V++){F[V]=[];let E=b.clone().lerp(M,V/U),y=S.clone().lerp(M,V/U),B=U-V;for(let m=0;m<=B;m++)m===0&&V===U?F[V][m]=E:F[V][m]=E.clone().lerp(y,m/B)}for(let V=0;V<U;V++)for(let E=0;E<2*(U-V)-1;E++){let y=Math.floor(E/2);E%2===0?(p(F[V][y+1]),p(F[V+1][y]),p(F[V][y])):(p(F[V][y+1]),p(F[V+1][y+1]),p(F[V+1][y]))}}function h(b){let S=new W;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(b),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){let b=new W;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let M=g(b)/2/Math.PI+.5,z=d(b)/Math.PI+.5;a.push(M,1-z)}x(),f()}function f(){for(let b=0;b<a.length;b+=6){let S=a[b+0],M=a[b+2],z=a[b+4],U=Math.max(S,M,z),F=Math.min(S,M,z);U>.9&&F<.1&&(S<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),z<.2&&(a[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function l(b,S){let M=b*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function x(){let b=new W,S=new W,M=new W,z=new W,U=new Ft,F=new Ft,V=new Ft;for(let E=0,y=0;E<r.length;E+=9,y+=6){b.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),U.set(a[y+0],a[y+1]),F.set(a[y+2],a[y+3]),V.set(a[y+4],a[y+5]),z.copy(b).add(S).add(M).divideScalar(3);let B=g(z);v(U,y+0,b,B),v(F,y+2,S,B),v(V,y+4,M,B)}}function v(b,S,M,z){z<0&&b.x===1&&(a[S]=b.x-1),M.x===0&&M.z===0&&(a[S]=z/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ao=class i extends fl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var js=class i extends ae{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],h=[],u=[],f=t,p=(e-t)/s,l=new W,x=new Ft;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let d=r+g/n*a;l.x=f*Math.cos(d),l.y=f*Math.sin(d),c.push(l.x,l.y,l.z),h.push(0,0,1),x.x=(l.x/e+1)/2,x.y=(l.y/e+1)/2,u.push(x.x,x.y)}f+=p}for(let v=0;v<s;v++){let g=v*(n+1);for(let d=0;d<n;d++){let b=d+g,S=b,M=b+n+1,z=b+n+2,U=b+1;o.push(S,M,U),o.push(M,z,U)}}this.setIndex(o),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ye=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],f=new W,p=new W,l=[],x=[],v=[],g=[];for(let d=0;d<=n;d++){let b=[],S=d/n,M=0;d===0&&a===0?M=.5/e:d===n&&c===Math.PI&&(M=-.5/e);for(let z=0;z<=e;z++){let U=z/e;f.x=-t*Math.cos(s+U*r)*Math.sin(a+S*o),f.y=t*Math.cos(a+S*o),f.z=t*Math.sin(s+U*r)*Math.sin(a+S*o),x.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),g.push(U+M,1-S),b.push(h++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){let S=u[d][b+1],M=u[d][b],z=u[d+1][b],U=u[d+1][b+1];(d!==0||a>0)&&l.push(S,M,U),(d!==n-1||c<Math.PI)&&l.push(M,z,U)}this.setIndex(l),this.setAttribute("position",new Xt(x,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class i extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],h=[],u=new W,f=new W,p=new W;for(let l=0;l<=n;l++)for(let x=0;x<=s;x++){let v=x/s*r,g=l/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),o.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),h.push(x/s),h.push(l/n)}for(let l=1;l<=n;l++)for(let x=1;x<=s;x++){let v=(s+1)*l+x-1,g=(s+1)*(l-1)+x-1,d=(s+1)*(l-1)+x,b=(s+1)*l+x;a.push(v,g,b),a.push(g,d,b)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var lo=class extends ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},De=class extends En{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Rn=class extends En{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Or(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,o=2*e-n;break;case Tc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ec:a=t,c=2*n-e;break;case Tc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,l=this._weightNext,x=(n-e)/(s-e),v=x*x,g=v*x,d=-p*g+2*p*v-p*x,b=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*x+1,S=(-1-l)*g+(1.5+l)*v+.5*x,M=l*g-l*v;for(let z=0;z!==o;++z)r[z]=d*a[u+z]+b*a[h+z]+S*a[c+z]+M*a[f+z];return r}},ml=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),f=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*f+a[c+p]*u;return r}},gl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Mg(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let f=o*n,p=f-n,l=f+n;for(let x=0;x!==n;++x){let v=e[f+x];if(v!==e[p+x]||v!==e[l+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,p=a*n;for(let l=0;l!==n;++l)e[p+l]=e[f+l]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Ya;var Ri=class extends xn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Wr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends xn{};xl.prototype.ValueTypeName="color";var _l=class extends xn{};_l.prototype.ValueTypeName="number";var vl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)$e.slerpFlat(r,0,a,h-o,a,h,c);return r}},co=class extends xn{InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends xn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Wr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends xn{};yl.prototype.ValueTypeName="vector";var Ml=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=h.length;f<p;f+=2){let l=h[f],x=h[f+1];if(l.global&&(l.lastIndex=0),l.test(u))return x}return null}}},bg=new Ml,bl=class{constructor(t){this.manager=t!==void 0?t:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ho=class extends tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},aa=new Kt,Ch=new W,Ph=new W,uo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ph),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ih=new Kt,Vs=new W,la=new W,Sl=class extends uo{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),la.copy(n.position),la.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(la),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ih)}},fo=class extends tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},wl=class extends uo{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},po=class extends tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var mo=class extends ae{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ps=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Dh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Dh(){return performance.now()}var Wl="\\[\\]\\.:\\/",Sg=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",wg="[^"+Wl.replace("\\.","")+"]",Eg=/((?:WC+[\/:])*)/.source.replace("WC",Xl),Tg=/(WCOD+)?/.source.replace("WCOD",wg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),Cg=new RegExp("^"+Eg+Tg+Ag+Rg+"$"),Pg=["material","materials","bones","map"],El=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(t){let e=Cg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=El;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);var yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ig=new cs(-1,1,1,-1,0,1),ql=class extends ae{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},Dg=new ql,ri=class{constructor(t){this._mesh=new jt(Dg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ig)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Mo=class extends nn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Cn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ri(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var nr=class extends nn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},bo=class extends nn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var So=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ft);this._width=n.width,this._height=n.height,e=new Ne(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mo(yo),this.copyPass.material.blending=wn,this.clock=new ps}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nr!==void 0&&(a instanceof nr?n=!0:a instanceof bo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wo=class extends nn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Dt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Qh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var vs=class i extends nn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ft(t.x,t.y):new Ft(256,256),this.clearColor=new Dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,a,{type:en}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new Ne(r,a,{type:en});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let l=new Ne(r,a,{type:en});l.texture.name="UnrealBloomPass.v"+f,l.texture.generateMipmaps=!1,this.renderTargetsVertical.push(l),r=Math.round(r/2),a=Math.round(a/2)}let o=Qh;this.highPassUniforms=Cn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ft(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=yo;this.copyUniforms=Cn.clone(u.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Gr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Dt,this.oldClearAlpha=1,this.basic=new xe,this.fsQuad=new ri(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ft(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ft(.5,.5)},direction:{value:new Ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};vs.BlurDirectionX=new Ft(1,0);vs.BlurDirectionY=new Ft(0,1);var jh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Eo=class extends nn{constructor(){super();let t=jh;this.uniforms=Cn.clone(t.uniforms),this.material=new lo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function eu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ae,h=0;for(let u=0;u<i.length;++u){let f=i[u],p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let l in f.attributes){if(!n.has(l))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+l+'" attribute exists among all geometries, or in none of them.'),null;r[l]===void 0&&(r[l]=[]),r[l].push(f.attributes[l]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let l in f.morphAttributes){if(!s.has(l))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[l]===void 0&&(a[l]=[]),a[l].push(f.morphAttributes[l])}if(t){let l;if(e)l=f.index.count;else if(f.attributes.position!==void 0)l=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,l,u),h+=l}}if(e){let u=0,f=[];for(let p=0;p<i.length;++p){let l=i[p].index;for(let x=0;x<l.count;++x)f.push(l.getX(x)+u);u+=i[p].attributes.position.count}c.setIndex(f)}for(let u in r){let f=tu(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<f;++p){let l=[];for(let v=0;v<a[u].length;++v)l.push(a[u][v][p]);let x=tu(l);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}return c}function tu(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new _e(a,e,n),c=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute){let f=c/e;for(let p=0,l=u.count;p<l;p++)for(let x=0;x<e;x++){let v=u.getComponent(p,x);o.setComponent(p+f,x,v)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var $l=(i,t={})=>new xe({color:i,toneMapped:!1,...t});function We(i,t,e=0,n=0,s=0,r=!0){let a=new jt(i,t);return a.position.set(e,n,s),a.castShadow=r,a.receiveShadow=r,a}var _t=(i,t,e,n,s,r,a,o)=>We(new ln(i,t,e),n,s,r,a,o),$t=(i,t,e,n,s,r,a,o=14,c)=>We(new Tn(i,t,e,o),n,s,r,a,c),hn=(i,t,e,n,s,r=12,a=8,o)=>We(new ye(i,r,a),t,e,n,s,o),Lg=new W(0,1,0),Ug=new Tn(1,1,1,8),Ng=new ye(1,8,6);function fe(i,t,e,n=!0){let s=new Jt,r=i.map(a=>new W(...a));for(let a=0;a<r.length;a++){if(a>0&&a<r.length-1){let u=We(Ng,e,r[a].x,r[a].y,r[a].z,n);u.scale.setScalar(t*1.05),s.add(u)}if(a===r.length-1)break;let o=r[a+1].clone().sub(r[a]),c=o.length(),h=We(Ug,e,0,0,0,n);h.position.copy(r[a]).addScaledVector(o,.5),h.scale.set(t,c,t),h.quaternion.setFromUnitVectors(Lg,o.normalize()),s.add(h)}return s}function _n(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");e(s,i,t);let r=new si(n);return r.colorSpace=Pe,r.anisotropy=4,r}function Pi(i,t,e,n=18){let s=[];for(let r=0;r<=n;r++){let a=r/n,o=(1-a)*(1-a),c=2*(1-a)*a,h=a*a;s.push([o*i[0]+c*t[0]+h*e[0],o*i[1]+c*t[1]+h*e[1],o*i[2]+c*t[2]+h*e[2]])}return s}var ys=class{constructor(t){this.p=t.map(e=>new W(...e)),this.cum=[0];for(let e=1;e<this.p.length;e++)this.cum.push(this.cum[e-1]+this.p[e].distanceTo(this.p[e-1]));this.total=this.cum[this.cum.length-1]}at(t,e){let n=t*this.total,s=1;for(;s<this.cum.length-1&&this.cum[s]<n;)s++;let r=this.cum[s]-this.cum[s-1]||1;return e.lerpVectors(this.p[s-1],this.p[s],(n-this.cum[s-1])/r)}},Yl={};function un(i,{transparent:t=!1}={}){i.updateMatrixWorld(!0);let e=new Kt().copy(i.matrixWorld).invert(),n=new Kt,s=new Map,r=a=>{if(a!==i&&a.userData.dyn)return;let o=a.material;if(a.isMesh&&!a.isInstancedMesh&&a.visible&&o&&!Array.isArray(o)&&(t||!o.transparent)){let c=o.isMeshLambertMaterial&&!o.transparent&&!o.map&&!o.userData.live&&o.emissive.getHex()===0,h=(c?"baked"+(o.flatShading?"F":"S"):o.uuid)+(a.castShadow?"c":"")+(a.receiveShadow?"r":"");s.has(h)||s.set(h,{bake:c,items:[]}),s.get(h).items.push(a)}for(let c of a.children)r(c)};r(i);for(let a of s.values()){if(a.items.length<2)continue;let o=a.items.map(p=>{let l=p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone();for(let x of Object.keys(l.attributes))["position","normal","uv"].includes(x)||l.deleteAttribute(x);if(l.applyMatrix4(n.multiplyMatrices(e,p.matrixWorld)),a.bake){let x=p.material.color,v=l.attributes.position.count,g=new Float32Array(v*3);for(let d=0;d<v;d++)g[d*3]=x.r,g[d*3+1]=x.g,g[d*3+2]=x.b;l.setAttribute("color",new _e(g,3))}return l}),c=a.items[0],h=c.material.flatShading?"F":"S",u=a.bake?Yl[h]||(Yl[h]=new Rn({vertexColors:!0,flatShading:h==="F"})):c.material,f=new jt(eu(o,!1),u);f.castShadow=c.castShadow,f.receiveShadow=c.receiveShadow,o.forEach(p=>p.dispose());for(let p of a.items)p.parent.remove(p);i.add(f)}}var oi=(i,t)=>1-Math.exp(-i*t),Pn=(i,t,e)=>i+(t-i)*e;var Ms=Math.PI*2,sr=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),ai=(i,t,e)=>i+(t-i)*e,Zl=(i,t)=>1-Math.exp(-i*t),To=i=>(i=sr(i),i*i*(3-2*i)),nu=i=>i-Math.floor(i);function Kl(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var iu={holstein:{base:"#f1eee6",spot:"#18181b",blobs:10,size:[44,92],head:"#18181b",blaze:"#f1eee6",leg:"#ece8df",muzzle:"#d6a498",hoof:"#3b3530",tuft:"#e9e5dc",horns:"none",udder:1},sahiwal:{base:"#8e4a2a",mottle:"#733a20",head:"#86441f",leg:"#7c3f22",muzzle:"#473028",hoof:"#2a221e",tuft:"#2a1a13",horns:"short",hump:1,udder:.9},gir:{base:"#e4d8c3",spot:"#a2532f",blobs:70,size:[5,15],head:"#b3663d",leg:"#d9ccb6",muzzle:"#3d2a24",hoof:"#2a221e",tuft:"#2a1a13",horns:"short",hump:1,udder:.9},murrah:{base:"#26262a",mottle:"#1b1b1e",head:"#1f1f23",leg:"#1d1d21",muzzle:"#111113",hoof:"#0f0f10",tuft:"#0d0d0e",horns:"curl",udder:.8,sheen:.62,bulk:1.08},murrah2:{base:"#322c29",mottle:"#231f1d",head:"#2a2523",leg:"#262120",muzzle:"#141211",hoof:"#0f0f10",tuft:"#0d0d0e",horns:"curl",udder:.8,sheen:.62,bulk:1.06}},Ii={healthy:"#35a8ff",fever:"#ff3b30",heat:"#ffb020",estrus:"#ff5fd2"};function Ql(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new si(n);return s.colorSpace=Pe,s.anisotropy=8,s.wrapS=s.wrapT=tn,s}function Fg(i,t){return Ql(512,256,(e,n,s)=>{let r=Kl(t);if(e.fillStyle=i.base,e.fillRect(0,0,n,s),i.mottle)for(let o=0;o<40;o++)e.fillStyle=i.mottle,e.globalAlpha=.1+r()*.16,e.beginPath(),e.ellipse(r()*n,r()*s,30+r()*70,14+r()*30,r()*3,0,7),e.fill();if(e.globalAlpha=1,i.spot)for(let o=0;o<i.blobs;o++){let c=r()*n,h=s*(.2+r()*.6),u=i.size[0]+r()*(i.size[1]-i.size[0]);e.fillStyle=i.spot;for(let f=0;f<6;f++)e.beginPath(),e.ellipse(c+(r()-.5)*u*1.3,h+(r()-.5)*u*.7,u*(.35+r()*.5),u*(.25+r()*.4),r()*3,0,7),e.fill()}for(let o=0;o<5200;o++)e.fillStyle=r()<.5?"rgba(255,255,255,0.045)":"rgba(0,0,0,0.06)",e.fillRect(r()*n,r()*s,1+r()*5,1);let a=e.createLinearGradient(0,0,0,s);a.addColorStop(0,"rgba(120,96,60,0.20)"),a.addColorStop(.16,"rgba(120,96,60,0)"),a.addColorStop(.84,"rgba(120,96,60,0)"),a.addColorStop(1,"rgba(120,96,60,0.20)"),e.fillStyle=a,e.fillRect(0,0,n,s)})}function Og(i,t){return Ql(256,128,(e,n,s)=>{let r=Kl(t+7);e.fillStyle=i.head,e.fillRect(0,0,n,s),i.blaze&&(e.fillStyle=i.blaze,e.beginPath(),e.moveTo(n*.18,s*.5),e.bezierCurveTo(n*.4,s*.36,n*.7,s*.4,n,s*.3),e.lineTo(n,s*.7),e.bezierCurveTo(n*.7,s*.6,n*.4,s*.63,n*.18,s*.5),e.fill());for(let a=0;a<1600;a++)e.fillStyle=r()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.07)",e.fillRect(r()*n,r()*s,1+r()*4,1)})}var zg=null,Bg=()=>zg||(zg=(()=>{let i=Ql(128,128,(t,e,n)=>{let s=Kl(5);t.fillStyle="#808080",t.fillRect(0,0,e,n);for(let r=0;r<2600;r++){let a=90+s()*90;t.fillStyle=`rgb(${a},${a},${a})`,t.fillRect(s()*e,s()*n,2+s()*6,1)}});return i.colorSpace=Mn,i.repeat.set(5,3),i})());function Jl(i,{radial:t=22,sub:e=4,sq:n=2.3}={}){let s=(b,S,M,z,U)=>.5*(2*S+(M-b)*U+(2*b-5*S+4*M-z)*U*U+(3*S-b-3*M+z)*U*U*U),r=[];for(let b=0;b<i.length-1;b++){let S=i[Math.max(0,b-1)],M=i[b],z=i[b+1],U=i[Math.min(i.length-1,b+2)];for(let F=0;F<e;F++){let V=F/e;r.push([ai(M[0],z[0],V),s(S[1],M[1],z[1],U[1],V),...[2,3,4].map(E=>Math.max(.004,s(S[E],M[E],z[E],U[E],V)))])}}r.push(i[i.length-1]);let a=[],o=[],c=[],h=r.length,u=r[0][0],f=r[h-1][0],p=2/n;for(let[b,S,M,z,U]of r)for(let F=0;F<=t;F++){let V=-Math.PI/2+F/t*Ms,E=Math.cos(V),y=Math.sin(V);a.push(b,S+(y>0?M:z)*Math.sign(y)*Math.pow(Math.abs(y),p),U*Math.sign(E)*Math.pow(Math.abs(E),p)),o.push((b-u)/(f-u),F/t)}let l=t+1;for(let b=0;b<h-1;b++)for(let S=0;S<t;S++){let M=b*l+S,z=M+l,U=M+1,F=z+1;c.push(M,z,U,z,F,U)}let x=a.length/3;a.push(r[0][0],r[0][1],0),o.push(0,.5);let v=x+1;a.push(r[h-1][0],r[h-1][1],0),o.push(1,.5);for(let b=0;b<t;b++)c.push(x,b,b+1),c.push(v,(h-1)*l+b+1,(h-1)*l+b);let g=new ae;g.setAttribute("position",new Xt(a,3)),g.setAttribute("uv",new Xt(o,2)),g.setIndex(c),g.computeVertexNormals();let d=g.attributes.normal;for(let b=0;b<h;b++){let S=b*l,M=S+t,z=new W(d.getX(S)+d.getX(M),d.getY(S)+d.getY(M),d.getZ(S)+d.getZ(M)).normalize();d.setXYZ(S,z.x,z.y,z.z),d.setXYZ(M,z.x,z.y,z.z)}return g}var sn=(i,t,e=0,n=0,s=0)=>{let r=new jt(i,t);return r.position.set(e,n,s),r.castShadow=r.receiveShadow=!0,r},Ze=(i,t,e,n,s,r,a,o=14,c=10)=>{let h=sn(new ye(1,o,c),i,t,e,n);return h.scale.set(s,r,a),h},Xn=(i,t,e,n,s,r,a,o=12)=>sn(new Tn(t,e,n,o),i,s,r,a),kg={px:.64,py:1.18,pz:.175,l1:.68,l2:.54,fx:.66,bend:1,lift:.12,lie:[1,-1.35]},Hg={px:-.62,py:1.12,pz:.19,l1:.6,l2:.6,fx:-.85,bend:-1,lift:.1,lie:[1.2,-1.25]},Vg=[.25,.75,0,.5],jl=1.25,ir=.64;function Di(i={}){let t=iu[i.coat]||iu.holstein,e=i.kind==="buffalo",n=i.seed??(i.idx??0)*31+3,s=t.sheen??.86,r=L=>new De({roughness:s,metalness:0,bumpMap:Bg(),bumpScale:.6,...L}),a=r({map:Fg(t,n)}),o=r({map:Og(t,n)}),c=r({color:t.leg}),h=r({color:t.head}),u=new De({color:t.muzzle,roughness:.55}),f=new De({color:e?"#3a3033":"#e3b1a6",roughness:.6}),p=new De({color:t.hoof,roughness:.45}),l=new De({color:"#0a0806",roughness:.08,metalness:.2}),x=new De({color:e?"#2c2c2e":"#d8cfb8",roughness:.5}),v=r({color:t.tuft}),g=new De({color:"#1b2633",roughness:.6}),d=new De({color:"#10161d",roughness:.35,metalness:.3}),b=new De({color:"#f2c230",roughness:.6,side:Ie}),S=new De({color:"#04070a",emissive:Ii.healthy,emissiveIntensity:3,roughness:.3}),M=new Jt,z=new Jt;M.add(z);let U=t.bulk||1;z.scale.set(1,1,U);let F=sn(Jl([[-1.03,1.27,.03,.04,.03],[-.98,1.22,.17,.24,.21],[-.84,1.17,.25,.37,.31],[-.6,1.13,.31,.44,.365],[-.3,1.1,.315,.48,.395],[0,1.1,.3,.49,.4],[.3,1.12,.3,.475,.375],[.55,1.14,.325,.46,.335],[.75,1.18,.32,.43,.295],[.9,1.2,.25,.37,.225],[.99,1.2,.12,.21,.12],[1.02,1.2,.03,.04,.03]],{radial:26}),a);F.userData.dyn=!0,z.add(F);for(let L of[-1,1])z.add(Ze(a,-.66,1.37,.2*L,.13,.07,.1));t.hump&&z.add(Ze(h,.6,1.5,0,.2,.13,.13));let V=new Jt;if(V.position.set(-.45,.66,0),!i.bull){let L=t.udder||1;V.add(Ze(f,0,0,0,.25*L,.17*L,.2*L));for(let[$,pt]of[[.1,.085],[.1,-.085],[-.09,.085],[-.09,-.085]])V.add(Xn(f,.022,.014,.085,$*L,-.17*L,pt*L,8))}z.add(V);let E=new Jt;E.position.set(.8,1.24,0),z.add(E);let y=sn(Jl([[-.14,-.02,.26,.37,.2],[.1,-.02,.24,.34,.185],[.35,0,.19,.275,.15],[.55,.01,.16,.21,.125],[.7,.02,.14,.17,.115],[.77,.02,.06,.08,.05]],{radial:18}),a);E.add(y);let B=new Jt;B.position.set(.42,-.035,0),E.add(B);let m=sn(new An(.222,.026,8,30),g);m.rotation.y=Math.PI/2,m.scale.set(.7,1,1.7),B.add(m),B.add(sn(new ln(.1,.075,.14),d,0,-.275,0)),B.add(sn(new ln(.06,.05,.05),d,0,.225,0));let w=sn(new ye(.011,10,8),S,.052,-.265,0);w.castShadow=!1,B.add(w);let N=sn(new ye(.009,8,6),S,0,-.275,.072);N.castShadow=!1,B.add(N);let Y=sn(new ye(.009,8,6),S,0,-.275,-.072);Y.castShadow=!1,B.add(Y),B.add(Xn(d,.004,.004,.09,-.03,-.2,.06,5));let R=new Jt;R.position.set(.7,.03,0),E.add(R),R.add(sn(Jl([[-.07,0,.06,.08,.06],[0,0,.135,.15,.125],[.12,.005,.14,.155,.136],[.26,-.01,.105,.13,.105],[.4,-.025,.082,.105,.088],[.5,-.03,.076,.096,.09],[.555,-.035,.045,.06,.06]],{radial:16}),o)),R.add(Ze(u,.535,-.04,0,.045,.07,.082,12,8));for(let L of[-1,1]){if(R.add(Ze(l,.14,.062,.124*L,.027,.027,.02,10,8)),R.add(Ze(l,.572,-.012,.034*L,.013,.017,.013,6,5)),t.horns==="short"){let $=Xn(x,.004,.028,.16,0,.17,.09*L,8);$.rotation.set(.45*L,0,.25),R.add($)}if(t.horns==="curl"){let $=sn(new An(.15,.03,7,14,Math.PI*1.05),x,-.03,.13,.19*L);$.rotation.set(L>0?1.25:-1.25,L>0?.2:-.2,L>0?2.6:.54),R.add($)}}let C=new Jt;C.position.set(.06,-.085,0),R.add(C),C.add(Ze(o,.21,-.03,0,.21,.04,.066,10,6)),C.userData.dyn=!0;let T=[-1,1].map(L=>{let $=new Jt;if($.position.set(.015,.085,.115*L),$.add(Ze(h,-.008,0,.08*L,.022,.048,.088,10,6)),$.add(Ze(u,.008,0,.08*L,.008,.03,.062,8,5)),L>0||i.twoTags){let pt=sn(new cn(.034,.042),b,.026,-.03,.085*L);pt.rotation.y=Math.PI/2,$.add(pt)}return $.rotation.x=-.25*L,$.userData.dyn=!0,un($),R.add($),$}),q=new Ee;q.position.set(.56,-.06,0),R.add(q),un(R),un(B),B.userData.dyn=R.userData.dyn=E.userData.dyn=!0;let Z=[],K=z;for(let L=0;L<5;L++){let $=new Jt;$.position.set(L?0:-1,L?-.19:1.37,0),L<4?$.add(Xn(L<3?a:v,.026-L*.004,.022-L*.004,.2,0,-.095,0,7)):$.add(Ze(v,0,-.1,0,.034,.13,.034,8,6)),K.add($),Z.push($),K=$}Z[0].userData.dyn=!0;let et=[];for(let L=0;L<4;L++){let $=L<2,pt=L%2?-1:1,dt=$?kg:Hg,A=new Jt;A.position.set(dt.px,dt.py,dt.pz*pt),$?(A.add(Ze(a,.03,-.2,.02*pt,.16,.3,.1)),A.add(Xn(c,.088,.058,.44,0,-.46,0))):(A.add(Ze(a,.07,-.2,.01*pt,.22,.36,.125)),A.add(Xn(c,.1,.06,.36,0,-.43,0))),A.add(Ze(c,0,-dt.l1,0,.062,.07,.06,10,8));let _=new Jt;_.position.set(0,-dt.l1,0),A.add(_);let D=dt.l2-.17;_.add(Xn(c,.05,.041,D,0,-D/2,0,10)),_.add(Ze(c,0,-D,0,.05,.055,.05,10,8)),_.add(Xn(c,.044,.05,.1,.008,-D-.05,0,10));let O=new Jt;O.position.set(0,-dt.l2+.075,0),_.add(O),O.add(Xn(p,.05,.066,.075,.014,-.0375,0,10)),O.userData.dyn=_.userData.dyn=A.userData.dyn=!0,un(_),un(A),z.add(A),et.push({...dt,s:pt,upper:A,lower:_,hoof:O,off:Vg[L],a1:0,a2:0})}un(z);let Q=new xe({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1,side:Ie,toneMapped:!1}),H=new jt(new js(1.28,1.42,48),Q);H.rotation.x=-Math.PI/2,H.position.y=.03,H.visible=!1,M.add(H);let X=new xe({color:Ii.healthy,transparent:!0,opacity:0,depthWrite:!1,side:Ie,toneMapped:!1}),G=new jt(new js(.2,.235,36),X);G.rotation.x=-Math.PI/2,G.visible=!1,M.add(G);let rt={walk:0,reach:0,reachY:.14,lie:0,yaw:0,sleep:0,chew:0,alert:0},ct=[1+Math.random()*3,2+Math.random()*4],xt=[0,0],At=0,Bt=2+Math.random()*5,vt=Math.random(),Tt=new Dt,I=new W;function ht(L,$,pt){let dt=$-L.px,A=L.py-pt,_=sr(Math.hypot(dt,A),Math.abs(L.l1-L.l2)+.02,L.l1+L.l2-.002),D=Math.atan2(dt,A),O=Math.acos(sr((L.l1*L.l1+_*_-L.l2*L.l2)/(2*L.l1*_),-1,1)),it=D+L.bend*O,J=L.px+L.l1*Math.sin(it),mt=L.py-L.l1*Math.cos(it);return[it,Math.atan2(L.px+dt/Math.hypot(dt,A)*_-J,mt-(L.py-A/Math.hypot(dt,A)*_))]}function nt(L,$,pt={}){let dt=Zl(pt.rate||5,L);for(let k of["walk","reach","lie","yaw","sleep","chew","alert"])rt[k]=ai(rt[k],pt[k]||0,k==="walk"?Zl(7,L):dt);pt.reachY!=null&&(rt.reachY=ai(rt.reachY,pt.reachY,dt)),pt.phase!=null&&(vt=pt.phase);let A=rt.walk*(1-rt.lie),_=To(rt.lie),D=Math.sin(vt*Ms*2),O=Math.sin(vt*Ms),it=-.02*A*(.5+.5*Math.cos(vt*Ms*2+.6)),J=rt.reach*sr((1.1-rt.reachY)/.96)*(1-_);z.position.set(0,it-.6*_-.012*J,.016*A*O),z.rotation.set(.022*A*O+.13*_,0,-.045*J+.008*A*D);let mt=Math.sin($*(1.5+2.2*(pt.effort||0))+n);F.scale.set(1,1+mt*.006,1+mt*(.012+.02*(pt.effort||0)));let lt=z.rotation.z,gt=Math.cos(-lt),zt=Math.sin(-lt),ft=jl*ir*A;for(let k of et){let yt=nu(vt+k.off),st=k.fx,ut=0,Et=0;if(yt<ir){let Ue=yt/ir;st+=ft*(.5-Ue),Et=-.42*To((Ue-.78)/.22)*A}else{let Ue=(yt-ir)/(1-ir);st+=ft*(To(Ue)-.5),ut=k.lift*A*Math.sin(Math.PI*Math.pow(Ue,.85)),Et=-.42*A*(1-To(Ue/.55))-.25*A*Math.sin(Math.PI*Ue)}let Rt=st,Vt=ut-z.position.y,pe=Rt*gt-(Vt-0)*zt,Re=Rt*zt+Vt*gt,[te,Fe]=ht(k,pe,Re);_>.001&&(te=ai(te,k.lie[0],_),Fe=ai(Fe,k.lie[1],_)),k.upper.rotation.z=te,k.lower.rotation.z=Fe-te,k.hoof.rotation.z=-Fe-lt*(1-_)+Et*(1-_)+.9*_,k.upper.rotation.x=-.1*_*k.s}let Mt=rt.reach*sr((1.1-rt.reachY)/.96)*(1-.75*_),wt=rt.chew*Math.sin($*7.2+n),Pt=.05*A*Math.sin(vt*Ms*2+1.3);E.rotation.z=ai(.25+.08*rt.alert,-1.08,Mt)+Pt+.28*_*(1-Mt)-.45*rt.sleep+.012*mt,E.rotation.y=rt.yaw*.55+1.05*rt.sleep+.03*A*O,R.rotation.z=ai(-1+.12*rt.alert,-.4,Mt)-Pt*.6-.3*rt.sleep+(Mt>.5?.05*Math.sin($*3.1+n)*rt.chew:0),R.rotation.y=rt.yaw*.5+.4*rt.sleep,R.rotation.x=.1*rt.yaw+(Mt>.5?.06*Math.sin($*1.7+n)*rt.chew:0),C.rotation.z=-.05-.07*Math.max(0,wt),C.position.z=.012*Math.sin($*7.2+n+1.2)*rt.chew;for(let k=0;k<2;k++){ct[k]-=L,ct[k]<=0&&(ct[k]=1.5+Math.random()*5,xt[k]=1),xt[k]=Math.max(0,xt[k]-L*4);let yt=k?1:-1;T[k].rotation.x=(-.25-.2*rt.alert+.35*rt.sleep)*yt+Math.sin(xt[k]*9)*.5*xt[k]*yt,T[k].rotation.y=-.25*rt.alert*yt+Math.sin(xt[k]*7)*.3*xt[k]}Bt-=L,Bt<=0&&(Bt=2.5+Math.random()*6,At=1),At=Math.max(0,At-L*1.6);let bt=.1+.1*A+.5*At;Z.forEach((k,yt)=>{k.rotation.x=Math.sin($*(2.1+3*At)+n-yt*.75)*bt*(.5+yt*.35)*(1-.7*_),k.rotation.z=(yt===0?-.5-.5*_:-.07+.1*A*Math.sin(vt*Ms*2-yt))+(yt===1?.3*_:0)});let kt=pt.key||"healthy",Ht=kt==="healthy"?.55+.45*Math.sin($*2.2+n):Math.sin($*10)>0?1:.12;if(S.emissive.set(Ii[kt]||Ii.healthy),S.emissiveIntensity=(pt.ledPower??3)*Ht,pt.ping){let k=nu($*.45+n*.13);B.getWorldPosition(I),M.worldToLocal(I),G.visible=!0,G.position.set(I.x,I.y+.3+k*.45,I.z),G.scale.setScalar(1+k*2.2),X.opacity=(1-k)*.5,X.color.set(Ii[kt]||Ii.healthy)}else G.visible=!1;let ee=pt.flagged?.55+.35*Math.sin($*6):pt.selected?.85:0;Q.opacity=ai(Q.opacity,ee,Zl(12,L||.016)),H.visible=Q.opacity>.01,Q.color.copy(Tt.set(pt.flagged?Ii[kt]:"#ffffff"))}return{group:M,rig:z,update:nt,anchors:{muzzle:q,collar:B,udder:V,head:R,neck:E,tail:Z[0]},pose:rt,ledMaterial:S}}var bs={x0:-16,x1:-4,z0:-10.5,z1:-4,hFront:4.3,hBack:2.5},ge={x0:-16.6,x1:-1.6,z0:-3.4,z1:10.4},he={x:-10,z:-3.4,w:3},su={x0:-15.2,x1:-9,z:-9.75},ru={x0:-7.7,x1:-4.8,z:-9.75},Ao={collection:{x:-1,z:-9.3},filter:{x:1.9,z:-9.3},pump:{x:3.6,z:-9.3},storage:{x:4.9,z:-6.4},panel:{x:12.2,z:-8.6},battery:{x:8.3,z:-5.6},kiosk:{x:2.6,z:-1.6},waste:{x:.9,z:4.6},dock:{x:-2.9,z:4.6},digester:{x:5.4,z:5.8},stove:{x:9.6,z:3.4},generator:{x:10.2,z:-2.4},compost:{x:9.8,z:8.8}};var Ss=2,ou={lat:25.4358,lon:81.8463},au=(i,t)=>({lat:ou.lat-t*Ss/111320,lon:ou.lon+i*Ss/100530}),ws=(ge.x0+ge.x1)/2,Es=.2,kx={x:ge.x1,z0:.6,z1:2.4},tc={x:4.9,z:1.5},lu=(i,t=0)=>i.x>=bs.x0-t&&i.x<=bs.x1+t&&i.z>=bs.z0-t&&i.z<=he.z+t||i.x>=ge.x0-t&&i.x<=ge.x1+t&&i.z>=he.z-t&&i.z<=ge.z1+t,Ro=i=>i.x<ws?"west":"east",ec=i=>({x:su.x0+.7+i*1.22,z:su.z+1.55}),cu=i=>({x:ru.x0+.75+i*1.4,z:ru.z+1.55}),hu=i=>({x:-14.6+i*2.4,z:-5.9});function Ts(i,t){let e=i.z<he.z,n=t.z<he.z;if(e===n)return[{x:t.x,z:t.z}];let s={x:he.x,z:he.z-.9},r={x:he.x,z:he.z+.9};return e?[s,r,{x:t.x,z:t.z}]:[r,s,{x:t.x,z:t.z}]}function As(i){return Math.abs(i.z-he.z)<.9?i.x=Math.min(he.x+he.w/2-.5,Math.max(he.x-he.w/2+.5,i.x)):i.z<he.z?(i.x=Math.min(bs.x1-.7,Math.max(bs.x0+.7,i.x)),i.z=Math.max(bs.z0+2.2,i.z)):(i.x=Math.min(ge.x1-.9,Math.max(ge.x0+.9,i.x)),i.z=Math.min(ge.z1-.9,i.z)),i}var Gg=.2,le=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),sc=Math.PI*2;function uu(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Rs=(i,t)=>1.8*i+32-(.55-.0055*t)*(1.8*i-26);function rr(i){return i<72?{key:"good",label:"Comfortable"}:i<79?{key:"warn",label:"Mild stress"}:i<89?{key:"serious",label:"Heat stress"}:{key:"crit",label:"Danger"}}var Wg=[{id:"DS-01",name:"Gauri",kind:"cow",breed:"HF cross",coat:"holstein",baseTemp:38.6,baseHr:66,milk:7,heatTol:1.15},{id:"DS-02",name:"Nandini",kind:"cow",breed:"Sahiwal",coat:"sahiwal",baseTemp:38.5,baseHr:64,milk:5.5,heatTol:.7},{id:"DS-03",name:"Lakshmi",kind:"cow",breed:"Gir",coat:"gir",baseTemp:38.5,baseHr:62,milk:5,heatTol:.7},{id:"DS-04",name:"Kajri",kind:"buffalo",breed:"Murrah",coat:"murrah",baseTemp:38.2,baseHr:56,milk:4.6,heatTol:1},{id:"DS-05",name:"Bhoori",kind:"buffalo",breed:"Murrah",coat:"murrah2",baseTemp:38.2,baseHr:58,milk:4.2,heatTol:1}],Xg={walk:75,graze:35,eat:25,drink:20,idle:12,rest:4},qg={walk:8,graze:6,eat:4,drink:6,idle:26,rest:40};function rc(i,t,e,n,s){let r=le((e-77)/12)*i.heatTol;i.stress+=(r-i.stress)*Math.min(1,t*1.3),i.stressAcc+=i.stress*t,i.cond==="fever"?i.sick=Math.min(1,i.sick+t*.9):i.sick=Math.max(0,i.sick-t*.5),i.cond==="recovering"&&i.sick<=0&&(i.cond="healthy"),i.cond==="estrus"&&(i.estrus-=t,i.estrus<=0&&(i.cond="healthy"));let a=i.cond==="estrus",o=Xg[i.state]*(1-.55*i.sick)*(1-.25*i.stress)*(a?1.9:1),c=qg[i.state]*(1-.6*i.sick)*(1-.4*i.stress)*(a?.6:1);i.act+=(o-i.act)*Math.min(1,t*3),i.rum+=(c-i.rum)*Math.min(1,t*2),i.temp=i.baseTemp+.15*Math.sin(sc*(n-10)/24)+.9*i.stress+1.7*i.sick+s(.04),i.hr=i.baseHr+.16*i.act+16*i.stress+14*i.sick+(a?6:0)+s(1.5)}var Yg=[{age:5,weight:520,lactation:3,dim:86,pregnant:!1,vaccines:[{name:"FMD booster",due:1},{name:"HS + BQ",due:64},{name:"Deworming",due:22}]},{age:6,weight:410,lactation:4,dim:142,pregnant:!0,vaccines:[{name:"FMD booster",due:48},{name:"HS + BQ",due:30},{name:"Deworming",due:9}]},{age:4,weight:395,lactation:2,dim:51,pregnant:!1,vaccines:[{name:"FMD booster",due:48},{name:"HS + BQ",due:30},{name:"Deworming",due:2}]},{age:7,weight:560,lactation:4,dim:118,pregnant:!0,vaccines:[{name:"FMD booster",due:75},{name:"HS + BQ",due:12},{name:"Deworming",due:40}]},{age:5,weight:535,lactation:3,dim:203,pregnant:!1,vaccines:[{name:"FMD booster",due:75},{name:"HS + BQ",due:12},{name:"Deworming",due:40}]}],nc=8.5,Co=18,ic=12;function du(i=11){let t=uu(i),e=m=>(t()-.5)*2*m,n=uu(i+404),s={t:8,dayOffset:0,hour:8,day:1,sun:0,isNight:!1,speed:1,paused:!1,weather:"sunny",heatwave:!1,climate:{ambT:24,ambRH:60,shedT:25,shedRH:60,thi:72,rawThi:72,cooling:!1},energy:{panelPeak:800,batCap:3e3,batWh:1900,solarW:0,loadW:0,genW:0,gridW:0,lights:!1,lightMode:"auto",chiller:0,tot:{solar:0,gen:0,grid:0,load:0}},water:{storage:560,storageCap:1e3,collection:260,collectionCap:800,trough:95,troughCap:120,pump:!1,pumpMode:"auto",pumpManual:!1,washing:0,lastWash:7,irrigating:!1,topup:!1,troughFill:!1,raining:!1,fogging:!1,tot:{recycled:0,fresh:0,rain:0}},biogas:{inlet:6,substrate:62,gas:1.3,gasCap:3,feeding:!1,stove:!1,gen:!1,compost:7,tot:{gas:0,dung:0,collected:0,lpg:0}},plot:{biomass:.5,moisture:.6,soil:.45,applying:0,harvests:0},feed:{trough:34,cap:50,store:70,filling:0,tot:{home:0,bought:0}},milk:{today:0,total:0,milking:!1,last:0},gate:{flash:0,inShed:0,crossings:0,last:null},animals:[],pats:[],patSeq:0,rover:{x:Ao.dock.x,z:Ao.dock.z,heading:0,state:"dock",load:0,path:[],target:null,timer:0,moving:!1},alerts:[],alertSeq:0,kpi:{water:0,renewable:100,waste:100,welfare:100,hygiene:100,score:0},live:{on:!1,temp:null,hum:null},evalT:0,pasture:{mode:"east",auto:!0,cover:{west:.8,east:.8},moved:0,grazed:{west:!1,east:!1}},geo:{sideGate:!1,outside:0,breaches:0},heat:new Float32Array(Co*ic),heatW:Co,heatH:ic,gpsT:0,trailT:0};function r(m,w,N,Y,R={}){s.alerts.some(C=>C.key===m&&C.active)||(s.alerts.unshift({id:++s.alertSeq,key:m,level:w,title:N,body:Y,t:s.t,active:w!=="info",...R}),s.alerts.length>40&&(s.alerts.length=40))}function a(m){for(let w of s.alerts)w.key===m&&w.active&&(w.active=!1)}let o=(m,w,N,Y,R)=>w?r(m,N,Y,R):a(m);Wg.forEach((m,w)=>{let N={x:ge.x0+3+w*2.6,z:2+w%2*3.5};s.animals.push({...m,idx:w,x:N.x,z:N.z,heading:t()*sc,state:"idle",timer:t()*.3,path:[],next:null,mode:"day",waterSlot:-1,thirst:.2+t()*.3,hunger:.2+t()*.3,dungT:.6+t()*2.2,cond:"healthy",sick:0,estrus:0,stress:0,stressAcc:0,act:20,rum:20,temp:m.baseTemp,hr:m.baseHr,hist:[],base:{temp:m.baseTemp,actDay:34,actNight:8,actHi:60,rumDay:14,rumNight:34,spd:nc},ai:{label:"Healthy",key:"healthy",score:0,health:100,advice:"All vitals within normal range.",flagged:!1,streak:0,calm:0},lastMilk:0,gps:{x:N.x,z:N.z,acc:1.6,sats:10,t:8},trail:[],distToday:0,walkAcc:0,walkT:0,restAcc:0,distAcc:0,budget:{graze:0,rest:0,walk:0,feed:0},lastDrink:8,lame:0,free:!1,recalled:!1,outside:!1,outsideT:0,herdDist:0,iso:!1,events:[],record:JSON.parse(JSON.stringify(Yg[w]))})});let c=(m,w,N)=>{m.events.unshift({t:s.t,kind:w,text:N}),m.events.length>24&&(m.events.length=24)},h=m=>m.z<he.z,u=m=>{let w=s.pasture.mode;return w==="west"?(m.x=Math.min(m.x,ws-1.3),m.z=Math.max(m.z,Es+.6)):w==="east"&&(m.x=Math.max(m.x,ws+1.3),m.z=Math.max(m.z,Es+.6)),m},f=()=>u({x:ge.x0+1.6+t()*(ge.x1-ge.x0-4.2),z:he.z+1.8+t()*(ge.z1-he.z-3.6)}),p=m=>h(m)?f():u(As({x:m.x+(t()-.5)*9,z:Math.max(he.z+1.8,m.z+(t()-.5)*9)})),l=m=>{let w=s.animals.filter(T=>T!==m),N=w.reduce((T,q)=>T+q.x,0)/w.length,Y=w.reduce((T,q)=>T+q.z,0)/w.length,R=null,C=-1;for(let T of[ge.x0+1.6,ws-1.5,ws+1.5,ge.x1-2.6])for(let q of[Es+1.4,ge.z1-1.6]){let Z=u({x:T,z:q}),K=Math.hypot(Z.x-N,Z.z-Y);K>C&&(C=K,R=Z)}return R},x=(m,w)=>{let N=w();for(let Y=0;Y<12&&s.animals.some(C=>{if(C===m)return!1;let T=C.path.length?C.path[C.path.length-1]:C;return Math.hypot(T.x-N.x,T.z-N.z)<2.8});Y++)N=w();return N};function v(m,w,N,Y,R){m.path=Ts(m,w),m.state="walk",m.next={state:N,dur:Y,face:R}}function g(m){for(let w=0;w<2;w++)if(!s.animals.some(N=>N!==m&&N.waterSlot===w))return w;return-1}function d(m){m.waterSlot=-1;let w=s.hour;if(m.free){m.state="graze",m.timer=.6+t()*.6;return}if(m.thirst>(m.mode==="night"?.95:.55)&&m.cond!=="estrus"){let Y=g(m);if(Y>=0)return m.waterSlot=Y,v(m,cu(Y),"drink",.3,-Math.PI/2)}if(m.mode==="night"){let Y=w>=12?24-w+5.5:5.5-w;return v(m,hu(m.idx),"rest",Math.max(.3,Y+t()*.25),Math.PI/2)}if(m.mode==="milk"){let Y=w<12?7:18;return v(m,ec(m.idx),"eat",Math.max(.2,Y-w),-Math.PI/2)}if(m.cond==="estrus"){let Y=x(m,f);for(let R=0;R<3;R++){let C=x(m,f);Math.hypot(C.x-m.x,C.z-m.z)>Math.hypot(Y.x-m.x,Y.z-m.z)&&(Y=C)}return v(m,Y,"idle",.03+t()*.06)}if(m.sick>.5){if(!m.iso&&!h(m))return m.iso=!0,v(m,l(m),"rest",1.5+t());m.state="rest",m.timer=1+t();return}if(m.iso=!1,m.lame>.4&&t()<.55){m.state="rest",m.timer=.9+t();return}if(m.hunger>.6&&s.feed.trough>2)return v(m,ec(m.idx),"eat",.55,-Math.PI/2);let N=t();if(N<.68)return v(m,x(m,()=>p(m)),"graze",1.2+t()*1.3);if(N<.9)return v(m,x(m,()=>p(m)),"rest",.8+t()*.9);m.state="idle",m.timer=.2+t()*.4}function b(m){let w=m.next||{state:"idle",dur:.2};if(m.state=w.state,m.timer=w.dur,m.next=null,w.face!==void 0&&(m.heading=w.face),m.state==="drink"){let N=Math.min(22,s.water.trough);s.water.trough-=N,N>3&&(m.thirst=.05,m.lastDrink=s.t)}else if(m.state==="eat"){let N=Math.min(m.mode==="milk"?4:2.5,s.feed.trough);s.feed.trough-=N,m.hunger=Math.max(0,m.hunger-N*.26)}}function S(m,w){let N=!1;for(;w>0&&m.path.length;){let Y=m.path[0],R=Y.x-m.x,C=Y.z-m.z,T=Math.hypot(R,C);T<=w?(m.x=Y.x,m.z=Y.z,m.path.shift(),w-=T):(m.x+=R/T*w,m.z+=C/T*w,m.heading=Math.atan2(C,R),w=0),N=!0}return N}function M(m,w){let N=s.hour>=20.5||s.hour<5.5?"night":s.hour>=5.75&&s.hour<7||s.hour>=16.75&&s.hour<18?"milk":"day";if(N!==m.mode&&(m.mode=N,m.state==="walk"?m.next&&(m.next.dur=0):m.timer=0),m.thirst=le(m.thirst+w*.135*(m.state==="rest"?.25:1)*(1+m.stress*.8),0,1.5),m.hunger=le(m.hunger+w*.11,0,1.5),m.state==="graze"){let K=Ro(m),et=s.pasture.cover;m.hunger=Math.max(0,m.hunger-w*.14*(m.free?1:.55+.55*et[K])),m.free||(et[K]=Math.max(.05,et[K]-.012*w),s.pasture.grazed[K]=!0)}m.cond==="lame"?m.lame=Math.min(1,m.lame+w*1.2):m.lame=Math.max(0,m.lame-w*.4);let Y=m.x,R=m.z;if(s.pasture.mode!=="whole"&&!m.free&&m.mode==="day"&&m.z>Es+.5&&Ro(m)!==s.pasture.mode&&(m.state==="graze"||m.state==="idle"||m.state==="rest")&&m.sick<.5&&(m.timer=0),m.dungT-=w,m.dungT<=0&&m.state!=="rest"){m.dungT=2.3+t()*1.6;let K=As({x:m.x-Math.cos(m.heading)*1.3,z:m.z-Math.sin(m.heading)*1.3});s.pats.length<16?s.pats.push({id:++s.patSeq,x:K.x,z:K.z,kg:2.2,t:s.t}):s.pats[Math.floor(t()*s.pats.length)].kg+=2.2,s.biogas.tot.dung+=2.2}if(m.state==="walk"){let K=m.z,et=nc*(1-.4*m.sick)*(1-.6*m.lame)*(m.cond==="estrus"?1.35:1),Q=m.x,H=m.z;S(m,et*w);let X=Math.hypot(m.x-Q,m.z-H);m.walkAcc+=X,m.walkT+=X/et;let G=m.path[m.path.length-1];if(G&&Math.hypot(G.x-m.x,G.z-m.z)>1.4){let rt=Math.cos(m.heading),ct=Math.sin(m.heading);for(let xt of s.animals){if(xt===m)continue;let At=xt.x-m.x,Bt=xt.z-m.z,vt=Math.hypot(At,Bt);if(vt<1.7&&At*rt+Bt*ct>0){let Tt=At*-ct+Bt*rt>=0?-1:1,I=(1.7-vt)*Math.min(.3,w*10);m.x+=-ct*Tt*I,m.z+=rt*Tt*I}}m.free||As(m)}K<he.z!=m.z<he.z&&(s.gate.flash=1,s.gate.crossings++,s.gate.last={name:m.name,dir:m.z<he.z?"in":"out",t:s.t}),m.path.length||b(m)}else m.timer-=w,m.timer<=0&&d(m);let C=Math.hypot(m.x-Y,m.z-R);m.distToday+=C*Ss,m.distAcc+=C*Ss,m.state==="rest"&&(m.restAcc+=w),m.budget[m.state==="walk"?"walk":m.state==="graze"?"graze":m.state==="eat"||m.state==="drink"?"feed":"rest"]+=w,!lu(m,.5)?(m.outsideT+=w,!m.outside&&m.outsideT>.04&&(m.outside=!0,s.geo.breaches++,c(m,"geo","Left the safe zone"),r(`geo:${m.id}`,"crit",`${m.name} has left the safe zone`,`GPS puts her outside the paddock fence${s.geo.sideGate?"; the side gate is open":""}. Send the belt's audio cue to guide her back.`,{animalId:m.id,kind:"geo"}))):m.outside||m.free&&m.recalled&&m.x<ge.x1-.6?(m.outside&&c(m,"geo",`Back inside the safe zone after ${Math.round(m.outsideT*60)} min`),m.outside=!1,m.outsideT=0,m.free=!1,m.recalled=!1,a(`geo:${m.id}`),s.animals.some(K=>K.free)||(s.geo.sideGate=!1)):m.outsideT=0;let q=s.climate,Z=h(m)?q.thi:Rs(q.ambT+2.2*s.sun*E(),q.ambRH);rc(m,w,Z,s.hour,e)}let z=(m,w)=>m.length?m.reduce((N,Y)=>N+w(Y),0)/m.length:0;function U(m){let w=m.walkT>.03?m.walkAcc/m.walkT:null;m.hist.push({t:s.t,temp:m.temp,hr:m.hr,act:m.act,rum:m.rum,spd:w,dist:m.distAcc,lie:Math.min(1,m.restAcc/.25)}),m.walkAcc=m.walkT=m.restAcc=m.distAcc=0;let N=s.animals.filter(L=>L!==m);m.herdDist=Math.hypot(m.x-N.reduce((L,$)=>L+$.x,0)/N.length,m.z-N.reduce((L,$)=>L+$.z,0)/N.length)*Ss,m.hist.length>96&&m.hist.shift();let Y=m.hist.slice(-4),R=m.hist.slice(-12),C=m.hist.slice(-24),T=s.hour>=21.5||s.hour<6.5,q=le((s.climate.thi-77)/12),Z=z(Y,L=>L.temp)-m.base.temp-.8*q,K=z(R,L=>L.act)/Math.max(4,T?m.base.actNight:m.base.actDay),et=z(C,L=>L.rum)/Math.max(6,T?m.base.rumNight:m.base.rumDay),Q=le(Z/.5),H=le((Z-.6)/.8)*.7+le((.85-et)/.4)*.2*Q+le((.85-K)/.4)*.1*Q,X=q*le((z(Y,L=>L.temp)-m.base.temp)/.5),G=z(m.hist.slice(-8),L=>L.act)/Math.max(45,m.base.actHi),rt=Z<.6?le((G-1.12)/.4):0,ct=m.ai,xt=m.hist.slice(-8).filter(L=>L.spd!=null),At=xt.length>=2?z(xt,L=>L.spd)/m.base.spd:xt.length?Math.max(.75,xt[0].spd/m.base.spd):1,Bt=Z<.5&&rt<.3&&s.t-(ct.feverT??-99)>3?le((.74-At)/.22):0,vt="healthy",Tt=Math.max(H,X,rt,Bt);Tt>=.5&&(vt=H>=X&&H>=rt&&H>=Bt?"fever":X>=rt&&X>=Bt?"heat":rt>=Bt?"estrus":"lame"),vt==="fever"&&(ct.feverT=s.t),vt!=="healthy"?(ct.streak++,ct.calm=0):(ct.calm++,ct.streak=0),ct.streak>=2&&(ct.flagged=!0,ct.key=vt,ct.score=Tt),ct.calm>=2&&(ct.flagged=!1,ct.key="healthy",ct.score=Tt),ct.dT=Z,ct.actR=K,ct.rumR=et,ct.actX=G,ct.mobR=At;let I=s.t-m.lastDrink;ct.parts={temp:Math.round(100*(1-le((Z-.3)/1.4))),rumination:Math.round(100*le(et/.95)),activity:Math.round(100*(1-le((.85-K)/.6)-le((G-1.12)/.8))),mobility:Math.round(100*le(At/.95)),hydration:Math.round(100*(1-le((I-14)/12)))},ct.health=Math.round(le(100-48*H-26*X-6*rt-30*Bt-10*le(m.thirst-1)-(m.outside?12:0),0,100));let ht=ct.flagged?ct.key:"healthy";ct.label={healthy:m.cond==="recovering"?"Recovering":"Healthy",fever:"Possible fever / infection",heat:"Heat stress",estrus:"In heat (estrus)",lame:"Possible lameness"}[ht],ct.advice={healthy:"All vitals within this animal's normal range.",fever:`Body temperature is ${Math.max(0,Z).toFixed(1)} \xB0C above her baseline and rumination has dropped.${m.herdDist>12?` GPS shows her keeping ${m.herdDist.toFixed(0)} m away from the herd.`:""} Isolate, check the udder and call the vet.`,lame:`GPS walking speed is ${(At*100).toFixed(0)} % of her normal gait and she is lying down more, with normal temperature. Check hooves and legs.`,heat:"Body temperature rising with the shed THI. Move to shade, run fans and foggers, give cool water.",estrus:`Restless: activity is ${(G*100).toFixed(0)} % of her busiest normal period, with less rumination. Best breeding window is the next 12-18 hours.`}[ht];let nt=`cow:${m.id}`;ht!==ct.shown&&(ht!=="healthy"?c(m,ht,`AI flagged: ${ct.label}`):ct.shown&&ct.shown!=="healthy"&&c(m,"ok","Back to normal"),a(nt),ct.shown=ht),ct.flagged?r(nt,ht==="fever"?"crit":"warn",`${m.name}: ${ct.label}`,ct.advice,{animalId:m.id,kind:ht}):a(nt),o(`drink:${m.id}`,I>24,"warn",`${m.name} has not been to the water trough`,`No trough visit on GPS for ${I.toFixed(0)} h. Check on her.`)}function F(m){let w=null,N=1e9;for(let Y of s.pats){let R=Math.hypot(Y.x-m.x,Y.z-m.z)+(Y.z<he.z!=m.z<he.z?8:0);R<N&&(N=R,w=Y)}return w}function V(m){let w=s.rover;if(w.moving=!1,w.state==="dock"){let N=s.pats.reduce((Y,R)=>Math.max(Y,s.t-R.t),0);(s.pats.length>=2||N>1)&&(w.target=F(w),w.path=Ts(w,w.target),w.state="toPat")}else if(w.state==="toPat"||w.state==="return")w.moving=S(w,24*m),w.path.length||(w.timer=.05,w.state=w.state==="toPat"?"collect":"dump");else if(w.state==="collect"){if(w.timer-=m,w.timer<=0){let N=s.pats.indexOf(w.target);N>=0&&(w.load+=s.pats[N].kg,s.pats.splice(N,1)),w.target=w.load<11?F(w):null,w.target?(w.path=Ts(w,w.target),w.state="toPat"):(w.path=Ts(w,Ao.dock),w.state="return")}}else w.state==="dump"&&(w.heading=0,w.timer-=m,w.timer<=0&&(s.biogas.inlet+=w.load,s.biogas.tot.collected+=w.load,w.load=0,w.state="dock"))}let E=()=>s.weather==="sunny"?1:s.weather==="cloudy"?.36:.14;function y(m){let w=s.hour;s.t+=m,s.hour=s.t%24,s.day=Math.floor(s.t/24)+1-s.dayOffset;let N=nt=>w<=s.hour?w<nt&&s.hour>=nt:nt>w||nt<=s.hour;if(s.hour<w){s.milk.today=0;for(let nt of s.animals)nt.distToday=0,nt.budget={graze:0,rest:0,walk:0,feed:0}}if(N(9))for(let nt of s.animals)for(let L of nt.record.vaccines){let $=L.due-s.day;$<=1&&r(`vac:${nt.id}:${L.name}`,"warn",`${nt.name}: ${L.name} ${$<0?"overdue":$===0?"due today":"due tomorrow"}`,"From the herd register. Mark it done in her record once given.",{animalId:nt.id,kind:"vaccine"})}s.sun=s.hour>6&&s.hour<18?Math.sin(Math.PI*(s.hour-6)/12):0,s.isNight=s.sun<.06;let Y=s.weather==="rain",R=E(),C=s.climate,T=23.5+4.5*Math.sin(sc*(s.hour-9)/24)+(s.heatwave?8:0)+(Y?-3.5:s.weather==="cloudy"?-1.2:0),q=le(62-2*(T-23.5)+(Y?26:s.weather==="cloudy"?8:0),22,97);if(C.ambT+=(T-C.ambT)*Math.min(1,m*1.6),C.ambRH+=(q-C.ambRH)*Math.min(1,m*1.6),s.live.on&&s.live.temp!=null?(C.shedT=s.live.temp,C.shedRH=s.live.hum??C.shedRH,C.rawThi=Rs(C.shedT,C.shedRH)):(C.rawThi=Rs(C.ambT+1,C.ambRH),C.shedT+=(C.ambT+1-(C.cooling?4.5:0)-C.shedT)*Math.min(1,m*2.5),C.shedRH+=(le(C.ambRH+(C.cooling?6:0),20,98)-C.shedRH)*Math.min(1,m*2.5)),!C.cooling&&C.rawThi>=79?C.cooling=!0:C.cooling&&C.rawThi<=76.5&&(C.cooling=!1),C.thi=Rs(C.shedT,C.shedRH),s.milk.milking=s.hour>=6&&s.hour<7||s.hour>=17&&s.hour<18,N(7)||N(18)){let nt=0;for(let L of s.animals){let $=L.milk*(1-.3*le(L.stressAcc/5))*(1-.45*L.sick)*(.96+t()*.08);L.free&&($=0),L.lastMilk=$,L.stressAcc=0,nt+=$;let pt=`yield:${L.id}`;if($<.8*L.milk){let dt=L.free?"Missed milking: outside the safe zone":`Milk yield down ${Math.round(100*(1-$/L.milk))} % (${$.toFixed(1)} L)`;c(L,"milk",dt),r(pt,"warn",`${L.name}: ${L.free?"missed milking":"milk yield dropped"}`,L.free?"The gate counter and GPS agree she never came in. Guide her back.":`This milking gave ${$.toFixed(1)} L against her usual ${L.milk.toFixed(1)} L. A falling yield is often the first sign of illness or heat stress.`,{animalId:L.id,kind:"milk"})}else a(pt)}s.milk.today+=nt,s.milk.total+=nt,s.milk.last=nt,s.energy.chiller=3,s.water.washing=1,r(`milk:${Math.floor(s.t)}`,"info",`${s.hour<12?"Morning":"Evening"} milking done`,`${nt.toFixed(1)} L collected and sent to the chiller. Shed wash started.`)}if(N(5.7)||N(11)||N(16.6)){let nt=s.feed.cap-s.feed.trough,L=Math.min(nt,s.feed.store);s.feed.store-=L,s.feed.tot.home+=L,s.feed.tot.bought+=nt-L,s.feed.trough=s.feed.cap,s.feed.filling=.4}s.feed.filling=Math.max(0,s.feed.filling-m);let Z=s.biogas;if(Z.feeding=Z.inlet>.2,Z.feeding){let nt=Math.min(Z.inlet,7*m);Z.inlet-=nt,Z.substrate+=nt}let K=Z.substrate/16*m;Z.substrate-=K,Z.gas=Math.min(Z.gasCap,Z.gas+K*.042),Z.tot.gas+=K*.042,Z.compost+=K*.28;let et=s.hour>=7&&s.hour<8.2||s.hour>=12.4&&s.hour<13.4||s.hour>=19&&s.hour<20.2;Z.stove=et&&Z.gas>.15,Z.stove&&(Z.gas-=.4*m,Z.tot.lpg+=.4*m*.43);let Q=s.energy,H=Q.batWh/Q.batCap;!Z.gen&&(Z.gas>Z.gasCap*.92||H<.3&&Z.gas>.5)?Z.gen=!0:Z.gen&&(Z.gas<.2||H>.6&&Z.gas<Z.gasCap*.7||H>.99)&&(Z.gen=!1),Z.gen&&(Z.gas=Math.max(0,Z.gas-.55*m));let X=s.plot;N(8.5)&&Z.compost>=12&&(X.soil=le(X.soil+Z.compost*.006),Z.compost=0,X.applying=.6),X.applying=Math.max(0,X.applying-m),X.soil=Math.max(.15,X.soil-.004*m),X.moisture=le(X.moisture-(.02+.04*s.sun*R)*m+(Y?.5*m:0));let G=s.water,rt=s.hour>=6.5&&s.hour<9.5||s.hour>=16&&s.hour<18.5;if(!G.irrigating&&rt&&X.moisture<.45&&!Y&&G.storage>80?G.irrigating=!0:G.irrigating&&(X.moisture>.92||G.storage<30||Y)&&(G.irrigating=!1),X.biomass+=.04*s.sun*Math.max(R,.45)*(.3+.7*X.moisture)*(.55+.9*X.soil)*m,X.biomass>=1&&(X.biomass=.18,X.harvests++,s.feed.store+=110,r(`harvest:${X.harvests}`,"info","Fodder harvested","110 kg of green fodder grown on compost moved to the feed store.")),G.raining=Y,Y){let nt=Math.min(260*m,G.collectionCap-G.collection);G.collection+=nt,G.tot.rain+=nt}let ct=0;if(G.washing>0){let nt=Math.min(150*m,G.storage);G.storage-=nt,G.collection=Math.min(G.collectionCap,G.collection+nt*.85),G.washing-=m,G.lastWash=s.t}if(G.fogging=C.cooling&&G.storage>10,G.fogging&&(ct+=25*m),G.irrigating&&(ct+=110*m,X.moisture=le(X.moisture+.5*m)),G.storage=Math.max(0,G.storage-ct),G.pumpMode==="auto"?!G.pump&&G.collection>110&&G.storage<G.storageCap*.93?G.pump=!0:G.pump&&(G.collection<25||G.storage>=G.storageCap*.98)&&(G.pump=!1):(G.pump=G.pumpManual,G.pump&&(G.collection<4||G.storage>=G.storageCap)&&(G.pump=G.pumpManual=!1,r(`dry:${Math.floor(s.t*4)}`,"info","Pump stopped automatically",G.collection<4?"Collection tank is empty. Dry-run protection switched the pump off.":"Storage tank is full."))),G.pump){let nt=Math.min(140*m,G.collection,G.storageCap-G.storage);G.collection-=nt,G.storage+=nt,G.tot.recycled+=nt}!G.topup&&G.storage<110&&G.collection<110?G.topup=!0:G.topup&&G.storage>330&&(G.topup=!1),G.topup&&(G.storage+=300*m,G.tot.fresh+=300*m),!G.troughFill&&G.trough<G.troughCap*.5?G.troughFill=!0:G.troughFill&&G.trough>=G.troughCap*.97&&(G.troughFill=!1),G.troughFill&&(G.trough+=200*m,G.tot.fresh+=200*m);for(let nt of s.animals)M(nt,m);for(let nt=0;nt<s.animals.length;nt++)for(let L=nt+1;L<s.animals.length;L++){let $=s.animals[nt],pt=s.animals[L];if($.state==="walk"||pt.state==="walk"||$.free||pt.free||$.z<he.z+1||pt.z<he.z+1)continue;let dt=$.x-pt.x,A=$.z-pt.z,_=Math.hypot(dt,A)||.01;if(_<2.4){let D=Math.min(2.4-_,3*m)/2,O=_>.02?dt/_:1,it=_>.02?A/_:0;$.x+=O*D,$.z+=it*D,pt.x-=O*D,pt.z-=it*D,As($),As(pt)}}let xt=s.pasture,At=.035*s.sun*Math.max(R,.4)*(Y?1.3:1)*m;for(let nt of["west","east"])xt.cover[nt]=Math.min(1,xt.cover[nt]+At*(1.1-xt.cover[nt])*(xt.grazed[nt]?.45:1)),xt.grazed[nt]=!1;if(xt.auto&&xt.mode!=="whole"){let nt=xt.mode==="west"?"east":"west";xt.cover[xt.mode]<.35&&xt.cover[nt]>xt.cover[xt.mode]+.25&&(xt.mode=nt,xt.moved++,r(`rotate:${xt.moved}`,"info",`Herd moved to the ${nt} cell`,`Grass cover in the grazed cell fell to ${Math.round(xt.cover[nt==="west"?"east":"west"]*100)} %. The virtual fence has shifted so it can regrow.`))}if(s.gpsT-=m,s.gpsT<=0){s.gpsT+=.05;let nt=(s.trailT-=.05)<=0;nt&&(s.trailT+=.1);for(let L=0;L<s.heat.length;L++)s.heat[L]*=.9985;s.geo.outside=0;for(let L of s.animals){let $=h(L),pt=$?.42:.12;L.gps.x=L.x+(n()-.5)*2*pt,L.gps.z=L.z+(n()-.5)*2*pt,L.gps.acc=$?4.5+n()*2:1.2+n()*.8,L.gps.sats=$?4+Math.floor(n()*3):9+Math.floor(n()*4),L.gps.t=s.t,nt&&(L.trail.push({x:L.gps.x,z:L.gps.z,t:s.t}),L.trail.length>60&&L.trail.shift());let dt=Math.floor((L.x+18)/2),A=Math.floor((L.z+12)/2);dt>=0&&dt<Co&&A>=0&&A<ic&&(s.heat[A*Co+dt]+=1),L.outside&&s.geo.outside++}}if(V(m),s.gate.flash=Math.max(0,s.gate.flash-m*4),s.gate.inShed=s.animals.filter(h).length,Q.lights=Q.lightMode==="on"||Q.lightMode==="auto"&&s.isNight,Q.chiller=Math.max(0,Q.chiller-m),Q.solarW=Q.panelPeak*Math.pow(s.sun,1.15)*R,Q.genW=Z.gen?800:0,Q.loadW=15+(Q.lights?120:0)+(G.pump?370:0)+(C.cooling?160:0)+(s.rover.moving?30:0)+(Q.chiller>0?250:0),Q.batWh+=(Q.solarW+Q.genW-Q.loadW)*m,Q.gridW=0,Q.batWh>Q.batCap&&(Q.batWh=Q.batCap),Q.batWh<0&&(Q.tot.grid+=-Q.batWh,Q.gridW=-Q.batWh/m,Q.batWh=0),Q.tot.solar+=Q.solarW*m,Q.tot.gen+=Q.genW*m,Q.tot.load+=Q.loadW*m,s.evalT-=m,s.evalT<=0){s.evalT+=.25;for(let nt of s.animals)U(nt)}let Bt=Q.batWh/Q.batCap;o("bat",Bt<.2,"warn","Battery low","Battery under 20 %. Biogas generator will back up the load."),o("grid",Q.gridW>0,"warn","Running on grid power","Solar, battery and biogas cannot cover the load right now."),o("thi",C.thi>=79,"warn","Shed heat stress",`THI in the shed is ${C.thi.toFixed(0)}. Fans and foggers are running.`),o("trough",G.trough<6,"crit","Drinking trough empty","Animals cannot drink. Check the fresh water line."),o("dung",s.pats.length>=10,"warn","Dung build-up","More than 10 dung pats waiting. Check the collector rover.");let vt=s.kpi,Tt=s.prior||{recycled:0,fresh:0},I=G.tot.recycled+Tt.recycled,ht=G.tot.fresh+Tt.fresh;vt.water=I+ht>1?100*I/(I+ht):0,vt.renewable=Q.tot.load>1?100*(1-Q.tot.grid/Q.tot.load):100,vt.waste=100*le(1-s.pats.reduce((nt,L)=>nt+L.kg,0)/(Z.tot.dung+40)),vt.welfare=z(s.animals,nt=>nt.ai.health),vt.hygiene=le(100-5*s.pats.length-2.5*Math.max(0,s.t-G.lastWash-13),0,100),vt.score=Math.round(.25*Math.min(100,vt.water*2)+.25*vt.renewable+.2*vt.waste+.2*vt.welfare+.1*vt.hygiene)}for(let m=0;m<24/.04;m++)y(.04);for(let m of s.animals){let w=m.hist.filter(C=>{let T=C.t%24;return T>=6.5&&T<21.5}),N=m.hist.filter(C=>!w.includes(C)),Y=0;for(let C=8;C<=m.hist.length;C++)Y=Math.max(Y,z(m.hist.slice(C-8,C),T=>T.act));let R=m.hist.filter(C=>C.spd!=null);m.base={spd:R.length?z(R,C=>C.spd):nc,actHi:Y,temp:z(m.hist,C=>C.temp),actDay:z(w,C=>C.act),actNight:z(N,C=>C.act),rumDay:z(w,C=>C.rum),rumNight:z(N,C=>C.rum)},m.stressAcc=0,m.events.length=0,m.ai.shown="healthy"}Object.assign(s.pasture,{mode:"east",moved:0}),s.pasture.cover={west:.82,east:.5},s.geo.breaches=0,s.dayOffset=1,s.day=1,s.alerts.length=0,s.gate.crossings=0,s.milk.total=s.milk.today=0,Object.assign(s.energy.tot,{solar:0,gen:0,grid:0,load:0});let B={recycled:s.water.tot.recycled,fresh:s.water.tot.fresh};return Object.assign(s.water.tot,{recycled:0,fresh:0,rain:0}),Object.assign(s.biogas.tot,{gas:0,dung:0,collected:0,lpg:0}),Object.assign(s.feed.tot,{home:0,bought:0}),s.prior=B,s.warp=0,s.warpTo=m=>{s.warp=((m-s.hour)%24+24)%24||24},s.warpBy=m=>{s.warp+=m},s.step=m=>{let w=Math.min(m,.1),N=s.paused?0:w*Gg*s.speed;if(s.warp>0){let Y=Math.min(s.warp,Math.max(4,s.warp*2.2)*w);s.warp-=Y,N+=Y}for(;N>1e-6;){let Y=Math.min(N,.04);y(Y),N-=Y}},s.advance=m=>{for(let w=m;w>1e-6;w-=.04)y(Math.min(.04,w))},s.jumpTo=m=>s.advance(((m-s.hour)%24+24)%24||24),s.startWash=()=>{s.water.washing<=0&&(s.water.washing=1)},s.inject=(m,w)=>{let N=s.animals.find(Y=>Y.id===m);N&&(N.cond=w,w==="estrus"&&(N.estrus=14),N.state!=="walk"&&(N.timer=0))},s.treat=m=>{let w=s.animals.find(N=>N.id===m);w&&(w.cond==="lame"?(w.cond="recovering",c(w,"vet","Hoof trimmed and treated"),r(`vet:${m}:${s.t.toFixed(2)}`,"info",`${w.name}: hoof treated`,"Hoof trimmer visit logged. GPS will show her gait returning to normal.")):w.cond==="fever"?(c(w,"vet","Vet visit: treatment started"),w.cond="recovering",r(`vet:${m}:${s.t.toFixed(2)}`,"info",`${w.name}: treatment started`,"Vet visit logged. The belt keeps watching her recovery.")):w.cond==="estrus"&&(w.cond="healthy",w.estrus=0,c(w,"vet","Insemination recorded"),r(`ai:${m}:${s.t.toFixed(2)}`,"info",`${w.name}: breeding recorded`,"Insemination logged in the herd record.")))},s.stray=m=>{let w=s.animals.find(Y=>Y.id===m);if(!w||w.free)return;w.free=!0,w.recalled=!1,s.geo.sideGate=!0;let N={x:ge.x1-1.3,z:1.5};w.path=[...Ts(w,N),{x:ge.x1+1.2,z:1.5},{x:tc.x,z:tc.z}],w.state="walk",w.next={state:"graze",dur:2},w.waterSlot=-1},s.recall=m=>{let w=s.animals.find(N=>N.id===m);!w||!w.free||w.recalled||(w.recalled=!0,c(w,"geo","Audio cue sent from the app"),w.path=[{x:ge.x1+1.2,z:1.5},{x:ge.x1-1.3,z:1.5},u({x:ge.x1-4.5,z:4})],w.state="walk",w.next={state:"graze",dur:1})},s.setPasture=m=>{if(m==="auto"){s.pasture.auto=!s.pasture.auto,s.pasture.auto&&s.pasture.mode==="whole"&&(s.pasture.mode=s.pasture.cover.west>=s.pasture.cover.east?"west":"east");return}s.pasture.mode=m,m==="whole"&&(s.pasture.auto=!1)},s.markVaccine=(m,w)=>{let N=s.animals.find(R=>R.id===m),Y=N&&N.record.vaccines.find(R=>R.name===w);Y&&(Y.due=s.day+(w==="Deworming"?90:180),c(N,"vet",`${w} given`),a(`vac:${m}:${w}`))},s.report=()=>{let m=N=>`"${String(N).replace(/"/g,'""')}"`,w=[["Tag","Name","Breed","AI status","Health score","Body temp C","Heart rate bpm","Rumination min/h","Activity index","Walking speed % of normal","Distance today m","Zone","Latitude","Longitude","GPS accuracy m","Last milking L","Days in milk","Pregnant","Next due"]];for(let N of s.animals){let Y=au(N.gps.x,N.gps.z),R=[...N.record.vaccines].sort((C,T)=>C.due-T.due)[0];w.push([N.id,N.name,`${N.breed} ${N.kind}`,N.ai.label,N.ai.health,N.temp.toFixed(1),N.hr.toFixed(0),N.rum.toFixed(0),N.act.toFixed(0),((N.ai.mobR??1)*100).toFixed(0),N.distToday.toFixed(0),s.zoneOf(N),Y.lat.toFixed(6),Y.lon.toFixed(6),N.gps.acc.toFixed(1),N.lastMilk.toFixed(1),N.record.dim+s.day-1,N.record.pregnant?"yes":"no",`${R.name} (day ${R.due})`])}w.push([],["Health record"]),w.push(["Tag","Name","Farm day","Time","Event"]);for(let N of s.animals)for(let Y of[...N.events].reverse())w.push([N.id,N.name,Math.floor(Y.t/24)+1-s.dayOffset,`${String(Math.floor(Y.t%24)).padStart(2,"0")}:${String(Math.floor(Y.t%1*60)).padStart(2,"0")}`,Y.text]);return w.map(N=>N.map(m).join(",")).join(`\r
`)},s.raise=r,s.zoneOf=m=>m.outside?"Outside the fence":h(m)?"Cow shed":m.z<Es?"Gate lane":Ro(m)==="west"?"West cell":"East cell",s}var $g=["hour","sun","ambT","ambRH","shedT","shedRH","thi","padThi","solarW","loadW","genW","gridW","bat","storage","collection","trough","gas","substrate","compost","inlet","pats","biomass","moisture","soil","feedTrough","feedStore","milkToday","inShed","crossings","score","kWater","kRenew","recycled","fresh","rain","solarWh","loadWh","gridWh","gasMade","dung","collected","lpg","milkTotal","homeFeed","cTemp","cHr","cAct","cRum","cHealth","cStress","cMilk"];function oc({weather:i="sunny",heatwave:t=!1,from:e=4.5,hours:n=19,step:s=.05,cow:r=0}={}){let a=du();a.advance(((e-a.hour)%24+24)%24),a.weather=i,a.heatwave=t;let o={recycled:a.water.tot.recycled,fresh:a.water.tot.fresh,rain:a.water.tot.rain,solar:a.energy.tot.solar,load:a.energy.tot.load,grid:a.energy.tot.grid,gas:a.biogas.tot.gas,dung:a.biogas.tot.dung,collected:a.biogas.tot.collected,lpg:a.biogas.tot.lpg,milk:a.milk.total,home:a.feed.tot.home,cross:a.gate.crossings},c=i==="sunny"?1:i==="cloudy"?.36:.14,h=[],u=[],f=new Set(a.alerts.map(x=>x.id)),p=Math.round(n/s);for(let x=0;x<=p;x++){x&&a.advance(s);let v=a.climate,g=a.energy,d=a.water,b=a.biogas,S=a.animals[r];h.push({hour:e+x*s,sun:a.sun,isNight:a.isNight,ambT:v.ambT,ambRH:v.ambRH,shedT:v.shedT,shedRH:v.shedRH,thi:v.thi,padThi:Rs(v.ambT+2.2*a.sun*c,v.ambRH),cooling:v.cooling,solarW:g.solarW,loadW:g.loadW,genW:g.genW,gridW:g.gridW,bat:g.batWh/g.batCap,lights:g.lights,storage:d.storage,collection:d.collection,trough:d.trough,pump:d.pump,washing:d.washing>0,irrigating:d.irrigating,fogging:d.fogging,topup:d.topup,raining:d.raining,gas:b.gas,substrate:b.substrate,compost:b.compost,inlet:b.inlet,stove:b.stove,gen:b.gen,pats:a.pats.length,rover:a.rover.state,biomass:a.plot.biomass,moisture:a.plot.moisture,soil:a.plot.soil,feedTrough:a.feed.trough,feedStore:a.feed.store,milkToday:a.milk.today,milking:a.milk.milking,inShed:a.gate.inShed,crossings:a.gate.crossings-o.cross,score:a.kpi.score,kWater:a.kpi.water,kRenew:a.kpi.renewable,recycled:d.tot.recycled-o.recycled,fresh:d.tot.fresh-o.fresh,rain:d.tot.rain-o.rain,solarWh:g.tot.solar-o.solar,loadWh:g.tot.load-o.load,gridWh:g.tot.grid-o.grid,gasMade:b.tot.gas-o.gas,dung:b.tot.dung-o.dung,collected:b.tot.collected-o.collected,lpg:b.tot.lpg-o.lpg,milkTotal:a.milk.total-o.milk,homeFeed:a.feed.tot.home-o.home,cTemp:S.temp,cHr:S.hr,cAct:S.act,cRum:S.rum,cHealth:S.ai.health,cStress:S.stress,cMilk:S.lastMilk,cState:S.state,cLabel:S.ai.label,cKey:S.ai.flagged?S.ai.key:"healthy",cAdvice:S.ai.advice,cZone:a.zoneOf(S)});for(let M of a.alerts)f.has(M.id)||(f.add(M.id),u.push({hour:e+x*s,level:M.level,title:M.title,body:M.body}))}let l=a.animals[r];return{from:e,hours:n,step:s,rows:h,events:u,weather:i,heatwave:t,cow:{id:l.id,name:l.name,breed:l.breed,kind:l.kind,baseTemp:l.baseTemp,baseHr:l.baseHr,heatTol:l.heatTol,milk:l.milk},herd:a.animals.map(x=>({id:x.id,name:x.name,breed:x.breed,kind:x.kind,coat:x.coat})),panelPeak:a.energy.panelPeak,batCap:a.energy.batCap,storageCap:a.water.storageCap,collectionCap:a.water.collectionCap,gasCap:a.biogas.gasCap}}function ac(i,t){let e=Math.min(i.rows.length-1,Math.max(0,(t-i.from)/i.step)),n=Math.min(i.rows.length-2,Math.floor(e)),s=e-n,r=i.rows[n],a=i.rows[n+1],o={...s<.5?r:a};for(let c of $g)o[c]=r[c]+(a[c]-r[c])*s;return o}var or=class i extends jt{constructor(){let t=i.SkyShader,e=new ve({name:t.name,uniforms:Cn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:we,depthWrite:!1});super(new ln(1,1,1),e),this.isSky=!0}};or.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new W},up:{value:new W(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Xe=i=>1.5*Math.sin(i*.085),cc=i=>1.5*.085*Math.cos(i*.085),Zg=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Cs=i=>(i=Zg(i),i*i*(3-2*i)),Le=(i,t,e)=>i+(t-i)*e;function ar(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Jg=[52,36],lc=14;function fu(i,t,e){let n=ar(42),s=new or;s.scale.setScalar(4e3),t.add(s);let r=s.material.uniforms;t.fog=new no("#c2d9ea",.0035);let a=_n(64,64,I=>{let ht=I.createRadialGradient(32,32,0,32,32,32);ht.addColorStop(0,"rgba(255,255,255,1)"),ht.addColorStop(.4,"rgba(255,255,255,0.55)"),ht.addColorStop(1,"rgba(255,255,255,0)"),I.fillStyle=ht,I.fillRect(0,0,64,64)}),o=(I,ht,nt,L,$)=>{let pt=_n(2048,1024,(dt,A,_)=>{let D=ar(ht);for(let O=0;O<I;O++){let it=D()*A,J=_*(nt[0]+D()*(nt[1]-nt[0])),mt=$[0]+D()*($[1]-$[0]);for(let lt=0;lt<9;lt++){let gt=it+(D()-.5)*mt*3.2,zt=J+(D()-.5)*mt*.7,ft=mt*(.45+D()*.75);for(let Mt of[-A,0,A]){let wt=dt.createRadialGradient(gt+Mt,zt,0,gt+Mt,zt,ft);wt.addColorStop(0,`rgba(255,255,255,${L})`),wt.addColorStop(.55,`rgba(255,255,255,${L*.45})`),wt.addColorStop(1,"rgba(255,255,255,0)"),dt.fillStyle=wt,dt.fillRect(gt+Mt-ft,zt-ft,ft*2,ft*2)}}}});return pt.wrapS=tn,pt},c=(I,ht)=>{let nt=new jt(new ye(ht,48,24,0,Math.PI*2,0,Math.PI*.52),new xe({map:I,transparent:!0,opacity:0,depthWrite:!1,side:we,fog:!1,toneMapped:!0}));return nt.renderOrder=-1,nt.frustumCulled=!1,t.add(nt),nt},h=c(o(34,3,[.5,.86],.34,[26,60]),3e3),u=c(o(170,9,[.05,.98],.42,[50,120]),2800),f=new ae;{let I=[];for(let ht=0;ht<1400;ht++){let nt=n()*Math.PI*2,L=.06+n()*1.45;I.push(2500*Math.cos(L)*Math.cos(nt),2500*Math.sin(L),2500*Math.cos(L)*Math.sin(nt))}f.setAttribute("position",new Xt(I,3))}let p=new ds(f,new Ai({color:"#e8eeff",size:2.2,sizeAttenuation:!1,map:a,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));p.frustumCulled=!1,t.add(p);let l=new jt(new ye(55,24,16),new xe({color:"#f1f4ff",fog:!1,transparent:!0,opacity:0}));l.position.set(-900,1250,-1900),t.add(l);let x=new ho("#bcd6f2","#5c5a3c",1),v=new po("#fff1dc",3);v.castShadow=!0,v.shadow.mapSize.set(2048,2048),Object.assign(v.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:140}),v.shadow.bias=-4e-4,v.shadow.normalBias=.035,t.add(x,v,v.target);{let I=new hs(i),ht=new us,nt=new ye(10,32,16),L=[],$=new Dt,pt=nt.attributes.position;for(let A=0;A<pt.count;A++){let _=pt.getY(A)/10;_>0?$.set("#eef3f6").lerp(new Dt("#7fb2ea"),Math.pow(_,.55)):$.set("#eef3f6").lerp(new Dt("#566b33"),Math.min(1,-_*4)),L.push($.r,$.g,$.b)}nt.setAttribute("color",new Xt(L,3)),ht.add(new jt(nt,new xe({vertexColors:!0,side:we})));let dt=new jt(new ye(1.1,16,12),new xe({color:new Dt(30,27,22)}));dt.position.set(4,7,5),ht.add(dt),t.environment=I.fromScene(ht,.03).texture,I.dispose()}let g=_n(512,512,(I,ht,nt)=>{let L=ar(8);I.fillStyle="#4f7628",I.fillRect(0,0,ht,nt);for(let $=0;$<9e3;$++)I.fillStyle=["#45691f","#587f2c","#4b7024","#63883a","#3f611d"][$%5],I.globalAlpha=.5,I.beginPath(),I.arc(L()*ht,L()*nt,1+L()*3.5,0,7),I.fill();for(let $=0;$<60;$++)I.fillStyle=L()<.5?"#6b8a3a":"#3c5a1c",I.globalAlpha=.12,I.beginPath(),I.arc(L()*ht,L()*nt,20+L()*60,0,7),I.fill()});g.wrapS=g.wrapT=tn,g.repeat.set(260,200);let d=new jt(new cn(2600,2e3),new Rn({map:g}));d.rotation.x=-Math.PI/2,d.position.set(70,0,0),d.receiveShadow=!0,t.add(d);let b=_n(256,256,(I,ht,nt)=>{let L=ar(21);I.fillStyle="#8a6f4c",I.fillRect(0,0,ht,nt);for(let $=0;$<2600;$++)I.fillStyle=["#7b6242","#9a7f5a","#6f5739","#a58a66","#84694a"][$%5],I.globalAlpha=.55,I.beginPath(),I.arc(L()*ht,L()*nt,.6+L()*3,0,7),I.fill();for(let $=0;$<26;$++)I.fillStyle="#5d482e",I.globalAlpha=.25,I.beginPath(),I.ellipse(L()*ht,L()*nt,5,7,L()*3,0,7),I.fill()});b.wrapS=b.wrapT=tn;let S=new De({map:b,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});{let I=[],ht=[],nt=[],pt=Math.round(410);for(let _=0;_<=pt;_++){let D=-30+_/pt*205,O=Xe(D),it=cc(D),J=1/Math.hypot(1,it),mt=1.12+.12*Math.sin(D*.7);if(I.push(D+it*J*mt,.012,O-J*mt,D-it*J*mt,.012,O+J*mt),ht.push(D/2.4,0,D/2.4,1),_<pt){let lt=_*2;nt.push(lt,lt+1,lt+2,lt+1,lt+3,lt+2)}}let dt=new ae;dt.setAttribute("position",new Xt(I,3)),dt.setAttribute("uv",new Xt(ht,2)),dt.setIndex(nt),dt.computeVertexNormals();let A=new jt(dt,S);A.receiveShadow=!0,t.add(A)}let M=[];for(let I=0;I<lc;I++){let ht=e[I];M.push(ht?new ie(ht[0],ht[1],ht[2],ht[3]):new ie(0,9999,0,0))}let z={uTime:{value:0},uWind:{value:new Ft(.5,.2)},uPads:{value:M}},U=()=>{let I=new mo;return I.setAttribute("position",new Xt([-.5,0,0,.5,0,0,-.32,.5,0,.32,.5,0,0,1,0],3)),I.setIndex([0,1,2,1,3,2,2,3,4]),I};function F(I,ht,nt,L,$){let pt=U(),dt=new Float32Array(I*3);for(let O=0;O<I;O++)dt[O*3]=n()*ht[0],dt[O*3+1]=n()*ht[1],dt[O*3+2]=n();pt.setAttribute("aOff",new Ti(dt,3)),pt.instanceCount=I;let A={...z,uCenter:{value:$},uTile:{value:new Ft(...ht)},uSize:{value:new Ft(nt,L)}},_=new Rn({color:"#ffffff",side:Ie});_.onBeforeCompile=O=>{Object.assign(O.uniforms,A),O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
          attribute vec3 aOff; uniform vec2 uCenter; uniform vec2 uTile; uniform vec2 uSize; uniform float uTime; uniform vec2 uWind; uniform vec4 uPads[${lc}];
          varying float vTip; varying float vSeed;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`
          vec2 cell = mod(aOff.xy - uCenter + uTile * 0.5, uTile) - uTile * 0.5;
          vec2 wp = uCenter + cell;
          float edge = max(abs(cell.x) / (uTile.x * 0.5), abs(cell.y) / (uTile.y * 0.5));
          float keep = 1.0 - smoothstep(0.7, 1.0, edge);
          float rag = (fract(aOff.z * 37.0) - 0.5) * 0.8;
          keep *= smoothstep(0.95 + rag, 1.7 + rag, abs(wp.y - 1.5 * sin(wp.x * 0.085)));
          for (int i = 0; i < ${lc}; i++) { vec2 d = abs(wp - uPads[i].xy) - uPads[i].zw; keep *= smoothstep(-0.05, 0.3 + rag * 0.3, max(d.x, d.y)); }
          float ht = (0.13 + 0.26 * aOff.z * aOff.z) * keep * uSize.y;
          float ang = aOff.z * 131.0;
          vec2 dir = vec2(cos(ang), sin(ang));
          float t = position.y;
          float gust = sin(uTime * 1.3 + wp.x * 0.22 + wp.y * 0.31) * 0.6 + sin(uTime * 2.9 + wp.x * 0.9 - wp.y * 0.6) * 0.3 + 0.35;
          vec2 bend = (uWind * gust * 0.55 + dir * 0.35) * t * t * ht;
          vec3 transformed = vec3(wp.x + dir.x * position.x * uSize.x + bend.x, t * ht * (1.0 - 0.18 * abs(gust) * t), wp.y + dir.y * position.x * uSize.x + bend.y);
          vTip = t; vSeed = aOff.z;`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying float vTip; varying float vSeed;`).replace("#include <color_fragment>",`
          vec3 gRoot = vec3(0.07, 0.17, 0.035), gTip = mix(vec3(0.30, 0.50, 0.11), vec3(0.50, 0.50, 0.17), fract(vSeed * 13.0) * 0.45);
          diffuseColor.rgb = mix(gRoot, gTip, vTip * vTip * 0.85 + 0.15 * vTip);`).replace("#include <normal_fragment_begin>",`vec3 normal = normalize( vNormal );
vec3 nonPerturbedNormal = normal;`)};let D=new jt(pt,_);return D.frustumCulled=!1,D.receiveShadow=!0,t.add(D),{geo:pt,count:I}}let V=new Ft,E=new Ft,y=F(3e4,[20,15],.045,1,V),B=F(3e4,Jg,.085,1.12,E),m=I=>{let ht=new ao(1,I),nt=ht.attributes.position,L=ht.attributes.normal,$=new W;for(let pt=0;pt<nt.count;pt++){$.fromBufferAttribute(nt,pt);let dt=1+.2*Math.sin($.x*5.1+$.y*3.3)*Math.cos($.z*4.7+$.x*2.1)+.09*Math.sin($.y*11+$.z*9);L.setXYZ(pt,$.x,$.y*.8+.25,$.z),$.multiplyScalar(dt),nt.setXYZ(pt,$.x,$.y,$.z)}return ht.normalizeNormals(),ht},w=_n(256,256,(I,ht,nt)=>{let L=ar(31);I.fillStyle="#9a9a9a",I.fillRect(0,0,ht,nt);for(let $=0;$<2600;$++){let pt=70+L()*185;I.fillStyle=`rgb(${pt*.92},${pt},${pt*.8})`,I.globalAlpha=.75,I.beginPath(),I.ellipse(L()*ht,L()*nt,2+L()*5,1.5+L()*3,L()*3,0,7),I.fill()}});w.wrapS=w.wrapT=tn,w.repeat.set(5,3);let N=new Rn({color:"#ffffff",map:w}),Y=new Rn({color:"#4a3b2c"}),R=[[-7,-11.5,1.5],[29.5,-13,1.3],[63.5,-7,1.7],[76,-15,1.2],[96,-10.5,1.35],[108.5,-13.5,1.2],[126,-17,1.5],[146,-9,1.4],[40,-16,1.1],[-14,9.5,1.3],[152,8,1.3]],C=[];for(let I=0;I<80;I++){let ht=n()<.62;C.push([-90+n()*330,ht?-27-n()*95:21+n()*60,1.1+n()*1.3])}function T(I,ht,nt,L){let $=new Wn(new Tn(.16,.26,1,8),Y,I.length),pt=new Wn(m(ht),N,I.length*nt),dt=new Kt,A=new $e,_=new Ge,D=new W,O=new W,it=new Dt,J=0;I.forEach(([mt,lt,gt],zt)=>{let ft=2.2*gt+n()*.8;$.setMatrixAt(zt,dt.compose(O.set(mt,ft/2,lt),A.identity(),D.set(gt,ft,gt)));for(let Mt=0;Mt<nt;Mt++){let wt=Mt===nt-1,Pt=Mt/(nt-1)*Math.PI*2+n(),bt=wt?0:1.15*gt*(.6+n()*.5),kt=gt*(wt?1.7:.95+n()*.6);dt.compose(O.set(mt+Math.cos(Pt)*bt,ft+gt*(wt?1.5:.4+n()*1.1),lt+Math.sin(Pt)*bt),A.setFromEuler(_.set(n()*6,n()*6,n()*6)),D.set(kt,kt*(.78+n()*.2),kt)),pt.setMatrixAt(J,dt),pt.setColorAt(J++,it.setHSL(.26+n()*.06,.5+n()*.2,.3+n()*.16))}}),$.castShadow=pt.castShadow=L,pt.receiveShadow=L,$.frustumCulled=pt.frustumCulled=!1,t.add($,pt)}T(R,2,10,!0),T(C,1,6,!1);let q=new Rn({color:"#557a3c"});for(let[I,ht,nt,L]of[[-140,-360,300,.11],[120,-420,380,.13],[380,-340,280,.1],[40,420,330,.09],[-260,300,260,.08],[330,330,300,.1]]){let $=new jt(new ye(nt,40,16,0,Math.PI*2,0,Math.PI/2),q);$.scale.y=L,$.position.set(I,-2,ht),t.add($)}let Z=1500,K=new Float32Array(Z*6),et=new Float32Array(Z*3);for(let I=0;I<Z*3;I++)et[I]=n();let Q=new ae;Q.setAttribute("position",new _e(K,3));let H=new ro(Q,new Qs({color:"#d5e4f2",transparent:!0,opacity:0,depthWrite:!1}));H.frustumCulled=!1,t.add(H);let X=I=>new Dt(I),G={night:X("#070d1c"),dusk:X("#e2a183"),day:X("#c4dbec"),grey:X("#a3adb5"),sunLow:X("#ff8d47"),sunHigh:X("#fff1dc"),moon:X("#8ea6ff"),hNight:X("#1b2850"),hDay:X("#bcd6f2"),gNight:X("#15130f"),gDay:X("#6c6a45"),cloudDay:X("#ffffff"),cloudDusk:X("#ffc6a0"),cloudNight:X("#1a2238"),cloudRain:X("#737e88")},rt={hour:12,elev:1,day:1,night:0,overcast:0,rain:0,sunDir:new W(0,1,0),wet:0},ct=new Dt,xt=new Dt,At=new W;function Bt(I,ht,nt=.016){let L=rt,$=1-Math.exp(-2.2*nt);L.hour=I,L.overcast=Le(L.overcast,ht==="sunny"?0:ht==="cloudy"?.8:1,$),L.rain=Le(L.rain,ht==="rain"?1:0,$),L.wet=Le(L.wet,ht==="rain"?1:0,1-Math.exp(-.5*nt));let pt=Math.PI*(I-6)/12;L.elev=Math.sin(pt),L.sunDir.set(Math.cos(pt),Math.sin(pt)*.95,.42).normalize(),L.day=Cs((L.elev+.06)/.34),L.night=1-Cs((L.elev+.3)/.26);let dt=Cs((L.elev+.24)/.22),A=Cs((L.elev-.02)/.3),_=L.overcast;r.sunPosition.value.copy(L.sunDir),r.turbidity.value=Le(4.5,14,_),r.rayleigh.value=Le(Le(2.6,1.25,A),.55,_),r.mieCoefficient.value=Le(.004,.012,_),r.mieDirectionalG.value=Le(.82,.6,_),i.toneMappingExposure=Le(Le(.78,.46,L.day),Le(.7,.4,L.day),_),ct.copy(G.night).lerp(G.dusk,dt*(1-_*.7)).lerp(G.day,A).lerp(xt.copy(G.grey).multiplyScalar(.12+.88*L.day),_*.85),t.fog.color.copy(ct),t.fog.density=Le(.0034,.0105,L.rain)+.002*_+.0016*(1-A)*dt;let D=1-.62*_-.25*L.rain;L.elev>-.05?(v.color.copy(G.sunLow).lerp(G.sunHigh,Cs(L.elev/.4)),v.intensity=3.6*Cs((L.elev+.03)/.22)*D,At.copy(L.sunDir),At.y<.09&&(At.y=.09,At.normalize())):(v.color.copy(G.moon),v.intensity=.55*L.night*(1-.6*_),At.set(-.42,.74,.5).normalize()),rt.lightDir=rt.lightDir||new W,rt.lightDir.copy(At),x.color.copy(G.hNight).lerp(G.hDay,L.day).lerp(G.grey,_*.5*L.day),x.groundColor.copy(G.gNight).lerp(G.gDay,L.day),x.intensity=Le(.5,Le(.85,1.15,_),L.day),t.environmentIntensity=Le(.07,Le(.6,.42,_),L.day),ct.copy(G.cloudNight).lerp(G.cloudDusk,dt).lerp(G.cloudDay,A),h.material.color.copy(ct),h.material.opacity=.85*(1-_)*(.25+.75*dt),u.material.color.copy(ct).lerp(G.cloudRain,.35+.5*L.rain).multiplyScalar(.3+.7*L.day),u.material.opacity=_*.96,p.material.opacity=L.night*(1-_)*.95,l.material.opacity=L.night*(1-_*.8),l.visible=L.night>.02,p.visible=L.night>.02,u.visible=_>.01,H.material.opacity=.42*L.rain,H.visible=L.rain>.02,S.roughness=Le(.95,.45,L.wet),S.color.setScalar(Le(1,.6,L.wet))}function vt(I,ht,nt,L,$=nt){if(z.uTime.value=ht,E.set(nt.x,nt.z),V.set($.x,$.z),z.uWind.value.set(.55+.5*rt.rain,.2),v.target.position.copy(nt),v.position.copy(nt).addScaledVector(rt.lightDir,70),v.target.updateMatrixWorld(),s.position.copy(L.position),h.position.copy(L.position),u.position.copy(L.position),p.position.copy(L.position),h.rotation.y=ht*.0035,u.rotation.y=ht*.006,H.visible){let pt=L.position,dt=ht*19%18;for(let A=0;A<Z;A++){let _=pt.x+(et[A*3]-.5)*34,D=pt.z+(et[A*3+2]-.5)*34,O=18-(et[A*3+1]*18+dt)%18+Math.max(0,pt.y-9);K.set([_,O,D,_+.1,O-.75,D+.03],A*6)}Q.attributes.position.needsUpdate=!0}}return{setTime:Bt,update:vt,state:rt,sun:v,softDot:a,setQuality:I=>{let ht=[1,.66,.42,.25][Math.min(3,I)];y.geo.instanceCount=Math.round(y.count*ht),B.geo.instanceCount=Math.round(B.count*ht)}}}var pu={energy:"#f2b632",water:"#3aa0e0",data:"#35c46b",waste:"#8b5a2b",gas:"#ff7a3d",fodder:"#8fd14f"};function mu(i,t){let e=t.map(l=>{let x=new ys(l.pts);return{...l,line:x,n:l.n||Math.max(2,Math.round(x.total/1.25)),level:0,phase:Math.random()}}),n=e.reduce((l,x)=>l+x.n,0),s=new Wn(new ye(.13,8,6),$l("#ffffff"),n);s.frustumCulled=!1,i.add(s);let r=new Jt;r.visible=!1,i.add(r);let a=new Dt,o=0;for(let l of e){l.start=o,a.set(pu[l.type]);for(let v=0;v<l.n;v++)s.setColorAt(o++,a);let x=fe(l.pts,.045,$l(pu[l.type],{transparent:!0,opacity:.4,depthWrite:!1}),!1);un(x,{transparent:!0}),r.add(x)}s.instanceColor.needsUpdate=!0;let c=new Kt,h=new W,u=new $e,f=new W;function p(l,x,v,g,d=1){r.visible=v||!!g,e.forEach((b,S)=>{let M=v||g===b.type;r.children[S].visible=M;let z=Math.min(1,Math.max(0,b.active(x)));M&&(z=Math.max(z,.55)),b.level=Pn(b.level,z,oi(5,l)),b.phase=(b.phase+l*(b.speed||2.6)*(.5+.5*b.level)/b.line.total)%1;let U=b.level<.03?0:(b.size||1)*(.55+.55*b.level)*d;for(let F=0;F<b.n;F++)b.line.at((b.phase+F/b.n)%1,h),c.compose(h,u,f.setScalar(U)),s.setMatrixAt(b.start+F,c)}),s.instanceMatrix.needsUpdate=!0}return{update:p,guides:r}}var Li=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),hc=i=>(i=Li(i),i*i*(3-2*i)),Wt=(i,t={})=>new De({color:i,roughness:.82,metalness:0,...t}),li=(i,t=2,e={})=>new De({color:"#0b0b0b",emissive:i,emissiveIntensity:t,roughness:.4,...e});function gu(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var xu=[[5,-3.4,9.6,5.35],[132,-3.4,9.6,5.35],[21.6,-5.8,6.3,2.1],[46.5,-8.2,4.4,1.5],[51,-5,1.1,.8],[77.5,-3.6,.9,.8],[82.4,-4.4,1.2,1.1],[83.5,-9,1.2,.9],[87.5,-6.8,2.7,2.7],[92,-3.8,1.5,1.2],[93.5,-8.2,1.7,1.4],[100.3,Xe(100.3)-.95,1.6,.55],[103.5,-6,2.9,2.4],[118,-8.5,6.7,4.7]];function _u(i,t){let e=gu(77),n=new Jt;i.add(n);let s=(...R)=>(n.add(...R),R[0]),r=(R,C,T=2400,q=[4,4])=>{let Z=_n(256,256,(K,et,Q)=>{let H=gu(T);K.fillStyle=R,K.fillRect(0,0,et,Q);for(let X=0;X<T;X++)K.fillStyle=C[X%C.length],K.globalAlpha=.5,K.fillRect(H()*et,H()*Q,1+H()*3,1+H()*3)});return Z.wrapS=Z.wrapT=tn,Z.repeat.set(...q),Z},a=(R,C,T,q,Z)=>{let K=_n(256,64,(et,Q,H)=>{for(let X=0;X<Q;X+=Q/q){let G=et.createLinearGradient(X,0,X+Q/q,0);G.addColorStop(0,R),G.addColorStop(.5,C),G.addColorStop(1,T),et.fillStyle=G,et.fillRect(X,0,Q/q+1,H)}});return K.wrapS=K.wrapT=tn,K.repeat.set(...Z),K},o={concrete:Wt("#ffffff",{map:r("#b9b4a8",["#a9a498","#c6c1b5","#9f9a8f"],2600,[6,4]),roughness:.92}),wood:Wt("#ffffff",{map:a("#8b6a45","#a17c52","#7c5d3b",6,[1,1]),roughness:.9}),woodDark:Wt("#5d4630",{roughness:.92}),roof:Wt("#ffffff",{map:a("#8d979e","#d3dade","#8d979e",16,[5,1]),metalness:.65,roughness:.42,side:Ie}),steel:Wt("#c3cad0",{metalness:.9,roughness:.28}),galv:Wt("#aab2b8",{metalness:.7,roughness:.45}),dark:Wt("#22262a",{roughness:.6}),rubber:Wt("#16181a",{roughness:.9}),pvc:Wt("#e6e9eb",{roughness:.5}),blue:Wt("#1f5fc4",{roughness:.45,metalness:.2}),yellow:Wt("#f0be28",{roughness:.5}),green:Wt("#2f8f52",{roughness:.5,metalness:.35}),orange:Wt("#e06f2a",{roughness:.55}),glass:Wt("#d8f0fb",{transparent:!0,opacity:.22,roughness:.05,metalness:0,depthWrite:!1}),poly:Wt("#dfe9ee",{transparent:!0,opacity:.42,roughness:.35,depthWrite:!1}),water:Wt("#2f8fcc",{transparent:!0,opacity:.82,roughness:.08,metalness:.1}),grey:Wt("#6f8a84",{transparent:!0,opacity:.9,roughness:.15}),milk:Wt("#fbf8f0",{roughness:.35}),straw:Wt("#ffffff",{map:r("#b3924a",["#c9aa5c","#9c7c3a","#d4b96e","#8a6c30"],5200,[3,2]),roughness:1}),fodder:Wt("#4d9a36",{roughness:.95}),dung:Wt("#4a3320",{roughness:.95}),soil:Wt("#ffffff",{map:r("#4b3523",["#3d2a1a","#5a4230","#33231a"],3e3,[5,4]),roughness:1}),brick:Wt("#ffffff",{map:a("#9a5a3e","#b06a4a","#8a4f36",8,[3,6]),roughness:.9}),gravel:Wt("#ffffff",{map:r("#9b958a",["#807a70","#b3ada2","#6d675e"],3e3,[3,2]),roughness:1})},c=li("#ffd9a0",.05),h=[0,1].map(()=>{let R=new fo("#ffcf8f",0,19,1.7);return i.add(R),R}),u=(R,C,T,q)=>{let Z=Math.hypot(T-R,q-C),K=Math.max(1,Math.round(Z/2.4)),et=-Math.atan2(q-C,T-R);for(let Q=0;Q<=K;Q++)s(_t(.12,1.3,.12,o.woodDark,Pn(R,T,Q/K),.65,Pn(C,q,Q/K)));for(let Q of[.45,.82,1.18]){let H=_t(Z,.09,.035,o.wood,(R+T)/2,Q,(C+q)/2);H.rotation.y=et,s(H)}},f=(R,C,{spread:T=1.5,up:q=0,size:Z=.09,life:K=.8,grav:et=6,color:Q="#dceefc",opacity:H=.7}={})=>{let X=new ae,G=new Float32Array(R*3).fill(-90),rt=new Float32Array(R*3),ct=new Float32Array(R);X.setAttribute("position",new _e(G,3));let xt=new ds(X,new Ai({color:Q,size:Z,map:t.softDot,transparent:!0,opacity:H,depthWrite:!1}));return xt.frustumCulled=!1,i.add(xt),(At,Bt)=>{for(let vt=0;vt<R;vt++){let Tt=vt*3;if(ct[vt]-=At,ct[vt]<=0){if(!Bt||Math.random()>.25){G[Tt+1]=-90;continue}let I=C[Math.random()*C.length|0];G[Tt]=I[0],G[Tt+1]=I[1],G[Tt+2]=I[2],rt[Tt]=(Math.random()-.5)*T,rt[Tt+1]=q*(.6+Math.random()*.8),rt[Tt+2]=(Math.random()-.5)*T,ct[vt]=K*(.5+Math.random())}else rt[Tt+1]-=et*At,G[Tt]+=rt[Tt]*At,G[Tt+1]=Math.max(.05,G[Tt+1]+rt[Tt+1]*At),G[Tt+2]+=rt[Tt+2]*At}X.attributes.position.needsUpdate=!0}},p=(R,C,T,q)=>{let Z=document.createElement("canvas");Z.width=R,Z.height=C;let K=new si(Z);K.colorSpace=Pe;let et=new jt(new cn(T,q),new xe({map:K,toneMapped:!1}));return{c:Z,t:K,m:et,g:Z.getContext("2d")}},l={};function x(R,C){let T=R+5,q={};s(_t(19.2,.08,10.7,o.concrete,T,.04,-3.4));for(let et of[R-4.3,R+5,R+14.6])s(_t(.18,4.05,.18,o.woodDark,et,2.02,2.3));for(let et of[R-4.3,R+1.9,R+8.1,R+14.3]){s(_t(.18,2.75,.18,o.woodDark,et,1.37,-8.5));let Q=_t(.12,.2,11.6,o.woodDark,et,3.34,-3.4);Q.rotation.x=Math.atan2(1.25,11.3),s(Q)}let Z=_t(20,.05,11.9,o.roof,T,3.5,-3.4);Z.rotation.x=Math.atan2(1.25,11.3),s(Z),s(_t(18.8,2.3,.08,o.wood,T,1.2,-8.55),_t(.08,1.5,6.2,o.wood,R-4.35,.8,-5.5));for(let et of C?[R+.1]:[R+11]){let Q=$t(1,1.04,.07,o.straw,et,.115,Xe(et)-.2,40);Q.scale.set(2.3,1,1.45),Q.castShadow=!1,s(Q);for(let H=0;H<14;H++){let X=hn(1,o.straw,et-2+e()*4,.13,Xe(et)-1.3+e()*2.2,14,8);X.scale.set(.35+e()*.5,.04+e()*.04,.3+e()*.4),X.castShadow=!1,s(X)}}let K=Xe(R+8.7)-.95;s(_t(6.2,.42,.62,o.concrete,R+8.5,.29,K),_t(6.2,.2,.06,o.concrete,R+8.5,.6,K-.3)),q.fodder=s(_t(5.9,.16,.5,o.fodder,R+8.5,.56,K)),q.fodder.userData.dyn=!0;for(let et of[R-1.5,R+5,R+11.5])s($t(.012,.012,.5,o.dark,et,3.25,-1.2,5),hn(.075,c,et,2.96,-1.2,10,8,!1));s(fe([[R-4,3.05,-2.2],[R+14,3.05,-2.2]],.03,o.pvc,!1)),q.nozzles=[];for(let et=R-3;et<R+14;et+=1.7)s($t(.02,.04,.08,o.dark,et,2.98,-2.2,6)),q.nozzles.push([et,2.92,-2.2]);if(C){let et=Xe(R+9),Q=R+9;for(let X of[.62,-.62])s(fe([[Q-1.5,.08,et+X],[Q-1.5,1.08,et+X],[Q+1.35,1.08,et+X],[Q+1.35,.08,et+X]],.028,o.galv));s($t(.035,.035,1.05,o.galv,Q-1.95,.6,et-.85,8),_t(.3,.03,.3,o.galv,Q-1.95,1.1,et-.85)),s($t(.17,.17,.52,o.glass,Q-1.95,1.38,et-.85,20,!1),$t(.18,.18,.03,o.steel,Q-1.95,1.65,et-.85,20)),q.jar=s($t(.155,.155,.5,o.milk,Q-1.95,1.12,et-.85,20,!1)),q.jar.userData.dyn=!0,s(fe(Pi([Q-.5,.42,et],[Q-1.2,.2,et-.5],[Q-1.95,1.66,et-.85],14),.014,o.rubber,!1)),q.cluster=new Jt,q.cluster.position.set(Q-.45,.4,et),q.cluster.userData.dyn=!0;for(let[X,G]of[[.1,.085],[.1,-.085],[-.09,.085],[-.09,-.085]])q.cluster.add($t(.022,.018,.13,o.steel,X,0,G,8));q.cluster.add(hn(.04,o.steel,0,-.1,0,8,6)),s(q.cluster);let H=$t(.62,.62,2.3,o.steel,R+4.5,1,-7.3,24);H.rotation.z=Math.PI/2,s(H);for(let X of[-.8,.8])s(_t(.08,.5,1,o.galv,R+4.5+X,.25,-7.3));s(_t(.5,.36,.3,o.dark,R+4.5,1.78,-7.3)),q.chill=s(hn(.035,li("#35c46b",2),R+4.5,1.78,-7.13,8,6,!1)),q.chill.userData.dyn=!0,s(fe([[Q-1.95,1.12,et-.9],[Q-1.95,.12,et-1.2],[R+5.6,.12,-6.6],[R+5.6,1,-6.75]],.022,o.steel));for(let[X,G]of[[3.1,-6.2],[3.55,-6.6]])s($t(.16,.18,.5,o.steel,R+X,.33,G,14),$t(.1,.16,.14,o.steel,R+X,.65,G,14))}return q}l.shed1=x(0,!0),l.shed2=x(127,!1),l.washSpray=f(420,l.shed1.nozzles,{spread:2.4,up:-.6,size:.08,life:.75,grav:8});{s(_t(12.6,.06,4.2,o.gravel,21.6,.03,-5.8)),s(_t(10,.03,.34,o.dark,9,.085,-5.9));let R=o.concrete,C=[17.5,-5.5];s(_t(2.7,1.1,.14,R,C[0],.55,C[1]-1.05),_t(2.7,1.1,.14,R,C[0],.55,C[1]+1.05),_t(.14,1.1,2.1,R,C[0]-1.3,.55,C[1]),_t(.14,1.1,2.1,R,C[0]+1.3,.55,C[1])),l.sump=s(_t(2.46,1,1.96,o.grey,C[0],.1,C[1],!1)),l.sump.userData.dyn=!0;let T=[20.6,-5.5];s($t(.66,.7,.2,o.dark,T[0],.16,T[1],20),$t(.62,.62,.1,o.dark,T[0],2.72,T[1],20)),s($t(.5,.5,.55,Wt("#8a8c8e",{roughness:1}),T[0],.54,T[1],18),$t(.5,.5,.6,Wt("#d6bd86",{roughness:1}),T[0],1.12,T[1],18),$t(.5,.5,.5,Wt("#1c1c1f",{roughness:1}),T[0],1.67,T[1],18)),s($t(.5,.5,.72,o.water,T[0],2.28,T[1],18,!1),$t(.56,.56,2.5,o.glass,T[0],1.5,T[1],24,!1));let q=[22.7,-5.5];l.pump=new Jt,l.pump.position.set(q[0],.06,q[1]),l.pump.userData.dyn=!0,l.pump.add(_t(1.1,.1,.6,o.dark,0,.08,0));let Z=$t(.2,.2,.6,o.blue,.12,.36,0,18);Z.rotation.z=Math.PI/2,l.pump.add(Z);let K=$t(.26,.26,.16,o.blue,-.32,.36,0,18);K.rotation.z=Math.PI/2,l.pump.add(K),l.pumpFan=new Jt,l.pumpFan.position.set(.45,.36,0);for(let Q=0;Q<4;Q++){let H=new Jt;H.rotation.x=Q*Math.PI/2,H.add(_t(.03,.16,.06,Wt("#d0483a"),0,.09,0)),l.pumpFan.add(H)}l.pump.add(l.pumpFan),s(l.pump);let et=[25.6,-6.2];for(let[Q,H]of[[-1,-1],[1,-1],[-1,1],[1,1]])s(_t(.14,3,.14,o.galv,et[0]+Q,1.5,et[1]+H));for(let[Q,H]of[[[-1,-1],[1,1]],[[1,-1],[-1,1]]])s(fe([[et[0]+Q[0],.4,et[1]+Q[1]],[et[0]+H[0],2.6,et[1]+H[1]]],.025,o.galv));s(_t(2.7,.12,2.7,o.galv,et[0],3.06,et[1])),l.tank=s($t(1.14,1.14,1,o.water,et[0],3.2,et[1],28,!1)),l.tank.userData.dyn=!0,s($t(1.2,1.2,2.4,o.poly,et[0],4.33,et[1],28,!1),$t(1.24,1,.25,o.blue,et[0],5.66,et[1],28),$t(.28,.28,.1,o.dark,et[0],5.83,et[1],14)),l.wp={drain:[[4,.12,-5.9],[14.2,.12,-5.9],[16.2,.3,-5.5]],loop:[[C[0]+1.3,.3,C[1]],[T[0]-.6,.3,T[1]],[T[0],.3,T[1]],[q[0]-.4,.4,q[1]],[q[0]+.5,.4,q[1]],[24.2,.4,q[1]],[24.2,5.95,q[1]],[et[0],5.95,q[1]-.2],[et[0],5.9,et[1]]],shed:[[et[0],3.1,et[1]-.6],[et[0],.16,et[1]-.6],[14.6,.16,-7.6],[14.6,3.05,-2.2],[-4,3.05,-2.2]],rain:[[-4.5,2.8,-9.3],[14.8,2.7,-9.3],[C[0],2.7,-9.3],[C[0],2.7,C[1]-.8],[C[0],1.2,C[1]-.8]],plot:[[et[0]+.6,3.1,et[1]],[et[0]+.6,.16,et[1]],[29,.16,-9.5]]},s(fe(l.wp.drain.slice(1),.07,o.dark),fe(l.wp.loop,.055,o.pvc),fe(l.wp.shed.slice(0,4),.045,o.pvc),fe(l.wp.rain,.06,o.pvc),fe(l.wp.plot,.045,o.pvc)),l.tankSpray=f(50,[[et[0],5.6,et[1]]],{spread:.5,up:-.5,size:.07,life:.5})}{let C=Xe(34);s(_t(.2,2.9,.2,o.woodDark,34,1.45,C-1.75),_t(.2,2.9,.2,o.woodDark,34,1.45,C+1.75),_t(.16,.2,3.9,o.woodDark,34,2.9,C)),s(_t(.12,.2,.1,o.blue,34,1.15,C-1.6),_t(.12,.2,.1,o.dark,34,1.15,C+1.6)),l.beamM=new xe({color:"#ff3b30",transparent:!0,opacity:.5,toneMapped:!1});let T=$t(.012,.012,3.2,l.beamM,34,1.15,C,6,!1);T.rotation.x=Math.PI/2,s(T),l.gateLedM=li("#ff3b30",.1),s($t(.05,.07,.12,o.dark,34,3.06,C-1.75,8),hn(.11,l.gateLedM,34,3.2,C-1.75,12,8,!1)),l.counter=p(384,160,1.15,.48),l.counter.m.position.set(34+.12,2.52,C-.35),l.counter.m.rotation.y=.95,s(l.counter.m),s(_t(.06,.58,1.3,o.dark,34+.04,2.52,C-.35)).rotation.y=.95-Math.PI/2,u(34,C-1.75,34,-30),u(34,C+1.75,34,15)}{s(_t(8.8,.05,3,o.gravel,46.5,.025,-8.2));let R=_n(256,512,(T,q,Z)=>{T.fillStyle="#0d1b3d",T.fillRect(0,0,q,Z);for(let K=0;K<6;K++)for(let et=0;et<12;et++){let Q=T.createLinearGradient(K*q/6,et*Z/12,(K+1)*q/6,(et+1)*Z/12);Q.addColorStop(0,"#1d3f93"),Q.addColorStop(1,"#122a66"),T.fillStyle=Q,T.fillRect(K*q/6+2,et*Z/12+2,q/6-4,Z/12-4)}T.strokeStyle="rgba(210,220,235,0.5)",T.lineWidth=1;for(let K=1;K<6;K++)T.beginPath(),T.moveTo(K*q/6-q/12,0),T.lineTo(K*q/6-q/12,Z),T.stroke()});l.cellM=Wt("#ffffff",{map:R,metalness:.55,roughness:.16,emissive:"#2a5bd0",emissiveIntensity:0});let C=new Jt;C.position.set(46.5,0,-8.2);for(let T=0;T<8;T++){let q=new Jt;q.position.set(-3.68+T*1.05,1.35,0),q.rotation.x=.5,q.add(_t(1,.04,1.75,o.galv,0,0,0));let Z=We(new cn(.95,1.7),l.cellM,0,.022,0);Z.rotation.x=-Math.PI/2,q.add(Z),C.add(q)}for(let T of[-3.9,-1.3,1.3,3.9]){C.add(_t(.07,1.78,.07,o.galv,T,.89,-.72),_t(.07,.95,.07,o.galv,T,.47,.75));let q=_t(.06,.06,1.85,o.galv,T,1.3,0);q.rotation.x=.5,C.add(q)}s(C),s(_t(1,1.8,.6,Wt("#e9e6dc",{roughness:.5,metalness:.2}),51,.95,-5),_t(1.12,.06,.72,o.dark,51,1.88,-5),_t(.5,.6,.2,Wt("#d24a2f",{roughness:.5}),52,1.25,-5),_t(.06,1.3,.06,o.galv,52,.65,-5)),l.bars=[];for(let T=0;T<5;T++){let q=li("#46e06b",.02);l.bars.push(q),s(_t(.34,.09,.02,q,51.18,.62+T*.15,-4.69,!1))}s(We(new cn(.3,.3),new xe({transparent:!0,toneMapped:!1,map:_n(64,64,T=>{T.fillStyle="#f2b632",T.beginPath(),T.moveTo(38,4),T.lineTo(14,36),T.lineTo(30,36),T.lineTo(24,60),T.lineTo(50,26),T.lineTo(34,26),T.closePath(),T.fill()})}),50.78,1,-4.695,!1)),s(_t(.14,5.2,.14,o.woodDark,53.2,2.6,-5),_t(1.2,.08,.08,o.woodDark,53.2,4.9,-5)),l.ep={panel:[[45.2,1,-7.6],[45.2,.1,-6.6],[50.5,.1,-6.6],[50.5,.1,-5.2]],out:[[51.5,1.9,-5],[53.2,4.95,-5],[60,4.4,-6.5],[68,4.9,-8]]},s(fe(l.ep.panel,.022,o.dark,!1),fe([[51.5,1.9,-5],[53.2,4.95,-5]],.014,o.dark,!1)),s(fe(Pi([53.2,4.95,-5],[60,3.9,-6.5],[68,4.9,-8],12),.012,o.dark,!1),_t(.14,5.2,.14,o.woodDark,68,2.6,-8))}l.mates=[{c:Di({coat:"sahiwal",idx:1}),x:56.5,z:-8.5,h:.5,t:0},{c:Di({coat:"gir",idx:2}),x:66.5,z:-12.5,h:2.6,t:2},{c:Di({coat:"murrah",kind:"buffalo",idx:3}),x:70.5,z:-6.2,h:-.5,t:4},{c:Di({coat:"murrah2",kind:"buffalo",idx:4}),x:52,z:-16,h:1.4,t:1}];for(let R of l.mates)R.c.group.position.set(R.x,0,R.z),R.c.group.rotation.y=R.h,i.add(R.c.group);s($t(.2,.24,.18,Wt("#d8d2c4",{roughness:.7}),61.2,.12,Xe(61.2)-2.2,10));{l.pat=hn(.2,o.dung,71.6,.05,Xe(71.6),12,6),l.pat.scale.set(1,.3,1),l.pat.userData.dyn=!0,s(l.pat),s(_t(1.5,.06,1.3,o.concrete,77.5,.03,-3.6),_t(.06,.9,.06,o.galv,78.1,.45,-4.1));let R=_t(.7,.03,.5,l.cellM,78.1,.95,-4.1);R.rotation.x=.5,s(R);let C=new Jt;C.userData.dyn=!0,C.add(_t(.95,.26,.6,o.yellow,0,.33,0),_t(.6,.03,.46,l.cellM,-.1,.475,0));let T=_t(.1,.26,.7,o.dark,.55,.24,0);T.rotation.z=-.4,C.add(T);for(let[rt,ct]of[[.3,.34],[.3,-.34],[-.3,.34],[-.3,-.34]]){let xt=$t(.16,.16,.1,o.rubber,rt,.16,ct,14);xt.rotation.x=Math.PI/2,C.add(xt)}l.roverLoad=_t(.42,.14,.4,o.dung,-.12,.55,0),l.roverLoad.userData.dyn=!0,C.add(l.roverLoad),l.roverLampM=li("#39d353",2),C.add(hn(.045,l.roverLampM,.36,.5,.2,8,6,!1)),un(C),i.add(C),l.rover=C,l.roverPath=new ys([[77.5,0,-3.6],[74.5,0,-3.2],[71,0,-2.25],[71.3,0,-.85],[71.3,0,-.85],[72.5,0,-2.6],[79.5,0,-4.4],[80.6,0,-4.4],[80.6,0,-4.4],[79,0,-3.4],[77.5,0,-3.6]]);let q=[82.4,-4.4];s(_t(1.7,.9,.12,o.concrete,q[0],.45,q[1]-.8),_t(1.7,.9,.12,o.concrete,q[0],.45,q[1]+.8),_t(.12,.9,1.6,o.concrete,q[0]-.85,.45,q[1]),_t(.12,.9,1.6,o.concrete,q[0]+.85,.45,q[1])),l.inlet=s(_t(1.58,1,1.48,o.dung,q[0],.1,q[1])),l.inlet.userData.dyn=!0;let Z=_t(1.1,.06,1,o.wood,q[0]-1.3,.48,q[1]);Z.rotation.z=.62,s(Z);let K=[87.5,-6.8];s(_t(5.6,.06,5.6,o.gravel,K[0],.03,K[1]),$t(2.2,2.25,1.2,o.brick,K[0],.6,K[1],32)),s(We(new An(2.2,.1,8,36),o.concrete,K[0],1.2,K[1])).rotation.x=Math.PI/2,s(_t(.14,4.4,.14,o.galv,K[0]-2.35,2.2,K[1]),_t(.14,4.4,.14,o.galv,K[0]+2.35,2.2,K[1]),_t(4.9,.12,.12,o.galv,K[0],4.4,K[1])),l.drum=new Jt,l.drum.userData.dyn=!0,l.drum.add($t(1.9,1.9,1.7,o.green,0,.85,0,36));let et=We(new ye(1.9,36,10,0,Math.PI*2,0,Math.PI/2),o.green,0,1.7,0);et.scale.y=.4,l.drum.add(et),l.drum.add($t(.07,.07,.3,o.yellow,0,2.55,0,8));for(let rt=0;rt<8;rt++){let ct=rt/8*Math.PI*2;l.drum.add(_t(.05,1.7,.05,Wt("#267a45",{metalness:.35,roughness:.5}),Math.cos(ct)*1.91,.85,Math.sin(ct)*1.91))}l.drum.position.set(K[0],.4,K[1]),s(l.drum),l.hose=s($t(.035,.035,1,o.yellow,K[0],3.6,K[1],6,!1)),l.hose.userData.dyn=!0;let Q=[83.5,-9];l.gen=new Jt,l.gen.userData.dyn=!0,l.gen.position.set(Q[0],.05,Q[1]),l.gen.add(_t(1.5,.75,.9,o.orange,0,.6,0),_t(1.7,.1,1.05,o.dark,0,.16,0),$t(.2,.2,.4,o.dark,-.35,1.1,0,12),$t(.05,.05,.7,o.galv,.5,1.3,.2,8)),l.genLedM=li("#46e06b",.05),l.gen.add(hn(.05,l.genLedM,.55,.8,.46,8,6,!1)),s(l.gen);let H=[92,-3.8];s(_t(2.8,.06,2.3,o.concrete,H[0],.03,H[1]),_t(1.6,.85,.75,o.brick,H[0],.45,H[1]),_t(1.7,.05,.85,o.concrete,H[0],.9,H[1])),s(We(new An(.13,.025,6,16),o.dark,H[0]-.3,.95,H[1])).rotation.x=Math.PI/2,l.flame=s(We(new oo(.11,.2,10),new xe({color:new Dt(.5,1.4,4),transparent:!0,opacity:.9,toneMapped:!1}),H[0]-.3,1.06,H[1],!1)),l.flame.userData.dyn=!0,s($t(.22,.19,.24,o.steel,H[0]-.3,1.3,H[1],18),$t(.23,.23,.02,o.steel,H[0]-.3,1.43,H[1],18));for(let[rt,ct]of[[-.95,-.9],[.95,-.9],[-.95,.9],[.95,.9]])s(_t(.1,2.5,.1,o.woodDark,H[0]+rt,1.25,H[1]+ct));let X=_t(2.5,.04,2.5,o.roof,H[0],2.55,H[1]);X.rotation.x=.12,s(X);let G=[93.5,-8.2];s(_t(3,.5,.1,o.woodDark,G[0],.27,G[1]-1.2),_t(3,.5,.1,o.woodDark,G[0],.27,G[1]+1.2),_t(.1,.5,2.4,o.woodDark,G[0]-1.5,.27,G[1]),_t(.1,.5,2.4,o.woodDark,G[0]+1.5,.27,G[1])),l.heap=s(We(new ye(1.25,16,8,0,Math.PI*2,0,Math.PI/2),Wt("#3a281a",{roughness:1}),G[0],.05,G[1])),l.heap.userData.dyn=!0,l.steam=f(70,[[G[0],.8,G[1]],[G[0]+.4,.7,G[1]-.3],[H[0]-.3,1.5,H[1]]],{spread:.18,up:.5,size:.3,life:2.4,grav:-.25,color:"#ffffff",opacity:.12}),l.bp={feed:[[q[0]+.85,.3,q[1]],[84.4,.3,q[1]],[K[0]-2,.4,K[1]+.9]],slurry:[[K[0]+2.2,.3,K[1]-.5],[91,.3,G[1]],[G[0]-1.5,.4,G[1]]],stove:[[K[0],4.4,K[1]],[K[0]+2.35,4.4,K[1]],[K[0]+2.35,.14,K[1]],[K[0]+2.35,.14,H[1]-.6],[H[0]-.3,.14,H[1]-.6],[H[0]-.3,.9,H[1]-.2]],gen:[[K[0],4.4,K[1]],[K[0]-2.35,4.4,K[1]],[K[0]-2.35,.14,K[1]],[K[0]-2.35,.14,Q[1]],[Q[0]+.85,.14,Q[1]],[Q[0]+.85,.5,Q[1]]],cable:[[Q[0]-.8,.3,Q[1]],[80,.1,Q[1]],[70,.1,-8.6],[68,.1,-8.2]]},s(fe(l.bp.feed,.1,Wt("#6a4f33",{roughness:.7})),fe(l.bp.slurry,.09,Wt("#6a4f33",{roughness:.7})),fe(l.bp.stove.slice(1),.03,o.yellow),fe(l.bp.gen.slice(1),.03,o.yellow),fe(l.bp.cable,.02,o.dark,!1))}{let C=Xe(100.3)-.95;s(_t(3,.5,.7,o.galv,100.3,.3,C),_t(3.2,.05,1.1,o.concrete,100.3,.025,C)),l.troughWater=s(_t(2.86,.04,.58,o.water,100.3,.5,C,!1)),l.troughWater.userData.dyn=!0,l.fresh=[[100.3+3.4,.1,C-2.6],[100.3+1.75,.1,C-2.6],[100.3+1.75,.1,C],[100.3+1.75,.75,C],[100.3+1.4,.75,C],[100.3+1.4,.56,C]],s(fe(l.fresh,.03,Wt("#4fb0ea",{roughness:.5})),hn(.06,o.orange,100.3+1.2,.58,C,10,8));let T=[103.5,-6];s(_t(5.6,.06,4.6,o.concrete,T[0],.03,T[1]));for(let[Q,H]of[[-2.6,-2],[2.6,-2],[-2.6,2],[2.6,2]])s(_t(.14,H<0?2.9:3.3,.14,o.galv,T[0]+Q,H<0?1.45:1.65,T[1]+H));let q=_t(6.2,.05,5.2,o.roof,T[0],3.16,T[1]);q.rotation.x=Math.atan2(.4,4),s(q),s(_t(5.3,.08,.08,o.galv,T[0],2.55,T[1]-1.9)),l.fans=[];for(let Q of[-1.4,1.4]){s(We(new An(.5,.035,8,28),o.dark,T[0]+Q,2,T[1]-1.85),$t(.09,.09,.2,o.dark,T[0]+Q,2,T[1]-1.95,10)).rotation.x=0;let H=new Jt;H.userData.dyn=!0,H.position.set(T[0]+Q,2,T[1]-1.82);for(let X=0;X<3;X++){let G=new Jt;G.rotation.z=X*Math.PI*2/3;let rt=_t(.42,.13,.02,o.steel,.24,0,0);rt.rotation.x=.3,G.add(rt),H.add(G)}s(H),l.fans.push(H)}s(fe([[T[0]-2.6,2.85,T[1]+1.6],[T[0]+2.6,2.85,T[1]+1.6]],.02,o.pvc,!1));let Z=[];for(let Q=T[0]-2.2;Q<=T[0]+2.2;Q+=.9)Z.push([Q,2.8,T[1]+1.6]);l.mist=f(260,Z,{spread:.9,up:-.1,size:.34,life:1.6,grav:.9,color:"#eaf6ff",opacity:.16}),s(_t(.16,.22,.08,o.blue,T[0]-2.6,2.3,T[1]+2.1),_t(.16,.04,.09,o.dark,T[0]-2.6,2.17,T[1]+2.1));let K=new Jt;K.position.set(97.1,0,-3.5),K.rotation.y=.5,K.add(_t(.12,1.5,.12,o.woodDark,-.55,.75,0),_t(.12,1.5,.12,o.woodDark,.55,.75,0),_t(1.5,1.25,.06,o.wood,0,1.7,0));let et=_t(1.8,.04,.6,o.roof,0,2.42,.12);et.rotation.x=.2,K.add(et),l.lcd=p(512,176,1.05,.36),l.lcd.m.position.set(0,2,.045),K.add(l.lcd.m),K.add(_t(1.15,.46,.04,o.dark,0,2,.02)),K.add(_t(.42,.3,.03,Wt("#167f8a",{roughness:.5}),-.42,1.42,.04),_t(.34,.24,.03,Wt("#f1efe8"),.06,1.42,.04),_t(.16,.08,.04,Wt("#141416"),.06,1.42,.06),_t(.2,.34,.03,Wt("#17336e",{roughness:.5}),.46,1.42,.04),_t(.14,.14,.04,o.steel,.46,1.37,.06)),l.espLedM=li("#35c46b",2),K.add(hn(.018,l.espLedM,.52,1.55,.06,6,5,!1)),["#e04a3a","#f2b632","#35c46b","#3aa0e0"].forEach((Q,H)=>K.add(fe(Pi([-.24+H*.03,1.5-H*.05,.06],[.1,1.75-H*.04,.2],[.4,1.52-H*.05,.06],8),.007,Wt(Q),!1))),K.add($t(.012,.012,.5,o.dark,.66,2.6,0,6)),l.rings=[];for(let Q=0;Q<3;Q++){let H=new xe({color:"#35c46b",transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1}),X=We(new An(.14+Q*.12,.014,6,20,Math.PI/2),H,.66,2.86,0,!1);X.rotation.z=Math.PI/4,X.userData.dyn=!0,K.add(X),l.rings.push(H)}s(K),l.dp={sensor:[[T[0]-2.6,2.3,T[1]+2.15],[99,2.6,-2.2],[97.3,2,-3.3]],cloud:Pi([97.5,2.9,-3.2],[101,9,2],[110,9,12],16)}}{let R=[118,-8.5];s(_t(13.2,.14,9.2,o.soil,R[0],.07,R[1])),u(111.2,-3.7,124.8,-3.7),u(124.8,-3.7,124.8,-13.3),u(111.2,-13.3,124.8,-13.3),u(111.2,-13.3,111.2,-3.7);let C=[],T=[],q=[];for(let et=0;et<6;et++){let Q=et/6*Math.PI*2+et%2*.4,H=Math.cos(Q),X=Math.sin(Q),G=C.length/3,rt=.28+et%3*.14;for(let ct=0;ct<=5;ct++){let xt=ct/5,At=rt*xt*xt*1.5,Bt=xt*(1-.22*xt*xt),vt=.055*Math.sin(Math.PI*Math.min(1,xt*1.15+.08));if(C.push(H*At-X*vt,Bt,X*At+H*vt,H*At+X*vt,Bt,X*At-H*vt),q.push(H*.4,.9,X*.4,H*.4,.9,X*.4),ct<5){let Tt=G+ct*2;T.push(Tt,Tt+1,Tt+2,Tt+1,Tt+3,Tt+2)}}}let Z=new ae;Z.setAttribute("position",new Xt(C,3)),Z.setAttribute("normal",new Xt(q,3)),Z.setIndex(T),l.seeds=[];for(let et=0;et<17;et++)for(let Q=0;Q<12;Q++)l.seeds.push([112.1+et*.74+(e()-.5)*.16,-12.5+Q*.74+(e()-.5)*.12,.8+e()*.45,e()*6]);l.plants=new Wn(Z,Wt("#4c9a33",{roughness:.8,side:Ie}),l.seeds.length),l.plants.castShadow=l.plants.receiveShadow=!0,l.plants.frustumCulled=!1,i.add(l.plants),s(fe([[111.6,.2,-13],[111.6,.2,-4]],.03,o.dark,!1));let K=[];for(let et=113;et<124.5;et+=2.2)for(let Q of[-11.5,-8.5,-5.5])s($t(.015,.015,.7,o.dark,et,.45,Q,5)),K.push([et,.82,Q]);l.irrigate=f(320,K,{spread:3.4,up:2.2,size:.07,life:.75,grav:8}),l.fp={irr:[[108.6,.16,-9.5],[111.6,.2,-9.5],[111.6,.2,-4.2]],compost:Pi([94.6,.9,-8.2],[104,6.5,-11],[113.5,.6,-8.5],14),feed:Pi([122,1.2,-6],[128,6,-1],[135.5,.8,Xe(135.7)-.95],16)}}l.lampM=li("#ffe2a6",.05);for(let[R,C]of[[120.8,-2.9],[143.6,-2.9],[-6.2,-2.9]])s($t(.05,.07,3.6,o.dark,R,1.8,C,10),_t(.5,.05,.05,o.dark,R+.22,3.6,C),hn(.13,l.lampM,R+.45,3.5,C,12,8,!1));for(let R of[l.counter.m])R.userData.dyn=!0;un(n);let v=mu(i,[{type:"water",pts:l.wp.drain,active:R=>+R.r.washing,speed:2},{type:"water",pts:l.wp.loop,active:R=>+R.r.pump,speed:3},{type:"water",pts:l.wp.shed,active:R=>+(R.r.washing||R.r.fogging),speed:3},{type:"water",pts:l.wp.rain,active:R=>+R.r.raining,speed:3},{type:"water",pts:l.wp.plot,active:R=>+R.r.irrigating},{type:"water",pts:l.fp.irr,active:R=>+R.r.irrigating},{type:"water",pts:l.fresh,active:R=>+(R.cur==="heat"&&R.a>.2),speed:1.6,n:5},{type:"energy",pts:l.ep.panel,active:R=>R.r.solarW/400,speed:3},{type:"energy",pts:l.ep.out,active:R=>R.r.loadW/300,speed:4},{type:"energy",pts:l.bp.cable,active:R=>+R.r.gen,speed:4},{type:"waste",pts:l.bp.feed,active:R=>+(R.at("dung")>.86&&R.at("biogas")<.6),speed:.9,size:1.3},{type:"waste",pts:l.bp.slurry,active:R=>R.r.substrate>5?.5:0,speed:.6,size:1.2},{type:"gas",pts:l.bp.stove,active:R=>+R.r.stove,speed:2.4,size:.8},{type:"gas",pts:l.bp.gen,active:R=>+R.r.gen,speed:2.4,size:.8},{type:"data",pts:l.dp.sensor,active:()=>.7,speed:2,size:.6},{type:"data",pts:l.dp.cloud,active:()=>.7,speed:4,size:.8},{type:"fodder",pts:l.fp.compost,active:R=>+(R.cur==="fodder"&&R.a<.4),speed:3,size:1.2},{type:"fodder",pts:l.fp.feed,active:R=>+(R.cur==="home"&&R.a<.5),speed:4,size:1.3}]),g=new Kt,d=new $e,b=new Ge,S=new W,M=new W,z=new W(0,1,0),U=0,F=0,V=0,E=0,y=0,B=-1,m=0,w=(R,C,T,q)=>{R.scale.y=Math.max(.02,C*q),R.position.y=T+R.scale.y/2};function N(R){let C=R.r,T=l.lcd.g,q=rr(C.thi);T.fillStyle="#1c3fd0",T.fillRect(0,0,512,176),T.fillStyle="#2a52e6",T.fillRect(8,8,496,160),T.fillStyle="#eef4ff",T.font='bold 52px Consolas, "Courier New", monospace',T.textBaseline="middle",T.fillText(`Temp:${C.shedT.toFixed(1)}\xB0C`,22,54),T.fillText(`Hum:${C.shedRH.toFixed(0)}% THI${C.thi.toFixed(0)}`,22,122),T.font="bold 30px Consolas, monospace",T.fillStyle=q.key==="good"?"#9dffb0":"#ffd36b",T.fillText(C.cooling?"COOL":C.pump?"PUMP":"",410,54),l.lcd.t.needsUpdate=!0;let Z=l.counter.g,K=Math.round(C.inShed);Z.fillStyle="#0c1410",Z.fillRect(0,0,384,160),Z.fillStyle=E>.3?"#ff5a4a":"#57e389",Z.font="bold 34px Consolas, monospace",Z.textBaseline="middle",Z.fillText(`IN SHED   ${K}`,22,44),Z.fillText(`PADDOCK   ${5-K}`,22,86),Z.fillStyle="#c9d6cc",Z.font="24px Consolas, monospace",Z.fillText(`crossings today ${Math.round(C.crossings)}`,22,130),l.counter.t.needsUpdate=!0}function Y(R){let{r:C,dt:T,time:q}=R,Z=t.state.night;U=Pn(U,C.lights?1:0,oi(2.5,T)),c.emissiveIntensity=.05+9*U,l.lampM.emissiveIntensity=.05+9*U;let K=R.cowX<64?0:127;h[0].position.set(K+1,2.8,-.8),h[1].position.set(K+10.5,2.8,-.8),h.forEach(vt=>{vt.intensity=30*U});for(let vt of[l.shed1,l.shed2])w(vt.fodder,.2+.8*(C.feedTrough/50),.48,.22);let et=R.at("milk");w(l.shed1.jar,hc(et),1.12,.5),l.shed1.jar.visible=et>.01,l.shed1.cluster.visible=R.cur==="milk"&&R.a>.03&&R.a<.985&&R.settled,l.shed1.cluster.position.y=.4+Math.sin(q*9)*.004,l.shed1.chill.material.emissiveIntensity=et>.5?2.5:.2,l.washSpray(T,C.washing&&(R.cur==="wash"||R.cur==="milk"||R.cur==="gate")),w(l.sump,C.collection/800,.1,.95),w(l.tank,C.storage/1e3,3.14,2.3),F=Pn(F,C.pump?1:0,oi(3,T)),l.pumpFan.rotation.x+=T*34*F,l.pump.position.y=.06+(C.pump?Math.sin(q*70)*.004:0),l.tankSpray(T,C.pump);let Q=Math.abs(R.cowX-34)<1.25;E=Pn(E,Q?1:0,oi(Q?30:4,T)),l.gateLedM.emissiveIntensity=.1+10*E*(.6+.4*Math.sin(q*20)),l.beamM.opacity=.55*(1-E),l.cellM.emissiveIntensity=.12*Li(C.solarW/800),l.bars.forEach((vt,Tt)=>{let I=C.bat>Tt/5+.02;vt.emissive.set(C.bat<.25?"#ff5a3c":"#46e06b"),vt.emissiveIntensity=I?2.4:.03});for(let vt of l.mates){let Tt=(q*.05+vt.t*.21)%1,I=Tt<.62,ht=Z>.6;vt.c.update(T,q,{phase:0,walk:0,reach:I&&!ht?1:0,reachY:.14,chew:1,lie:ht?1:0,yaw:I?0:.5*Math.sin(q*.3+vt.t),key:"healthy",ledPower:2.5})}let H=R.at("dung"),X=H<=.3?0:H>=1?1:hc((H-.3)/.66);l.pat.visible=H>.24&&X<.37,l.pat.scale.setScalar(1).multiply(S.set(1,.3,1)).multiplyScalar(hc((H-.24)/.05)),l.roverPath.at(X,S);let G=S.x,rt=S.z;l.roverPath.at(Math.min(1,X+.01),S),l.rover.position.set(G,0,rt),X>.001&&X<.985&&Math.hypot(S.x-G,S.z-rt)>1e-4?l.rover.rotation.y=-Math.atan2(S.z-rt,S.x-G):(X<.001||X>.985)&&(l.rover.rotation.y=Math.PI),l.roverLoad.visible=X>.37&&X<.845,l.roverLampM.emissive.set(X>.001&&X<.999?Math.sin(q*12)>0?"#ffb020":"#5a3c00":"#39d353"),w(l.inlet,Li(C.inlet/30+(X>.845?.25:.1)),.1,.8);let ct=.3+1.15*Li(C.gas/3);l.drum.position.y=Pn(l.drum.position.y,ct,oi(2,T));let xt=l.drum.position.y+2.7,At=Math.max(.05,4.34-xt);l.hose.scale.y=At,l.hose.position.y=xt+At/2,l.flame.visible=C.stove,l.flame.scale.set(1+Math.sin(q*23)*.12,1+Math.sin(q*31)*.22,1+Math.cos(q*19)*.12),l.gen.position.y=.05+(C.gen?Math.abs(Math.sin(q*55))*.008:0),l.genLedM.emissiveIntensity=C.gen?3:.05;let Bt=.2+Li(C.compost/30);l.heap.scale.set(.6+Bt*.5,Bt*.75,.55+Bt*.4),l.steam(T,t.state.rain<.5),l.troughWater.position.y=.3+.24*Li(C.trough/120),V=Pn(V,C.cooling?1:0,oi(1.5,T));for(let vt of l.fans)vt.rotation.z-=T*26*V;l.mist(T,C.fogging),l.rings.forEach((vt,Tt)=>{vt.opacity=Li(Math.sin(q*4-Tt*.9))*.9}),l.espLedM.emissiveIntensity=Math.sin(q*8)>0?3:.2,l.seeds.forEach(([vt,Tt,I,ht],nt)=>{let L=Math.max(.1,C.biomass*I*1.7),$=Math.sin(q*1.4+vt*.6+Tt*.4)*.04;g.compose(S.set(vt,.14,Tt),d.setFromEuler(b.set($,ht,$*.6)),M.set(.5+L*.75,L,.5+L*.75)),l.plants.setMatrixAt(nt,g)}),l.plants.instanceMatrix.needsUpdate=!0,l.irrigate(T,C.irrigating),y-=T,(y<=0||Math.round(C.crossings)!==B||Math.abs(C.thi-m)>.6)&&(y=.4,B=Math.round(C.crossings),m=C.thi,N(R)),v.update(T,R,!1,R.flow||null,.42)}return{update:Y,D:l}}var Ps=i=>`${Math.round(i*100)} %`,qn=(i,t=0)=>`${i.toFixed(t)} L`,lr=i=>i?"ON":"off",rn=[{id:"wake",hours:[5,5.4],x:0,state:"rest",inShed:!0,twin:"shed",docs:"shed",cam:{az:38,el:5,dist:5.4,y:.75,fx:.3},title:"Before sunrise",kicker:"Meet Gauri",lead:"Gauri is an HF-cross cow, tag DS-01. She spent the night lying on dry bedding, chewing the cud. The shed lights ran all night on the battery that yesterday's sun charged.",how:["Scroll and she gets up and walks through her whole day","Every number you see is computed by the same farm engine that runs the live twin","The collar on her neck is the AI health belt: it never sleeps"],pose:i=>({lie:i<.62?1:0,sleep:i<.22?1:0,chew:1,alert:i>.3?.6:0}),read:(i,t)=>[["Rumination",`${t.live.rum.toFixed(0)} min/h`,"chewing the cud"],["Battery",Ps(i.bat),i.lights?"running the lights":"lights off"],["Shed",`${i.shedT.toFixed(1)} \xB0C`,`THI ${i.thi.toFixed(0)}`]]},{id:"belt",hours:[5.45,5.8],x:2.6,state:"idle",inShed:!0,twin:"belt",docs:"belt",cam:{az:44,el:4,dist:3.5,y:1.22,fx:.75},title:"The AI health belt",kicker:"Five sensors on one collar",lead:"The belt reads her body every few seconds and sends it by radio to the farm controller. The AI does not compare her with an average cow. It compares her with her own normal day.",how:["Fever: temperature well above her own baseline, with less cud-chewing","Heat stress: her temperature climbs together with the shed THI","In heat (estrus): restless, far more steps than her busiest normal hour"],labels:[{t:"Temperature sensor",on:"collar",o:[.05,-.3,.16]},{t:"Heart-rate sensor",on:"collar",o:[0,.02,.2]},{t:"Accelerometer \xB7 activity",on:"collar",o:[0,.26,0]},{t:"Rumination sensor",on:"muzzle",o:[-.2,-.05,0]},{t:"GPS + radio",on:"collar",o:[-.05,-.2,-.1]}],pose:i=>({yaw:i>.25?.55:0,alert:1,chew:.5}),read:(i,t)=>[["Temperature",`${t.live.temp.toFixed(1)} \xB0C`,`her normal ${t.trace.cow.baseTemp.toFixed(1)}`],["Heart rate",`${t.live.hr.toFixed(0)} bpm`,""],["AI verdict",i.cLabel,`health ${i.cHealth.toFixed(0)} / 100`]]},{id:"milk",hours:[6,7.05],x:9,state:"eat",inShed:!0,twin:"shed",docs:"shed",cam:{az:-30,el:8,dist:4.9,y:.85,fx:-.5},title:"Morning milking",kicker:"06:00 \xB7 Feed and milk",lead:"She walks into the stall on her own because fresh fodder is waiting in the manger. While she eats, the cluster milks her and the milk runs through the jar to the chiller.",how:["Milking happens at 06:00 and again at 17:00","Heat stress or illness since the last milking lowers the yield","The chiller draws 250 W for three hours after each milking"],labels:[{t:"Milk jar",p:[7.05,1.75,-.2]},{t:"Bulk chiller",p:[4.5,1.95,-7.3]},{t:"Feed manger",p:[10.6,.8,-.3]}],pose:()=>({reach:1,reachY:.62,yaw:.78,chew:1}),read:(i,t)=>{let e=t.at(7.2);return[["Gauri gives",qn(e.cMilk*t.fill,1),"this milking"],["Herd today",qn(e.milkToday*t.fill,1),"five animals"],["Chiller",lr(t.fill>.5),"250 W"]]}},{id:"wash",hours:[7.15,8.25],x:19,state:"idle",inShed:!1,flow:"water",twin:"water",docs:"water",cam:{az:12,el:15,dist:12.5,w:.65,look:[21.5,2.4,-5.6]},title:"Washing water is never wasted",kicker:"Collect \xB7 filter \xB7 pump \xB7 reuse",lead:"After milking the floor is washed from the storage tank. The dirty water drains to the collection tank, passes down through gravel, sand and charcoal, and the pump lifts it back up to be used again.",how:["85 % of the wash water comes back down the drain","The pump starts by itself above 110 L collected and stops below 25 L","Recycled water washes, cools and irrigates. Drinking water is always fresh"],labels:[{t:"Collection tank",p:[17.5,1.35,-5.5]},{t:"Gravel \xB7 sand \xB7 charcoal",p:[20.6,2.95,-5.5]},{t:"Pump (L293D driver)",p:[22.7,.9,-5.5]},{t:"Storage tank",p:[25.6,6.1,-6.2]}],pose:i=>({yaw:i>.3?.5:0}),read:i=>[["Collection",qn(i.collection),i.washing?"filling from the drain":""],["Storage",qn(i.storage),"of 1000 L"],["Pump",lr(i.pump),i.pump?"370 W from the battery":"waiting"],["Recycled today",qn(i.recycled),""]]},{id:"gate",hours:[8.3,8.5],x:31,drift:6,state:"walk",inShed:!1,flow:"data",twin:"gate",docs:"gate",cam:{az:52,el:9,dist:8.5,w:.5,look:[34,1.5,.3]},title:"The gate that counts",kicker:"IR sensor",lead:"An infrared beam crosses the gate at chest height. When she walks through, her body breaks the beam, the red lamp flashes and the controller moves one animal from the shed count to the paddock count.",how:["Each crossing is logged with the animal and the time","The farmer always knows who is inside without walking the farm","The same beam can warn of movement at night"],labels:[{t:"IR emitter",p:[34,1.42,-1.55]},{t:"IR receiver",p:[34,1.42,1.95]},{t:"Counter",p:[34.2,3,-.3]}],pose:()=>({alert:.5}),read:i=>[["In the shed",`${Math.round(i.inShed)}`,""],["In the paddock",`${5-Math.round(i.inShed)}`,""],["Crossings today",`${Math.round(i.crossings)}`,"whole herd"]]},{id:"solar",hours:[9.4,10.8],x:45.5,drift:4,state:"walk",inShed:!1,flow:"energy",twin:"solar",docs:"solar",cam:{az:-18,el:13,dist:12.5,w:.6,look:[48,1.4,-7]},title:"Power from the sun",kicker:"800 W panel \xB7 3 kWh battery",lead:"By mid-morning the panels are making more power than the farm uses, so the surplus charges the battery. Tonight that battery runs the lights, the pump and the electronics.",how:["Clouds cut the output to about a third; rain to about a seventh","If the battery falls under 30 % the biogas generator backs it up","On a sunny day the farm needs no grid power at all"],labels:[{t:"Solar array",p:[46.5,2.5,-8.6]},{t:"Battery + inverter",p:[51,2.1,-5]}],pose:()=>({}),read:i=>[["Solar",`${i.solarW.toFixed(0)} W`,"of 800 W peak"],["Farm load",`${i.loadW.toFixed(0)} W`,""],["Battery",Ps(i.bat),i.solarW+i.genW>i.loadW+5?"charging":i.bat>.995?"full":"discharging"],["Made today",`${(i.solarWh/1e3).toFixed(2)} kWh`,""]]},{id:"graze",hours:[11,12.2],x:60,state:"graze",inShed:!1,twin:"belt",docs:"belt",cam:{az:32,el:4,dist:5.6,y:.75,fx:.5},title:"Out on the paddock",kicker:"Grazing with the herd",lead:"This is the quiet middle of her day. The belt is still counting: steps on the accelerometer, minutes of chewing on the rumination sensor. This ordinary day is the baseline every later day is compared with.",how:["Activity index: about 35 while grazing, 75 while walking, 4 lying down","Rumination is highest at rest, near 40 minutes an hour","A sick cow moves less and chews less, hours before she looks ill"],pose:i=>({reach:i>.86?0:1,reachY:.14,chew:1,yaw:i>.86?.6:0}),read:(i,t)=>[["Activity",t.live.act.toFixed(0),"index"],["Rumination",`${t.live.rum.toFixed(0)} min/h`,""],["Heart rate",`${t.live.hr.toFixed(0)} bpm`,""],["Paddock THI",i.padThi.toFixed(0),rr(i.padThi).label]]},{id:"dung",hours:[12.25,12.5],x:71.8,drift:4.6,state:"walk",inShed:!1,flow:"waste",twin:"biogas",docs:"biogas",cam:{az:-46,el:16,dist:8.5,w:.45,look:[75,.4,-1.6]},title:"Nothing is thrown away",kicker:"Dung collection",lead:"A dairy animal drops dung every two to four hours. On this farm it is fuel. The small solar rover drives out, scoops up the pat and tips it into the digester inlet.",how:["Each pat is about 2.2 kg","The rover leaves its dock when two pats are waiting, or one is over an hour old","A clean yard is also a hygiene score: fewer flies, healthier udders"],labels:[{t:"Collector rover",on:"rover",o:[0,.9,0]},{t:"Charging dock",p:[77.5,1.3,-3.9]},{t:"Digester inlet",p:[82.4,1.25,-4.4]}],pose:()=>({}),read:i=>[["Dung today",`${i.dung.toFixed(0)} kg`,"whole herd"],["Collected",`${i.collected.toFixed(0)} kg`,""],["Waiting",`${Math.round(i.pats)} pats`,""],["Rover",i.rover==="dock"?"docked":"collecting",""]]},{id:"biogas",hours:[12.55,13.3],x:86,drift:3,state:"walk",inShed:!1,flow:"gas",twin:"biogas",docs:"biogas",cam:{az:14,el:15,dist:13.5,w:.7,look:[88.5,2,-6.5]},title:"Dung becomes gas",kicker:"Floating-drum biogas plant",lead:"Inside the sealed pit, bacteria digest the slurry and give off methane. The gas collects under the green steel drum, which floats higher as it fills. A pipe takes the gas to the kitchen stove and to the backup generator.",how:["The drum is the gas meter: high drum, full holder","Lunch is cooking on it right now: biogas replaces LPG","What is left over is slurry, the best compost there is"],labels:[{t:"Floating gas drum",p:[87.5,4,-6.8]},{t:"Biogas stove",p:[91.7,1.75,-3.8]},{t:"Backup generator",p:[83.5,1.6,-9]},{t:"Compost pit",p:[93.5,1.25,-8.2]}],pose:i=>({yaw:i>.5?.5:0}),read:i=>[["Gas holder",`${i.gas.toFixed(2)} m\xB3`,"of 3 m\xB3"],["Stove",i.stove?"burning":"off",i.stove?"cooking lunch":""],["Generator",lr(i.gen),i.gen?"800 W to the battery":"standby"],["LPG replaced",`${i.lpg.toFixed(2)} kg`,"today"]]},{id:"heat",hours:[13.5,14.6],x:99.8,state:"drink",inShed:!0,flow:"data",twin:"monitor",docs:"monitoring",cam:{az:48,el:9,dist:8.2,w:.45,look:[101.5,1.5,-3.5]},title:"The hottest hour",kicker:"DHT11 \xB7 ESP8266 \xB7 THI",lead:"A DHT11 sensor measures temperature and humidity. The controller turns them into one number, the Temperature-Humidity Index, shows it on the LCD and sends it over Wi-Fi to the phone. At THI 79 the fans and foggers switch on by themselves.",how:["Under 72 comfortable \xB7 72-78 mild \xB7 79-88 heat stress \xB7 89+ danger","A hot cow drinks more and gives less milk, so cooling pays for itself","Try the Heat wave switch at the top and watch this stop change"],labels:[{t:"DHT11 sensor",p:[100.9,2.6,-3.9]},{t:"LCD + ESP8266 + L293D",p:[97.1,2.65,-3.5]},{t:"Fans and foggers",p:[103.5,3.5,-6]},{t:"Fresh drinking water",p:[101.9,1,.1]}],pose:i=>({reach:i<.8?1:0,reachY:.5,yaw:i<.8?.75:.4,chew:.3}),read:i=>{let t=rr(i.thi);return[["Shed",`${i.shedT.toFixed(1)} \xB0C`,`${i.shedRH.toFixed(0)} % humidity`],["THI",i.thi.toFixed(0),t.label],["Fans + foggers",lr(i.cooling),i.cooling?"160 W \xB7 25 L/h":"not needed"],["Trough",qn(i.trough),"fresh line"]]}},{id:"fodder",hours:[14.7,15.5],x:113,drift:7,state:"walk",inShed:!1,flow:"fodder",twin:"biogas",docs:"biogas",cam:{az:-12,el:19,dist:15,w:.7,look:[118,.8,-8.5]},title:"Her waste grows her food",kicker:"Compost \xB7 fodder plot",lead:"The digested slurry is spread on this plot as compost and the recycled wash water irrigates it. When the crop is fully grown it is cut and carried to the manger. The loop that started behind her is now in front of her.",how:["Compost is spread each morning once 12 kg is ready","Growth depends on sun, soil moisture and soil richness","Every harvest is 110 kg of green fodder the farm did not have to buy"],labels:[{t:"Fodder crop",p:[118,2.3,-8.5]},{t:"Drip irrigation",p:[111.6,.7,-6]}],pose:()=>({yaw:.35}),read:(i,t)=>{let e=t.trace.events.find(n=>n.title==="Fodder harvested"&&n.hour<=i.hour);return[["Crop",Ps(i.biomass),e?"just harvested":i.biomass>.9?"nearly ready":"growing"],["Soil moisture",Ps(i.moisture),i.irrigating?"irrigating now":""],["Soil richness",Ps(i.soil),"from compost"],["Feed store",`${i.feedStore.toFixed(0)} kg`,e?"+110 kg today":i.feedStore<1?"used up: bought feed until harvest":"home-grown"]]}},{id:"home",hours:[17.2,19.2],x:135.7,state:"eat",inShed:!0,flow:"energy",twin:"connect",docs:"loops",cam:{az:34,el:6,dist:7.6,y:1,fx:.6},title:"Home for the evening",kicker:"17:00 milking \xB7 sunset",lead:"She comes back through the gate for the evening milking and a manger full of the fodder her own dung helped to grow. As the sun sets, the solar panel stops and the lights come on by themselves, running from the battery.",how:["Lights are automatic: on at dusk, off at dawn","Evening wash water goes round the recycling loop again","Energy, water, data, waste and fodder: five loops, each feeding the next"],pose:()=>({reach:1,reachY:.62,yaw:.78,chew:1}),read:i=>[["Milk today",qn(i.milkToday,1),"herd"],["Lights",lr(i.lights),i.lights?"120 W":"daylight"],["Battery",Ps(i.bat),i.solarW>5?`solar ${i.solarW.toFixed(0)} W`:"on battery"],["Solar today",`${(i.solarWh/1e3).toFixed(1)} kWh`,""]]},{id:"night",hours:[20.6,22.6],x:137.9,state:"rest",inShed:!0,twin:"thanks",docs:"score",summary:!0,cam:{az:14,el:8,dist:6.2,y:.8,fx:.2},title:"Night, and the day's account",kicker:"The belt keeps watch",lead:"Gauri lies down and chews the cud again. Nobody is in the shed, but her belt is still sending. If her temperature rose tonight, the farmer's phone would ring before morning.",pose:i=>({lie:i>.12?1:0,chew:1,sleep:i>.82?1:0}),read:i=>[["Milk",qn(i.milkTotal,1),"two milkings"],["Water recycled",qn(i.recycled),`${i.kWater.toFixed(0)} % reuse rate`],["Solar energy",`${(i.solarWh/1e3).toFixed(1)} kWh`,`${i.kRenew.toFixed(0)} % renewable`],["Biogas made",`${i.gasMade.toFixed(2)} m\xB3`,`${i.lpg.toFixed(2)} kg LPG saved`],["Dung collected",`${i.collected.toFixed(0)} kg`,""],["Farm score",`${i.score.toFixed(0)} / 100`,""]]}];var be=i=>document.getElementById(i),hi=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Me=(i,t,e)=>i+(t-i)*e,Ui=(i,t)=>1-Math.exp(-i*t),Po=i=>(i=hi(i),i*i*(3-2*i)),dc=i=>`${String(Math.floor(i)%24).padStart(2,"0")}:${String(Math.floor(i%1*60)).padStart(2,"0")}`,ui=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Is=rn.length,ci=.45,vu=2.8,Ds=new URLSearchParams(location.search),yu=matchMedia("(prefers-reduced-motion: reduce)").matches,bu=be("track");bu.innerHTML=rn.map((i,t)=>`
  <section class="stage" id="${i.id}" data-i="${t}">
    <article class="card">
      <p class="when"><span class="num">${String(t+1).padStart(2,"0")}</span><b>${dc(i.hours[0])}</b><i>${ui(i.kicker)}</i></p>
      <h2>${ui(i.title)}</h2>
      <p class="lead">${ui(i.lead)}</p>
      ${i.how?`<ul class="how">${i.how.map(e=>`<li>${ui(e)}</li>`).join("")}</ul>`:""}
      <div class="reads${i.summary?" sum":""}" id="reads-${i.id}"></div>
      <p class="links"><a href="index.html#step=${i.twin}">Open this in the live twin</a><a href="docs.html#${i.docs}">How it works</a></p>
      ${i.summary?'<p class="links end"><a class="cta" href="index.html">Run the live twin</a><a class="cta ghost" href="#wake">Walk the day again</a></p>':""}
    </article>
  </section>`).join("");var uc=[...bu.children];be("timeline").innerHTML=rn.map((i,t)=>`<button data-i="${t}" title="${ui(i.title)}"><i></i><span>${dc(i.hours[0])}</span></button>`).join("")+'<div class="rail"><b id="railFill"></b></div>';var Mu=[...be("timeline").querySelectorAll("button")],Kg=be("tags");function Qg(){let i=be("scene"),t;try{t=new eo({canvas:i,antialias:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("nogl"),be("loading").innerHTML="<p>This browser could not start WebGL, which the 3D walk needs. The story below still reads on its own, or open the page in a recent Chrome, Edge or Firefox.</p>";return}t.shadowMap.enabled=!0,t.shadowMap.type=go;let e=t.getContext().getExtension("WEBGL_debug_renderer_info"),n=e?String(t.getContext().getParameter(e.UNMASKED_RENDERER_WEBGL)):"",s=Ds.has("lite")||!Ds.has("hq")&&/Intel|UHD|Iris|HD Graphics|Mali|Adreno|PowerVR|SwiftShader|llvmpipe|Basic Render/i.test(n);t.toneMapping=er,t.toneMappingExposure=.5;let r=new us,a=new Be(36,1,.12,9e3),o=fu(t,r,xu),c=_u(r,o),h=Di({coat:"holstein",idx:0,seed:12});r.add(h.group);let u=null,f=null;if(!Ds.has("nofx")&&(!s||Ds.has("fx")))try{let D=new Ne(4,4,{type:en,samples:4});u=new So(t,D),u.addPass(new wo(r,a)),f=new vs(new Ft(256,256),.22,.7,2.4),u.addPass(f),u.addPass(new Eo)}catch{u=null}let p={weather:"sunny",heatwave:!1},l=oc(p),x={state:"rest",stress:0,stressAcc:0,sick:0,cond:"healthy",estrus:0,act:4,rum:40,...l.cow,temp:l.cow.baseTemp,hr:l.cow.baseHr},v=D=>(Math.random()-.5)*2*D,g={temp:x.temp,hr:x.hr,act:x.act,rum:x.rum},d={temp:[],hr:[],act:[],rum:[]};function b(){document.body.classList.add("busy"),setTimeout(()=>{l=oc(p),document.body.classList.remove("busy"),rt=0},30)}document.querySelectorAll("[data-weather]").forEach(D=>D.onclick=()=>{p.weather=D.dataset.weather,document.querySelectorAll("[data-weather]").forEach(O=>O.classList.toggle("on",O===D)),b()}),be("btnHeat").onclick=()=>{p.heatwave=!p.heatwave,be("btnHeat").classList.toggle("on",p.heatwave),b()};let S=D=>rn[D].x+(rn[D].drift||0);function M(D){let O=Math.min(Is-1,Math.floor(D)),it=hi(D-O),J=rn[O],mt=rn[O-1];if(!mt)return{i:O,u:it,a:it,x:J.x+(J.drift||0)*it,hour:Me(J.hours[0],J.hours[1],it),walking:!1,st:J};if(it<ci){let gt=it/ci;return{i:O,u:it,a:0,x:Me(S(O-1),J.x,gt),hour:Me(mt.hours[1],J.hours[0],gt),walking:!0,seg:Math.abs(J.x-S(O-1)),st:J}}let lt=(it-ci)/(1-ci);return{i:O,u:it,a:lt,x:J.x+(J.drift||0)*lt,hour:Me(J.hours[0],J.hours[1],lt),walking:!1,st:J}}let z=()=>{let D=scrollY+innerHeight*.42;for(let O=Is-1;O>=0;O--){let it=uc[O];if(D>=it.offsetTop||O===0)return hi(O+(D-it.offsetTop)/it.offsetHeight,0,Is-1e-4)}return 0},U=(D,O)=>{let it=Math.min(Is-1,Math.floor(D)),J=uc[it];scrollTo({top:Math.max(0,J.offsetTop+(D-it)*J.offsetHeight-innerHeight*.42),behavior:O||yu?"instant":"smooth"})},F=0,V=0,E=0,y=!0,B=0,m=D=>{U(D,!0),F=V=z(),E=0,y=!0},w=()=>{let D=rn.findIndex(O=>O.id===location.hash.slice(1));return D>=0&&m(D+.75),D>=0};addEventListener("hashchange",w),Mu.forEach(D=>D.onclick=()=>U(+D.dataset.i+.72)),be("hint").onclick=()=>U(.95),addEventListener("keydown",D=>{if(D.target.tagName==="INPUT")return;let O=Math.floor(F);(D.key==="ArrowRight"||D.key==="PageDown")&&(D.preventDefault(),U(Math.min(Is-.2,(F-O>.6?O+1:O)+.72))),(D.key==="ArrowLeft"||D.key==="PageUp")&&(D.preventDefault(),U(Math.max(0,(F-O>.8?O:O-1)+.72)))});let N=rn.map(D=>(D.labels||[]).map(O=>{let it=document.createElement("span");return it.className="tag off",it.textContent=O.t,Kg.appendChild(it),{...O,el:it,shown:!1,v:new W}})),Y=new W;function R(D,O){N.forEach((it,J)=>it.forEach(mt=>{let lt=J===D.i&&D.a>.12&&D.a<.985&&O!==!1;if(lt){mt.on==="rover"?Y.copy(c.D.rover.position):mt.on?h.anchors[mt.on].getWorldPosition(Y):Y.set(0,0,0);let gt=mt.p||mt.o;mt.p?Y.set(gt[0],gt[1],gt[2]):(Y.x+=gt[0],Y.y+=gt[1],Y.z+=gt[2]),Y.project(a),lt=Y.z<1&&Math.abs(Y.x)<.98&&Math.abs(Y.y)<.95,lt&&(mt.el.style.transform=`translate3d(${((Y.x*.5+.5)*C.w).toFixed(1)}px,${((-Y.y*.5+.5)*C.h).toFixed(1)}px,0) translate(-50%,-135%)`)}lt!==mt.shown&&(mt.shown=lt,mt.el.classList.toggle("off",!lt))}))}let C={x:0,y:0,w:1,h:1,tx:0,ty:0},T={ratio:Math.min(devicePixelRatio||1,s?1:1.75),level:0,win:0,frames:0,slow:0,age:0,fx:!!u,lite:s,gpu:n};s&&o.setQuality(1);function q(){let D=innerWidth,O=innerHeight;t.setPixelRatio(T.ratio),t.setSize(D,O,!1),u&&(u.setPixelRatio(T.ratio),u.setSize(D,O)),a.aspect=D/O,a.fov=D/O<.8?52:D/O<1.25?44:36,C.w=D,C.h=O;let it=D>900;C.tx=it?-(Math.min(460,D*.34)-(D>1180?250:0))/2:0,C.ty=it?0:O*.17,Z()}function Z(){a.setViewOffset(C.w,C.h,C.x,C.y,C.w,C.h),a.updateProjectionMatrix()}addEventListener("resize",q);let K=()=>{o.sun.shadow.mapSize.set(1024,1024),o.sun.shadow.map?.dispose(),o.sun.shadow.map=null},et=s?[()=>o.setQuality(2),K,()=>{T.ratio=Math.min(T.ratio,.85)},()=>o.setQuality(3),()=>{T.ratio=.7}]:[()=>{T.ratio=Math.min(T.ratio,1.25)},()=>{T.fx=!1},()=>o.setQuality(1),()=>{T.ratio=1},K,()=>o.setQuality(2),()=>{T.ratio=.85,o.setQuality(3)}];function Q(D){if(T.age+=D,T.win+=D,T.frames++,T.win<.8)return;let O=T.win/T.frames;T.win=0,T.frames=0,!(T.age<2.5||document.hidden||T.level>=et.length)&&(T.slow=O>1/33?T.slow+1:0,!(T.slow<2)&&(T.slow=0,et[T.level++](),q()))}let H=[["temp","Body temperature","\xB0C",1,37.8,40.2],["hr","Heart rate","bpm",0,50,100],["act","Activity","index",0,0,90],["rum","Rumination","min/h",0,0,45]];be("vitals").innerHTML=H.map(([D,O,it])=>`<div class="vit"><span>${O}</span><b id="v-${D}">--</b><small>${it}</small><canvas id="c-${D}" width="180" height="44"></canvas></div>`).join("");let X=(D,O)=>{D&&D.textContent!==O&&(D.textContent=O)},G={rest:"lying down, chewing the cud",walk:"walking",eat:"feeding at the manger",graze:"grazing",drink:"drinking",idle:"standing"},rt=0,ct=0,xt=-1;function At(D,O,it,J){let mt=be(D),lt=mt.getContext("2d"),gt=mt.width,zt=mt.height;if(lt.clearRect(0,0,gt,zt),O.length<2)return;let ft=Math.min(it,...O),Mt=Math.max(J,...O),wt=bt=>3+bt/(O.length-1)*(gt-9),Pt=bt=>zt-5-(bt-ft)/(Mt-ft)*(zt-10);lt.strokeStyle="#9fe870",lt.lineWidth=2.5,lt.lineJoin=lt.lineCap="round",lt.beginPath(),O.forEach((bt,kt)=>kt?lt.lineTo(wt(kt),Pt(bt)):lt.moveTo(wt(kt),Pt(bt))),lt.stroke(),lt.fillStyle="#ffffff",lt.beginPath(),lt.arc(wt(O.length-1),Pt(O[O.length-1]),3.4,0,7),lt.fill()}function Bt(D,O,it){X(be("clock"),dc(D.hour));let J=o.state.elev;X(be("phase"),D.hour<5.6?"before dawn":J<.25&&D.hour<12?"sunrise":D.hour<11.5?"morning":D.hour<14.5?"midday":D.hour<17?"afternoon":D.hour<18.6?"sunset":"night"),be("sunDot").style.cssText=`left:${hi((D.hour-4.5)/19)*100}%;bottom:${Math.max(0,J)*100}%;background:${J>.02?"#ffd166":"#cfd8ff"}`;for(let[wt,,,Pt]of H)X(be(`v-${wt}`),g[wt].toFixed(Pt));for(let[wt,,,,Pt,bt]of H)At(`c-${wt}`,d[wt],Pt,bt);let mt=be("aiChip"),lt=O.cKey;mt.className=`chip ${lt==="healthy"?"good":lt==="fever"?"crit":"warn"}`,X(mt,`${lt==="healthy"?"\u2714":"\u25B2"} ${O.cLabel}`),X(be("doing"),`${G[x.state]} \xB7 ${D.st.inShed&&(D.i<3||D.i>10)?"cow shed":"paddock"}`);let gt=O.thi>=79?`\u25B2 Shed heat stress \xB7 THI ${O.thi.toFixed(0)} \xB7 fans and foggers running`:O.gridW>0?"\u25B2 Running on grid power":O.bat<.2?"\u25B2 Battery low \xB7 biogas generator backing up":O.raining?"Rain \xB7 the roof gutter is filling the collection tank":"";be("alert").hidden=!gt,X(be("alert"),gt);let zt=rn[D.i].read(O,it),ft=be(`reads-${D.st.id}`),Mt=zt.map(([wt,Pt,bt])=>`<div><span>${ui(wt)}</span><b>${ui(Pt)}</b><small>${ui(bt||"")}</small></div>`).join("");ft.dataset.h!==Mt&&(ft.dataset.h=Mt,ft.innerHTML=Mt),D.i!==xt&&(xt=D.i,Mu.forEach((wt,Pt)=>{wt.classList.toggle("on",Pt===D.i),wt.classList.toggle("done",Pt<D.i)}),uc.forEach((wt,Pt)=>wt.classList.toggle("now",Pt===D.i))),be("railFill").style.width=`${(hi((D.i+D.u)/Is)*100).toFixed(2)}%`,document.body.classList.toggle("started",scrollY>40)}let vt=new ps,Tt={az:.6,el:.1,dist:6,fx:0,fy:1,fz:0},I={...Tt},ht={x:0,face:0,phase:0,v:0,walk:0,settled:!0},nt=new W,L=new W,$={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",D=>{$.x=D.clientX/innerWidth-.5,$.y=D.clientY/innerHeight-.5});let pt=0,dt=!0;function A(D){let O=D.st.cam,it=D.walking?rn[D.i-1].cam:O,J=D.walking?Po(D.u/ci):1,mt=(wt,Pt)=>Me(it[wt]??Pt,O[wt]??Pt,J),lt=Xe(ht.x),gt=mt("w",0),zt=it.look||[ht.x,1,lt],ft=O.look||[ht.x,1,lt],Mt=Math.cos(ht.face);I.az=Vl.degToRad(mt("az",30)+(D.walking?0:(D.a-.5)*9)),I.el=Vl.degToRad(mt("el",8)),I.dist=mt("dist",7)*(a.aspect<.8?1.25:1),I.fx=Me(ht.x+mt("fx",0)*Mt,Me(zt[0],ft[0],J),gt),I.fy=Me(mt("y",1),Me(zt[1],ft[1],J),gt),I.fz=Me(lt,Me(zt[2],ft[2],J),gt)}function _(){let D=vt.getDelta(),O=Math.min(D,.05);pt+=yu?0:O,F=z();let it=F-V;if(y||dt?(V=F,E=0,it=0):Math.abs(it)>2.4&&B<=0&&(B=.36,document.body.classList.add("cut")),B>0)B-=O,B<=.18&&Math.abs(it)>.5&&(V=F,E=0,y=!0),B<=0&&document.body.classList.remove("cut");else if(!y){let st=M(V),ut=1.5+3.4*Po((Math.abs(it)-.3)/.8),Et=st.walking?ut/Math.max(2,st.seg)*ci:(1-ci)/vu;!st.walking&&st.st.drift&&(Et=Math.min(Et,ut*(1-ci)/Math.abs(st.st.drift))),(!st.st||st.i===0)&&(Et=1/(vu*1.6)),Et*=1+Math.pow(Math.max(0,Math.abs(it)-1.1),2)*5,E=Me(E,hi(it*3.5,-Et,Et),Ui(6,O));let Rt=E*O;V+=Math.abs(Rt)>Math.abs(it)?it:Rt}let J=M(V),mt=y||dt?0:J.x-ht.x;ht.x=J.x,ht.v=Me(ht.v,O>0?mt/O:0,Ui(10,O));let lt=Math.abs(ht.v),gt=lt>.06,ft=((gt&&ht.v<0?Math.PI:0)-ht.face)*Ui(4.5,O);ht.face=y?0:ht.face+ft;let Mt=jl*(1+.5*Po((lt-1.7)/3));ht.phase+=Math.min(Math.abs(mt)/Mt,3.4*O)+Math.abs(ft)*.45,ht.settled=!gt&&Math.abs(ht.face)<.05;let wt=Xe(ht.x),Pt=cc(ht.x);h.group.position.set(ht.x,0,wt),h.group.rotation.y=-Math.atan(Pt)+ht.face,o.setTime(J.hour,p.weather,y?5:O);let bt=ac(l,J.hour),kt=gt||J.walking?{}:J.st.pose(J.a);x.state=kt.lie?"rest":gt?"walk":J.walking||J.st.state==="walk"?"idle":J.st.state,rc(x,O*(y?40:.5),J.st.inShed?bt.thi:bt.padThi,J.hour,v);for(let st of["temp","hr","act","rum"])g[st]=Me(g[st],x[st],y?1:Ui(2.5,O));if(ct-=O,ct<=0){ct=.2;for(let st of["temp","hr","act","rum"])d[st].push(g[st]),d[st].length>90&&d[st].shift()}h.update(y?1:O,pt,{...kt,phase:ht.phase,walk:gt?1:0,key:bt.cKey,effort:hi((lt-1.6)/3)+x.stress,ping:J.st.id==="belt"||J.st.id==="night",ledPower:4+4*o.state.night});let Ht={r:bt,dt:O,time:pt,cur:J.st.id,a:J.a,q:V,cowX:ht.x,settled:ht.settled,flow:J.walking?null:J.st.flow,at:st=>{let ut=rn.findIndex(Et=>Et.id===st);return J.i>ut?1:J.i<ut?0:J.a}};c.update(Ht),A(J);let ee=y||dt?1:Ui(2.6,O);for(let st in Tt)Tt[st]=Me(Tt[st],I[st],ee);$.sx=Me($.sx,$.x,Ui(3,O)),$.sy=Me($.sy,$.y,Ui(3,O));let k=Tt.az+$.sx*.12,yt=hi(Tt.el-$.sy*.05,.02,1.3);nt.set(Tt.fx,Tt.fy,Tt.fz),a.position.set(nt.x+Tt.dist*Math.sin(k)*Math.cos(yt),Math.max(.35,nt.y+Tt.dist*Math.sin(yt)),nt.z+Tt.dist*Math.cos(k)*Math.cos(yt)),a.lookAt(nt),C.x=Me(C.x,C.tx,ee),C.y=Me(C.y,C.ty,ee),Z(),L.set(Me(ht.x,nt.x,.5),0,Me(wt,nt.z,.5)),o.update(O,pt,L,a,h.group.position),f&&(f.strength=.16+.5*o.state.night),u&&T.fx?u.render(O):t.render(r,a),R(J,!!(ht.settled||J.st.drift)),rt-=O,(rt<=0||y)&&(rt=.2,Bt(J,bt,{live:x,trace:l,a:J.a,fill:Po(Ht.at("milk")),at:st=>ac(l,st)})),dt&&(dt=!1,document.body.classList.add("ready")),y=!1,D<.25&&Q(D),requestAnimationFrame(_)}q(),Ds.has("q")?m(+Ds.get("q")):w()||(F=V=z()),window.cowFlow={jump:m,scene:r,camera:a,renderer:t,env:o,cow:h,stations:c,quality:T,get q(){return V},get trace(){return l},live:x},t.compile(r,a),requestAnimationFrame(_)}Qg();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
