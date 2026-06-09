"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Header } from "@/components/layout/header";
import { motion } from "framer-motion";
import { StripeExpansionModal, StripeId, ExactState } from "./stripe-expansion-modal";

export function HeroSection() {
  const [selectedId, setSelectedId] = useState<StripeId>(null);
  const [exactState, setExactState] = useState<ExactState | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredStripe, setHoveredStripe] = useState<StripeId>(null);

  const handleStripeClick = (id: StripeId, event: React.MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const offsetWidth = el.offsetWidth;
    const offsetHeight = el.offsetHeight;

    // Mathematically calculate the exact top/left position of the unskewed box 
    // by pivoting from the center of the bounding box.
    const exactTop = rect.top + rect.height / 2 - offsetHeight / 2;
    const exactLeft = rect.left + rect.width / 2 - offsetWidth / 2;

    setExactState({
      top: exactTop,
      left: exactLeft,
      width: offsetWidth,
      height: offsetHeight,
      skewX: -10
    });
    setSelectedId(id);
  };

  return (
    <section id="hero" className="relative w-full max-h-[100svh] bg-onx-white pb-12 md:pb-20 lg:pb-28 overflow-hidden">
      {/* Header is now part of the Hero Section */}
      <Header />

      <Container className="pt-12 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-start pt-10 md:pt-16">

          {/* Left Text Column */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left z-10">
            <h1 className="flex flex-col">
              <span className="text-[64px] sm:text-[80px] md:text-8xl lg:text-9xl font-bold uppercase leading-[1.1] md:leading-tight tracking-[-0.02em] text-onx-red" style={{ WebkitTextStroke: "2px var(--color-onx-red)" }}>
                BUILT TO
              </span>
              <span className="text-[64px] sm:text-[80px] md:text-8xl lg:text-9xl font-bold uppercase leading-[1.1] md:leading-tight tracking-[-0.02em] text-onx-white" style={{ WebkitTextStroke: "2px var(--color-onx-red)" }}>
                DECIDE
              </span>
            </h1>

            <Link
              href="/gears"
              className="mt-8 md:mt-10 w-[180px] h-[60px] md:w-[229px] md:h-[83px] flex items-center justify-center bg-onx-red text-onx-white text-xl md:text-[32px] uppercase tracking-tight font-bold hover:bg-onx-black transition-colors duration-300"
            >
              SHOP NOW
            </Link>
          </div>

          {/* Right Stripes/Image Collage Column */}
          <div className="relative h-[450px] md:h-[650px] lg:h-[750px] w-full flex justify-end items-center gap-4 md:gap-6 overflow-visible pr-4 md:pr-2 skew-x-[-10deg] translate-x-4 md:translate-x-18 md:-translate-y-36 mt-12 md:mt-0">

            {/* Stripe 1: Earmuffs (From Bottom) */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "10%", opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="w-[35%] h-[80%] relative z-10 drop-shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={(e) => handleStripeClick("headphones", e)}
                onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
                onMouseEnter={() => setHoveredStripe("headphones")}
                onMouseLeave={() => setHoveredStripe(null)}
                className="w-full h-full bg-onx-red overflow-hidden relative cursor-pointer"
              >
                <div className="absolute top-0 left-1/2 w-[250%] h-full -translate-x-1/2 bg-onx-red flex items-center justify-center skew-x-[12deg]">
                  <img src="/images/redbanners/headphones2.png" alt="Headphones" className="w-full h-full object-cover object-[30%_50%] scale-120 " />
                </div>
              </motion.div>
            </motion.div>

            {/* Stripe 2: Archery (From Top) */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "-11%", opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-[35%] h-[100%] relative z-10 drop-shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={(e) => handleStripeClick("archery", e)}
                onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
                onMouseEnter={() => setHoveredStripe("archery")}
                onMouseLeave={() => setHoveredStripe(null)}
                className="w-full h-full bg-onx-red overflow-hidden relative cursor-pointer"
              >
                <div className="absolute top-0 left-1/2 w-[250%] h-full -translate-x-1/2 bg-onx-red flex items-center justify-center skew-x-[12deg]">
                  <img src="/images/redbanners/archer.png" alt="Archery" className="w-full h-full object-cover object-[30%_20%]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Stripe 3: Darts (From Bottom) */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "10%", opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="w-[35%] h-[80%] relative z-10 drop-shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={(e) => handleStripeClick("darts", e)}
                onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
                onMouseEnter={() => setHoveredStripe("darts")}
                onMouseLeave={() => setHoveredStripe(null)}
                className="w-full h-full bg-onx-red overflow-hidden relative cursor-pointer"
              >
                <div className="absolute top-0 left-1/2 w-[250%] h-full -translate-x-1/2 bg-onx-red flex items-center justify-center skew-x-[12deg]">
                  <img src="/images/redbanners/darts.png" alt="Darts" className="w-full h-full object-cover object-[45%_50%]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Stripe 4: Gun (From Top) */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "-2%", opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="w-[35%] h-[95%] relative z-10 drop-shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={(e) => handleStripeClick("revolver", e)}
                onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
                onMouseEnter={() => setHoveredStripe("revolver")}
                onMouseLeave={() => setHoveredStripe(null)}
                className="w-full h-full bg-onx-red overflow-hidden relative cursor-pointer"
              >
                <div className="absolute top-0 left-1/2 w-[250%] h-full -translate-x-1/2 bg-onx-red flex items-center justify-center skew-x-[12deg]">
                  <img src="/images/redbanners/redrevolver.png" alt="Revolver" className="w-full h-full object-cover object-[60%_50%]" />
                </div>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </Container>

      {hoveredStripe && (
        <div
          className="fixed pointer-events-none z-[100] bg-onx-black text-white text-xs uppercase font-bold tracking-[0.2em] px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
          style={{ left: cursorPos.x, top: cursorPos.y, transform: "translate(-50%, -50%)" }}
        >
          VIEW MORE
        </div>
      )}

      {selectedId && (
        <StripeExpansionModal
          selectedId={selectedId}
          exactState={exactState}
          onClose={() => {
            setSelectedId(null);
            setExactState(null);
          }}
        />
      )}
    </section>
  );
}
