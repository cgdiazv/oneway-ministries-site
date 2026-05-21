"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { theme } from "@/styles/theme";
import { ArrowLeft } from "lucide-react";
// 1. Importamos la función para buscar en nuestros datos centralizados
import { getMinistryItemBySlug } from "@/lib/data";
// Import useDonate hook
import { useDonate } from "@/context/DonateContext";

export default function SingleProjectPage() {
  const { openDonateModal } = useDonate();
  const params = useParams();
  const slug = params.slug as string;

  // 2. Buscamos el ministerio específico usando el slug
  const ministry = getMinistryItemBySlug(slug);

  // 3. Manejo de error si la URL no coincide con ningún ministerio
  if (!ministry) {
    return (
      <div style={styles.pageWrapper}>
        <div style={styles.container}>
          <h1>Ministry not found</h1>
          <Link href="/ministries" style={styles.backButton}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Back to Ministries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <Link href="/ministries" style={styles.backButton}>
          <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Back to Ministries
        </Link>

        <div style={styles.header}>
          <span style={styles.overline}>{ministry.category}</span>
          <h1 style={styles.title}>{ministry.title}</h1>
        </div>

        <div style={styles.imageBanner}>
          <Image 
            src={ministry.image} 
            alt={`Banner for ${ministry.title}`} 
            fill
            style={{ objectFit: "cover" }}
            priority 
          />
        </div>

        <div style={styles.contentBody}>
          <p style={styles.paragraph}>
            This is the detailed page for the <strong>{ministry.title}</strong> project. You can expand on the specific details, add photo galleries, or list the specific needs for this ministry here.
          </p>
          <p style={styles.paragraph}>
            {ministry.excerpt}
          </p>

          <div style={styles.ctaBox}>
            <h3 style={styles.ctaTitle}>Want to support this ministry?</h3>
            <button 
              onClick={(e) => { e.preventDefault(); openDonateModal(); }} 
              className="project-donate-btn-hover" 
              style={styles.donateBtn}
            >
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Los estilos se mantienen exactamente igual
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