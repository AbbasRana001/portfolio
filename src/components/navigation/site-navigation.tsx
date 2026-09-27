"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Button, ButtonLink } from "@/components/ui/button";
import { NavigationItems } from "@/components/navigation/navigation-items";
import { navigationCopy } from "@/content/navigation";
import { profile } from "@/content/profile";
import { useNavigationState } from "@/hooks/use-navigation-state";

function ResumeLink({ onNavigate }: { onNavigate?: () => void }) {
  return profile.resumeUrl ? (
    <ButtonLink href={profile.resumeUrl} variant="secondary" onClick={onNavigate}>{navigationCopy.resume}<span aria-hidden="true">↗</span></ButtonLink>
  ) : (
    <Button variant="secondary" disabled title={navigationCopy.resumeUnavailable} aria-label={navigationCopy.resumeUnavailable}>
      {navigationCopy.resume}<span aria-hidden="true">↗</span>
    </Button>
  );
}

export function SiteNavigation() {
  const router = useRouter();
  const { scrolled, activeHref, progress } = useNavigationState();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pendingHref = useRef<string | null>(null);

  function closeMenu() {
    dialogRef.current?.close();
  }

  function navigateFromMenu(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    pendingHref.current = event.currentTarget.getAttribute("href");
    closeMenu();
  }

  useEffect(() => {
    if (!open) {
      // Navigate after the previous effect restores body scrolling, so an anchor
      // jump cannot be overwritten by restoring the menu's original position.
      if (pendingHref.current) {
        router.push(pendingHref.current);
        pendingHref.current = null;
      }
      return;
    }
    // Fixed body preserves the exact scroll position, including on mobile Safari.
    const body = document.body;
    const y = window.scrollY;
    const saved = { position: body.style.position, top: body.style.top, width: body.style.width };
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";
    const desktop = matchMedia("(min-width: 70rem)");
    const onResize = () => { if (desktop.matches) closeMenu(); };
    desktop.addEventListener("change", onResize);
    return () => {
      Object.assign(body.style, saved);
      const html = document.documentElement;
      const behavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, y);
      html.style.scrollBehavior = behavior;
      desktop.removeEventListener("change", onResize);
    };
  }, [open, router]);

  return (
    <header className="site-header" data-site-header data-scrolled={scrolled || open}>
      <Container className="navigation-bar">
        <Link className="brand" href="/" aria-label={navigationCopy.home}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-label">{navigationCopy.brandLabel}</span>
        </Link>
        <nav className="desktop-navigation" aria-label={navigationCopy.label}>
          <NavigationItems activeHref={activeHref} />
          <ResumeLink />
        </nav>
        <button ref={triggerRef} type="button" className="menu-toggle" aria-label={navigationCopy.open}
          aria-expanded={open} aria-controls="mobile-navigation" aria-haspopup="dialog"
          onClick={() => { dialogRef.current?.showModal(); setOpen(true); }}>
          <span aria-hidden="true" className="menu-icon"><span /><span /></span>
        </button>
      </Container>
      <dialog ref={dialogRef} id="mobile-navigation" className="mobile-dialog" aria-labelledby="mobile-navigation-title"
        onClick={event => { if (event.target === event.currentTarget) closeMenu(); }}
        onClose={() => { setOpen(false); if (triggerRef.current?.getClientRects().length) triggerRef.current.focus(); }}>
        <div className="mobile-panel">
          <div className="mobile-menu-heading">
            <h2 id="mobile-navigation-title" className="eyebrow">{navigationCopy.menu}</h2>
            <Button variant="ghost" onClick={closeMenu} aria-label={navigationCopy.close}>
              <span aria-hidden="true">×</span>
            </Button>
          </div>
          <nav aria-label={navigationCopy.label}>
            <NavigationItems activeHref={activeHref} onNavigate={navigateFromMenu} />
            <ResumeLink onNavigate={closeMenu} />
          </nav>
          <p className="menu-note">{navigationCopy.note}</p>
        </div>
      </dialog>
      <span className="reading-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
