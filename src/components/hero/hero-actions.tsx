import { Button, ButtonLink } from "@/components/ui/button";
import { heroCopy } from "@/content/hero";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";

export function HeroActions() {
  const projectsDestination = navigation.find(item => item.href === "/#projects");
  const projectsAvailable = projectsDestination?.enabled === true;
  return (
    <div className="hero-actions">
      <div className="hero-action">
        {projectsAvailable ? (
          <ButtonLink href={projectsDestination.href} variant="primary">{heroCopy.projectsLabel}<span aria-hidden="true">↗</span></ButtonLink>
        ) : (
          <Button disabled aria-describedby="hero-projects-status">{heroCopy.projectsLabel}<span aria-hidden="true">↗</span></Button>
        )}
        {!projectsAvailable && <p id="hero-projects-status" className="hero-action-status">{heroCopy.projectsUnavailable}</p>}
      </div>
      {profile.resumeUrl && <div className="hero-action">
        <ButtonLink href={profile.resumeViewerUrl} variant="secondary"
          aria-label={`${heroCopy.resumeLabel} (opens the resume viewer)`}>{heroCopy.resumeLabel}<span aria-hidden="true">↗</span></ButtonLink>
      </div>}
    </div>
  );
}
