import React from "react";
import { theme } from "@/styles/theme";

export default function NewsPage() {
  return (
    <div style={{ padding: "120px 20px", textAlign: "center", minHeight: "60vh", backgroundColor: "#f7f7f7" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ color: theme.colors.primary, fontSize: "3rem", marginBottom: "20px", fontWeight: 800 }}>Latest News</h1>
        <p style={{ color: "#555", fontSize: "1.2rem", lineHeight: "1.8" }}>
          This is a placeholder for your new News page. We can start adding recent updates, newsletters, and announcements here next!
        </p>
      </div>
    </div>
  );
}