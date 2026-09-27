import { Badge } from "@/components/ui/badge";
import { HeroActions } from "@/components/hero/hero-actions";
import { HeroSocials } from "@/components/hero/hero-socials";
import { heroCopy } from "@/content/hero";
import { profile } from "@/content/profile";

export function HeroContent() {
  return (
    <div className="hero-content">
      <p className="eyebrow">{heroCopy.sectionLabel}</p>
      <p className="hero-identity">{profile.name}</p>
      <p className="hero-field">{profile.eyebrow}</p>
      <h1 id="hero-title" className="type-display hero-title">{profile.headline}</h1>
      <p className="section-description hero-description">{profile.shortBio}</p>
      <HeroActions />
      <HeroSocials />
      {profile.heroIsPlaceholder && <Badge className="hero-placeholder">{heroCopy.placeholderLabel}</Badge>}
    </div>
  );
}
