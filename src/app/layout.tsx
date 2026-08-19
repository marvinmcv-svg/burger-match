import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burger Match — Santa Cruz, Bolivia | Hamburguesas que hacen Match",
  description:
    "Burger Match — las mejores hamburguesas de Santa Cruz de la Sierra, Bolivia. Bacon Cheese, Smoke Match, Honey Chick, Eggsplosion y más. Combo MedioDía desde 49 Bs. Pide por PedidosYa o recoge en Equipetrol y Beni.",
  keywords: [
    "Burger Match",
    "hamburguesas Santa Cruz",
    "hamburguesas Bolivia",
    "Bacon Cheese Burger",
    "Smoke Match",
    "Honey Chick",
    "Eggsplosion",
    "delivery Santa Cruz",
    "Equipetrol",
    "Beni",
  ],
  authors: [{ name: "Burger Match Bolivia" }],
  openGraph: {
    title: "Burger Match — Santa Cruz, Bolivia",
    description:
      "Cada hamburguesa es un match hecho en el cielo de los sabores. Las mejores hamburguesas de Santa Cruz de la Sierra.",
    siteName: "Burger Match",
    type: "website",
    locale: "es_BO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burger Match — Santa Cruz, Bolivia",
    description: "Las mejores hamburguesas de Santa Cruz de la Sierra.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
