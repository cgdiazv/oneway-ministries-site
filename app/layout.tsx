import type { Metadata } from "next";
// 1. Swap Geist for Inter
import { Inter, Figtree } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

// 2. Configure Inter
const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "One Way Ministries | Colombia",
  description: "Restoring hope in Colombia through faith and action.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 3. Apply the Inter variable to the HTML tag
    <html lang="en" className={cn("font-sans", figtree.variable)} style={{ height: '100%' }}>
      <body style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}