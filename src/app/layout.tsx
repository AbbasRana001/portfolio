import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/content/site";
import { bodyFont, codeFont, displayFont } from "@/lib/fonts";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: siteConfig.allowIndexing, follow: siteConfig.allowIndexing },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.language}>
      <body className={`${bodyFont.variable} ${displayFont.variable} ${codeFont.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteNavigation />
        <main id="main-content" tabIndex={-1}>{children}</main>
      </body>
    </html>
  );
}
