"use client";

import { motion } from "framer-motion";

export function ArenaSplitSection() {
  return (
    <section className="bg-onx-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] lg:min-h-[800px]">

        {/* Left: Arena Image & Overlay */}
        <div className="relative bg-onx-near-black flex flex-col justify-end p-10 md:p-16 lg:p-24 overflow-hidden grayscale min-h-[60vh] md:min-h-0">
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
            <p className="text-onx-white text-xs font-normal leading-wide tracking-wide uppercase">
              Where focus sharpens into precision, every draw, aim, and release is crafted to perfection—training your control, building discipline, and delivering every arrow exactly where it belongs.
            </p>
          </div>
        </div>

        {/* Right: Product Carousel */}
        <div className="bg-onx-warm-light flex overflow-x-auto snap-x snap-mandatory p-0 md:items-center md:p-16 lg:p-24 hide-scrollbar">

          {/* Card 1 */}
          <div className="min-w-[85vw] md:min-w-full snap-center flex flex-col items-center justify-center text-center p-10 md:p-0 flex-shrink-0">
            <div className="w-full text-left mb-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-onx-black">Handgun</span>
            </div>
            <div className="w-[80%] md:w-[90%] lg:w-[80%] aspect-video bg-onx-near-black/5 flex items-center justify-center mb-auto mt-12 md:mt-24">
              <span className="text-xs uppercase tracking-[0.2em] text-black/20">Product Image</span>
            </div>
            <button className="bg-onx-white px-8 py-3 text-xs uppercase font-bold tracking-widest border border-onx-border-light hover:bg-onx-near-black hover:text-white transition-colors mt-12 md:mt-24">
              Add To Cart
            </button>
          </div>

          {/* Card 2 */}
          <div className="min-w-[85vw] md:min-w-full snap-center flex flex-col items-center justify-center text-center p-10 md:p-0 flex-shrink-0">
            <div className="w-full text-left mb-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-onx-black">Rifle</span>
            </div>
            <div className="w-[80%] md:w-[90%] lg:w-[80%] aspect-video bg-onx-near-black/5 flex items-center justify-center mb-auto mt-12 md:mt-24">
              <span className="text-xs uppercase tracking-[0.2em] text-black/20">Product Image</span>
            </div>
            <button className="bg-onx-white px-8 py-3 text-xs uppercase font-bold tracking-widest border border-onx-border-light hover:bg-onx-near-black hover:text-white transition-colors mt-12 md:mt-24">
              Add To Cart
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
