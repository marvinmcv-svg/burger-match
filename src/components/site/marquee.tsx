"use client";

const ITEMS = [
  "BACON CHEESE",
  "SMOKE MATCH",
  "1/4 DE LIBRA",
  "HONEY CHICK",
  "MUNCHIES",
  "EGGSPLOSION",
  "AMERICANA",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-hidden
      className="relative z-30 -mt-2 border-y border-white/10 bg-[#ffd60a] py-3 sm:py-4 overflow-hidden"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl text-black px-6">
              {it}
            </span>
            <span className="text-black/70 text-2xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
