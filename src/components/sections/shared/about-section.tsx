import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  eyebrow: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function AboutSection({ eyebrow, headline, description, ctaLabel, ctaHref }: AboutSectionProps) {
  return (
    <section className="bg-onx-black py-24">
      <Container>
        <div className="mx-auto max-w-[576px] text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-onx-red" />
            <span className="text-label uppercase tracking-wider text-onx-white/60">
              {eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-8 whitespace-pre-line text-heading-lg uppercase leading-[1.1] text-onx-white">
            {headline}
          </h2>

          {/* Description */}
          <p className="mt-8 text-body-sm text-onx-white/70 leading-[1.375]">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Button variant="link" href={ctaHref} className="text-body-sm uppercase">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
