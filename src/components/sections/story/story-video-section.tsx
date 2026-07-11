export function StoryVideoSection() {
  return (
    <section className="bg-onx-red py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">

        {/* Left: Text */}
        <div className="max-w-[300px] md:max-w-[600px] w-full md:w-1/2">
          <h3 className="text-xl sm:text-[28px] md:text-[32px] lg:text-[40px] font-normal uppercase leading-[1.1] tracking-[-0.01em] text-onx-near-black text-center md:text-left">
            OUR SPACE IS BUILT FOR PRECISION, FOCUS, AND CONTROL. A MODERN AREA FOR SHOOTING, DARTS, AND ARCHERY WHERE SKILL MEETS DISCIPLINE AND PERFECTION TAKES FOCUS.
          </h3>
        </div>

        {/* Right: Video Placeholder */}
        <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-[16/9] bg-onx-near-black/20 relative group cursor-pointer overflow-hidden flex items-center justify-center rounded-sm">
          <video
            src="/archery.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
