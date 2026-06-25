import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FaqHeroSection } from "@/components/sections/faq/faq-hero-section";
import { FaqContentSection } from "@/components/sections/faq/faq-content-section";
import { ContactMarqueeSection } from "@/components/sections/shared/contact-marquee-section";

export const metadata = {
  title: "FAQ - Arc & Bore",
  description: "Find answers to the most common questions about our products, orders, and services.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-onx-white flex flex-col">
      <Header dark absolute />
      
      <main className="flex-grow">
        <FaqHeroSection />
        <FaqContentSection />
        <ContactMarqueeSection />
      </main>

      <Footer />
    </div>
  );
}
