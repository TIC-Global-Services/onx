"use client";

import { useProducts } from "@/components/hooks/useProducts";
import { useEffect, useState } from "react";

export function ProductsCardsSection() {
  const { data: products, isLoading, error } = useProducts();
  console.log("data data",products)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="products-cards" className="bg-onx-white py-4 md:py-8">
      <div className="w-full px-2 md:px-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-4 pb-4 md:pb-0">

          {/* Card 1: View All Image */}
          <div className="min-w-[85vw] md:min-w-0 snap-center aspect-[4/3] md:aspect-[4/6] relative bg-onx-near-black overflow-hidden flex flex-col items-center justify-center p-6">
            <img src="/images/viewall-pistol.png" alt="View All Pistol" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            <button className="relative z-10 text-xs bg-onx-white text-onx-black px-10 py-4 text-sm uppercase font-bold tracking-[0.15em] hover:bg-onx-red hover:text-white transition-colors duration-300 shadow-xl cursor-pointer">
              View All
            </button>
          </div>

          {!mounted ? (
            // Server placeholder matching loading state to prevent hydration mismatches
            <div className="col-span-2 flex items-center justify-center py-12 text-onx-near-black text-sm uppercase tracking-widest">
              Loading Products...
            </div>
          ) : isLoading ? (
            <div className="col-span-2 flex items-center justify-center py-12 text-onx-near-black text-sm uppercase tracking-widest">
              Loading Products...
            </div>
          ) : error ? (
            <div className="col-span-2 flex items-center justify-center py-12 text-onx-red text-sm uppercase tracking-widest">
              Failed to load products
            </div>
          ) : products && products.length > 0 ? (
            products.map((product, index) => {
              const imageNode = product.images.edges[0]?.node;
              const imageUrl = imageNode?.url || "";
              const altText = imageNode?.altText || product.title;
              const variantNode = product.variants.edges[0]?.node;
              const price = variantNode?.price;
              const formattedPrice = price ? `${price.currencyCode} ${parseFloat(price.amount).toFixed(2)}` : "";

              // Extract numeric variant ID from gid://shopify/ProductVariant/51769037160664
              let variantId = "";
              if (variantNode?.id) {
                const parts = variantNode.id.split("/");
                variantId = parts[parts.length - 1];
              }

              // Shopify link
              const shopName = process.env.NEXT_PUBLIC_STORE_NAME || "arc-bore-co";
              const productUrl = `https://${shopName}.myshopify.com/products/${product.handle}${variantId ? `?variant=${variantId}` : ""}`;

              return (
                <div key={product.id} className="min-w-[85vw] md:min-w-0 snap-center aspect-[4/6] bg-onx-warm-light flex flex-col items-center justify-between p-8 text-center relative group">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-xs uppercase font-bold tracking-widest text-onx-red">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {formattedPrice && (
                      <span className="text-xs font-semibold text-onx-near-black/70 tracking-wider">
                        {formattedPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 w-full flex flex-col items-center justify-center gap-4">
                    {imageUrl ? (
                      <img src={imageUrl} alt={altText} className="w-[80%] aspect-video object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                      <div className="w-[80%] aspect-video bg-onx-near-black/5 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-[0.2em] text-black/20">No Image</span>
                      </div>
                    )}
                    <h3 className="text-base uppercase tracking-[0.1em] text-onx-near-black font-bold mt-2">
                      {product.title}
                    </h3>
                  </div>
                  <a 
                    href={productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-onx-white text-black px-8 py-3 text-xs uppercase font-bold tracking-widest border border-onx-border-light hover:bg-onx-near-black hover:text-white transition-colors cursor-pointer text-center"
                  >
                    Shop now
                  </a>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 flex items-center justify-center py-12 text-onx-near-black/40 text-sm uppercase tracking-widest">
              No products found
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
