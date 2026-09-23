"use client"

import { useEffect, useRef } from "react"

const VERT = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform float uA;
uniform float uB;
uniform float uMix;

mat2 rot(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

float sdTorus(vec3 p, vec2 t) {
  vec2 q = vec2(length(p.xz) - t.x, p.y);
  return length(q) - t.y;
}

float hash(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash(i);
  float n100 = hash(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  return mix(mix(nx00, nx10, f.y), mix(nx01, nx11, f.y), f.z);
}

float shell(float d, float w) {
  return abs(d) - w;
}

float shape(vec3 p, float id, float t) {
  p *= 0.72;
  p.xz = rot(t * 0.18) * p.xz;
  p.xy = rot(t * 0.07) * p.xy;
  int k = int(id + 0.5);

  if (k == 0) {
    float a = sdTorus(p, vec2(0.92, 0.018));
    vec3 b = p;
    b.yz = rot(1.15 + t * 0.15) * b.yz;
    float c = sdTorus(b, vec2(0.72, 0.014));
    vec3 d = p;
    d.xy = rot(0.7) * d.xy;
    return min(a, min(c, sdTorus(d, vec2(0.5, 0.012))));
  }
  if (k == 1) {
    float a = atan(p.z, p.x);
    float r = length(p.xz);
    vec2 q = vec2(r - 0.62, p.y - sin(3.0 * a) * 0.16);
    q = rot(2.0 * a) * q;
    return length(q) - 0.045;
  }
  if (k == 2) {
    float a = atan(p.z, p.x);
    vec3 q = p;
    q.xz = rot(a * 0.5) * q.xz;
    vec2 m = vec2(length(q.xz) - 0.62, q.y);
    return max(length(m) - 0.05, abs(a) - 2.8);
  }
  if (k == 3) {
    float g = sin(p.x * 5.5) * cos(p.y * 5.5) + sin(p.y * 5.5) * cos(p.z * 5.5) + sin(p.z * 5.5) * cos(p.x * 5.5);
    return shell(g, 0.08) * 0.18;
  }
  if (k == 4) {
    float a = atan(p.z, p.x);
    float h = p.y - a * 0.12;
    vec2 q = vec2(length(p.xz) - 0.15, h);
    return max(length(q) - 0.03, abs(p.y) - 0.7);
  }
  if (k == 5) {
    float r = length(p.xz);
    float c = length(vec2(r - 0.55, p.y)) - 0.22;
    return shell(c, 0.02);
  }
  if (k == 6) {
    float a = sdTorus(p, vec2(0.84, 0.016));
    vec3 b = p;
    b.xz = rot(0.9) * b.xz;
    b.xy = rot(1.2) * b.xy;
    return min(a, sdTorus(b, vec2(0.84, 0.016)));
  }
  if (k == 7) {
    float a = sdTorus(p, vec2(0.95, 0.012));
    vec3 b = p * 1.15;
    b.yz = rot(2.1) * b.yz;
    return min(a, sdTorus(b, vec2(0.62, 0.02)));
  }
  if (k == 8) {
    float a = sdTorus(p, vec2(0.58, 0.02));
    vec3 b = p;
    b.xy = rot(1.5708) * b.xy;
    float c = sdTorus(b, vec2(0.58, 0.02));
    vec3 d = p;
    d.yz = rot(1.5708) * d.yz;
    return min(a, min(c, sdTorus(d, vec2(0.58, 0.02))));
  }
  if (k == 9) {
    float a = atan(p.z, p.x);
    vec2 q = vec2(length(p.xz) - 0.6, p.y);
    q.y -= sin(2.0 * a) * cos(3.0 * a) * 0.18;
    return length(q) - 0.04;
  }
  if (k == 10) {
    float a = atan(p.z, p.x);
    vec3 q = vec3(length(p.xz) - 0.55, p.y, 0.0);
    q.xy = rot(a) * q.xy;
    return length(vec2(q.x, q.y - sin(a * 2.0) * 0.12)) - 0.035;
  }
  if (k == 11) {
    float r = length(p.xz);
    return shell(r - sqrt(0.18 + p.y * p.y), 0.02);
  }
  if (k == 12) {
    vec3 q = p;
    q.x -= 0.2;
    float a = sdTorus(q, vec2(0.48, 0.16));
    return shell(a, 0.025);
  }
  if (k == 13) {
    float a = sdTorus(p, vec2(0.88, 0.015));
    vec3 b = p;
    b.xy = rot(t * 0.4) * b.xy;
    float c = sdTorus(b, vec2(0.62, 0.02));
    vec3 d = p;
    d.yz = rot(t * 0.25 + 1.0) * d.yz;
    return min(a, min(c, sdTorus(d, vec2(0.4, 0.012))));
  }
  if (k == 14) {
    float u = p.x;
    float v = p.z;
    float x = u - u * u * u / 3.0 + u * v * v;
    float y = v - v * v * v / 3.0 + v * u * u;
    vec2 q = vec2(p.x - x * 0.35, p.y);
    return length(q) - 0.05 + abs(p.z) * 0.15;
  }
  if (k == 15) {
    float a = sdTorus(p + vec3(0.15, 0.0, 0.0), vec2(0.55, 0.016));
    vec3 b = p;
    b.xy = rot(1.05) * b.xy;
    float c = sdTorus(b, vec2(0.7, 0.014));
    vec3 d = p;
    d.yz = rot(2.2) * d.yz;
    return min(a, min(c, sdTorus(d, vec2(0.78, 0.012))));
  }
  if (k == 16) {
    float a = sdTorus(p, vec2(0.5, 0.02));
    vec3 b = p + vec3(0.28, 0.0, 0.0);
    b.xy = rot(1.2) * b.xy;
    return min(a, sdTorus(b, vec2(0.42, 0.02)));
  }
  if (k == 17) {
    float a = atan(p.z, p.x);
    float coils = 4.0;
    float y = clamp(p.y, -0.7, 0.7);
    float ang = y * coils;
    vec2 radial = vec2(cos(ang), sin(ang)) * 0.42;
    vec2 xz = p.xz - radial;
    float dy = p.y - y;
    return length(vec3(xz, dy)) - 0.045;
  }
  if (k == 18) {
    float r = length(p.xz);
    float ast = pow(pow(abs(p.x), 0.666) + pow(abs(p.z), 0.666), 1.5);
    return shell(r - ast * 0.35, 0.03) + abs(p.y) * 0.35;
  }
  vec3 z = p;
  for (int i = 0; i < 6; i++) {
    z = vec3(z.x * z.x - z.y * z.y - z.z * z.z, 2.0 * z.x * z.y, 2.0 * z.x * z.z) + vec3(-0.15, 0.65, 0.0);
  }
  return length(z) * pow(2.0, -6.0) - 0.02;
}

float scene(vec3 p) {
  return mix(shape(p, uA, uTime), shape(p, uB, uTime), uMix);
}

vec3 normalAt(vec3 p) {
  vec2 e = vec2(0.002, 0.0);
  return normalize(vec3(
    scene(p + e.xyy) - scene(p - e.xyy),
    scene(p + e.yxy) - scene(p - e.yxy),
    scene(p + e.yyx) - scene(p - e.yyx)
  ));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  vec3 ro = vec3(0.0, 0.04, 2.05);
  vec3 rd = normalize(vec3(uv, -1.45));
  float dist = 0.0;
  float hit = 0.0;
  for (int i = 0; i < 64; i++) {
    float d = scene(ro + rd * dist);
    if (d < 0.0015) {
      hit = 1.0;
      break;
    }
    dist += d;
    if (dist > 5.0) break;
  }
  if (hit < 0.5) {
    gl_FragColor = vec4(0.0);
    return;
  }
  vec3 p = ro + rd * dist;
  vec3 n = normalAt(p);
  vec3 light = normalize(vec3(-0.4, 0.65, 0.55));
  float diff = 0.3 + 0.7 * clamp(dot(n, light), 0.0, 1.0);
  vec3 halfv = normalize(light - rd);
  float spec = pow(clamp(dot(n, halfv), 0.0, 1.0), 42.0);
  float fres = pow(1.0 - clamp(dot(n, -rd), 0.0, 1.0), 2.0);
  vec3 brass = vec3(0.77, 0.64, 0.42);
  vec3 rgb = brass * diff + vec3(1.0, 0.94, 0.82) * spec * 0.45 + brass * fres * 0.28;

  float smoke = 0.0;
  vec3 q = p - n * 0.02;
  for (int i = 0; i < 10; i++) {
    q += rd * 0.045;
    float d = scene(q);
    if (d > 0.08) break;
    float inside = clamp(0.08 - abs(d), 0.0, 0.08) * 12.0;
    float nse = vnoise(q * 2.4 + vec3(0.0, uTime * 0.16, 0.2));
    smoke += inside * nse * 0.05;
  }
  rgb = mix(rgb, vec3(0.9, 0.84, 0.72), clamp(smoke, 0.0, 0.65));
  float alpha = clamp(0.78 + fres * 0.16, 0.0, 0.94);
  alpha *= mix(1.0, 0.28, clamp(smoke * 1.6, 0.0, 1.0));
  float fog = smoothstep(1.15, 3.1, dist);
  rgb = mix(rgb, vec3(0.86, 0.8, 0.7), fog * 0.45);
  alpha = mix(alpha, 0.08, fog);
  gl_FragColor = vec4(rgb, alpha);
}
`

const PERIOD = 5
const FADE = 0.8
const COUNT = 20

export function OrbitLogos() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    const vs = gl.createShader(gl.VERTEX_SHADER)
    const fs = gl.createShader(gl.FRAGMENT_SHADER)
    if (!vs || !fs) return
    gl.shaderSource(vs, VERT)
    gl.shaderSource(fs, FRAG)
    gl.compileShader(vs)
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(fs))
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      return
    }
    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program))
      return
    }
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(program, "aPos")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(program, "uTime")
    const uRes = gl.getUniformLocation(program, "uRes")
    const uA = gl.getUniformLocation(program, "uA")
    const uB = gl.getUniformLocation(program, "uB")
    const uMix = gl.getUniformLocation(program, "uMix")
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let frame = 0
    const start = performance.now()

    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(1, Math.floor(rect.width * dpr))
      const h = Math.max(1, Math.floor(rect.height * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      const elapsed = reduced ? 0.4 : (now - start) / 1000
      const index = Math.floor(elapsed / PERIOD) % COUNT
      const into = elapsed % PERIOD
      const mix = into > PERIOD - FADE ? (into - (PERIOD - FADE)) / FADE : 0
      gl.uniform1f(uTime, elapsed)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uA, index)
      gl.uniform1f(uB, (index + 1) % COUNT)
      gl.uniform1f(uMix, mix)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      if (!reduced) frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frame)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
}
