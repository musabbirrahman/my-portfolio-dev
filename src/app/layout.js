import "./globals.css";
import HorizonBar from "../components/atelier/HorizonBar";
import Dock from "../components/atelier/Dock";
import { Analytics } from "@vercel/analytics/next";

/* The Tactile Atelier — demo layout (2026-11-14, NOT shipped).
 * Daylight-first; the theme script below runs before paint so a
 * returning visitor never flashes the wrong theme. The old Navbar
 * and Footer stay in the repo, unused. */
export const metadata = {
  metadataBase: new URL("https://musabbirrahman.vercel.app"),
  title: "Musabbir Rahman — Independent Builder",
  description:
    "Independent builder from Jamalpur, Bangladesh. I design and engineer digital products from zero to live — fast, mobile-first web applications, verified on twelve viewports before they ship.",
  openGraph: {
    title: "Musabbir Rahman — Independent Builder",
    description:
      "Designing and engineering digital products from zero to live.",
    url: "https://musabbirrahman.vercel.app",
    siteName: "Musabbir Rahman",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Musabbir Rahman — Independent Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musabbir Rahman — Independent Builder",
    description: "Designing and engineering digital products from zero to live.",
    images: ["/og-image.jpg"],
  },
};

const THEME_INIT = `(function(){try{var t=localStorage.getItem('atelier-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <HorizonBar />
        {children}
        <Dock />
        <Analytics />
      </body>
    </html>
  );
}
