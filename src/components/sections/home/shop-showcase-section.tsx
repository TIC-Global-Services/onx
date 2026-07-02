"use client";

import { useRef } from "react";
import { TextReveal } from "@/components/ui/text-reveal";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ShopShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions as any;
      const endValue = isDesktop ? "+=150%" : "+=100%";

      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: endValue,
        pin: true,
        scrub: true,
      });

      // Animate the shotgun image to come from the bottom as user scrolls
      gsap.fromTo(imageRef.current,
        {
          y: isDesktop ? 450 : 250,
          opacity: 0,
          scale: 0.9,
          filter: "blur(10px) brightness(2)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px) brightness(1)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: endValue,
            scrub: 0.5,
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="shop-showcase" className="min-h-screen flex flex-col justify-center bg-onx-white py-5 md:py-12  overflow-hidden">

      {/* Massive horizontal typography band spanning full width */}
      <div className="w-full mb-12 md:mb-32 flex whitespace-nowrap">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="pr-12 text-[64px] sm:text-8xl md:text-[140px] font-bold uppercase leading-[0.8] tracking-normal text-transparent" style={{ WebkitTextStroke: "1px #000000" }}>
              <span className="text-onx-red" style={{ WebkitTextStroke: "0" }}>SHOP</span> ITEMS <span className="text-onx-red" style={{ WebkitTextStroke: "0" }}>SHOP</span> ITEMS
            </span>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}} />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10">

        {/* Description paragraph */}
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-xl md:text-xl text-onx-near-black font-medium uppercase leading-wide mb-8">Precision Performance</p>
          <TextReveal
            text="We are built for those who thrive on precision, discipline, and performance. Designed as a space where focus meets action, it brings together modern training environments with a strong foundation in skill-based sports like shooting and archery."
            className="text-3xl text-3xl font-thin md:font-normal leading-tight text-onx-near-black"
            pin={false}
          />
        </div>

        {/* Centered Shotgun Image */}
        <div className="mx-auto w-full max-w-[1000px] flex items-center justify-center -mt-2 md:-mt-6 ">
          <img
            ref={imageRef}
            src="/images/bow.png"
            alt="Shotgun"
            className="w-[600px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
