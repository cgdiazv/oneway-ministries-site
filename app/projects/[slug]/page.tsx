"use client";

import React from "react";
import Image from "next/image";
// 1. Import the Link component
import Link from "next/link"; 
import { useParams } from "next/navigation";
import { theme } from "@/styles/theme";
import { ArrowLeft } from "lucide-react";

const projectImages: Record<string, string> = {
  "casa-del-rey": "/images/casa-del-rey.webp",
  "united-for-life": "/images/united-for-life.webp",
  "funcifunac": "/images/funcifunac.webp",
  "impacto-biblico": "/images/impacto-biblico.webp", 
};

export default function SingleProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  const formatTitle = (str: string) => {
    if (!str) return "Project Details";
    return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  const projectTitle = formatTitle(slug);

  const imageUrl = projectImages[slug] || "/images/default-placeholder.webp";

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        
        {/* 2. Replace <a> with <Link> for client-side routing */}
        <Link href="/" style={styles.backButton}>
          <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Back to Home
        </Link>

        {/* Project Header */}
        <div style={styles.header}>
          <span style={styles.overline}>Ministry Project</span>
          <h1 style={styles.title}>{projectTitle}</h1>
        </div>

        {/* Replaced Placeholder with Next.js Image */}
        <div style={styles.imageBanner}>
          <Image 
            src={imageUrl} 
            alt={`Banner for ${projectTitle}`} 
            fill
            style={{ objectFit: "cover" }}
            priority 
          />
        </div>

        {/* Project Content Body */}
        <div style={styles.contentBody}>
          <p style={styles.paragraph}>
            This is the detailed page for the <strong>{projectTitle}</strong> project. You can expand on the specific details, add photo galleries, or list the specific needs for this ministry here.
          </p>
          <p style={styles.paragraph}>
            By creating this dynamic route, any link that starts with <code>/projects/</code> will automatically use this layout!
          </p>
          
          <div style={styles.ctaBox}>
            <h3 style={styles.ctaTitle}>Want to support this ministry?</h3>
            {/* 3. Replace the donate <a> with <Link> */}
            <Link href="/donate" className="project-donate-btn-hover" style={styles.donateBtn}>
              Make a Donation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  // ... (keep your other styles exactly the same)
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
  
  // 4. Update the imageBanner styles
  imageBanner: {
    width: "100%",
    height: "400px",
    backgroundColor: "#e2e8f0",
    borderRadius: "8px",
    marginBottom: "40px",
    // CRITICAL ADDITIONS FOR NEXT/IMAGE:
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
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.95rem",
  }
};