"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorTheme = "red" | "black" | "grey";

// Recursively checks elements for tailwind hover classes to predict hovered background color
function getHoverTheme(element: HTMLElement | null): CursorTheme | null {
  if (!element) return null;
  
  const classList = element.className;
  if (typeof classList === "string" && classList) {
    // Hover background is Red -> Cursor should be Black
    if (classList.includes("hover:bg-onx-red")) {
      return "black";
    }
    // Hover background is Black / Dark -> Cursor should be Red
    if (
      classList.includes("hover:bg-onx-black") ||
      classList.includes("hover:bg-onx-near-black") ||
      classList.includes("hover:bg-black") ||
      classList.includes("group-hover:bg-onx-near-black")
    ) {
      return "red";
    }
    // Hover background is White / Light Gray -> Cursor should be Grey
    if (
      classList.includes("hover:bg-onx-light-gray") ||
      classList.includes("hover:bg-gray-200") ||
      classList.includes("hover:bg-gray-100")
    ) {
      return "grey";
    }
  }

  // Prevent infinite loops and stop climbing at layout roots
  if (element === document.body || element === document.documentElement) {
    return null;
  }

  return getHoverTheme(element.parentElement);
}

// Helper function to recursively find the computed background color of the hovered element
function getEffectiveBgColor(element: HTMLElement | null): string {
  if (!element) return "rgb(0, 0, 0)"; // Fallback to page background color (black)
  
  const style = window.getComputedStyle(element);
  const bgColor = style.backgroundColor;
  
  // If the background is transparent or has no alpha value, traverse up to parent
  if (
    bgColor === "transparent" ||
    bgColor === "rgba(0, 0, 0, 0)" ||
    bgColor === "rgba(0,0,0,0)" ||
    bgColor.endsWith(", 0)")
  ) {
    if (element === document.body || element === document.documentElement) {
      return "rgb(0, 0, 0)"; // Fallback to dark theme default
    }
    return getEffectiveBgColor(element.parentElement);
  }
  
  return bgColor;
}

// Parses rgb/rgba values to classify background color
function parseColorTheme(colorStr: string): CursorTheme {
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return "red";
  
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  
  // 1. Is Red background? (e.g. rgb(251, 37, 26) or rgb(227, 33, 36))
  if (r > 180 && g < 80 && b < 80) {
    return "black";
  }
  
  // 2. Is White / very light background? (e.g. rgb(255, 255, 255) or rgb(236, 235, 233))
  if (r > 210 && g > 210 && b > 210) {
    return "grey";
  }
  
  // 3. Fallback to Black/dark background -> Red cursor
  return "red";
}

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hiddenByTarget, setHiddenByTarget] = useState(false);
  const [cursorTheme, setCursorTheme] = useState<CursorTheme>("red");
  const [mounted, setMounted] = useState(false);

  // High performance tracking bypassing React state updates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing circle (elastic follow effect)
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const trailingX = useSpring(mouseX, springConfig);
  const trailingY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Add custom class to html element to hide the browser cursor on desktop
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target) {
        // Hide custom cursor if target or any of its ancestors requests it
        const shouldHide = !!target.closest('[data-hide-cursor="true"]');
        setHiddenByTarget(shouldHide);

        // Evaluate cursor color on movement to ensure it matches active state
        const hoverTheme = getHoverTheme(target);
        if (hoverTheme) {
          setCursorTheme(hoverTheme);
        } else {
          const bgColor = getEffectiveBgColor(target);
          const theme = parseColorTheme(bgColor);
          setCursorTheme(theme);
        }
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Hide custom cursor if target or any of its ancestors requests it
      const shouldHide = !!target.closest('[data-hide-cursor="true"]');
      setHiddenByTarget(shouldHide);

      // Detect if we are hovering over an interactive element
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") || 
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer";

      setHovered(!!isInteractive);

      // Detect hover styles or effective background color
      const hoverTheme = getHoverTheme(target);
      if (hoverTheme) {
        setCursorTheme(hoverTheme);
      } else {
        const bgColor = getEffectiveBgColor(target);
        const theme = parseColorTheme(bgColor);
        setCursorTheme(theme);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  // Color mapping based on current adaptive theme
  const getThemeColorHex = (theme: CursorTheme) => {
    switch (theme) {
      case "black":
        return "#000000";
      case "grey":
        return "#717171";
      case "red":
      default:
        return "#FB251A";
    }
  };

  const getRingColors = (theme: CursorTheme, isHovered: boolean) => {
    switch (theme) {
      case "black":
        return {
          border: isHovered ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.35)",
          bg: isHovered ? "rgba(0, 0, 0, 0.12)" : "rgba(0, 0, 0, 0)"
        };
      case "grey":
        return {
          border: isHovered ? "rgba(113, 113, 113, 1)" : "rgba(113, 113, 113, 0.35)",
          bg: isHovered ? "rgba(113, 113, 113, 0.08)" : "rgba(113, 113, 113, 0)"
        };
      case "red":
      default:
        return {
          border: isHovered ? "rgba(251, 37, 26, 1)" : "rgba(251, 37, 26, 0.35)",
          bg: isHovered ? "rgba(251, 37, 26, 0.08)" : "rgba(251, 37, 26, 0)"
        };
    }
  };

  const themeColorHex = getThemeColorHex(cursorTheme);
  const ringColors = getRingColors(cursorTheme, hovered);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden pointer-coarse:hidden md:block">
      {/* 1. Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ x: mouseX, y: mouseY }}
        animate={{ 
          backgroundColor: themeColorHex,
          scale: hiddenByTarget ? 0 : 1,
          opacity: hiddenByTarget ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* 2. Trailing Aperture / Reticle Ring */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ x: trailingX, y: trailingY }}
        animate={{
          width: hiddenByTarget ? 0 : (hovered ? 44 : 26),
          height: hiddenByTarget ? 0 : (hovered ? 44 : 26),
          borderColor: ringColors.border,
          backgroundColor: ringColors.bg,
          opacity: hiddenByTarget ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      >
        {/* Reticle Crosshair Ticks (Fade and scale in on hover) */}
        {hovered && !hiddenByTarget && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Top tick */}
            <motion.span 
              className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-[1px] h-1.5" 
              animate={{ backgroundColor: themeColorHex }}
              transition={{ duration: 0.15 }}
            />
            {/* Bottom tick */}
            <motion.span 
              className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-[1px] h-1.5" 
              animate={{ backgroundColor: themeColorHex }}
              transition={{ duration: 0.15 }}
            />
            {/* Left tick */}
            <motion.span 
              className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-1.5 h-[1px]" 
              animate={{ backgroundColor: themeColorHex }}
              transition={{ duration: 0.15 }}
            />
            {/* Right tick */}
            <motion.span 
              className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-1.5 h-[1px]" 
              animate={{ backgroundColor: themeColorHex }}
              transition={{ duration: 0.15 }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
