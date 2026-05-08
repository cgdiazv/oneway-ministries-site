import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";

export default function Home() {
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

      <header style={styles.integratedNavbar}>
        <div style={styles.navContainer}>
          
          {/* --- The Navy Logo Box --- */}
          <div style={styles.logoBox}>
            <a href="/" style={styles.logoLink}>
              <Image 
                src="/logo.webp" 
                alt="One Way Ministries Logo" 
                width={140} 
                height={40}
                priority
              />
            </a>
          </div>
          
          <nav style={styles.navLinksGroup}>
            {menuItems.map((item) => (
              <a key={item.name} href={item.link} style={styles.navLink}>
                {item.name}
              </a>
            ))}
          </nav>

          {/* --- Updated Navy Donate Button --- */}
          <a href="/donate" className="donate-btn-hover" style={styles.donateAction}>
            Donate
          </a>
        </div>
      </header>

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
    top: 0, left: 0, width: "100%", height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    zIndex: 1,
  },
  integratedNavbar: {
    position: "relative" as const,
    width: "100%",
    zIndex: 20,
    padding: 0, // Removed top padding so the logo box hits the edge
  },
  navContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    alignItems: "flex-start", // Aligns logo box to the very top
  },
  logoBox: {
    backgroundColor: theme.colors.primary,
    padding: "1.5rem 2rem 2rem 2rem", // Padding inside the navy box
    borderRadius: "0 0 15px 15px", // Rounded bottom only
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  navLinksGroup: {
    display: "flex",
    gap: "1.8rem",
    paddingTop: "2.5rem", // Keeps links centered relative to the tall logo box
  },
  navLink: {
    color: theme.colors.text.inverse,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "0.85rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
  donateAction: {
    backgroundColor: theme.colors.primary, // Changed to Navy
    color: theme.colors.text.inverse,      // White text
    padding: "12px 28px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.85rem",
    textTransform: "uppercase" as const,
    marginTop: "2rem", // Aligns button vertically
    border: `1px solid ${theme.colors.text.inverse}`, // Optional subtle border
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
  },
  buttonGroup: { display: "flex", gap: "1.5rem", justifyContent: "center" },
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