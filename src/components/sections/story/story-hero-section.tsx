export function StoryHeroSection() {
  return (
    <section className="w-full h-[100dvh] min-h-[600px] flex flex-col relative">
      {/* Hero content */}
      <div className="flex-1 flex flex-col md:flex-row relative min-h-0">
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-onx-near-black overflow-hidden flex items-end md:items-center p-8 md:p-16 lg:p-24 group">
          <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/20" />
          <img 
            src="/images/story/bornpassion.jpg" 
            alt="Born from a passion" 
            className="absolute inset-0 w-full h-full object-cover z-0 grayscale" 
          />
          <h1 className="relative z-20 text-[50px] sm:text-6xl md:text-[70px] lg:text-[90px] font-bold uppercase leading-tight text-onx-white max-w-[600px] tracking-tight md:-translate-y-16 lg:-translate-y-18">
            BORN FROM A<br/>PASSION
          </h1>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-onx-near-black overflow-hidden flex items-start md:items-center p-8 md:p-16 lg:p-24 group">
          <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/20" />
          <img 
            src="/images/deliversPower/point.jpg" 
            alt="For precision and purpose" 
            className="absolute inset-0 w-full h-full object-cover object-center z-0" 
          />
          <h1 className="relative z-20 text-[50px] sm:text-6xl md:text-[70px] lg:text-[90px] font-bold uppercase leading-tight text-onx-white max-w-[700px] tracking-tight md:mt-auto md:translate-y-28 lg:translate-y-32">
            FOR PRECISION AND PURPOSE
          </h1>
        </div>
      </div>
    </section>
  );
}
