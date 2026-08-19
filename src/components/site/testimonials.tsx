"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useInfo } from "@/lib/site";

export function Testimonials() {
  const { data, loading } = useInfo();
  const items = data?.testimonials ?? [];

  return (
    <section
      id="opiniones"
      className="relative bg-[#0a0a0a] py-20 sm:py-28 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#ffd60a] font-medium">
              Opiniones
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl leading-none text-white">
              UN <span className="text-[#ffd60a]">10 DE 10</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-[#ffd60a] text-[#ffd60a]" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-white">4.9</span>
              <span className="text-white/50"> / 5 · +500 reseñas</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-56 animate-pulse rounded-3xl border border-white/10 bg-white/[0.02]"
                />
              ))
            : items.map((t, i) => (
                <motion.blockquote
                  key={t.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 sm:p-7 hover:border-[#ffd60a]/40 transition-colors"
                >
                  <Quote size={28} className="mb-4 text-[#ffd60a]/50" />
                  <p className="flex-1 text-base leading-relaxed text-white/80">
                    “{t.text}”
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">{t.author}</div>
                      <div className="text-xs text-white/45">{t.source}</div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: t.rating }).map((_, k) => (
                        <Star key={k} size={13} className="fill-[#ffd60a] text-[#ffd60a]" />
                      ))}
                    </div>
                  </div>
                </motion.blockquote>
              ))}
        </div>
      </div>
    </section>
  );
}
