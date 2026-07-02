"use client";

import { useState } from "react";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mainNavItems } from "@/data/navigation";
import type { NavItem } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export function MobileMenu({ dark = false }: { dark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const router = useRouter();

  const activeItem = activeSubmenu
    ? (mainNavItems.find((item) => item.label === activeSubmenu) ?? null)
    : null;

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  const navigateTo = (url: string) => {
    setIsOpen(false);
    setActiveSubmenu(null);
    setTimeout(() => {
      router.push(url);
    }, 250);
  };

  const onExitComplete = () => {
    // Optional: any cleanup after menu closes
  };

  const openSubmenu = (label: string) => {
    setDirection(1);
    setActiveSubmenu(label);
  };

  const closeSubmenu = () => {
    setDirection(-1);
    setActiveSubmenu(null);
  };

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        className={`flex items-center gap-2 ${dark ? 'text-onx-white hover:text-onx-red' : 'text-onx-near-black hover:text-onx-red'} transition-colors`}
        aria-label="Open menu"
      >
        <span className="text-xl md:text-2xl font-bold leading-none">=</span>
        <span className="text-base uppercase tracking-widest font-bold">MENU</span>
      </button>

      <AnimatePresence onExitComplete={onExitComplete}>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              variants={backdropVariants}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            <motion.div
              className="relative w-[85vw] md:w-1/2 h-full bg-white flex flex-col shadow-2xl"
              variants={sidebarVariants}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
            >
              <div className="flex h-[78px] items-center px-5 md:px-10 border-b border-gray-200">
                {/* <button
                  type="button"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-black hover:text-onx-red transition-colors"
                  aria-label="Close menu"
                >
                  <span className="text-xl md:text-2xl font-bold leading-none">=</span>
                  <span className="text-xl md:text-base uppercase tracking-widest font-bold">MENU</span>
                </button> */}

                <div className="flex-1 flex justify-end">                   
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="text-black hover:text-onx-red transition-colors flex items-center gap-2"
                  >
                    <span className="text-xl md:text-base uppercase tracking-widest font-bold">CLOSE</span>
                    <X size={24} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-5 md:px-10 py-12 flex flex-col justify-between">
                <AnimatePresence mode="wait" custom={direction}>
                  {activeSubmenu ? (
                    <motion.div
                      key="submenu"
                      custom={direction}
                      variants={panelVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        type="button"
                        onClick={closeSubmenu}
                        className="flex items-center gap-4 text-black hover:text-onx-red transition-colors mb-10"
                      >
                        <ArrowLeft size={32} strokeWidth={1.5} />
                        <span className="text-xl uppercase font-bold tracking-widest">Back</span>
                      </button>
                      <SubmenuPanel item={activeItem} onNavigate={navigateTo} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="main"
                      custom={direction}
                      variants={panelVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                    >
                      <MainMenuPanel onItemClick={openSubmenu} onNavigate={navigateTo} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="mt-12 pt-4 border-t border-gray-200 flex items-center justify-between px-4 sm:px-12 pb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <a href="#" className="text-black hover:text-onx-red transition-colors" aria-label="Facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-onx-red transition-colors" aria-label="YouTube">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-onx-red transition-colors" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MainMenuPanel({
  onItemClick,
  onNavigate,
}: {
  onItemClick: (label: string) => void;
  onNavigate: (url: string) => void;
}) {
  return (
    <ul className="flex flex-col gap-8 md:gap-12">
      {mainNavItems.map((item, i) => (
        <motion.li
          key={item.label}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.97 }}
        >
          {item.children ? (
            <button
              type="button"
              onClick={() => onItemClick(item.label)}
              className="flex items-center gap-4 text-[64px] font-normal uppercase leading-[0.9] tracking-[-0.02em] text-black hover:text-onx-red transition-colors text-left"
            >
              {item.label}
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={40} strokeWidth={1} className="md:w-[60px] md:h-[60px]" />
              </motion.span>
            </button>
          ) : (
            <Link
              href={item.href}
              onClick={(e) => {
                if (e.button !== 0 || e.metaKey || e.ctrlKey) return;
                e.preventDefault();
                onNavigate(item.href);
              }}
              className="block text-[64px] font-normal uppercase leading-[0.9] tracking-[-0.02em] text-black hover:text-onx-red transition-colors"
            >
              {item.label}
            </Link>
          )}
        </motion.li>
      ))}
    </ul>
  );
}

function SubmenuPanel({
  item,
  onNavigate,
}: {
  item: NavItem | null;
  onNavigate: (url: string) => void;
}) {
  if (!item || !item.children) return null;

  return (
    <ul className="flex flex-col gap-8 md:gap-12">
      {item.children.map((child, i) => (
        <motion.li
          key={child.label}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href={child.href}
            onClick={(e) => {
              if (e.button !== 0 || e.metaKey || e.ctrlKey) return;
              e.preventDefault();
              onNavigate(child.href);
            }}
            className="block text-[64px] font-normal uppercase leading-tight tracking-[-0.02em] text-black hover:text-onx-red transition-colors"
          >
            {child.label}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
