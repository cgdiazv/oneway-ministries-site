"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../styles/theme';
import { Menu, X, ArrowRight, Lock } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 1. Updated state typing to perfectly match your other components
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50); 
  const [customAmount, setCustomAmount] = useState("");

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null); // Clears the preset when typing
  };

  const menuItems = [
    { name: 'About Us', link: '/about' },
    { name: 'Our Mission', link: '/mission' },
    { name: 'Get Involved', link: '/get-involved' },
    { name: 'Impact', link: '/impact' },
    { name: 'News', link: '/news' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <>
    <nav style={styles.nav}>
      <div className="nav-container" style={styles.container}>
        <div className="logo-and-menu">
          <div className="logo-box" style={styles.logoBox}>
            <Link href="/">
              <Image src="/logo.webp" alt="One Way Ministries" width={180} height={45} priority />
            </Link>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} color="#fff" />
          </button>
        </div>

        <div className={`nav-wrapper ${isMenuOpen ? "open" : ""}`} style={styles.navWrapper}>
          <div className="drawer-header">
            <button className="close-menu-btn" onClick={() => setIsMenuOpen(false)}>
              <X size={32} color={theme.colors.primary} />
            </button>
          </div>
          <nav className="nav-links" style={styles.menuList}>
            {menuItems.map((item) => (
              <Link key={item.name} href={item.link} className="nav-link-hover" style={styles.link} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
          <button 
            className="donate-btn-hover donate-action" 
            style={styles.donateBtn} 
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setIsDonateOpen(true); }}
          >
            Donate
          </button>
        </div>
        
        <div className={`nav-overlay ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(false)}></div>
      </div>
    </nav>

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
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="YOUR_PAYPAL_EMAIL@EXAMPLE.COM" />
              <input type="hidden" name="item_name" value="Donation to One Way Ministries" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="amount" value={customAmount || selectedAmount || ""} />
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
};

const styles: Record<string, React.CSSProperties> = {
  nav: { backgroundColor: theme.colors.primary, padding: '1rem 0', width: '100%', position: 'sticky', top: 0, zIndex: 1000 },
  container: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' },
  logoBox: { display: 'flex', alignItems: 'center' },
  navWrapper: { display: 'flex', alignItems: 'center', flex: 1, gap: '2.5rem' },
  menuList: { display: 'flex', listStyle: 'none', gap: '1.5rem', margin: '0 auto', padding: 0 },
  link: { color: theme.colors.text.inverse, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' },
  donateBtn: { backgroundColor: '#fff', color: theme.colors.primary, padding: '10px 25px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase' },

  // --- LIGHTBOX & MODAL STYLES ---
  lightboxOverlay: {
    position: "fixed",
    top: 0, left: 0, width: "100%", height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  donateModalContent: {
    position: "relative",
    width: "90%",
    maxWidth: "480px", // Reduced from 550px to match standard
    maxHeight: "90vh",
    overflowY: "auto",
    backgroundColor: "#fff",
    borderRadius: "24px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
  },
  closeDonateBtn: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    color: "#64748b",
    cursor: "pointer",
    zIndex: 10,
  },
  donateHeader: {
    padding: "24px 32px",
    backgroundColor: "#f8fafc",
    borderBottom: "1px solid #e2e8f0",
    textAlign: "center",
  },
  donateTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: theme.colors.primary,
    margin: 0,
  },
  donateBody: {
    padding: "32px",
  },
  donateText: {
    fontSize: "0.95rem",
    color: "#64748b",
    lineHeight: "1.5",
    marginBottom: "24px",
  },
  donateLabelRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  donateLabel: {
    fontWeight: 600,
    fontSize: "0.9rem",
    color: theme.colors.primary,
  },
  currencyBadge: {
    backgroundColor: "#f1f5f9",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#64748b",
  },
  
  // 2. Updated grid to 3 columns to match standard
  amountGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "10px",
    marginBottom: "20px",
  },
  amountBtn: {
    padding: "12px",
    backgroundColor: "#fff",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#475569",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  amountBtnSelected: {
    backgroundColor: "rgba(10, 25, 47, 0.05)",
    border: `2px solid ${theme.colors.primary}`,
    fontWeight: 700,
    color: theme.colors.primary,
  },
  customInput: {
    width: "100%",
    padding: "14px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "1rem",
    textAlign: "center",
    outline: "none",
    marginBottom: "24px",
    boxSizing: "border-box",
    color: theme.colors.text?.main || "#333",
  },
  donateSubmitBtn: {
    width: "100%",
    backgroundColor: theme.colors.accent || theme.colors.primary, 
    color: "#fff",
    padding: "16px",
    borderRadius: "8px",
    border: "none",
    fontSize: "1.05rem",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s ease",
    marginBottom: "20px",
  },
  secureFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
    color: "#94a3b8",
    fontWeight: 500,
  },
};

export default Navbar;