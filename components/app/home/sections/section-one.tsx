"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CTA_Button from "../cta-button";
import FeatureBar from "./featurebar";

function SectionOne() {
  useEffect(() => {
    // 1. Check if script is already there to avoid duplicates
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          // @ts-ignore
          UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (window.UnicornStudio.isInitialized) {
      // @ts-ignore
      UnicornStudio.init();
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
        {/* BRANDING ROW: Multi-color accent line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          {/* A 4-color Google gradient line */}
          <div className="h-[2px] w-12 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04]" />
          <span className="font-sans uppercase tracking-[0.5em] text-[10px] md:text-xs text-neutral-400 font-light">
            NIT Hamirpur Chapter <span className="mx-2 text-neutral-700">—</span> 
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">D</span>
            <span className="text-[#FBBC04]">G</span> Ludhiana
          </span>
        </motion.div>

        {/* MAIN TITLE: Sophisticated Color Shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-0"
        >
          <h1 className="font-serif italic text-5xl md:text-8xl lg:text-9xl 
                         tracking-tight leading-[0.9] text-white">
            {/* Soft gradient across 'Google Developer Group' */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] brightness-125">
              Google Developer
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FBBC04] to-[#34A853] brightness-125">
              Group
            </span>{" "}
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">NITH</span>
          </h1>
        </motion.div>

        {/* SLOGAN: Highlighting Logic and Creativity with specific colors */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-10 font-sans font-light tracking-[0.15em] text-sm md:text-lg text-neutral-500 max-w-2xl leading-relaxed"
        >
          Where <span className="text-[#4285F4] font-medium">logic</span> meets{" "}
          <span className="text-[#34A853] font-medium">creativity</span>. 
          A student-led community pushing the boundaries of technology 
          and innovation, officially recognized under the{" "}
          <span className="inline-flex font-medium">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">D</span>
            <span className="text-[#FBBC04]">G</span>
            <span className="text-neutral-300 ml-1 italic">Ludhiana</span>
          </span> umbrella.
        </motion.p>

        {/* ACTIONS */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 flex flex-row gap-6 pointer-events-auto"
        > */}
          {/* <CTA_Button />
          <button className="px-10 py-3 rounded-full border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all backdrop-blur-sm bg-white/[0.02]">
            Learn More
          </button> */}
        {/* </motion.div> */}
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