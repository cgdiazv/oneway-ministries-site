"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { theme } from "@/styles/theme";
import { Heart } from "lucide-react";

export default function ThankYouPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check if the user arrived here immediately after submitting the form
    if (sessionStorage.getItem("formSubmitted") === "true") {
      setIsAuthorized(true);
    } else {
      router.replace("/contact");
    }
  }, [router]);

  if (!isAuthorized) return null; // Prevent UI from flashing before redirect

  return (
    <div style={{ padding: "120px 20px", minHeight: "80vh", backgroundColor: "#f9f9f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ 
        textAlign: "center", 
        maxWidth: "600px", 
        backgroundColor: "#fff", 
        padding: "60px 40px", 
        borderRadius: "12px", 
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)" 
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>
          <Heart size={64} color={theme.colors.primary} fill="rgba(10, 25, 47, 0.1)" strokeWidth={1.5} />
        </div>
        
        <h1 style={{ color: theme.colors.primary, fontSize: "3rem", marginBottom: "15px", fontWeight: 800 }}>
          Thank You!
        </h1>
        
        <p style={{ color: "#666", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "40px" }}>
          Your message has been successfully sent. We deeply appreciate your interest in getting involved with One Way Ministries. Our team will review your information and be in touch with you shortly.
        </p>
        
        <Link href="/" style={{
          display: "inline-block",
          backgroundColor: theme.colors.primary,
          color: "#fff",
          padding: "15px 35px",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "bold",
          textDecoration: "none"
        }}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}