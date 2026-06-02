"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function UnleashPowerSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Select the 1st, 3rd, and 5th cards (indices 0, 2, 4)
    const targets = [".parallax-card-0", ".parallax-card-2", ".parallax-card-4"];

    gsap.fromTo(targets,
      { y: -40 },
      {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start when container enters from bottom
          end: "bottom top", // End when container leaves at the top
          scrub: 1 // 1 second smoothing for a buttery feel
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="unleash-power" className="bg-onx-warm-light pb-16 overflow-hidden flex flex-col items-center">

      {/* Interactive Image Slider - Full Bleed */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px] bg-onx-near-black/5 flex items-center justify-center mb-16 md:mb-24 relative overflow-hidden group">

        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-30 pointer-events-none">
          <span className="text-xs md:text-sm uppercase font-bold tracking-[0.3em] text-onx-near-black">GUN</span>
        </div>
        <div className="absolute top-8 right-8 md:top-12 md:right-12 z-30 pointer-events-none">
          <span className="text-xs md:text-sm uppercase font-bold tracking-[0.3em] text-onx-near-black">PISTOL</span>
        </div>

        {/* Base Image (revealed when slider moves left) */}
        <img
          src="/images/pistol2.png"
          alt="Pistol 2"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-top pointer-events-none "
        />

        {/* Overlaid Image (revealed when slider moves right) */}
        <img
          src="/images/smg.png"
          alt="SMG"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        />

        {/* Visual Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[1px] bg-gray-400 z-10 pointer-events-none flex items-center justify-center"
          style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
        >
          {/* Slider Handle */}
          <div className="w-12 h-12 flex-none rounded-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.15)] flex items-center justify-center border border-gray-100">
            <div className="flex gap-[3px]">
              <span className="w-[1.5px] h-[10px] bg-gray-400"></span>
              <span className="w-[1.5px] h-[10px] bg-gray-400"></span>
              <span className="w-[1.5px] h-[10px] bg-gray-400"></span>
            </div>
          </div>
        </div>

        {/* Invisible Range Input for smooth native interaction */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />

      </div>

      <div ref={containerRef} className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col items-center w-full">
        {/* 5 Images Row - alternating tall/short/tall/short/tall */}
        <div className="flex gap-2 md:gap-4 w-full max-w-[1200px] mb-8 items-start">
          {[
            { src: "/images/viewall-pistol.jpg", ratio: "aspect-[4/5]" },
            { src: "/images/deliversPower/point.jpg", ratio: "aspect-square" },
            { src: "/images/deliversPower/shoot.jpg", ratio: "aspect-[4/5]" },
            { src: "/images/deliversPower/scoreboard.jpg", ratio: "aspect-square" },
            { src: "/images/deliversPower/aim.jpg", ratio: "aspect-[4/5]" },
          ].map((item, i) => (
            <div key={i} className={`flex-1 ${item.ratio} bg-onx-near-black overflow-hidden relative parallax-card-${i} ${i >= 3 ? "hidden md:block" : ""}`}>
              <img src={item.src} alt={`Detail ${i + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
            </div>
          ))}
        </div>

        {/* Huge Typography */}
        <div className="w-full max-w-[750px] text-center -mt-10 md:-mt-20 relative z-10">
          <h2 className="text-[60px] sm:text-[70px] md:text-[140px] lg:text-[140px] font-thin uppercase leading-[1] tracking-[-0.02em] text-[#413C3C]">
            ONX DELIVERS
            <br />
            POWER.
          </h2>
          <p className="text-xs font-normal uppercase tracking-wide text-onx-black mt-6 max-w-[450px] mx-auto">
            ONX is engineered for precision, built to deliver consistent performance when it matters most.
            Every detail is refined for control, reliability, and a seamless experience you can trust.</p>
        </div>

      </div>
    </section>
  );
}
