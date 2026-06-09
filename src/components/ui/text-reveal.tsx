"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TextRevealProps {
  text: string;
  secondaryText?: string;
  className?: string;
  pin?: boolean;
}

export function TextReveal({ text, secondaryText, className = "", pin = true }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions as any;

      gsap.to(".word-span", {
        color: "#000000",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pin ? (containerRef.current?.closest("section") || true) : false,
          start: "center center",
          end: isDesktop ? "+=150%" : "+=100%",
          scrub: 0.7,
        }
      });
    });

  }, { scope: containerRef });

  const words = text.split(/(\s+)/); // Preserve spaces
  const secondaryWords = secondaryText?.split(/(\s+)/);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <p ref={textRef} className={className}>
        {words.map((word, i) => {
          if (word.trim() === "") {
            return <span key={i}>{word}</span>;
          }
          return (
            <span 
              key={i} 
              className="word-span text-onx-near-black/10 inline-block"
            >
              {word}
            </span>
          );
        })}
        {secondaryWords && (
          <span className="hidden md:inline">
            {secondaryWords.map((word, i) => {
              if (word.trim() === "") {
                return <span key={`s-${i}`}>{word}</span>;
              }
              return (
                <span
                  key={`s-${i}`}
                  className="word-span text-onx-near-black/10 inline-block"
                >
                  {word}
                </span>
              );
            })}
          </span>
        )}
      </p>
    </div>
  );
}
