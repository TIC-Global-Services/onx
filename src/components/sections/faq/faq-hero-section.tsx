export function FaqHeroSection() {
  return (
    <section className="w-full h-[60vh] min-h-[500px] relative overflow-hidden flex items-center justify-center p-8 md:p-16 lg:p-24 group">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img 
        src="/images/faq-hero.png" 
        alt="FAQ" 
        className="absolute inset-0 w-full h-full object-cover grayscale z-0" 
      />
      <h1 className="relative z-20 text-6xl sm:text-[40px] md:text-[70px] lg:text-[90px] font-normal uppercase leading-[1] text-onx-white text-center tracking-tight">
        FAQ
      </h1>
    </section>
  );
}
