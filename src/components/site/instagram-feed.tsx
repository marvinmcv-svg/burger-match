"use client";

import { motion } from "framer-motion";
import { Instagram, Play, ArrowUpRight } from "lucide-react";

const INSTAGRAM = "https://www.instagram.com/burgermatch_bo/";

// Real Instagram photos scraped from @burgermatch_bo (CDN image URLs)
const GALLERY = [
  { src: "/ig/post_01.jpg", alt: "Sucursal y ambiente Burger Match" },
  { src: "/ig/post_02.jpg", alt: "Compartiendo en Burger Match" },
  { src: "/ig/post_03.jpg", alt: "Hamburguesa con huevo de Burger Match" },
  { src: "/ig/post_04.jpg", alt: "El local de Burger Match" },
  { src: "/ig/post_05.jpg", alt: "Combo de hamburguesa con papas" },
  { src: "/ig/post_06.jpg", alt: "Branding Burger Match" },
  { src: "/ig/post_07.jpg", alt: "Ambiente Burger Match" },
  { src: "/ig/post_08.jpg", alt: "Combo de hamburguesa" },
  { src: "/ig/post_09.jpg", alt: "Combo completo de Burger Match" },
  { src: "/ig/post_10.jpg", alt: "Branding Burger Match" },
  { src: "/ig/post_11.jpg", alt: "Combo de hamburguesa con papas" },
  { src: "/ig/post_12.jpg", alt: "Hamburguesa con huevo" },
];

// Real Instagram reel shortcodes scraped from @burgermatch_bo
const REELS = [
  { shortcode: "DcM4RX4uet4", caption: "Lo último de Burger Match" },
  { shortcode: "DbZQFeuO7JC", caption: "Combo Hambre Mundialero" },
  { shortcode: "DaOcyeVx5Ob", caption: "Menú MedioDía" },
];

export function InstagramFeed() {
  return (
    <section id="instagram" className="relative bg-[#0a0a0a] py-20 sm:py-28 md:py-32 overflow-hidden bm-grain">
      {/* watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-10 select-none font-display text-[20vw] leading-none text-white/[0.03]"
      >
        @BURGERMATCH_BO
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-10 sm:mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#ffd60a] font-medium">
              En Instagram
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl leading-none text-white">
              SEGUINOS EN <span className="text-[#ffd60a]">@BURGERMATCH_BO</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#ffd60a]/40 bg-[#ffd60a]/10 px-5 py-2.5 text-sm font-semibold text-[#ffd60a] hover:bg-[#ffd60a] hover:text-black transition-colors"
          >
            <Instagram size={16} /> Seguir
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Reels — real embedded Instagram videos */}
        <div className="mb-16 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {REELS.map((reel, i) => (
            <motion.div
              key={reel.shortcode}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.shortcode}/embed/`}
                  title={`Reel de Burger Match: ${reel.caption}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Play size={14} className="fill-[#ffd60a] text-[#ffd60a]" />
                  <span>{reel.caption}</span>
                </div>
                <a
                  href={`https://www.instagram.com/reel/${reel.shortcode}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#ffd60a] transition-colors"
                  aria-label="Ver en Instagram"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo gallery — real scraped Instagram post photos */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/15" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/50 font-medium">
            Últimos posts
          </span>
          <span className="h-px flex-1 bg-white/15" />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {GALLERY.map((p, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <Instagram size={22} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Fotos y videos reales extraídos del Instagram oficial{" "}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffd60a] hover:underline"
          >
            @burgermatch_bo
          </a>
        </p>
      </div>
    </section>
  );
}
