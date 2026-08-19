"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const WORDS = [
  "Cada",
  "hamburguesa",
  "es",
  "un",
  "MATCH",
  "hecho",
  "en",
  "el",
  "cielo",
  "de",
  "los",
  "sabores.",
];

function Word({
  word,
  index,
  progress,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / WORDS.length;
  const end = start + 1 / WORDS.length;
  const opacity = useTransform(
    progress,
    [start * 0.7 + 0.1, end * 0.7 + 0.1],
    [0.12, 1]
  );
  const y = useTransform(
    progress,
    [start * 0.7 + 0.1, end * 0.7 + 0.1],
    [24, 0]
  );
  const isMatch = word === "MATCH";
  return (
    <motion.span
      style={{ opacity, y }}
      className={
        isMatch ? "text-[#ffd60a] text-glow-yellow inline-block" : "inline-block"
      }
    >
      {word}
    </motion.span>
  );
}

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const watermarkRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const featuresOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const featuresY = useTransform(scrollYProgress, [0.6, 0.85], [30, 0]);

  return (
    <section
      id="filosofia"
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 sm:py-32 md:py-40 overflow-hidden bm-grain"
    >
      {/* giant rotating MATCH watermark */}
      <motion.div
        style={{ rotate: watermarkRotate }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <span className="font-display text-[42vw] leading-none text-white/[0.025] select-none">
          MATCH
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/15" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#ffd60a] font-medium">
            Nuestra filosofía
          </span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white flex flex-wrap gap-x-3 gap-y-1 justify-center text-center">
          {WORDS.map((w, i) => (
            <Word key={i} word={w} index={i} progress={scrollYProgress} />
          ))}
        </h2>

        <motion.div
          style={{ opacity: featuresOpacity, y: featuresY }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            {
              n: "01",
              t: "Carne 100% res",
              d: "Medallones jugosos preparados al momento, nunca congelados.",
            },
            {
              n: "02",
              t: "Pan brioche",
              d: "Horneado y tostado en casa para un crunch perfecto.",
            },
            {
              n: "03",
              t: "Salsas de la casa",
              d: "Recetas propias que hacen match con cada hamburguesa.",
            },
          ].map((f) => (
            <div
              key={f.n}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#ffd60a]/40 hover:bg-[#ffd60a]/[0.03] transition-colors"
            >
              <div className="font-display text-3xl text-[#ffd60a] mb-3">{f.n}</div>
              <div className="text-white font-semibold mb-1">{f.t}</div>
              <div className="text-sm text-white/60">{f.d}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
