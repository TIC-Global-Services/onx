"use client";

import { Button } from "./button";

interface NewsletterFormProps {
  placeholder: string;
  buttonLabel: string;
  light?: boolean;
}

export function NewsletterForm({ placeholder, buttonLabel, light = false }: NewsletterFormProps) {
  return (
    <form
      className="mt-6 flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire up to newsletter API
      }}
    >
      <input
        type="email"
        placeholder={placeholder}
        className={`h-[52px] w-full border px-4 text-[13px] focus:outline-none ${
          light 
            ? "border-onx-near-black/35 text-onx-near-black placeholder:text-onx-near-black/45 focus:border-onx-near-black bg-transparent" 
            : "border-onx-white/30 text-onx-white placeholder:text-onx-white/40 focus:border-onx-white bg-transparent"
        }`}
      />
      <button 
        type="submit" 
        className={`h-[48px] px-8 font-semibold text-[13px] uppercase tracking-wider w-fit transition-colors ${
          light
            ? "bg-onx-near-black text-onx-white hover:bg-onx-near-black/85"
            : "bg-white text-black hover:bg-gray-200"
        }`}
      >
        {buttonLabel}
      </button>
    </form>
  );
}
