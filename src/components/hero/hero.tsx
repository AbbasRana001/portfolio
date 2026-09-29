import { Section } from "@/components/layout/section";
import { HeroContent } from "@/components/hero/hero-content";
import { DataStudy } from "@/components/visualizations/data-study";
import "./hero.css";

export function Hero() {
  return (
    <Section id="introduction" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <HeroContent />
        <DataStudy />
      </div>
    </Section>
  );
}
