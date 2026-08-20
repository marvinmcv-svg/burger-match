"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Menú", href: "#menu" },
  { label: "Combos", href: "#combos" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Instagram", href: "#instagram" },
];

const PEDIDOSYA =
  "https://www.pedidosya.com.bo/restaurantes/santa-cruz-de-la-sierra/burger-match--equipetrol-7c2c6364-a718-403c-aaf2-59c7e39598cf-menu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo — real Instagram profile pic from @burgermatch_bo */}
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-xl bg-[#ffd60a] shadow-[0_0_25px_-5px_rgba(255,214,10,0.7)] transition-transform group-hover:rotate-[-6deg]">
              <img
                src="/brand/logo.jpg"
                alt="Logo de Burger Match"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </span>
            <span className="font-display text-xl sm:text-2xl tracking-tight text-white leading-none">
              BURGER<span className="text-[#ffd60a]">MATCH</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-[#ffd60a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href={PEDIDOSYA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#ffd60a] px-5 py-2.5 text-sm font-bold text-black hover:bg-[#ffe23b] transition-colors hover:scale-[1.03] active:scale-95"
            >
              Ordenar ahora
            </a>
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-black/95 border-b border-white/10 backdrop-blur-md"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-white/90 hover:bg-white/5 font-medium"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <a
                  href={PEDIDOSYA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full bg-[#ffd60a] px-5 py-3 text-center text-sm font-bold text-black"
                >
                  Ordenar ahora
                </a>
                <a
                  href="https://www.instagram.com/burgermatch_bo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="tel:+59177670931"
                  aria-label="Llamar"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white"
                >
                  <Phone size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
