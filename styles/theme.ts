export const theme = {
  colors: {
    primary: "#0A192F",    // Deep Navy
    accent: "#D7263D",     // Crimson Red
    background: "#F8F9FA", // Off-White
    surface: "#FFFFFF",    
    text: {
      main: "#333333",     
      muted: "#707070",    
      inverse: "#FFFFFF"   
    }
  },
  fonts: {
    body: "var(--font-sans)", // Added this to satisfy the Footer!
  },
  shadows: {
    card: "0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  learnMoreBtn: {
    backgroundColor: theme.colors.primary, // Updated to Navy
    color: "#fff",
    padding: "15px 35px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.85rem",
    display: "inline-flex",
    alignItems: "center",
    transition: "background 0.3s",
  },
  floatingBox: {
    position: "absolute" as const,
    top: "40px",
    left: "20px",
    // Uses your brand navy with 90% opacity for a professional overlay effect
    backgroundColor: "rgba(10, 25, 47, 0.9)", 
    padding: "40px",
    width: "320px",
    borderRadius: "4px",
    zIndex: 5,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)", // Added depth to match the hero
  },
};