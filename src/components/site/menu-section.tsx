"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Star, ShoppingBag } from "lucide-react";
import { useMenu, type MenuItem } from "@/lib/site";
import { TiltCard } from "./tilt-card";
import { cn } from "@/lib/utils";

const PEDIDOSYA =
  "https://www.pedidosya.com.bo/restaurantes/santa-cruz-de-la-sierra/burger-match--equipetrol-7c2c6364-a718-403c-aaf2-59c7e39598cf-menu";

function formatBs(v: number) {
  return `${v.toFixed(v % 1 === 0 ? 0 : 1)} Bs`;
}

function ItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -18 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <TiltCard className="h-full rounded-3xl">
        <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-5 transition-colors duration-300 hover:border-[#ffd60a]/50">
          {/* signature badge */}
          {item.isSignature && (
            <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-[#ffd60a] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
              <Star size={11} className="fill-black" /> Top
            </span>
          )}

          {/* image */}
          <div className="relative mx-auto mb-4 flex h-40 w-40 items-center justify-center sm:h-44 sm:w-44">
            <div className="absolute inset-0 rounded-full bg-[#ffd60a]/10 blur-2xl" />
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="relative h-full w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-110"
                style={{ transform: "translateZ(40px)" }}
                draggable={false}
              />
            ) : (
              <div
                className="relative flex h-full w-full items-center justify-center rounded-full border border-[#ffd60a]/30 bg-[#ffd60a]/5"
                style={{ transform: "translateZ(40px)" }}
              >
                <span className="font-display text-5xl text-[#ffd60a]/80">
                  {item.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* name + price */}
          <div className="flex items-start justify-between gap-3" style={{ transform: "translateZ(30px)" }}>
            <h3 className="font-display text-xl sm:text-2xl leading-tight text-white">
              {item.name}
            </h3>
            <span className="shrink-0 rounded-full bg-[#ffd60a] px-3 py-1 text-sm font-bold text-black">
              {formatBs(item.priceBs)}
            </span>
          </div>

          {/* description */}
          <p className="mt-2 text-sm leading-relaxed text-white/60" style={{ transform: "translateZ(20px)" }}>
            {item.description}
          </p>

          {/* tags */}
          {item.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5" style={{ transform: "translateZ(15px)" }}>
              {item.tags.includes("spicy") && (
                <span className="inline-flex items-center gap-1 rounded-md bg-red-500/15 px-2 py-0.5 text-[10px] font-medium text-red-300">
                  <Flame size={10} /> Picante
                </span>
              )}
              {item.tags.filter((t) => t !== "spicy").slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/50"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* order */}
          <a
            href={PEDIDOSYA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#ffd60a] hover:bg-[#ffd60a] hover:text-black"
          >
            <ShoppingBag size={15} /> Ordenar
          </a>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-5">
      <div className="mx-auto mb-4 h-40 w-40 animate-pulse rounded-full bg-white/5" />
      <div className="mb-3 flex justify-between">
        <div className="h-6 w-28 animate-pulse rounded bg-white/5" />
        <div className="h-6 w-14 animate-pulse rounded-full bg-white/5" />
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-white/5" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-white/5" />
      </div>
    </div>
  );
}

export function MenuSection() {
  const { data, loading, error } = useMenu();
  const [active, setActive] = useState<string>("hamburguesas");

  const categories = data?.categories ?? [];
  const current = categories.find((c) => c.slug === active) ?? categories[0];
  const items = current?.items ?? [];

  return (
    <section id="menu" className="relative bg-[#0a0a0a] py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-10 sm:mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#ffd60a] font-medium">
              El menú
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl leading-none text-white">
              ELEGÍ TU <span className="text-[#ffd60a]">MATCH</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Desde la icónica Bacon Cheese hasta la Smoke Match de la Burger Week. Hay un match para cada antojo.
          </p>
        </div>

        {/* tabs */}
        <div className="mb-8 sm:mb-10 flex flex-wrap gap-2">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-10 w-32 animate-pulse rounded-full bg-white/5" />
              ))
            : categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.slug)}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                    active === c.slug
                      ? "text-black"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {active === c.slug && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-[#ffd60a]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{c.name}</span>
                </button>
              ))}
        </div>

        {/* grid */}
        {error ? (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 text-center text-sm text-red-300">
            No pudimos cargar el menú. Intenta de nuevo en un momento.
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={current?.id ?? "loading"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {loading
                ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
                : items.map((it, i) => (
                    <ItemCard key={it.id} item={it} index={i} />
                  ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
