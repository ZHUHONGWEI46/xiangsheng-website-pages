import{a as es,e as ts,f as rs}from"./chunk-2XV62AHC.js";import"./chunk-5TBO732O.js";var Ko=0,is=1,Zo=2,to=1,Jo=2,Zt=3,hr=0,xt=1,Jt=2,cr=0,qr=1,as=2,ns=3,ss=4,$o=5,Sr=100,Qo=101,el=102,tl=103,rl=104,il=200,al=201,nl=202,sl=203,Wa=204,Xa=205,ol=206,ll=207,cl=208,ul=209,hl=210,dl=211,pl=212,fl=213,ml=214,ja=0,Ya=1,qa=2,Zr=3,Ka=4,Za=5,Ja=6,$a=7,ro=0,gl=1,_l=2,ur=0,vl=1,xl=2,El=3,Ml=4,Sl=5,Tl=6,yl=7,io=300,Jr=301,$r=302,Qa=303,en=304,na=306,tn=1e3,yr=1001,rn=1002,Nt=1003,bl=1004,bi=1005,Bt=1006,da=1007,br=1008,er=1009,ao=1010,no=1011,di=1012,On=1013,Rr=1014,$t=1015,_i=1016,Fn=1017,Bn=1018,pi=1020,so=35902,oo=35899,lo=1021,co=1022,It=1023,fi=1026,mi=1027,uo=1028,zn=1029,ho=1030,Hn=1031,Vn=1033,qi=33776,Ki=33777,Zi=33778,Ji=33779,an=35840,nn=35841,sn=35842,on=35843,ln=36196,cn=37492,un=37496,hn=37808,dn=37809,pn=37810,fn=37811,mn=37812,gn=37813,_n=37814,vn=37815,xn=37816,En=37817,Mn=37818,Sn=37819,Tn=37820,yn=37821,bn=36492,An=36494,Rn=36495,wn=36283,Cn=36284,Pn=36285,Un=36286,ta=2300,In=2301,pa=2302,os=2400,ls=2401,cs=2402,Al=3200,Rl=3201,wl=0,Cl=1,lr="",vt="srgb",Qr="srgb-linear",ra="linear",We="srgb",Ur=7680,us=519,Pl=512,Ul=513,Il=514,po=515,Ll=516,Nl=517,Dl=518,Ol=519,hs=35044,ds="300 es",zt=2e3,ia=2001,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){let r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){let r=this._listeners;if(r===void 0)return;let i=r[t];if(i!==void 0){let a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let r=e[t.type];if(r!==void 0){t.target=this;let i=r.slice(0);for(let a=0,n=i.length;a<n;a++)i[a].call(this,t);t.target=null}}},pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,Ln=180/Math.PI;function vi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pt[t&255]+pt[t>>8&255]+pt[t>>16&255]+pt[t>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[r&63|128]+pt[r>>8&255]+"-"+pt[r>>16&255]+pt[r>>24&255]+pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toLowerCase()}function Oe(t,e,r){return Math.max(e,Math.min(r,t))}function Fl(t,e){return(t%e+e)%e}function ma(t,e,r){return(1-r)*t+r*e}function ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Ge=class fo{constructor(e=0,r=0){fo.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let r=this.x,i=this.y,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6],this.y=a[1]*r+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Oe(this.x,e.x,r.x),this.y=Oe(this.y,e.y,r.y),this}clampScalar(e,r){return this.x=Oe(this.x,e,r),this.y=Oe(this.y,e,r),this}clampLength(e,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(e)/r;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){let i=Math.cos(r),a=Math.sin(r),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*a+e.x,this.y=n*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ri=class{constructor(t=0,e=0,r=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=i}static slerpFlat(t,e,r,i,a,n,s){let o=r[i+0],l=r[i+1],c=r[i+2],u=r[i+3],d=a[n+0],p=a[n+1],m=a[n+2],E=a[n+3];if(s===0){t[e+0]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(s===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=E;return}if(u!==E||o!==d||l!==p||c!==m){let _=1-s,f=o*d+l*p+c*m+u*E,h=f>=0?1:-1,C=1-f*f;if(C>Number.EPSILON){let b=Math.sqrt(C),N=Math.atan2(b,f*h);_=Math.sin(_*N)/b,s=Math.sin(s*N)/b}let S=s*h;if(o=o*_+d*S,l=l*_+p*S,c=c*_+m*S,u=u*_+E*S,_===1-s){let b=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=b,l*=b,c*=b,u*=b}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,r,i,a,n){let s=r[i],o=r[i+1],l=r[i+2],c=r[i+3],u=a[n],d=a[n+1],p=a[n+2],m=a[n+3];return t[e]=s*m+c*u+o*p-l*d,t[e+1]=o*m+c*d+l*u-s*p,t[e+2]=l*m+c*p+s*d-o*u,t[e+3]=c*m-s*u-o*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,i){return this._x=t,this._y=e,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let r=t._x,i=t._y,a=t._z,n=t._order,s=Math.cos,o=Math.sin,l=s(r/2),c=s(i/2),u=s(a/2),d=o(r/2),p=o(i/2),m=o(a/2);switch(n){case"XYZ":this._x=d*c*u+l*p*m,this._y=l*p*u-d*c*m,this._z=l*c*m+d*p*u,this._w=l*c*u-d*p*m;break;case"YXZ":this._x=d*c*u+l*p*m,this._y=l*p*u-d*c*m,this._z=l*c*m-d*p*u,this._w=l*c*u+d*p*m;break;case"ZXY":this._x=d*c*u-l*p*m,this._y=l*p*u+d*c*m,this._z=l*c*m+d*p*u,this._w=l*c*u-d*p*m;break;case"ZYX":this._x=d*c*u-l*p*m,this._y=l*p*u+d*c*m,this._z=l*c*m-d*p*u,this._w=l*c*u+d*p*m;break;case"YZX":this._x=d*c*u+l*p*m,this._y=l*p*u+d*c*m,this._z=l*c*m-d*p*u,this._w=l*c*u-d*p*m;break;case"XZY":this._x=d*c*u-l*p*m,this._y=l*p*u-d*c*m,this._z=l*c*m+d*p*u,this._w=l*c*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let r=e/2,i=Math.sin(r);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,r=e[0],i=e[4],a=e[8],n=e[1],s=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=r+s+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-o)*p,this._y=(a-l)*p,this._z=(n-i)*p}else if(r>s&&r>u){let p=2*Math.sqrt(1+r-s-u);this._w=(c-o)/p,this._x=.25*p,this._y=(i+n)/p,this._z=(a+l)/p}else if(s>u){let p=2*Math.sqrt(1+s-r-u);this._w=(a-l)/p,this._x=(i+n)/p,this._y=.25*p,this._z=(o+c)/p}else{let p=2*Math.sqrt(1+u-r-s);this._w=(n-i)/p,this._x=(a+l)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let r=this.angleTo(t);if(r===0)return this;let i=Math.min(1,e/r);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let r=t._x,i=t._y,a=t._z,n=t._w,s=e._x,o=e._y,l=e._z,c=e._w;return this._x=r*c+n*s+i*l-a*o,this._y=i*c+n*o+a*s-r*l,this._z=a*c+n*l+r*o-i*s,this._w=n*c-r*s-i*o-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let r=this._x,i=this._y,a=this._z,n=this._w,s=n*t._w+r*t._x+i*t._y+a*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=n,this._x=r,this._y=i,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let p=1-e;return this._w=p*n+e*this._w,this._x=p*r+e*this._x,this._y=p*i+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}let l=Math.sqrt(o),c=Math.atan2(l,s),u=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=n*u+this._w*d,this._x=r*u+this._x*d,this._y=i*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class mo{constructor(e=0,r=0,i=0){mo.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(ps.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(ps.setFromAxisAngle(e,r))}applyMatrix3(e){let r=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6]*a,this.y=n[1]*r+n[4]*i+n[7]*a,this.z=n[2]*r+n[5]*i+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let r=this.x,i=this.y,a=this.z,n=e.elements,s=1/(n[3]*r+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*r+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*r+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(e){let r=this.x,i=this.y,a=this.z,n=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),u=2*(o*r-n*a),d=2*(n*i-s*r);return this.x=r+l*c+s*d-o*u,this.y=i+l*u+o*c-n*d,this.z=a+l*d+n*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let r=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*r+n[4]*i+n[8]*a,this.y=n[1]*r+n[5]*i+n[9]*a,this.z=n[2]*r+n[6]*i+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Oe(this.x,e.x,r.x),this.y=Oe(this.y,e.y,r.y),this.z=Oe(this.z,e.z,r.z),this}clampScalar(e,r){return this.x=Oe(this.x,e,r),this.y=Oe(this.y,e,r),this.z=Oe(this.z,e,r),this}clampLength(e,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){let i=e.x,a=e.y,n=e.z,s=r.x,o=r.y,l=r.z;return this.x=a*l-n*o,this.y=n*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){let r=e.lengthSq();if(r===0)return this.set(0,0,0);let i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(e)/r;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let r=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return r*r+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){let a=Math.sin(r)*e;return this.x=a*Math.sin(i),this.y=Math.cos(r)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){let r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){let r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=a,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new O,ps=new ri,Le=class go{constructor(e,r,i,a,n,s,o,l,c){go.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,a,n,s,o,l,c)}set(e,r,i,a,n,s,o,l,c){let u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=r,u[4]=n,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){let i=e.elements,a=r.elements,n=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],m=i[5],E=i[8],_=a[0],f=a[3],h=a[6],C=a[1],S=a[4],b=a[7],N=a[2],P=a[5],w=a[8];return n[0]=s*_+o*C+l*N,n[3]=s*f+o*S+l*P,n[6]=s*h+o*b+l*w,n[1]=c*_+u*C+d*N,n[4]=c*f+u*S+d*P,n[7]=c*h+u*b+d*w,n[2]=p*_+m*C+E*N,n[5]=p*f+m*S+E*P,n[8]=p*h+m*b+E*w,this}multiplyScalar(e){let r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){let e=this.elements,r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return r*s*u-r*o*c-i*n*u+i*o*l+a*n*c-a*s*l}invert(){let e=this.elements,r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,p=o*l-u*n,m=c*n-s*l,E=r*d+i*p+a*m;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/E;return e[0]=d*_,e[1]=(a*c-u*i)*_,e[2]=(o*i-a*s)*_,e[3]=p*_,e[4]=(u*r-a*l)*_,e[5]=(a*n-o*r)*_,e[6]=m*_,e[7]=(i*l-c*r)*_,e[8]=(s*r-i*n)*_,this}transpose(){let e,r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+r,0,0,1),this}scale(e,r){return this.premultiply(_a.makeScale(e,r)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,r){return this.premultiply(_a.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){let r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){let r=this.elements,i=e.elements;for(let a=0;a<9;a++)if(r[a]!==i[a])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){let i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Le;function _o(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function aa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Bl(){let t=aa("canvas");return t.style.display="block",t}var fs={};function gi(t){t in fs||(fs[t]=!0,console.warn(t))}function zl(t,e,r){return new Promise(function(i,a){function n(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(n,r);break;default:i()}}setTimeout(n,r)})}var ms=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gs=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hl(){let t={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===We&&(a.r=Qt(a.r),a.g=Qt(a.g),a.b=Qt(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===We&&(a.r=Kr(a.r),a.g=Kr(a.g),a.b=Kr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===lr?ra:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return gi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return gi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,n)}},e=[.64,.33,.3,.6,.15,.06],r=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qr]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:ms,fromXYZ:gs,luminanceCoefficients:r,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:We,toXYZ:ms,fromXYZ:gs,luminanceCoefficients:r,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),t}var He=Hl();function Qt(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Ir,Vl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ir===void 0&&(Ir=aa("canvas")),Ir.width=t.width,Ir.height=t.height;let i=Ir.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),r=Ir}return r.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=aa("canvas");e.width=t.width,e.height=t.height;let r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);let i=r.getImageData(0,0,t.width,t.height),a=i.data;for(let n=0;n<a.length;n++)a[n]=Qt(a[n]/255)*255;return r.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(Qt(e[r]/255)*255):e[r]=Qt(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gl=0,Gn=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let n=0,s=i.length;n<s;n++)i[n].isDataTexture?a.push(va(i[n].image)):a.push(va(i[n]))}else a=va(i);r.url=a}return e||(t.images[this.uuid]=r),r}};function va(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vl.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kl=0,xa=new O,Gt=class $i extends ti{constructor(e=$i.DEFAULT_IMAGE,r=$i.DEFAULT_MAPPING,i=yr,a=yr,n=Bt,s=br,o=It,l=er,c=$i.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=vi(),this.name="",this.source=new Gn(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let r in e){let i=e[r];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${r}' has value of undefined.`);continue}let a=this[r];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${r}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[r]=i}}toJSON(e){let r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==io)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tn:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case rn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tn:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case rn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=io;Gt.DEFAULT_ANISOTROPY=1;var nt=class vo{constructor(e=0,r=0,i=0,a=1){vo.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,a){return this.x=e,this.y=r,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let r=this.x,i=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*r+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*r+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*r+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*r+s[7]*i+s[11]*a+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,a,n,s=e.elements,o=s[0],l=s[4],c=s[8],u=s[1],d=s[5],p=s[9],m=s[2],E=s[6],_=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(p-E)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(p+E)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let h=(o+1)/2,C=(d+1)/2,S=(_+1)/2,b=(l+u)/4,N=(c+m)/4,P=(p+E)/4;return h>C&&h>S?h<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(h),a=b/i,n=N/i):C>S?C<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(C),i=b/a,n=P/a):S<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(S),i=N/n,a=P/n),this.set(i,a,n,r),this}let f=Math.sqrt((E-p)*(E-p)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(f)<.001&&(f=1),this.x=(E-p)/f,this.y=(c-m)/f,this.z=(u-l)/f,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){let r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Oe(this.x,e.x,r.x),this.y=Oe(this.y,e.y,r.y),this.z=Oe(this.z,e.z,r.z),this.w=Oe(this.w,e.w,r.w),this}clampScalar(e,r){return this.x=Oe(this.x,e,r),this.y=Oe(this.y,e,r),this.z=Oe(this.z,e,r),this.w=Oe(this.w,e,r),this}clampLength(e,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends ti{constructor(t=1,e=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=r.depth,this.scissor=new nt(0,0,t,e),this.scissorTest=!1,this.viewport=new nt(0,0,t,e);let i={width:t,height:e,depth:r.depth},a=new Gt(i);this.textures=[];let n=r.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){let e={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=r,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Gn(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wr=class extends Wl{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}},xo=class extends Gt{constructor(t=null,e=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Xl=class extends Gt{constructor(t=null,e=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(wt.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(wt.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let r=wt.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let r=t.geometry;if(r!==void 0){let a=r.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)t.isMesh===!0?t.getVertexPosition(n,wt):wt.fromBufferAttribute(a,n),wt.applyMatrix4(t.matrixWorld),this.expandByPoint(wt);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ai.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ai.copy(r.boundingBox)),Ai.applyMatrix4(t.matrixWorld),this.union(Ai)}let i=t.children;for(let a=0,n=i.length;a<n;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wt),wt.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(si),Ri.subVectors(this.max,si),Lr.subVectors(t.a,si),Nr.subVectors(t.b,si),Dr.subVectors(t.c,si),rr.subVectors(Nr,Lr),ir.subVectors(Dr,Nr),fr.subVectors(Lr,Dr);let e=[0,-rr.z,rr.y,0,-ir.z,ir.y,0,-fr.z,fr.y,rr.z,0,-rr.x,ir.z,0,-ir.x,fr.z,0,-fr.x,-rr.y,rr.x,0,-ir.y,ir.x,0,-fr.y,fr.x,0];return!Ea(e,Lr,Nr,Dr,Ri)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Lr,Nr,Dr,Ri))?!1:(wi.crossVectors(rr,ir),e=[wi.x,wi.y,wi.z],Ea(e,Lr,Nr,Dr,Ri))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wt).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wt).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xt),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xt=[new O,new O,new O,new O,new O,new O,new O,new O],wt=new O,Ai=new xi,Lr=new O,Nr=new O,Dr=new O,rr=new O,ir=new O,fr=new O,si=new O,Ri=new O,wi=new O,mr=new O;function Ea(t,e,r,i,a){for(let n=0,s=t.length-3;n<=s;n+=3){mr.fromArray(t,n);let o=a.x*Math.abs(mr.x)+a.y*Math.abs(mr.y)+a.z*Math.abs(mr.z),l=e.dot(mr),c=r.dot(mr),u=i.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var jl=new xi,oi=new O,Ma=new O,kn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let r=this.center;e!==void 0?r.copy(e):jl.setFromPoints(t).getCenter(r);let i=0;for(let a=0,n=t.length;a<n;a++)i=Math.max(i,r.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oi.subVectors(t,this.center);let e=oi.lengthSq();if(e>this.radius*this.radius){let r=Math.sqrt(e),i=(r-this.radius)*.5;this.center.addScaledVector(oi,i/r),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oi.copy(t.center).add(Ma)),this.expandByPoint(oi.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jt=new O,Sa=new O,Ci=new O,ar=new O,Ta=new O,Pi=new O,ya=new O,Yl=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jt)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jt.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jt.copy(this.origin).addScaledVector(this.direction,e),jt.distanceToSquared(t))}distanceSqToSegment(t,e,r,i){Sa.copy(t).add(e).multiplyScalar(.5),Ci.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(Sa);let a=t.distanceTo(e)*.5,n=-this.direction.dot(Ci),s=ar.dot(this.direction),o=-ar.dot(Ci),l=ar.lengthSq(),c=Math.abs(1-n*n),u,d,p,m;if(c>0)if(u=n*o-s,d=n*s-o,m=a*c,u>=0)if(d>=-m)if(d<=m){let E=1/c;u*=E,d*=E,p=u*(u+n*d+2*s)+d*(n*u+d+2*o)+l}else d=a,u=Math.max(0,-(n*d+s)),p=-u*u+d*(d+2*o)+l;else d=-a,u=Math.max(0,-(n*d+s)),p=-u*u+d*(d+2*o)+l;else d<=-m?(u=Math.max(0,-(-n*a+s)),d=u>0?-a:Math.min(Math.max(-a,-o),a),p=-u*u+d*(d+2*o)+l):d<=m?(u=0,d=Math.min(Math.max(-a,-o),a),p=d*(d+2*o)+l):(u=Math.max(0,-(n*a+s)),d=u>0?a:Math.min(Math.max(-a,-o),a),p=-u*u+d*(d+2*o)+l);else d=n>0?-a:a,u=Math.max(0,-(n*d+s)),p=-u*u+d*(d+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sa).addScaledVector(Ci,d),p}intersectSphere(t,e){jt.subVectors(t.center,this.origin);let r=jt.dot(this.direction),i=jt.dot(jt)-r*r,a=t.radius*t.radius;if(i>a)return null;let n=Math.sqrt(a-i),s=r-n,o=r+n;return o<0?null:s<0?this.at(o,e):this.at(s,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){let r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,i,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(r=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(r=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),c>=0?(a=(t.min.y-d.y)*c,n=(t.max.y-d.y)*c):(a=(t.max.y-d.y)*c,n=(t.min.y-d.y)*c),r>n||a>i||((a>r||isNaN(r))&&(r=a),(n<i||isNaN(i))&&(i=n),u>=0?(s=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(s=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,e)}intersectsBox(t){return this.intersectBox(t,jt)!==null}intersectTriangle(t,e,r,i,a){Ta.subVectors(e,t),Pi.subVectors(r,t),ya.crossVectors(Ta,Pi);let n=this.direction.dot(ya),s;if(n>0){if(i)return null;s=1}else if(n<0)s=-1,n=-n;else return null;ar.subVectors(this.origin,t);let o=s*this.direction.dot(Pi.crossVectors(ar,Pi));if(o<0)return null;let l=s*this.direction.dot(Ta.cross(ar));if(l<0||o+l>n)return null;let c=-s*ar.dot(ya);return c<0?null:this.at(c/n,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class Nn{constructor(e,r,i,a,n,s,o,l,c,u,d,p,m,E,_,f){Nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,a,n,s,o,l,c,u,d,p,m,E,_,f)}set(e,r,i,a,n,s,o,l,c,u,d,p,m,E,_,f){let h=this.elements;return h[0]=e,h[4]=r,h[8]=i,h[12]=a,h[1]=n,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=E,h[11]=_,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nn().fromArray(this.elements)}copy(e){let r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){let r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){let r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){let r=this.elements,i=e.elements,a=1/Or.setFromMatrixColumn(e,0).length(),n=1/Or.setFromMatrixColumn(e,1).length(),s=1/Or.setFromMatrixColumn(e,2).length();return r[0]=i[0]*a,r[1]=i[1]*a,r[2]=i[2]*a,r[3]=0,r[4]=i[4]*n,r[5]=i[5]*n,r[6]=i[6]*n,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){let r=this.elements,i=e.x,a=e.y,n=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){let p=s*u,m=s*d,E=o*u,_=o*d;r[0]=l*u,r[4]=-l*d,r[8]=c,r[1]=m+E*c,r[5]=p-_*c,r[9]=-o*l,r[2]=_-p*c,r[6]=E+m*c,r[10]=s*l}else if(e.order==="YXZ"){let p=l*u,m=l*d,E=c*u,_=c*d;r[0]=p+_*o,r[4]=E*o-m,r[8]=s*c,r[1]=s*d,r[5]=s*u,r[9]=-o,r[2]=m*o-E,r[6]=_+p*o,r[10]=s*l}else if(e.order==="ZXY"){let p=l*u,m=l*d,E=c*u,_=c*d;r[0]=p-_*o,r[4]=-s*d,r[8]=E+m*o,r[1]=m+E*o,r[5]=s*u,r[9]=_-p*o,r[2]=-s*c,r[6]=o,r[10]=s*l}else if(e.order==="ZYX"){let p=s*u,m=s*d,E=o*u,_=o*d;r[0]=l*u,r[4]=E*c-m,r[8]=p*c+_,r[1]=l*d,r[5]=_*c+p,r[9]=m*c-E,r[2]=-c,r[6]=o*l,r[10]=s*l}else if(e.order==="YZX"){let p=s*l,m=s*c,E=o*l,_=o*c;r[0]=l*u,r[4]=_-p*d,r[8]=E*d+m,r[1]=d,r[5]=s*u,r[9]=-o*u,r[2]=-c*u,r[6]=m*d+E,r[10]=p-_*d}else if(e.order==="XZY"){let p=s*l,m=s*c,E=o*l,_=o*c;r[0]=l*u,r[4]=-d,r[8]=c*u,r[1]=p*d+_,r[5]=s*u,r[9]=m*d-E,r[2]=E*d-m,r[6]=o*u,r[10]=_*d+p}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ql,e,Kl)}lookAt(e,r,i){let a=this.elements;return Mt.subVectors(e,r),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),nr.crossVectors(i,Mt),nr.lengthSq()===0&&(Math.abs(i.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),nr.crossVectors(i,Mt)),nr.normalize(),Ui.crossVectors(Mt,nr),a[0]=nr.x,a[4]=Ui.x,a[8]=Mt.x,a[1]=nr.y,a[5]=Ui.y,a[9]=Mt.y,a[2]=nr.z,a[6]=Ui.z,a[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){let i=e.elements,a=r.elements,n=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],m=i[13],E=i[2],_=i[6],f=i[10],h=i[14],C=i[3],S=i[7],b=i[11],N=i[15],P=a[0],w=a[4],F=a[8],M=a[12],x=a[1],R=a[5],H=a[9],G=a[13],z=a[2],Z=a[6],k=a[10],q=a[14],V=a[3],ee=a[7],ue=a[11],Ue=a[15];return n[0]=s*P+o*x+l*z+c*V,n[4]=s*w+o*R+l*Z+c*ee,n[8]=s*F+o*H+l*k+c*ue,n[12]=s*M+o*G+l*q+c*Ue,n[1]=u*P+d*x+p*z+m*V,n[5]=u*w+d*R+p*Z+m*ee,n[9]=u*F+d*H+p*k+m*ue,n[13]=u*M+d*G+p*q+m*Ue,n[2]=E*P+_*x+f*z+h*V,n[6]=E*w+_*R+f*Z+h*ee,n[10]=E*F+_*H+f*k+h*ue,n[14]=E*M+_*G+f*q+h*Ue,n[3]=C*P+S*x+b*z+N*V,n[7]=C*w+S*R+b*Z+N*ee,n[11]=C*F+S*H+b*k+N*ue,n[15]=C*M+S*G+b*q+N*Ue,this}multiplyScalar(e){let r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){let e=this.elements,r=e[0],i=e[4],a=e[8],n=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],E=e[3],_=e[7],f=e[11],h=e[15];return E*(+n*l*d-a*c*d-n*o*p+i*c*p+a*o*m-i*l*m)+_*(+r*l*m-r*c*p+n*s*p-a*s*m+a*c*u-n*l*u)+f*(+r*c*d-r*o*m-n*s*d+i*s*m+n*o*u-i*c*u)+h*(-a*o*u-r*l*d+r*o*p+a*s*d-i*s*p+i*l*u)}transpose(){let e=this.elements,r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=r,a[14]=i),this}invert(){let e=this.elements,r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],E=e[12],_=e[13],f=e[14],h=e[15],C=d*f*c-_*p*c+_*l*m-o*f*m-d*l*h+o*p*h,S=E*p*c-u*f*c-E*l*m+s*f*m+u*l*h-s*p*h,b=u*_*c-E*d*c+E*o*m-s*_*m-u*o*h+s*d*h,N=E*d*l-u*_*l-E*o*p+s*_*p+u*o*f-s*d*f,P=r*C+i*S+a*b+n*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/P;return e[0]=C*w,e[1]=(_*p*n-d*f*n-_*a*m+i*f*m+d*a*h-i*p*h)*w,e[2]=(o*f*n-_*l*n+_*a*c-i*f*c-o*a*h+i*l*h)*w,e[3]=(d*l*n-o*p*n-d*a*c+i*p*c+o*a*m-i*l*m)*w,e[4]=S*w,e[5]=(u*f*n-E*p*n+E*a*m-r*f*m-u*a*h+r*p*h)*w,e[6]=(E*l*n-s*f*n-E*a*c+r*f*c+s*a*h-r*l*h)*w,e[7]=(s*p*n-u*l*n+u*a*c-r*p*c-s*a*m+r*l*m)*w,e[8]=b*w,e[9]=(E*d*n-u*_*n-E*i*m+r*_*m+u*i*h-r*d*h)*w,e[10]=(s*_*n-E*o*n+E*i*c-r*_*c-s*i*h+r*o*h)*w,e[11]=(u*o*n-s*d*n-u*i*c+r*d*c+s*i*m-r*o*m)*w,e[12]=N*w,e[13]=(u*_*a-E*d*a+E*i*p-r*_*p-u*i*f+r*d*f)*w,e[14]=(E*o*a-s*_*a-E*i*l+r*_*l+s*i*f-r*o*f)*w,e[15]=(s*d*a-u*o*a+u*i*l-r*d*l-s*i*p+r*o*p)*w,this}scale(e){let r=this.elements,i=e.x,a=e.y,n=e.z;return r[0]*=i,r[4]*=a,r[8]*=n,r[1]*=i,r[5]*=a,r[9]*=n,r[2]*=i,r[6]*=a,r[10]*=n,r[3]*=i,r[7]*=a,r[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,a))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){let r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){let r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){let r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){let i=Math.cos(r),a=Math.sin(r),n=1-i,s=e.x,o=e.y,l=e.z,c=n*s,u=n*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*s,0,c*l-a*o,u*l+a*s,n*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,a,n,s){return this.set(1,i,n,0,e,1,s,0,r,a,1,0,0,0,0,1),this}compose(e,r,i){let a=this.elements,n=r._x,s=r._y,o=r._z,l=r._w,c=n+n,u=s+s,d=o+o,p=n*c,m=n*u,E=n*d,_=s*u,f=s*d,h=o*d,C=l*c,S=l*u,b=l*d,N=i.x,P=i.y,w=i.z;return a[0]=(1-(_+h))*N,a[1]=(m+b)*N,a[2]=(E-S)*N,a[3]=0,a[4]=(m-b)*P,a[5]=(1-(p+h))*P,a[6]=(f+C)*P,a[7]=0,a[8]=(E+S)*w,a[9]=(f-C)*w,a[10]=(1-(p+_))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,r,i){let a=this.elements,n=Or.set(a[0],a[1],a[2]).length(),s=Or.set(a[4],a[5],a[6]).length(),o=Or.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),e.x=a[12],e.y=a[13],e.z=a[14],Ct.copy(this);let l=1/n,c=1/s,u=1/o;return Ct.elements[0]*=l,Ct.elements[1]*=l,Ct.elements[2]*=l,Ct.elements[4]*=c,Ct.elements[5]*=c,Ct.elements[6]*=c,Ct.elements[8]*=u,Ct.elements[9]*=u,Ct.elements[10]*=u,r.setFromRotationMatrix(Ct),i.x=n,i.y=s,i.z=o,this}makePerspective(e,r,i,a,n,s,o=zt,l=!1){let c=this.elements,u=2*n/(r-e),d=2*n/(i-a),p=(r+e)/(r-e),m=(i+a)/(i-a),E,_;if(l)E=n/(s-n),_=s*n/(s-n);else if(o===zt)E=-(s+n)/(s-n),_=-2*s*n/(s-n);else if(o===ia)E=-s/(s-n),_=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=E,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,r,i,a,n,s,o=zt,l=!1){let c=this.elements,u=2/(r-e),d=2/(i-a),p=-(r+e)/(r-e),m=-(i+a)/(i-a),E,_;if(l)E=1/(s-n),_=s/(s-n);else if(o===zt)E=-2/(s-n),_=-(s+n)/(s-n);else if(o===ia)E=-1/(s-n),_=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=E,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let r=this.elements,i=e.elements;for(let a=0;a<16;a++)if(r[a]!==i[a])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){let i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}},Or=new O,Ct=new mt,ql=new O(0,0,0),Kl=new O(1,1,1),nr=new O,Ui=new O,Mt=new O,_s=new mt,vs=new ri,Cr=class Eo{constructor(e=0,r=0,i=0,a=Eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,a=this._order){return this._x=e,this._y=r,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){let a=e.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],p=a[6],m=a[10];switch(r){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Oe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return _s.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_s,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return vs.setFromEuler(this),this.setFromQuaternion(vs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cr.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zl=0,xs=new O,Fr=new ri,Yt=new mt,Ii=new O,li=new O,Jl=new O,$l=new ri,Es=new O(1,0,0),Ms=new O(0,1,0),Ss=new O(0,0,1),Ts={type:"added"},Ql={type:"removed"},Br={type:"childadded",child:null},ba={type:"childremoved",child:null},tr=class Qi extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qi.DEFAULT_UP.clone();let e=new O,r=new Cr,i=new ri,a=new O(1,1,1);function n(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new mt},normalMatrix:{value:new Le}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Qi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return Fr.setFromAxisAngle(e,r),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,r){return Fr.setFromAxisAngle(e,r),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Es,e)}rotateY(e){return this.rotateOnAxis(Ms,e)}rotateZ(e){return this.rotateOnAxis(Ss,e)}translateOnAxis(e,r){return xs.copy(e).applyQuaternion(this.quaternion),this.position.add(xs.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Es,e)}translateY(e){return this.translateOnAxis(Ms,e)}translateZ(e){return this.translateOnAxis(Ss,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?Ii.copy(e):Ii.set(e,r,i);let a=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(li,Ii,this.up):Yt.lookAt(Ii,li,this.up),this.quaternion.setFromRotationMatrix(Yt),a&&(Yt.extractRotation(a.matrixWorld),Fr.setFromRotationMatrix(Yt),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ts),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(Ql),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ts),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,a=this.children.length;i<a;i++){let n=this.children[i].getObjectByProperty(e,r);if(n!==void 0)return n}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,e,Jl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,$l,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverseVisible(e)}traverseAncestors(e){let r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(e){let r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(e.animations,l))}}if(r){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),m=s(e.animations),E=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),E.length>0&&(i.nodes=E)}return i.object=a,i;function s(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};tr.DEFAULT_UP=new O(0,1,0);tr.DEFAULT_MATRIX_AUTO_UPDATE=!0;tr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=new O,qt=new O,Aa=new O,Kt=new O,zr=new O,Hr=new O,ys=new O,Ra=new O,wa=new O,Ca=new O,Pa=new nt,Ua=new nt,Ia=new nt,ci=class Xr{constructor(e=new O,r=new O,i=new O){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,a){a.subVectors(i,r),Pt.subVectors(e,r),a.cross(Pt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,r,i,a,n){Pt.subVectors(a,r),qt.subVectors(i,r),Aa.subVectors(e,r);let s=Pt.dot(Pt),o=Pt.dot(qt),l=Pt.dot(Aa),c=qt.dot(qt),u=qt.dot(Aa),d=s*c-o*o;if(d===0)return n.set(0,0,0),null;let p=1/d,m=(c*l-o*u)*p,E=(s*u-o*l)*p;return n.set(1-m-E,E,m)}static containsPoint(e,r,i,a){return this.getBarycoord(e,r,i,a,Kt)===null?!1:Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getInterpolation(e,r,i,a,n,s,o,l){return this.getBarycoord(e,r,i,a,Kt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Kt.x),l.addScaledVector(s,Kt.y),l.addScaledVector(o,Kt.z),l)}static getInterpolatedAttribute(e,r,i,a,n,s){return Pa.setScalar(0),Ua.setScalar(0),Ia.setScalar(0),Pa.fromBufferAttribute(e,r),Ua.fromBufferAttribute(e,i),Ia.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Pa,n.x),s.addScaledVector(Ua,n.y),s.addScaledVector(Ia,n.z),s}static isFrontFacing(e,r,i,a){return Pt.subVectors(i,r),qt.subVectors(e,r),Pt.cross(qt).dot(a)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,a){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,r,i,a){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Pt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Xr.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,a,n){return Xr.getInterpolation(e,this.a,this.b,this.c,r,i,a,n)}containsPoint(e){return Xr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){let i=this.a,a=this.b,n=this.c,s,o;zr.subVectors(a,i),Hr.subVectors(n,i),Ra.subVectors(e,i);let l=zr.dot(Ra),c=Hr.dot(Ra);if(l<=0&&c<=0)return r.copy(i);wa.subVectors(e,a);let u=zr.dot(wa),d=Hr.dot(wa);if(u>=0&&d<=u)return r.copy(a);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return s=l/(l-u),r.copy(i).addScaledVector(zr,s);Ca.subVectors(e,n);let m=zr.dot(Ca),E=Hr.dot(Ca);if(E>=0&&m<=E)return r.copy(n);let _=m*c-l*E;if(_<=0&&c>=0&&E<=0)return o=c/(c-E),r.copy(i).addScaledVector(Hr,o);let f=u*E-m*d;if(f<=0&&d-u>=0&&m-E>=0)return ys.subVectors(n,a),o=(d-u)/(d-u+(m-E)),r.copy(a).addScaledVector(ys,o);let h=1/(f+_+p);return s=_*h,o=p*h,r.copy(i).addScaledVector(zr,s).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},So={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Li={h:0,s:0,l:0};function La(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}var Xe=class{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.colorSpaceToWorking(this,e),this}setRGB(t,e,r,i=He.workingColorSpace){return this.r=t,this.g=e,this.b=r,He.colorSpaceToWorking(this,i),this}setHSL(t,e,r,i=He.workingColorSpace){if(t=Fl(t,1),e=Oe(e,0,1),r=Oe(r,0,1),e===0)this.r=this.g=this.b=r;else{let a=r<=.5?r*(1+e):r+e-r*e,n=2*r-a;this.r=La(n,a,t+1/3),this.g=La(n,a,t),this.b=La(n,a,t-1/3)}return He.colorSpaceToWorking(this,i),this}setStyle(t,e=vt){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=i[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(n===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vt){let r=So[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qt(t.r),this.g=Qt(t.g),this.b=Qt(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vt){return He.workingToColorSpace(ft.copy(this),t),Math.round(Oe(ft.r*255,0,255))*65536+Math.round(Oe(ft.g*255,0,255))*256+Math.round(Oe(ft.b*255,0,255))}getHexString(t=vt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=He.workingColorSpace){He.workingToColorSpace(ft.copy(this),e);let r=ft.r,i=ft.g,a=ft.b,n=Math.max(r,i,a),s=Math.min(r,i,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=c<=.5?u/(n+s):u/(2-n-s),n){case r:o=(i-a)/u+(i<a?6:0);break;case i:o=(a-r)/u+2;break;case a:o=(r-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=He.workingColorSpace){return He.workingToColorSpace(ft.copy(this),e),t.r=ft.r,t.g=ft.g,t.b=ft.b,t}getStyle(t=vt){He.workingToColorSpace(ft.copy(this),t);let e=ft.r,r=ft.g,i=ft.b;return t!==vt?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(t,e,r){return this.getHSL(sr),this.setHSL(sr.h+t,sr.s+e,sr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(sr),t.getHSL(Li);let r=ma(sr.h,Li.h,e),i=ma(sr.s,Li.s,e),a=ma(sr.l,Li.l,e);return this.setHSL(r,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,r=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*r+a[6]*i,this.g=a[1]*e+a[4]*r+a[7]*i,this.b=a[2]*e+a[5]*r+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ft=new Xe;Xe.NAMES=So;var ec=0,sa=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=qr,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=us,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[e]=r}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(r.blending=this.blending),this.side!==hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wa&&(r.blendSrc=this.blendSrc),this.blendDst!==Xa&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==us&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(e){let a=i(t.textures),n=i(t.images);a.length>0&&(r.textures=a),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,r=null;if(e!==null){let i=e.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=e[a].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},To=class extends sa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},at=new O,Ni=new Ge,tc=0,Ht=class{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=hs,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[r+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)Ni.fromBufferAttribute(this,e),Ni.applyMatrix3(t),this.setXY(e,Ni.x,Ni.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)at.fromBufferAttribute(this,e),at.applyMatrix3(t),this.setXYZ(e,at.x,at.y,at.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)at.fromBufferAttribute(this,e),at.applyMatrix4(t),this.setXYZ(e,at.x,at.y,at.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)at.fromBufferAttribute(this,e),at.applyNormalMatrix(t),this.setXYZ(e,at.x,at.y,at.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)at.fromBufferAttribute(this,e),at.transformDirection(t),this.setXYZ(e,at.x,at.y,at.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=ni(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=_t(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=_t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=_t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=_t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=_t(e,this.array),r=_t(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,i){return t*=this.itemSize,this.normalized&&(e=_t(e,this.array),r=_t(r,this.array),i=_t(i,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=i,this}setXYZW(t,e,r,i,a){return t*=this.itemSize,this.normalized&&(e=_t(e,this.array),r=_t(r,this.array),i=_t(i,this.array),a=_t(a,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hs&&(t.usage=this.usage),t}},yo=class extends Ht{constructor(t,e,r){super(new Uint16Array(t),e,r)}},bo=class extends Ht{constructor(t,e,r){super(new Uint32Array(t),e,r)}},Ar=class extends Ht{constructor(t,e,r){super(new Float32Array(t),e,r)}},rc=0,bt=new mt,Na=new tr,Vr=new O,St=new xi,ui=new xi,ct=new O,Ei=class Ao extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_o(e)?bo:yo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let n=new Le().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bt.makeRotationFromQuaternion(e),this.applyMatrix4(bt),this}rotateX(e){return bt.makeRotationX(e),this.applyMatrix4(bt),this}rotateY(e){return bt.makeRotationY(e),this.applyMatrix4(bt),this}rotateZ(e){return bt.makeRotationZ(e),this.applyMatrix4(bt),this}translate(e,r,i){return bt.makeTranslation(e,r,i),this.applyMatrix4(bt),this}scale(e,r,i){return bt.makeScale(e,r,i),this.applyMatrix4(bt),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let a=0,n=e.length;a<n;a++){let s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ar(i,3))}else{let i=Math.min(e.length,r.count);for(let a=0;a<i;a++){let n=e[a];r.setXYZ(a,n.x,n.y,n.z||0)}e.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,a=r.length;i<a;i++){let n=r[i];St.setFromBufferAttribute(n),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(St.setFromBufferAttribute(e),r)for(let n=0,s=r.length;n<s;n++){let o=r[n];ui.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(St.min,ui.min),St.expandByPoint(ct),ct.addVectors(St.max,ui.max),St.expandByPoint(ct)):(St.expandByPoint(ui.min),St.expandByPoint(ui.max))}St.getCenter(i);let a=0;for(let n=0,s=e.count;n<s;n++)ct.fromBufferAttribute(e,n),a=Math.max(a,i.distanceToSquared(ct));if(r)for(let n=0,s=r.length;n<s;n++){let o=r[n],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ct.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(e,c),ct.add(Vr)),a=Math.max(a,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,a=r.normal,n=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new O,l[F]=new O;let c=new O,u=new O,d=new O,p=new Ge,m=new Ge,E=new Ge,_=new O,f=new O;function h(F,M,x){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),p.fromBufferAttribute(n,F),m.fromBufferAttribute(n,M),E.fromBufferAttribute(n,x),u.sub(c),d.sub(c),m.sub(p),E.sub(p);let R=1/(m.x*E.y-E.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(E.y).addScaledVector(d,-m.y).multiplyScalar(R),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-E.x).multiplyScalar(R),o[F].add(_),o[M].add(_),o[x].add(_),l[F].add(f),l[M].add(f),l[x].add(f))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,M=C.length;F<M;++F){let x=C[F],R=x.start,H=x.count;for(let G=R,z=R+H;G<z;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new O,b=new O,N=new O,P=new O;function w(F){N.fromBufferAttribute(a,F),P.copy(N);let M=o[F];S.copy(M),S.sub(N.multiplyScalar(N.dot(M))).normalize(),b.crossVectors(P,M);let x=b.dot(l[F])<0?-1:1;s.setXYZW(F,S.x,S.y,S.z,x)}for(let F=0,M=C.length;F<M;++F){let x=C[F],R=x.start,H=x.count;for(let G=R,z=R+H;G<z;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){let e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ht(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let a=new O,n=new O,s=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let p=0,m=e.count;p<m;p+=3){let E=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);a.fromBufferAttribute(r,E),n.fromBufferAttribute(r,_),s.fromBufferAttribute(r,f),u.subVectors(s,n),d.subVectors(a,n),u.cross(d),o.fromBufferAttribute(i,E),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(E,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=r.count;p<m;p+=3)a.fromBufferAttribute(r,p+0),n.fromBufferAttribute(r,p+1),s.fromBufferAttribute(r,p+2),u.subVectors(s,n),d.subVectors(a,n),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)ct.fromBufferAttribute(e,r),ct.normalize(),e.setXYZ(r,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u),m=0,E=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)p[E++]=c[m++]}return new Ht(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new Ao,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=e(l,i);r.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let u=0,d=c.length;u<d;u++){let p=c[u],m=e(p,i);l.push(m)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];r.addGroup(c.start,c.count,c.materialIndex)}return r}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(a[l]=u,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let a=e.attributes;for(let c in a){let u=a[c];this.setAttribute(c,u.clone(r))}let n=e.morphAttributes;for(let c in n){let u=[],d=n[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(r));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bs=new mt,gr=new Yl,Di=new kn,As=new O,Oi=new O,Fi=new O,Bi=new O,Da=new O,zi=new O,Rs=new O,Hi=new O,Lt=class extends tr{constructor(t=new Ei,e=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let r=t[e[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){let n=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}getVertexPosition(t,e){let r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,n=r.morphTargetsRelative;e.fromBufferAttribute(i,t);let s=this.morphTargetInfluences;if(a&&s){zi.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],u=a[o];c!==0&&(Da.fromBufferAttribute(u,t),n?zi.addScaledVector(Da,c):zi.addScaledVector(Da.sub(e),c))}e.add(zi)}return e}raycast(t,e){let r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Di.copy(r.boundingSphere),Di.applyMatrix4(a),gr.copy(t.ray).recast(t.near),!(Di.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Di,As)===null||gr.origin.distanceToSquared(As)>(t.far-t.near)**2))&&(bs.copy(a).invert(),gr.copy(t.ray).applyMatrix4(bs),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,gr)))}_computeIntersections(t,e,r){let i,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(n))for(let m=0,E=d.length;m<E;m++){let _=d[m],f=n[_.materialIndex],h=Math.max(_.start,p.start),C=Math.min(s.count,Math.min(_.start+_.count,p.start+p.count));for(let S=h,b=C;S<b;S+=3){let N=s.getX(S),P=s.getX(S+1),w=s.getX(S+2);i=Vi(this,f,t,r,l,c,u,N,P,w),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),E=Math.min(s.count,p.start+p.count);for(let _=m,f=E;_<f;_+=3){let h=s.getX(_),C=s.getX(_+1),S=s.getX(_+2);i=Vi(this,n,t,r,l,c,u,h,C,S),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(n))for(let m=0,E=d.length;m<E;m++){let _=d[m],f=n[_.materialIndex],h=Math.max(_.start,p.start),C=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let S=h,b=C;S<b;S+=3){let N=S,P=S+1,w=S+2;i=Vi(this,f,t,r,l,c,u,N,P,w),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let _=m,f=E;_<f;_+=3){let h=_,C=_+1,S=_+2;i=Vi(this,n,t,r,l,c,u,h,C,S),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}};function ic(t,e,r,i,a,n,s,o){let l;if(e.side===xt?l=i.intersectTriangle(s,n,a,!0,o):l=i.intersectTriangle(a,n,s,e.side===hr,o),l===null)return null;Hi.copy(o),Hi.applyMatrix4(t.matrixWorld);let c=r.ray.origin.distanceTo(Hi);return c<r.near||c>r.far?null:{distance:c,point:Hi.clone(),object:t}}function Vi(t,e,r,i,a,n,s,o,l,c){t.getVertexPosition(o,Oi),t.getVertexPosition(l,Fi),t.getVertexPosition(c,Bi);let u=ic(t,e,r,i,Oi,Fi,Bi,Rs);if(u){let d=new O;ci.getBarycoord(Rs,Oi,Fi,Bi,d),a&&(u.uv=ci.getInterpolatedAttribute(a,o,l,c,d,new Ge)),n&&(u.uv1=ci.getInterpolatedAttribute(n,o,l,c,d,new Ge)),s&&(u.normal=ci.getInterpolatedAttribute(s,o,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new O,materialIndex:0};ci.getNormal(Oi,Fi,Bi,p.normal),u.face=p,u.barycoord=d}return u}var Wn=class Ro extends Ei{constructor(e=1,r=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],p=0,m=0;E("z","y","x",-1,-1,i,r,e,s,n,0),E("z","y","x",1,-1,i,r,-e,s,n,1),E("x","z","y",1,1,e,i,r,a,s,2),E("x","z","y",1,-1,e,i,-r,a,s,3),E("x","y","z",1,-1,e,r,i,a,n,4),E("x","y","z",-1,-1,e,r,-i,a,n,5),this.setIndex(l),this.setAttribute("position",new Ar(c,3)),this.setAttribute("normal",new Ar(u,3)),this.setAttribute("uv",new Ar(d,2));function E(_,f,h,C,S,b,N,P,w,F,M){let x=b/w,R=N/F,H=b/2,G=N/2,z=P/2,Z=w+1,k=F+1,q=0,V=0,ee=new O;for(let ue=0;ue<k;ue++){let Ue=ue*R-G;for(let Ne=0;Ne<Z;Ne++){let Je=Ne*x-H;ee[_]=Je*C,ee[f]=Ue*S,ee[h]=z,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[f]=0,ee[h]=P>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Ne/w),d.push(1-ue/F),q+=1}}for(let ue=0;ue<F;ue++)for(let Ue=0;Ue<w;Ue++){let Ne=p+Ue+Z*ue,Je=p+Ue+Z*(ue+1),Ve=p+(Ue+1)+Z*(ue+1),X=p+(Ue+1)+Z*ue;l.push(Ne,Je,X),l.push(Je,Ve,X),V+=6}o.addGroup(m,V,M),m+=V,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ei(t){let e={};for(let r in t){e[r]={};for(let i in t[r]){let a=t[r][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=a.clone():Array.isArray(a)?e[r][i]=a.slice():e[r][i]=a}}return e}function gt(t){let e={};for(let r=0;r<t.length;r++){let i=ei(t[r]);for(let a in i)e[a]=i[a]}return e}function ac(t){let e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function wo(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var nc={clone:ei,merge:gt},sc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends sa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sc,this.fragmentShader=oc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ei(t.uniforms),this.uniformsGroups=ac(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}},Co=class extends tr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=zt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},or=new O,ws=new Ge,Cs=new Ge,Ut=class extends Co{constructor(t=50,e=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ln*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ln*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(or.x,or.y).multiplyScalar(-t/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-t/or.z)}getViewSize(t,e){return this.getViewBounds(t,ws,Cs),e.subVectors(Cs,ws)}setViewOffset(t,e,r,i,a,n){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fa*.5*this.fov)/this.zoom,r=2*e,i=this.aspect*r,a=-.5*i,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*i/o,e-=n.offsetY*r/l,i*=n.width/o,r*=n.height/l}let s=this.filmOffset;s!==0&&(a+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gr=-90,kr=1,lc=class extends tr{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ut(Gr,kr,t,e);i.layers=this.layers,this.add(i);let a=new Ut(Gr,kr,t,e);a.layers=this.layers,this.add(a);let n=new Ut(Gr,kr,t,e);n.layers=this.layers,this.add(n);let s=new Ut(Gr,kr,t,e);s.layers=this.layers,this.add(s);let o=new Ut(Gr,kr,t,e);o.layers=this.layers,this.add(o);let l=new Ut(Gr,kr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[r,i,a,n,s,o]=e;for(let l of e)this.remove(l);if(t===zt)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===ia)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,i),t.render(e,a),t.setRenderTarget(r,1,i),t.render(e,n),t.setRenderTarget(r,2,i),t.render(e,s),t.setRenderTarget(r,3,i),t.render(e,o),t.setRenderTarget(r,4,i),t.render(e,l),r.texture.generateMipmaps=E,t.setRenderTarget(r,5,i),t.render(e,c),t.setRenderTarget(u,d,p),t.xr.enabled=m,r.texture.needsPMREMUpdate=!0}},Po=class extends Gt{constructor(t=[],e=Jr,r,i,a,n,s,o,l,c){super(t,e,r,i,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cc=class extends wr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let r={width:t,height:t,depth:1},i=[r,r,r,r,r,r];this.texture=new Po(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wn(5,5,5),a=new Vt({name:"CubemapFromEquirect",uniforms:ei(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xt,blending:cr});a.uniforms.tEquirect.value=e;let n=new Lt(i,a),s=e.minFilter;return e.minFilter===br&&(e.minFilter=Bt),new lc(1,10,this).update(t,n),e.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(t,e=!0,r=!0,i=!0){let a=t.getRenderTarget();for(let n=0;n<6;n++)t.setRenderTarget(this,n),t.clear(e,r,i);t.setRenderTarget(a)}},Gi=class extends tr{constructor(){super(),this.isGroup=!0,this.type="Group"}},uc={type:"move"},Oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let i=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){n=!0;for(let E of t.hand.values()){let _=e.getJointPose(E,r),f=this._getHandJoint(l,E);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(uc)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let r=new Gi;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}},Uo=class extends tr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fa=new O,hc=new O,dc=new Le,Er=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,i){return this.normal.set(t,e,r),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){let i=Fa.subVectors(r,e).cross(hc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let r=t.delta(Fa),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let r=e||dc.getNormalMatrix(t),i=this.coplanarPoint(Fa).applyMatrix4(t),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_r=new kn,pc=new Ge(.5,.5),ki=new O,Io=class{constructor(t=new Er,e=new Er,r=new Er,i=new Er,a=new Er,n=new Er){this.planes=[t,e,r,i,a,n]}set(t,e,r,i,a,n){let s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(n),this}copy(t){let e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=zt,r=!1){let i=this.planes,a=t.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],d=a[6],p=a[7],m=a[8],E=a[9],_=a[10],f=a[11],h=a[12],C=a[13],S=a[14],b=a[15];if(i[0].setComponents(l-n,p-c,f-m,b-h).normalize(),i[1].setComponents(l+n,p+c,f+m,b+h).normalize(),i[2].setComponents(l+s,p+u,f+E,b+C).normalize(),i[3].setComponents(l-s,p-u,f-E,b-C).normalize(),r)i[4].setComponents(o,d,_,S).normalize(),i[5].setComponents(l-o,p-d,f-_,b-S).normalize();else if(i[4].setComponents(l-o,p-d,f-_,b-S).normalize(),e===zt)i[5].setComponents(l+o,p+d,f+_,b+S).normalize();else if(e===ia)i[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);let e=pc.distanceTo(t.center);return _r.radius=.7071067811865476+e,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){let e=this.planes,r=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let r=0;r<6;r++){let i=e[r];if(ki.x=i.normal.x>0?t.max.x:t.min.x,ki.y=i.normal.y>0?t.max.y:t.min.y,ki.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ki)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lo=class extends Gt{constructor(t,e,r=Rr,i,a,n,s=Nt,o=Nt,l,c=fi,u=1){if(c!==fi&&c!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,a,n,s,o,c,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},No=class extends Gt{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},oa=class Do extends Ei{constructor(e=1,r=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:a};let n=e/2,s=r/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,d=e/o,p=r/l,m=[],E=[],_=[],f=[];for(let h=0;h<u;h++){let C=h*p-s;for(let S=0;S<c;S++){let b=S*d-n;E.push(b,-C,0),_.push(0,0,1),f.push(S/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let C=0;C<o;C++){let S=C+c*h,b=C+c*(h+1),N=C+1+c*(h+1),P=C+1+c*h;m.push(S,b,P),m.push(b,N,P)}this.setIndex(m),this.setAttribute("position",new Ar(E,3)),this.setAttribute("normal",new Ar(_,3)),this.setAttribute("uv",new Ar(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}},fc=class extends sa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Al,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mc=class extends sa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wi(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function gc(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var la=class{constructor(t,e,r,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(r),this.sampleValues=e,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,r=this._cachedIndex,i=e[r],a=e[r-1];r:{e:{let n;t:{i:if(!(t<i)){for(let s=r+2;;){if(i===void 0){if(t<a)break i;return r=e.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(a=i,i=e[++r],t<i)break e}n=e.length;break t}if(!(t>=a)){let s=e[1];t<s&&(r=2,a=s);for(let o=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=a,a=e[--r-1],t>=a)break e}n=r,r=0;break t}break r}for(;r<n;){let s=r+n>>>1;t<e[s]?n=s:r=s+1}if(i=e[r],a=e[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=e.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=t*i;for(let n=0;n!==i;++n)e[n]=r[a+n];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_c=class extends la{constructor(t,e,r,i){super(t,e,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(t,e,r){let i=this.parameterPositions,a=t-2,n=t+1,s=i[a],o=i[n];if(s===void 0)switch(this.getSettings_().endingStart){case ls:a=t,s=2*e-r;break;case cs:a=i.length-2,s=e+i[a]-i[a+1];break;default:a=t,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case ls:n=t,o=2*r-e;break;case cs:n=1,o=r+i[1]-i[0];break;default:n=t-1,o=e}let l=(r-e)*.5,c=this.valueSize;this._weightPrev=l/(e-s),this._weightNext=l/(o-r),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(t,e,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(r-e)/(i-e),E=m*m,_=E*m,f=-d*_+2*d*E-d*m,h=(1+d)*_+(-1.5-2*d)*E+(-.5+d)*m+1,C=(-1-p)*_+(1.5+p)*E+.5*m,S=p*_-p*E;for(let b=0;b!==s;++b)a[b]=f*n[c+b]+h*n[l+b]+C*n[o+b]+S*n[u+b];return a}},vc=class extends la{constructor(t,e,r,i){super(t,e,r,i)}interpolate_(t,e,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,c=(r-e)/(i-e),u=1-c;for(let d=0;d!==s;++d)a[d]=n[l+d]*u+n[o+d]*c;return a}},xc=class extends la{constructor(t,e,r,i){super(t,e,r,i)}interpolate_(t){return this.copySampleValue_(t-1)}},kt=class{constructor(t,e,r,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wi(e,this.TimeBufferType),this.values=Wi(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,r;if(e.toJSON!==this.toJSON)r=e.toJSON(t);else{r={name:t.name,times:Wi(t.times,Array),values:Wi(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(r.interpolation=i)}return r.type=t.ValueTypeName,r}InterpolantFactoryMethodDiscrete(t){return new xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _c(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ta:e=this.InterpolantFactoryMethodDiscrete;break;case In:e=this.InterpolantFactoryMethodLinear;break;case pa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return In;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let r=0,i=e.length;r!==i;++r)e[r]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let r=0,i=e.length;r!==i;++r)e[r]*=t}return this}trim(t,e){let r=this.times,i=r.length,a=0,n=i-1;for(;a!==i&&r[a]<t;)++a;for(;n!==-1&&r[n]>e;)--n;if(++n,a!==0||n!==i){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=r.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let r=this.times,i=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let n=null;for(let s=0;s!==a;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),t=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),t=!1;break}n=o}if(i!==void 0&&gc(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===pa,a=t.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=t[s],c=t[s+1];if(l!==c&&(s!==1||l!==t[0]))if(i)o=!0;else{let u=s*r,d=u-r,p=u+r;for(let m=0;m!==r;++m){let E=e[u+m];if(E!==e[d+m]||E!==e[p+m]){o=!0;break}}}if(o){if(s!==n){t[n]=t[s];let u=s*r,d=n*r;for(let p=0;p!==r;++p)e[d+p]=e[u+p]}++n}}if(a>0){t[n]=t[a];for(let s=a*r,o=n*r,l=0;l!==r;++l)e[o+l]=e[s+l];++n}return n!==t.length?(this.times=t.slice(0,n),this.values=e.slice(0,n*r)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),r=this.constructor,i=new r(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};kt.prototype.ValueTypeName="";kt.prototype.TimeBufferType=Float32Array;kt.prototype.ValueBufferType=Float32Array;kt.prototype.DefaultInterpolation=In;var Mi=class extends kt{constructor(t,e,r){super(t,e,r)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=ta;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends kt{constructor(t,e,r,i){super(t,e,r,i)}};Ec.prototype.ValueTypeName="color";var Mc=class extends kt{constructor(t,e,r,i){super(t,e,r,i)}};Mc.prototype.ValueTypeName="number";var Sc=class extends la{constructor(t,e,r,i){super(t,e,r,i)}interpolate_(t,e,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(r-e)/(i-e),l=t*s;for(let c=l+s;l!==c;l+=4)ri.slerpFlat(a,0,n,l-s,n,l,o);return a}},Oo=class extends kt{constructor(t,e,r,i){super(t,e,r,i)}InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends kt{constructor(t,e,r){super(t,e,r)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ta;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends kt{constructor(t,e,r,i){super(t,e,r,i)}};Tc.prototype.ValueTypeName="vector";var yc=class{constructor(t,e,r){let i=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this.abortController=new AbortController,this.itemStart=function(c){s++,a===!1&&i.onStart!==void 0&&i.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,i.onProgress!==void 0&&i.onProgress(c,n,s),n===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bc=new yc,Ac=class{constructor(t){this.manager=t!==void 0?t:bc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let r=this;return new Promise(function(i,a){r.load(t,i,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xn=class extends Co{constructor(t=-1,e=1,r=1,i=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=i,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,i,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=r-t,n=r+t,s=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rc=class extends Ut{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},jn="\\[\\]\\.:\\/",wc=new RegExp("["+jn+"]","g"),Yn="[^"+jn+"]",Cc="[^"+jn.replace("\\.","")+"]",Pc=/((?:WC+[\/:])*)/.source.replace("WC",Yn),Uc=/(WCOD+)?/.source.replace("WCOD",Cc),Ic=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yn),Lc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yn),Nc=new RegExp("^"+Pc+Uc+Ic+Lc+"$"),Dc=["material","materials","bones","map"],Oc=class{constructor(t,e,r){let i=r||tt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(t,e)}setValue(t,e){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=r.length;i!==a;++i)r[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].unbind()}},tt=class jr{constructor(e,r,i){this.path=r,this.parsedPath=i||jr.parseTrackName(r),this.node=jr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,r,i){return e&&e.isAnimationObjectGroup?new jr.Composite(e,r,i):new jr(e,r,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wc,"")}static parseTrackName(e){let r=Nc.exec(e);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=i.nodeName.substring(a+1);Dc.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,r){if(r===void 0||r===""||r==="."||r===-1||r===e.name||r===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(r);if(i!==void 0)return i}if(e.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,r){e[r]=this.targetObject[this.propertyName]}_getValue_array(e,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)e[r++]=i[a]}_getValue_arrayElement(e,r){e[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,r){this.resolvedProperty.toArray(e,r)}_setValue_direct(e,r){this.targetObject[this.propertyName]=e[r]}_setValue_direct_setNeedsUpdate(e,r){this.targetObject[this.propertyName]=e[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,r){this.targetObject[this.propertyName]=e[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=e[r++]}_setValue_array_setNeedsUpdate(e,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=e[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=e[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,r){this.resolvedProperty[this.propertyIndex]=e[r]}_setValue_arrayElement_setNeedsUpdate(e,r){this.resolvedProperty[this.propertyIndex]=e[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,r){this.resolvedProperty[this.propertyIndex]=e[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,r){this.resolvedProperty.fromArray(e,r)}_setValue_fromArray_setNeedsUpdate(e,r){this.resolvedProperty.fromArray(e,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,r){this.resolvedProperty.fromArray(e,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,r){this.bind(),this.getValue(e,r)}_setValue_unbound(e,r){this.bind(),this.setValue(e,r)}bind(){let e=this.node,r=this.parsedPath,i=r.objectName,a=r.propertyName,n=r.propertyIndex;if(e||(e=jr.findNode(this.rootNode,r.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=r.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[a];if(s===void 0){let c=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=Oc;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mf=new Float32Array(1);function Ps(t,e,r,i){let a=Fc(i);switch(r){case lo:return t*e;case uo:return t*e/a.components*a.byteLength;case zn:return t*e/a.components*a.byteLength;case ho:return t*e*2/a.components*a.byteLength;case Hn:return t*e*2/a.components*a.byteLength;case co:return t*e*3/a.components*a.byteLength;case It:return t*e*4/a.components*a.byteLength;case Vn:return t*e*4/a.components*a.byteLength;case qi:case Ki:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zi:case Ji:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nn:case on:return Math.max(t,16)*Math.max(e,8)/4;case an:case sn:return Math.max(t,8)*Math.max(e,8)/2;case ln:case cn:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case un:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hn:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dn:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case pn:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fn:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mn:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gn:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _n:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vn:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xn:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case En:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mn:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sn:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tn:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yn:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bn:case An:case Rn:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wn:case Cn:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pn:case Un:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function Fc(t){switch(t){case er:case ao:return{byteLength:1,components:1};case di:case no:case _i:return{byteLength:2,components:1};case Fn:case Bn:return{byteLength:2,components:4};case Rr:case On:case $t:return{byteLength:4,components:1};case so:case oo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Fo(){let t=null,e=!1,r=null,i=null;function a(n,s){r(n,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&r!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){r=n},setContext:function(n){t=n}}}function Bc(t){let e=new WeakMap;function r(o,l){let c=o.array,u=o.usage,d=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((m,E)=>m.start-E.start);let p=0;for(let m=1;m<d.length;m++){let E=d[p],_=d[m];_.start<=E.start+E.count+1?E.count=Math.max(E.count,_.start+_.count-E.start):(++p,d[p]=_)}d.length=p+1;for(let m=0,E=d.length;m<E;m++){let _=d[m];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,r(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hc=`#ifdef USE_ALPHAHASH
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
#endif`,Vc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xc=`#ifdef USE_AOMAP
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
#endif`,jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yc=`#ifdef USE_BATCHING
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
#endif`,qc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$c=`#ifdef USE_IRIDESCENCE
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
#endif`,Qc=`#ifdef USE_BUMPMAP
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lu=`#define PI 3.141592653589793
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
} // validated`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
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
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_u=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
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
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ou=`PhysicalMaterial material;
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
#endif`,Fu=`struct PhysicalMaterial {
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
}`,Bu=`
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qu=`#if defined( USE_POINTS_UV )
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
#endif`,Ku=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$u=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eh=`#ifdef USE_MORPHTARGETS
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
#endif`,th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oh=`#ifdef USE_NORMALMAP
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
#endif`,lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ph=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_h=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Mh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Th=`float getShadowMask() {
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
}`,yh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bh=`#ifdef USE_SKINNING
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
#endif`,Ah=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rh=`#ifdef USE_SKINNING
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
#endif`,wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ch=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ph=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ih=`#ifdef USE_TRANSMISSION
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
#endif`,Lh=`#ifdef USE_TRANSMISSION
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
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zh=`uniform sampler2D t2D;
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
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`#include <common>
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
}`,Xh=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jh=`#define DISTANCE
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
}`,Yh=`#define DISTANCE
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
}`,qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`uniform float scale;
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
}`,Jh=`uniform vec3 diffuse;
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
}`,$h=`#include <common>
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
}`,Qh=`uniform vec3 diffuse;
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
}`,ed=`#define LAMBERT
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
}`,td=`#define LAMBERT
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
}`,rd=`#define MATCAP
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
}`,id=`#define MATCAP
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
}`,ad=`#define NORMAL
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
}`,nd=`#define NORMAL
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
}`,sd=`#define PHONG
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
}`,od=`#define PHONG
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
}`,ld=`#define STANDARD
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
}`,cd=`#define STANDARD
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
}`,ud=`#define TOON
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
}`,hd=`#define TOON
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
}`,dd=`uniform float size;
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
}`,pd=`uniform vec3 diffuse;
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
}`,fd=`#include <common>
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
}`,md=`uniform vec3 color;
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
}`,gd=`uniform float rotation;
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
}`,_d=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:zc,alphahash_pars_fragment:Hc,alphamap_fragment:Vc,alphamap_pars_fragment:Gc,alphatest_fragment:kc,alphatest_pars_fragment:Wc,aomap_fragment:Xc,aomap_pars_fragment:jc,batching_pars_vertex:Yc,batching_vertex:qc,begin_vertex:Kc,beginnormal_vertex:Zc,bsdfs:Jc,iridescence_fragment:$c,bumpmap_pars_fragment:Qc,clipping_planes_fragment:eu,clipping_planes_pars_fragment:tu,clipping_planes_pars_vertex:ru,clipping_planes_vertex:iu,color_fragment:au,color_pars_fragment:nu,color_pars_vertex:su,color_vertex:ou,common:lu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:uu,displacementmap_pars_vertex:hu,displacementmap_vertex:du,emissivemap_fragment:pu,emissivemap_pars_fragment:fu,colorspace_fragment:mu,colorspace_pars_fragment:gu,envmap_fragment:_u,envmap_common_pars_fragment:vu,envmap_pars_fragment:xu,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Uu,envmap_vertex:Mu,fog_vertex:Su,fog_pars_vertex:Tu,fog_fragment:yu,fog_pars_fragment:bu,gradientmap_pars_fragment:Au,lightmap_pars_fragment:Ru,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Cu,lights_pars_begin:Pu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Nu,lights_phong_pars_fragment:Du,lights_physical_fragment:Ou,lights_physical_pars_fragment:Fu,lights_fragment_begin:Bu,lights_fragment_maps:zu,lights_fragment_end:Hu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Gu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Wu,map_fragment:Xu,map_pars_fragment:ju,map_particle_fragment:Yu,map_particle_pars_fragment:qu,metalnessmap_fragment:Ku,metalnessmap_pars_fragment:Zu,morphinstance_vertex:Ju,morphcolor_vertex:$u,morphnormal_vertex:Qu,morphtarget_pars_vertex:eh,morphtarget_vertex:th,normal_fragment_begin:rh,normal_fragment_maps:ih,normal_pars_fragment:ah,normal_pars_vertex:nh,normal_vertex:sh,normalmap_pars_fragment:oh,clearcoat_normal_fragment_begin:lh,clearcoat_normal_fragment_maps:ch,clearcoat_pars_fragment:uh,iridescence_pars_fragment:hh,opaque_fragment:dh,packing:ph,premultiplied_alpha_fragment:fh,project_vertex:mh,dithering_fragment:gh,dithering_pars_fragment:_h,roughnessmap_fragment:vh,roughnessmap_pars_fragment:xh,shadowmap_pars_fragment:Eh,shadowmap_pars_vertex:Mh,shadowmap_vertex:Sh,shadowmask_pars_fragment:Th,skinbase_vertex:yh,skinning_pars_vertex:bh,skinning_vertex:Ah,skinnormal_vertex:Rh,specularmap_fragment:wh,specularmap_pars_fragment:Ch,tonemapping_fragment:Ph,tonemapping_pars_fragment:Uh,transmission_fragment:Ih,transmission_pars_fragment:Lh,uv_pars_fragment:Nh,uv_pars_vertex:Dh,uv_vertex:Oh,worldpos_vertex:Fh,background_vert:Bh,background_frag:zh,backgroundCube_vert:Hh,backgroundCube_frag:Vh,cube_vert:Gh,cube_frag:kh,depth_vert:Wh,depth_frag:Xh,distanceRGBA_vert:jh,distanceRGBA_frag:Yh,equirect_vert:qh,equirect_frag:Kh,linedashed_vert:Zh,linedashed_frag:Jh,meshbasic_vert:$h,meshbasic_frag:Qh,meshlambert_vert:ed,meshlambert_frag:td,meshmatcap_vert:rd,meshmatcap_frag:id,meshnormal_vert:ad,meshnormal_frag:nd,meshphong_vert:sd,meshphong_frag:od,meshphysical_vert:ld,meshphysical_frag:cd,meshtoon_vert:ud,meshtoon_frag:hd,points_vert:dd,points_frag:pd,shadow_vert:fd,shadow_frag:md,sprite_vert:gd,sprite_frag:_d},ne={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Ft={basic:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:gt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:gt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:gt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:gt([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:gt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:gt([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:gt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:gt([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:gt([ne.common,ne.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:gt([ne.lights,ne.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Ft.physical={uniforms:gt([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var Xi={r:0,b:0,g:0},vr=new Cr,vd=new mt;function xd(t,e,r,i,a,n,s){let o=new Xe(0),l=n===!0?0:1,c,u,d=null,p=0,m=null;function E(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?r:e).get(b)),b}function _(S){let b=!1,N=E(S);N===null?h(o,l):N&&N.isColor&&(h(N,1),b=!0);let P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function f(S,b){let N=E(b);N&&(N.isCubeTexture||N.mapping===na)?(u===void 0&&(u=new Lt(new Wn(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:ei(Ft.backgroundCube.uniforms),vertexShader:Ft.backgroundCube.vertexShader,fragmentShader:Ft.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),vr.copy(b.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vd.makeRotationFromEuler(vr)),u.material.toneMapped=He.getTransfer(N.colorSpace)!==We,(d!==N||p!==N.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=N,p=N.version,m=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new Lt(new oa(2,2),new Vt({name:"BackgroundMaterial",uniforms:ei(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=He.getTransfer(N.colorSpace)!==We,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||p!==N.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=N,p=N.version,m=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,b){S.getRGB(Xi,wo(t)),i.buffers.color.setClear(Xi.r,Xi.g,Xi.b,b,s)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),l=b,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(o,l)},render:_,addToRenderList:f,dispose:C}}function Ed(t,e){let r=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=p(null),n=a,s=!1;function o(x,R,H,G,z){let Z=!1,k=d(G,H,R);n!==k&&(n=k,c(n.object)),Z=m(x,G,H,z),Z&&E(x,G,H,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,b(x,R,H,G),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function d(x,R,H){let G=H.wireframe===!0,z=i[x.id];z===void 0&&(z={},i[x.id]=z);let Z=z[R.id];Z===void 0&&(Z={},z[R.id]=Z);let k=Z[G];return k===void 0&&(k=p(l()),Z[G]=k),k}function p(x){let R=[],H=[],G=[];for(let z=0;z<r;z++)R[z]=0,H[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:G,object:x,attributes:{},index:null}}function m(x,R,H,G){let z=n.attributes,Z=R.attributes,k=0,q=H.getAttributes();for(let V in q)if(q[V].location>=0){let ee=z[V],ue=Z[V];if(ue===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;k++}return n.attributesNum!==k||n.index!==G}function E(x,R,H,G){let z={},Z=R.attributes,k=0,q=H.getAttributes();for(let V in q)if(q[V].location>=0){let ee=Z[V];ee===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor));let ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),z[V]=ue,k++}n.attributes=z,n.attributesNum=k,n.index=G}function _(){let x=n.newAttributes;for(let R=0,H=x.length;R<H;R++)x[R]=0}function f(x){h(x,0)}function h(x,R){let H=n.newAttributes,G=n.enabledAttributes,z=n.attributeDivisors;H[x]=1,G[x]===0&&(t.enableVertexAttribArray(x),G[x]=1),z[x]!==R&&(t.vertexAttribDivisor(x,R),z[x]=R)}function C(){let x=n.newAttributes,R=n.enabledAttributes;for(let H=0,G=R.length;H<G;H++)R[H]!==x[H]&&(t.disableVertexAttribArray(H),R[H]=0)}function S(x,R,H,G,z,Z,k){k===!0?t.vertexAttribIPointer(x,R,H,z,Z):t.vertexAttribPointer(x,R,H,G,z,Z)}function b(x,R,H,G){_();let z=G.attributes,Z=H.getAttributes(),k=R.defaultAttributeValues;for(let q in Z){let V=Z[q];if(V.location>=0){let ee=z[q];if(ee===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){let ue=ee.normalized,Ue=ee.itemSize,Ne=e.get(ee);if(Ne===void 0)continue;let Je=Ne.buffer,Ve=Ne.type,X=Ne.bytesPerElement,ie=Ve===t.INT||Ve===t.UNSIGNED_INT||ee.gpuType===On;if(ee.isInterleavedBufferAttribute){let ae=ee.data,xe=ae.stride,Pe=ee.offset;if(ae.isInstancedInterleavedBuffer){for(let fe=0;fe<V.locationSize;fe++)h(V.location+fe,ae.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let fe=0;fe<V.locationSize;fe++)f(V.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let fe=0;fe<V.locationSize;fe++)S(V.location+fe,Ue/V.locationSize,Ve,ue,xe*X,(Pe+Ue/V.locationSize*fe)*X,ie)}else{if(ee.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)h(V.location+ae,ee.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ae=0;ae<V.locationSize;ae++)f(V.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let ae=0;ae<V.locationSize;ae++)S(V.location+ae,Ue/V.locationSize,Ve,ue,Ue*X,Ue/V.locationSize*ae*X,ie)}}else if(k!==void 0){let ue=k[q];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(V.location,ue);break;case 3:t.vertexAttrib3fv(V.location,ue);break;case 4:t.vertexAttrib4fv(V.location,ue);break;default:t.vertexAttrib1fv(V.location,ue)}}}}C()}function N(){F();for(let x in i){let R=i[x];for(let H in R){let G=R[H];for(let z in G)u(G[z].object),delete G[z];delete R[H]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;let R=i[x.id];for(let H in R){let G=R[H];for(let z in G)u(G[z].object),delete G[z];delete R[H]}delete i[x.id]}function w(x){for(let R in i){let H=i[R];if(H[x.id]===void 0)continue;let G=H[x.id];for(let z in G)u(G[z].object),delete G[z];delete H[x.id]}}function F(){M(),s=!0,n!==a&&(n=a,c(n.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:F,resetDefaultState:M,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:f,disableUnusedAttributes:C}}function Md(t,e,r){let i;function a(c){i=c}function n(c,u){t.drawArrays(i,c,u),r.update(u,i,1)}function s(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),r.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];r.update(p,i,1)}function l(c,u,d,p){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let E=0;E<c.length;E++)s(c[E],u[E],p[E]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let E=0;for(let _=0;_<d;_++)E+=u[_]*p[_];r.update(E,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sd(t,e,r,i){let a;function n(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==It&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let F=w===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==er&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$t&&!F)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=r.precision!==void 0?r.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=r.logarithmicDepthBuffer===!0,p=r.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:E,maxTextureSize:_,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:C,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:N,maxSamples:P}}function Td(t){let e=this,r=null,i=0,a=!1,n=!1,s=new Er,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||i!==0||a;return a=p,i=d.length,m},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,p){r=u(d,p,0)},this.setState=function(d,p,m){let E=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,h=t.get(d);if(!a||E===null||E.length===0||n&&!f)n?u(null):c();else{let C=n?0:i,S=C*4,b=h.clippingState||null;l.value=b,b=u(E,p,S,m);for(let N=0;N!==S;++N)b[N]=r[N];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,E){let _=d!==null?d.length:0,f=null;if(_!==0){if(f=l.value,E!==!0||f===null){let h=m+_*4,C=p.matrixWorldInverse;o.getNormalMatrix(C),(f===null||f.length<h)&&(f=new Float32Array(h));for(let S=0,b=m;S!==_;++S,b+=4)s.copy(d[S]).applyMatrix4(C,o),s.normal.toArray(f,b),f[b+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function yd(t){let e=new WeakMap;function r(s,o){return o===Qa?s.mapping=Jr:o===en&&(s.mapping=$r),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===Qa||o===en)if(e.has(s)){let l=e.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=new cc(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",a),r(c.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}var Yr=4,Us=[.125,.215,.35,.446,.526,.582],Tr=20,Ba=new Xn,Is=new Xe,za=null,Ha=0,Va=0,Ga=!1,Mr=(1+Math.sqrt(5))/2,Wr=1/Mr,Ls=[new O(-Mr,Wr,0),new O(Mr,Wr,0),new O(-Wr,0,Mr),new O(Wr,0,Mr),new O(0,Mr,-Wr),new O(0,Mr,Wr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],bd=new O,Ns=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,i=100,a={}){let{size:n=256,position:s=bd}=a;za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,r,i,o,s),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Os(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Ha,Va),this._renderer.xr.enabled=Ga,t.scissorTest=!1,ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jr||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:_i,format:It,colorSpace:Qr,depthBuffer:!1},i=Ds(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ds(t,e,r);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ad(a)),this._blurMaterial=Rd(a,t,e)}return i}_compileMaterial(t){let e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,r,i,a){let n=new Ut(90,1,e,r),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Is),l.toneMapping=ur,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new To({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),p=new Lt(new Wn,d),m=!1,E=t.background;E?E.isColor&&(d.color.copy(E),t.background=null,m=!0):(d.color.copy(Is),m=!0);for(let _=0;_<6;_++){let f=_%3;f===0?(n.up.set(0,s[_],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[_],a.y,a.z)):f===1?(n.up.set(0,0,s[_]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[_],a.z)):(n.up.set(0,s[_],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[_]));let h=this._cubeSize;ji(i,f*h,_>2?h:0,h,h),l.setRenderTarget(i),m&&l.render(p,n),l.render(t,n)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=c,t.background=E}_textureToCubeUV(t,e){let r=this._renderer,i=t.mapping===Jr||t.mapping===$r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fs()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Os());let a=i?this._cubemapMaterial:this._equirectMaterial,n=new Lt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=t;let o=this._cubeSize;ji(e,0,0,3*o,2*o),r.setRenderTarget(e),r.render(n,Ba)}_applyPMREM(t){let e=this._renderer,r=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let a=1;a<i;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Ls[(i-a-1)%Ls.length];this._blur(t,a-1,a,n,s)}e.autoClear=r}_blur(t,e,r,i,a){let n=this._pingPongRenderTarget;this._halfBlur(t,n,e,r,i,"latitudinal",a),this._halfBlur(n,t,r,r,i,"longitudinal",a)}_halfBlur(t,e,r,i,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Lt(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[r]-1,m=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),E=a/m,_=isFinite(a)?1+Math.floor(c*E):Tr;_>Tr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Tr}`);let f=[],h=0;for(let P=0;P<Tr;++P){let w=P/E,F=Math.exp(-w*w/2);f.push(F),P===0?h+=F:P<_&&(h+=2*F)}for(let P=0;P<f.length;P++)f[P]=f[P]/h;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=f,d.latitudinal.value=n==="latitudinal",s&&(d.poleAxis.value=s);let{_lodMax:C}=this;d.dTheta.value=m,d.mipInt.value=C-r;let S=this._sizeLods[i],b=3*S*(i>C-Yr?i-C+Yr:0),N=4*(this._cubeSize-S);ji(e,b,N,3*S,2*S),o.setRenderTarget(e),o.render(u,Ba)}};function Ad(t){let e=[],r=[],i=[],a=t,n=t-Yr+1+Us.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);r.push(o);let l=1/o;s>t-Yr?l=Us[s-t+Yr-1]:s===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,E=6,_=3,f=2,h=1,C=new Float32Array(_*E*m),S=new Float32Array(f*E*m),b=new Float32Array(h*E*m);for(let P=0;P<m;P++){let w=P%3*2/3-1,F=P>2?0:-1,M=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];C.set(M,_*E*P),S.set(p,f*E*P);let x=[P,P,P,P,P,P];b.set(x,h*E*P)}let N=new Ei;N.setAttribute("position",new Ht(C,_)),N.setAttribute("uv",new Ht(S,f)),N.setAttribute("faceIndex",new Ht(b,h)),e.push(N),a>Yr&&a--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function Ds(t,e,r){let i=new wr(t,e,r);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ji(t,e,r,i,a){t.viewport.set(e,r,i,a),t.scissor.set(e,r,i,a)}function Rd(t,e,r){let i=new Float32Array(Tr),a=new O(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:qn(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Os(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qn(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Fs(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function qn(){return`

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
	`}function wd(t){let e=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Qa||l===en,u=l===Jr||l===$r;if(c||u){let d=e.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return r===null&&(r=new Ns(t)),d=c?r.fromEquirectangular(o,d):r.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return c&&m&&m.height>0||u&&m&&a(m)?(r===null&&(r=new Ns(t)),d=c?r.fromEquirectangular(o):r.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",n),d.texture):null}}}return o}function a(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function n(o){let l=o.target;l.removeEventListener("dispose",n);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function Cd(t){let e={};function r(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=t.getExtension(i)}return e[i]=a,a}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let a=r(i);return a===null&&gi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Pd(t,e,r,i){let a={},n=new WeakMap;function s(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let E in p.attributes)e.remove(p.attributes[E]);p.removeEventListener("dispose",s),delete a[p.id];let m=n.get(p);m&&(e.remove(m),n.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,r.memory.geometries--}function o(d,p){return a[p.id]===!0||(p.addEventListener("dispose",s),a[p.id]=!0,r.memory.geometries++),p}function l(d){let p=d.attributes;for(let m in p)e.update(p[m],t.ARRAY_BUFFER)}function c(d){let p=[],m=d.index,E=d.attributes.position,_=0;if(m!==null){let C=m.array;_=m.version;for(let S=0,b=C.length;S<b;S+=3){let N=C[S+0],P=C[S+1],w=C[S+2];p.push(N,P,P,w,w,N)}}else if(E!==void 0){let C=E.array;_=E.version;for(let S=0,b=C.length/3-1;S<b;S+=3){let N=S+0,P=S+1,w=S+2;p.push(N,P,P,w,w,N)}}else return;let f=new(_o(p)?bo:yo)(p,1);f.version=_;let h=n.get(d);h&&e.remove(h),n.set(d,f)}function u(d){let p=n.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Ud(t,e,r){let i;function a(p){i=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,m){t.drawElements(i,m,n,p*s),r.update(m,i,1)}function c(p,m,E){E!==0&&(t.drawElementsInstanced(i,m,n,p*s,E),r.update(m,i,E))}function u(p,m,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,n,p,0,E);let _=0;for(let f=0;f<E;f++)_+=m[f];r.update(_,i,1)}function d(p,m,E,_){if(E===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)c(p[h]/s,m[h],_[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,n,p,0,_,0,E);let h=0;for(let C=0;C<E;C++)h+=m[C]*_[C];r.update(h,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Id(t){let e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(r.calls++,s){case t.TRIANGLES:r.triangles+=o*(n/3);break;case t.LINES:r.lines+=o*(n/2);break;case t.LINE_STRIP:r.lines+=o*(n-1);break;case t.LINE_LOOP:r.lines+=o*n;break;case t.POINTS:r.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:a,update:i}}function Ld(t,e,r){let i=new WeakMap,a=new nt;function n(s,o,l){let c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,p=i.get(o);if(p===void 0||p.count!==d){let m=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",m)};p!==void 0&&p.texture.dispose();let E=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;E===!0&&(b=1),_===!0&&(b=2),f===!0&&(b=3);let N=o.attributes.position.count*b,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let w=new Float32Array(N*P*4*d),F=new xo(w,N,P,d);F.type=$t,F.needsUpdate=!0;let M=b*4;for(let x=0;x<d;x++){let R=h[x],H=C[x],G=S[x],z=N*P*4*x;for(let Z=0;Z<R.count;Z++){let k=Z*M;E===!0&&(a.fromBufferAttribute(R,Z),w[z+k+0]=a.x,w[z+k+1]=a.y,w[z+k+2]=a.z,w[z+k+3]=0),_===!0&&(a.fromBufferAttribute(H,Z),w[z+k+4]=a.x,w[z+k+5]=a.y,w[z+k+6]=a.z,w[z+k+7]=0),f===!0&&(a.fromBufferAttribute(G,Z),w[z+k+8]=a.x,w[z+k+9]=a.y,w[z+k+10]=a.z,w[z+k+11]=G.itemSize===4?a.w:1)}}p={count:d,texture:F,size:new Ge(N,P)},i.set(o,p),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,r);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let E=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,r),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:n}}function Nd(t,e,r,i){let a=new WeakMap;function n(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;a.get(p)!==c&&(p.update(),a.set(p,c))}return d}function s(){a=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),r.remove(c.instanceMatrix),c.instanceColor!==null&&r.remove(c.instanceColor)}return{update:n,dispose:s}}var Bo=new Gt,Bs=new Lo(1,1),zo=new xo,Ho=new Xl,Vo=new Po,zs=[],Hs=[],Vs=new Float32Array(16),Gs=new Float32Array(9),ks=new Float32Array(4);function ii(t,e,r){let i=t[0];if(i<=0||i>0)return t;let a=e*r,n=zs[a];if(n===void 0&&(n=new Float32Array(a),zs[a]=n),e!==0){i.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=r,t[s].toArray(n,o)}return n}function st(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function ot(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function ca(t,e){let r=Hs[e];r===void 0&&(r=new Int32Array(e),Hs[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function Dd(t,e){let r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function Od(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(st(r,e))return;t.uniform2fv(this.addr,e),ot(r,e)}}function Fd(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(st(r,e))return;t.uniform3fv(this.addr,e),ot(r,e)}}function Bd(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(st(r,e))return;t.uniform4fv(this.addr,e),ot(r,e)}}function zd(t,e){let r=this.cache,i=e.elements;if(i===void 0){if(st(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),ot(r,e)}else{if(st(r,i))return;ks.set(i),t.uniformMatrix2fv(this.addr,!1,ks),ot(r,i)}}function Hd(t,e){let r=this.cache,i=e.elements;if(i===void 0){if(st(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),ot(r,e)}else{if(st(r,i))return;Gs.set(i),t.uniformMatrix3fv(this.addr,!1,Gs),ot(r,i)}}function Vd(t,e){let r=this.cache,i=e.elements;if(i===void 0){if(st(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),ot(r,e)}else{if(st(r,i))return;Vs.set(i),t.uniformMatrix4fv(this.addr,!1,Vs),ot(r,i)}}function Gd(t,e){let r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function kd(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(st(r,e))return;t.uniform2iv(this.addr,e),ot(r,e)}}function Wd(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(st(r,e))return;t.uniform3iv(this.addr,e),ot(r,e)}}function Xd(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(st(r,e))return;t.uniform4iv(this.addr,e),ot(r,e)}}function jd(t,e){let r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function Yd(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(st(r,e))return;t.uniform2uiv(this.addr,e),ot(r,e)}}function qd(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(st(r,e))return;t.uniform3uiv(this.addr,e),ot(r,e)}}function Kd(t,e){let r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(st(r,e))return;t.uniform4uiv(this.addr,e),ot(r,e)}}function Zd(t,e,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let n;this.type===t.SAMPLER_2D_SHADOW?(Bs.compareFunction=po,n=Bs):n=Bo,r.setTexture2D(e||n,a)}function Jd(t,e,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),r.setTexture3D(e||Ho,a)}function $d(t,e,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),r.setTextureCube(e||Vo,a)}function Qd(t,e,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),r.setTexture2DArray(e||zo,a)}function ep(t){switch(t){case 5126:return Dd;case 35664:return Od;case 35665:return Fd;case 35666:return Bd;case 35674:return zd;case 35675:return Hd;case 35676:return Vd;case 5124:case 35670:return Gd;case 35667:case 35671:return kd;case 35668:case 35672:return Wd;case 35669:case 35673:return Xd;case 5125:return jd;case 36294:return Yd;case 36295:return qd;case 36296:return Kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return $d;case 36289:case 36303:case 36311:case 36292:return Qd}}function tp(t,e){t.uniform1fv(this.addr,e)}function rp(t,e){let r=ii(e,this.size,2);t.uniform2fv(this.addr,r)}function ip(t,e){let r=ii(e,this.size,3);t.uniform3fv(this.addr,r)}function ap(t,e){let r=ii(e,this.size,4);t.uniform4fv(this.addr,r)}function np(t,e){let r=ii(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function sp(t,e){let r=ii(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function op(t,e){let r=ii(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function lp(t,e){t.uniform1iv(this.addr,e)}function cp(t,e){t.uniform2iv(this.addr,e)}function up(t,e){t.uniform3iv(this.addr,e)}function hp(t,e){t.uniform4iv(this.addr,e)}function dp(t,e){t.uniform1uiv(this.addr,e)}function pp(t,e){t.uniform2uiv(this.addr,e)}function fp(t,e){t.uniform3uiv(this.addr,e)}function mp(t,e){t.uniform4uiv(this.addr,e)}function gp(t,e,r){let i=this.cache,a=e.length,n=ca(r,a);st(i,n)||(t.uniform1iv(this.addr,n),ot(i,n));for(let s=0;s!==a;++s)r.setTexture2D(e[s]||Bo,n[s])}function _p(t,e,r){let i=this.cache,a=e.length,n=ca(r,a);st(i,n)||(t.uniform1iv(this.addr,n),ot(i,n));for(let s=0;s!==a;++s)r.setTexture3D(e[s]||Ho,n[s])}function vp(t,e,r){let i=this.cache,a=e.length,n=ca(r,a);st(i,n)||(t.uniform1iv(this.addr,n),ot(i,n));for(let s=0;s!==a;++s)r.setTextureCube(e[s]||Vo,n[s])}function xp(t,e,r){let i=this.cache,a=e.length,n=ca(r,a);st(i,n)||(t.uniform1iv(this.addr,n),ot(i,n));for(let s=0;s!==a;++s)r.setTexture2DArray(e[s]||zo,n[s])}function Ep(t){switch(t){case 5126:return tp;case 35664:return rp;case 35665:return ip;case 35666:return ap;case 35674:return np;case 35675:return sp;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return up;case 35669:case 35673:return hp;case 5125:return dp;case 36294:return pp;case 36295:return fp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}var Mp=class{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=ep(e.type)}},Sp=class{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ep(e.type)}},Tp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){let i=this.seq;for(let a=0,n=i.length;a!==n;++a){let s=i[a];s.setValue(t,e[s.id],r)}}},ka=/(\w+)(\])?(\[|\.)?/g;function Ws(t,e){t.seq.push(e),t.map[e.id]=e}function yp(t,e,r){let i=t.name,a=i.length;for(ka.lastIndex=0;;){let n=ka.exec(i),s=ka.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Ws(r,c===void 0?new Mp(o,t,e):new Sp(o,t,e));break}else{let u=r.map[o];u===void 0&&(u=new Tp(o),Ws(r,u)),r=u}}}var ea=class{constructor(t,e){this.seq=[],this.map={};let r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let a=t.getActiveUniform(e,i),n=t.getUniformLocation(e,a.name);yp(a,n,this)}}setValue(t,e,r,i){let a=this.map[e];a!==void 0&&a.setValue(t,r,i)}setOptional(t,e,r){let i=e[r];i!==void 0&&this.setValue(t,r,i)}static upload(t,e,r,i){for(let a=0,n=e.length;a!==n;++a){let s=e[a],o=r[s.id];o.needsUpdate!==!1&&s.setValue(t,o.value,i)}}static seqWithValue(t,e){let r=[];for(let i=0,a=t.length;i!==a;++i){let n=t[i];n.id in e&&r.push(n)}return r}};function Xs(t,e,r){let i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}var bp=37297,Ap=0;function Rp(t,e){let r=t.split(`
`),i=[],a=Math.max(e-6,0),n=Math.min(e+6,r.length);for(let s=a;s<n;s++){let o=s+1;i.push(`${o===e?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var js=new Le;function wp(t){He._getMatrix(js,He.workingColorSpace,t);let e=`mat3( ${js.elements.map(r=>r.toFixed(4))} )`;switch(He.getTransfer(t)){case ra:return[e,"LinearTransferOETF"];case We:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ys(t,e,r){let i=t.getShaderParameter(e,t.COMPILE_STATUS),a=(t.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return r.toUpperCase()+`

`+a+`

`+Rp(t.getShaderSource(e),s)}else return a}function Cp(t,e){let r=wp(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Pp(t,e){let r;switch(e){case vl:r="Linear";break;case xl:r="Reinhard";break;case El:r="Cineon";break;case Ml:r="ACESFilmic";break;case Tl:r="AgX";break;case yl:r="Neutral";break;case Sl:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var Yi=new O;function Up(){He.getLuminanceCoefficients(Yi);let t=Yi.x.toFixed(4),e=Yi.y.toFixed(4),r=Yi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ip(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hi).join(`
`)}function Lp(t){let e=[];for(let r in t){let i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function Np(t,e){let r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let n=t.getActiveAttrib(e,a),s=n.name,o=1;n.type===t.FLOAT_MAT2&&(o=2),n.type===t.FLOAT_MAT3&&(o=3),n.type===t.FLOAT_MAT4&&(o=4),r[s]={type:n.type,location:t.getAttribLocation(e,s),locationSize:o}}return r}function hi(t){return t!==""}function qs(t,e){let r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ks(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dn(t){return t.replace(Dp,Fp)}var Op=new Map;function Fp(t,e){let r=Ie[e];if(r===void 0){let i=Op.get(e);if(i!==void 0)r=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dn(r)}var Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zs(t){return t.replace(Bp,zp)}function zp(t,e,r,i){let a="";for(let n=parseInt(e);n<parseInt(r);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Js(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hp(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===to?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jo?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function Vp(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jr:case $r:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gp(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ro:e="ENVMAP_BLENDING_MULTIPLY";break;case gl:e="ENVMAP_BLENDING_MIX";break;case _l:e="ENVMAP_BLENDING_ADD";break}return e}function Wp(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function Xp(t,e,r,i){let a=t.getContext(),n=r.defines,s=r.vertexShader,o=r.fragmentShader,l=Hp(r),c=Vp(r),u=Gp(r),d=kp(r),p=Wp(r),m=Ip(r),E=Lp(n),_=a.createProgram(),f,h,C=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(f=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,E].filter(hi).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,E].filter(hi).join(`
`),h.length>0&&(h+=`
`)):(f=[Js(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,E,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",r.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),h=[Js(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,E,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.envMap?"#define "+u:"",r.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",r.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==ur?"#define TONE_MAPPING":"",r.toneMapping!==ur?Ie.tonemapping_pars_fragment:"",r.toneMapping!==ur?Pp("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Cp("linearToOutputTexel",r.outputColorSpace),Up(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(hi).join(`
`)),s=Dn(s),s=qs(s,r),s=Ks(s,r),o=Dn(o),o=qs(o,r),o=Ks(o,r),s=Zs(s),o=Zs(o),r.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",r.glslVersion===ds?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===ds?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=C+f+s,b=C+h+o,N=Xs(a,a.VERTEX_SHADER,S),P=Xs(a,a.FRAGMENT_SHADER,b);a.attachShader(_,N),a.attachShader(_,P),r.index0AttributeName!==void 0?a.bindAttribLocation(_,0,r.index0AttributeName):r.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function w(R){if(t.debug.checkShaderErrors){let H=a.getProgramInfoLog(_)||"",G=a.getShaderInfoLog(N)||"",z=a.getShaderInfoLog(P)||"",Z=H.trim(),k=G.trim(),q=z.trim(),V=!0,ee=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,_,N,P);else{let ue=Ys(a,N,"vertex"),Ue=Ys(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Z+`
`+ue+`
`+Ue)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(k===""||q==="")&&(ee=!1);ee&&(R.diagnostics={runnable:V,programLog:Z,vertexShader:{log:k,prefix:f},fragmentShader:{log:q,prefix:h}})}a.deleteShader(N),a.deleteShader(P),F=new ea(a,_),M=Np(a,_)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let x=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=a.getProgramParameter(_,bp)),x},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Ap++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=P,this}var jp=0,Yp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,r=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(r),n=this._getShaderCacheForMaterial(t);return n.has(i)===!1&&(n.add(i),i.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){let e=this.shaderCache,r=e.get(t);return r===void 0&&(r=new qp(t),e.set(t,r)),r}},qp=class{constructor(t){this.id=jp++,this.code=t,this.usedTimes=0}};function Kp(t,e,r,i,a,n,s){let o=new Mo,l=new Yp,c=new Set,u=[],d=a.logarithmicDepthBuffer,p=a.vertexTextures,m=a.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,x,R,H,G){let z=H.fog,Z=G.geometry,k=M.isMeshStandardMaterial?H.environment:null,q=(M.isMeshStandardMaterial?r:e).get(M.envMap||k),V=q&&q.mapping===na?q.image.height:null,ee=E[M.type];M.precision!==null&&(m=a.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ue=ue!==void 0?ue.length:0,Ne=0;Z.morphAttributes.position!==void 0&&(Ne=1),Z.morphAttributes.normal!==void 0&&(Ne=2),Z.morphAttributes.color!==void 0&&(Ne=3);let Je,Ve,X,ie;if(ee){let ke=Ft[ee];Je=ke.vertexShader,Ve=ke.fragmentShader}else Je=M.vertexShader,Ve=M.fragmentShader,l.update(M),X=l.getVertexShaderID(M),ie=l.getFragmentShaderID(M);let ae=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),Pe=G.isInstancedMesh===!0,fe=G.isBatchedMesh===!0,je=!!M.map,y=!!M.matcap,Be=!!q,Fe=!!M.aoMap,Ye=!!M.lightMap,Ee=!!M.bumpMap,$e=!!M.normalMap,Te=!!M.displacementMap,ye=!!M.emissiveMap,ut=!!M.metalnessMap,lt=!!M.roughnessMap,rt=M.anisotropy>0,T=M.clearcoat>0,g=M.dispersion>0,L=M.iridescence>0,j=M.sheen>0,K=M.transmission>0,W=rt&&!!M.anisotropyMap,pe=T&&!!M.clearcoatMap,te=T&&!!M.clearcoatNormalMap,_e=T&&!!M.clearcoatRoughnessMap,Me=L&&!!M.iridescenceMap,Q=L&&!!M.iridescenceThicknessMap,se=j&&!!M.sheenColorMap,Ae=j&&!!M.sheenRoughnessMap,Se=!!M.specularMap,le=!!M.specularColorMap,De=!!M.specularIntensityMap,A=K&&!!M.transmissionMap,oe=K&&!!M.thicknessMap,re=!!M.gradientMap,ge=!!M.alphaMap,$=M.alphaTest>0,Y=!!M.alphaHash,me=!!M.extensions,be=ur;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(be=t.toneMapping);let it={shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:Ve,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:fe,batchingColor:fe&&G._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&G.instanceColor!==null,instancingMorph:Pe&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Qr,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:y,envMap:Be,envMapMode:Be&&q.mapping,envMapCubeUVHeight:V,aoMap:Fe,lightMap:Ye,bumpMap:Ee,normalMap:$e,displacementMap:p&&Te,emissiveMap:ye,normalMapObjectSpace:$e&&M.normalMapType===Cl,normalMapTangentSpace:$e&&M.normalMapType===wl,metalnessMap:ut,roughnessMap:lt,anisotropy:rt,anisotropyMap:W,clearcoat:T,clearcoatMap:pe,clearcoatNormalMap:te,clearcoatRoughnessMap:_e,dispersion:g,iridescence:L,iridescenceMap:Me,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:se,sheenRoughnessMap:Ae,specularMap:Se,specularColorMap:le,specularIntensityMap:De,transmission:K,transmissionMap:A,thicknessMap:oe,gradientMap:re,opaque:M.transparent===!1&&M.blending===qr&&M.alphaToCoverage===!1,alphaMap:ge,alphaTest:$,alphaHash:Y,combine:M.combine,mapUv:je&&_(M.map.channel),aoMapUv:Fe&&_(M.aoMap.channel),lightMapUv:Ye&&_(M.lightMap.channel),bumpMapUv:Ee&&_(M.bumpMap.channel),normalMapUv:$e&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:ye&&_(M.emissiveMap.channel),metalnessMapUv:ut&&_(M.metalnessMap.channel),roughnessMapUv:lt&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(M.sheenRoughnessMap.channel),specularMapUv:Se&&_(M.specularMap.channel),specularColorMapUv:le&&_(M.specularColorMap.channel),specularIntensityMapUv:De&&_(M.specularIntensityMap.channel),transmissionMapUv:A&&_(M.transmissionMap.channel),thicknessMapUv:oe&&_(M.thicknessMap.channel),alphaMapUv:ge&&_(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&($e||rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(je||ge),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:be,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&He.getTransfer(M.map.colorSpace)===We,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&He.getTransfer(M.emissiveMap.colorSpace)===We,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:me&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&M.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function h(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(C(x,M),S(x,M),x.push(t.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function C(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){let x=E[M.type],R;if(x){let H=Ft[x];R=nc.clone(H.uniforms)}else R=M.uniforms;return R}function N(M,x){let R;for(let H=0,G=u.length;H<G;H++){let z=u[H];if(z.cacheKey===x){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Xp(t,x,M,n),u.push(R)),R}function P(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:b,acquireProgram:N,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:F}}function Zp(){let t=new WeakMap;function e(s){return t.has(s)}function r(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function n(){t=new WeakMap}return{has:e,get:r,remove:i,update:a,dispose:n}}function Jp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $s(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qs(){let t=[],e=0,r=[],i=[],a=[];function n(){e=0,r.length=0,i.length=0,a.length=0}function s(d,p,m,E,_,f){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:E,renderOrder:d.renderOrder,z:_,group:f},t[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=E,h.renderOrder=d.renderOrder,h.z=_,h.group=f),e++,h}function o(d,p,m,E,_,f){let h=s(d,p,m,E,_,f);m.transmission>0?i.push(h):m.transparent===!0?a.push(h):r.push(h)}function l(d,p,m,E,_,f){let h=s(d,p,m,E,_,f);m.transmission>0?i.unshift(h):m.transparent===!0?a.unshift(h):r.unshift(h)}function c(d,p){r.length>1&&r.sort(d||Jp),i.length>1&&i.sort(p||$s),a.length>1&&a.sort(p||$s)}function u(){for(let d=e,p=t.length;d<p;d++){let m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:r,transmissive:i,transparent:a,init:n,push:o,unshift:l,finish:u,sort:c}}function $p(){let t=new WeakMap;function e(i,a){let n=t.get(i),s;return n===void 0?(s=new Qs,t.set(i,[s])):a>=n.length?(s=new Qs,n.push(s)):s=n[a],s}function r(){t=new WeakMap}return{get:e,dispose:r}}function Qp(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new O,color:new Xe};break;case"SpotLight":r={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":r={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":r={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=r,r}}}function ef(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}var tf=0;function rf(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function af(t){let e=new Qp,r=ef(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let a=new O,n=new mt,s=new mt;function o(c){let u=0,d=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,E=0,_=0,f=0,h=0,C=0,S=0,b=0,N=0,P=0,w=0;c.sort(rf);for(let M=0,x=c.length;M<x;M++){let R=c[M],H=R.color,G=R.intensity,z=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=H.r*G,d+=H.g*G,p+=H.b*G;else if(R.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],G);w++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,V=r.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=R.shadow.matrix,C++}i.directional[m]=k,m++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(H).multiplyScalar(G),k.distance=z,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[_]=k;let q=R.shadow;if(R.map&&(i.spotLightMap[N]=R.map,N++,q.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[_]=q.matrix,R.castShadow){let V=r.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=Z,b++}_++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(H).multiplyScalar(G),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[f]=k,f++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let q=R.shadow,V=r.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,i.pointShadow[E]=V,i.pointShadowMap[E]=Z,i.pointShadowMatrix[E]=R.shadow.matrix,S++}i.point[E]=k,E++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(G),k.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[h]=k,h++}}f>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;let F=i.hash;(F.directionalLength!==m||F.pointLength!==E||F.spotLength!==_||F.rectAreaLength!==f||F.hemiLength!==h||F.numDirectionalShadows!==C||F.numPointShadows!==S||F.numSpotShadows!==b||F.numSpotMaps!==N||F.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=f,i.point.length=E,i.hemi.length=h,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+N-P,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=w,F.directionalLength=m,F.pointLength=E,F.spotLength=_,F.rectAreaLength=f,F.hemiLength=h,F.numDirectionalShadows=C,F.numPointShadows=S,F.numSpotShadows=b,F.numSpotMaps=N,F.numLightProbes=w,i.version=tf++)}function l(c,u){let d=0,p=0,m=0,E=0,_=0,f=u.matrixWorldInverse;for(let h=0,C=c.length;h<C;h++){let S=c[h];if(S.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),d++}else if(S.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),m++}else if(S.isRectAreaLight){let b=i.rectArea[E];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),s.identity(),n.copy(S.matrixWorld),n.premultiply(f),s.extractRotation(n),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),E++}else if(S.isPointLight){let b=i.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let b=i.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:i}}function eo(t){let e=new af(t),r=[],i=[];function a(u){c.camera=u,r.length=0,i.length=0}function n(u){r.push(u)}function s(u){i.push(u)}function o(){e.setup(r)}function l(u){e.setupView(r,u)}let c={lightsArray:r,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function nf(t){let e=new WeakMap;function r(a,n=0){let s=e.get(a),o;return s===void 0?(o=new eo(t),e.set(a,[o])):n>=s.length?(o=new eo(t),s.push(o)):o=s[n],o}function i(){e=new WeakMap}return{get:r,dispose:i}}var sf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,of=`uniform sampler2D shadow_pass;
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
}`;function lf(t,e,r){let i=new Io,a=new Ge,n=new Ge,s=new nt,o=new fc({depthPacking:Rl}),l=new mc,c={},u=r.maxTextureSize,d={[hr]:xt,[xt]:hr,[Jt]:Jt},p=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:sf,fragmentShader:of}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let E=new Ei;E.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Lt(E,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let h=this.type;this.render=function(P,w,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;let M=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),H=t.state;H.setBlending(cr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let G=h!==Zt&&this.type===Zt,z=h===Zt&&this.type!==Zt;for(let Z=0,k=P.length;Z<k;Z++){let q=P[Z],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);let ee=V.getFrameExtents();if(a.multiply(ee),n.copy(V.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/ee.x),a.x=n.x*ee.x,V.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/ee.y),a.y=n.y*ee.y,V.mapSize.y=n.y)),V.map===null||G===!0||z===!0){let Ue=this.type!==Zt?{minFilter:Nt,magFilter:Nt}:{};V.map!==null&&V.map.dispose(),V.map=new wr(a.x,a.y,Ue),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();let ue=V.getViewportCount();for(let Ue=0;Ue<ue;Ue++){let Ne=V.getViewport(Ue);s.set(n.x*Ne.x,n.y*Ne.y,n.x*Ne.z,n.y*Ne.w),H.viewport(s),V.updateMatrices(q,Ue),i=V.getFrustum(),b(w,F,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Zt&&C(V,F),V.needsUpdate=!1}h=this.type,f.needsUpdate=!1,t.setRenderTarget(M,x,R)};function C(P,w){let F=e.update(_);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new wr(a.x,a.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(w,null,F,p,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(w,null,F,m,_,null)}function S(P,w,F,M){let x=null,R=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)x=R;else if(x=F.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=x.uuid,G=w.uuid,z=c[H];z===void 0&&(z={},c[H]=z);let Z=z[G];Z===void 0&&(Z=x.clone(),z[G]=Z,w.addEventListener("dispose",N)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,M===Zt?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=t.properties.get(x);H.light=F}return x}function b(P,w,F,M,x){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Zt)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let H=e.update(P),G=P.material;if(Array.isArray(G)){let z=H.groups;for(let Z=0,k=z.length;Z<k;Z++){let q=z[Z],V=G[q.materialIndex];if(V&&V.visible){let ee=S(P,V,M,x);P.onBeforeShadow(t,P,w,F,H,ee,q),t.renderBufferDirect(F,null,H,ee,P,q),P.onAfterShadow(t,P,w,F,H,ee,q)}}}else if(G.visible){let z=S(P,G,M,x);P.onBeforeShadow(t,P,w,F,H,z,null),t.renderBufferDirect(F,null,H,z,P,null),P.onAfterShadow(t,P,w,F,H,z,null)}}let R=P.children;for(let H=0,G=R.length;H<G;H++)b(R[H],w,F,M,x)}function N(P){P.target.removeEventListener("dispose",N);for(let w in c){let F=c[w],M=P.target.uuid;M in F&&(F[M].dispose(),delete F[M])}}}var cf={[ja]:Ya,[qa]:Ja,[Ka]:$a,[Zr]:Za,[Ya]:ja,[Ja]:qa,[$a]:Ka,[Za]:Zr};function uf(t,e){function r(){let A=!1,oe=new nt,re=null,ge=new nt(0,0,0,0);return{setMask:function($){re!==$&&!A&&(t.colorMask($,$,$,$),re=$)},setLocked:function($){A=$},setClear:function($,Y,me,be,it){it===!0&&($*=be,Y*=be,me*=be),oe.set($,Y,me,be),ge.equals(oe)===!1&&(t.clearColor($,Y,me,be),ge.copy(oe))},reset:function(){A=!1,re=null,ge.set(-1,0,0,0)}}}function i(){let A=!1,oe=!1,re=null,ge=null,$=null;return{setReversed:function(Y){if(oe!==Y){let me=e.get("EXT_clip_control");Y?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),oe=Y;let be=$;$=null,this.setClear(be)}},getReversed:function(){return oe},setTest:function(Y){Y?ae(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(Y){re!==Y&&!A&&(t.depthMask(Y),re=Y)},setFunc:function(Y){if(oe&&(Y=cf[Y]),ge!==Y){switch(Y){case ja:t.depthFunc(t.NEVER);break;case Ya:t.depthFunc(t.ALWAYS);break;case qa:t.depthFunc(t.LESS);break;case Zr:t.depthFunc(t.LEQUAL);break;case Ka:t.depthFunc(t.EQUAL);break;case Za:t.depthFunc(t.GEQUAL);break;case Ja:t.depthFunc(t.GREATER);break;case $a:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Y}},setLocked:function(Y){A=Y},setClear:function(Y){$!==Y&&(oe&&(Y=1-Y),t.clearDepth(Y),$=Y)},reset:function(){A=!1,re=null,ge=null,$=null,oe=!1}}}function a(){let A=!1,oe=null,re=null,ge=null,$=null,Y=null,me=null,be=null,it=null;return{setTest:function(ke){A||(ke?ae(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(ke){oe!==ke&&!A&&(t.stencilMask(ke),oe=ke)},setFunc:function(ke,Dt,Ot){(re!==ke||ge!==Dt||$!==Ot)&&(t.stencilFunc(ke,Dt,Ot),re=ke,ge=Dt,$=Ot)},setOp:function(ke,Dt,Ot){(Y!==ke||me!==Dt||be!==Ot)&&(t.stencilOp(ke,Dt,Ot),Y=ke,me=Dt,be=Ot)},setLocked:function(ke){A=ke},setClear:function(ke){it!==ke&&(t.clearStencil(ke),it=ke)},reset:function(){A=!1,oe=null,re=null,ge=null,$=null,Y=null,me=null,be=null,it=null}}}let n=new r,s=new i,o=new a,l=new WeakMap,c=new WeakMap,u={},d={},p=new WeakMap,m=[],E=null,_=!1,f=null,h=null,C=null,S=null,b=null,N=null,P=null,w=new Xe(0,0,0),F=0,M=!1,x=null,R=null,H=null,G=null,z=null,Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,q=0,V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=q>=2);let ee=null,ue={},Ue=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),Je=new nt().fromArray(Ue),Ve=new nt().fromArray(Ne);function X(A,oe,re,ge){let $=new Uint8Array(4),Y=t.createTexture();t.bindTexture(A,Y),t.texParameteri(A,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(A,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let me=0;me<re;me++)A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,$):t.texImage2D(oe+me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,$);return Y}let ie={};ie[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),s.setFunc(Zr),Ee(!1),$e(is),ae(t.CULL_FACE),Fe(cr);function ae(A){u[A]!==!0&&(t.enable(A),u[A]=!0)}function xe(A){u[A]!==!1&&(t.disable(A),u[A]=!1)}function Pe(A,oe){return d[A]!==oe?(t.bindFramebuffer(A,oe),d[A]=oe,A===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=oe),A===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function fe(A,oe){let re=m,ge=!1;if(A){re=p.get(oe),re===void 0&&(re=[],p.set(oe,re));let $=A.textures;if(re.length!==$.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,me=$.length;Y<me;Y++)re[Y]=t.COLOR_ATTACHMENT0+Y;re.length=$.length,ge=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,ge=!0);ge&&t.drawBuffers(re)}function je(A){return E!==A?(t.useProgram(A),E=A,!0):!1}let y={[Sr]:t.FUNC_ADD,[Qo]:t.FUNC_SUBTRACT,[el]:t.FUNC_REVERSE_SUBTRACT};y[tl]=t.MIN,y[rl]=t.MAX;let Be={[il]:t.ZERO,[al]:t.ONE,[nl]:t.SRC_COLOR,[Wa]:t.SRC_ALPHA,[hl]:t.SRC_ALPHA_SATURATE,[cl]:t.DST_COLOR,[ol]:t.DST_ALPHA,[sl]:t.ONE_MINUS_SRC_COLOR,[Xa]:t.ONE_MINUS_SRC_ALPHA,[ul]:t.ONE_MINUS_DST_COLOR,[ll]:t.ONE_MINUS_DST_ALPHA,[dl]:t.CONSTANT_COLOR,[pl]:t.ONE_MINUS_CONSTANT_COLOR,[fl]:t.CONSTANT_ALPHA,[ml]:t.ONE_MINUS_CONSTANT_ALPHA};function Fe(A,oe,re,ge,$,Y,me,be,it,ke){if(A===cr){_===!0&&(xe(t.BLEND),_=!1);return}if(_===!1&&(ae(t.BLEND),_=!0),A!==$o){if(A!==f||ke!==M){if((h!==Sr||b!==Sr)&&(t.blendEquation(t.FUNC_ADD),h=Sr,b=Sr),ke)switch(A){case qr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case as:t.blendFunc(t.ONE,t.ONE);break;case ns:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ss:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case qr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case as:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ns:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ss:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}C=null,S=null,N=null,P=null,w.set(0,0,0),F=0,f=A,M=ke}return}$=$||oe,Y=Y||re,me=me||ge,(oe!==h||$!==b)&&(t.blendEquationSeparate(y[oe],y[$]),h=oe,b=$),(re!==C||ge!==S||Y!==N||me!==P)&&(t.blendFuncSeparate(Be[re],Be[ge],Be[Y],Be[me]),C=re,S=ge,N=Y,P=me),(be.equals(w)===!1||it!==F)&&(t.blendColor(be.r,be.g,be.b,it),w.copy(be),F=it),f=A,M=!1}function Ye(A,oe){A.side===Jt?xe(t.CULL_FACE):ae(t.CULL_FACE);let re=A.side===xt;oe&&(re=!re),Ee(re),A.blending===qr&&A.transparent===!1?Fe(cr):Fe(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),n.setMask(A.colorWrite);let ge=A.stencilWrite;o.setTest(ge),ge&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ye(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(A){x!==A&&(A?t.frontFace(t.CW):t.frontFace(t.CCW),x=A)}function $e(A){A!==Ko?(ae(t.CULL_FACE),A!==R&&(A===is?t.cullFace(t.BACK):A===Zo?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),R=A}function Te(A){A!==H&&(k&&t.lineWidth(A),H=A)}function ye(A,oe,re){A?(ae(t.POLYGON_OFFSET_FILL),(G!==oe||z!==re)&&(t.polygonOffset(oe,re),G=oe,z=re)):xe(t.POLYGON_OFFSET_FILL)}function ut(A){A?ae(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function lt(A){A===void 0&&(A=t.TEXTURE0+Z-1),ee!==A&&(t.activeTexture(A),ee=A)}function rt(A,oe,re){re===void 0&&(ee===null?re=t.TEXTURE0+Z-1:re=ee);let ge=ue[re];ge===void 0&&(ge={type:void 0,texture:void 0},ue[re]=ge),(ge.type!==A||ge.texture!==oe)&&(ee!==re&&(t.activeTexture(re),ee=re),t.bindTexture(A,oe||ie[A]),ge.type=A,ge.texture=oe)}function T(){let A=ue[ee];A!==void 0&&A.type!==void 0&&(t.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{t.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{t.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(){try{t.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function te(){try{t.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(){try{t.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{t.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{t.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(A){Je.equals(A)===!1&&(t.scissor(A.x,A.y,A.z,A.w),Je.copy(A))}function Ae(A){Ve.equals(A)===!1&&(t.viewport(A.x,A.y,A.z,A.w),Ve.copy(A))}function Se(A,oe){let re=c.get(oe);re===void 0&&(re=new WeakMap,c.set(oe,re));let ge=re.get(A);ge===void 0&&(ge=t.getUniformBlockIndex(oe,A.name),re.set(A,ge))}function le(A,oe){let re=c.get(oe).get(A);l.get(oe)!==re&&(t.uniformBlockBinding(oe,re,A.__bindingPointIndex),l.set(oe,re))}function De(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ee=null,ue={},d={},p=new WeakMap,m=[],E=null,_=!1,f=null,h=null,C=null,S=null,b=null,N=null,P=null,w=new Xe(0,0,0),F=0,M=!1,x=null,R=null,H=null,G=null,z=null,Je.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ae,disable:xe,bindFramebuffer:Pe,drawBuffers:fe,useProgram:je,setBlending:Fe,setMaterial:Ye,setFlipSided:Ee,setCullFace:$e,setLineWidth:Te,setPolygonOffset:ye,setScissorTest:ut,activeTexture:lt,bindTexture:rt,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Me,texImage3D:Q,updateUBOMapping:Se,uniformBlockBinding:le,texStorage2D:te,texStorage3D:_e,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:pe,scissor:se,viewport:Ae,reset:De}}function hf(t,e,r,i,a,n,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,g){return m?new OffscreenCanvas(T,g):aa("canvas")}function _(T,g,L){let j=1,K=rt(T);if((K.width>L||K.height>L)&&(j=L/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let W=Math.floor(j*K.width),pe=Math.floor(j*K.height);d===void 0&&(d=E(W,pe));let te=g?E(W,pe):d;return te.width=W,te.height=pe,te.getContext("2d").drawImage(T,0,0,W,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+pe+")."),te}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function f(T){return T.generateMipmaps}function h(T){t.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(T,g,L,j,K=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=g;if(g===t.RED&&(L===t.FLOAT&&(W=t.R32F),L===t.HALF_FLOAT&&(W=t.R16F),L===t.UNSIGNED_BYTE&&(W=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(W=t.R8UI),L===t.UNSIGNED_SHORT&&(W=t.R16UI),L===t.UNSIGNED_INT&&(W=t.R32UI),L===t.BYTE&&(W=t.R8I),L===t.SHORT&&(W=t.R16I),L===t.INT&&(W=t.R32I)),g===t.RG&&(L===t.FLOAT&&(W=t.RG32F),L===t.HALF_FLOAT&&(W=t.RG16F),L===t.UNSIGNED_BYTE&&(W=t.RG8)),g===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(W=t.RG8UI),L===t.UNSIGNED_SHORT&&(W=t.RG16UI),L===t.UNSIGNED_INT&&(W=t.RG32UI),L===t.BYTE&&(W=t.RG8I),L===t.SHORT&&(W=t.RG16I),L===t.INT&&(W=t.RG32I)),g===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(W=t.RGB8UI),L===t.UNSIGNED_SHORT&&(W=t.RGB16UI),L===t.UNSIGNED_INT&&(W=t.RGB32UI),L===t.BYTE&&(W=t.RGB8I),L===t.SHORT&&(W=t.RGB16I),L===t.INT&&(W=t.RGB32I)),g===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),L===t.UNSIGNED_INT&&(W=t.RGBA32UI),L===t.BYTE&&(W=t.RGBA8I),L===t.SHORT&&(W=t.RGBA16I),L===t.INT&&(W=t.RGBA32I)),g===t.RGB&&(L===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),L===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),g===t.RGBA){let pe=K?ra:He.getTransfer(j);L===t.FLOAT&&(W=t.RGBA32F),L===t.HALF_FLOAT&&(W=t.RGBA16F),L===t.UNSIGNED_BYTE&&(W=pe===We?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function b(T,g){let L;return T?g===null||g===Rr||g===pi?L=t.DEPTH24_STENCIL8:g===$t?L=t.DEPTH32F_STENCIL8:g===di&&(L=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Rr||g===pi?L=t.DEPTH_COMPONENT24:g===$t?L=t.DEPTH_COMPONENT32F:g===di&&(L=t.DEPTH_COMPONENT16),L}function N(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function P(T){let g=T.target;g.removeEventListener("dispose",P),F(g),g.isVideoTexture&&u.delete(g)}function w(T){let g=T.target;g.removeEventListener("dispose",w),x(g)}function F(T){let g=i.get(T);if(g.__webglInit===void 0)return;let L=T.source,j=p.get(L);if(j){let K=j[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(T),Object.keys(j).length===0&&p.delete(L)}i.remove(T)}function M(T){let g=i.get(T);t.deleteTexture(g.__webglTexture);let L=T.source,j=p.get(L);delete j[g.__cacheKey],s.memory.textures--}function x(T){let g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let K=0;K<g.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(g.__webglFramebuffer[j][K]);else t.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)t.deleteFramebuffer(g.__webglFramebuffer[j]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let L=T.textures;for(let j=0,K=L.length;j<K;j++){let W=i.get(L[j]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),s.memory.textures--),i.remove(L[j])}i.remove(T)}let R=0;function H(){R=0}function G(){let T=R;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),R+=1,T}function z(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function Z(T,g){let L=i.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(L,T,g);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);r.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function k(T,g){let L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){ie(L,T,g);return}r.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function q(T,g){let L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){ie(L,T,g);return}r.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function V(T,g){let L=i.get(T);if(T.version>0&&L.__version!==T.version){ae(L,T,g);return}r.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}let ee={[tn]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[rn]:t.MIRRORED_REPEAT},ue={[Nt]:t.NEAREST,[bl]:t.NEAREST_MIPMAP_NEAREST,[bi]:t.NEAREST_MIPMAP_LINEAR,[Bt]:t.LINEAR,[da]:t.LINEAR_MIPMAP_NEAREST,[br]:t.LINEAR_MIPMAP_LINEAR},Ue={[Pl]:t.NEVER,[Ol]:t.ALWAYS,[Ul]:t.LESS,[po]:t.LEQUAL,[Il]:t.EQUAL,[Dl]:t.GEQUAL,[Ll]:t.GREATER,[Nl]:t.NOTEQUAL};function Ne(T,g){if(g.type===$t&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Bt||g.magFilter===da||g.magFilter===bi||g.magFilter===br||g.minFilter===Bt||g.minFilter===da||g.minFilter===bi||g.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ee[g.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ee[g.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ee[g.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ue[g.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Ue[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nt||g.minFilter!==bi&&g.minFilter!==br||g.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Je(T,g){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",P));let j=g.source,K=p.get(j);K===void 0&&(K={},p.set(j,K));let W=z(g);if(W!==T.__cacheKey){K[W]===void 0&&(K[W]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,L=!0),K[W].usedTimes++;let pe=K[T.__cacheKey];pe!==void 0&&(K[T.__cacheKey].usedTimes--,pe.usedTimes===0&&M(g)),T.__cacheKey=W,T.__webglTexture=K[W].texture}return L}function Ve(T,g,L){return Math.floor(Math.floor(T/L)/g)}function X(T,g,L,j){let K=T.updateRanges;if(K.length===0)r.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,L,j,g.data);else{K.sort((Me,Q)=>Me.start-Q.start);let W=0;for(let Me=1;Me<K.length;Me++){let Q=K[W],se=K[Me],Ae=Q.start+Q.count,Se=Ve(se.start,g.width,4),le=Ve(Q.start,g.width,4);se.start<=Ae+1&&Se===le&&Ve(se.start+se.count-1,g.width,4)===Se?Q.count=Math.max(Q.count,se.start+se.count-Q.start):(++W,K[W]=se)}K.length=W+1;let pe=t.getParameter(t.UNPACK_ROW_LENGTH),te=t.getParameter(t.UNPACK_SKIP_PIXELS),_e=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Me=0,Q=K.length;Me<Q;Me++){let se=K[Me],Ae=Math.floor(se.start/4),Se=Math.ceil(se.count/4),le=Ae%g.width,De=Math.floor(Ae/g.width),A=Se;t.pixelStorei(t.UNPACK_SKIP_PIXELS,le),t.pixelStorei(t.UNPACK_SKIP_ROWS,De),r.texSubImage2D(t.TEXTURE_2D,0,le,De,A,1,L,j,g.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,te),t.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function ie(T,g,L){let j=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=t.TEXTURE_3D);let K=Je(T,g),W=g.source;r.bindTexture(j,T.__webglTexture,t.TEXTURE0+L);let pe=i.get(W);if(W.version!==pe.__version||K===!0){r.activeTexture(t.TEXTURE0+L);let te=He.getPrimaries(He.workingColorSpace),_e=g.colorSpace===lr?null:He.getPrimaries(g.colorSpace),Me=g.colorSpace===lr||te===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Q=_(g.image,!1,a.maxTextureSize);Q=lt(g,Q);let se=n.convert(g.format,g.colorSpace),Ae=n.convert(g.type),Se=S(g.internalFormat,se,Ae,g.colorSpace,g.isVideoTexture);Ne(j,g);let le,De=g.mipmaps,A=g.isVideoTexture!==!0,oe=pe.__version===void 0||K===!0,re=W.dataReady,ge=N(g,Q);if(g.isDepthTexture)Se=b(g.format===mi,g.type),oe&&(A?r.texStorage2D(t.TEXTURE_2D,1,Se,Q.width,Q.height):r.texImage2D(t.TEXTURE_2D,0,Se,Q.width,Q.height,0,se,Ae,null));else if(g.isDataTexture)if(De.length>0){A&&oe&&r.texStorage2D(t.TEXTURE_2D,ge,Se,De[0].width,De[0].height);for(let $=0,Y=De.length;$<Y;$++)le=De[$],A?re&&r.texSubImage2D(t.TEXTURE_2D,$,0,0,le.width,le.height,se,Ae,le.data):r.texImage2D(t.TEXTURE_2D,$,Se,le.width,le.height,0,se,Ae,le.data);g.generateMipmaps=!1}else A?(oe&&r.texStorage2D(t.TEXTURE_2D,ge,Se,Q.width,Q.height),re&&X(g,Q,se,Ae)):r.texImage2D(t.TEXTURE_2D,0,Se,Q.width,Q.height,0,se,Ae,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){A&&oe&&r.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Se,De[0].width,De[0].height,Q.depth);for(let $=0,Y=De.length;$<Y;$++)if(le=De[$],g.format!==It)if(se!==null)if(A){if(re)if(g.layerUpdates.size>0){let me=Ps(le.width,le.height,g.format,g.type);for(let be of g.layerUpdates){let it=le.data.subarray(be*me/le.data.BYTES_PER_ELEMENT,(be+1)*me/le.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,be,le.width,le.height,1,se,it)}g.clearLayerUpdates()}else r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,Q.depth,se,le.data)}else r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Se,le.width,le.height,Q.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?re&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,Q.depth,se,Ae,le.data):r.texImage3D(t.TEXTURE_2D_ARRAY,$,Se,le.width,le.height,Q.depth,0,se,Ae,le.data)}else{A&&oe&&r.texStorage2D(t.TEXTURE_2D,ge,Se,De[0].width,De[0].height);for(let $=0,Y=De.length;$<Y;$++)le=De[$],g.format!==It?se!==null?A?re&&r.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,le.width,le.height,se,le.data):r.compressedTexImage2D(t.TEXTURE_2D,$,Se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?re&&r.texSubImage2D(t.TEXTURE_2D,$,0,0,le.width,le.height,se,Ae,le.data):r.texImage2D(t.TEXTURE_2D,$,Se,le.width,le.height,0,se,Ae,le.data)}else if(g.isDataArrayTexture)if(A){if(oe&&r.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Se,Q.width,Q.height,Q.depth),re)if(g.layerUpdates.size>0){let $=Ps(Q.width,Q.height,g.format,g.type);for(let Y of g.layerUpdates){let me=Q.data.subarray(Y*$/Q.data.BYTES_PER_ELEMENT,(Y+1)*$/Q.data.BYTES_PER_ELEMENT);r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,se,Ae,me)}g.clearLayerUpdates()}else r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,se,Ae,Q.data)}else r.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,Q.width,Q.height,Q.depth,0,se,Ae,Q.data);else if(g.isData3DTexture)A?(oe&&r.texStorage3D(t.TEXTURE_3D,ge,Se,Q.width,Q.height,Q.depth),re&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,se,Ae,Q.data)):r.texImage3D(t.TEXTURE_3D,0,Se,Q.width,Q.height,Q.depth,0,se,Ae,Q.data);else if(g.isFramebufferTexture){if(oe)if(A)r.texStorage2D(t.TEXTURE_2D,ge,Se,Q.width,Q.height);else{let $=Q.width,Y=Q.height;for(let me=0;me<ge;me++)r.texImage2D(t.TEXTURE_2D,me,Se,$,Y,0,se,Ae,null),$>>=1,Y>>=1}}else if(De.length>0){if(A&&oe){let $=rt(De[0]);r.texStorage2D(t.TEXTURE_2D,ge,Se,$.width,$.height)}for(let $=0,Y=De.length;$<Y;$++)le=De[$],A?re&&r.texSubImage2D(t.TEXTURE_2D,$,0,0,se,Ae,le):r.texImage2D(t.TEXTURE_2D,$,Se,se,Ae,le);g.generateMipmaps=!1}else if(A){if(oe){let $=rt(Q);r.texStorage2D(t.TEXTURE_2D,ge,Se,$.width,$.height)}re&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,se,Ae,Q)}else r.texImage2D(t.TEXTURE_2D,0,Se,se,Ae,Q);f(g)&&h(j),pe.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ae(T,g,L){if(g.image.length!==6)return;let j=Je(T,g),K=g.source;r.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+L);let W=i.get(K);if(K.version!==W.__version||j===!0){r.activeTexture(t.TEXTURE0+L);let pe=He.getPrimaries(He.workingColorSpace),te=g.colorSpace===lr?null:He.getPrimaries(g.colorSpace),_e=g.colorSpace===lr||pe===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Me=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!Me&&!Q?se[Y]=_(g.image[Y],!0,a.maxCubemapSize):se[Y]=Q?g.image[Y].image:g.image[Y],se[Y]=lt(g,se[Y]);let Ae=se[0],Se=n.convert(g.format,g.colorSpace),le=n.convert(g.type),De=S(g.internalFormat,Se,le,g.colorSpace),A=g.isVideoTexture!==!0,oe=W.__version===void 0||j===!0,re=K.dataReady,ge=N(g,Ae);Ne(t.TEXTURE_CUBE_MAP,g);let $;if(Me){A&&oe&&r.texStorage2D(t.TEXTURE_CUBE_MAP,ge,De,Ae.width,Ae.height);for(let Y=0;Y<6;Y++){$=se[Y].mipmaps;for(let me=0;me<$.length;me++){let be=$[me];g.format!==It?Se!==null?A?re&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,be.width,be.height,Se,be.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?re&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,be.width,be.height,Se,le,be.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,De,be.width,be.height,0,Se,le,be.data)}}}else{if($=g.mipmaps,A&&oe){$.length>0&&ge++;let Y=rt(se[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,ge,De,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){A?re&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,Se,le,se[Y].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,De,se[Y].width,se[Y].height,0,Se,le,se[Y].data);for(let me=0;me<$.length;me++){let be=$[me].image[Y].image;A?re&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,be.width,be.height,Se,le,be.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,De,be.width,be.height,0,Se,le,be.data)}}else{A?re&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Se,le,se[Y]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,De,Se,le,se[Y]);for(let me=0;me<$.length;me++){let be=$[me];A?re&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,Se,le,be.image[Y]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,De,Se,le,be.image[Y])}}}f(g)&&h(t.TEXTURE_CUBE_MAP),W.__version=K.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function xe(T,g,L,j,K,W){let pe=n.convert(L.format,L.colorSpace),te=n.convert(L.type),_e=S(L.internalFormat,pe,te,L.colorSpace),Me=i.get(g),Q=i.get(L);if(Q.__renderTarget=g,!Me.__hasExternalTextures){let se=Math.max(1,g.width>>W),Ae=Math.max(1,g.height>>W);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?r.texImage3D(K,W,_e,se,Ae,g.depth,0,pe,te,null):r.texImage2D(K,W,_e,se,Ae,0,pe,te,null)}r.bindFramebuffer(t.FRAMEBUFFER,T),ye(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,Q.__webglTexture,0,Te(g)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,K,Q.__webglTexture,W),r.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(T,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,T),g.depthBuffer){let j=g.depthTexture,K=j&&j.isDepthTexture?j.type:null,W=b(g.stencilBuffer,K),pe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=Te(g);ye(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,W,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,W,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,W,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,T)}else{let j=g.textures;for(let K=0;K<j.length;K++){let W=j[K],pe=n.convert(W.format,W.colorSpace),te=n.convert(W.type),_e=S(W.internalFormat,pe,te,W.colorSpace),Me=Te(g);L&&ye(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,_e,g.width,g.height):ye(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,_e,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,_e,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let L=i.get(g.depthTexture);L.__renderTarget=g,(!L.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);let j=L.__webglTexture,K=Te(g);if(g.depthTexture.format===fi)ye(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(g.depthTexture.format===mi)ye(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function je(T){let g=i.get(T),L=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){let K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=j}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let j=T.texture.mipmaps;j&&j.length>0?fe(g.__webglFramebuffer[0],T):fe(g.__webglFramebuffer,T)}else if(L){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(r.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=t.createRenderbuffer(),Pe(g.__webglDepthbuffer[j],T,!1);else{let K=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,W)}}else{let j=T.texture.mipmaps;if(j&&j.length>0?r.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):r.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Pe(g.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,W)}}r.bindFramebuffer(t.FRAMEBUFFER,null)}function y(T,g,L){let j=i.get(T);g!==void 0&&xe(j.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&je(T)}function Be(T){let g=T.texture,L=i.get(T),j=i.get(g);T.addEventListener("dispose",w);let K=T.textures,W=T.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=g.version,s.memory.textures++),W){L.__webglFramebuffer=[];for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[te]=[];for(let _e=0;_e<g.mipmaps.length;_e++)L.__webglFramebuffer[te][_e]=t.createFramebuffer()}else L.__webglFramebuffer[te]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)L.__webglFramebuffer[te]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(pe)for(let te=0,_e=K.length;te<_e;te++){let Me=i.get(K[te]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),s.memory.textures++)}if(T.samples>0&&ye(T)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let te=0;te<K.length;te++){let _e=K[te];L.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[te]);let Me=n.convert(_e.format,_e.colorSpace),Q=n.convert(_e.type),se=S(_e.internalFormat,Me,Q,_e.colorSpace,T.isXRRenderTarget===!0),Ae=Te(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,se,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,L.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(L.__webglDepthRenderbuffer,T,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){r.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,g);for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)xe(L.__webglFramebuffer[te][_e],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e);else xe(L.__webglFramebuffer[te],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);f(g)&&h(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(pe){for(let te=0,_e=K.length;te<_e;te++){let Me=K[te],Q=i.get(Me),se=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(se,Q.__webglTexture),Ne(se,Me),xe(L.__webglFramebuffer,T,Me,t.COLOR_ATTACHMENT0+te,se,0),f(Me)&&h(se)}r.unbindTexture()}else{let te=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(te=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(te,j.__webglTexture),Ne(te,g),g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)xe(L.__webglFramebuffer[_e],T,g,t.COLOR_ATTACHMENT0,te,_e);else xe(L.__webglFramebuffer,T,g,t.COLOR_ATTACHMENT0,te,0);f(g)&&h(te),r.unbindTexture()}T.depthBuffer&&je(T)}function Fe(T){let g=T.textures;for(let L=0,j=g.length;L<j;L++){let K=g[L];if(f(K)){let W=C(T),pe=i.get(K).__webglTexture;r.bindTexture(W,pe),h(W),r.unbindTexture()}}}let Ye=[],Ee=[];function $e(T){if(T.samples>0){if(ye(T)===!1){let g=T.textures,L=T.width,j=T.height,K=t.COLOR_BUFFER_BIT,W=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(T),te=g.length>1;if(te)for(let Me=0;Me<g.length;Me++)r.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let _e=T.texture.mipmaps;_e&&_e.length>0?r.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):r.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Me=0;Me<g.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Me]);let Q=i.get(g[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,L,j,0,0,L,j,K,t.NEAREST),l===!0&&(Ye.length=0,Ee.length=0,Ye.push(t.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ye.push(W),Ee.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ye))}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let Me=0;Me<g.length;Me++){r.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Me]);let Q=i.get(g[Me]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Q,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Te(T){return Math.min(a.maxSamples,T.samples)}function ye(T){let g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ut(T){let g=s.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function lt(T,g){let L=T.colorSpace,j=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Qr&&L!==lr&&(He.getTransfer(L)===We?(j!==It||K!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=y,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ye}function df(t,e){function r(i,a=lr){let n,s=He.getTransfer(a);if(i===er)return t.UNSIGNED_BYTE;if(i===Fn)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bn)return t.UNSIGNED_SHORT_5_5_5_1;if(i===so)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===oo)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ao)return t.BYTE;if(i===no)return t.SHORT;if(i===di)return t.UNSIGNED_SHORT;if(i===On)return t.INT;if(i===Rr)return t.UNSIGNED_INT;if(i===$t)return t.FLOAT;if(i===_i)return t.HALF_FLOAT;if(i===lo)return t.ALPHA;if(i===co)return t.RGB;if(i===It)return t.RGBA;if(i===fi)return t.DEPTH_COMPONENT;if(i===mi)return t.DEPTH_STENCIL;if(i===uo)return t.RED;if(i===zn)return t.RED_INTEGER;if(i===ho)return t.RG;if(i===Hn)return t.RG_INTEGER;if(i===Vn)return t.RGBA_INTEGER;if(i===qi||i===Ki||i===Zi||i===Ji)if(s===We)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===qi)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ki)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zi)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ji)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===qi)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ki)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zi)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ji)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===an||i===nn||i===sn||i===on)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===an)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===on)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ln||i===cn||i===un)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===ln||i===cn)return s===We?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===un)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hn||i===dn||i===pn||i===fn||i===mn||i===gn||i===_n||i===vn||i===xn||i===En||i===Mn||i===Sn||i===Tn||i===yn)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===hn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_n)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===En)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bn||i===An||i===Rn)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===bn)return s===We?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===An)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wn||i===Cn||i===Pn||i===Un)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===wn)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Cn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Un)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pi?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:r}}var pf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ff=`
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

}`,mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let r=new No(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,r=new Vt({vertexShader:pf,fragmentShader:ff,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new oa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gf=class extends ti{constructor(t,e){super();let r=this,i=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,u=null,d=null,p=null,m=null,E=typeof XRWebGLBinding<"u",_=new mf,f={},h=e.getContextAttributes(),C=null,S=null,b=[],N=[],P=new Ge,w=null,F=new Ut;F.viewport=new nt;let M=new Ut;M.viewport=new nt;let x=[F,M],R=new Rc,H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=b[X];return ie===void 0&&(ie=new Oa,b[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=b[X];return ie===void 0&&(ie=new Oa,b[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=b[X];return ie===void 0&&(ie=new Oa,b[X]=ie),ie.getHandSpace()};function z(X){let ie=N.indexOf(X.inputSource);if(ie===-1)return;let ae=b[ie];ae!==void 0&&(ae.update(X.inputSource,X.frame,l||n),ae.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",k);for(let X=0;X<b.length;X++){let ie=N[X];ie!==null&&(N[X]=null,b[X].disconnect(ie))}H=null,G=null,_.reset();for(let X in f)delete f[X];t.setRenderTarget(C),p=null,d=null,u=null,i=null,S=null,Ve.stop(),r.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){s=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&E&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(C=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ae=null,xe=null;h.depth&&(xe=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ie=h.stencil?mi:fi,ae=h.stencil?pi:Rr);let Pe={colorFormat:e.RGBA8,depthFormat:xe,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new wr(d.textureWidth,d.textureHeight,{format:It,type:er,depthTexture:new Lo(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,e,ie),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new wr(p.framebufferWidth,p.framebufferHeight,{format:It,type:er,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await i.requestReferenceSpace(s),Ve.setContext(i),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(X){for(let ie=0;ie<X.removed.length;ie++){let ae=X.removed[ie],xe=N.indexOf(ae);xe>=0&&(N[xe]=null,b[xe].disconnect(ae))}for(let ie=0;ie<X.added.length;ie++){let ae=X.added[ie],xe=N.indexOf(ae);if(xe===-1){for(let fe=0;fe<b.length;fe++)if(fe>=N.length){N.push(ae),xe=fe;break}else if(N[fe]===null){N[fe]=ae,xe=fe;break}if(xe===-1)break}let Pe=b[xe];Pe&&Pe.connect(ae)}}let q=new O,V=new O;function ee(X,ie,ae){q.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition(ae.matrixWorld);let xe=q.distanceTo(V),Pe=ie.projectionMatrix.elements,fe=ae.projectionMatrix.elements,je=Pe[14]/(Pe[10]-1),y=Pe[14]/(Pe[10]+1),Be=(Pe[9]+1)/Pe[5],Fe=(Pe[9]-1)/Pe[5],Ye=(Pe[8]-1)/Pe[0],Ee=(fe[8]+1)/fe[0],$e=je*Ye,Te=je*Ee,ye=xe/(-Ye+Ee),ut=ye*-Ye;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ut),X.translateZ(ye),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pe[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let lt=je+ye,rt=y+ye,T=$e-ut,g=Te+(xe-ut),L=Be*y/rt*lt,j=Fe*y/rt*lt;X.projectionMatrix.makePerspective(T,g,L,j,lt,rt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ue(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ie=X.near,ae=X.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),R.near=M.near=F.near=ie,R.far=M.far=F.far=ae,(H!==R.near||G!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,G=R.far),R.layers.mask=X.layers.mask|6,F.layers.mask=R.layers.mask&3,M.layers.mask=R.layers.mask&5;let xe=X.parent,Pe=R.cameras;ue(R,xe);for(let fe=0;fe<Pe.length;fe++)ue(Pe[fe],xe);Pe.length===2?ee(R,F,M):R.projectionMatrix.copy(F.projectionMatrix),Ue(X,R,xe)};function Ue(X,ie,ae){ae===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(ae.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ln*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&p===null))return o},this.setFoveation=function(X){o=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(X){return f[X]};let Ne=null;function Je(X,ie){if(c=ie.getViewerPose(l||n),m=ie,c!==null){let ae=c.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let xe=!1;ae.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let fe=0;fe<ae.length;fe++){let je=ae[fe],y=null;if(p!==null)y=p.getViewport(je);else{let Fe=u.getViewSubImage(d,je);y=Fe.viewport,fe===0&&(t.setRenderTargetTextures(S,Fe.colorTexture,Fe.depthStencilTexture),t.setRenderTarget(S))}let Be=x[fe];Be===void 0&&(Be=new Ut,Be.layers.enable(fe),Be.viewport=new nt,x[fe]=Be),Be.matrix.fromArray(je.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(je.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(y.x,y.y,y.width,y.height),fe===0&&(R.matrix.copy(Be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(Be)}let Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&E){u=r.getBinding();let fe=u.getDepthInformation(ae[0]);fe&&fe.isValid&&fe.texture&&_.init(fe,i.renderState)}if(Pe&&Pe.includes("camera-access")&&E){t.state.unbindTexture(),u=r.getBinding();for(let fe=0;fe<ae.length;fe++){let je=ae[fe].camera;if(je){let y=f[je];y||(y=new No,f[je]=y);let Be=u.getCameraImage(je);y.sourceTexture=Be}}}}for(let ae=0;ae<b.length;ae++){let xe=N[ae],Pe=b[ae];xe!==null&&Pe!==void 0&&Pe.update(xe,ie,l||n)}Ne&&Ne(X,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),m=null}let Ve=new Fo;Ve.setAnimationLoop(Je),this.setAnimationLoop=function(X){Ne=X},this.dispose=function(){}}},xr=new Cr,_f=new mt;function vf(t,e){function r(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,wo(t)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function a(f,h,C,S,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?n(f,h):h.isMeshToonMaterial?(n(f,h),d(f,h)):h.isMeshPhongMaterial?(n(f,h),u(f,h)):h.isMeshStandardMaterial?(n(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,b)):h.isMeshMatcapMaterial?(n(f,h),E(f,h)):h.isMeshDepthMaterial?n(f,h):h.isMeshDistanceMaterial?(n(f,h),_(f,h)):h.isMeshNormalMaterial?n(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,C,S):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function n(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,r(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,r(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,r(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===xt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,r(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===xt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,r(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,r(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,r(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let C=e.get(h),S=C.envMap,b=C.envMapRotation;S&&(f.envMap.value=S,xr.copy(b),xr.x*=-1,xr.y*=-1,xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),f.envMapRotation.value.setFromMatrix4(_f.makeRotationFromEuler(xr)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,r(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,r(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,r(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,C,S){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*C,f.scale.value=S*.5,h.map&&(f.map.value=h.map,r(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,r(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,r(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,r(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,r(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,r(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,C){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,r(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,r(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,r(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,r(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,r(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,r(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,r(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=C.texture,f.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,r(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,r(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,r(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,r(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,r(h.specularIntensityMap,f.specularIntensityMapTransform))}function E(f,h){h.matcap&&(f.matcap.value=h.matcap)}function _(f,h){let C=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(C.matrixWorld),f.nearDistance.value=C.shadow.camera.near,f.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function xf(t,e,r,i){let a={},n={},s=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,S){let b=S.program;i.uniformBlockBinding(C,b)}function c(C,S){let b=a[C.id];b===void 0&&(E(C),b=u(C),a[C.id]=b,C.addEventListener("dispose",f));let N=S.program;i.updateUBOMapping(C,N);let P=e.render.frame;n[C.id]!==P&&(p(C),n[C.id]=P)}function u(C){let S=d();C.__bindingPointIndex=S;let b=t.createBuffer(),N=C.__size,P=C.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,N,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,b),b}function d(){for(let C=0;C<o;C++)if(s.indexOf(C)===-1)return s.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){let S=a[C.id],b=C.uniforms,N=C.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let P=0,w=b.length;P<w;P++){let F=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,x=F.length;M<x;M++){let R=F[M];if(m(R,P,M,N)===!0){let H=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],z=0;for(let Z=0;Z<G.length;Z++){let k=G[Z],q=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,H+z,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(C,S,b,N){let P=C.value,w=S+"_"+b;if(N[w]===void 0)return typeof P=="number"||typeof P=="boolean"?N[w]=P:N[w]=P.clone(),!0;{let F=N[w];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return N[w]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function E(C){let S=C.uniforms,b=0,N=16;for(let w=0,F=S.length;w<F;w++){let M=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,R=M.length;x<R;x++){let H=M[x],G=Array.isArray(H.value)?H.value:[H.value];for(let z=0,Z=G.length;z<Z;z++){let k=G[z],q=_(k),V=b%N,ee=V%q.boundary,ue=V+ee;b+=ee,ue!==0&&N-ue<q.storage&&(b+=N-ue),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=q.storage}}}let P=b%N;return P>0&&(b+=N-P),C.__size=b,C.__cache={},this}function _(C){let S={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=48,S.storage=48):C.isMatrix4?(S.boundary=64,S.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),S}function f(C){let S=C.target;S.removeEventListener("dispose",f);let b=s.indexOf(S.__bindingPointIndex);s.splice(b,1),t.deleteBuffer(a[S.id]),delete a[S.id],delete n[S.id]}function h(){for(let C in a)t.deleteBuffer(a[C]);s=[],a={},n={}}return{bind:l,update:c,dispose:h}}var Go=class{constructor(t={}){let{canvas:e=Bl(),context:r=null,depth:i=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=n;let m=new Uint32Array(4),E=new Int32Array(4),_=null,f=null,h=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,b=!1;this._outputColorSpace=vt;let N=0,P=0,w=null,F=-1,M=null,x=new nt,R=new nt,H=null,G=new Xe(0),z=0,Z=e.width,k=e.height,q=1,V=null,ee=null,ue=new nt(0,0,Z,k),Ue=new nt(0,0,Z,k),Ne=!1,Je=new Io,Ve=!1,X=!1,ie=new mt,ae=new O,xe=new nt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function je(){return w===null?q:1}let y=r;function Be(v,I){return e.getContext(v,I)}try{let v={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",oe,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",ge,!1),y===null){let I="webgl2";if(y=Be(I,v),y===null)throw Be(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Fe,Ye,Ee,$e,Te,ye,ut,lt,rt,T,g,L,j,K,W,pe,te,_e,Me,Q,se,Ae,Se,le;function De(){Fe=new Cd(y),Fe.init(),Ae=new df(y,Fe),Ye=new Sd(y,Fe,t,Ae),Ee=new uf(y,Fe),Ye.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),$e=new Id(y),Te=new Zp,ye=new hf(y,Fe,Ee,Te,Ye,Ae,$e),ut=new yd(S),lt=new wd(S),rt=new Bc(y),Se=new Ed(y,rt),T=new Pd(y,rt,$e,Se),g=new Nd(y,T,rt,$e),Me=new Ld(y,Ye,ye),pe=new Td(Te),L=new Kp(S,ut,lt,Fe,Ye,Se,pe),j=new vf(S,Te),K=new $p,W=new nf(Fe),_e=new xd(S,ut,lt,Ee,g,p,o),te=new lf(S,g,Ye),le=new xf(y,$e,Ye,Ee),Q=new Md(y,Fe,$e),se=new Ud(y,Fe,$e),$e.programs=L.programs,S.capabilities=Ye,S.extensions=Fe,S.properties=Te,S.renderLists=K,S.shadowMap=te,S.state=Ee,S.info=$e}De();let A=new gf(S,y);this.xr=A,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let v=Fe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Fe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(v){v!==void 0&&(q=v,this.setSize(Z,k,!1))},this.getSize=function(v){return v.set(Z,k)},this.setSize=function(v,I,D=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,k=I,e.width=Math.floor(v*q),e.height=Math.floor(I*q),D===!0&&(e.style.width=v+"px",e.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Z*q,k*q).floor()},this.setDrawingBufferSize=function(v,I,D){Z=v,k=I,q=D,e.width=Math.floor(v*D),e.height=Math.floor(I*D),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(x)},this.getViewport=function(v){return v.copy(ue)},this.setViewport=function(v,I,D,B){v.isVector4?ue.set(v.x,v.y,v.z,v.w):ue.set(v,I,D,B),Ee.viewport(x.copy(ue).multiplyScalar(q).round())},this.getScissor=function(v){return v.copy(Ue)},this.setScissor=function(v,I,D,B){v.isVector4?Ue.set(v.x,v.y,v.z,v.w):Ue.set(v,I,D,B),Ee.scissor(R.copy(Ue).multiplyScalar(q).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(v){Ee.setScissorTest(Ne=v)},this.setOpaqueSort=function(v){V=v},this.setTransparentSort=function(v){ee=v},this.getClearColor=function(v){return v.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,D=!0){let B=0;if(v){let U=!1;if(w!==null){let J=w.texture.format;U=J===Vn||J===Hn||J===zn}if(U){let J=w.texture.type,ce=J===er||J===Rr||J===di||J===pi||J===Fn||J===Bn,he=_e.getClearColor(),de=_e.getClearAlpha(),Re=he.r,Ce=he.g,we=he.b;ce?(m[0]=Re,m[1]=Ce,m[2]=we,m[3]=de,y.clearBufferuiv(y.COLOR,0,m)):(E[0]=Re,E[1]=Ce,E[2]=we,E[3]=de,y.clearBufferiv(y.COLOR,0,E))}else B|=y.COLOR_BUFFER_BIT}I&&(B|=y.DEPTH_BUFFER_BIT),D&&(B|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),_e.dispose(),K.dispose(),W.dispose(),Te.dispose(),ut.dispose(),lt.dispose(),g.dispose(),Se.dispose(),le.dispose(),L.dispose(),A.dispose(),A.removeEventListener("sessionstart",Dt),A.removeEventListener("sessionend",Ot),dr.stop()};function oe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let v=$e.autoReset,I=te.enabled,D=te.autoUpdate,B=te.needsUpdate,U=te.type;De(),$e.autoReset=v,te.enabled=I,te.autoUpdate=D,te.needsUpdate=B,te.type=U}function ge(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $(v){let I=v.target;I.removeEventListener("dispose",$),Y(I)}function Y(v){me(v),Te.remove(v)}function me(v){let I=Te.get(v).programs;I!==void 0&&(I.forEach(function(D){L.releaseProgram(D)}),v.isShaderMaterial&&L.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,D,B,U,J){I===null&&(I=Pe);let ce=U.isMesh&&U.matrixWorld.determinant()<0,he=ko(v,I,D,B,U);Ee.setMaterial(B,ce);let de=D.index,Re=1;if(B.wireframe===!0){if(de=T.getWireframeAttribute(D),de===void 0)return;Re=2}let Ce=D.drawRange,we=D.attributes.position,ze=Ce.start*Re,qe=(Ce.start+Ce.count)*Re;J!==null&&(ze=Math.max(ze,J.start*Re),qe=Math.min(qe,(J.start+J.count)*Re)),de!==null?(ze=Math.max(ze,0),qe=Math.min(qe,de.count)):we!=null&&(ze=Math.max(ze,0),qe=Math.min(qe,we.count));let Ze=qe-ze;if(Ze<0||Ze===1/0)return;Se.setup(U,B,he,D,de);let Qe,Ke=Q;if(de!==null&&(Qe=rt.get(de),Ke=se,Ke.setIndex(Qe)),U.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*je()),Ke.setMode(y.LINES)):Ke.setMode(y.TRIANGLES);else if(U.isLine){let ve=B.linewidth;ve===void 0&&(ve=1),Ee.setLineWidth(ve*je()),U.isLineSegments?Ke.setMode(y.LINES):U.isLineLoop?Ke.setMode(y.LINE_LOOP):Ke.setMode(y.LINE_STRIP)}else U.isPoints?Ke.setMode(y.POINTS):U.isSprite&&Ke.setMode(y.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)gi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let ve=U._multiDrawStarts,ht=U._multiDrawCounts,Wt=U._multiDrawCount,At=de?rt.get(de).bytesPerElement:1,Pr=Te.get(B).currentProgram.getUniforms();for(let Et=0;Et<Wt;Et++)Pr.setValue(y,"_gl_DrawID",Et),Ke.render(ve[Et]/At,ht[Et])}else if(U.isInstancedMesh)Ke.renderInstances(ze,Ze,U.count);else if(D.isInstancedBufferGeometry){let ve=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,ht=Math.min(D.instanceCount,ve);Ke.renderInstances(ze,Ze,ht)}else Ke.render(ze,Ze)};function be(v,I,D){v.transparent===!0&&v.side===Jt&&v.forceSinglePass===!1?(v.side=xt,v.needsUpdate=!0,yi(v,I,D),v.side=hr,v.needsUpdate=!0,yi(v,I,D),v.side=Jt):yi(v,I,D)}this.compile=function(v,I,D=null){D===null&&(D=v),f=W.get(D),f.init(I),C.push(f),D.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),v!==D&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let B=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let J=U.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){let he=J[ce];be(he,D,U),B.add(he)}else be(J,D,U),B.add(J)}),f=C.pop(),B},this.compileAsync=function(v,I,D=null){let B=this.compile(v,I,D);return new Promise(U=>{function J(){if(B.forEach(function(ce){Te.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){U(v);return}setTimeout(J,10)}Fe.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let it=null;function ke(v){it&&it(v)}function Dt(){dr.stop()}function Ot(){dr.start()}let dr=new Fo;dr.setAnimationLoop(ke),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(v){it=v,A.setAnimationLoop(v),v===null?dr.stop():dr.start()},A.addEventListener("sessionstart",Dt),A.addEventListener("sessionend",Ot),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(I),I=A.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,I,w),f=W.get(v,C.length),f.init(I),C.push(f),ie.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Je.setFromProjectionMatrix(ie,zt,I.reversedDepth),X=this.localClippingEnabled,Ve=pe.init(this.clippingPlanes,X),_=K.get(v,h.length),_.init(),h.push(_),A.enabled===!0&&A.isPresenting===!0){let J=S.xr.getDepthSensingMesh();J!==null&&ua(J,I,-1/0,S.sortObjects)}ua(v,I,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(V,ee),fe=A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1,fe&&_e.addToRenderList(_,v),this.info.render.frame++,Ve===!0&&pe.beginShadows();let D=f.state.shadowsArray;te.render(D,v,I),Ve===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=_.opaque,U=_.transmissive;if(f.setupLights(),I.isArrayCamera){let J=I.cameras;if(U.length>0)for(let ce=0,he=J.length;ce<he;ce++){let de=J[ce];Zn(B,U,v,de)}fe&&_e.render(v);for(let ce=0,he=J.length;ce<he;ce++){let de=J[ce];Kn(_,v,de,de.viewport)}}else U.length>0&&Zn(B,U,v,I),fe&&_e.render(v),Kn(_,v,I);w!==null&&P===0&&(ye.updateMultisampleRenderTarget(w),ye.updateRenderTargetMipmap(w)),v.isScene===!0&&v.onAfterRender(S,v,I),Se.resetDefaultState(),F=-1,M=null,C.pop(),C.length>0?(f=C[C.length-1],Ve===!0&&pe.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ua(v,I,D,B){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)D=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Je.intersectsSprite(v)){B&&xe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ie);let J=g.update(v),ce=v.material;ce.visible&&_.push(v,J,ce,D,xe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Je.intersectsObject(v))){let J=g.update(v),ce=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),xe.copy(v.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),xe.copy(J.boundingSphere.center)),xe.applyMatrix4(v.matrixWorld).applyMatrix4(ie)),Array.isArray(ce)){let he=J.groups;for(let de=0,Re=he.length;de<Re;de++){let Ce=he[de],we=ce[Ce.materialIndex];we&&we.visible&&_.push(v,J,we,D,xe.z,Ce)}}else ce.visible&&_.push(v,J,ce,D,xe.z,null)}}let U=v.children;for(let J=0,ce=U.length;J<ce;J++)ua(U[J],I,D,B)}function Kn(v,I,D,B){let U=v.opaque,J=v.transmissive,ce=v.transparent;f.setupLightsView(D),Ve===!0&&pe.setGlobalState(S.clippingPlanes,D),B&&Ee.viewport(x.copy(B)),U.length>0&&Ti(U,I,D),J.length>0&&Ti(J,I,D),ce.length>0&&Ti(ce,I,D),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Zn(v,I,D,B){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new wr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?_i:er,minFilter:br,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));let U=f.state.transmissionRenderTarget[B.id],J=B.viewport||x;U.setSize(J.z*S.transmissionResolutionScale,J.w*S.transmissionResolutionScale);let ce=S.getRenderTarget(),he=S.getActiveCubeFace(),de=S.getActiveMipmapLevel();S.setRenderTarget(U),S.getClearColor(G),z=S.getClearAlpha(),z<1&&S.setClearColor(16777215,.5),S.clear(),fe&&_e.render(D);let Re=S.toneMapping;S.toneMapping=ur;let Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Ve===!0&&pe.setGlobalState(S.clippingPlanes,B),Ti(v,D,B),ye.updateMultisampleRenderTarget(U),ye.updateRenderTargetMipmap(U),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ze=0,qe=I.length;ze<qe;ze++){let Ze=I[ze],Qe=Ze.object,Ke=Ze.geometry,ve=Ze.material,ht=Ze.group;if(ve.side===Jt&&Qe.layers.test(B.layers)){let Wt=ve.side;ve.side=xt,ve.needsUpdate=!0,Jn(Qe,D,B,Ke,ve,ht),ve.side=Wt,ve.needsUpdate=!0,we=!0}}we===!0&&(ye.updateMultisampleRenderTarget(U),ye.updateRenderTargetMipmap(U))}S.setRenderTarget(ce,he,de),S.setClearColor(G,z),Ce!==void 0&&(B.viewport=Ce),S.toneMapping=Re}function Ti(v,I,D){let B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,J=v.length;U<J;U++){let ce=v[U],he=ce.object,de=ce.geometry,Re=ce.group,Ce=ce.material;Ce.allowOverride===!0&&B!==null&&(Ce=B),he.layers.test(D.layers)&&Jn(he,I,D,de,Ce,Re)}}function Jn(v,I,D,B,U,J){v.onBeforeRender(S,I,D,B,U,J),v.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,I,D,B,v,J),U.transparent===!0&&U.side===Jt&&U.forceSinglePass===!1?(U.side=xt,U.needsUpdate=!0,S.renderBufferDirect(D,I,B,U,v,J),U.side=hr,U.needsUpdate=!0,S.renderBufferDirect(D,I,B,U,v,J),U.side=Jt):S.renderBufferDirect(D,I,B,U,v,J),v.onAfterRender(S,I,D,B,U,J)}function yi(v,I,D){I.isScene!==!0&&(I=Pe);let B=Te.get(v),U=f.state.lights,J=f.state.shadowsArray,ce=U.state.version,he=L.getParameters(v,U.state,J,I,D),de=L.getProgramCacheKey(he),Re=B.programs;B.environment=v.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(v.isMeshStandardMaterial?lt:ut).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",$),Re=new Map,B.programs=Re);let Ce=Re.get(de);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===ce)return Qn(v,he),Ce}else he.uniforms=L.getUniforms(v),v.onBeforeCompile(he,S),Ce=L.acquireProgram(he,de),Re.set(de,Ce),B.uniforms=he.uniforms;let we=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(we.clippingPlanes=pe.uniform),Qn(v,he),B.needsLights=Xo(v),B.lightsStateVersion=ce,B.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMap.value=U.state.directionalShadowMap,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotShadowMap.value=U.state.spotShadowMap,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMap.value=U.state.pointShadowMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function $n(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=ea.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Qn(v,I){let D=Te.get(v);D.outputColorSpace=I.outputColorSpace,D.batching=I.batching,D.batchingColor=I.batchingColor,D.instancing=I.instancing,D.instancingColor=I.instancingColor,D.instancingMorph=I.instancingMorph,D.skinning=I.skinning,D.morphTargets=I.morphTargets,D.morphNormals=I.morphNormals,D.morphColors=I.morphColors,D.morphTargetsCount=I.morphTargetsCount,D.numClippingPlanes=I.numClippingPlanes,D.numIntersection=I.numClipIntersection,D.vertexAlphas=I.vertexAlphas,D.vertexTangents=I.vertexTangents,D.toneMapping=I.toneMapping}function ko(v,I,D,B,U){I.isScene!==!0&&(I=Pe),ye.resetTextureUnits();let J=I.fog,ce=B.isMeshStandardMaterial?I.environment:null,he=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Qr,de=(B.isMeshStandardMaterial?lt:ut).get(B.envMap||ce),Re=B.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Ce=!!D.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!D.morphAttributes.position,ze=!!D.morphAttributes.normal,qe=!!D.morphAttributes.color,Ze=ur;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ze=S.toneMapping);let Qe=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Ke=Qe!==void 0?Qe.length:0,ve=Te.get(B),ht=f.state.lights;if(Ve===!0&&(X===!0||v!==M)){let dt=v===M&&B.id===F;pe.setState(B,v,dt)}let Wt=!1;B.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==ht.state.version||ve.outputColorSpace!==he||U.isBatchedMesh&&ve.batching===!1||!U.isBatchedMesh&&ve.batching===!0||U.isBatchedMesh&&ve.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ve.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ve.instancing===!1||!U.isInstancedMesh&&ve.instancing===!0||U.isSkinnedMesh&&ve.skinning===!1||!U.isSkinnedMesh&&ve.skinning===!0||U.isInstancedMesh&&ve.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ve.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ve.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ve.instancingMorph===!1&&U.morphTexture!==null||ve.envMap!==de||B.fog===!0&&ve.fog!==J||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==pe.numPlanes||ve.numIntersection!==pe.numIntersection)||ve.vertexAlphas!==Re||ve.vertexTangents!==Ce||ve.morphTargets!==we||ve.morphNormals!==ze||ve.morphColors!==qe||ve.toneMapping!==Ze||ve.morphTargetsCount!==Ke)&&(Wt=!0):(Wt=!0,ve.__version=B.version);let At=ve.currentProgram;Wt===!0&&(At=yi(B,I,U));let Pr=!1,Et=!1,ai=!1,et=At.getUniforms(),Tt=ve.uniforms;if(Ee.useProgram(At.program)&&(Pr=!0,Et=!0,ai=!0),B.id!==F&&(F=B.id,Et=!0),Pr||M!==v){Ee.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),et.setValue(y,"projectionMatrix",v.projectionMatrix),et.setValue(y,"viewMatrix",v.matrixWorldInverse);let dt=et.map.cameraPosition;dt!==void 0&&dt.setValue(y,ae.setFromMatrixPosition(v.matrixWorld)),Ye.logarithmicDepthBuffer&&et.setValue(y,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&et.setValue(y,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Et=!0,ai=!0)}if(U.isSkinnedMesh){et.setOptional(y,U,"bindMatrix"),et.setOptional(y,U,"bindMatrixInverse");let dt=U.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),et.setValue(y,"boneTexture",dt.boneTexture,ye))}U.isBatchedMesh&&(et.setOptional(y,U,"batchingTexture"),et.setValue(y,"batchingTexture",U._matricesTexture,ye),et.setOptional(y,U,"batchingIdTexture"),et.setValue(y,"batchingIdTexture",U._indirectTexture,ye),et.setOptional(y,U,"batchingColorTexture"),U._colorsTexture!==null&&et.setValue(y,"batchingColorTexture",U._colorsTexture,ye));let yt=D.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&Me.update(U,D,At),(Et||ve.receiveShadow!==U.receiveShadow)&&(ve.receiveShadow=U.receiveShadow,et.setValue(y,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Tt.envMap.value=de,Tt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(Tt.envMapIntensity.value=I.environmentIntensity),Et&&(et.setValue(y,"toneMappingExposure",S.toneMappingExposure),ve.needsLights&&Wo(Tt,ai),J&&B.fog===!0&&j.refreshFogUniforms(Tt,J),j.refreshMaterialUniforms(Tt,B,q,k,f.state.transmissionRenderTarget[v.id]),ea.upload(y,$n(ve),Tt,ye)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ea.upload(y,$n(ve),Tt,ye),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&et.setValue(y,"center",U.center),et.setValue(y,"modelViewMatrix",U.modelViewMatrix),et.setValue(y,"normalMatrix",U.normalMatrix),et.setValue(y,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let dt=B.uniformsGroups;for(let Rt=0,ha=dt.length;Rt<ha;Rt++){let pr=dt[Rt];le.update(pr,At),le.bind(pr,At)}}return At}function Wo(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Xo(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(v,I,D){let B=Te.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Te.get(v.texture).__webglTexture=I,Te.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:D,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let D=Te.get(v);D.__webglFramebuffer=I,D.__useDefaultFramebuffer=I===void 0};let jo=y.createFramebuffer();this.setRenderTarget=function(v,I=0,D=0){w=v,N=I,P=D;let B=!0,U=null,J=!1,ce=!1;if(v){let he=Te.get(v);if(he.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(y.FRAMEBUFFER,null),B=!1;else if(he.__webglFramebuffer===void 0)ye.setupRenderTarget(v);else if(he.__hasExternalTextures)ye.rebindTextures(v,Te.get(v.texture).__webglTexture,Te.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ce=v.depthTexture;if(he.__boundDepthTexture!==Ce){if(Ce!==null&&Te.has(Ce)&&(v.width!==Ce.image.width||v.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(v)}}let de=v.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(ce=!0);let Re=Te.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?U=Re[I][D]:U=Re[I],J=!0):v.samples>0&&ye.useMultisampledRTT(v)===!1?U=Te.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[D]:U=Re,x.copy(v.viewport),R.copy(v.scissor),H=v.scissorTest}else x.copy(ue).multiplyScalar(q).floor(),R.copy(Ue).multiplyScalar(q).floor(),H=Ne;if(D!==0&&(U=jo),Ee.bindFramebuffer(y.FRAMEBUFFER,U)&&B&&Ee.drawBuffers(v,U),Ee.viewport(x),Ee.scissor(R),Ee.setScissorTest(H),J){let he=Te.get(v.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,D)}else if(ce){let he=I;for(let de=0;de<v.textures.length;de++){let Re=Te.get(v.textures[de]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+de,Re.__webglTexture,D,he)}}else if(v!==null&&D!==0){let he=Te.get(v.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,he.__webglTexture,D)}F=-1},this.readRenderTargetPixels=function(v,I,D,B,U,J,ce,he=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){Ee.bindFramebuffer(y.FRAMEBUFFER,de);try{let Re=v.textures[he],Ce=Re.format,we=Re.type;if(!Ye.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-B&&D>=0&&D<=v.height-U&&(v.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+he),y.readPixels(I,D,B,U,Ae.convert(Ce),Ae.convert(we),J))}finally{let Re=w!==null?Te.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(y.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,I,D,B,U,J,ce,he=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de)if(I>=0&&I<=v.width-B&&D>=0&&D<=v.height-U){Ee.bindFramebuffer(y.FRAMEBUFFER,de);let Re=v.textures[he],Ce=Re.format,we=Re.type;if(!Ye.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,ze),y.bufferData(y.PIXEL_PACK_BUFFER,J.byteLength,y.STREAM_READ),v.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+he),y.readPixels(I,D,B,U,Ae.convert(Ce),Ae.convert(we),0);let qe=w!==null?Te.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(y.FRAMEBUFFER,qe);let Ze=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await zl(y,Ze,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,ze),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,J),y.deleteBuffer(ze),y.deleteSync(Ze),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,D=0){let B=Math.pow(2,-D),U=Math.floor(v.image.width*B),J=Math.floor(v.image.height*B),ce=I!==null?I.x:0,he=I!==null?I.y:0;ye.setTexture2D(v,0),y.copyTexSubImage2D(y.TEXTURE_2D,D,0,0,ce,he,U,J),Ee.unbindTexture()};let Yo=y.createFramebuffer(),qo=y.createFramebuffer();this.copyTextureToTexture=function(v,I,D=null,B=null,U=0,J=null){J===null&&(U!==0?(gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let ce,he,de,Re,Ce,we,ze,qe,Ze,Qe=v.isCompressedTexture?v.mipmaps[J]:v.image;if(D!==null)ce=D.max.x-D.min.x,he=D.max.y-D.min.y,de=D.isBox3?D.max.z-D.min.z:1,Re=D.min.x,Ce=D.min.y,we=D.isBox3?D.min.z:0;else{let yt=Math.pow(2,-U);ce=Math.floor(Qe.width*yt),he=Math.floor(Qe.height*yt),v.isDataArrayTexture?de=Qe.depth:v.isData3DTexture?de=Math.floor(Qe.depth*yt):de=1,Re=0,Ce=0,we=0}B!==null?(ze=B.x,qe=B.y,Ze=B.z):(ze=0,qe=0,Ze=0);let Ke=Ae.convert(I.format),ve=Ae.convert(I.type),ht;I.isData3DTexture?(ye.setTexture3D(I,0),ht=y.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(ye.setTexture2DArray(I,0),ht=y.TEXTURE_2D_ARRAY):(ye.setTexture2D(I,0),ht=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,I.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,I.unpackAlignment);let Wt=y.getParameter(y.UNPACK_ROW_LENGTH),At=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Pr=y.getParameter(y.UNPACK_SKIP_PIXELS),Et=y.getParameter(y.UNPACK_SKIP_ROWS),ai=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Qe.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Qe.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Re),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ce),y.pixelStorei(y.UNPACK_SKIP_IMAGES,we);let et=v.isDataArrayTexture||v.isData3DTexture,Tt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let yt=Te.get(v),dt=Te.get(I),Rt=Te.get(yt.__renderTarget),ha=Te.get(dt.__renderTarget);Ee.bindFramebuffer(y.READ_FRAMEBUFFER,Rt.__webglFramebuffer),Ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let pr=0;pr<de;pr++)et&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Te.get(v).__webglTexture,U,we+pr),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Te.get(I).__webglTexture,J,Ze+pr)),y.blitFramebuffer(Re,Ce,ce,he,ze,qe,ce,he,y.DEPTH_BUFFER_BIT,y.NEAREST);Ee.bindFramebuffer(y.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Te.has(v)){let yt=Te.get(v),dt=Te.get(I);Ee.bindFramebuffer(y.READ_FRAMEBUFFER,Yo),Ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,qo);for(let Rt=0;Rt<de;Rt++)et?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,yt.__webglTexture,U,we+Rt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,yt.__webglTexture,U),Tt?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,dt.__webglTexture,J,Ze+Rt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,dt.__webglTexture,J),U!==0?y.blitFramebuffer(Re,Ce,ce,he,ze,qe,ce,he,y.COLOR_BUFFER_BIT,y.NEAREST):Tt?y.copyTexSubImage3D(ht,J,ze,qe,Ze+Rt,Re,Ce,ce,he):y.copyTexSubImage2D(ht,J,ze,qe,Re,Ce,ce,he);Ee.bindFramebuffer(y.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Tt?v.isDataTexture||v.isData3DTexture?y.texSubImage3D(ht,J,ze,qe,Ze,ce,he,de,Ke,ve,Qe.data):I.isCompressedArrayTexture?y.compressedTexSubImage3D(ht,J,ze,qe,Ze,ce,he,de,Ke,Qe.data):y.texSubImage3D(ht,J,ze,qe,Ze,ce,he,de,Ke,ve,Qe):v.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,J,ze,qe,ce,he,Ke,ve,Qe.data):v.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,J,ze,qe,Qe.width,Qe.height,Ke,Qe.data):y.texSubImage2D(y.TEXTURE_2D,J,ze,qe,ce,he,Ke,ve,Qe);y.pixelStorei(y.UNPACK_ROW_LENGTH,Wt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,At),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Pr),y.pixelStorei(y.UNPACK_SKIP_ROWS,Et),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ai),J===0&&I.generateMipmaps&&y.generateMipmap(ht),Ee.unbindTexture()},this.initRenderTarget=function(v){Te.get(v).__webglFramebuffer===void 0&&ye.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ye.setTextureCube(v,0):v.isData3DTexture?ye.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ye.setTexture2DArray(v,0):ye.setTexture2D(v,0),Ee.unbindTexture()},this.resetState=function(){N=0,P=0,w=null,Ee.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=He._getDrawingBufferColorSpace(t),e.unpackColorSpace=He._getUnpackColorSpace()}};function Lm(t,e){if(!t)return()=>{};let r=t.closest("[data-homepage-background]"),i=window.matchMedia("(prefers-reduced-motion: reduce)"),a;try{a=new Go({antialias:!1,powerPreference:"high-performance",alpha:!0})}catch{return r.dataset.renderer="fallback",r.dataset.motion="static",()=>{}}let n=new Uo,s=new Xn(-1,1,1,-1,0,1),o=new oa(2,2),l=e.color.replace("#",""),c=(e.secondaryColor||e.color).replace("#",""),u=e.rotation*Math.PI/180,d=new Ge(0,0),p=new Ge(0,0),m=new Vt({vertexShader:es,fragmentShader:ts(e.brandStyle),uniforms:{uCanvas:{value:new Ge(1,1)},uTime:{value:0},uSpeed:{value:e.speed},uRot:{value:new Ge(Math.cos(u),Math.sin(u))},uColor:{value:new O(parseInt(l.slice(0,2),16)/255,parseInt(l.slice(2,4),16)/255,parseInt(l.slice(4,6),16)/255)},uScale:{value:e.scale},uFrequency:{value:e.frequency},uWarpStrength:{value:e.warpStrength},uNoise:{value:e.noise},uBandWidth:{value:e.bandWidth},uYOffset:{value:e.yOffset},uFadeTop:{value:e.fadeTop},uPointer:{value:p},uMouseInfluence:{value:e.mouseInfluence},uIterations:{value:e.iterations},uIntensity:{value:e.intensity},uLightMode:{value:0},uBrandStyle:{value:e.brandStyle||0},uBrandColor:{value:new O(parseInt(c.slice(0,2),16)/255,parseInt(c.slice(2,4),16)/255,parseInt(c.slice(4,6),16)/255)}},premultipliedAlpha:!0,transparent:!0});n.add(new Lt(o,m)),a.outputColorSpace=vt,a.setPixelRatio(1),a.setClearColor(0,0),a.domElement.className="homepage-background-canvas",t.appendChild(a.domElement);let E=!1,_=!1,f=!1,h=null,C=0,S=0,b=t.getBoundingClientRect(),N=1e3/60-1,P=()=>{!E&&!_&&a.render(n,s)},w=()=>{h!==null&&cancelAnimationFrame(h),h=null,C=0,r.dataset.motion=i.matches?"reduced":"paused"},F=q=>{if(E||_||(h=requestAnimationFrame(F),C&&q-C<N))return;let V=C?Math.min((q-C)/1e3,.05):0;C=q,S+=V,m.uniforms.uTime.value=S,p.lerp(d,Math.min(1,V*4)),P()},M=()=>{w(),!(E||_||!f)&&(i.matches?(p.set(0,0),P()):(r.dataset.motion="running",h=requestAnimationFrame(F)))},x=()=>{if(E)return;let q=Math.max(1,t.clientWidth),V=Math.max(1,t.clientHeight);a.setSize(q,V,!1),m.uniforms.uCanvas.value.set(q,V),b=t.getBoundingClientRect(),P()},R=q=>{i.matches||h===null||q.pointerType==="touch"||d.set((q.clientX-b.left)/Math.max(b.width,1)*2-1,-((q.clientY-b.top)/Math.max(b.height,1)*2-1))},H=()=>d.set(0,0),G=q=>{q.preventDefault(),_=!0,w(),r.dataset.renderer="fallback"},z=()=>{_=!1,r.dataset.renderer="webgl",x(),M()};x(),r.dataset.renderer="webgl";let Z=new ResizeObserver(x);Z.observe(t),i.addEventListener("change",M),window.addEventListener("pointermove",R,{passive:!0}),document.documentElement.addEventListener("pointerleave",H),a.domElement.addEventListener("webglcontextlost",G),a.domElement.addEventListener("webglcontextrestored",z);let k=rs(t,{rootMargin:"0px",onStart:()=>{f=!0,M()},onStop:()=>{f=!1,w()}});return()=>{E=!0,k(),w(),Z.disconnect(),i.removeEventListener("change",M),window.removeEventListener("pointermove",R),document.documentElement.removeEventListener("pointerleave",H),a.domElement.removeEventListener("webglcontextlost",G),a.domElement.removeEventListener("webglcontextrestored",z),o.dispose(),m.dispose(),a.dispose(),a.forceContextLoss(),a.domElement.remove()}}export{Lm as mountHeroBand};
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
