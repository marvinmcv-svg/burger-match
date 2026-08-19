# Burger Match — Project Worklog

---
Task ID: 1
Agent: Z.ai Code (main orchestrator)
Task: Build a 3D scroll-motion website for Burger Match (Santa Cruz, Bolivia) using the brand's black + yellow palette and bold typography; scrape real info from social media; power the menu via a backend API + Prisma.

Work Log:
- Researched Burger Match via web_search + page_reader (Instagram @burgermatch_bo, Facebook BurgerMatchbo, PedidosYa menu page, TripAdvisor). Extracted: 2 locations (Equipetrol + Beni), phone +591 77670931 / 77616377, hours "Lunes a Lunes 11AM–11PM", full menu (Bacon Cheese, Smoke Match, 1/4 de Libra, Honey Chick, Munchies, Eggsplosion, Americana), combos (Combo Simple 49 Bs, Combo Doble 59 Bs, Combo Hambre Mundialero 95 Bs, Menú MedioDía), tagline "Cada hamburguesa es un match hecho en el cielo de los sabores".
- Set up brand design system in globals.css: black (#0a0a0a) + yellow (#ffd60a) theme variables, Anton (display) + Inter (body) fonts via next/font, custom 3D utilities (perspective, preserve-3d, text-stroke), marquee/spin animations, grain overlay, glow effects, custom scrollbar.
- Updated layout.tsx: Anton + Inter fonts, Spanish metadata, OG/Twitter cards.
- Prisma schema (Category, MenuItem, Combo, Location, Testimonial) + db:push + seed script (prisma/seed.ts) with all real menu/brand data.
- Backend API: GET /api/menu (categories + items + combos) and GET /api/info (brand, locations, testimonials) via Prisma.
- Frontend (src/components/site/): Nav (sticky, mobile drawer), Hero (3D scroll-linked burger rotation + mouse-parallax tilt + parallax bg text), Marquee, Philosophy (sticky word-by-word scroll reveal), MenuSection (category tabs + 3D tilt cards fetching /api/menu), Combos (sticky coverflow driven by vertical scroll), Locations (3D tilt cards fetching /api/info), Testimonials, CTA + sticky Footer.
- page.tsx orchestrates with min-h-screen flex flex-col + mt-auto footer.
- Generated 6 AI food images (hero-burger, smoke-match, honey-chick, eggsplosion, combo-mundialero, tenders) via image-generation skill.
- Quietened Prisma query logging (error/warn only).
- Fixed hero layout: burger centered, headline+CTA at bottom (was overlapping burger on mobile — caught by VLM).
- Lint: clean (0 errors, 0 warnings).
- Agent Browser self-verification (desktop 1440x900 + mobile 390x844): page renders 200, all sections present (hero h1, menu 21 cards, combos, locations 4, testimonials, footer), scroll-to-bottom works, NO horizontal overflow on mobile, NO runtime/hydration errors in dev.log. VLM rated hero 9/10 on both desktop and mobile.

Stage Summary:
- Production-ready single-page Next.js 16 site for Burger Match with cinematic 3D scroll motion (Framer Motion useScroll/useTransform), data-driven menu from Prisma + API, real scraped brand info, black+yellow Anton/Inter design system, fully responsive, sticky footer, AI-generated food photography.
- All verification (lint, render, API, Agent Browser, VLM) passed.
- Artifacts: src/app/page.tsx, src/app/layout.tsx, src/app/globals.css, src/app/api/{menu,info}/route.ts, src/components/site/*.tsx, src/lib/site.ts, prisma/schema.prisma, prisma/seed.ts, public/menu/*.png.
