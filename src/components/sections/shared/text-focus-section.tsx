import { Container } from "@/components/ui/container";

export function TextFocusSection() {
  return (
    <section className="bg-onx-white py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[900px] text-center flex flex-col items-center">

          <div className="mb-8 text-center">
            <span className="text-xs md:text-xs font-normal uppercase tracking-wide text-onx-near-black ">
              <span className="inline-block w-2 h-2 bg-onx-near-black mr-2 -translate-y-[1px] align-middle"></span>
              BUILT FOR STABILITY, CONTROL, AND ABSOLUTE ACCURACY WHEN IT MATTERS MOST.
            </span>
          </div>

          <h2 className="text-[38px] sm:text-[40px] md:text-[42px] lg:text-[56px] font-normal uppercase leading-tight tracking-tight text-onx-near-black mb-12">
            OWN THE TARGET CONTROL EVERY SHOT
          </h2>

          <p className="text-xs md:text-xs font-normal uppercase tracking-normal text-onx-black leading-wide max-w-[650px] font-montserrat">
            BUILT FOR THOSE WHO DEMAND ABSOLUTE CONTROL, RIFLE SHOOTING AT ONX IS WHERE FOCUS MEETS PRECISION—EVERY BREATH MEASURED, EVERY MOVEMENT STEADY, AND EVERY SHOT DELIVERED WITH INTENT. IT'S NOT JUST ABOUT HITTING THE TARGET, IT'S ABOUT MASTERING THE MOMENT AND OWNING EVERY SINGLE SHOT.
          </p>

        </div>
      </Container>
    </section>
  );
}
