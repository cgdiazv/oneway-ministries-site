import React from "react";
import { theme } from "@/styles/theme";

export default function ContactPage() {
  return (
    <div style={{ padding: "120px 20px", textAlign: "center", minHeight: "60vh", backgroundColor: "#f7f7f7" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ color: theme.colors.primary, fontSize: "3rem", marginBottom: "20px", fontWeight: 800 }}>Contact Us</h1>
        <p style={{ color: "#555", fontSize: "1.2rem", lineHeight: "1.8" }}>
          This is a placeholder for your new Contact Us page. We can start adding a contact form, phone numbers, and location details here next!
        </p>
      </div>
    </div>
  );
}