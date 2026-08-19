"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";
import { useInfo } from "@/lib/site";
import { TiltCard } from "./tilt-card";

const PEDIDOSYA =
  "https://www.pedidosya.com.bo/restaurantes/santa-cruz-de-la-sierra/burger-match--equipetrol-7c2c6364-a718-403c-aaf2-59c7e39598cf-menu";

export function Locations() {
  const { data, loading } = useInfo();
  const locations = data?.locations ?? [];

  return (
    <section id="sucursales" className="relative bg-[#0a0a0a] py-20 sm:py-28 md:py-32 overflow-hidden bm-grain">
      {/* big watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[24vw] leading-none text-white/[0.03]"
      >
        VISITANOS
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#ffd60a] font-medium">
              Sucursales
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl leading-none text-white">
              VENÍ A <span className="text-[#ffd60a]">JUGAR</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Dos canchas en Santa Cruz de la Sierra. Abierto Lunes a Lunes, de 11:00 AM a 11:00 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          {loading
            ? Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-3xl border border-white/10 bg-white/[0.02]"
                />
              ))
            : locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard className="rounded-3xl" max={6}>
                    <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 sm:p-8">
                      {/* index number */}
                      <div
                        className="absolute right-6 top-6 font-display text-7xl text-white/[0.04]"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        0{i + 1}
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl text-white" style={{ transform: "translateZ(30px)" }}>
                        {loc.name}
                      </h3>

                      <div className="mt-5 space-y-3 text-sm" style={{ transform: "translateZ(20px)" }}>
                        <div className="flex items-start gap-3 text-white/70">
                          <MapPin size={16} className="mt-0.5 shrink-0 text-[#ffd60a]" />
                          <span>{loc.address}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <Clock size={16} className="shrink-0 text-[#ffd60a]" />
                          <span>{loc.hours}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <Phone size={16} className="shrink-0 text-[#ffd60a]" />
                          <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-white">
                            {loc.phone}
                          </a>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3" style={{ transform: "translateZ(15px)" }}>
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#ffd60a] hover:text-[#ffd60a]"
                        >
                          <Navigation size={14} /> Cómo llegar
                        </a>
                        <a
                          href={PEDIDOSYA}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#ffd60a] px-4 py-2 text-xs font-bold text-black transition-colors hover:bg-[#ffe23b]"
                        >
                          Pedir delivery <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
