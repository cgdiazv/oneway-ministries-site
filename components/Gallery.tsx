"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { theme } from "@/styles/theme";

export default function Gallery({ images, title }: { images: string[], title: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <div style={styles.galleryWrapper}>
        <h3 style={styles.galleryTitle}>Photo Gallery</h3>
        <div style={styles.galleryGrid}>
          {images.map((src, index) => (
            <div 
              key={index} 
              style={styles.galleryImageContainer}
              onClick={() => openLightbox(index)}
              className="group"
            >
              <Image 
                src={src} 
                alt={`${title} gallery image ${index + 1}`} 
                fill 
                style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                className="group-hover:scale-105"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center absolute inset-0 bg-black/40">
                 <ZoomIn size={32} color="white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div style={styles.lightboxOverlay} onClick={closeLightbox}>
          <button style={styles.closeBtn} onClick={closeLightbox} aria-label="Close lightbox">
            <X size={32} color="white" />
          </button>
          
          <button style={styles.navBtnLeft} onClick={showPrev} aria-label="Previous image">
             <ChevronLeft size={48} color="white" />
          </button>
          
          <div style={styles.lightboxImageWrapper} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedIndex]}
              alt={`${title} gallery image ${selectedIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          <button style={styles.navBtnRight} onClick={showNext} aria-label="Next image">
             <ChevronRight size={48} color="white" />
          </button>
          
          <div style={styles.imageCounter}>
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  galleryWrapper: {
    marginTop: "50px",
    paddingTop: "30px",
    borderTop: "1px solid #e2e8f0",
  },
  galleryTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: theme.colors.primary,
    marginBottom: "20px",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
  },
  galleryImageContainer: {
    width: "100%",
    aspectRatio: "1 / 1",
    position: "relative" as const,
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#f1f5f9",
    cursor: "pointer",
  },
  lightboxOverlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute" as const,
    top: "20px",
    right: "30px",
    background: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 10000,
  },
  navBtnLeft: {
    position: "absolute" as const,
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 10000,
  },
  navBtnRight: {
    position: "absolute" as const,
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 10000,
  },
  lightboxImageWrapper: {
    position: "relative" as const,
    width: "90%",
    height: "85%",
    maxWidth: "1200px",
    maxHeight: "800px",
  },
  imageCounter: {
    position: "absolute" as const,
    bottom: "20px",
    color: "white",
    fontSize: "1rem",
    fontWeight: 500,
  }
};
