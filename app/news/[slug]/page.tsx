"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { theme } from "@/styles/theme";
import { ArrowLeft, Calendar, Folder } from "lucide-react";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  image: string;
}

// Mock data to provide specific info based on the URL slug
const newsData: Record<string, NewsItem> = {
  "new-community-center-opening": {
    title: "New Community Center Opening",
    date: "OCTOBER 12, 2026",
    category: "UPDATE",
    image: "/project-2.webp",
  },
  "annual-fundraising-gala-results": {
    title: "Annual Fundraising Gala Results",
    date: "SEPTEMBER 28, 2026",
    category: "EVENT",
    image: "/project-4.webp",
  },
  "mission-trip-to-amazon-region": {
    title: "Mission Trip to Amazon Region",
    date: "SEPTEMBER 05, 2026",
    category: "MISSION",
    image: "/missionaries.webp",
  },
  "back-to-school-drive-success": {
    title: "Back to School Drive Success",
    date: "AUGUST 15, 2026",
    category: "UPDATE",
    image: "/project-1.webp",
  },
  "partnering-with-local-healthcare-providers": {
    title: "Partnering with Local Healthcare Providers",
    date: "JULY 22, 2026",
    category: "PARTNERSHIP",
    image: "/project-3.webp",
  },
  "youth-soccer-tournament-brings-community-together": {
    title: "Youth Soccer Tournament Brings Community Together",
    date: "JUNE 10, 2026",
    category: "EVENT",
    image: "/project-2.webp",
  }
};

export default function SingleNewsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const formatTitle = (str: string) => {
    if (!str) return "News Details";
    return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  // If a predefined match is not found, fallback to auto-formatting
  const newsItem = newsData[slug] || {
    title: formatTitle(slug),
    date: "TODAY",
    category: "NEWS",
    image: "/missionaries.webp"
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <Link href="/news" style={styles.backButton}>
          <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Back to News
        </Link>

        <div style={styles.header}>
          <span style={styles.overline}>Latest Update</span>
          <h1 style={styles.title}>{newsItem.title}</h1>
          <div style={styles.metaData}>
            <span style={styles.metaItem}>
              <Calendar size={14} style={{ marginRight: '6px' }}/> {newsItem.date}
            </span>
            <span style={styles.metaItem}>
              <Folder size={14} style={{ marginRight: '6px' }}/> {newsItem.category}
            </span>
          </div>
        </div>

        <div style={styles.imageBanner}>
          <Image 
            src={newsItem.image} 
            alt={`Banner for ${newsItem.title}`} 
            fill
            style={{ objectFit: "cover" }}
            priority 
          />
        </div>

        <div style={styles.contentBody}>
          <p style={styles.paragraph}>
            This is the detailed page for the <strong>{newsItem.title}</strong> update. You can expand on the specific details, add photo galleries, or provide the full text of the article right here.
          </p>
          <p style={styles.paragraph}>
            By creating this dynamic route, any link that starts with <code>/news/</code> will automatically use this layout!
          </p>
        </div>
      </div>
    </div>
  );
}

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
    marginBottom: "20px",
  },
  metaData: {
    display: "flex",
    gap: "15px",
    color: "#777",
    fontSize: "0.85rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
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
};
