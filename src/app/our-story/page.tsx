import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StoryHeroSection } from "@/components/sections/story/story-hero-section";
import { StoryIntroSection } from "@/components/sections/story/story-intro-section";
import { StoryValuesSection } from "@/components/sections/story/story-values-section";
import { StoryVideoSection } from "@/components/sections/story/story-video-section";
import { StoryQuoteSection } from "@/components/sections/story/story-quote-section";
import { StoryCardsSection } from "@/components/sections/story/story-cards-section";

export const metadata = {
  title: "Our Story - Arc & Bore",
  description: "We were born from a simple idea to create a space where precision, focus, and discipline converge.",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-onx-white flex flex-col">
      {/* 
        The hero section in the design is dark and the nav sits transparently on top of it.
      */}
      <Header dark absolute />
      
      <main className="flex-grow">
        <StoryHeroSection />
        <StoryIntroSection />
        <StoryValuesSection />
        <StoryVideoSection />
        <StoryQuoteSection />
        <StoryCardsSection />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
