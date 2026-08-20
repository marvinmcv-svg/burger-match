import { db } from "../src/lib/db";

async function main() {
  // Clean
  await db.testimonial.deleteMany();
  await db.location.deleteMany();
  await db.menuItem.deleteMany();
  await db.combo.deleteMany();
  await db.category.deleteMany();

  // ---- Categories ----
  const [burgers, combos, sides, drinks] = await Promise.all([
    db.category.create({ data: { name: "Hamburguesas", slug: "hamburguesas", order: 0 } }),
    db.category.create({ data: { name: "Combos", slug: "combos", order: 1 } }),
    db.category.create({ data: { name: "Acompañamientos", slug: "acompanamientos", order: 2 } }),
    db.category.create({ data: { name: "Bebidas", slug: "bebidas", order: 3 } }),
  ]);

  // ---- Burgers ----
  await db.menuItem.createMany({
    data: [
      {
        categoryId: burgers.id, order: 0,
        name: "Bacon Cheese Burger", slug: "bacon-cheese-burger",
        description: "Doble medallón de carne 100% res, cheddar derretido, bacon crujiente, cebolla caramelizada y nuestra salsa house. El clásico que nunca falla.",
        priceBs: 45, image: "/menu/real/hero.jpeg",
        tags: "signature,double,cheese,bacon", isSignature: true,
      },
      {
        categoryId: burgers.id, order: 1,
        name: "Smoke Match", slug: "smoke-match",
        description: "Pan brioche, medallón ahumado, queso ahumado, aros de cebolla, bacon y salsa BBQ. Nuestra estrella de la Burger Week Bolivia.",
        priceBs: 55, image: "/menu/real/smoke.jpg",
        tags: "signature,smoke,bbq,burger-week", isSignature: true,
      },
      {
        categoryId: burgers.id, order: 2,
        name: "1/4 de Libra", slug: "cuarto-de-libra",
        description: "Medallón de 1/4 de libra, lechuga, tomate, cebolla, queso cheddar y salsa house. El partido más clásico.",
        priceBs: 38, image: "/menu/real/americana.jpg",
        tags: "classic,beef", isSignature: false,
      },
      {
        categoryId: burgers.id, order: 3,
        name: "Honey Chick", slug: "honey-chick",
        description: "Filete de pollo crispy, glaseado de miel, pickles, lechuga fresca y mayo de la casa. Dulce, crujiente y adictivo.",
        priceBs: 42, image: "/menu/real/honey.jpg",
        tags: "chicken,honey,crispy", isSignature: false,
      },
      {
        categoryId: burgers.id, order: 4,
        name: "Munchies", slug: "munchies",
        description: "Doble carne, doble cheddar, papas crunch adentro y nuestra salsa especial Munchies. Para los que comen en serio.",
        priceBs: 44, image: "/menu/real/hero.jpeg",
        tags: "double,cheese,loaded", isSignature: false,
      },
      {
        categoryId: burgers.id, order: 5,
        name: "Eggsplosion", slug: "eggsplosion",
        description: "Medallón de carne, huevo frito con yema corrida, cheddar, bacon y salsa house. Una explosión en cada mordida.",
        priceBs: 46, image: "/menu/real/egg.jpg",
        tags: "egg,bacon,double-yolk", isSignature: false,
      },
      {
        categoryId: burgers.id, order: 6,
        name: "Americana", slug: "americana",
        description: "Carne, queso americano, lechuga, tomate, pepinillos y la clásica ketchup-mostaza. Sabor a USA en Santa Cruz.",
        priceBs: 40, image: "/menu/real/americana.jpg",
        tags: "classic,american", isSignature: false,
      },
    ],
  });

  // ---- Combos ----
  await db.combo.createMany({
    data: [
      {
        order: 0,
        name: "Combo Simple", slug: "combo-simple",
        description: "1 hamburguesa a elección + papas + gaseosa chica. El plan resuelto del medio día.",
        priceBs: 49, image: "/menu/real/combo.jpg",
        items: "1 Hamburguesa, Papas, Gaseosa chica",
        badge: "MedioDía", isSignature: false,
      },
      {
        order: 1,
        name: "Combo Doble", slug: "combo-doble",
        description: "Hamburguesa doble + papas grandes + gaseosa. Para los que vienen con hambre.",
        priceBs: 59, image: "/menu/real/combo.jpg",
        items: "Hamburguesa doble, Papas grandes, Gaseosa",
        badge: "Más vendido", isSignature: false,
      },
      {
        order: 2,
        name: "Combo Hambre Mundialero", slug: "combo-hambre-mundialero",
        description: "2 Bacon Cheese Dobles + 1 papa grande + 1 soda o cerveza. El partido que se juega en equipo.",
        priceBs: 95, image: "/menu/real/combo.jpg",
        items: "2 Bacon Cheese Dobles, Papa grande, Soda o cerveza",
        badge: "Para compartir", isSignature: true,
      },
      {
        order: 3,
        name: "Menú MedioDía", slug: "menu-mediodia",
        description: "De 11 AM a 5 PM, todos los días. Elige entre 6 hamburguesas en combo con gaseosa chiki a precio especial.",
        priceBs: 49, image: "/menu/real/combo.jpg",
        items: "6 hamburguesas a elección, Gaseosa chiki",
        badge: "11AM–5PM", isSignature: false,
      },
    ],
  });

  // ---- Sides ----
  await db.menuItem.createMany({
    data: [
      {
        categoryId: sides.id, order: 0,
        name: "Papas Clásicas", slug: "papas-clasicas",
        description: "Papas fritas crujientes con sal de la casa.", priceBs: 18,
        image: "/menu/real/papas.jpeg", tags: "vegetarian,classic",
      },
      {
        categoryId: sides.id, order: 1,
        name: "Papas Match", slug: "papas-match",
        description: "Papas cubiertas con cheddar derretido, bacon crujiente y verdeo.", priceBs: 25,
        image: "/menu/real/papas.jpeg", tags: "loaded,cheese,bacon",
      },
      {
        categoryId: sides.id, order: 2,
        name: "Chicken Tenders", slug: "chicken-tenders",
        description: "4 tiras de pollo crispy con salsa a elección (BBQ, honey o ranch).", priceBs: 32,
        image: "/menu/real/tenders.jpg", tags: "chicken,crispy",
      },
      {
        categoryId: sides.id, order: 3,
        name: "Aros de Cebolla", slug: "aros-de-cebolla",
        description: "Aros de cebolla rebozados, crujientes por fuera y suaves por dentro.", priceBs: 22,
        image: "/menu/real/papas.jpeg", tags: "vegetarian,crispy",
      },
    ],
  });

  // ---- Drinks ----
  await db.menuItem.createMany({
    data: [
      {
        categoryId: drinks.id, order: 0,
        name: "Gaseosa", slug: "gaseosa",
        description: "Coca-Cola, Fanta o Sprite, bien helada.", priceBs: 12,
        image: null, tags: "cold,soda",
      },
      {
        categoryId: drinks.id, order: 1,
        name: "Cerveza Nacional", slug: "cerveza",
        description: "Cerveza boliviana bien fría para acompañar el partido.", priceBs: 22,
        image: null, tags: "cold,beer",
      },
      {
        categoryId: drinks.id, order: 2,
        name: "Limonada", slug: "limonada",
        description: "Limón, maracuyá o frutilla. Natural de la casa.", priceBs: 15,
        image: null, tags: "natural,fresh",
      },
      {
        categoryId: drinks.id, order: 3,
        name: "Agua", slug: "agua",
        description: "Con o sin gas, bien fría.", priceBs: 10,
        image: null, tags: "cold,water",
      },
    ],
  });

  // ---- Locations (4 sucursales confirmadas via linktr.ee/BurgerMatch) ----
  await db.location.createMany({
    data: [
      {
        order: 0,
        name: "Burger Match Equipetrol",
        address: "Calle Dra. María de Boland, Local Comercial Burger Match, Equipetrol, Santa Cruz de la Sierra",
        phone: "+591 77670931",
        hours: "Lun a Dom · 11:00 AM – 11:00 PM",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Burger+Match+Equipetrol+Santa+Cruz+Bolivia",
      },
      {
        order: 1,
        name: "Burger Match Beni",
        address: "Av. Beni, Santa Cruz de la Sierra, Bolivia",
        phone: "+591 77616377",
        hours: "Lun a Dom · 11:00 AM – 11:00 PM",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Burger+Match+Beni+Santa+Cruz+Bolivia",
      },
      {
        order: 2,
        name: "Burger Match La Chonta",
        address: "La Chonta, Santa Cruz de la Sierra, Bolivia",
        phone: "+591 77670931",
        hours: "Lun a Dom · 11:00 AM – 11:00 PM",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Burger+Match+La+Chonta+Santa+Cruz+Bolivia",
      },
      {
        order: 3,
        name: "Burger Match Radial 19",
        address: "Radial 19, Santa Cruz de la Sierra, Bolivia",
        phone: "+591 77670931",
        hours: "Lun a Dom · 11:00 AM – 11:00 PM",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Burger+Match+Radial+19+Santa+Cruz+Bolivia",
      },
    ],
  });

  // ---- Testimonials ----
  await db.testimonial.createMany({
    data: [
      {
        order: 0, author: "TripAdvisor", source: "Reseña verificada",
        text: "Excelente lugar para ir con familia o amigos, varios ambientes, muy cómodo y por supuesto las mejores hamburguesas de la ciudad.",
        rating: 5,
      },
      {
        order: 1, author: "@foodie_scz", source: "Instagram",
        text: "La Smoke Match es una locura. Las mejores hamburguesas de Santa Cruz, sin discusión. El combo Hambre Mundialero salva cualquier reunión.",
        rating: 5,
      },
      {
        order: 2, author: "Carlos R.", source: "Google Reviews",
        text: "El Combo Hambre Mundialero es perfecto para compartir con amigos viendo el partido. Súper recomendado, volveré seguro.",
        rating: 5,
      },
    ],
  });

  console.log("✅ Burger Match DB seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
