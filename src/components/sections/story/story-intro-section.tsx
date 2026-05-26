import { TextReveal } from "@/components/ui/text-reveal";

export function StoryIntroSection() {
  return (
    <section className="bg-onx-white py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex justify-center">
        <TextReveal 
          text="ONX Sports was built from a simple idea to create a space where precision, focus, and discipline come together seamlessly. What began as a vision to redefine indoor rifle training has evolved into a modern, performance-driven environment designed for both beginners and seasoned shooters. Every detail, from the controlled setting to the advanced training setup, is crafted to enhance consistency and accuracy. At ONX, it’s not just about taking a shot it’s about mastering control, building confidence, and pushing the limits of your performance."
          className="text-lg md:text-2xl lg:text-3xl font-medium leading-[1.4] text-onx-near-black text-left max-w-[900px] tracking-tight"
        />
      </div>
    </section>
  );
}
