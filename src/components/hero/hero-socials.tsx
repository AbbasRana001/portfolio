import { profile } from "@/content/profile";
import { heroCopy } from "@/content/hero";

export function HeroSocials() {
  const links = profile.socialLinks.filter(link => link.url.trim() && link.showInHero !== false);
  const email = profile.showEmailInHero ? profile.email?.trim() : undefined;
  if (!links.length && !email) return null;

  return (
    <nav aria-label={heroCopy.socialsLabel} className="hero-socials">
      <ul>
        {links.map(link => (
          <li key={link.url}><a href={link.url}>{link.label}<span aria-hidden="true">↗</span></a></li>
        ))}
        {email && <li><a href={`mailto:${email}`}>{heroCopy.emailLabel}<span aria-hidden="true">↗</span></a></li>}
      </ul>
    </nav>
  );
}
