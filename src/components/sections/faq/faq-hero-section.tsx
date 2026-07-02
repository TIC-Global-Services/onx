export function FaqHeroSection() {
  return (
    <section className="w-full aspect-[3/4] md:h-[60vh] md:min-h-[500px] relative overflow-hidden flex items-center justify-center p-8 md:p-16 lg:p-24 group">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img 
        src="/images/faq_banner_image.jpg" 
        alt="FAQ" 
       style={{objectPosition:"80% 50%"}}
        className="absolute inset-0 w-full h-full object-cover grayscale z-0 scale-120" 
      />
      <h1 className="relative z-20 text-[40px] sm:text-6xl md:text-[70px] lg:text-[90px] font-normal uppercase leading-[1] text-onx-white text-center tracking-tight">
        FAQ
      </h1>
    </section>
  );
}
