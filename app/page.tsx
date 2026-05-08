import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";

export default function Home() {
  // 1. Updated Menu List
  const menuItems = [
    { name: "About Us", link: "/about" },
    { name: "Our Mission", link: "/mission" },
    { name: "Get Involved", link: "/get-involved" },
    { name: "Impact", link: "/impact" },
    { name: "News", link: "/news" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <div style={styles.heroSection}>
      <div style={styles.heroOverlay}></div>

      {/* --- Updated Transparent Navbar --- */}
      <header style={styles.integratedNavbar}>
        <div style={styles.navContainer}>
          <a href="/" style={styles.logoLink}>
            <Image 
              src="/logo.webp" 
              alt="One Way Ministries Logo" 
              width={160} 
              height={50}
              priority
            />
          </a>
          
          <nav style={styles.navLinksGroup}>
            {menuItems.map((item) => (
              <a key={item.name} href={item.link} style={styles.navLink}>
                {item.name}
              </a>
            ))}
          </nav>

          <a href="/donate" style={styles.donateAction}>Donate</a>
        </div>
      </header>

      {/* --- Hero Content --- */}
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
    backgroundColor: theme.colors.primary,
    backgroundImage: "url(/header.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    width: "100%",
    position: "relative" as const,
  },
  heroOverlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)", // Balanced overlay
    zIndex: 1,
  },
  integratedNavbar: {
    position: "relative" as const,
    width: "100%",
    zIndex: 20,
    padding: "1.5rem 0",
  },
  navContainer: {
    maxWidth: "1400px", // Widened slightly to accommodate more links
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  navLinksGroup: {
    display: "flex",
    gap: "1.8rem", // Tightened slightly to fit all 6 items
  },
  navLink: {
    color: theme.colors.text.inverse,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "0.85rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    transition: "opacity 0.2s",
  },
  donateAction: {
    backgroundColor: theme.colors.text.inverse,
    color: theme.colors.primary,
    padding: "10px 24px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.85rem",
    textTransform: "uppercase" as const,
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  container: {
    maxWidth: "950px",
    padding: "0 2rem",
    position: "relative" as const,
    zIndex: 10,
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-50px", // Optical centering
  },
  headline: {
    color: theme.colors.text.inverse,
    fontSize: "4.2rem",
    fontWeight: 800,
    marginBottom: "1.5rem",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
  },
  subtext: {
    color: theme.colors.text.inverse,
    fontSize: "1.3rem",
    lineHeight: "1.6",
    marginBottom: "3rem",
    maxWidth: "780px",
    opacity: 0.95,
    fontWeight: 300,
  },
  buttonGroup: {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
  },
  primaryOutlineButton: {
    color: theme.colors.text.inverse,
    border: `2px solid ${theme.colors.text.inverse}`,
    backgroundColor: "transparent",
    padding: "14px 32px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.95rem",
    textTransform: "uppercase" as const,
  },
  accentOutlineButton: {
    color: theme.colors.text.inverse,
    backgroundColor: "transparent",
    border: `2px solid ${theme.colors.accent}`,
    padding: "14px 32px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.95rem",
    textTransform: "uppercase" as const,
  }
};