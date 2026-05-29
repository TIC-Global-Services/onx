import { Truck, MapPin, Percent } from "lucide-react";
import { Container } from "@/components/ui/container";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Truck,
  MapPin,
  Percent,
};

interface Feature {
  icon: string;
  label: string;
}

interface FeaturesBarSectionProps {
  features: Feature[];
}

export function FeaturesBarSection({ features }: FeaturesBarSectionProps) {
  return (
    <section className="border-t border-onx-dark-gray bg-onx-black py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-[103px]">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-2"
              >
                {IconComponent && (
                  <span className="text-onx-white/60">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </span>
                )}
                <span className="text-xs uppercase tracking-wider text-onx-white/60">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
