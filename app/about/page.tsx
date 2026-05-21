"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";

// Lista de miembros organizada
const boardMembers = [
  { name: "Bridman Alarca", role: "President", img: "bridman-alarca.webp" },
  { name: "Johnnie Mclin", role: "Treasurer", img: "johnnie-mclin.webp" },
  { name: "Ada Orozco", role: "Board Member", img: "ada-orozco.webp" },
  { name: "Yulih Alarca", role: "Secretary", img: "yulih-alarca.webp" },
  { name: "Robert Taylor", role: "Board Member", img: "robert-taylor.webp" },
  { name: "Dawn Franke", role: "Advisory Board Member", img: "dawn-franke.webp" },
  { name: "Sebastian Rodriguez", role: "In-Country Coordinator", img: "sebastian-rodriguez.webp" },
  { name: "Paula Alvarez", role: "In-Country Coordinator", img: "paula-alvarez.webp" },
];

export default function AboutPage() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <div style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <h1 style={styles.heroHeadline}>About Us</h1>
          <p style={styles.heroSubtext}>
            Restoring hope in Colombia through faith and action.
          </p>
        </div>
      </div>

      {/* --- CONTENT WRAPPER --- */}
      <div style={styles.pageWrapper}>
        <div style={styles.container}>
          
          <section style={styles.section}>
            <h2 style={styles.subTitle}>Our Story</h2>
            <p style={styles.text}>[Your story here...]</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subTitle}>Our Vision</h2>
            <p style={styles.text}>[Your vision here...]</p>
          </section>

          {/* --- BOARD MEMBERS SECTION --- */}
          <section style={styles.section}>
            <h2 style={styles.subTitle}>Board Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-10">
              {boardMembers.map((member, index) => (
                <div key={index} style={styles.memberCard}>
                  <div style={styles.imageWrapper}>
                    <Image 
                      src={`/images/board-members/${member.img}`} 
                      alt={member.name} 
                      fill 
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                  <h3 style={styles.memberName}>{member.name}</h3>
                  <p style={styles.memberRole}>{member.role}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

const styles = {
  // Hero Styles
  heroSection: {
    backgroundColor: theme.colors.primary,
    padding: "100px 20px 60px",
    textAlign: "center" as const,
  },
  heroContainer: { maxWidth: "900px", margin: "0 auto" },
  heroHeadline: { color: theme.colors.text.inverse, fontSize: "3.5rem", fontWeight: 800, marginBottom: "20px" },
  heroSubtext: { color: theme.colors.text.inverse, fontSize: "1.2rem", opacity: 0.9, fontWeight: 300 },

  // Content Styles
  pageWrapper: { padding: "80px 20px", backgroundColor: "#fff" },
  container: { maxWidth: "1000px", margin: "0 auto" },
  section: { marginBottom: "80px", textAlign: "center" as const },
  subTitle: { color: theme.colors.primary, fontSize: "2.2rem", marginBottom: "25px", fontWeight: 700 },
  text: { color: "#475569", fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" },
  
  // Board Member Styles
  memberCard: {
    backgroundColor: "#f9fafb",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
  },
  imageWrapper: {
    position: "relative" as const,
    width: "100%",
    height: "200px",
    marginBottom: "15px",
    borderRadius: "8px",
    overflow: "hidden",
  },
  memberName: { fontSize: "1.1rem", fontWeight: 700, color: theme.colors.primary, margin: "10px 0 5px" },
  memberRole: { fontSize: "0.9rem", color: "#64748b", margin: 0, fontWeight: 500 },
};