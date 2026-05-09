// Define colors first so they can be referenced below safely
const colors = {
  primary: "#0A192F",    // Deep Navy
  accent: "#D7263D",     // Crimson Red
  background: "#F8F9FA", // Off-White
  surface: "#FFFFFF",    
  text: {
    main: "#333333",     
    muted: "#707070",    
    inverse: "#FFFFFF"   
  }
};

export const theme = {
  colors,
  fonts: {
    body: "var(--font-sans)",
  },
  shadows: {
    card: "0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  // We keep component-specific logic here, but reference the local 'colors' constant
  learnMoreBtn: {
    backgroundColor: colors.primary, 
    color: "#fff",
    padding: "15px 35px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold" as const,
    fontSize: "0.85rem",
    display: "inline-flex" as const,
    alignItems: "center" as const,
    transition: "background 0.3s",
  },
  floatingBox: {
    position: "absolute" as const,
    top: "40px",
    left: "20px",
    backgroundColor: "rgba(10, 25, 47, 0.9)", 
    padding: "40px",
    width: "320px",
    borderRadius: "4px",
    zIndex: 5,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
};