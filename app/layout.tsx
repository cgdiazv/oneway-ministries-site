import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// --- 1. Import your Navigation and Footer components ---
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- 2. Update Metadata for Robert & the Ministry ---
export const metadata: Metadata = {
  title: "One Way Ministries | Colombia",
  description: "Restoring hope and empowering communities in Colombia through faith and action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* --- 3. Place Navbar here so it shows at the top of every page --- */}
        <Navbar />
        
        {/* Main wraps the content so it pushes the footer down */}
        <main className="flex-grow">
          {children}
        </main>

        {/* --- 4. Place Footer here so it anchors to the bottom --- */}
        <Footer />
      </body>
    </html>
  );
}