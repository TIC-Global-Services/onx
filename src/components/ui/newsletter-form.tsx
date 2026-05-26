"use client";

import { Button } from "./button";

interface NewsletterFormProps {
  placeholder: string;
  buttonLabel: string;
}

export function NewsletterForm({ placeholder, buttonLabel }: NewsletterFormProps) {
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
        className="h-[52px] w-full border border-onx-white/30 bg-transparent px-4 text-[13px] text-onx-white placeholder:text-onx-white/40 focus:border-onx-white focus:outline-none"
      />
      <button 
        type="submit" 
        className="h-[48px] px-8 bg-white text-black font-semibold text-[13px] uppercase tracking-wider w-fit hover:bg-gray-200 transition-colors"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
