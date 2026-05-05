import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musabbir Rahman | Frontend Software Engineer",
  description: "Portfolio of Musabbir Rahman. Specializing in high-performance web applications, React, Next.js, and modern frontend architecture.",
  keywords: ["Frontend Engineer", "React Developer", "Next.js", "Web Development", "Software Engineer"],
  authors: [{ name: "Musabbir Rahman" }],
  openGraph: {
    title: "Musabbir Rahman | Frontend Software Engineer",
    description: "Building exceptional, high-performance web applications. Explore my case studies and system architecture.",
    url: "https://your-future-domain.com", 
    siteName: "Musabbir Rahman Portfolio",
    images: [
      {
        // We will add a real image later, but this sets up the architecture
        url: "/og-preview.jpg", 
        width: 1200,
        height: 630,
        alt: "Musabbir Rahman - Frontend Engineer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musabbir Rahman | Frontend Software Engineer",
    description: "Building exceptional, high-performance web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}