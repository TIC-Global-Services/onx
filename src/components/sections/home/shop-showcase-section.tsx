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
    // Reveal the image with a cinematic glow and silhouette focus reveal
    gsap.fromTo(imageRef.current,
      { 
        filter: "blur(20px) brightness(3)", 
        scale: 0.9, 
        opacity: 0 
      },
      {
        filter: "blur(0px) brightness(1)", 
        scale: 1, 
        opacity: 1, 
        duration: 1.8, 
        ease: "power3.out", 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="shop-showcase" className="min-h-screen flex flex-col justify-center bg-onx-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
      
      {/* Massive horizontal typography band spanning full width */}
      <div className="w-full mb-24 md:mb-32 flex whitespace-nowrap">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="pr-12 text-[64px] sm:text-8xl md:text-[140px] font-bold uppercase leading-[0.8] tracking-normal text-transparent" style={{ WebkitTextStroke: "1px #000000" }}>
              <span className="text-onx-red" style={{ WebkitTextStroke: "0" }}>SHOP</span> ITEMS <span className="text-onx-red" style={{ WebkitTextStroke: "0" }}>SHOP</span> ITEMS
            </span>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
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
          <p className="text-xl text-xl text-onx-near-black font-medium leading-wide mb-20">Precision Performance</p>
          <TextReveal 
            text="ONX Sports is built for those who thrive on precision, discipline, and performance. Designed as a space where focus meets action, it brings together modern training environments with a strong foundation in skill-based sports like shooting and archery."
            className="text-3xl text-3xl font-thin md:font-normal leading-tight text-onx-near-black" 
          />
        </div>

        {/* Centered Shotgun Image */}
        <div className="mx-auto w-full max-w-[1000px] flex items-center justify-center -mt-16 md:-mt-32 -mb-24 md:-mb-48">
          <img 
            ref={imageRef}
            src="/images/shotgun.png"  
            alt="ONX Shotgun"
            className="w-[700px] h-auto object-contain" 
          />
        </div>

      </div>
    </section>
  );
}
