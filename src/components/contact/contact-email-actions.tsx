"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";

type CopyStatus = "idle" | "copied" | "error";

function copyWithSelection(value: string): boolean {
  const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);

  try {
    field.select();
    return document.execCommand("copy");
  } finally {
    field.remove();
    previouslyFocused?.focus({ preventScroll: true });
  }
}

export function ContactEmailActions({ email }: { email: string }) {
  const mailtoUrl = `mailto:${email}`;
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mailtoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    if (mailtoTimer.current) clearTimeout(mailtoTimer.current);
  }, []);

  async function handleCopy() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setStatus("idle");

    let copied = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch {
        // Browser permission can fail even when the Clipboard API exists.
      }
    }

    if (!copied) {
      try {
        copied = copyWithSelection(email);
      } catch {
        copied = false;
      }
    }

    flushSync(() => setStatus(copied ? "copied" : "error"));
    resetTimer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  function handleEmailClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    if (mailtoTimer.current) clearTimeout(mailtoTimer.current);

    const scheduleMailto = () => {
      mailtoTimer.current = setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 120);
    };

    void handleCopy().then(scheduleMailto, scheduleMailto);
  }

  const label = status === "copied" ? "Copied" : status === "error" ? "Failed" : "Copy";

  return <>
    <a href={mailtoUrl} onClick={handleEmailClick}>{email}<span aria-hidden="true">→</span></a>
    <button type="button" className="contact-copy-email" onClick={() => { void handleCopy(); }}
      aria-label={status === "copied" ? "Email address copied" : status === "error" ? "Could not copy email address; try again" : "Copy email address"}>
      {label}
    </button>
    <span className="sr-only" role="status">{status === "copied" ? "Email address copied" : status === "error" ? "Could not copy email address. Try again." : ""}</span>
  </>;
}
