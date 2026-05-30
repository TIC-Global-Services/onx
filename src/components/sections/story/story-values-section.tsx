"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabData = {
  driven: {
    title: "DRIVEN",
    text: "EVERY STEP IS POWERED BY INTENT AND AMBITION, PUSHING BOUNDARIES WITH A CLEAR VISION IN MIND. THE FOCUS REMAINS ON PROGRESS—CONSTANTLY EVOLVING, ADAPTING, AND MOVING FORWARD WITH PURPOSE.",
    image: "/images/story/floatingbullets.png"
  },
  precise: {
    title: "PRECISE",
    text: "ATTENTION TO DETAIL DEFINES EVERY OUTCOME, WHERE NOTHING IS LEFT TO CHANCE. EACH ELEMENT IS CAREFULLY CRAFTED TO ENSURE ACCURACY, CONSISTENCY, AND A SEAMLESS EXPERIENCE.",
    image: "/images/story/gunmen.png"
  }
};

export function StoryValuesSection() {
  const [activeTab, setActiveTab] = useState<"driven" | "precise">("driven");
  const data = tabData[activeTab];

  return (
    <section className="bg-onx-black text-onx-white overflow-hidden pt-4 pb-16 md:pt-4 md:pb-8 relative">
      {/* Marquee Heading */}
      <div className="w-full overflow-hidden whitespace-nowrap mb-4 md:mb-4 flex relative">
        <div className="animate-marquee-slow inline-flex whitespace-nowrap">
          <h2 className="text-[45px] sm:text-6xl md:text-[80px] lg:text-[90px] font-normal uppercase leading-tight tracking-tight pr-12">
            PURPOSE, DRIVEN BY PASSION, DEFINED BY TIME. PURPOSE, DRIVEN BY PASSION, DEFINED BY TIME.
          </h2>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
      `}} />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col relative z-10 pt-8 md:pt-12">

        {/* Tabs */}
        <div className="flex items-center gap-6 mb-16 md:mb-32">
          <button
            onClick={() => setActiveTab("driven")}
            className={`cursor-pointer text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors ${activeTab === "driven" ? "text-onx-white" : "text-onx-white/40 hover:text-onx-white/80"}`}
          >
            DRIVEN
          </button>
          <button
            onClick={() => setActiveTab("precise")}
            className={`cursor-pointer text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors ${activeTab === "precise" ? "text-onx-white" : "text-onx-white/40 hover:text-onx-white/80"}`}
          >
            PRECISE.
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8">

          {/* Left Column: Text */}
          <div className="flex flex-col justify-start max-w-[500px] w-full md:w-1/2 pt-0 md:pt-36">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h3 className="text-[40px] sm:text-5xl md:text-[56px] font-normal uppercase tracking-wider mb-6">
                  {data.title}
                </h3>
                <p className="text-[13px] md:text-sm text-onx-white/80 leading-[1.6] uppercase tracking-wider">
                  {data.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-[45%] lg:w-[45%] ml-auto aspect-[4/5] bg-transparent relative overflow-hidden flex-shrink-0 -mt-8 md:-mt-42">
            <AnimatePresence>
              <motion.img
                key={activeTab}
                src={data.image}
                alt={data.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
