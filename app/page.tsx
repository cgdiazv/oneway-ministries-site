import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Baby, Home as HomeIcon, BookOpen, ArrowRight, Play } from "lucide-react";

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
      icon: <Baby size={32} strokeWidth={1.5} />,
      title: "ORPHANHOOD",
      text: "Providing a nurturing family environment and spiritual guidance for children in Colombia who have lost their parents, ensuring they are raised with hope.",
    },
    {
      icon: <HomeIcon size={32} strokeWidth={1.5} />,
      title: "HOMELESS",
      text: "Through our local hubs like Casa del Rey and Morada de Gracia, we offer shelter and basic necessities to those in need.",
    },
    {
      icon: <BookOpen size={32} strokeWidth={1.5} />,
      title: "EDUCATION",
      text: "Empowering the next generation through academic support and spiritual formation to help break the cycle of poverty in their communities.",
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
            <a href="/about" className="hero-outline-btn" style={styles.primaryOutlineButton}>Learn More</a>
            <a href="/donate" className="hero-outline-btn" style={styles.accentOutlineButton}>Partner With Us</a>
          </div>
        </div>
      </div>

      {/* --- WHO WE ARE SECTION --- */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutGrid}>
          <div style={styles.textContent}>
            <span style={styles.smallLabel}>WHO WE ARE</span>
            <h2 style={styles.sectionHeading}>Serving in Colombia - South America Christ Way</h2>
            <p style={styles.sectionDesc}>
              We are dedicated to sharing Christ’s love throughout Colombia through strategic service and collaborative partnerships, 
              working tirelessly to restore hope and dignity to every family via unwavering, Gospel-centered compassion.
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

          <div style={styles.imageContainer}>
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

      {/* --- NEW: VIDEO & SIGNUP SECTION --- */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          
          {/* Main Image Banner */}
          <div style={styles.ctaBanner}>
            <div style={styles.ctaOverlay}></div>
            <div style={styles.ctaContent}>
              <p style={styles.ctaSub}>One of our ministries</p>
              <h2 style={styles.ctaHeading}>The Guainia Trans-cultural Mission</h2>
              <div style={styles.ctaDivider}></div>
              <p style={styles.ctaDesc}>
                Supports Alfa & Omega church planting among indigenous communities in Colombia’s Amazon region, providing Gospel outreach, leadership training, Bible translation support, and practical resources to strengthen local churches and pastors serving diverse ethnic groups.
              </p>
              <button style={styles.playButton} className="play-btn-hover">
                <Play fill="#fff" size={24} style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>

          {/* Overlapping Bottom Box */}
          <div style={styles.overlapBox}>
            <div style={styles.overlapLeft}>
              <h3 style={styles.overlapText}>
                Stay connected, pray with us, and discover how God may be calling you to be part of this mission.
              </h3>
              <form style={styles.formGroup}>
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL ADDRESS" 
                  style={styles.input} 
                />
                <button type="submit" style={styles.submitBtn}>Sign Up</button>
              </form>
            </div>
            
            {/* Image Halves for the right side */}
            <div style={styles.overlapImages}>
              <div style={styles.overlapImg1}></div>
              <div style={styles.overlapImg2}></div>
            </div>
          </div>

        </div>
      </section>
    </>
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
  subtext: { 
    color: theme.colors.text.inverse, 
    fontSize: "1.25rem", 
    lineHeight: "1.8", 
    marginBottom: "3rem", 
    maxWidth: "850px", 
    opacity: 0.95, 
    fontWeight: 300 
  },
  buttonGroup: { display: "flex", gap: "1.5rem", justifyContent: "center" },
  primaryOutlineButton: { 
    color: theme.colors.text.inverse, 
    border: `2px solid ${theme.colors.text.inverse}`, 
    padding: "14px 32px", 
    borderRadius: "30px", 
    textDecoration: "none", 
    fontWeight: "bold",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",
    textTransform: "uppercase" as const,
  },
  accentOutlineButton: { 
    color: theme.colors.text.inverse, 
    border: `2px solid ${theme.colors.text.inverse}`, 
    padding: "14px 32px", 
    borderRadius: "30px", 
    textDecoration: "none", 
    fontWeight: "bold",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",
    textTransform: "uppercase" as const,
  },
  aboutSection: { padding: "100px 20px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center" },
  aboutGrid: { maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" },
  textContent: { textAlign: "left" as const },
  smallLabel: { fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", color: "#888", display: "block", marginBottom: "15px" },
  sectionHeading: { fontSize: "2.8rem", fontWeight: 800, color: theme.colors.primary, marginBottom: "20px", lineHeight: "1.2" },
  sectionDesc: { fontSize: "1.05rem", lineHeight: "1.7", color: "#555", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "30px" },
  featuresList: { display: "flex", flexDirection: "column" as const, gap: "30px", marginBottom: "50px" },
  featureItem: { display: "flex", gap: "20px", alignItems: "flex-start" },
  featureIcon: { color: theme.colors.primary, paddingTop: "5px" },
  featureText: { flex: 1 },
  featureTitle: { fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", marginBottom: "8px", color: theme.colors.primary },
  featureDesc: { fontSize: "0.95rem", lineHeight: "1.6", color: "#666" },
  learnMoreBtn: {
    backgroundColor: theme.colors.primary,
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
  imageContainer: { position: "relative" as const, height: "700px", width: "100%" },
  floatingBox: {
    position: "absolute" as const,
    top: "40px",
    left: "20px",
    backgroundColor: "rgba(10, 25, 47, 0.9)",
    padding: "40px",
    width: "320px",
    borderRadius: "4px",
    zIndex: 5,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  floatingText: { color: "#fff", fontSize: "1.15rem", lineHeight: "1.6", fontWeight: 500 },

  // --- NEW STYLES FOR VIDEO & SIGNUP SECTION ---
  ctaSection: {
    backgroundColor: "#f7f7f7", // Required background
    padding: "80px 20px 260px", // Extra bottom padding accommodates the overlapping box
    display: "flex",
    justifyContent: "center",
  },
  ctaContainer: {
    maxWidth: "1200px",
    width: "100%",
    position: "relative" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  ctaBanner: {
    position: "relative" as const,
    width: "100%",
    height: "650px",
    backgroundImage: "url(/banner-worship.webp)", // Placeholder for your main image
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    padding: "40px",
    color: "#fff",
  },
  ctaOverlay: {
    position: "absolute" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)", // Darkens the image so white text pops
    zIndex: 1,
  },
  ctaContent: {
    position: "relative" as const,
    zIndex: 2,
    maxWidth: "750px",
  },
  ctaSub: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    marginBottom: "15px",
    color: "#e2e2e2",
  },
  ctaHeading: {
    fontSize: "3.5rem",
    fontWeight: 800,
    lineHeight: "1.1",
    marginBottom: "25px",
  },
  ctaDivider: {
    width: "40px",
    height: "2px",
    backgroundColor: "#fff",
    margin: "0 auto 25px",
  },
  ctaDesc: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "40px",
  },
  playButton: {
    background: "transparent",
    border: "2px solid #fff",
    borderRadius: "50%",
    width: "65px",
    height: "65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0 auto",
    color: "#fff",
    transition: "all 0.3s ease",
  },
  overlapBox: {
    position: "absolute" as const,
    bottom: "-220px", // Pulls the box down over the bottom edge
    width: "90%",
    maxWidth: "1050px",
    display: "flex",
    minHeight: "260px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    zIndex: 10,
    backgroundColor: "#fff",
  },
  overlapLeft: {
    flex: "1.3",
    backgroundColor: theme.colors.primary, // Using your Navy brand color
    padding: "50px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  overlapText: {
    color: "#fff",
    fontSize: "1.4rem",
    fontWeight: 600,
    lineHeight: "1.4",
    marginBottom: "25px",
  },
  formGroup: {
    display: "flex",
    width: "100%",
    height: "45px",
  },
  input: {
    flex: 1,
    padding: "0 15px",
    border: "1px solid #fff",
    borderRight: "none",
    borderRadius: "25px 0 0 25px",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "0.85rem",
    outline: "none",
    fontWeight: 500,
  },
  submitBtn: {
    padding: "0 25px",
    backgroundColor: "#fff",
    color: theme.colors.primary,
    border: "1px solid #fff",
    borderRadius: "0 25px 25px 0",
    fontWeight: "bold",
    fontSize: "0.85rem",
    cursor: "pointer",
    textTransform: "uppercase" as const,
    transition: "background 0.3s ease",
  },
  overlapImages: {
    flex: "1",
    display: "flex",
  },
  overlapImg1: {
    flex: 1,
    backgroundImage: "url(/overlap-1.webp)", // Left small image
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlapImg2: {
    flex: 1,
    backgroundImage: "url(/overlap-2.webp)", // Right small image
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
};