export function ArenaSplitSection() {
  return (
    <section className="bg-onx-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] lg:min-h-[800px]">
        
        {/* Left: Arena Image & Overlay */}
        <div className="relative bg-onx-near-black flex flex-col justify-end p-10 md:p-16 lg:p-24 overflow-hidden grayscale">
          <img src="/images/drawnfocus.png" alt="ONX Arena" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-[500px]">
            <h3 className="text-[32px] md:text-[42px] font-bold uppercase text-onx-white leading-none mb-6">
              DRAW & <span className="bg-onx-white text-black px-4 py-4 inline-block">FOCUS</span>
            </h3>
            <p className="text-onx-white/90 text-lg md:text-xl font-medium leading-relaxed">
              Where focus sharpens into precision, every draw, aim, and release is crafted to perfection—training your control, building discipline, and delivering every arrow exactly where it belongs.
            </p>
          </div>
        </div>

        {/* Right: Product Card */}
        <div className="bg-onx-warm-light flex flex-col items-center justify-center p-10 md:p-16 lg:p-24 text-center">
          <div className="w-full text-left mb-auto">
            <span className="text-[10px] uppercase font-bold tracking-widest text-onx-black">Handgun</span>
          </div>
          
          <div className="w-[80%] aspect-video bg-onx-near-black/5 flex items-center justify-center mb-auto mt-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-black/20">Product Image</span>
          </div>

          <button className="bg-onx-white px-8 py-3 text-xs uppercase font-bold tracking-widest border border-onx-border-light hover:bg-onx-near-black hover:text-white transition-colors mt-12">
            Add To Cart
          </button>
        </div>

      </div>
    </section>
  );
}
