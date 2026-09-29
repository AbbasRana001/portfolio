import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/content/site";
import { bodyFont, codeFont, displayFont } from "@/lib/fonts";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { SectionCurrentState } from "@/components/layout/section-current-state";
import "./globals.css";

export const metadata: Metadata = {
  ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url) } : {}),
  title: { default: siteConfig.title, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: siteConfig.allowIndexing, follow: siteConfig.allowIndexing },
  ...(siteConfig.url ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    ...(siteConfig.url ? { url: siteConfig.url } : {}),
    ...(siteConfig.ogImage ? {
      images: [{
        url: siteConfig.ogImage.src,
        alt: siteConfig.ogImage.alt,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
      }],
    } : {}),
  },
  twitter: {
    card: siteConfig.ogImage ? "summary_large_image" : "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.ogImage ? { images: [siteConfig.ogImage.src] } : {}),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.language}>
      <body className={`${bodyFont.variable} ${displayFont.variable} ${codeFont.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteNavigation />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SectionCurrentState />
      </body>
    </html>
  );
}
