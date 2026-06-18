"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";

// Lista de miembros organizada
const boardMembers = [
  { name: "Bridman Alarca", role: "President", img: "bridman-alarca.webp" },
  { name: "Yulih Alarca", role: "Secretary", img: "yulih-alarca.webp" },
  { name: "Ada Orozco", role: "Board Member", img: "ada-orozco.webp" },
  { name: "Robert Taylor", role: "Board Member", img: "robert-taylor.webp" },
  { name: "Johnnie Mclin", role: "Treasurer", img: "johnnie-mclin.webp" },
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
          <section style={styles.statementSection}>
            <p style={styles.text}>
              We are a non-profit Ministry that seeks to help those most in need by giving them Love and quality of life as JESUS would do. With your donations we support Foundations that work hand in hand with us to fulfill our Vision.
            </p>
            <blockquote style={styles.quote}>
              “And the King will answer and say to them: Truly I say to you, in as much as you did it to one of the least of these my brothers, you did it to me”. (Mt 25;40)
            </blockquote>

            <h2 style={styles.subTitle}>One Way Ministries International Statement of Faith and Purpose</h2>
            <div style={styles.leftAlignText}>
              <p style={{...styles.text, marginBottom: "20px"}}>
                The members of One Way Ministries International strive to follow Jesus and do what He did in these areas: sharing the Gospel and assisting our partner organizations as they do the same, aligning our lives with those outside of the Church, and providing assistance to orphans and the destitute.
              </p>
              <p style={{...styles.text, marginBottom: "30px"}}>
                We also want to promote cooperation between partner organizations.
              </p>

              <ul style={styles.beliefList}>
                <li><strong>WE BELIEVE</strong> the Bible to be the inspired, the only infallible, authoritative Word of God.</li>
                <li><strong>WE BELIEVE</strong> that there is one God, eternally existent in three persons: Father, Son and Holy Spirit.</li>
                <li><strong>WE BELIEVE</strong> in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His atoning death on the cross, in his bodily resurrection, in His ascension to the right hand of God, and in His personal return in power and glory.</li>
                <li><strong>WE BELIEVE</strong> that for the salvation of lost and sinful people, regeneration by the Holy Spirit is absolutely essential. This salvation can only be obtained through the grace of God by faith, not by works. Good works are those things we do to live our lives as Jesus did: they do not save us!</li>
                <li><strong>WE BELIEVE</strong> that the indwelling of the Holy Spirit allows followers of Jesus to unify and live a Godly life.</li>
                <li><strong>WE BELIEVE</strong> in the resurrection of both the saved and the lost; they that are saved unto the resurrection of life and they that are lost unto the resurrection of damnation.</li>
              </ul>
            </div>
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
    padding: "50px 20px 50px",
    textAlign: "center" as const,
  },
  heroContainer: { maxWidth: "900px", margin: "0 auto" },
  heroHeadline: { color: theme.colors.text.inverse, fontSize: "3.5rem", fontWeight: 800, marginBottom: "20px" },
  heroSubtext: { color: theme.colors.text.inverse, fontSize: "1.2rem", opacity: 0.9, fontWeight: 300 },

  // Content Styles
  pageWrapper: { padding: "80px 20px", backgroundColor: "#f9f9f9" },
  container: { maxWidth: "1000px", margin: "0 auto" },
  section: { marginBottom: "80px", textAlign: "center" as const },
  statementSection: { marginBottom: "80px", textAlign: "center" as const, backgroundColor: "#fff", padding: "40px", borderRadius: "12px" },
  subTitle: { color: theme.colors.primary, fontSize: "2.2rem", marginBottom: "25px", fontWeight: 700 },
  text: { color: "#475569", fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" },
  leftAlignText: { textAlign: "left" as const, maxWidth: "800px", margin: "0 auto" },
  quote: { 
    fontSize: "1.3rem", 
    fontStyle: "italic", 
    color: theme.colors.accent, 
    borderLeft: `4px solid ${theme.colors.accent}`,
    padding: "20px",
    margin: "40px auto",
    maxWidth: "800px",
    backgroundColor: "#f1f5f9",
    borderRadius: "4px"
  },
  beliefList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    color: "#475569",
    fontSize: "1.1rem",
    lineHeight: "1.8",
  },
  
  // Board Member Styles
  memberCard: {
  backgroundColor: "#fff",
  padding: "24px",
  borderRadius: "20px", // Bordes más suaves
  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", // Sombra más natural
  transition: "transform 0.3s ease",
  textAlign: "center" as const,
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