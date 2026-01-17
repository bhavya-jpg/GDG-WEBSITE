"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FeatureBar from "./featurebar";
import LightRays from "@/components/LightRays";
 // Ensure path is correct

function SectionOne() {
  const containerRef = useRef(null);

  // 1. SETUP SCROLL PROGRESS TRACKING
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. DEFINE PARALLAX TRANSFORMATION VALUES
  // Background rays scale slightly as we scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  // Text moves up faster (creating depth)
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  // Text fades out
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] flex flex-col items-center overflow-hidden bg-[#030303]" 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      
      {/* 1. LIGHT RAYS BACKGROUND LAYER (Animated with Scale Parallax) */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
      </motion.div>

      {/* 2. TEXT CONTENT LAYER (Shifted with Parallax) */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-7xl px-6 md:px-12 pt-32 md:pt-40 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-none"
      >
        
        {/* BRANDING ROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-[2px] w-12 bg-[#4285F4]" />
          <span className="font-sans uppercase tracking-[0.5em] text-[10px] md:text-xs text-neutral-400 font-light">
            NIT Hamirpur Chapter <span className="mx-2 text-neutral-700">—</span> 
            <span className="text-[#4285F4] font-medium">GDG</span> Ludhiana
          </span>
        </motion.div>

        {/* MAIN TITLE: Solid Colors */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex flex-col gap-0"
>
  <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl 
                 tracking-tight leading-[0.85] text-white selection:bg-[#4285F4]">
    {/* Clean White with a very subtle vertical depth gradient */}
    <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
      Google Developer
    </span>
    <br />
    <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
      Group
    </span>{" "}
    <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
      NITH
      <span className="text-[#4285F4]">.</span> {/* The only colored 'dot' accent */}
    </span>
  </h1>
</motion.div>

{/* SLOGAN: Clean and Minimalist */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.6 }}
  className="mt-10 font-sans font-light tracking-[0.2em] text-xs md:text-sm text-neutral-400 max-w-xl leading-relaxed uppercase opacity-80"
>
  Where logic meets creativity. A student-led community <br className="hidden md:block"/> 
  pushing the boundaries of technology at NIT Hamirpur.
</motion.p>
      </motion.div>

      {/* 3. ATMOSPHERIC OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/30 z-[5]" />
      
      {/* FEATURE BAR: Anchored to bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <FeatureBar />
      </div>

    </motion.section>
  );
}

export default SectionOne;