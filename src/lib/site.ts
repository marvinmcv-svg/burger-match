"use client";

import { useEffect, useState } from "react";

export type Tag = string;

export type MenuItem = {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceBs: number;
  image: string | null;
  tags: Tag[];
  isSignature: boolean;
  order: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  order: number;
  items: MenuItem[];
};

export type Combo = {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceBs: number;
  image: string | null;
  items: string[];
  badge: string | null;
  isSignature: boolean;
  order: number;
};

export type MenuData = {
  categories: Category[];
  combos: Combo[];
};

export type Location = {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  order: number;
};

export type Testimonial = {
  id: string;
  author: string;
  text: string;
  source: string;
  rating: number;
  order: number;
};

export type InfoData = {
  brand: {
    name: string;
    tagline: string;
    city: string;
    instagram: string;
    facebook: string;
    pedidosya: string;
    phone: string;
    hours: string;
  };
  locations: Location[];
  testimonials: Testimonial[];
};

export function useMenu() {
  const [data, setData] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/menu")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((d: MenuData) => {
        if (!alive) return;
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        if (!alive) return;
        setError(String(e));
        setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  return { data, loading, error };
}

export function useInfo() {
  const [data, setData] = useState<InfoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/info")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((d: InfoData) => {
        if (!alive) return;
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        if (!alive) return;
        setError(String(e));
        setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  return { data, loading, error };
}
