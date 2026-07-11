import { TextReveal } from "@/components/ui/text-reveal";

export function StoryIntroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-onx-white py-24 md:py-40">
      <div className="px-8 md:px-[5%] flex justify-center">
        <TextReveal
          text="Our space was built from a simple idea to create an environment where precision, focus, and discipline come together seamlessly. What began as a vision to redefine indoor rifle training has evolved into a modern, performance-driven environment designed for both beginners and seasoned shooters."
          secondaryText="Every detail, from the controlled setting to the advanced training setup, is crafted to enhance consistency and accuracy. Here, it's not just about taking a shot; it's about mastering control, building confidence, and pushing the limits of your performance."
          className="text-3xl lg:text-3xl font-thin md:font-normal leading-[1.4] text-onx-near-black text-left max-w-[900px] mx-auto tracking-wide md:tracking-tight"
          starting="top 80%"
          pin={false}
        />
      </div>
    </section>
  );
}
