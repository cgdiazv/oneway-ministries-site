import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar"; // Import the wrapper
import Footer from "@/components/Footer";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "One Way Ministries | Colombia",
  description: "Restoring hope in Colombia through faith and action.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable} style={{ height: '100%' }}>
      <body style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* This will now hide itself automatically on the Homepage */}
        <ConditionalNavbar /> 
        
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}