var c=`
precision mediump float;
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform vec3 uColor;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform float uNoise;
uniform float uBandWidth;
uniform float uYOffset;
uniform float uFadeTop;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform int uIterations;
uniform float uIntensity;
uniform float uLightMode;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 uv = vUv;
  uv.y += uYOffset;
  vec2 p = uv * 2.0 - 1.0;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  float aspect = uCanvas.x / uCanvas.y;
  vec2 q = vec2(rp.x * aspect, rp.y);
  float invScale = 1.0 / max(uScale, 0.0001);
  q *= invScale;
  q /= 0.5 + 0.2 * dot(q, q);
  q += (uPointer - rp) * uMouseInfluence * 0.2;
  q += 0.2 * cos(t) - 7.56;

  for (int i = 0; i < 5; i++) {
    if (i >= uIterations) break;
    vec2 r = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
    q = q + (r - q) * uWarpStrength;
  }

  float m = length(q + sin(5.0 * q.y * uFrequency - 3.0 * t) * 0.25);

  float w = 1.0 - exp(-6.0 / exp(6.0 * m));
  w = pow(clamp(w, 0.0, 1.0), uBandWidth);
  w *= smoothstep(uFadeTop, 0.0, vUv.y);
  w *= uIntensity;

  float grain = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453) - 0.5;

  if (uLightMode > 0.5) {
    float alpha = clamp(w * 0.78, 0.0, 0.8);
    vec3 lightCol = mix(vec3(1.0), uColor, 0.96);
    lightCol = clamp(lightCol + uColor * grain * uNoise * 0.45, 0.0, 1.0);
    gl_FragColor = vec4(lightCol * alpha, alpha);
    return;
  }

  vec3 col = uColor * w;
  col += grain * uNoise;
  col = clamp(col, 0.0, 1.0) * w;

  gl_FragColor = vec4(col, w);
}
`,m=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function t(o,e,n){if(!o.includes(e)||o.indexOf(e)!==o.lastIndexOf(e))throw new Error("React Bits shader hook changed; review the pinned upstream source");return o.replace(e,n)}function s(o){return t(o,"void main() {",`
uniform float uBrandStyle;
uniform float uBrandTime;
void main() {`)}function x(o,e=0){return e?t(s(o),"  col -= fract",`
  float brandEnergy = max(col.r, max(col.g, col.b));
  float crossAxis = uPillarRot.x * p.x - uPillarRot.y * p.y;
  float curvedAxis = axis + 0.32 * sin(crossAxis * 2.2 + axis * 1.2 + uBrandTime * 0.15);
  float phase = curvedAxis * 76.0 - uBrandTime * 0.22;
  float rib = pow(0.5 + 0.5 * cos(phase), 42.0);
  float longitudinal = (crossAxis + 0.3 * sin(axis * 1.3 + uBrandTime * 0.15)) * 62.0;
  float contour = pow(0.5 + 0.5 * cos(longitudinal), 56.0);
  float presence = smoothstep(0.06, 0.6, brandEnergy);
  if (uBrandStyle < 1.5) {
    vec3 hue = mix(vec3(0.27, 0.18, 0.84), vec3(0.64, 0.35, 0.96), uv.y);
    col = mix(col, hue * brandEnergy, 0.78);
    col *= 0.96 + 0.04 * cos(phase * 0.5);
    col += vec3(0.5, 0.4, 0.8) * rib * presence * 0.14;
  } else {
    col = mix(col, vec3(0.3, 0.29, 0.84) * brandEnergy, 0.72);
    col += vec3(0.68, 0.72, 0.9) * (rib * 0.015 + contour * 0.36) * presence;
  }
  col -= fract`):o}function y(o,e=0){return e?t(s(o),"  float edge = uFade * 0.5;",`
  float phase = (base * 21.0 + uv.y * 6.0 + uv.x * 2.8) * 6.28318 - uBrandTime * 0.18;
  float rib = pow(0.5 + 0.5 * cos(phase), 32.0);
  float grazing = smoothstep(0.7, 9.0, length(slope)) * smoothstep(0.06, 0.6, base);
  light = mix(light, vec3(0.13, 0.08, 0.43) * energy, 0.12);
  light += vec3(0.18, 0.12, 0.5) * rib * pow(base, 0.85) * 0.7 * uBrandStyle;
  light += vec3(0.3, 0.32, 0.48) * grazing * rib * energy * 0.12;
  float edge = uFade * 0.5;`):o}function b(o,e=0){if(!e)return o;let n=t(s(o),"  vec2 grid = mat2",`
  vec2 brandLocal = (plane - vec2(uView.x * 0.13, uView.y * 0.17)) / uCell;
  float brandFalloff = exp(-dot(brandLocal, brandLocal) / 24.0);
  float brandAngle = 0.13 * brandFalloff * (0.85 + 0.15 * sin(uBrandTime * 0.08)) * uBrandStyle;
  bent += vec2(-brandLocal.y, brandLocal.x) * uCell * brandAngle;
  bent += vec2(-push.y, push.x) * uStrength * uCell * 0.08;
  vec2 grid = mat2`);return n=t(n,"  float radius = length(plane);",`
  shine *= mix(0.86, 2.2, brandFalloff);
  float radius = length(plane);`),t(n,"    outColor = vec4(color * alpha, alpha);",`
    float chroma = 0.5 + 0.5 * sin(length(brandLocal) * 0.7 + atan(brandLocal.y, brandLocal.x));
    color = mix(vec3(0.36, 0.22, 0.9), color, 0.35 + 0.45 * chroma);
    color = mix(color, vec3(0.78, 0.76, 0.92), clamp(lift * 0.8, 0.0, 0.55));
    outColor = vec4(color * alpha, alpha);`)}var f;function w(o=0){if(!o)return c;if(f)return f;let e=t(c,"void main() {",`
uniform float uBrandStyle;
uniform vec3 uBrandColor;
void main() {`);return e=t(e,"  vec2 rp = vec2",`
  if (uBrandStyle > 1.5) {
    p.y -= 0.28 * (p.x - 0.25) * (p.x - 0.25);
  }
  vec2 rp = vec2`),e=t(e,"  w *= uIntensity;",`
  if (uBrandStyle > 1.5) {
    vec2 orbit = vec2((vUv.x - 0.58) * aspect, vUv.y - 0.7);
    float angle = atan(orbit.y, orbit.x);
    w *= 0.78 + 0.22 * smoothstep(-0.7, 0.65, sin(angle * 3.0 + 0.1 * sin(t * 0.3)));
  }
  w *= uIntensity;`),e=t(e,"  vec3 col = uColor * w;",`
  float colorMix = smoothstep(0.05, 0.95, vUv.x * 0.8 + vUv.y * 0.3);
  vec3 brandTint = mix(uBrandColor, uColor, colorMix);
  vec3 col = brandTint * w;`),f=e,e}function S(o,{onStart:e,onStop:n,rootMargin:p="150px"}={}){let i=!1,d=typeof document>"u"||document.visibilityState!=="hidden",a=!1,l=()=>{let r=i&&d;r!==a&&(a=r,r?e?.():n?.())},u=null;o&&typeof IntersectionObserver<"u"?(u=new IntersectionObserver(r=>{i=r[r.length-1].isIntersecting,l()},{rootMargin:p}),u.observe(o)):(i=!0,l());let v=()=>{d=document.visibilityState!=="hidden",l()};return document.addEventListener("visibilitychange",v),()=>{u?.disconnect(),document.removeEventListener("visibilitychange",v),a&&(a=!1,n?.())}}export{m as a,x as b,y as c,b as d,w as e,S as f};
