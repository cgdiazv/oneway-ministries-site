"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Calendar, Folder, ArrowRight } from "lucide-react";

export default function GetInvolvedPage() {
  const projectsData = [
    {
      title: "United For Life Foundation",
      date: "MAY 15, 2026",
      category: "FOUNDATION",
      excerpt: "Holistic development through evangelism, music, sports, and education to empower local leaders and youth, fostering spiritual growth and community development.",
      image: "/project-1.webp",
      link: "/projects/united-for-life",
    },
    {
      title: "Funcifunac Foundation Ministry",
      date: "JUNE 02, 2026",
      category: "FOUNDATION",
      excerpt: "Partnering with local contractors to install modern water filtration systems in underserved local neighborhoods.",
      image: "/project-2.webp",
      link: "/projects/funcifunac",
    },
    {
      title: "Impacto Biblico Church Planting",
      date: "JULY 10, 2026",
      category: "MINISTRY",
      excerpt: "Christ-centered ministry in Santa Marta, Colombia, commited to faithfuly preaching the Gospel.",
      image: "/project-3.webp",
      link: "/projects/impacto-biblico",
    },
    {
      title: "Casa del Rey",
      date: "AUGUST 05, 2026",
      category: "MINISTRY",
      excerpt: "Casa del Rey, together with Shalom Mision Xtrema Church, is a Christ-centered ministry in Bogota, Colombia.",
      image: "/project-4.webp",
      link: "/projects/casa-del-rey",
    },
  ];

  return (
    <>
      <div style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.headline}>Get Involved</h1>
          <p style={styles.subtext}>
            Explore our ongoing projects and ministries. Discover how you can partner with us to bring hope and essential resources to families in Colombia.
          </p>
        </div>
      </div>

      <section style={styles.newsSection}>
        <div style={styles.newsContainer}>
          <div className="news-grid" style={styles.newsGrid}>
            {projectsData.map((project, index) => (
              <div key={index} style={styles.newsCard}>
                <div style={styles.projectImageContainer}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div style={styles.projectCardBody}>
                  <h3 style={styles.projectCardTitle}>{project.title}</h3>
                  <div style={styles.projectCardMeta}>
                    <span style={styles.metaItem}>
                      <Calendar size={14} style={{ marginRight: '6px' }}/> {project.date}
                    </span>
                    <span style={styles.metaItem}>
                      <Folder size={14} style={{ marginRight: '6px' }}/> {project.category}
                    </span>
                  </div>
                  <p style={styles.projectCardExcerpt}>{project.excerpt}</p>
                  <a href={project.link} className="read-more-btn-hover" style={styles.projectReadMore}>
                    READ MORE <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </a>
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
  heroSection: {
    backgroundColor: theme.colors.primary,
    padding: "100px 20px 60px",
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
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  },
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