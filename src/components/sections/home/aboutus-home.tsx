import { Container } from "@/components/ui/container";
import type { Testimonial } from "@/data/types";
import { TextReveal } from "@/components/ui/text-reveal";

export function AboutUsHomeSection() {
  return (
    <section id="about-us" className="bg-onx-white py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[500px] text-center">

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 bg-onx-near-black"></div>
            <span className="text-[12px] uppercase font-bold tracking-[0.3em] text-onx-near-black">
              About Us
            </span>
          </div>
            <p className="text-[28px] sm:text-[36px] md:text-[20px] font-normal leading-[1.2] text-onx-near-black tracking-tight">
              Quote from our customer
            </p>

          <div className="mt-10">
            <TextReveal 
              text="The leaque spoke. ONX listened."
              className="text-5xl tracking-wider leading-tight font-medium text-onx-near-black"
            />
          </div>
          <button className="mt-10 bg-onx-white border border-onx-near-black text-onx-black px-10 py-4 text-sm uppercase font-bold tracking-[0.15em] hover:bg-onx-black hover:text-white transition-colors shadow-sm">
            Learn More
          </button>
        </div>
      </Container>
    </section>
  );
}
