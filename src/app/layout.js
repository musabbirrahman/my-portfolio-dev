import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://musabbirrahman.vercel.app'), // Tells Next.js the root domain
  title: 'Musabbir Rahman | Frontend Software Engineer',
  description: 'Portfolio of Musabbir Rahman, Frontend Software Engineer specialized in React and Next.js.',
  openGraph: {
    title: 'Musabbir Rahman | Frontend Software Engineer',
    description: 'Building highly performant, scalable, and responsive web architecture. Specialized in Next.js and continuous shipping.',
    url: 'https://musabbirrahman.vercel.app',
    siteName: 'Musabbir Rahman Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Points to the image you just added to the public folder
        width: 1200,
        height: 630,
        alt: 'Musabbir Rahman - Frontend Software Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musabbir Rahman | Frontend Software Engineer',
    description: 'Building highly performant, scalable, and responsive web architecture.',
    images: ['/og-image.jpg'], // Triggers the large image preview on Twitter/X
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}