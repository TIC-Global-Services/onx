import type { Testimonial } from "@/data/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialSectionProps {
  testimonial: Testimonial;
}

export function TestimonialSection({ testimonial }: TestimonialSectionProps) {
  return (
    <section className="bg-onx-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] lg:min-h-[800px]">
        
        {/* Left: Testimonial Block */}
        <div className="bg-onx-white flex flex-col justify-between p-10 md:p-16 lg:p-24 h-full">
          <div className="max-w-[500px]">
            {/* Stars and Author / Product */}
            <div className="flex items-center gap-2 mb-10">
              <span className="text-onx-near-black text-sm tracking-[0.2em] leading-none">★★★★</span>
              <span className="text-[12px] font-bold uppercase tracking-widest text-onx-near-black/50 leading-none mt-[2px]">
                — {testimonial.author} / {testimonial.product}
              </span>
            </div>
            
            {/* Quote */}
            <h3 className="text-[28px] md:text-[36px] font-bold uppercase leading-[1.2] text-onx-near-black mb-10">
              "{testimonial.quote}"
            </h3>
            
            {/* Author name bottom */}
            <span className="block text-[14px] font-bold uppercase tracking-widest text-onx-black">
              {testimonial.author}
            </span>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-4 mt-16 md:mt-auto">
            <button className="w-12 h-12 rounded-full bg-gray-200 text-onx-black flex items-center justify-center hover:bg-onx-black hover:text-white transition-colors group" aria-label="Previous testimonial">
              <span className="flex items-center justify-center w-full h-full">
                <ArrowLeft size={20} strokeWidth={1.5} />
              </span>
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-200 text-onx-black flex items-center justify-center hover:bg-onx-black hover:text-white transition-colors group" aria-label="Next testimonial">
              <span className="flex items-center justify-center w-full h-full">
                <ArrowRight size={20} strokeWidth={1.5} />
              </span>
            </button>
          </div>
        </div>

        {/* Right: Product Card */}
        <div className="bg-onx-warm-light flex flex-col items-center justify-center p-10 md:p-16 lg:p-24 text-center border-l border-onx-border-light">
          <div className="w-full text-left mb-auto">
            <span className="text-[10px] uppercase font-bold tracking-widest text-onx-black">Assault Rifle</span>
          </div>
          
          <div className="w-[90%] aspect-[2/1] bg-onx-near-black/5 flex items-center justify-center mb-auto mt-12">
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
