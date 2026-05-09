"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../styles/theme';
import { Menu, X, ArrowRight, Lock } from 'lucide-react';

const Navbar = () => {
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
  },
  donateModalContent: {
    position: "relative",
    width: "90%",
    maxWidth: "550px",
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
    padding: "25px 20px",
    borderBottom: "4px solid #E2E8F0",
    textAlign: "center",
  },
  donateTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: theme.colors.text?.main || "#333",
    margin: 0,
  },
  donateBody: {
    padding: "30px",
  },
  donateText: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "25px",
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
    color: theme.colors.text?.main || "#333",
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
    padding: "15px",
    backgroundColor: "#fff",
    border: "1px solid #CBD5E1",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.colors.text?.main || "#333",
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
    padding: "15px",
    border: "1px solid #CBD5E1",
    borderRadius: "6px",
    fontSize: "0.95rem",
    textAlign: "center",
    outline: "none",
    marginBottom: "25px",
    color: theme.colors.text?.main || "#333",
  },
  donateSubmitBtn: {
    width: "100%",
    backgroundColor: theme.colors.primary,
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

export default Navbar;