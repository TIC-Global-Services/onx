import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "precision-gun",
    name: "Precision Gun",
    slug: "precision-gun",
    price: 81300, // ₹813.00
    image: "/images/precision-gun.jpg",
    isBestSeller: true,
  },
  {
    id: "ab-1-rifle",
    name: "AB-1 Rifle",
    slug: "ab-1-rifle",
    price: 100000, // ₹1,000.00
    image: "/images/onx-1-rifle.jpg",
    isBestSeller: true,
  },
  {
    id: "bp-crewneck",
    name: "BP Crewneck",
    slug: "bp-crewneck",
    price: 17500, // $175.00
    image: "/images/bp-crewneck.jpg",
  },
  {
    id: "nova-beanie",
    name: "Nova Beanie",
    slug: "nova-beanie",
    price: 9100, // $91.00
    image: "/images/nova-beanie.jpg",
  },
  {
    id: "tactical-gloves",
    name: "Tactical Gloves",
    slug: "tactical-gloves",
    price: 4500,
    image: "/images/tactical-gloves.jpg",
    isNewArrival: true,
  },
  {
    id: "range-bag",
    name: "Range Bag",
    slug: "range-bag",
    price: 12000,
    image: "/images/range-bag.jpg",
  },
];

export const homeFeaturedProducts: Product[] = [
  products[0], // Precision Gun (best seller)
  products[3], // Nova Beanie
  products[2], // BP Crewneck
  products[1], // AB-1 Rifle (best seller)
];
