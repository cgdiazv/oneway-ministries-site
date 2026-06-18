import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { theme } from "@/styles/theme";
import { ArrowLeft } from "lucide-react";
import { getMinistryItemBySlug, ministriesData } from "@/lib/data";
import MinistryDonateButton from "./MinistryDonateButton";
import Gallery from "../../../components/Gallery";

export async function generateStaticParams() {
  return ministriesData.map((ministry) => ({
    slug: ministry.id,
  }));
}

export default async function SingleProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = getMinistryItemBySlug(slug);

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

  // Read gallery images
  const galleryDir = path.join(process.cwd(), "public", "images", "ministries", slug);
  let galleryImages: string[] = [];

  try {
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      galleryImages = files
        .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map((file) => `/images/ministries/${slug}/${file}`);
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
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
          <div 
            className="ministry-content"
            style={styles.paragraph} 
            dangerouslySetInnerHTML={{ __html: ministry.fullDescription }} 
          />

          <Gallery images={galleryImages} title={ministry.title} />

          <MinistryDonateButton title={ministry.title} />
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
  }
};
