"use client";

import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export type StripeId = "headphones" | "archery" | "darts" | "revolver" | null;

export interface ExactState {
  top: number;
  left: number;
  width: number;
  height: number;
  skewX: number;
}

interface StripeExpansionModalProps {
  selectedId: StripeId;
  exactState: ExactState | null;
  onClose: () => void;
}

interface ContentItem {
  image: string;
  imageClass: string;
  objectPositionGrid: string;
  objectPositionExpandedMobile: string;
  objectPositionExpandedDesktop: string;
  textFilled: string;
  textOutlined: string;
  textPosition: string;
  buttonPosition: string;
  gridScale?: number;
  expandedScale?: number;
}

const contentMap: Record<Exclude<StripeId, null>, ContentItem> = {
  headphones: {
    image: "/images/redbanners/headphones2.png",
    imageClass: "w-full h-full object-cover z-10 ",
    objectPositionGrid: "30% 50%",
    objectPositionExpandedMobile: "35% 50%",
    objectPositionExpandedDesktop: "50% 40%",
    textFilled: "SILENCE THE",
    textOutlined: "NOISE.",
    textPosition: "bottom-12 right-12 md:bottom-24 md:right-24 items-end text-right",
    buttonPosition: "mt-6",
    gridScale: 1.2,
    expandedScale: 1.2,
  },
  archery: {
    image: "/images/redbanners/archer.png",
    imageClass: "w-full h-full object-cover z-10",
    objectPositionGrid: "30% 20%",
    objectPositionExpandedMobile: "30% 20%",
    objectPositionExpandedDesktop: "50% 50%",
    textFilled: "HOLD. AIM",
    textOutlined: "BECOME.",
    textPosition: "top-1/2 -translate-y-1/2 left-12 md:left-24 items-start text-left",
    buttonPosition: "mt-6",
  },
  darts: {
    image: "/images/redbanners/darts.png",
    imageClass: "w-full h-full object-cover z-10",
    objectPositionGrid: "45% 50%",
    objectPositionExpandedMobile: "50% 50%",
    objectPositionExpandedDesktop: "50% 10%",
    textFilled: "ONE TARGET. NO",
    textOutlined: "DOUBT.",
    textPosition: "bottom-12 left-1/2 -translate-x-1/2 items-center text-center w-full",
    buttonPosition: "mb-6",
  },
  revolver: {
    image: "/images/redbanners/redrevolver.png",
    imageClass: "w-full h-full object-cover z-10",
    objectPositionGrid: "60% 50%",
    objectPositionExpandedMobile: "55% 50%",
    objectPositionExpandedDesktop: "50% 50%",
    textFilled: "MEASURED. RESULT.",
    textOutlined: "PRECISE.",
    textPosition: "bottom-12 left-12 md:bottom-24 md:left-24 items-start text-left",
    buttonPosition: "mb-6",
  }
};

export function StripeExpansionModal({ selectedId, exactState, onClose }: StripeExpansionModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  const data = selectedId ? contentMap[selectedId] : null;

  useGSAP(() => {
    if (!data || !exactState || !modalRef.current || !contentRef.current || !controlsRef.current || !imageRef.current || !imageWrapRef.current) return;

    // Set initial outer bounds exactly matching the physical math from HeroSection
    gsap.set(modalRef.current, {
      top: exactState.top,
      left: exactState.left,
      width: exactState.width,
      height: exactState.height,
      skewX: exactState.skewX,
      position: "fixed",
      zIndex: 100
    });

    // Hide text content initially
    gsap.set([contentRef.current, controlsRef.current], { opacity: 0 });

    // Set inner geometry to perfectly match the grid's skewed wrapper!
    gsap.set(imageWrapRef.current, {
      width: "250%",
      left: "50%",
      xPercent: -50,
      skewX: 12
    });

    const gridScale = data.gridScale ?? 1;
    const expandedScale = data.expandedScale ?? 1;

    // Set inner image to perfectly match the grid's object-position!
    gsap.set(imageRef.current, {
      objectPosition: data.objectPositionGrid,
      filter: "blur(0px)",
      opacity: 1,
      scale: gridScale
    });

    // Animate outer modal container to full screen
    gsap.to(modalRef.current, {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      skewX: 0,
      duration: 0.8,
      ease: "power3.inOut"
    });

    // Animate inner wrapper to unskew and shrink to 100% width
    gsap.to(imageWrapRef.current, {
      width: "100%",
      skewX: 0,
      duration: 0.8,
      ease: "power3.inOut"
    });

    // Animate object position to center (or mobile offset), and apply cinematic blur
    const isMobile = window.innerWidth < 768;
    const targetObjPos = isMobile ? data.objectPositionExpandedMobile : data.objectPositionExpandedDesktop;

    gsap.to(imageRef.current, {
      objectPosition: targetObjPos,
      duration: 0.8,
      ease: "power3.inOut"
    });

    gsap.to(imageRef.current, {
      keyframes: [
        { filter: "blur(8px)", scale: expandedScale * 1.05, duration: 0.4, ease: "power2.in" },
        { filter: "blur(0px)", scale: expandedScale, duration: 0.4, ease: "power2.out" }
      ]
    });

    // Fade in text content
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power2.out" }
    );

    // Fade in controls
    gsap.to(controlsRef.current, { opacity: 1, duration: 0.3, delay: 0.6 });

  }, [exactState, data]);

  const handleClose = () => {
    if (!data || !exactState || !modalRef.current || !contentRef.current || !controlsRef.current || !imageRef.current || !imageWrapRef.current) {
      onClose();
      return;
    }

    const gridScale = data.gridScale ?? 1;
    const expandedScale = data.expandedScale ?? 1;

    // Fade out text content fast
    gsap.to([contentRef.current, controlsRef.current], { opacity: 0, duration: 0.2 });

    // Reverse outer container
    gsap.to(modalRef.current, {
      top: exactState.top,
      left: exactState.left,
      width: exactState.width,
      height: exactState.height,
      skewX: exactState.skewX,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: onClose
    });

    // Reverse inner wrapper to skewed 250% geometry
    gsap.to(imageWrapRef.current, {
      width: "250%",
      skewX: 12,
      duration: 0.8,
      ease: "power3.inOut"
    });

    // Reverse object position to grid position
    gsap.to(imageRef.current, {
      objectPosition: data.objectPositionGrid,
      duration: 0.8,
      ease: "power3.inOut"
    });

    // Cinematic blur for exit
    gsap.to(imageRef.current, {
      keyframes: [
        { filter: "blur(8px)", scale: expandedScale * 1.05, duration: 0.4, ease: "power2.in" },
        { filter: "blur(0px)", scale: gridScale, duration: 0.4, ease: "power2.out" }
      ]
    });
  };

  if (!selectedId || !data) return null;

  return (
    <div ref={modalRef} className="bg-onx-red flex items-center justify-center overflow-hidden">
      {/* Background Image/Object Wrapper */}
      <div ref={imageWrapRef} className="absolute top-0 h-full flex items-center justify-center">
        <img ref={imageRef} src={data.image} alt={selectedId} className={data.imageClass} />
      </div>

      {/* Controls */}
      <div ref={controlsRef}>
        <button
          onClick={handleClose}
          className="absolute top-8 left-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 z-50 w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-white hover:bg-black/20 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Typography Overlay */}
      <div
        ref={contentRef}
        className={`absolute z-20 flex flex-col ${data.textPosition}`}
      >
        {(selectedId === "darts" || selectedId === "revolver") && (
          <Link
            href="/gears"
            className={`bg-onx-white text-onx-black px-10 py-4 text-sm md:text-base uppercase font-bold tracking-[0.15em] hover:bg-onx-black hover:text-white transition-colors ${data.buttonPosition}`}
          >
            SHOP NOW
          </Link>
        )}

        <div className="flex flex-col">
          <span className="text-[40px] sm:text-[55px] md:text-[70px] lg:text-[90px] font-bold uppercase leading-tight tracking-tight text-white drop-shadow-xl">
            {data.textFilled}
          </span>
          <span className="text-[40px] sm:text-[55px] md:text-[70px] lg:text-[90px] font-bold uppercase leading-tight tracking-tight text-transparent" style={{ WebkitTextStroke: "2px #FFFFFF" }}>
            {data.textOutlined}
          </span>
        </div>

        {(selectedId === "archery" || selectedId === "headphones") && (
          <Link
            href="/gears"
            className={`bg-onx-white text-onx-black px-10 py-4 text-sm md:text-base uppercase font-bold tracking-[0.15em] hover:bg-onx-black hover:text-white transition-colors ${data.buttonPosition}`}
          >
            SHOP NOW
          </Link>
        )}
      </div>

    </div>
  );
}
