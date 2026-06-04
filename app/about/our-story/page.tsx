"use client";

import React from "react";
import { theme } from "@/styles/theme";

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <h1 style={styles.heroHeadline}>Our Story</h1>
          <p style={styles.heroSubtext}>
            How One Way Ministries began and our journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.pageWrapper}>
        <div style={styles.container}>
          <section style={styles.section}>
            <div style={styles.contentLayout}>
              <div style={styles.innerContent}>
              
              {/* Introduction Paragraph - Styled as a Lead/Intro text */}
              <p style={styles.text}>
                In 2023, the board members of One Way Ministries began discussing the various 
                mission projects we had been pursuing individually throughout Colombia. Recognizing 
                the potential for greater impact, we decided to unite our efforts under a single 
                vision and established One Way as a 501(c)(3) nonprofit organization.
              </p>

              <div style={styles.divider} />

              {/* Section 1: Our Team & Roots */}
              <h2 style={styles.subTitle}>Our Team & Roots</h2>
              <p style={styles.sectionDescription}>
                Our board brings together deeply personal connections to Colombia:
              </p>
              
              {/* Feature/Icon List Items */}
              <div style={styles.iconListContainer}>
                {/* Item 1 */}
                <div style={styles.iconItemCard}>
                  <div style={styles.iconWrapper}>
                    <svg style={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={styles.cardItemTitle}>The Founders</h3>
                    <p style={styles.cardItemText}>Three of our current board members are Colombian-Americans—Ada Orozco, Bridman Alarca, and Yulih Alarca—while Robert Taylor is American.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div style={styles.iconItemCard}>
                  <div style={styles.iconWrapper}>
                    <svg style={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={styles.cardItemTitle}>A Shared Heart for Children</h3>
                    <p style={styles.cardItemText}>Both the Alarcas and the Taylors adopted children from Colombia. Through the adoption process and subsequent mission trips to local orphanages, they developed a profound, lifelong bond with the country.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div style={styles.iconItemCard}>
                  <div style={styles.iconWrapper}>
                    <svg style={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={styles.cardItemTitle}>Local Connections</h3>
                    <p style={styles.cardItemText}>The Alarcas and Ada connected with Juan Carlos Garcia of Shalom Church, who operates a vital homeless shelter named La Casa. Meanwhile, Robert went on several mission trips to Ambalema, developing a deep love for the-people of this remote village.</p>
                  </div>
                </div>
              </div>

              {/* Section 2: Expanding the Mission */}
              <h2 style={styles.subTitle}>Expanding the Mission</h2>
              
              {/* Highlight/Callout Paragraph block */}
              <div style={styles.calloutBlock}>
                <p style={styles.calloutText}>
                  During his trips to Ambalema, Robert built a strong relationship with Juan 
                  Sebastian Rodriguez Casas (Sebastian). The board approached Sebastian and his 
                  wife, Paula, to serve as our essential in-country coordinators. To further 
                  strengthen our foundation, we welcomed James and Johnnie Mclin as administrators 
                  and Dawn Franke as an advisor.
                </p>
              </div>
              
              <p style={styles.standardText}>
                With Sebastian coordinating on-the-ground searches, we began looking for other 
                faithful ministries to support. We started by partnering with eight ministries, 
                which quickly grew to nine. Today, in 2026, One Way Ministries proudly supports 
                11 separate ministries.
              </p>

              {/* Enhanced Interactive Call-to-Action Card */}
              <div style={styles.ctaCard}>
                <p style={styles.ctaCardText}>
                  Explore the rest of our website to learn more about these incredible ministries 
                  and how you can get involved.
                </p>
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
    maxWidth: "900px", 
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
    backgroundColor: "#f9f9f9" // Soft gray background instead of harsh white
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
    maxWidth: "1000px", 
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "40px",
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
  text: { 
    color: "#475569", 
    fontSize: "1.2rem", 
    lineHeight: "1.8", 
    maxWidth: "800px", 
    margin: "0 auto" 
  },
  leadText: { 
    color: "#334155", 
    fontSize: "1.35rem", // Larger text for introducing the story
    lineHeight: "1.7",
    fontWeight: 500
  },
  sectionDescription: {
    color: "#64748b",
    fontSize: "1.1rem",
    marginBottom: "24px"
  },
  standardText: { 
    color: "#475569", 
    fontSize: "1.1rem", 
    lineHeight: "1.8",
    marginBottom: "24px" 
  },
  /* Icon List Card Styles */
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
    backgroundColor: "#f1f5f9",
    padding: "20px",
    borderRadius: "12px",
  },
  iconWrapper: {
    backgroundColor: "#ffffff",
    color: theme.colors.primary,
    padding: "10px",
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
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#1e293b",
    marginBottom: "4px"
  },
  cardItemText: {
    fontSize: "1.05rem",
    lineHeight: "1.6",
    color: "#475569"
  },
  /* Callout Block Style */
  calloutBlock: {
    borderLeft: `4px solid ${theme.colors.primary}`,
    backgroundColor: "#f8fafc",
    padding: "20px 24px",
    borderRadius: "0 12px 12px 0",
    marginBottom: "24px"
  },
  calloutText: {
    color: "#334155",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    fontStyle: "italic" as const
  },
  /* Bottom CTA Banner Style */
  ctaCard: {
    backgroundColor: theme.colors.primary,
    padding: "24px",
    borderRadius: "12px",
    textAlign: "center" as const,
    marginTop: "50px",
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
  },
  ctaCardText: {
    color: theme.colors.text.inverse,
    fontSize: "1.15rem",
    fontWeight: 600,
    lineHeight: "1.5",
    margin: 0
  }
};