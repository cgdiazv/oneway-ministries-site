"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { theme } from "@/styles/theme";
// 1. Added ArrowRight and Lock to your icon imports
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";

const projectImages: Record<string, string> = {
  "casa-del-rey": "/images/casa-del-rey.webp",
  "united-for-life": "/images/united-for-life.webp",
  "funcifunac": "/images/funcifunac.webp",
  "impacto-biblico": "/images/impacto-biblico.webp",
};

export default function SingleProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  // 2. State for the modal visibility and amount selections
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50); // Default to 50
  const [customAmount, setCustomAmount] = useState("");

  const formatTitle = (str: string) => {
    if (!str) return "Project Details";
    return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  const projectTitle = formatTitle(slug);
  const imageUrl = projectImages[slug] || "/images/default-placeholder.webp";

  // 3. Handlers for the donation amounts
  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom input when a preset is selected
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null); // Clear preset when typing a custom amount
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <Link href="/" style={styles.backButton}>
          <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Back to Home
        </Link>

        <div style={styles.header}>
          <span style={styles.overline}>Ministry Project</span>
          <h1 style={styles.title}>{projectTitle}</h1>
        </div>

        <div style={styles.imageBanner}>
          <Image 
            src={imageUrl} 
            alt={`Banner for ${projectTitle}`} 
            fill
            style={{ objectFit: "cover" }}
            priority 
          />
        </div>

        <div style={styles.contentBody}>
          <p style={styles.paragraph}>
            This is the detailed page for the <strong>{projectTitle}</strong> project. You can expand on the specific details, add photo galleries, or list the specific needs for this ministry here.
          </p>
          <p style={styles.paragraph}>
            By creating this dynamic route, any link that starts with <code>/projects/</code> will automatically use this layout!
          </p>

          <div style={styles.ctaBox}>
            <h3 style={styles.ctaTitle}>Want to support this ministry?</h3>
            <button 
              onClick={(e) => { e.preventDefault(); setIsDonateOpen(true); }} 
              className="project-donate-btn-hover" 
              style={styles.donateBtn}
            >
              Make a Donation
            </button>
          </div>
        </div>
      </div>

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
                {/* Dynamically set the item name to the specific project */}
                <input type="hidden" name="item_name" value={`Donation to ${projectTitle}`} />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="amount" value={customAmount || selectedAmount || ""} />
                <input type="hidden" name="no_shipping" value="1" />

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
    </div>
  );
}

// 4. Appended all required styles for your custom modal
const styles = {
  pageWrapper: {
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
    padding: "60px 20px 120px",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "50px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
  },
  backButton: {
    display: "inline-flex",
    alignItems: "center",
    color: "#64748b",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "0.9rem",
    marginBottom: "40px",
    transition: "color 0.2s ease",
  },
  header: {
    marginBottom: "30px",
  },
  overline: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "2px",
    color: theme.colors.accent,
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "10px",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 800,
    color: theme.colors.primary,
    margin: 0,
    lineHeight: 1.1,
  },
  imageBanner: {
    width: "100%",
    height: "400px",
    backgroundColor: "#e2e8f0",
    borderRadius: "8px",
    marginBottom: "40px",
    position: "relative" as const, 
    overflow: "hidden", 
  },
  contentBody: {
    maxWidth: "750px",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#475569",
    marginBottom: "20px",
  },
  ctaBox: {
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "rgba(10, 25, 47, 0.03)",
    borderLeft: `4px solid ${theme.colors.primary}`,
    borderRadius: "0 8px 8px 0",
  },
  ctaTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: theme.colors.primary,
    marginBottom: "20px",
    marginTop: 0,
  },
  donateBtn: {
    display: "inline-block",
    backgroundColor: theme.colors.primary,
    color: "#fff",
    padding: "14px 32px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },

  // --- MODAL STYLES ---
  lightboxOverlay: {
    position: "fixed" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "20px",
  },
  donateModalContent: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "480px",
    position: "relative" as const,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  closeDonateBtn: {
    position: "absolute" as const,
    top: "16px", right: "16px",
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "#64748b",
  },
  donateHeader: {
    backgroundColor: "#f8fafc",
    padding: "24px 32px",
    borderBottom: "1px solid #e2e8f0",
  },
  donateTitle: {
    margin: 0,
    fontSize: "1.25rem",
    color: theme.colors.primary,
    fontWeight: 700,
  },
  donateBody: {
    padding: "32px",
  },
  donateText: {
    color: "#64748b",
    fontSize: "0.95rem",
    marginBottom: "24px",
    lineHeight: 1.5,
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
    fontSize: "0.85rem",
    color: "#64748b",
    backgroundColor: "#f1f5f9",
    padding: "4px 8px",
    borderRadius: "4px",
  },
  amountGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  amountBtn: {
    padding: "12px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    color: "#475569",
    transition: "all 0.2s ease",
  },
  amountBtnSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: "rgba(10, 25, 47, 0.05)", // Soft background using your primary theme concept
    color: theme.colors.primary,
  },
  customInput: {
    width: "100%",
    padding: "14px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "1rem",
    marginBottom: "24px",
    boxSizing: "border-box" as const,
  },
  donateSubmitBtn: {
    width: "100%",
    padding: "16px",
    backgroundColor: theme.colors.accent, // Uses your theme's accent color
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.05rem",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  secureFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#94a3b8",
    fontSize: "0.8rem",
    fontWeight: 500,
  }
};