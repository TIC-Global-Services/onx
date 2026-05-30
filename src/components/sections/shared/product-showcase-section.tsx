export function ProductShowcaseSection() {
  return (
    <section id="product-showcase" className="bg-onx-white py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large featured image */}
          <div className="md:col-span-2 md:row-span-2 aspect-[4/3] bg-onx-warm-light overflow-hidden flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-onx-near-black/12">
              Product Showcase — Featured
            </span>
          </div>

          {/* Smaller product images */}
          <div className="aspect-square bg-onx-warm-gray overflow-hidden flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-[0.2em] text-onx-near-black/12">
              Product Detail
            </span>
          </div>
          <div className="aspect-square bg-onx-warm-light overflow-hidden flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-[0.2em] text-onx-near-black/12">
              Product Detail
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
