import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/home/hero-section";
import { ProductsCardsSection } from "@/components/sections/home/products-cards-section";
import { ShopShowcaseSection } from "@/components/sections/home/shop-showcase-section";
import { SteadyAimSection } from "@/components/sections/home/steady-aim-section";
import { CategoryLinksSection } from "@/components/sections/home/category-links-section";
import { FullwidthImageSection } from "@/components/sections/home/fullwidth-image-section";
import { ArenaSplitSection } from "@/components/sections/home/arena-split-section";
import { AboutUsHomeSection } from "@/components/sections/home/aboutus-home";
import { TestimonialSection } from "@/components/sections/shared/testimonial-section";
import { TextFocusSection } from "@/components/sections/shared/text-focus-section";
import { UnleashPowerSection } from "@/components/sections/home/unleash-power-section";
import { homePageData } from "@/data/home-page";

import { TopBanner } from "@/components/layout/top-banner";

export default function HomePage() {
  const { categories, testimonial } = homePageData;

  return (
    <div className="bg-onx-white min-h-screen">
      {/* <TopBanner /> */}
      <main>
        {/* 1. Hero — Red/White layout with striped image masks */}
        <HeroSection />

        {/* 2. Three Vertical Cards */}
        <ProductsCardsSection />

        {/* 3. Shop showcase — Massive "LET'S SHOP" typo */}
        <ShopShowcaseSection />

        {/* 4. Steady aim — Solid red background section */}
        <SteadyAimSection />

        {/* 5. Category links — Centered with inline images */}
        <CategoryLinksSection categories={categories} />

        {/* 6. Full-width interstitial — dark cinematic barrel shot */}
        <FullwidthImageSection src="/images/pistolbanner.png" alt="Dark cinematic gun barrel" aspectRatio="16/9" className="grayscale" imageClassName="object-[50%_40%]" />

        {/* 7. Arena Split Section (Image left, Card right) */}
        <ArenaSplitSection />

        {/* 8. About Us */}
        <AboutUsHomeSection />

        {/* 9. Testimonial Section (Text left, Card right) */}
        <TestimonialSection testimonial={testimonial} />

        {/* 10. Text Focus Section */}
        <TextFocusSection />

        {/* 10. Unleash the power — Massive product image, 4 detail shots, typography */}
        <UnleashPowerSection />
      </main>

    </div>
  );
}
