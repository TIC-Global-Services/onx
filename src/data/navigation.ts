import type { NavItem } from "./types";

export const mainNavItems: NavItem[] = [
  {
    label: "Gears",
    href: "/gears",
    children: [
      { label: "Archery", href: "/gears/bow-and-arrow" },
      { label: "Shooting", href: "/gears/shooting" },
      { label: "Darts", href: "/gears/darts" },
    ],
  },
  { label: "Our Story", href: "/our-story" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Book Now", href: "/book-now" },
];

export const iconLinks = [
  { label: "Account", href: "/account", icon: "User" as const },
  { label: "Cart", href: "/cart", icon: "ShoppingBag" as const },
  { label: "Wishlist", href: "/wishlist", icon: "Heart" as const },
];
