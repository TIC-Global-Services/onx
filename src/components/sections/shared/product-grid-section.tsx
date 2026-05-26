import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import type { Product } from "@/data/types";

interface ProductGridSectionProps {
  title: string;
  viewAllHref: string;
  products: Product[];
}

export function ProductGridSection({
  title,
  viewAllHref,
  products,
}: ProductGridSectionProps) {
  return (
    <section className="bg-onx-dark-gray py-20">
      <Container>
        {/* Section header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-heading uppercase text-onx-white">{title}</h2>
          <Link
            href={viewAllHref}
            className="text-small uppercase text-onx-white/60 hover:text-onx-red transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
