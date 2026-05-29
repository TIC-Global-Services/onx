import { TextReveal } from "@/components/ui/text-reveal";

export function StoryQuoteSection() {
  return (
    <section className="bg-onx-white py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col items-center text-center">
        
        <div className="flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-onx-near-black"></div>
          <span className="text-xs md:text-base uppercase font-normal tracking-tight text-onx-near-black">
            A word from the founder
          </span>
        </div>

        <TextReveal 
          text='"At ONX, the vision has always been clear: to build something that stands for purpose, precision, and progress. Every decision, every detail, and every step forward reflects a commitment to doing things the right way."'
          className="text-2xl sm:text-[32px] md:text-[40px] lg:text-5xl font-medium leading-[1.3] text-onx-near-black max-w-[1000px] mb-16 tracking-tight"
        />
        
        <button className="mt-4 bg-onx-white border border-onx-near-black text-onx-black px-10 py-4 text-sm uppercase font-bold tracking-[0.15em] hover:bg-onx-black hover:text-white transition-colors shadow-sm">
            Learn Gears
          </button>

      </div>
    </section>
  );
}
