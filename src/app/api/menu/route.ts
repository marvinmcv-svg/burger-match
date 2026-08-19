import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const [categories, combos] = await Promise.all([
    db.category.findMany({
      orderBy: { order: "asc" },
      include: {
        items: {
          orderBy: { order: "asc" },
        },
      },
    }),
    db.combo.findMany({ orderBy: { order: "asc" } }),
  ]);

  return NextResponse.json({
    categories: categories.map((c) => ({
      ...c,
      items: c.items.map((i) => ({
        ...i,
        tags: i.tags ? i.tags.split(",").filter(Boolean) : [],
      })),
    })),
    combos: combos.map((c) => ({
      ...c,
      items: c.items ? c.items.split(",").filter(Boolean) : [],
    })),
  });
}
