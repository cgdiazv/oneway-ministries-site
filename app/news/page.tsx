"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/styles/theme";
import { Calendar, Folder, ArrowRight } from "lucide-react";
import { newsData } from "@/lib/data";

export default function NewsPage() {
  return (
    <>
      <div style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.headline}>Latest News & Updates</h1>
          <p style={styles.subtext}>
            Stay up to date with our recent events, ongoing ministries, and stories of hope coming out of Colombia.
          </p>
        </div>
      </div>

      <section style={styles.newsSection}>
        <div style={styles.newsContainer}>
          {/* Implementación de Tailwind: 1 columna en móvil, 3 en escritorio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full">
            {newsData.map((news, index) => (
              <Link 
                href={news.link}
                key={index} 
                style={{ ...styles.newsCard, textDecoration: 'none' }}
                className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div style={styles.projectImageContainer}>
                  <Image 
                    src={news.image} 
                    alt={news.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div style={styles.projectCardBody}>
                  <h3 style={styles.projectCardTitle}>{news.title}</h3>
                  <div style={styles.projectCardMeta}>
                    <span style={styles.metaItem}>
                      <Calendar size={14} style={{ marginRight: '6px' }}/> {news.date}
                    </span>
                    <span style={styles.metaItem}>
                      <Folder size={14} style={{ marginRight: '6px' }}/> {news.category}
                    </span>
                  </div>
                  <p style={styles.projectCardExcerpt}>{news.excerpt}</p>
                  <div className="read-more-btn-hover" style={styles.projectReadMore}>
                    READ ARTICLE <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  heroSection: {
    backgroundColor: theme.colors.primary,
    padding: "50px 20px 50px",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  headline: {
    color: theme.colors.text.inverse,
    fontSize: "3.5rem",
    fontWeight: 800,
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  subtext: {
    color: theme.colors.text.inverse,
    fontSize: "1.2rem",
    lineHeight: "1.6",
    opacity: 0.9,
    fontWeight: 300,
  },
  newsSection: {
    backgroundColor: "#f9fafb",
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center",
    minHeight: "50vh",
  },
  newsContainer: {
    maxWidth: "1300px", 
    width: "100%",
  },
  // Se eliminó newsGrid de aquí, ya que Tailwind maneja el layout ahora
  newsCard: {
    border: "1px solid #eaeaea",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
};