"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/styles/theme";
import { Calendar, Folder, ArrowRight } from "lucide-react";
import { ministriesData } from "@/lib/data";

export default function MinistriesPage() {
  const [filter, setFilter] = useState("ALL");

  // Filtramos la data basada en la selección
  const filteredMinistries = filter === "ALL" 
    ? ministriesData 
    : ministriesData.filter(m => m.category === filter);

  const categories = ["ALL", "FOUNDATION", "MINISTRY"];

  return (
    <>
      <div style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.headline}>Ministries</h1>
          <p style={styles.subtext}>Explore our ongoing projects and ministries.</p>
        </div>
      </div>

      <section style={styles.newsSection}>
        <div style={styles.newsContainer}>
          
          {/* BARRA DE FILTROS */}
          <div style={styles.filterBar}>
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  ...styles.filterBtn,
                  backgroundColor: filter === cat ? theme.colors.primary : "transparent",
                  color: filter === cat ? "#fff" : theme.colors.primary,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full">
            {filteredMinistries.map((ministry, index) => (
              <div key={index} style={styles.newsCard}>
                <div style={styles.projectImageContainer}>
                  <Image src={ministry.image} alt={ministry.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={styles.projectCardBody}>
                  <h3 style={styles.projectCardTitle}>{ministry.title}</h3>
                  <div style={styles.projectCardMeta}>
                    <span style={styles.metaItem}><Calendar size={14} style={{ marginRight: '6px' }}/> {ministry.date}</span>
                    <span style={styles.metaItem}><Folder size={14} style={{ marginRight: '6px' }}/> {ministry.category}</span>
                  </div>
                  <p style={styles.projectCardExcerpt}>{ministry.excerpt}</p>
                  <Link href={ministry.link} style={styles.projectReadMore}>
                    READ MORE <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  // ... (tus otros estilos se mantienen)
  filterBar: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginBottom: "50px",
  },
  filterBtn: {
    padding: "10px 25px",
    borderRadius: "30px",
    border: `2px solid ${theme.colors.primary}`,
    fontWeight: 700,
    fontSize: "0.8rem",
    cursor: "pointer",
    textTransform: "uppercase" as const,
    transition: "all 0.3s ease",
  },
  // Reutiliza tus estilos de heroSection, newsSection y projectCard existentes...
  heroSection: { backgroundColor: theme.colors.primary, padding: "100px 20px 60px", textAlign: "center" as const },
  container: { maxWidth: "900px", margin: "0 auto" },
  headline: { color: theme.colors.text.inverse, fontSize: "3.5rem", fontWeight: 800, marginBottom: "20px" },
  subtext: { color: theme.colors.text.inverse, fontSize: "1.2rem", opacity: 0.9, fontWeight: 300 },
  newsSection: { backgroundColor: "#f9fafb", padding: "80px 20px", display: "flex", justifyContent: "center" },
  newsContainer: { maxWidth: "1300px", width: "100%" },
  newsCard: { border: "1px solid #eaeaea", borderRadius: "8px", overflow: "hidden", backgroundColor: "#fff", display: "flex", flexDirection: "column" as const },
  projectImageContainer: { position: "relative" as const, width: "100%", height: "220px", backgroundColor: "#f0f0f0" },
  projectCardBody: { padding: "30px 25px", display: "flex", flexDirection: "column" as const, flex: 1 },
  projectCardTitle: { fontSize: "1.25rem", fontWeight: 700, color: theme.colors.primary, marginBottom: "15px" },
  projectCardMeta: { display: "flex", gap: "15px", color: "#777", fontSize: "0.75rem", marginBottom: "20px" },
  metaItem: { display: "flex", alignItems: "center" },
  projectCardExcerpt: { fontSize: "0.95rem", lineHeight: "1.6", color: "#666", marginBottom: "30px", flex: 1 },
  projectReadMore: { alignSelf: "flex-start", display: "inline-flex", alignItems: "center", padding: "10px 20px", border: `2px solid ${theme.colors.primary}`, color: theme.colors.primary, borderRadius: "30px", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none" },
};