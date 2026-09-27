"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/navigation";

/** Observe existing, enabled sections only. */
export function useNavigationState() {
  const pathname = usePathname();
  const [state, setState] = useState({ scrolled: false, activeHref: "", progress: 0 });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      // Match the CSS anchor offset, including its gap below the sticky header.
      const boundary = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 1;
      const atPageEnd = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      let activeHref = "";
      if (pathname === "/") {
        for (const item of navigation) {
          const section = item.enabled ? document.getElementById(item.href.split("#")[1]) : null;
          if (!section) continue;
          const rect = section.getBoundingClientRect();
          // A short final section may never reach the sticky-header boundary.
          if (rect.bottom > boundary && (rect.top <= boundary || (atPageEnd && rect.top < window.innerHeight))) {
            activeHref = item.href;
          }
        }
      }
      const scrolled = window.scrollY > 8;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      setState(previous => previous.scrolled === scrolled && previous.activeHref === activeHref && previous.progress === progress
        ? previous : { scrolled, activeHref, progress });
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [pathname]);

  return state;
}
