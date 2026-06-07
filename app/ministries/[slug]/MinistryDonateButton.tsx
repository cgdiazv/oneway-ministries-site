"use client";

import React from "react";
import { useDonate } from "@/context/DonateContext";
import { theme } from "@/styles/theme";

export default function MinistryDonateButton({ title }: { title: string }) {
  const { openDonateModal } = useDonate();

  return (
    <div style={styles.ctaBox}>
      <h3 style={styles.ctaTitle}>Want to support {title}?</h3>
      <button 
        onClick={(e) => { e.preventDefault(); openDonateModal(); }} 
        className="project-donate-btn-hover" 
        style={styles.donateBtn}
      >
        Make a Donation
      </button>
    </div>
  );
}

const styles = {
  ctaBox: {
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "rgba(31, 42, 68, 0.03)",
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
};
