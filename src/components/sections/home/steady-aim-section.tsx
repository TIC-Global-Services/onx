export function SteadyAimSection() {
  return (
    <section id="steady-aim" className="relative bg-[#FA261A] py-24 md:py-48 overflow-hidden flex items-center min-h-[700px]">
      
      {/* Right Target Graphic - Full Bleed */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
        <img src="/images/steadyaim.png" alt="Steady Aim" className="w-full h-full object-cover object-left md:object-center opacity-30 md:opacity-100" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Left Text content */}
          <div className="mt-12 md:mt-32">
            <h3 className="block text-xl font-bold uppercase tracking-widest text-onx-black mb-4">
              Focus
            </h3>
            <h2 className="text-[44px] sm:text-[56px] md:text-7xl lg:text-80px] font-bold uppercase leading-tight tracking-widest text-onx-black -ml-1">
              STEADY AIM.
              <br />
              PERFECT HIT.
            </h2>
          </div>

          {/* Empty right column to preserve grid spacing */}
          <div className="hidden md:block"></div>

        </div>
      </div>
    </section>
  );
}
