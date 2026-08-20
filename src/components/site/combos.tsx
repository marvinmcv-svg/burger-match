"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Crown, ArrowRight } from "lucide-react";
import { useMenu, type Combo } from "@/lib/site";
import { cn } from "@/lib/utils";

const PEDIDOSYA =
  "https://www.pedidosya.com.bo/restaurantes/santa-cruz-de-la-sierra/burger-match--equipetrol-7c2c6364-a718-403c-aaf2-59c7e39598cf-menu";

function formatBs(v: number) {
  return `${v.toFixed(v % 1 === 0 ? 0 : 1)} Bs`;
}

function ComboCard({
  combo,
  index,
  total,
  progress,
}: {
  combo: Combo;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // active index over the scroll (0 .. total-1)
  const x = useTransform(
    progress,
    (p) => `calc(${(index - p * (total - 1)).toFixed(4)} * var(--step))`
  );
  const distance = useTransform(progress, (p) => Math.abs(index - p * (total - 1)));
  const rotateY = useTransform(progress, (p) => {
    const d = index - p * (total - 1);
    const ang = (Math.min(Math.abs(d), 1.5) / 1.5) * 42;
    return d > 0 ? -ang : ang;
  });
  const scale = useTransform(distance, [0, 1.5], [1, 0.82]);
  const opacity = useTransform(distance, [0, 0.5, 1.6], [1, 0.85, 0.32]);
  const zIndex = useTransform(distance, [0, 1.5], [40, 1]);

  return (
    <motion.div
      style={{ x, rotateY, scale, opacity, zIndex }}
      className="preserve-3d absolute left-1/2 top-1/2 w-[80vw] max-w-md -translate-x-1/2 -translate-y-1/2 sm:w-[440px]"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[28px] border bg-gradient-to-b from-white/[0.08] to-white/[0.01] p-6 sm:p-8 transition-shadow",
          combo.isSignature
            ? "border-[#ffd60a]/60 bm-glow-yellow"
            : "border-white/10"
        )}
      >
        {combo.badge && (
          <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-[#ffd60a] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
            {combo.isSignature && <Crown size={11} className="fill-black" />}
            {combo.badge}
          </span>
        )}

        <div className="relative mb-5 flex h-40 items-center justify-center sm:h-48">
          <div className="absolute inset-0 rounded-full bg-[#ffd60a]/10 blur-2xl" />
          {combo.image ? (
            <img
              src={combo.image}
              alt={combo.name}
              className="relative h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              draggable={false}
            />
          ) : null}
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl sm:text-3xl leading-tight text-white">
            {combo.name}
          </h3>
          <span className="shrink-0 rounded-full bg-[#ffd60a] px-3 py-1.5 text-sm font-bold text-black">
            {formatBs(combo.priceBs)}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/65">{combo.description}</p>

        {combo.items.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {combo.items.map((it) => (
              <li
                key={it}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/55"
              >
                {it}
              </li>
            ))}
          </ul>
        )}

        <a
          href={PEDIDOSYA}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffd60a] py-3 text-sm font-bold text-black transition-colors hover:bg-[#ffe23b]"
        >
          Pedir este combo <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}

function StageSkeleton() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[80vw] max-w-md -translate-x-1/2 -translate-y-1/2 sm:w-[440px]">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8">
        <div className="mb-5 h-40 w-full animate-pulse rounded-2xl bg-white/5 sm:h-48" />
        <div className="mb-3 flex justify-between">
          <div className="h-7 w-40 animate-pulse rounded bg-white/5" />
          <div className="h-7 w-16 animate-pulse rounded-full bg-white/5" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-white/5" />
          <div className="h-3 w-3/4 animate-pulse rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function ProgressLabel({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  const label = useTransform(
    progress,
    (p) => `Combo ${Math.min(total, Math.max(1, Math.round(p * Math.max(1, total - 1)) + 1))} / ${total || "…"}`
  );
  return <motion.span>{label}</motion.span>;
}

export function Combos() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { data, loading } = useMenu();
  const combos = data?.combos ?? [];

  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="combos" ref={ref} className="relative h-[300vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bm-grain">
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd60a]/[0.08] blur-[140px]" />

        {/* header */}
        <div className="absolute inset-x-0 top-0 z-20 pt-20 sm:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#ffd60a] font-medium">
                  Combos
                </span>
                <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl leading-none text-white">
                  PARA GANAR <span className="text-[#ffd60a]">EN EQUIPO</span>
                </h2>
              </div>
              <p className="hidden max-w-xs text-right text-sm text-white/50 sm:block">
                Combos para uno, para dos y para todo el equipo. Hacé scroll para explorar.
              </p>
            </div>
          </div>
        </div>

        {/* coverflow stage */}
        <div
          className="perspective-2000 absolute inset-0 [--step:78vw] sm:[--step:460px]"
        >
          {loading || combos.length === 0 ? (
            <StageSkeleton />
          ) : (
            combos.map((c, i) => (
              <ComboCard
                key={c.id}
                combo={c}
                index={i}
                total={combos.length}
                progress={scrollYProgress}
              />
            ))
          )}
        </div>

        {/* progress bar */}
        <div className="absolute inset-x-0 bottom-8 z-20 sm:bottom-10">
          <div className="mx-auto max-w-md px-6">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div style={{ width: barWidth }} className="h-full bg-[#ffd60a]" />
            </div>
            <p className="mt-2 text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
              <ProgressLabel progress={scrollYProgress} total={combos.length} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
