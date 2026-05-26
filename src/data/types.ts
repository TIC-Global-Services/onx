// ── Core Data Types ──

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  product: string;
}

export interface HomePageData {
  categories: Category[];
  testimonial: Testimonial;
  featuredProducts: {
    title: string;
    viewAllHref: string;
    products: Product[];
  };
  features: {
    icon: string;
    label: string;
  }[];
}
