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
  alternates: {
    canonical: "/",
  },
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
  verification: {
    google: "6qH9hGA-wv_kVEyP7m2ifDrqVuPZnPQIijTq6CS5U1w",
  },
};

/* Person structured data (2026-11-26, Google visibility plan Step 1):
 * tells search engines this site IS Musabbir Rahman and ties it to
 * his profiles. Same links as GolpoNeer's founder sameAs, minus the
 * portfolio itself. Pattern follows the installed Next 16 JSON-LD guide. */
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Musabbir Rahman",
  url: "https://musabbirrahman.vercel.app/",
  jobTitle: "Independent Builder",
  description:
    "Independent builder from Jamalpur, Bangladesh. Founder of GolpoNeer — a calm, free home for Bangla and English stories.",
  sameAs: [
    "https://github.com/musabbirrahman",
    "https://www.linkedin.com/in/musabbirrahman",
    "https://musabbirrahman.medium.com",
    "https://x.com/MusabbirRahman0",
    "https://www.facebook.com/dev.musabbirrahman",
  ],
  affiliation: {
    "@type": "Organization",
    name: "GolpoNeer",
    url: "https://golponeer.com",
  },
  knowsAbout: ["GolpoNeer", "React", "Next.js", "Supabase", "TypeScript"],
};

const THEME_INIT = `(function(){try{var t=localStorage.getItem('atelier-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PERSON_JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
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
