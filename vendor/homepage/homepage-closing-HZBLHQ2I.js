import{b as Ve}from"./chunk-D424R3QK.js";import{a as Xe}from"./chunk-CWNEHHB4.js";import{d as ce,g as De,h as re,k as ze}from"./chunk-K4VJGYGP.js";import{a as ve,b as Je,c as et,d as N}from"./chunk-WLRME6H3.js";import{c as M}from"./chunk-5TBO732O.js";var Ke=M(ve(),1),je=M(et(),1),Qe=M(Je(),1);var Q=M(ve(),1);var j=M(ve(),1);var Ae=M(N(),1),tt=512,Ee=2048,Fe=2560*1600*2,ot=`#version 300 es
layout(location = 0) in vec2 a_position;
uniform vec2 u_resolution;
uniform float u_imageAspect;
uniform float u_scale;
uniform float u_rotation;
out vec2 v_imageUV;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  vec2 uv = a_position * 0.5;
  float r = u_rotation * 3.14159265358979323846 / 180.0;
  mat2 turn = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 imageBox;
  imageBox.x = min(u_resolution.x / u_imageAspect, u_resolution.y) * u_imageAspect;
  imageBox.y = imageBox.x / u_imageAspect;
  v_imageUV = uv * (u_resolution / imageBox) / u_scale;
  v_imageUV.x *= u_imageAspect;
  v_imageUV = turn * v_imageUV;
  v_imageUV.x /= u_imageAspect;
  v_imageUV += 0.5;
  v_imageUV.y = 1.0 - v_imageUV.y;
}`,rt=`#version 300 es
precision highp float;

uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec4 u_colorBack;
uniform vec4 u_colorTint;
uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;
uniform vec2 u_tilt;
uniform float u_reveal;
uniform float u_light;

in vec2 v_imageUV;

out vec4 fragColor;

#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float getColorChanges(float c1, float c2, float stripe, vec3 w, float blur, float bump, float tint) {
  float ch = mix(c2, c1, smoothstep(0.0, 2.0 * blur, stripe));
  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2.0 * blur, stripe));
  bump = smoothstep(0.2, 0.8, bump);
  border = w[0] + 0.4 * (1.0 - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2.0 * blur, stripe));
  border = w[0] + 0.5 * (1.0 - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2.0 * blur, stripe));
  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2.0 * blur, stripe));
  float gradientT = (stripe - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0.0, 1.0, gradientT));
  ch = mix(ch, gradient, smoothstep(border, border + 0.5 * blur, stripe));
  ch = mix(ch, 1.0 - min(1.0, (1.0 - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.0;
  frame *= smoothstep(0.0, th, uv.y);
  frame *= 1.0 - smoothstep(1.0 - th, 1.0, uv.y);
  frame *= smoothstep(0.0, th, uv.x);
  frame *= 1.0 - smoothstep(1.0 - th, 1.0, uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;
  float sum = 4.0 * centerSample;
  sum += 2.0 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += 2.0 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += 2.0 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += 2.0 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;
  sum += textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;
  return sum / 16.0;
}

void main() {
  const float firstFrameOffset = 2.8;
  float t = 0.3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  float cycleWidth = u_repetition;

  vec2 rotatedUV = uv - vec2(0.5);
  float angle = (-u_angle + 70.0) * PI / 180.0;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(rotatedUV.x * cosA - rotatedUV.y * sinA, rotatedUV.x * sinA + rotatedUV.y * cosA) + vec2(0.5);

  float edge = blurEdge3x3(u_image, uv, dudx, dudy, 6.0, img.r);
  edge = pow(edge, 1.6);
  edge *= smoothstep(0.0, 0.4, u_contour);

  float opacity = img.g * getImgFrame(v_imageUV, 0.0);
  float depth = img.r;

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color1 = mix(vec3(0.98, 0.98, 1.0), vec3(0.9, 0.9, 0.93), u_light);
  vec3 color2 = vec3(0.1, 0.1, 0.1 + 0.1 * smoothstep(0.7, 1.3, diagTLtoBR));

  vec2 gradUV = uv - 0.5 - u_tilt * vec2(0.18, -0.12);
  float dist = length(gradUV + vec2(0.0, 0.2 * diagBLtoTR));
  gradUV = rotate(gradUV, (0.25 - 0.2 * diagBLtoTR) * PI);
  float direction = gradUV.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1.0 - bump;
  bump *= pow(uv.y, 0.3);

  float thinStrip1 = 0.12 / cycleWidth * (1.0 - 0.4 * bump);
  float thinStrip2 = 0.07 / cycleWidth * (1.0 + 0.4 * bump);
  float wideStrip = 1.0 - thinStrip1 - thinStrip2;

  float noise = snoise(uv - t);
  edge += (1.0 - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  direction -= 2.0 * noise * diagBLtoTR * (smoothstep(0.0, 1.0, edge) * (1.0 - smoothstep(0.0, 1.0, edge)));
  direction *= mix(1.0, 1.0 - edge, smoothstep(0.5, 1.0, u_contour));
  direction -= 1.7 * edge * smoothstep(0.5, 1.0, u_contour);
  direction += 0.2 * pow(u_contour, 4.0) * (1.0 - smoothstep(0.0, 1.0, edge));

  bump *= clamp(pow(uv.y, 0.1), 0.3, 1.0);
  direction *= 0.1 + (1.1 - edge) * bump;
  direction *= 0.4 + 0.6 * (1.0 - smoothstep(0.5, 1.0, edge));
  direction += 0.18 * (smoothstep(0.1, 0.2, uv.y) * (1.0 - smoothstep(0.2, 0.4, uv.y)));
  direction += 0.03 * (smoothstep(0.1, 0.2, 1.0 - uv.y) * (1.0 - smoothstep(0.2, 0.4, 1.0 - uv.y)));
  direction *= 0.5 + 0.5 * pow(uv.y, 2.0);
  direction *= cycleWidth;
  direction -= t + dot(u_tilt, vec2(0.35, 0.2));

  float colorDispersion = clamp(1.0 - bump, 0.0, 1.0);
  float dispersionRed = colorDispersion;
  dispersionRed += 0.03 * bump * noise;
  dispersionRed += 5.0 * (smoothstep(-0.1, 0.2, uv.y) * (1.0 - smoothstep(0.1, 0.5, uv.y))) * (smoothstep(0.4, 0.6, bump) * (1.0 - smoothstep(0.4, 1.0, bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion * 1.3;
  dispersionBlue += (smoothstep(0.0, 0.4, uv.y) * (1.0 - smoothstep(0.1, 0.8, uv.y))) * (smoothstep(0.4, 0.6, bump) * (1.0 - smoothstep(0.4, 0.8, bump)));
  dispersionBlue -= 0.2 * edge;

  dispersionRed *= u_shiftRed / 20.0;
  dispersionBlue *= u_shiftBlue / 20.0;

  float softness = 0.05 * u_softness;
  float blur = softness + 0.5 * smoothstep(1.0, 10.0, u_repetition) * smoothstep(0.0, 1.0, edge);
  float smallCanvas = 1.0 - smoothstep(100.0, 500.0, min(u_resolution.x, u_resolution.y));
  blur += smallCanvas * smoothstep(0.0, 1.0, edge);
  float rExtraBlur = softness * (0.05 + 0.1 * (u_shiftRed / 20.0) * bump);
  float gExtraBlur = softness * 0.05 / max(0.001, abs(1.0 - diagBLtoTR));

  vec3 w = vec3(thinStrip1 * cycleWidth, thinStrip2 * cycleWidth, wideStrip);
  w[1] -= 0.02 * smoothstep(0.0, 1.0, edge + bump);
  float stripeR = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripeR, w, blur + fwidth(stripeR) + rExtraBlur, bump, u_colorTint.r);
  float stripeG = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripeG, w, blur + fwidth(stripeG) + gExtraBlur, bump, u_colorTint.g);
  float stripeB = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripeB, w, blur + fwidth(stripeB), bump, u_colorTint.b);

  vec3 sheen = mix(vec3(1.0), u_colorTint.rgb, 0.45 * u_colorTint.a);
  r *= sheen.r;
  g *= sheen.g;
  b *= sheen.b;

  float rim = smoothstep(0.78, 1.0, depth) * u_light;
  r *= 1.0 - rim * 0.62;
  g *= 1.0 - rim * 0.62;
  b *= 1.0 - rim * 0.58;

  float pour = u_reveal * 1.25 - 0.1;
  opacity *= smoothstep(1.0 - pour, 1.15 - pour, depth) * smoothstep(0.0, 0.25, u_reveal);

  vec3 color = vec3(r, g, b) * opacity;
  vec3 back = u_colorBack.rgb * u_colorBack.a;
  color += back * (1.0 - opacity);
  opacity += u_colorBack.a * (1.0 - opacity);
  color += 1.0 / 256.0 * (fract(sin(dot(0.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - 0.5);
  fragColor = vec4(color, opacity);
}`,D=(t,r,s)=>Math.min(s,Math.max(r,t)),Ge=(()=>{let t=null;return(r,s)=>{if(typeof document>"u"||(t??(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})),!t))return s;t.clearRect(0,0,1,1),t.fillStyle="rgba(0, 0, 0, 0)",t.fillStyle=String(r),t.fillRect(0,0,1,1);let[n,a,p,f]=t.getImageData(0,0,1,1).data;return[n/255,a/255,p/255,f/255]}})(),it=t=>new Promise((r,s)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>r(n),n.onerror=()=>s(new Error("MetallicPaint: failed to load the image")),n.src=t}),nt=async t=>{if(/\.svg($|[?#])/i.test(t)||t.startsWith("data:image/svg+xml"))return!0;if(!t.startsWith("blob:"))return!1;try{return(await(await fetch(t)).blob()).type==="image/svg+xml"}catch{return!1}},at=async t=>{let[r,s]=await Promise.all([it(t),nt(t)]),n=r.naturalWidth||r.width||Ee,a=r.naturalHeight||r.height||Ee,p=Math.max(n,a),f=s?Ee/p:D(1024/p,1,Ee/p);n=Math.max(1,Math.round(n*f)),a=Math.max(1,Math.round(a*f));let m=document.createElement("canvas");m.width=n,m.height=a;let b=m.getContext("2d",{willReadFrequently:!0});b.drawImage(r,0,0,n,a);let i=b.getImageData(0,0,n,a),h=!0;for(let d=3;d<i.data.length;d+=4)if(i.data[d]<250){h=!1;break}if(h){for(let d=0;d<i.data.length;d+=4){let E=Math.min(i.data[d],i.data[d+1],i.data[d+2]);i.data[d+3]=Math.round(D((250-E)/30,0,1)*255)}b.putImageData(i,0,0)}return m},st=async(t,r,s)=>{let a=`${s} 320px ${r}`;try{await document.fonts?.load(a,t)}catch{return null}let p=document.createElement("canvas").getContext("2d");p.font=a;let f=p.measureText(t),m=f.actualBoundingBoxAscent||320*.8,b=f.actualBoundingBoxDescent||320*.2,i=f.actualBoundingBoxLeft||0,h=f.actualBoundingBoxRight||f.width,d=320*.12,E=document.createElement("canvas");E.width=Math.ceil(i+h+d*2),E.height=Math.ceil(m+b+d*2);let k=E.getContext("2d");return k.font=a,k.fillStyle="#000",k.textBaseline="alphabetic",k.fillText(t,d+i,d+m),E},ct=(t,r,s)=>{let n=[];for(let i=0;i<s;i++)for(let h=0;h<r;h++){let d=i*r+h;if(!t[d])continue;h===0||i===0||h===r-1||i===s-1||!t[d-1]||!t[d+1]||!t[d-r]||!t[d+r]||!t[d-r-1]||!t[d-r+1]||!t[d+r-1]||!t[d+r+1]||n.push(d)}let a=new Float32Array(r*s),p=[],f=[];n.forEach(i=>(i%r+Math.floor(i/r))%2===0?p.push(i):f.push(i));let m=i=>{for(let h=0;h<i.length;h++){let d=i[h],E=a[d+1]+a[d-1]+a[d-r]+a[d+r];a[d]=1.9*((.01+E)/4)-.9*a[d]}};for(let i=0;i<40;i++)m(p),m(f);let b=0;return n.forEach(i=>{a[i]>b&&(b=a[i])}),{field:a,peak:b||1}},lt=t=>{let r=t.width,s=t.height,n=tt/Math.min(r,s),a=Math.max(2,Math.round(r*n)),p=Math.max(2,Math.round(s*n)),f=document.createElement("canvas");f.width=a,f.height=p;let m=f.getContext("2d",{willReadFrequently:!0});m.drawImage(t,0,0,a,p);let b=m.getImageData(0,0,a,p).data,i=new Uint8Array(a*p);for(let v=0;v<i.length;v++)i[v]=b[v*4+3]>0?1:0;let{field:h,peak:d}=ct(i,a,p),E=m.createImageData(a,p);for(let v=0;v<i.length;v++){let V=v*4,ee=i[v]?255*(1-h[v]/d):255;E.data[V]=ee,E.data[V+1]=ee,E.data[V+2]=ee,E.data[V+3]=i[v]?255:0}m.putImageData(E,0,0);let k=document.createElement("canvas");k.width=r,k.height=s;let w=k.getContext("2d",{willReadFrequently:!0});w.imageSmoothingEnabled=!0,w.imageSmoothingQuality="high",w.drawImage(f,0,0,a,p,0,0,r,s);let U=w.getImageData(0,0,r,s),le=t.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,r,s).data;for(let v=0;v<U.data.length;v+=4){let V=le[v+3];V===0?(U.data[v]=255,U.data[v+1]=0):(U.data[v]=U.data[v+3]===0?0:U.data[v],U.data[v+1]=V),U.data[v+2]=255,U.data[v+3]=255}return U},Oe=(t,r,s)=>{let n=t.createShader(r);return n?(t.shaderSource(n,s),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(t.deleteShader(n),null)):null};function Ie({imageSrc:t,text:r,fontFamily:s="system-ui, sans-serif",fontWeight:n=800,color:a="#ffffff",backgroundColor:p="transparent",density:f=2,softness:m=.1,dispersion:b=.3,distortion:i=.07,edgeBend:h=.6,angle:d=70,speed:E=1,scale:k=.6,rotation:w=0,mouseTilt:U=.5,lightMode:le=!1,intro:v=!0,paused:V=!1,onStatus:ee,dpr:Me,className:be="",style:ye}){let de=(0,j.useRef)(null),ue=(0,j.useRef)(null),z=(0,j.useRef)(null),C=(0,j.useRef)(null);return C.current={tint:Ge(a,[1,1,1,1]),back:Ge(p,[0,0,0,0]),density:D(f,.5,12),softness:D(m,0,1),dispersion:D(b,-1,1),distortion:D(i,0,1),edgeBend:D(h,0,1),angle:d,speed:E,scale:Math.max(.05,k),rotation:w,mouseTilt:D(U,0,1.5),lightMode:le,intro:v,paused:V,onStatus:ee,dpr:Me},(0,j.useEffect)(()=>{let I=de.current,S=ue.current;if(!I||!S)return;let e=S.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!e){C.current.onStatus?.("error");return}let W=Oe(e,e.VERTEX_SHADER,ot),_=Oe(e,e.FRAGMENT_SHADER,rt),B=e.createProgram();if(!W||!_||!B){W&&e.deleteShader(W),_&&e.deleteShader(_),B&&e.deleteProgram(B),C.current.onStatus?.("error");return}if(e.attachShader(B,W),e.attachShader(B,_),e.linkProgram(B),e.deleteShader(W),e.deleteShader(_),!e.getProgramParameter(B,e.LINK_STATUS)){e.deleteProgram(B),C.current.onStatus?.("error");return}e.useProgram(B);let y={},L=e.getProgramParameter(B,e.ACTIVE_UNIFORMS);for(let l=0;l<L;l++){let x=e.getActiveUniform(B,l);x&&(y[x.name]=e.getUniformLocation(B,x.name))}let c=e.createVertexArray(),te=e.createBuffer();e.bindVertexArray(c),e.bindBuffer(e.ARRAY_BUFFER,te),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let oe=e.createTexture();e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,oe),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.uniform1i(y.u_image,0);let ae=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,o={raf:0,last:0,time:0,visible:!0,pending:!1,hasImage:!1,imageAspect:1,width:0,height:0,revealStart:-1,reveal:C.current.intro&&!ae?0:1,tiltX:0,tiltY:0,velocityX:0,velocityY:0,targetX:0,targetY:0,alive:!0},se=()=>{let l=C.current,x=I.getBoundingClientRect(),H=l.dpr??Math.min(window.devicePixelRatio||1,2),P=D(H,1,2),K=x.width*x.height*P*P;K>Fe&&(P*=Math.sqrt(Fe/K));let Y=Math.max(1,Math.round(x.width*P)),u=Math.max(1,Math.round(x.height*P));Y===o.width&&u===o.height||(o.width=Y,o.height=u,S.width=Y,S.height=u,e.viewport(0,0,Y,u))},O=()=>{let l=C.current;if(o.pending||!o.hasImage){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);return}e.useProgram(B),e.uniform2f(y.u_resolution,o.width,o.height),e.uniform1f(y.u_time,o.time),e.uniform1f(y.u_imageAspect,o.imageAspect),e.uniform1f(y.u_scale,l.scale),e.uniform1f(y.u_rotation,l.rotation),e.uniform4f(y.u_colorBack,l.back[0],l.back[1],l.back[2],l.back[3]),e.uniform4f(y.u_colorTint,l.tint[0],l.tint[1],l.tint[2],l.tint[3]),e.uniform1f(y.u_softness,l.softness),e.uniform1f(y.u_repetition,l.density),e.uniform1f(y.u_shiftRed,l.dispersion),e.uniform1f(y.u_shiftBlue,l.dispersion),e.uniform1f(y.u_distortion,l.distortion),e.uniform1f(y.u_contour,l.edgeBend),e.uniform1f(y.u_angle,l.angle),e.uniform2f(y.u_tilt,o.tiltX,o.tiltY),e.uniform1f(y.u_reveal,o.reveal),e.uniform1f(y.u_light,l.lightMode?1:0),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindVertexArray(c),e.drawArrays(e.TRIANGLE_STRIP,0,4)},pe=l=>{if(o.raf=0,!o.alive)return;let x=C.current,H=o.last?Math.min(.05,(l-o.last)/1e3):1/60;o.last=l;let P=!x.paused&&!ae&&x.speed!==0;P&&(o.time+=H*x.speed);let K=P;if(o.reveal<1&&!o.pending){o.revealStart<0&&(o.revealStart=l);let R=D((l-o.revealStart)/1600,0,1);o.reveal=1-(1-R)**3,P&&(o.time+=H*2.4*(1-R)**2),K=!0}let Y=60,u=14,T=Math.max(1,Math.ceil(H/(1/240))),A=H/T;for(let R=0;R<T;R++)o.velocityX+=(Y*(o.targetX*x.mouseTilt-o.tiltX)-u*o.velocityX)*A,o.velocityY+=(Y*(o.targetY*x.mouseTilt-o.tiltY)-u*o.velocityY)*A,o.tiltX+=o.velocityX*A,o.tiltY+=o.velocityY*A;(Math.abs(o.targetX*x.mouseTilt-o.tiltX)>5e-4||Math.abs(o.targetY*x.mouseTilt-o.tiltY)>5e-4||Math.abs(o.velocityX)+Math.abs(o.velocityY)>5e-4)&&(K=!0),O(),K&&o.visible?o.raf=requestAnimationFrame(pe):o.last=0},X=()=>{!o.raf&&o.alive&&o.visible&&(o.raf=requestAnimationFrame(pe))},q=l=>{let x=I.getBoundingClientRect();o.targetX=D((l.clientX-x.left)/x.width*2-1,-1.2,1.2),o.targetY=D((l.clientY-x.top)/x.height*2-1,-1.2,1.2),X()},Z=()=>{o.targetX=0,o.targetY=0,X()},ge=new ResizeObserver(()=>{se(),O()});ge.observe(I);let me=new IntersectionObserver(l=>{o.visible=l.some(x=>x.isIntersecting),o.visible&&X()});me.observe(I);let fe=l=>{l.preventDefault(),o.alive=!1,cancelAnimationFrame(o.raf),C.current.onStatus?.("error")};return S.addEventListener("webglcontextlost",fe),I.addEventListener("pointermove",q),I.addEventListener("pointerleave",Z),z.current={setPending:l=>{o.pending=l,O()},setImage:l=>{o.pending=!1,e.bindTexture(e.TEXTURE_2D,oe),l?(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,l),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),o.imageAspect=l.width/l.height,o.hasImage=!0):(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),o.imageAspect=1,o.hasImage=!1),O(),X(),C.current.onStatus?.(l?"ready":"error")},wake:X,redraw:()=>{se(),O(),X()}},se(),O(),X(),()=>{o.alive=!1,cancelAnimationFrame(o.raf),ge.disconnect(),me.disconnect(),S.removeEventListener("webglcontextlost",fe),I.removeEventListener("pointermove",q),I.removeEventListener("pointerleave",Z),z.current=null,e.deleteTexture(oe),e.deleteBuffer(te),e.deleteVertexArray(c),e.deleteProgram(B)}},[]),(0,j.useEffect)(()=>{let I=!0,S=r?st(r,s,n):t?at(t):null;if(!S){z.current?.setImage(null);return}return z.current?.setPending(!0),S.then(e=>{if(!I||!e)return;let W=lt(e);I&&z.current?.setImage(W)}).catch(()=>{I&&z.current?.setImage(null)}),()=>{I=!1}},[t,r,s,n]),(0,j.useEffect)(()=>{z.current?.redraw()}),(0,Ae.jsx)("div",{ref:de,className:`metallic-paint ${be}`.trim(),style:ye,children:(0,Ae.jsx)("canvas",{ref:ue,className:"metallic-paint-canvas"})})}var F=M(ve(),1);var ne=M(N(),1),dt=t=>t*t*t*(t*(t*6-15)+10),ie=(t,r,s)=>{let n=Math.abs(t-r);return n>=s?0:dt(1-n/s)},Ye={streak:(t,r)=>ie(t,.5,.06+.16*r)+.32*ie(t,.5,.5),twin:(t,r)=>ie(t,.36,.08+.18*r)+.85*ie(t,.7,.03+.06*r)+.26*ie(t,.5,.5),sheen:(t,r)=>.55*ie(t,.5,.25+.25*r)+.3*ie(t,.5,.5)},$e=(t,r,s,n)=>{let a=Ye[s]??Ye.streak;return`linear-gradient(90deg, ${Array.from({length:33},(f,m)=>{let b=m/32,i=Math.round(Math.min(1,a(b,n)*r)*1e3)/10;return`color-mix(in srgb, ${t} ${i}%, transparent) ${(b*100).toFixed(1)}%`}).join(", ")})`},ut=t=>(1-Math.cos(Math.PI*t))/2,pt=({width:t="auto",height:r="auto",background:s="transparent",borderRadius:n="10px",borderColor:a="transparent",children:p,glareColor:f="#ffffff",glareOpacity:m=.5,glareAngle:b=-45,glareSize:i=30,softness:h=.6,variant:d="streak",blendMode:E="screen",rimGlint:k=!0,mode:w="hover",transitionDuration:U=650,interval:le=3,playOnce:v=!1,intro:V=!1,className:ee="",style:Me={}})=>{let be=(0,F.useRef)(null),ye=(0,F.useRef)(null),de=(0,F.useRef)(null),ue=(0,F.useRef)(null),z=(0,F.useRef)(null),C=(0,F.useRef)(!1),I={glareAngle:b,glareSize:i,transitionDuration:U,interval:le,playOnce:v,intro:V},S=(0,F.useRef)(I);S.current=I,(0,F.useEffect)(()=>{let _=be.current,B=ye.current;if(!_||!B)return;let y=window.matchMedia("(prefers-reduced-motion: reduce)").matches,L={band:0,reach:0,ux:0,uy:-1,angle:0},c={pos:0,velocity:0,target:0,presence:0,presenceTarget:0,sweep:null,visible:!0},te=0,oe=0,ae=0,o=()=>[de.current,ue.current].filter(Boolean),se=()=>{let u=`translate(-50%, -50%) rotate(${L.angle-90}deg) translateX(${c.pos.toFixed(2)}px)`;for(let T of o())T.style.transform=u;B.style.opacity=c.presence.toFixed(3)},O=()=>{let{glareAngle:u,glareSize:T}=S.current,A=_.clientWidth,R=_.clientHeight,J=u*Math.PI/180,we=Math.sin(J),he=-Math.cos(J),Pe=Math.hypot(A,R),_e=Math.max(8,Pe*T/100),ke=(Math.abs(A*we)+Math.abs(R*he))/2+_e/2+2,Ze=!c.sweep&&w!=="follow";Object.assign(L,{band:_e,reach:ke,ux:we,uy:he,angle:u});for(let Ne of o())Ne.style.width=`${_e}px`,Ne.style.height=`${Pe+_e}px`;Ze&&(c.pos=c.pos>0?ke:-ke),se()},pe=u=>{let T=Math.min(.05,(u-oe)/1e3||0);oe=u;let A=!1;if(c.sweep){let R=c.sweep,J=Math.min(1,(u-R.start)/R.duration);c.pos=R.from+(R.to-R.from)*ut(J),J<1?A=!0:c.sweep=null}else if(w==="follow"){let R=Math.max(1,Math.ceil(T/.008333333333333333)),J=T/R;for(let he=0;he<R;he++)c.velocity+=(170*(c.target-c.pos)-24*c.velocity)*J,c.pos+=c.velocity*J;let we=c.presenceTarget>c.presence?.18:.4;c.presence+=(c.presenceTarget-c.presence)*(1-Math.exp(-T/we)),A=Math.abs(c.target-c.pos)>.05||Math.abs(c.velocity)>.05||Math.abs(c.presenceTarget-c.presence)>.002,A||(c.presence=c.presenceTarget)}se(),te=A?requestAnimationFrame(pe):0},X=()=>{te||(oe=performance.now(),te=requestAnimationFrame(pe))},q=u=>{if(y||!L.reach)return;let T=u*L.reach,A=c.sweep||Math.abs(c.pos)<L.reach?c.pos:-T;if(A===T)return;let R=Math.abs(T-A)/(2*L.reach);c.sweep={from:A,to:T,start:performance.now(),duration:Math.max(120,S.current.transitionDuration*R)},X()},Z=u=>{let T=_.getBoundingClientRect(),A=u.clientX-(T.left+T.width/2),R=u.clientY-(T.top+T.height/2);return A*L.ux+R*L.uy},ge=u=>{c.target=Math.max(-L.reach,Math.min(L.reach,Z(u))),X()},me=u=>{w==="hover"&&q(Z(u)>0?-1:1),w==="follow"&&(c.presence<.02&&(c.pos=Math.max(-L.reach,Math.min(L.reach,Z(u))),c.velocity=0),c.presenceTarget=y?0:1,ge(u))},fe=u=>{w==="follow"&&ge(u)},l=u=>{w==="hover"&&!S.current.playOnce&&q(Z(u)>0?1:-1),w==="follow"&&(c.presenceTarget=0,X())},x=u=>{w==="click"&&q(Z(u)>0?-1:1)},H=u=>{w!=="follow"&&u.target.matches?.(":focus-visible")&&q(1)},P=()=>{window.clearTimeout(ae),!(w!=="loop"||y)&&(ae=window.setTimeout(()=>{c.visible&&!document.hidden&&q(1),P()},Math.max(.5,S.current.interval)*1e3))};_.addEventListener("pointerenter",me),_.addEventListener("pointermove",fe),_.addEventListener("pointerleave",l),_.addEventListener("pointerdown",x),_.addEventListener("focusin",H);let K=new ResizeObserver(O);K.observe(_);let Y=new IntersectionObserver(([u])=>{c.visible=u.isIntersecting,u.isIntersecting&&S.current.intro&&!C.current&&(C.current=!0,q(1))},{threshold:.4});return Y.observe(_),c.presence=w==="follow"?0:1,c.presenceTarget=c.presence,c.pos=-1e4,O(),P(),z.current={measure:O},()=>{cancelAnimationFrame(te),window.clearTimeout(ae),K.disconnect(),Y.disconnect(),_.removeEventListener("pointerenter",me),_.removeEventListener("pointermove",fe),_.removeEventListener("pointerleave",l),_.removeEventListener("pointerdown",x),_.removeEventListener("focusin",H),z.current=null}},[w]),(0,F.useEffect)(()=>{z.current?.measure()},[b,i,k]);let e=$e(f,m,d,h),W=$e(f,Math.min(1,m*1.8),d,h);return(0,ne.jsxs)("div",{ref:be,className:`glare-hover ${ee}`.trim(),style:{"--gh-width":t,"--gh-height":r,"--gh-bg":s,"--gh-br":n,"--gh-border":a,"--gh-glare":e,"--gh-rim":W,"--gh-blend":E,...Me},children:[p,(0,ne.jsxs)("span",{ref:ye,className:"glare-hover__glare","aria-hidden":"true",children:[(0,ne.jsx)("span",{ref:de,className:"glare-hover__band"}),k&&(0,ne.jsx)("span",{className:"glare-hover__rim",children:(0,ne.jsx)("span",{ref:ue,className:"glare-hover__band glare-hover__band--rim"})})]})]})},We=pt;var Be=[{id:"metallic",label:"\u6DB2\u6001\u91D1\u5C5E",hint:"\u94F6\u7D2B\u53CD\u5149 \xB7 \u4FDD\u7559\u54C1\u724C\u5E95\u8272"},{id:"glare",label:"\u63A0\u5149",hint:"\u4FDD\u7559\u539F\u8272 \xB7 \u6BCF3.6\u79D2\u81EA\u52A8\u626B\u5149"}],Se="xs-closing-logo-effect-v1";function xe(t,r){let s=n=>Be.some(a=>a.id===n);return s(t)?t:s(r)?r:"metallic"}var G=M(N(),1),Re="./assets/ecogiant-mark.svg";function Ue({reduced:t=!1,effect:r="metallic"}){let s=(0,Q.useRef)(null),n=De(s,{amount:.15}),a=ce(),[p,f]=(0,Q.useState)(()=>typeof document>"u"?!0:!document.hidden),[m,b]=(0,Q.useState)("loading"),i=t||a,h=!i&&n&&p,d=xe(r),E=typeof document>"u"?Re:new URL(Re,document.baseURI).href;(0,Q.useEffect)(()=>{let w=()=>f(!document.hidden);return document.addEventListener("visibilitychange",w),()=>document.removeEventListener("visibilitychange",w)},[]),(0,Q.useLayoutEffect)(()=>{b("loading")},[d,i]);let k=(0,G.jsx)("img",{className:"closing-brand-base",src:Re,alt:"",width:"340",height:"340"});return(0,G.jsx)("div",{ref:s,className:"closing-brand-mark","aria-hidden":"true","data-effect":d,"data-renderer":d==="metallic"?m:"css","data-motion":i?"static":h?"running":"paused",children:i?k:d==="metallic"?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("div",{className:"closing-metal-fallback",children:k}),(0,G.jsx)("div",{className:"closing-metal-surface",children:(0,G.jsx)(Ie,{imageSrc:Re,color:"#d7c7ff",backgroundColor:"transparent",density:2.4,softness:.4,dispersion:.05,distortion:.018,edgeBend:.48,angle:65,speed:.48,scale:1,rotation:0,mouseTilt:.15,intro:!1,paused:!h,dpr:1.5,onStatus:b})})]}):h?(0,G.jsx)(We,{width:"100%",height:"100%",className:"closing-logo-glare",borderRadius:"0px",background:"transparent",borderColor:"transparent",glareColor:"#f0e5ff",glareOpacity:.88,glareAngle:-40,glareSize:46,softness:.75,variant:"twin",blendMode:"screen",rimGlint:!1,mode:"loop",interval:3.6,transitionDuration:1900,intro:!0,playOnce:!0,style:{"--brand-mask":`url("${E}")`},children:k}):k})}var g=M(N(),1);function Le({headingLevel:t=2,caseHref:r="#cases",homeHref:s="#home",reduced:n=!1,logoEffect:a="metallic",controls:p}){let f=ce(),m=n||f,b=`h${t}`,i=(h=0)=>({initial:m?!1:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:m?0:.75,delay:m?0:h,ease:[.22,1,.36,1]}});return(0,g.jsxs)("section",{className:"research-closing","aria-labelledby":"closing-title",children:[(0,g.jsxs)(re.p,{className:"closing-kicker",...i(),children:[(0,g.jsx)("span",{"aria-hidden":"true"}),"\u4ECE\u5019\u9009\u6BD4\u8F83\uFF0C\u5230\u5B9E\u9A8C\u9A8C\u8BC1"]}),(0,g.jsxs)("div",{className:"closing-composition",children:[(0,g.jsxs)("div",{className:"closing-copy",children:[(0,g.jsx)(re.div,{...i(.08),children:(0,g.jsxs)(b,{id:"closing-title",className:"closing-title",children:["\u8BA9\u4E0B\u4E00\u6B21\u5B9E\u9A8C\uFF0C",(0,g.jsx)("br",{}),(0,g.jsx)("span",{children:"\u6709\u66F4\u660E\u786E\u7684\u8D77\u70B9\u3002"})]})}),(0,g.jsxs)(re.p,{className:"closing-description",...i(.16),children:["\u4ECE\u5DF2\u6709\u6570\u636E\u51FA\u53D1\uFF0C\u8BA8\u8BBA\u5177\u4F53\u7684\u50AC\u5316\u4F53\u7CFB\u3002",(0,g.jsx)("br",{}),"\u628A\u503C\u5F97\u6BD4\u8F83\u7684\u5019\u9009\uFF0C\u53D8\u6210\u503C\u5F97\u9A8C\u8BC1\u7684\u95EE\u9898\u3002"]}),(0,g.jsxs)(re.div,{className:"closing-conversation",...i(.24),children:[(0,g.jsx)("p",{children:"\u53EF\u4EE5\u4ECE\u8FD9\u4E9B\u95EE\u9898\u5F00\u59CB"}),(0,g.jsxs)("ul",{"aria-label":"\u7814\u7A76\u4EA4\u6D41\u65B9\u5411",children:[(0,g.jsx)("li",{children:"\u50AC\u5316\u5242\u600E\u4E48\u9009"}),(0,g.jsx)("li",{children:"\u53CD\u5E94\u6761\u4EF6\u600E\u4E48\u5B9A"}),(0,g.jsx)("li",{children:"\u5DF2\u6709\u6570\u636E\u600E\u4E48\u7528"})]})]})]}),(0,g.jsxs)(re.div,{className:"closing-signature","aria-hidden":"true",...i(.12),children:[(0,g.jsx)("div",{className:"closing-mark-light"}),(0,g.jsx)(Ue,{reduced:m,effect:a}),(0,g.jsxs)("p",{children:["\u7F29\u5C0F\u8303\u56F4",(0,g.jsx)("span",{}),"\u518D\u505A\u9A8C\u8BC1"]})]})]}),(0,g.jsxs)(re.footer,{className:"closing-footer",...i(.3),children:[(0,g.jsxs)("div",{className:"closing-brand",children:[(0,g.jsx)("strong",{children:"\u8C61\u751F\u79D1\u6280"}),(0,g.jsx)("span",{children:"ECOGIANT"})]}),(0,g.jsxs)("nav",{"aria-label":"\u6536\u5C3E\u5BFC\u822A",children:[(0,g.jsxs)("a",{href:r,children:["\u56DE\u770B\u7814\u7A76\u6848\u4F8B",(0,g.jsx)(ze,{size:17,"aria-hidden":"true"})]}),(0,g.jsxs)("a",{href:s,children:["\u8FD4\u56DE\u9996\u9875",(0,g.jsx)(Ve,{size:16,"aria-hidden":"true"})]})]}),p&&(0,g.jsx)("div",{className:"closing-footer-controls",children:p})]})]})}var qe=M(ve(),1);var Te=M(N(),1);function He(){let[t,r]=(0,qe.useState)(()=>{let n;try{n=localStorage.getItem(Se)}catch{}return xe(new URL(location.href).searchParams.get("logo"),n)});function s(n){let a=xe(n);r(a);try{localStorage.setItem(Se,a)}catch{}let p=new URL(location.href);p.searchParams.set("logo",a),history.replaceState(null,"",p)}return[t,s]}function Ce({value:t,onChange:r,reduced:s=!1}){let n=ce();return(0,Te.jsx)("div",{className:"closing-logo-options",role:"group","aria-label":"Logo \u6548\u679C",children:(0,Te.jsx)(Xe,{value:t,onValueChange:r,className:"closing-logo-option-surface",disabled:s||n,children:Be.map(a=>(0,Te.jsx)("button",{type:"button","data-id":a.id,"aria-pressed":a.id===t,title:a.hint,children:a.label},a.id))})})}var $=M(N(),1);function Ot(t){let r=(0,je.createRoot)(t);function s(){let[n,a]=He(),[p,f]=(0,Ke.useState)(!1);return(0,$.jsx)(Le,{logoEffect:n,reduced:p,controls:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Ce,{value:n,onChange:a,reduced:p}),(0,$.jsxs)("label",{className:"closing-static-option",children:[(0,$.jsx)("input",{type:"checkbox",checked:p,onChange:m=>f(m.target.checked)}),"\u9759\u6001 Logo"]})]})})}return(0,Qe.flushSync)(()=>r.render((0,$.jsx)(s,{}))),{dispose:()=>r.unmount()}}export{Ot as mountHomepageClosing};
