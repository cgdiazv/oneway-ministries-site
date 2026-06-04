"use client";

import React from "react";
import { theme } from "@/styles/theme";

export default function VisionMissionPage() {
  return (
    <>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <h1 style={styles.heroHeadline}>Vision & Mission</h1>
          <p style={styles.heroSubtext}>
            Standing alongside the Colombian Church to share Christ's love.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.pageWrapper}>
        <div style={styles.container}>
          <section style={styles.section}>
            <div style={styles.contentLayout}>
              <div style={styles.innerContent}>
              
              {/* Introduction/Core Identity Block */}
              <p style={styles.text}>
                One Way Ministries is a Colombian ministry run by Colombians and supported by 
                Americans. We partner with gospel-centric, Christ-following ministries across 
                Colombia, transcending specific denominational lines to focus entirely on the message of Jesus.
              </p>

              <div style={styles.divider} />

              {/* Section 1: Our Core Purpose */}
              <h2 style={styles.subTitle}>Our Mission</h2>
              <p style={styles.standardText}>
                Our primary goal is to stand alongside the Colombian Church—specifically helping local 
                believers build and sustain impactful ministries outside the walls of their respective churches. 
                We don't just watch from a distance; we are actively involved in these partner ministries through:
              </p>

              {/* Action Pillars Grid */}
              <div style={styles.gridContainer}>
                {["Prayer", "Promotion", "Financial Assistance", "Training", "Mission Trips"].map((pillar, index) => (
                  <div key={index} style={styles.pillarTag}>
                    <svg style={styles.pillarIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={styles.pillarText}>{pillar}</span>
                  </div>
                ))}
              </div>

              {/* Section 2: Our Heart & Divine Focus */}
              <h2 style={styles.subTitle}>Our Heart & Focus</h2>
              <p style={styles.standardText}>
                We are entirely sure of God’s deep, unwavering love for those who are often overlooked. 
                Because of this, our ministry holds a dedicated focus for:
              </p>

              {/* Focus Cards with Icons */}
              <div style={styles.iconListContainer}>
                <div style={styles.iconItemCard}>
                  <div style={styles.iconWrapper}>
                    <svg style={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={styles.cardItemTitle}>Compassion for the Vulnerable</h3>
                    <p style={styles.cardItemText}>
                      Serving orphans, widows, the poor, the hungry, and foreigners with practical, life-changing care.
                    </p>
                  </div>
                </div>

                <div style={styles.iconItemCard}>
                  <div style={styles.iconWrapper}>
                    <svg style={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={styles.cardItemTitle}>Sharing the Gospel</h3>
                    <p style={styles.cardItemText}>
                      Spreading the transformative Good News of Jesus Christ through every relationship and initiative.
                    </p>
                  </div>
                </div>
              </div>

              {/* Callout: Fluidity / Human Understanding */}
              <div style={styles.calloutBlock}>
                <p style={styles.calloutText}>
                  <strong>Remaining Fluid:</strong> Rather than forcing what we think needs to be done based on 
                  our limited human understanding, our focus is to remain completely open. We intentionally allow 
                  the Lord to continuously guide, direct, and refine our vision as we follow His lead.
                </p>
              </div>

              {/* Section 3: Foundational Scriptures */}
              <h2 style={styles.subTitle}>Foundational Scriptures</h2>
              <div style={styles.scriptureContainer}>
                {[
                  { ref: "Proverbs 19:21", text: "Many are the plans in a person’s heart, but it is the Lord’s purpose that prevails." },
                  { ref: "1 Peter 4:10", text: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace." },
                  { ref: "Acts 1:8", text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses... to the ends of the earth." },
                  { ref: "Acts 13:47", text: "I have made you a light for the Gentiles, that you may bring salvation to the ends of the earth." }
                ].map((scripture, index) => (
                  <div key={index} style={styles.scriptureCard}>
                    <span style={styles.scriptureRef}>{scripture.ref}</span>
                    <p style={styles.scriptureText}>"{scripture.text}"</p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const styles = {
  heroSection: {
    backgroundColor: theme.colors.primary,
    padding: "100px 20px 60px",
    textAlign: "center" as const,
  },
  heroContainer: { 
    maxWidth: "1100px", 
    margin: "0 auto" 
  },
  heroHeadline: { 
    color: theme.colors.text.inverse, 
    fontSize: "3.5rem", 
    fontWeight: 800, 
    marginBottom: "20px",
    letterSpacing: "-0.02em"
  },
  heroSubtext: { 
    color: theme.colors.text.inverse, 
    fontSize: "1.25rem", 
    opacity: 0.9, 
    fontWeight: 300 
  },
  pageWrapper: { 
    padding: "80px 20px", 
    backgroundColor: "#f8fafc" 
  },
  container: { 
    maxWidth: "1000px", 
    margin: "0 auto" 
  },
  section: { 
    marginBottom: "40px" 
  },
  contentLayout: { 
    textAlign: "left" as const, 
    maxWidth: "1000px", /* Full 1000px text presentation container width */
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "50px", /* Spacious, descriptive luxury padding frame */
    borderRadius: "16px",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)"
  },
  innerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e2e8f0",
    margin: "40px 0"
  },
  subTitle: { 
    color: theme.colors.primary, 
    fontSize: "2rem", 
    marginTop: "40px",
    marginBottom: "16px", 
    fontWeight: 700,
    letterSpacing: "-0.01em"
  },
  text: { 
    color: "#475569", 
    fontSize: "1.2rem", 
    lineHeight: "1.8", 
    maxWidth: "800px", 
    margin: "0 auto" 
  },
  leadText: { 
    color: "#334155", 
    fontSize: "1.35rem", 
    lineHeight: "1.7",
    fontWeight: 500
  },
  standardText: { 
    color: "#475569", 
    fontSize: "1.1rem", 
    lineHeight: "1.8",
    marginBottom: "24px" 
  },
  gridContainer: {
    display: "flex" as const,
    flexWrap: "wrap" as const,
    gap: "12px",
    marginBottom: "32px",
    marginTop: "16px"
  },
  pillarTag: {
    display: "flex" as const,
    alignItems: "center" as const,
    backgroundColor: "#f1f5f9",
    padding: "10px 18px",
    borderRadius: "30px",
    border: "1px solid #e2e8f0"
  },
  pillarIcon: {
    width: "16px",
    height: "16px",
    color: theme.colors.primary,
    marginRight: "8px",
    flexShrink: 0
  },
  pillarText: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#334155"
  },
  iconListContainer: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "20px",
    margin: "24px 0 40px 0"
  },
  iconItemCard: {
    display: "flex" as const,
    gap: "20px",
    alignItems: "flex-start" as const,
    backgroundColor: "#f8fafc",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid #f1f5f9"
  },
  iconWrapper: {
    backgroundColor: "#ffffff",
    color: theme.colors.primary,
    padding: "12px",
    borderRadius: "10px",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    flexShrink: 0
  },
  icon: {
    width: "24px",
    height: "24px"
  },
  cardItemTitle: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#1e293b",
    marginBottom: "6px"
  },
  cardItemText: {
    fontSize: "1.05rem",
    lineHeight: "1.6",
    color: "#475569"
  },
  calloutBlock: {
    borderLeft: `4px solid ${theme.colors.primary}`,
    backgroundColor: "#f0fdf4", 
    padding: "24px",
    borderRadius: "0 12px 12px 0",
    marginBottom: "40px",
    marginTop: "32px"
  },
  calloutText: {
    color: "#166534",
    fontSize: "1.1rem",
    lineHeight: "1.8"
  },
  scriptureContainer: {
    display: "grid" as const,
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },
  scriptureCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  },
  scriptureRef: {
    display: "block" as const,
    fontSize: "1rem",
    fontWeight: 700,
    color: theme.colors.primary,
    marginBottom: "10px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em"
  },
  scriptureText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#475569",
    fontStyle: "italic" as const,
    margin: 0
  }
};