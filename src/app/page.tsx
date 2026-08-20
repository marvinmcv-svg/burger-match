import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Philosophy } from "@/components/site/philosophy";
import { MenuSection } from "@/components/site/menu-section";
import { Combos } from "@/components/site/combos";
import { Locations } from "@/components/site/locations";
import { Testimonials } from "@/components/site/testimonials";
import { InstagramFeed } from "@/components/site/instagram-feed";
import { Cta, Footer } from "@/components/site/cta-footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0a0a0a]">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Philosophy />
        <MenuSection />
        <Combos />
        <Locations />
        <Testimonials />
        <InstagramFeed />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
