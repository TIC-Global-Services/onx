import type { HomePageData } from "./types";
import { homeFeaturedProducts } from "./products";

export const homePageData: HomePageData = {
  categories: [
    {
      id: "rifles-guns",
      name: "Rifles & Guns",
      slug: "/gears/rifles-and-guns",
      description:
        "Our rifles and guns are built for precision and engineered to perform, combining rugged durability with refined design for a seamless shooting experience.",
      productCount: 10,
    },
    {
      id: "archery",
      name: "Archery",
      slug: "/gears/bow-and-arrow",
      description:
        "This archery collection is crafted for those who value precision, focus, and control. Each piece is designed with durability and balance in mind.",
      productCount: 10,
    },
    {
      id: "darts",
      name: "Darts",
      slug: "/gears/darts",
      description:
        "Designed for accuracy and consistency, our darts collection delivers professional-grade performance for enthusiasts at every level.",
      productCount: 10,
    },
  ],
  testimonial: {
    quote:
      "The precision and control this offers is unmatched, every shot feels consistent and confident.",
    author: "Aasha K",
    product: "Precision Rifle",
  },
  featuredProducts: {
    title: "Best Sellers",
    viewAllHref: "/gears",
    products: homeFeaturedProducts,
  },
  features: [
    { icon: "Truck", label: "Free Shipping" },
    { icon: "MapPin", label: "Play Arena" },
    { icon: "Percent", label: "Discount" },
  ],
};
