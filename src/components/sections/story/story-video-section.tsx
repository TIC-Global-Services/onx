export function StoryVideoSection() {
  return (
    <section className="bg-onx-red py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Left: Text */}
        <div className="max-w-[600px] w-full md:w-1/2">
          <h3 className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-onx-near-black">
            ONX SPORTS IS BUILT FOR PRECISION, FOCUS, AND CONTROL. A MODERN SPACE FOR SHOOTING, DARTS, AND ARCHERY WHERE SKILL MEETS DISCIPLINE AND PERFECTION TAKES FOCUS.
          </h3>
        </div>

        {/* Right: Video Placeholder */}
        <div className="w-full md:w-1/2 aspect-[16/9] bg-onx-near-black/20 relative group cursor-pointer overflow-hidden flex items-center justify-center rounded-sm">
           <img 
             src="/images/story/video-thumb.jpg"
             alt="Video thumbnail"
             className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
           />
           <div className="w-16 h-16 md:w-20 md:h-20 bg-onx-white rounded-sm flex items-center justify-center z-10 shadow-xl group-hover:bg-onx-near-black transition-colors duration-300">
             <span className="text-onx-near-black text-[20px] md:text-[24px] ml-1 group-hover:text-onx-white transition-colors duration-300">▶</span>
           </div>
        </div>

      </div>
    </section>
  );
}
