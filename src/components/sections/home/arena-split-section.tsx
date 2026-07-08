"use client";

import { useProducts } from "@/components/hooks/useProducts";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ArenaSplitSection() {
  const { data: products, isLoading, error } = useProducts();
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Limit to first 2 products
  const displayProducts = products ? products.slice(0, 2) : [];

  // Shopify Storefront URL
  const shopifyUrl = `https://${process.env.NEXT_PUBLIC_STORE_NAME || "arc-bore-co"}.myshopify.com`;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-onx-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] lg:min-h-[800px]">

        {/* Left: Arena Image & Overlay */}
        <div className="relative bg-onx-near-black flex flex-col justify-end p-10 pb-32 md:p-16 lg:p-24 overflow-hidden grayscale min-h-[100vh] md:min-h-0">
          <img src="/images/drawnfocus.png" alt="ONX Arena" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>

          <div className="relative z-10 right-0 md:right-12 max-w-[350px] mx-auto md:mx-0 text-center md:text-left">
            <h3 className="text-[32px] md:text-[42px] font-normal uppercase text-onx-white leading-none mb-6">
              DRAW &{" "}
              <span className="relative text-black px-4 py-4 inline-block">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="absolute top-[8px] bottom-[0px] left-0 right-0 bg-onx-white z-0 origin-left"
                />
                <span className="relative z-10">FOCUS</span>
              </span>
            </h3>
            <p className="text-onx-white text-xs font-normal leading-wide tracking-wider uppercase">
              Where focus sharpens into precision, every draw, aim, and release is crafted to perfection—training your control, building discipline, and delivering every arrow exactly where it belongs.
            </p>
          </div>
        </div>

        {/* Right: Product Carousel with Show All */}
        <div className="bg-onx-warm-light flex flex-col justify-center p-8 md:p-16 lg:p-24 relative group/carousel">
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full flex-grow md:items-center"
          >
            {!mounted || isLoading ? (
              <div className="min-w-full flex items-center justify-center py-12 text-onx-near-black text-sm uppercase tracking-widest">
                Loading Products...
              </div>
            ) : error ? (
              <div className="min-w-full flex items-center justify-center py-12 text-onx-red text-sm uppercase tracking-widest">
                Failed to load products
              </div>
            ) : displayProducts.length > 0 ? (
              displayProducts.map((product) => {
                const imageNode = product.images.edges[0]?.node;
                const imageUrl = imageNode?.url || "";
                const altText = imageNode?.altText || product.title;

                const variantNode = product.variants.edges[0]?.node;
                
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
                  <div key={product.id} className="min-w-[85vw] md:min-w-full snap-center flex flex-col items-center justify-center text-center p-10 md:p-0 flex-shrink-0">
                    <div className="w-full text-left mb-auto">
                      <span className="text-xs uppercase font-bold tracking-widest text-onx-black">{product.title}</span>
                    </div>
                    <div className="w-[80%] md:w-[90%] lg:w-[80%] aspect-video flex items-center justify-center mb-auto mt-12 md:mt-24">
                      {imageUrl ? (
                        <img src={imageUrl} alt={altText} className="w-[80%] aspect-video object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105" />
                      ) : (
                        <div className="w-full h-full bg-onx-near-black/5 flex items-center justify-center">
                          <span className="text-xs uppercase tracking-[0.2em] text-black/20">No Image</span>
                        </div>
                      )}
                    </div>
                    <a 
                      href={productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-onx-white text-black px-8 py-3 text-xs uppercase font-bold tracking-widest border border-onx-border-light hover:bg-onx-near-black hover:text-white transition-colors mt-12 md:mt-24 cursor-pointer text-center"
                    >
                      Shop Now
                    </a>
                  </div>
                );
              })
            ) : (
              <div className="min-w-full flex items-center justify-center py-12 text-onx-near-black/40 text-sm uppercase tracking-widest">
                No products found
              </div>
            )}
          </div>

          {/* Slide Arrow Navigation Buttons (Center Left & Right) */}
          {mounted && displayProducts.length > 1 && (
            <>
              <button 
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-onx-white hover:bg-onx-near-black hover:text-white text-onx-near-black border border-onx-border-light rounded-full p-3 transition-all duration-300 shadow-md cursor-pointer z-10"
                aria-label="Slide Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-onx-white hover:bg-onx-near-black hover:text-white text-onx-near-black border border-onx-border-light rounded-full p-3 transition-all duration-300 shadow-md cursor-pointer z-10"
                aria-label="Slide Right"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Show All Button at the bottom */}
          <div className="w-full flex justify-end mt-8 pt-4 border-t border-onx-near-black/10">
            <a 
              href={shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-onx-near-black text-white px-10 py-4 text-xs uppercase font-bold tracking-[0.15em] hover:bg-onx-red hover:text-white transition-colors duration-300 shadow-md text-center"
            >
              Show All Products
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
