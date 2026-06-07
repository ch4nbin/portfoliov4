"use client";

import { useEffect, useRef } from "react";

// base
const CAT_BASE = ` |\\      _,,,---,,_
  /,\`.-'\`'    -.  ;-;;,_
 |,4-  ) )-,_..;\\ (  \`'-'
'---''(_/--'  \`-'\\_)`;

// blink — , eyes become .
const CAT_BLINK = ` |\\      _,,,---,,_
  /.\`.-'\`'    -.  ;-;;,_
 |.4-  ) )-,_..;\\ (  \`'-'
'---''(_/--'  \`-'\\_)`;

// Z streams — staggered
const ZS = [
  { x: 2,  delay: 0.0, size: "z" },
  { x: 5,  delay: 1.0, size: "Z" },
  { x: 1,  delay: 2.0, size: "z" },
  { x: 7,  delay: 1.5, size: "Z" },
  { x: 4,  delay: 0.5, size: "z" },
];

// Floating particles — tight cluster around the Z's (x: -2 to 5)
const PARTICLES = [
  { x: -2, y: 0, delay: 0.3,  ch: "." },
  { x:  0, y: 1, delay: 0.7,  ch: "*" },
  { x:  2, y: 3, delay: 1.1,  ch: "." },
  { x: -1, y: 2, delay: 1.8,  ch: "'" },
  { x:  3, y: 2, delay: 0.9,  ch: "." },
  { x:  1, y: 1, delay: 2.2,  ch: "*" },
  { x: -2, y: 4, delay: 0.2,  ch: "'" },
  { x:  4, y: 3, delay: 1.5,  ch: "." },
  { x:  0, y: 0, delay: 2.7,  ch: "*" },
  { x:  3, y: 4, delay: 0.6,  ch: "'" },
  { x: -1, y: 2, delay: 1.3,  ch: "." },
  { x:  2, y: 0, delay: 2.5,  ch: "*" },
];

const CANVAS_W = 20;
const CANVAS_H = 9;

const MEOWS = ["meow", "mrrp", "prrr", "mew"];

export default function AsciiAnimation() {
  const ref = useRef<HTMLPreElement>(null);
  const catRef = useRef<HTMLPreElement>(null);
  const meowRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const start = useRef<number | null>(null);
  const meowTime = useRef<number>(-999);
  const meowIdx = useRef<number>(0);

  useEffect(() => {
    function tick(ts: number) {
      if (!start.current) start.current = ts;
      const t = (ts - start.current) / 1000;

      const shiftPeriod = 1.7;
      const shiftPhase = (t % shiftPeriod) / shiftPeriod;
      const shiftDir = Math.floor(t / shiftPeriod) % 2 === 0 ? 1 : -1;
      const isShifting = shiftPhase < 0.18;

      const blinkPhase = (t % 2.5) / 2.5;
      const isBlinking = blinkPhase > 0.55 && blinkPhase < 0.97;

      const catArt = isBlinking ? CAT_BLINK : CAT_BASE;

      const catLines = catArt.split("\n").map(line => {
        if (isShifting && shiftDir > 0) return "  " + line;
        if (isShifting && shiftDir < 0) return line;
        return " " + line;
      });

      const canvas: string[][] = Array.from({ length: CANVAS_H }, () =>
        Array(CANVAS_W).fill(" ")
      );

      for (const z of ZS) {
        const cycle = ((t * 1.4 - z.delay) % 3.0 + 3.0) % 3.0;
        const row = CANVAS_H - 1 - Math.floor((cycle / 3.0) * CANVAS_H);
        const opacity = Math.sin((cycle / 3.0) * Math.PI);
        if (opacity < 0.2) continue;
        if (row >= 0 && row < CANVAS_H && z.x < CANVAS_W) {
          canvas[row][z.x] = z.size;
        }
      }

      for (const p of PARTICLES) {
        const cycle = ((t * 1.6 - p.delay) % 4.0 + 4.0) % 4.0;
        const row = p.y + CANVAS_H - 2 - Math.floor((cycle / 4.0) * (CANVAS_H + 1));
        const twinkle = Math.sin(t * 3.5 + p.delay * 7) > 0.3;
        if (!twinkle) continue;
        const col = Math.max(0, p.x + 1);
        if (row >= 0 && row < CANVAS_H && col < CANVAS_W) {
          canvas[row][col] = p.ch;
        }
      }

      // meow bubble — appears for 1.5s after click
      const meowElapsed = t - meowTime.current;
      const meowActive = meowElapsed < 1.5;
      const meowFading = meowElapsed > 1.0;
      const meowText = meowActive
        ? (meowFading ? `*${MEOWS[meowIdx.current]}*` : `*${MEOWS[meowIdx.current]}!*`)
        : "";

      const meowLine = meowText
        ? meowText.padStart(meowText.length + 6)
        : "";

      const zArt = [...canvas.map(r => r.join(""))].join("\n");
      const catArt2 = ["", ...catLines].join("\n");
      const meow = meowText || "";

      if (ref.current) ref.current.textContent = zArt;
      if (catRef.current) catRef.current.textContent = catArt2;
      if (meowRef.current) meowRef.current.textContent = meow;
      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const style: React.CSSProperties = { fontSize: "13px", lineHeight: "1.15", letterSpacing: "0em", fontWeight: "500", display: "block", userSelect: "none" };

  return (
    <div style={{ display: "inline-block", pointerEvents: "none" }}>
      {/* Z animation — no click */}
      <pre ref={ref} className="ascii-anim" style={{ ...style, pointerEvents: "none" }} />
      {/* Cat — clickable */}
      <pre
        ref={catRef}
        className="ascii-anim"
        style={{ ...style, cursor: "pointer", pointerEvents: "auto" }}
        onClick={() => {
          meowTime.current = start.current !== null ? (performance.now() - start.current) / 1000 : 0;
          meowIdx.current = (meowIdx.current + 1) % MEOWS.length;
        }}
      />
      {/* Meow — centered below cat */}
      <div ref={meowRef} style={{ fontSize: "13px", fontFamily: "Courier New, monospace", fontWeight: "500", minHeight: "1.15em", lineHeight: "1.15", textAlign: "center", marginTop: "8px" }} />
    </div>
  );
}
