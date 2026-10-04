# 🍔 Burger Match

The official website for **Burger Match** — Santa Cruz de la Sierra, Bolivia.

A cinematic, single-page Next.js site with 3D scroll-motion (Framer Motion), a data-driven menu served from a local SQLite database via Prisma, and **real content scraped directly from the Burger Match Instagram** ([@burgermatch_bo](https://www.instagram.com/burgermatch_bo/)) — including the real logo, 12 real post photos, and 3 embedded Instagram reels.

## ✨ Features

- **3D scroll-motion hero** — a floating burger that rotates & scales as you scroll, with mouse-parallax tilt
- **Sticky coverflow combos** — combo cards pan and rotate in 3D space driven by vertical scroll
- **Word-by-word philosophy reveal** — the tagline fades in as you scroll
- **Data-driven menu** — 7 burgers, 4 combos, sides & drinks served from Prisma + `/api/menu`
- **4 real locations** — Equipetrol, Beni, La Chonta, Radial 19 (sourced from their Linktree)
- **Instagram feed section** — 3 real embedded reels + 12-photo gallery from @burgermatch_bo
- **Black + yellow brand system** with Anton (display) + Inter (body) typography
- Fully responsive, sticky footer, accessible

## 🛠 Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui
- Framer Motion (scroll-linked 3D transforms)
- Prisma ORM + SQLite

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# The SQLite database (db/custom.db) is committed with seeded data.
# To regenerate the menu data from scratch:
bun run db:push
bun run prisma/seed.ts

# Start the dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
prisma/
  schema.prisma        # Category, MenuItem, Combo, Location, Testimonial
  seed.ts              # Real Burger Match menu data
src/
  app/
    page.tsx           # Orchestrates all sections
    api/menu/route.ts  # GET /api/menu
    api/info/route.ts  # GET /api/info
  components/site/     # Nav, Hero, Marquee, Philosophy, MenuSection,
                       #   Combos, Locations, Testimonials, InstagramFeed, CTA+Footer
  lib/
    db.ts              # Prisma client
    site.ts           # Data hooks + types
public/
  brand/logo.jpg      # Real @burgermatch_bo profile pic (logo)
  ig/post_*.jpg       # 12 real Instagram post photos
```

## 📷 Content Attribution

All photos and videos are real content from the official Burger Match Instagram account ([@burgermatch_bo](https://www.instagram.com/burgermatch_bo/)). The logo is their actual Instagram profile picture. Videos are embedded via Instagram's official embed iframe.

## 📍 Locations

- **Equipetrol** — Calle Dra. María de Boland · +591 77670931
- **Beni** — Av. Beni · +591 77616377
- **La Chonta** · +591 77670931
- **Radial 19** · +591 77670931

Open Lun a Dom, 11:00 AM – 11:00 PM. Delivery via PedidosYa.
