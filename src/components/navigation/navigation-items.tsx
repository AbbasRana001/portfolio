import Link from "next/link";
import type { MouseEventHandler } from "react";
import { navigation, navigationCopy } from "@/content/navigation";

export function NavigationItems({ activeHref, onNavigate }: { activeHref: string; onNavigate?: MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <ul className="navigation-list">
      {navigation.map(item => (
        <li key={item.href}>
          {item.enabled ? (
            <Link className="navigation-link" href={item.href} onClick={onNavigate}
              aria-current={activeHref === item.href ? "location" : undefined}>
              {item.label}
            </Link>
          ) : (
            <span className="navigation-link" role="link" aria-disabled="true" title={navigationCopy.unavailable}>
              {item.label}<span className="sr-only"> — {navigationCopy.unavailable}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
