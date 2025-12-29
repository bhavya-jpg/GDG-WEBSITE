"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CTA_Button from "../cta-button";
import FeatureBar from "./featurebar";
// This tells TypeScript that 'window' is allowed to have UnicornStudio on it
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

function SectionOne() {
  useEffect(() => {
    // We cast window to 'any' to bypass the strict property checks
    const win = window as any;

    if (!win.UnicornStudio) {
      // 1. Initialize the object safely
      win.UnicornStudio = { isInitialized: false };
      
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
      script.onload = () => {
        // 2. Safely call init if it exists after script loads
        if (win.UnicornStudio && !win.UnicornStudio.isInitialized) {
          if (typeof win.UnicornStudio.init === "function") {
            win.UnicornStudio.init();
          }
          win.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (win.UnicornStudio.isInitialized) {
      // 3. Re-run init on navigation if available
      if (typeof win.UnicornStudio.init === "function") {
        win.UnicornStudio.init();
      }
    }
  }, []);
  return (
    <motion.section 
      className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#030303] pt-0" 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      
      {/* 1. UNICORN STUDIO BACKGROUND */}
      <div className="absolute inset-0 z-0 w-full h-full opacity-60">
        <div 
          data-us-project="ZCLsq1iuzCBMfCHcjLaB" 
          style={{ width: '100%', height: '100%' }}
        ></div>
      </div>

      {/* 2. TEXT CONTENT (Shifted down) */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 pt-32 md:pt-40 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-none">
        
        {/* BRANDING ROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          {/* Solid Google Blue Line - Keeps it professional */}
          <div className="h-[2px] w-12 bg-[#4285F4]" />
          <span className="font-sans uppercase tracking-[0.5em] text-[10px] md:text-xs text-neutral-400 font-light">
            NIT Hamirpur Chapter <span className="mx-2 text-neutral-700">—</span> 
            <span className="text-[#4285F4] font-medium">GDG</span> Ludhiana
          </span>
        </motion.div>

        {/* MAIN TITLE: Solid Colors, High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-0"
        >
          <h1 className="font-serif italic text-5xl md:text-8xl lg:text-9xl 
                         tracking-tight leading-[0.9] text-white">
            {/* Using Solid Google Blue and Red for the main brand */}
            <span className="text-[#4285F4]">Google</span>{" "}
            <span className="text-[#EA4335]">Developer</span>
            <br />
            {/* Using Solid Google Yellow for 'Group' and White for 'NITH' */}
            <span className="text-[#FBBC04]">Group</span>{" "}
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">NITH</span>
          </h1>
        </motion.div>

        {/* SLOGAN: Subtle solid accents */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-10 font-sans font-light tracking-[0.15em] text-sm md:text-lg text-neutral-500 max-w-2xl leading-relaxed"
        >
          Where <span className="text-[#4285F4] font-medium border-b border-[#4285F4]/30">logic</span> meets{" "}
          <span className="text-[#34A853] font-medium border-b border-[#34A853]/30">creativity</span>. 
          A student-led community pushing the boundaries of technology 
          and innovation, officially recognized under the{" "}
          <span className="inline-flex font-medium">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">D</span>
            <span className="text-[#FBBC04]">G</span>
            <span className="text-neutral-300 ml-1 italic">Ludhiana</span>
          </span> umbrella.
        </motion.p>
</div>

      {/* 3. ATMOSPHERIC VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 w-full z-30">
        <FeatureBar />
      </div>

      {/* 3. OPTIONAL: Add a small dark gradient just above the bar 
          to make the transition even smoother */}
      <div className="absolute bottom-full left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-[#030303] to-transparent z-20" />

    </motion.section>
  );
}

export default SectionOne;