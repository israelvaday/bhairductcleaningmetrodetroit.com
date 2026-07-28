import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { BIZ } from "@/lib/business";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileDock } from "@/components/site/MobileDock";
import { LazyScrollProgress } from "@/components/site/LazyScrollFx";
import { localBusinessJsonLd } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "optional", adjustFontFallback: true });
// Jakarta = display-font for headlines (LCP target). Use "optional" so the
// fallback paint is locked-in for the LCP — eliminates the font-swap repaint
// that was pushing mobile LCP to ~2.9s. Jakarta still loads in the background
// and applies on subsequent page views from cache.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "optional", adjustFontFallback: true });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "optional", adjustFontFallback: true });

export const metadata: Metadata = {
  metadataBase: new URL(BIZ.url),
  title: {
    default: `${BIZ.name} — Garage Door Installation & Repair (${BIZ.bsis})`,
    template: `%s — ${BIZ.name}`,
  },
  description:
    `Metro Detroit garage door installation & repair. Broken springs, openers, cables, panels, new doors, commercial overhead doors. Free quote — call ${BIZ.phone}. ${BIZ.bsis}.`,
  keywords: [
    "garage door repair Metro Detroit", "garage door installation Detroit", "garage door repair Warren",
    "broken garage door spring", "garage door opener install", "commercial overhead door", "garage door company Michigan",
  ],
  openGraph: {
    type: "website",
    siteName: BIZ.name,
    url: BIZ.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BIZ.name} — Garage Door Installation & Repair`,
    description: `Metro Detroit garage door installation & repair. ${BIZ.bsis}.`,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0E12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}>
      <body className="font-sans bg-ink-950 text-ink-50 antialiased">
        <LazyScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileDock />
        <Toaster position="top-center" theme="dark" richColors />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
