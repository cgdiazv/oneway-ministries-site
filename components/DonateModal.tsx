// components/DonateModal.tsx
"use client";

import React, { useState } from "react";
import { theme } from "@/styles/theme";
import { ArrowRight, Lock } from "lucide-react";
import { useDonate } from "@/context/DonateContext";

export default function DonateModal() {
  const { isDonateOpen, closeDonateModal } = useDonate();
  
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");

  if (!isDonateOpen) return null; // If it's not open, don't render anything

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div style={styles.lightboxOverlay} onClick={closeDonateModal}>
      <div className="donate-modal-content" style={styles.donateModalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeDonateBtn} onClick={closeDonateModal}>✕</button>
        
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

          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="onewayministriescol@gmail.com" />
            <input type="hidden" name="item_name" value="Donation to One Way Ministries" />
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
  );
}

const styles = {
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
    backgroundColor: "rgba(10, 25, 47, 0.05)",
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
    backgroundColor: theme.colors.accent, 
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