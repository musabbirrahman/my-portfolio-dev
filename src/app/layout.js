import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // <-- Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musabbir Rahman | Frontend Developer",
  description: "Portfolio of a React & Next.js Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark"> {/* You can change "dark" to "synthwave" or "dracula" later! */}
      <body className={inter.className}>
        <Navbar /> {/* <-- Add the Navbar component here */}
        {children}
      </body>
    </html>
  );
}