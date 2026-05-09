"use client";

import React, { useState } from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Baby, Home as HomeIcon, BookOpen, ArrowRight, Play, Calendar, Folder, Lock, Menu, X } from "lucide-react";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | string>(50); // Default $50
  const [customAmount, setCustomAmount] = useState("");

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount("");
  };

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

  const projectsData = [
    {
      title: "United For Life Foundation",
      date: "MAY 15, 2026",
      category: "FOUNDATION",
      excerpt: "Holistic development through evangelism, music, sports, and education to empower local leaders and youth, fostering spiritual growth and community development.",
      image: "/project-1.webp", // Replace with your actual images
      link: "#",
    },
    {
      title: "Funcifunac Foundation Ministry",
      date: "JUNE 02, 2026",
      category: "FOUNDATION",
      excerpt: "Partnering with local contractors to install modern water filtration systems in underserved local neighborhoods.",
      image: "/project-2.webp",
      link: "#",
    },
    {
      title: "Impacto Biblico Church Planting",
      date: "JULY 10, 2026",
      category: "MINISTRY",
      excerpt: "Christ-centered ministry in Santa Marta, Colombia, commited to faithfuly preaching the Gospel.",
      image: "/project-3.webp",
      link: "#",
    },
    {
      title: "Casa del Rey",
      date: "AUGUST 05, 2026",
      category: "MINISTRY",
      excerpt: "Casa del Rey, together with Shalom Mision Xtrema Church, is a Christ-centered ministry in Bogota, Colombia.",
      image: "/project-4.webp",
      link: "#",
    },
  ];

  const partnerLogos = [
    { name: "Temple of God", svgSrc: "/logos/temple_of_god.svg" }, 
    { name: "Christian Mission", svgSrc: "/logos/christian_mission.svg" },
    { name: "Find Faith", svgSrc: "/logos/find_faith.svg" },
    { name: "Faith Connect", svgSrc: "/logos/faith_connect.svg" },
    { name: "Christian", svgSrc: "/logos/christian.svg" },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <header style={styles.integratedNavbar}>
          <div className="nav-container" style={styles.navContainer}>
            <div className="logo-and-menu">
              <div className="logo-box" style={styles.logoBox}>
                <a href="/" style={styles.logoLink}>
                  <Image src="/logo.webp" alt="Logo" width={140} height={40} priority />
                </a>
              </div>
              <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
                <Menu size={32} color="#fff" />
              </button>
            </div>

            <div className={`nav-wrapper ${isMenuOpen ? "open" : ""}`}>
              <div className="drawer-header">
                <button className="close-menu-btn" onClick={() => setIsMenuOpen(false)}>
                  <X size={32} color={theme.colors.primary} />
                </button>
              </div>
              <nav className="nav-links" style={styles.navLinksGroup}>
                {menuItems.map((item) => (
                  <a key={item.name} href={item.link} className="nav-link-hover" style={styles.navLink} onClick={() => setIsMenuOpen(false)}>{item.name}</a>
                ))}
              </nav>
              <button onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setIsDonateOpen(true); }} className="donate-btn-hover donate-action" style={styles.donateAction}>Donate</button>
            </div>
            
            <div className={`nav-overlay ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(false)}></div>
          </div>
        </header>

        <div style={styles.container}>
          <h1 className="hero-headline" style={styles.headline}>Sharing Hope in Colombia:<br/>One Life at a Time</h1>
          <p className="hero-subtext" style={styles.subtext}>
            Partner with One Way Ministries to empower communities, support our<br/>
            local hubs like Casa del Rey and Morada de Gracia, and make a lasting impact.
          </p>
          <div className="button-group" style={styles.buttonGroup}>
            <a href="/about" className="hero-outline-btn" style={styles.primaryOutlineButton}>Learn More</a>
            <button onClick={(e) => { e.preventDefault(); setIsDonateOpen(true); }} className="hero-outline-btn" style={styles.accentOutlineButton}>
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* --- WHO WE ARE SECTION --- */}
      <section style={styles.aboutSection}>
        <div className="about-grid" style={styles.aboutGrid}>
          <div style={styles.textContent}>
            <span style={styles.smallLabel}>WHO WE ARE</span>
            <h2 className="section-heading" style={styles.sectionHeading}>Serving in Colombia - South America Christ Way</h2>
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
            <a href="/about" className="learn-more-btn-hover" style={styles.learnMoreBtn}>
              LEARN MORE <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>

          <div className="about-image" style={styles.imageContainer}>
            <Image 
              src="/missionaries.webp" 
              alt="Community Worship" 
              fill 
              style={{ objectFit: 'cover', borderRadius: '8px' }} 
            />
            <div className="floating-box" style={styles.floatingBox}>
              <p style={styles.floatingText}>
                We believe that faith is not only something to be practiced, but something to be lived daily, through acts of kindness, generosity, and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA: VIDEO & SIGNUP SECTION --- */}
      <section className="cta-section" style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          
          {/* Main Image Banner */}
          <div className="cta-banner" style={styles.ctaBanner}>
            <div style={styles.ctaOverlay}></div>
            <div style={styles.ctaContent}>
              <p style={styles.ctaSub}>One of our ministries</p>
              <h2 className="cta-heading" style={styles.ctaHeading}>The Guainia Trans-cultural Mission</h2>
              <div style={styles.ctaDivider}></div>
              <p style={styles.ctaDesc}>
                Supports Alfa & Omega church planting among indigenous communities in Colombia’s Amazon region, providing Gospel outreach, leadership training, Bible translation support, and practical resources to strengthen local churches and pastors serving diverse ethnic groups.
              </p>
            <button style={styles.playButton} className="play-btn-hover cta-play-btn" onClick={() => setIsVideoOpen(true)}>
                <Play fill="#fff" size={24} style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>

          {/* Overlapping Bottom Box */}
          <div className="overlap-box" style={styles.overlapBox}>
            <div className="overlap-left" style={styles.overlapLeft}>
              <h3 className="overlap-text" style={styles.overlapText}>
                Stay connected, pray with us, and discover how God may be calling you to be part of this mission.
              </h3>
              <form className="cta-form-group" style={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL ADDRESS" 
                  className="cta-input"
                  style={styles.input} 
                  required
                />
                <button type="submit" className="cta-submit-btn" style={styles.submitBtn}>Sign Up</button>
              </form>
            </div>
            
            {/* Image Halves for the right side */}
            <div className="overlap-images" style={styles.overlapImages}>
              <div style={styles.overlapImg1}></div>
              <div style={styles.overlapImg2}></div>
            </div>
          </div>

          {/* --- VIDEO LIGHTBOX MODAL --- */}
          {isVideoOpen && (
            <div style={styles.lightboxOverlay} onClick={() => setIsVideoOpen(false)}>
              <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeLightboxBtn} onClick={() => setIsVideoOpen(false)}>
                  ✕
                </button>
                <div style={styles.videoWrapper}>
                  <iframe 
                    style={styles.videoIframe}
                    src="https://www.youtube-nocookie.com/embed/cOD3iU5oWTU?autoplay=1" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- INITIATIVES & PROJECTS SECTION --- */}
      <section style={styles.initiativesSection}>
        <div style={styles.initiativesContainer}>
          
          {/* Header Row */}
          <div className="initiatives-header" style={styles.initiativesHeader}>
            <div style={styles.initiativesHeaderLeft}>
              <span style={styles.initiativesOverline}>OUR FUNDRAISERS</span>
              <h2 className="initiatives-title" style={styles.initiativesTitle}>Ongoing Projects & Ministries Involved</h2>
            </div>
            <div style={styles.initiativesHeaderRight}>
              <p style={styles.initiativesIntro}>
                Through dedicated fundraising, ongoing community projects, and the active involvement of our local ministries, we are working to bring hope and essential resources to families in Colombia. Explore our latest efforts below.
              </p>
            </div>
          </div>

          {/* 4-Column Grid */}
          <div className="initiatives-grid" style={styles.initiativesGrid}>
            {projectsData.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <div style={styles.projectImageContainer}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div style={styles.projectCardBody}>
                  <h3 style={styles.projectCardTitle}>{project.title}</h3>
                  <div style={styles.projectCardMeta}>
                    <span style={styles.metaItem}>
                      <Calendar size={14} style={{ marginRight: '6px' }}/> {project.date}
                    </span>
                    <span style={styles.metaItem}>
                      <Folder size={14} style={{ marginRight: '6px' }}/> {project.category}
                    </span>
                  </div>
                  <p style={styles.projectCardExcerpt}>{project.excerpt}</p>
                  <a href={project.link} className="read-more-btn-hover" style={styles.projectReadMore}>
                    READ MORE <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- NEW: PARTNER & SPONSOR SECTION --- */}
      <section style={styles.partnerSection}>
        <div style={styles.partnerContainer}>
          <h2 className="partner-title" style={styles.partnerTitle}>With grateful hearts<br/> to our partners</h2>
          <p style={styles.partnerSubtitle}>
            Our work wouldn't be possible without the faithful support of our partners and sponsors around the globe.
          </p>
          <div style={styles.partnerLogoGrid}>
            {partnerLogos.map((logo, index) => (
              <div key={index} style={styles.partnerLogoItem}>
                <img 
                  src={logo.svgSrc} 
                  alt={`${logo.name} logo`} 
                  className="partner-logo-image"
                  style={styles.partnerLogoImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DONATE MODAL --- */}
      {isDonateOpen && (
        <div style={styles.lightboxOverlay} onClick={() => setIsDonateOpen(false)}>
          <div className="donate-modal-content" style={styles.donateModalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeDonateBtn} onClick={() => setIsDonateOpen(false)}>✕</button>
            
            <div style={styles.donateHeader}>
              <h3 style={styles.donateTitle}>How much would you like to donate today?</h3>
            </div>
            
            <div className="donate-body" style={styles.donateBody}>
              <p style={styles.donateText}>
                All donations directly impact our organization and help us further our mission.
              </p>

              <div style={styles.donateLabelRow}>
                <span style={styles.donateLabel}>Donation Amount <span style={{color: theme.colors.accent}}>*</span></span>
                <span style={styles.currencyBadge}>USD $</span>
              </div>

              {/* PayPal Form */}
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                {/* PayPal Configuration Hidden Fields */}
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="YOUR_PAYPAL_EMAIL@EXAMPLE.COM" />
                <input type="hidden" name="item_name" value="Donation to One Way Ministries" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="amount" value={customAmount || selectedAmount} />
                <input type="hidden" name="no_shipping" value="1" />

                {/* Preset Amount Grid */}
                <div className="amount-grid" style={styles.amountGrid}>
                  {[10, 25, 50, 100, 250, 500].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handlePresetClick(amount)}
                      style={{
                        ...styles.amountBtn,
                        ...(selectedAmount === amount ? styles.amountBtnSelected : {}),
                      }}
                    >
                      ${amount}.00
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  style={styles.customInput}
                  min="1"
                />

                <button type="submit" style={styles.donateSubmitBtn} className="donate-submit-hover">
                  Donate now <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </button>
              </form>

              <div style={styles.secureFooter}>
                <Lock size={12} style={{ marginRight: '6px' }} />
                100% Secure Donation
              </div>
            </div>
          </div>
        </div>
      )}
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
  learnMoreBtn: theme.learnMoreBtn,
  imageContainer: { position: "relative" as const, height: "700px", width: "100%" },
  floatingBox: theme.floatingBox,
  floatingText: { color: "#fff", fontSize: "1.15rem", lineHeight: "1.6", fontWeight: 500 },

  // --- CTA & SIGNUP SECTION ---
  ctaSection: {
    backgroundColor: "#f7f7f7", 
    padding: "100px 20px 280px", 
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
    backgroundImage: "url(/banner-worship.webp)", 
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
    backgroundColor: "rgba(0, 0, 0, 0.65)", 
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
    bottom: "-180px", 
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
    backgroundColor: theme.colors.primary, 
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
    backgroundImage: "url(/overlap-1.webp)", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlapImg2: {
    flex: 1,
    backgroundImage: "url(/overlap-2.webp)", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  // --- NEW STYLES FOR INITIATIVES SECTION ---
  initiativesSection: {
    backgroundColor: "#ffffff",
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
  },
  initiativesContainer: {
    maxWidth: "1300px", 
    width: "100%",
  },
  initiativesHeader: {
    display: "flex",
    gap: "60px",
    marginBottom: "50px",
    alignItems: "flex-end",
  },
  initiativesHeaderLeft: {
    flex: "1",
  },
  initiativesHeaderRight: {
    flex: "1",
    paddingBottom: "10px",
  },
  initiativesOverline: {
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "2px",
    color: "#888",
    display: "block",
    marginBottom: "15px",
    textTransform: "uppercase" as const,
  },
  initiativesTitle: {
    fontSize: "3rem",
    fontWeight: 800,
    color: theme.colors.primary, 
    lineHeight: "1.1",
    margin: 0,
  },
  initiativesIntro: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#555",
    margin: 0,
  },
  initiativesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },
  projectCard: {
    border: "1px solid #eaeaea",
    borderRadius: "4px",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column" as const,
    transition: "box-shadow 0.3s ease",
  },
  projectImageContainer: {
    position: "relative" as const,
    width: "100%",
    height: "220px",
    backgroundColor: "#f0f0f0", 
  },
  projectCardBody: {
    padding: "30px 25px",
    display: "flex",
    flexDirection: "column" as const,
    flex: 1,
  },
  projectCardTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: theme.colors.primary, 
    marginBottom: "15px",
    lineHeight: "1.3",
  },
  projectCardMeta: {
    display: "flex",
    gap: "15px",
    color: "#777",
    fontSize: "0.75rem",
    fontWeight: 600,
    marginBottom: "20px",
    textTransform: "uppercase" as const,
    flexWrap: "wrap" as const,
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
  },
  projectCardExcerpt: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#666",
    marginBottom: "30px",
    flex: 1, 
  },
  projectReadMore: {
    alignSelf: "flex-start",
    display: "inline-flex",
    alignItems: "center",
    padding: "10px 20px",
    border: `2px solid ${theme.colors.primary}`, 
    color: theme.colors.primary,
    borderRadius: "30px",
    fontSize: "0.75rem",
    fontWeight: 700,
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  
  // --- LIGHTBOX STYLES ---
  lightboxOverlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lightboxContent: {
    position: "relative" as const,
    width: "90%",
    maxWidth: "900px",
    backgroundColor: "#000",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
  },
  closeLightboxBtn: {
    position: "absolute" as const,
    top: "-40px",
    right: "0",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "2rem",
    cursor: "pointer",
  },
  videoWrapper: {
    position: "relative" as const,
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden" as const,
    borderRadius: "8px",
  },
  videoIframe: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  // --- PARTNER & SPONSOR STYLES ---
  partnerSection: {
    backgroundColor: "#FFFFFF", 
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center",
  },
  partnerContainer: {
    maxWidth: "1200px",
    width: "100%",
    textAlign: "center" as const,
  },
  partnerTitle: {
    fontSize: "3rem",
    fontWeight: 800,
    color: theme.colors.primary, 
    marginBottom: "25px",
    lineHeight: "1.1",
    fontFamily: theme.fonts.body, 
  },
  partnerSubtitle: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#555555", 
    maxWidth: "700px",
    margin: "0 auto 60px", 
    fontWeight: 300,
  },
  partnerLogoGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "50px", 
    flexWrap: "wrap" as const, 
    alignItems: "center",
  },
  partnerLogoItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  partnerLogoImage: {
    maxHeight: "75px", 
    maxWidth: "180px", 
    objectFit: "contain" as const,
  },

  // --- DONATE MODAL STYLES ---
  donateModalContent: {
    position: "relative" as const,
    width: "90%",
    maxWidth: "550px",
    maxHeight: "90vh",
    overflowY: "auto" as const,
    backgroundColor: "#fff",
    borderRadius: "24px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column" as const,
  },
  closeDonateBtn: {
    position: "absolute" as const,
    top: "15px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    color: "#666",
    cursor: "pointer",
    zIndex: 10,
  },
  donateHeader: {
    padding: "15px 20px",
    borderBottom: "4px solid #E2E8F0", // Thick top border like the image
    textAlign: "center" as const,
  },
  donateTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: theme.colors.text.main,
    margin: 0,
  },
  donateBody: {
    padding: "20px 30px",
  },
  donateText: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  donateLabelRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  donateLabel: {
    fontWeight: 600,
    fontSize: "0.95rem",
    color: theme.colors.text.main,
  },
  currencyBadge: {
    backgroundColor: "#E2E8F0",
    padding: "4px 10px",
    borderRadius: "4px",
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#475569",
  },
  amountGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
    marginBottom: "15px",
  },
  amountBtn: {
    padding: "12px",
    backgroundColor: "#fff",
    border: "1px solid #CBD5E1",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.colors.text.main,
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  amountBtnSelected: {
    backgroundColor: "rgba(10, 25, 47, 0.05)", // Very light Navy tint
    border: `2px solid ${theme.colors.primary}`, // Navy border
    fontWeight: 700,
    color: theme.colors.primary,
  },
  customInput: {
    width: "100%",
    padding: "12px",
    border: "1px solid #CBD5E1",
    borderRadius: "6px",
    fontSize: "0.95rem",
    textAlign: "center" as const,
    outline: "none",
    marginBottom: "20px",
    color: theme.colors.text.main,
  },
  donateSubmitBtn: {
    width: "100%",
    backgroundColor: theme.colors.primary, // Using your brand Navy instead of muted green
    color: "#fff",
    padding: "16px",
    borderRadius: "6px",
    border: "none",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s ease",
  },
  secureFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    fontSize: "0.75rem",
    color: "#64748B",
    fontWeight: 600,
  },
};