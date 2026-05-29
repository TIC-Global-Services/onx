import type { Product } from "@/data/types";
import { Badge } from "./badge";
import { Button } from "./button";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={className}>
      {/* Product image */}
      <div className="relative aspect-[375/520] overflow-hidden bg-onx-warm-light">
        {/* Placeholder image */}
        <div className="flex h-full w-full items-center justify-center bg-onx-warm-gray">
          <span className="text-xs uppercase text-onx-near-black/40">
            {product.name}
          </span>
        </div>

        {/* Best seller badge */}
        {product.isBestSeller && (
          <div className="absolute left-0 top-4">
            <Badge>Best Seller</Badge>
          </div>
        )}

        {/* New arrival badge */}
        {product.isNewArrival && (
          <div className="absolute left-0 top-4">
            <Badge className="bg-onx-green">New</Badge>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-xs uppercase text-onx-white">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-onx-white">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <Button
          variant="secondary"
          href={`/products/${product.slug}`}
          className="h-[50px] w-full text-lg"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
