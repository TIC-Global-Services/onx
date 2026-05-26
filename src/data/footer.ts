import type { FooterColumn } from "./types";

export const footerColumns: FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Our Picks", href: "/our-picks" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Search", href: "/search" },
      { label: "About Us", href: "/our-story" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "FAQs", href: "/faq" },
    ],
  },
];

export const footerAbout = {
  title: "About the Store",
  description:
    "ONX Sports is a precision-focused indoor training space built for those who value control, discipline, and performance. Designed with modern facilities and a refined environment, it offers a consistent and focused shooting experience for both beginners and professionals.",
};

export const footerNewsletter = {
  title: "Newsletter",
  description: "Sign up for exclusive offers, original stories and more.",
  placeholder: "Your Email",
  buttonLabel: "Subscribe",
};

export const socialLinks = [
  { label: "WhatsApp", href: "#", icon: "MessageCircle" as const },
  { label: "Email", href: "mailto:hello@onxsports.com", icon: "Mail" as const },
  { label: "Facebook", href: "#", icon: "Facebook" as const },
  { label: "Instagram", href: "#", icon: "Instagram" as const },
];
