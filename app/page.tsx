import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Church, Users, Heart, ArrowRight } from "lucide-react"; // Icons for the new section

export default function Home() {
  const menuItems = [
    { name: "About Us", link: "/about" },
    { name: "Our Mission", link: "/mission" },
    { name: "Get Involved", link: "/get-involved" },
    { name: "Impact", link: "/impact" },
    { name: "News", link: "/news" },
    { name: "Contact Us", link: "/contact" },
  ];

  const features = [
    {
      icon: <Church size={32} strokeWidth={1.5} />,
      title: "WORSHIP",
      text: "When we speak of 'worship,' we are referring to the life of our congregation: attending worship services, creating music, honoring life.",
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: "CONNECT",
      text: "Church life means faith, relationship, discipline, service, responsibilities of church leaders and members, and much more.",
    },
    {
      icon: <Heart size={32} strokeWidth={1.5} />,
      title: "GOD'S LOVE",
      text: "Love is a key attribute in Christianity. The love of God is a prevalent concept both in the Old Testament and the New Testament.",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <header style={styles.integratedNavbar}>
          <div style={styles.navContainer}>
            <div style={styles.logoBox}>
              <a href="/" style={styles.logoLink}>
                <Image src="/logo.webp" alt="Logo" width={140} height={40} priority />
              </a>
            </div>
            <nav style={styles.navLinksGroup}>
              {menuItems.map((item) => (
                <a key={item.name} href={item.link} style={styles.navLink}>{item.name}</a>
              ))}
            </nav>
            <a href="/donate" className="donate-btn-hover" style={styles.donateAction}>Donate</a>
          </div>
        </header>

        <div style={styles.container}>
          <h1 style={styles.headline}>Sharing Hope in Colombia:<br/>One Life at a Time</h1>
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

      {/* --- NEW: WHO WE ARE SECTION --- */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutGrid}>
          
          {/* Left Column: Text Content */}
          <div style={styles.textContent}>
            <span style={styles.smallLabel}>WHO WE ARE</span>
            <h2 style={styles.sectionHeading}>A Ministry Rooted in Faith and Service</h2>
            <p style={styles.sectionDesc}>
              We are a church community dedicated to living out the teachings of Christianity through love, humility, and service. 
              Our foundation is built on timeless spiritual values that guide us in supporting one another and reaching out to those in need.
            </p>

            <div style={styles.featuresList}>
              {features.map((f, i) => (
                <div key={i} style={styles.featureItem}>
                  <div style={styles.featureIcon}>{f.icon}</div>
                  <div style={styles.featureText}>
                    <h4 style={styles.featureTitle}>{f.title}</h4>
                    <p style={styles.featureDesc}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/about" style={styles.learnMoreBtn}>
              LEARN MORE <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>

          {/* Right Column: Image with Floating Box */}
          <div style={styles.imageContainer}>
             {/* Replace with your actual image asset */}
            <Image 
              src="/missionaries.webp" 
              alt="Community Worship" 
              fill 
              style={{ objectFit: 'cover', borderRadius: '8px' }} 
            />
            <div style={styles.floatingBox}>
              <p style={styles.floatingText}>
                We believe that faith is not only something to be practiced, but something to be lived daily, through acts of kindness, generosity, and understanding.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

const styles = {
  // ... Keep existing heroSection, heroOverlay, etc. from your previous code ...
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
  integratedNavbar: { position: "relative" as const, width: "100%", zIndex: 20, padding: 0 },
  navContainer: {
    maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between",
    padding: "0 3rem", alignItems: "flex-start" as const,
  },
  logoBox: {
    backgroundColor: theme.colors.primary,
    padding: "1.5rem 2rem 2rem 2rem",
    borderRadius: "0 0 15px 15px",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  logoLink: { display: "flex", alignItems: "center", textDecoration: "none" },
  navLinksGroup: { display: "flex", gap: "1.8rem", paddingTop: "2.5rem" },
  navLink: { color: theme.colors.text.inverse, textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase" as const },
  donateAction: {
    backgroundColor: theme.colors.primary, color: theme.colors.text.inverse,
    padding: "12px 28px", borderRadius: "25px", textDecoration: "none",
    fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase" as const, marginTop: "2rem",
  },
  container: {
    maxWidth: "950px", padding: "0 2rem", position: "relative" as const, zIndex: 10,
    flex: 1, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center",
  },
  headline: { color: theme.colors.text.inverse, fontSize: "4.2rem", fontWeight: 800, marginBottom: "1.5rem", lineHeight: "1.1" },
  subtext: { color: theme.colors.text.inverse, fontSize: "1.3rem", lineHeight: "1.6", marginBottom: "3rem", maxWidth: "780px", opacity: 0.95 },
  buttonGroup: { display: "flex", gap: "1.5rem", justifyContent: "center" },
  primaryOutlineButton: { color: theme.colors.text.inverse, border: `2px solid ${theme.colors.text.inverse}`, padding: "14px 32px", borderRadius: "30px", textDecoration: "none", fontWeight: "bold" },
  accentOutlineButton: { color: theme.colors.text.inverse, border: `2px solid ${theme.colors.accent}`, padding: "14px 32px", borderRadius: "30px", textDecoration: "none", fontWeight: "bold" },

  // --- NEW STYLES FOR ABOUT SECTION ---
  aboutSection: {
    padding: "100px 20px",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
  },
  aboutGrid: {
    maxWidth: "1200px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "60px",
    alignItems: "center",
  },
  textContent: {
    textAlign: "left" as const,
  },
  smallLabel: {
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "2px",
    color: "#888",
    display: "block",
    marginBottom: "15px",
  },
  sectionHeading: {
    fontSize: "2.8rem",
    fontWeight: 800,
    color: theme.colors.primary,
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  sectionDesc: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#555",
    marginBottom: "40px",
    borderBottom: "1px solid #eee",
    paddingBottom: "30px",
  },
  featuresList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "30px",
    marginBottom: "50px",
  },
  featureItem: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },
  featureIcon: {
    color: theme.colors.primary,
    paddingTop: "5px",
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "1px",
    marginBottom: "8px",
    color: theme.colors.primary,
  },
  featureDesc: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#666",
  },
  learnMoreBtn: {
    backgroundColor: "#4a5d58", // Muted green/gray from sample
    color: "#fff",
    padding: "15px 35px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.85rem",
    display: "inline-flex",
    alignItems: "center",
    transition: "background 0.3s",
  },
  imageContainer: {
    position: "relative" as const,
    height: "700px",
    width: "100%",
  },
  floatingBox: {
    position: "absolute" as const,
    top: "40px",
    left: "20px",
    backgroundColor: "rgba(47, 62, 58, 0.9)", // Muted dark green overlay
    padding: "40px",
    width: "320px",
    borderRadius: "4px",
    zIndex: 5,
  },
  floatingText: {
    color: "#fff",
    fontSize: "1.15rem",
    lineHeight: "1.6",
    fontWeight: 500,
  }
};