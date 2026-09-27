"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { theme } from "@/styles/theme";
import Gallery from "../../../components/Gallery";
import MinistryDonateButton from "./MinistryDonateButton";

interface MinistryProps {
  slug: string;
  initialMinistry: {
    id: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    fullDescription: string;
    image: string;
    link: string;
  };
  initialGalleryImages: string[];
}

export default function SingleMinistryClient({
  slug,
  initialMinistry,
  initialGalleryImages,
}: MinistryProps) {
  const [ministry, setMinistry] = useState(initialMinistry);
  const [galleryImages, setGalleryImages] = useState<string[]>(initialGalleryImages);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`oneway_page_content_/ministries/${slug}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        const bannerSec = parsed.sections?.find((s: { id: string }) => s.id === "banner");
        const contentSec = parsed.sections?.find((s: { id: string }) => s.id === "content");
        const gallerySec = parsed.sections?.find((s: { id: string }) => s.id === "gallery");

        const customTitle = bannerSec?.fields?.find((f: { id: string }) => f.id === "title")?.value;
        const customImage = bannerSec?.fields?.find((f: { id: string }) => f.id === "image")?.value;
        const customDescription = contentSec?.fields?.find((f: { id: string }) => f.id === "description")?.value;

        setMinistry((prev) => ({
          ...prev,
          title: customTitle || prev.title,
          image: customImage || prev.image,
          fullDescription: customDescription
            ? customDescription.includes("<p>")
              ? customDescription
              : `<p>${customDescription.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br/>")}</p>`
            : prev.fullDescription,
        }));

        if (gallerySec?.fields && gallerySec.fields.length > 0) {
          const imgs = gallerySec.fields
            .map((f: { value: string }) => f.value)
            .filter((v: string) => typeof v === "string" && v.trim().length > 0);
          if (imgs.length > 0) {
            setGalleryImages(imgs);
          }
        }
      }
    } catch (e) {
      console.error("Error loading saved ministry content:", e);
    }
  }, [slug]);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <Link href="/ministries" style={styles.backButton}>
          <ArrowLeft size={16} style={{ marginRight: "8px" }} /> Back to Ministries
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
  },
};
