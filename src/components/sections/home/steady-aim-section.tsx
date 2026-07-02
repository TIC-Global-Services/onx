"use client";

import { useEffect, useRef } from "react";

export function SteadyAimSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => console.log("Video play failed:", err));
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="steady-aim" className="relative bg-[#FA261A] pb-16 pt-24 md:py-48 overflow-hidden flex items-end md:items-center min-h-[700px]">

      {/* Background Video - Full Bleed */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          src="/steadyaimvideo.mp4"
          muted
          playsInline
          className="w-full h-full object-cover object-[75%_50%] md:object-center opacity-80"
        />
        <div className="absolute inset-0 bg-[#FA261A]/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Left Text content */}
          <div className="relative md:translate-y-24 mt-12 md:mt-32">
            <h3 className="block text-xl font-bold uppercase tracking-widest text-onx-black mb-4">
              Focus
            </h3>
            <h2 className="text-[44px] sm:text-[56px] md:text-7xl lg:text-[80px] font-bold uppercase leading-tight tracking-widest text-onx-black -ml-1">
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
