"use client";

import { useEffect, useState } from "react";

export function ProgressiveBlur() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="progressive-blur-container"
      style={{
        opacity: isFooterVisible ? 0 : 1,
        pointerEvents: "none",
      }}
    >
      <div className="progressive-blur-layer progressive-blur-layer-1" />
      <div className="progressive-blur-layer progressive-blur-layer-2" />
      <div className="progressive-blur-layer progressive-blur-layer-3" />
      <div className="progressive-blur-layer progressive-blur-layer-4" />
    </div>
  );
}
