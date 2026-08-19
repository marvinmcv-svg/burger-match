"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

const PEDIDOSYA =
  "https://www.pedidosya.com.bo/restaurantes/santa-cruz-de-la-sierra/burger-match--equipetrol-7c2c6364-a718-403c-aaf2-59c7e39598cf-menu";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // scroll-linked transforms
  const burgerY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const burgerScale = useTransform(scrollYProgress, [0, 1], [1, 0.62]);
  const burgerRotateZ = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const burgerOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // mouse parallax tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 150, damping: 18 });

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0a0a0a] bm-grain"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {/* ambient yellow glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[#ffd60a]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-[#ffd60a]/10 blur-[140px]" />

      {/* giant background word */}
      <motion.div
        style={{ y: bgTextY, x: bgTextX }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="flex flex-col items-center leading-[0.82]">
          <span className="font-display text-[26vw] sm:text-[22vw] text-stroke-thin select-none">
            BURGER
          </span>
          <span className="font-display text-[26vw] sm:text-[22vw] text-[#ffd60a] text-glow-yellow select-none">
            MATCH
          </span>
        </div>
      </motion.div>

      {/* 3D burger */}
      <motion.div
        style={{ y: burgerY, scale: burgerScale, rotateZ: burgerRotateZ, opacity: burgerOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="perspective-2000">
          <motion.div
            style={{ rotateX: rx, rotateY: ry }}
            className="preserve-3d relative"
          >
            {/* glow ring behind burger */}
            <div className="absolute -inset-10 rounded-full bg-[#ffd60a]/25 blur-3xl scale-110" />
            {/* floating burger image */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 h-[44vh] w-[44vh] sm:h-[52vh] sm:w-[52vh] max-h-[560px] max-w-[560px]"
            >
              <img
                src="/menu/hero-burger.png"
                alt="Hamburguesa Bacon Cheese Burger doble de Burger Match"
                className="h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                draggable={false}
              />
            </motion.div>
            {/* small orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#ffd60a] shadow-[0_0_20px_rgba(255,214,10,0.9)]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* headline + sub */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="absolute inset-x-0 top-0 z-20 flex h-full flex-col items-center justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#ffd60a]/40 bg-[#ffd60a]/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#ffd60a]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffd60a] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffd60a]" />
          </span>
          Santa Cruz de la Sierra · Bolivia
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-3 sm:gap-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white max-w-5xl"
          >
            HAMBURGUESAS QUE
            <br />
            <span className="text-[#ffd60a] text-glow-yellow">HACEN MATCH</span>
          </motion.h1>
          <p className="max-w-xl text-sm sm:text-base text-white/70">
            Carne 100% res, pan brioche y sabores que se eligen como en una cita perfecta. Abierto Lunes a Lunes en Equipetrol y Beni.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#menu"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black hover:bg-white/90 transition-colors hover:scale-[1.03] active:scale-95"
            >
              Ver el menú
            </a>
            <a
              href={PEDIDOSYA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#ffd60a] px-6 py-3 text-sm font-bold text-black hover:bg-[#ffe23b] transition-colors hover:scale-[1.03] active:scale-95 bm-glow-yellow"
            >
              Pedir ahora
            </a>
          </div>

          <a
            href="#filosofia"
            className="mt-2 sm:mt-4 flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
            aria-label="Bajar"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={18} />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
