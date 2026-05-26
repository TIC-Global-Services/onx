export function ProductsCardsSection() {
  return (
    <section id="products-cards" className="bg-onx-white py-4 md:py-8">
      <div className="w-full px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: View All Image */}
          <div className="aspect-[4/6] relative bg-onx-near-black overflow-hidden flex flex-col items-center justify-center p-6">
            <img src="/images/viewall-pistol.jpg" alt="View All Pistol" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            <button className="relative z-10 bg-onx-white text-onx-black px-10 py-4 text-sm uppercase font-bold tracking-[0.15em] hover:bg-onx-red hover:text-white transition-colors duration-300 shadow-xl">
              View All
            </button>
          </div>

          {/* Card 2: Handgun card */}
          <div className="aspect-[4/6] bg-onx-warm-light flex flex-col items-center justify-between p-8 text-center relative group">
            <div className="w-full text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-onx-red">01</span>
            </div>
            <div className="flex-1 w-full flex items-center justify-center">
              <div className="w-[80%] aspect-video bg-onx-near-black/5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/20 w-full h-full flex items-center justify-center">Handgun</span>
              </div>
            </div>
            <button className="bg-onx-white px-8 py-3 text-xs uppercase font-bold tracking-widest border border-onx-border-light hover:bg-onx-near-black hover:text-white transition-colors">
              Add To Cart
            </button>
          </div>

          {/* Card 3: Rifle card */}
          <div className="aspect-[4/6] bg-onx-warm-light flex flex-col items-center justify-between p-8 text-center relative group">
            <div className="w-full text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-onx-red">02</span>
            </div>
            <div className="flex-1 w-full flex items-center justify-center">
              <div className="w-[90%] aspect-[2/1] bg-onx-near-black/5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/20 w-full h-full flex items-center justify-center">Rifle</span>
              </div>
            </div>
            <button className="bg-onx-white px-8 py-3 text-xs uppercase font-bold tracking-widest border border-onx-border-light hover:bg-onx-near-black hover:text-white transition-colors">
              Add To Cart
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
