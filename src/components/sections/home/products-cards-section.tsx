"use client";

import { useProducts } from "@/components/hooks/useProducts";
import { useEffect, useState } from "react";

/** Number of skeleton cards shown while products are still loading */
const SKELETON_COUNT = 2;

export function ProductsCardsSection() {
  const { data: products, isLoading, error } = useProducts();
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Recalculate cards-per-view on resize
  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const shopName = process.env.NEXT_PUBLIC_STORE_NAME || "arc-bore-co";

  // Use real products when available, otherwise null-filled placeholders
  const resolvedProducts: any[] =
    mounted && !isLoading && !error && products
      ? products
      : Array.from({ length: SKELETON_COUNT }, () => null);

  const totalSlides = 1 + resolvedProducts.length; // "View All" card + product slides
  const maxIndex = Math.max(0, totalSlides - perView);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, maxIndex)));
    setDragDelta(0);
    setIsDragging(false);
  };

  // ── Drag / swipe handlers ─────────────────────────────────────────────────
  const getClientX = (e: React.MouseEvent | React.TouchEvent) =>
    "touches" in e ? (e.touches[0]?.clientX ?? 0) : e.clientX;

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(getClientX(e));
    setDragDelta(0);
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setDragDelta(getClientX(e) - dragStartX);
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    const THRESHOLD = 60; // px
    if (dragDelta < -THRESHOLD) goTo(current + 1);
    else if (dragDelta > THRESHOLD) goTo(current - 1);
    else goTo(current);
  };

  const trackWidthPct = (totalSlides / perView) * 100;
  const translatePct = -(current / totalSlides) * 100;
  const progressPct = Math.min(100, ((current + perView) / totalSlides) * 100);

  const cardStyle = { width: `${100 / totalSlides}%`, flexShrink: 0 as const };

  return (
    <section id="products-cards" className="bg-onx-white py-4 md:py-8 select-none">

      {/* ── Header + navigation controls ────────────────────────────────── */}
      <div className="px-4 md:px-8 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-onx-red flex-shrink-0" />
          <span className="text-xs uppercase tracking-[0.3em] text-onx-near-black">
            Featured Products
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Slide counter — desktop only */}
          <span className="hidden md:block text-xs text-onx-near-black/40 tracking-[0.2em] tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>

          {/* Prev / Next arrows */}
          <div className="flex gap-1">
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label="Previous slide"
              className="w-9 h-9 border border-onx-border-light flex items-center justify-center hover:bg-onx-near-black hover:text-onx-white hover:border-onx-near-black disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => goTo(current + 1)}
              disabled={current >= maxIndex}
              aria-label="Next slide"
              className="w-9 h-9 border border-onx-border-light flex items-center justify-center hover:bg-onx-near-black hover:text-onx-white hover:border-onx-near-black disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Slider viewport ──────────────────────────────────────────────── */}
      <div className="relative group/slider">
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          <div
            className={
              isDragging
                ? "flex"
                : "flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            }
            style={{
              width: `${trackWidthPct}%`,
              transform: `translateX(calc(${translatePct}% + ${isDragging ? dragDelta : 0}px))`,
            }}
          >

            {/* Slide 0: "View All" hero card */}
            <div
              style={cardStyle}
              className="relative bg-onx-near-black overflow-hidden flex flex-col items-center justify-center aspect-[4/5]"
            >
              <img
                src="/images/viewall-pistol.png"
                alt="View All"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              <button className="relative z-10 bg-onx-white text-onx-black px-8 py-3 text-xs uppercase font-bold tracking-[0.15em] hover:bg-onx-red hover:text-white transition-colors duration-300 shadow-xl pointer-events-auto">
                View All
              </button>
            </div>

            {/* Product slides */}
            {resolvedProducts.map((product, index) => {
              // Skeleton card
              if (!product) {
                return (
                  <div
                    key={`skeleton-${index}`}
                    style={cardStyle}
                    className="aspect-[4/5] bg-onx-warm-light border-l border-onx-border-light"
                  >
                    <div className="h-full flex flex-col p-6 md:p-8 gap-4 animate-pulse">
                      <div className="flex justify-between">
                        <div className="w-6 h-3 bg-onx-near-black/10 rounded" />
                        <div className="w-16 h-3 bg-onx-near-black/10 rounded" />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center gap-4">
                        <div className="w-3/4 aspect-square bg-onx-near-black/10 rounded" />
                        <div className="w-1/2 h-4 bg-onx-near-black/10 rounded" />
                      </div>
                      <div className="w-full h-10 bg-onx-near-black/10 rounded" />
                    </div>
                  </div>
                );
              }

              // Real product card
              const imageNode = product.images.edges[0]?.node;
              const imageUrl = imageNode?.url || "";
              const altText = imageNode?.altText || product.title;
              const variantNode = product.variants.edges[0]?.node;
              const price = variantNode?.price;
              const formattedPrice = price
                ? `${price.currencyCode} ${parseFloat(price.amount).toFixed(2)}`
                : "";

              let variantId = "";
              if (variantNode?.id) {
                const parts = variantNode.id.split("/");
                variantId = parts[parts.length - 1];
              }

              const productUrl = `https://${shopName}.myshopify.com/products/${product.handle}${variantId ? `?variant=${variantId}` : ""}`;

              return (
                <div
                  key={product.id}
                  style={cardStyle}
                  className="aspect-[4/5] bg-onx-warm-light border-l border-onx-border-light flex flex-col items-center justify-between p-6 md:p-8 relative group"
                >
                  {/* Number + price */}
                  <div className="w-full flex justify-between items-center">
                    <span className="text-xs uppercase font-bold tracking-widest text-onx-red">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {formattedPrice && (
                      <span className="text-xs font-semibold text-onx-near-black/60 tracking-wider">
                        {formattedPrice}
                      </span>
                    )}
                  </div>

                  {/* Image + title */}
                  <div className="flex-1 w-full flex flex-col items-center justify-center gap-4">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={altText}
                        className="w-[75%] aspect-square object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                        draggable={false}
                      />
                    ) : (
                      <div className="w-[75%] aspect-square bg-onx-near-black/5 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-[0.2em] text-black/20">
                          No Image
                        </span>
                      </div>
                    )}
                    <h3 className="text-sm md:text-base uppercase tracking-[0.1em] text-onx-near-black font-bold text-center line-clamp-2">
                      {product.title}
                    </h3>
                  </div>

                  {/* CTA */}
                  <a
                    href={productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-onx-white text-onx-black px-6 py-3 text-xs uppercase font-bold tracking-widest border border-onx-border-light hover:bg-onx-near-black hover:text-white transition-colors text-center pointer-events-auto"
                  >
                    Shop now
                  </a>
                </div>
              );
            })}

            {/* Error state (replaces product slots) */}
            {mounted && error && (
              <div
                style={{ width: `${(100 / totalSlides) * SKELETON_COUNT}%`, flexShrink: 0 }}
                className="aspect-[4/5] border-l border-onx-border-light flex items-center justify-center"
              >
                <span className="text-xs text-onx-red uppercase tracking-widest">
                  Failed to load products
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Floating absolute navigation buttons (visible on hover) */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous slide"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-onx-white text-onx-black flex items-center justify-center opacity-0 group-hover/slider:opacity-100 disabled:opacity-0 hover:bg-onx-near-black hover:text-onx-white transition-all duration-300 shadow-2xl z-10 -translate-x-4 group-hover/slider:translate-x-0"
        >
          <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current >= maxIndex}
          aria-label="Next slide"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-onx-white text-onx-black flex items-center justify-center opacity-0 group-hover/slider:opacity-100 disabled:opacity-0 hover:bg-onx-near-black hover:text-onx-white transition-all duration-300 shadow-2xl z-10 translate-x-4 group-hover/slider:translate-x-0"
        >
          <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
            <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── Progress bar + mobile counter ───────────────────────────────── */}
      <div className="px-4 md:px-8 mt-4">
        <div className="relative h-px bg-onx-border-light overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-onx-near-black transition-[width] duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        {/* Slide counter — mobile only */}
        <div className="md:hidden mt-3 text-center">
          <span className="text-xs text-onx-near-black/40 tracking-[0.2em] tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
