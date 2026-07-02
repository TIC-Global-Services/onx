export function ContactHeroSection() {
  return (
    <section className="w-full aspect-[3/4] md:h-[60vh] md:min-h-[500px] relative overflow-hidden flex items-center justify-center p-8 md:p-16 lg:p-24 group">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img 
        src="/images/contact/contact-hero.png" 
        alt="Contact Us" 
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale" 
      />
      <h1 className="relative z-20 text-[50px] sm:text-[70px] md:text-[80px] lg:text-[90px] font-normal uppercase leading-[1] text-onx-white text-center tracking-tight">
        CONTACT US
      </h1>
    </section>
  );
}
