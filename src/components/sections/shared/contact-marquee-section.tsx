export function ContactMarqueeSection() {
  return (
    <section className="w-full bg-onx-red py-8 md:py-12 overflow-hidden flex items-center">
      <div className="relative flex overflow-x-hidden group whitespace-nowrap">
        {/* We use a simple inline animation using standard CSS or Tailwind classes.
            Using two identical text blocks that animate left infinitely.
        */}
        <div className="animate-marquee inline-flex whitespace-nowrap">
          <span className="text-[32px] md:text-[48px] lg:text-[64px] uppercase font-bold text-onx-white tracking-wider px-8">
            FOLLOW US FOR MORE @ON_X_TARGET_SPORTZ
          </span>
          <span className="text-[32px] md:text-[48px] lg:text-[64px] uppercase font-bold text-onx-white tracking-wider px-8">
            FOLLOW US FOR MORE @ON_X_TARGET_SPORTZ
          </span>
          <span className="text-[32px] md:text-[48px] lg:text-[64px] uppercase font-bold text-onx-white tracking-wider px-8">
            FOLLOW US FOR MORE @ON_X_TARGET_SPORTZ
          </span>
          <span className="text-[32px] md:text-[48px] lg:text-[64px] uppercase font-bold text-onx-white tracking-wider px-8">
            FOLLOW US FOR MORE @ON_X_TARGET_SPORTZ
          </span>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
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
