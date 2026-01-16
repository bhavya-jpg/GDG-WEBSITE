// src/constants/theme.ts

export const COLORS = {
  google: {
    blue: "#4285F4",
    red: "#EA4335",
    yellow: "#FBBC04",
    green: "#34A853",
  },
  dark: {
    background: "#030303",
    surface: "#0a0a0a",
    border: "rgba(255, 255, 255, 0.1)",
    textPrimary: "#FFFFFF",
    textSecondary: "#A3A3A3", // neutral-400
  },
  light: {
    background: "#FFFFFF",
    surface: "#F5F5F5",
    border: "rgba(0, 0, 0, 0.1)",
    textPrimary: "#171717", // neutral-900
    textSecondary: "#525252", // neutral-600
  }
};

export const FONTS = {
  heading: "font-serif italic", // The classy serif you liked
  body: "font-sans",
  branding: "font-Exo",
};

export const ANIMATIONS = {
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Smooth Apple-style ease
  stagger: 0.1,
};