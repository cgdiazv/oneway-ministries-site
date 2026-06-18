import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { theme } from "@/styles/theme";
import { ArrowLeft, Calendar, Folder } from "lucide-react";
import { getNewsItemBySlug } from "@/lib/data";
import Gallery from "@/components/Gallery";

export default async function SingleNewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const formatTitle = (str: string) => {
    if (!str) return "News Details";
    return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  // If a predefined match is not found, fallback to auto-formatting
  const newsItem = getNewsItemBySlug(slug) || {
    title: formatTitle(slug),
    date: "TODAY",
    category: "NEWS",
    image: "/missionaries.webp",
    excerpt: "This is a detailed update. You can expand on the specific details, add photo galleries, or provide the full text of the article right here.",
    gallery: [] as string[],
  };

  // Read gallery images from the public directory
  const galleryDir = path.join(process.cwd(), "public", "images", "news", slug);
  let galleryImages: string[] = [];

  try {
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      galleryImages = files
        .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map((file) => `/images/news/${slug}/${file}`);
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

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

        {newsItem.excerpt && (
          <div style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#f8fafc", borderLeft: `4px solid ${theme.colors.accent}`, borderRadius: "4px" }}>
            <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: "1.6", color: "#334155", fontStyle: "italic" }}>
              {newsItem.excerpt}
            </p>
          </div>
        )}

        {/* Render the gallery if images were found in the directory, falling back to data */}
        <Gallery images={galleryImages.length > 0 ? galleryImages : (newsItem.gallery || [])} title={newsItem.title} />
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
};
