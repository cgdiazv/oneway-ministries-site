import React from "react";
import Image from "next/image"; // Add this for optimized images
import { theme } from "@/styles/theme";

export default function Home() {
  return (
    <div style={styles.heroSection}>
      {/* 1. Add Background Image Overlay */}
      <div style={styles.heroOverlay}></div>

      {/* 2. Mimic the integrated header/navbar experience from the reference */}
      <header style={styles.integratedNavbar}>
        <div style={styles.navContainer}>
          <a href="/" style={styles.logoLink}>
            <Image 
              src="/logo.webp" // Use the provided asset
              alt="One Way Ministries Logo" 
              width={160} // Adjust based on your logo aspect ratio
              height={50}
              priority
            />
          </a>
          <nav style={styles.navLinksGroup}>
            <a href="/news" style={styles.navLink}>News</a>
            <a href="/ministries" style={styles.navLink}>Ministries</a>
            <a href="/events" style={styles.navLink}>Events</a>
            <a href="/contact" style={styles.navLink}>Contact</a>
          </nav>
          <a href="/donate" style={styles.donateAction}>Donate</a>
        </div>
      </header>

      {/* 3. Original Page Content (Updated with inverse colors for readability on dark background) */}
      <div style={styles.container}>
        <h1 style={styles.headline}>
          Restoring Hope in Colombia:<br/>One Life at a Time
        </h1>
        <p style={styles.subtext}>
          Partner with One Way Ministries to empower communities, support our<br/>
          local hubs like Casa del Rey and Morada de Gracia, and make a lasting impact.
        </p>
        <div style={styles.buttonGroup}>
          <a href="/about" style={styles.primaryOutlineButton}>Learn More</a>
          <a href="/donate" style={styles.accentOutlineButton}>Partner With Us</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroSection: {
    backgroundColor: theme.colors.primary, // Backup color
    backgroundImage: "url(/header.webp)", // Add background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh", // Full viewport height like reference
    width: "100%",
    position: "relative" as const, // For positioning overlays
  },
  heroOverlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for text contrast like image_10.png
    zIndex: 1,
  },
  container: {
    maxWidth: "900px",
    padding: "0 2rem",
    position: "relative" as const, // Standard stack for overlay
    zIndex: 10,
    flex: 1, // Push integrated navbar to top and center text vertically
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  integratedNavbar: {
    position: "relative" as const, // Integrated into the hero div
    width: "100%",
    zIndex: 20, // Sit on top of overlay
    padding: "1.5rem 0",
  },
  navContainer: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  navLinksGroup: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    color: theme.colors.text.inverse, // Inverse text for contrast like reference
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.9rem",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
  },
  donateAction: {
    backgroundColor: theme.colors.text.inverse, // White donate button like image_10.png
    color: theme.colors.primary,
    padding: "10px 20px",
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.9rem",
    textTransform: "uppercase" as const,
  },
  headline: {
    color: theme.colors.text.inverse, // Match reference inverse text
    fontSize: "4rem", // Increase size to match image_10.png impact
    fontWeight: 800,
    marginBottom: "1.5rem",
    lineHeight: "1.1",
    letterSpacing: "-1px",
  },
  subtext: {
    color: theme.colors.text.inverse, // Match reference inverse text (often with reduced opacity)
    fontSize: "1.25rem",
    lineHeight: "1.7",
    marginBottom: "3rem",
    maxWidth: "750px",
    opacity: 0.9,
  },
  buttonGroup: {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
  },
  primaryOutlineButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: theme.colors.text.inverse,
    border: `2px solid ${theme.colors.text.inverse}`, // Update to ghost button style
    backgroundColor: "transparent",
    padding: "12px 28px",
    borderRadius: "30px", // Rounded pills like reference
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    textTransform: "uppercase" as const,
    transition: "background-color 0.2s ease-in-out",
  },
  accentOutlineButton: {
    color: theme.colors.text.inverse,
    backgroundColor: "transparent",
    border: `2px solid ${theme.colors.accent}`, // Use existing accent color concept
    padding: "12px 28px",
    borderRadius: "30px", // Rounded pills like reference
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    textTransform: "uppercase" as const,
    transition: "background-color 0.2s ease-in-out",
  }
};