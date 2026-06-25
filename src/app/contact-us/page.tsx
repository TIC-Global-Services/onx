import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { ContactInfoSection } from "@/components/sections/contact/contact-info-section";
import { ContactMarqueeSection } from "@/components/sections/shared/contact-marquee-section";

export const metadata = {
  title: "Contact Us - Arc & Bore",
  description: "For bookings, enquiries, or just to take your first shot get in touch with our team.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-onx-white flex flex-col">
      {/* 
        The hero section in the design is dark and the nav sits transparently on top of it.
      */}
      <Header dark absolute />
      
      <main className="flex-grow">
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactMarqueeSection />
      </main>

      <Footer />
    </div>
  );
}
