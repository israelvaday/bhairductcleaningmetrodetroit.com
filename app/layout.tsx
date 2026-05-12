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
    default: `${BIZ.name} — Orange County Locksmith (BSIS #${BIZ.bsis})`,
    template: `%s — ${BIZ.name}`,
  },
  description:
    "Licensed Orange County locksmith. Residential, commercial, automotive, smart locks, access control, safes. Free quote — call 714-757-7574. BSIS #8663.",
  keywords: [
    "locksmith Orange County", "locksmith Santa Ana", "locksmith Irvine",
    "rekey locks", "smart lock install", "auto locksmith", "BSIS 8663",
  ],
  openGraph: {
    type: "website",
    siteName: BIZ.name,
    url: BIZ.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BIZ.name} — Orange County Locksmith`,
    description: "Licensed OC locksmith. 24/7 dispatch. BSIS #8663.",
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
