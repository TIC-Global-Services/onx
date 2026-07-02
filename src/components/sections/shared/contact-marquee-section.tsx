export function ContactMarqueeSection() {
  return (
    <section className="w-full bg-onx-red py-8 md:py-12 overflow-hidden flex items-center mb-10">
      <div className="relative flex overflow-x-hidden group whitespace-nowrap">
        {/* We use a simple inline animation using standard CSS or Tailwind classes.
            Using two identical text blocks that animate left infinitely.
        */}
        <div className="animate-marquee inline-flex whitespace-nowrap">
          <span className="text-[32px] md:text-5xl lg:text-[64px] uppercase font-normal text-onx-white tracking-wider px-8">
            FOLLOW US FOR MORE @Arc&Bore
          </span>
          <span className="text-[32px] md:text-5xl lg:text-[64px] uppercase font-normal text-onx-white tracking-wider px-8">
            FOLLOW US FOR MORE @Arc&Bore
          </span>
          <span className="text-[32px] md:text-5xl lg:text-[64px] uppercase font-normal text-onx-white tracking-wider px-8">
            FOLLOW US FOR MORE @Arc&Bore
          </span>
          <span className="text-[32px] md:text-5xl lg:text-[64px] uppercase font-normal text-onx-white tracking-wider px-8">
            FOLLOW US FOR MORE @Arc&Bore
          </span>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </section>
  );
}
