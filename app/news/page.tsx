"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Calendar, Folder, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const newsData = [
    {
      title: "New Community Center Opening",
      date: "OCTOBER 12, 2026",
      category: "UPDATE",
      excerpt: "We are thrilled to announce the opening of our new community center in Bogota, providing more space for education and shelter.",
      image: "/project-2.webp",
      link: "/news/new-community-center-opening",
    },
    {
      title: "Annual Fundraising Gala Results",
      date: "SEPTEMBER 28, 2026",
      category: "EVENT",
      excerpt: "Thanks to your generous support, our annual gala exceeded our fundraising goals, allowing us to expand our reach.",
      image: "/project-4.webp",
      link: "/news/annual-fundraising-gala-results",
    },
    {
      title: "Mission Trip to Amazon Region",
      date: "SEPTEMBER 05, 2026",
      category: "MISSION",
      excerpt: "A team of volunteers recently returned from a successful mission trip, bringing medical supplies and spiritual support.",
      image: "/missionaries.webp",
      link: "/news/mission-trip-to-amazon-region",
    },
    {
      title: "Back to School Drive Success",
      date: "AUGUST 15, 2026",
      category: "UPDATE",
      excerpt: "Over 500 children received backpacks filled with essential school supplies thanks to our incredible volunteers and donors.",
      image: "/project-1.webp",
      link: "/news/back-to-school-drive-success",
    },
    {
      title: "Partnering with Local Healthcare Providers",
      date: "JULY 22, 2026",
      category: "PARTNERSHIP",
      excerpt: "We have officially partnered with local clinics to provide free health screenings at Casa del Rey twice a month.",
      image: "/project-3.webp",
      link: "/news/partnering-with-local-healthcare-providers",
    },
    {
      title: "Youth Soccer Tournament Brings Community Together",
      date: "JUNE 10, 2026",
      category: "EVENT",
      excerpt: "The United For Life Foundation hosted an incredible youth soccer tournament, promoting teamwork and community bonding.",
      image: "/project-2.webp",
      link: "/news/youth-soccer-tournament-brings-community-together",
    },
  ];

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
          <div className="news-grid" style={styles.newsGrid}>
            {newsData.map((news, index) => (
              <div key={index} style={styles.newsCard}>
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
                  <a href={news.link} className="read-more-btn-hover" style={styles.projectReadMore}>
                    READ ARTICLE <ArrowRight size={14} style={{ marginLeft: '6px' }} />
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