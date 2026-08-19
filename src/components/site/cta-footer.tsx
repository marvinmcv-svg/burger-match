"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const PEDIDOSYA =
  "https://www.pedidosya.com.bo/restaurantes/santa-cruz-de-la-sierra/burger-match--equipetrol-7c2c6364-a718-403c-aaf2-59c7e39598cf-menu";
const INSTAGRAM = "https://www.instagram.com/burgermatch_bo/";
const FACEBOOK = "https://www.facebook.com/p/BurgerMatchbo-100063795420989";
const WHATSAPP = "https://wa.me/59177670931";

export function Cta() {
  return (
    <>
      {/* ===== Final CTA ===== */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-24 sm:py-32 md:py-40 bm-grain">
        {/* giant rotating match */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <span className="font-display text-[40vw] leading-none text-[#ffd60a]/[0.06] select-none">
            MATCH
          </span>
        </motion.div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#ffd60a] font-medium"
          >
            El plan está resuelto
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-white"
          >
            PARTIDO
            <br />
            <span className="text-[#ffd60a] text-glow-yellow">BURGER MATCH</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-white/70"
          >
            Pedí por PedidosYa, escribinos por WhatsApp o vení a visitar a tu sucursal más cercana en Santa Cruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={PEDIDOSYA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffd60a] px-7 py-4 text-sm font-bold text-black transition-transform hover:scale-[1.03] active:scale-95 bm-glow-yellow"
            >
              Pedir por PedidosYa <ArrowUpRight size={16} />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-[#ffd60a] hover:text-[#ffd60a]"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            {[
              { href: INSTAGRAM, label: "Instagram", Icon: Instagram },
              { href: FACEBOOK, label: "Facebook", Icon: Facebook },
              { href: "tel:+59177670931", label: "Llamar", Icon: Phone },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("tel:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#ffd60a] hover:text-[#ffd60a]"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* brand */}
            <div className="lg:col-span-2">
              <a href="#top" className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffd60a] text-black font-display text-2xl leading-none">
                  B
                </span>
                <span className="font-display text-2xl tracking-tight text-white">
                  BURGER<span className="text-[#ffd60a]">MATCH</span>
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm text-white/55">
                Cada hamburguesa es un match hecho en el cielo de los sabores. Las mejores hamburguesas de Santa Cruz de la Sierra, Bolivia.
              </p>
            </div>

            {/* nav */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-wider text-[#ffd60a]">Menú</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { l: "Hamburguesas", h: "#menu" },
                  { l: "Combos", h: "#combos" },
                  { l: "Sucursales", h: "#sucursales" },
                  { l: "Opiniones", h: "#opiniones" },
                ].map((i) => (
                  <li key={i.h}>
                    <a href={i.h} className="text-white/60 hover:text-white transition-colors">
                      {i.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-wider text-[#ffd60a]">Contacto</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>Equipetrol · +591 77670931</li>
                <li>Beni · +591 77616377</li>
                <li>Lun a Lun · 11:00 AM – 11:00 PM</li>
                <li className="flex gap-3 pt-1">
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#ffd60a]">
                    <Instagram size={18} />
                  </a>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#ffd60a]">
                    <Facebook size={18} />
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#ffd60a]">
                    <MessageCircle size={18} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Burger Match · Santa Cruz de la Sierra, Bolivia. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/30">
              Hecho con hambre en Bolivia 🇧🇴
            </p>
          </div>
        </div>
      </footer>
  );
}
