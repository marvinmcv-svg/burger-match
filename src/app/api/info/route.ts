import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const [locations, testimonials] = await Promise.all([
    db.location.findMany({ orderBy: { order: "asc" } }),
    db.testimonial.findMany({ orderBy: { order: "asc" } }),
  ]);

  return NextResponse.json({
    brand: {
      name: "Burger Match",
      tagline: "Cada hamburguesa es un match hecho en el cielo de los sabores.",
      city: "Santa Cruz de la Sierra, Bolivia",
      instagram: "https://www.instagram.com/burgermatch_bo/",
      facebook: "https://www.facebook.com/p/BurgerMatchbo-100063795420989",
      pedidosya:
        "https://www.pedidosya.com.bo/restaurantes/santa-cruz-de-la-sierra/burger-match--equipetrol-7c2c6364-a718-403c-aaf2-59c7e39598cf-menu",
      phone: "+591 77670931",
      hours: "Lunes a Lunes · 11:00 AM – 11:00 PM",
    },
    locations,
    testimonials,
  });
}
