import React from "react";
import { theme } from "@/styles/theme";

export default function Home() {
  return (
    <div style={styles.heroSection}>
      <div style={styles.container}>
        <h1 style={styles.headline}>
          Restoring Hope in Colombia: One Life at a Time
        </h1>
        <p style={styles.subtext}>
          Partner with One Way Ministries to empower communities, support our local hubs like Casa del Rey and Morada de Gracia, and make a lasting impact.
        </p>
        <div style={styles.buttonGroup}>
          <a href="/about" style={styles.primaryButton}>Learn More</a>
          <a href="/donate" style={styles.accentButton}>Partner With Us</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroSection: {
    backgroundColor: theme.colors.background,
    padding: "6rem 2rem",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
  },
  container: {
    maxWidth: "800px",
  },
  headline: {
    color: theme.colors.primary,
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    lineHeight: "1.2",
  },
  subtext: {
    color: theme.colors.text.muted,
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "2.5rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text.inverse,
    padding: "12px 24px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  accentButton: {
    backgroundColor: theme.colors.accent,
    color: theme.colors.text.inverse,
    padding: "12px 24px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  }
};