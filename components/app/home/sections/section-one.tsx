"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FeatureBar from "./featurebar";
import LightRays from "@/components/LightRays";
import DecryptedText from "@/components/DecryptedText";
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
        className="relative z-10 w-full max-w-7xl px-6 pt-32 md:pt-40 flex flex-col items-center text-center pointer-events-none pb-32 md:pb-48"
      >
        
        {/* BRANDING ROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          
          {/* BRANDING ROW */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-[#4285F4]" />
          <span className="font-sans uppercase tracking-[0.5em] text-[10px] text-neutral-500">
             <DecryptedText text="NIT Hamirpur Chapter" animateOn="view" speed={200} />
          </span>
          <div className="h-[1px] w-8 bg-[#4285F4]" />
        </div>
        </motion.div>

        {/* MAIN TITLE: Solid Colors */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex flex-col gap-0"
>
   <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] text-white">
    <DecryptedText text="Google Developer" animateOn="view" speed={80} /> <br />
    <DecryptedText text="GROUP NITH" animateOn="view" speed={80} /><span className="text-[#4285F4]">.</span>
  </h1>
</motion.div>

{/* SLOGAN: Clean and Minimalist */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.6 }}
  className="mt-10 font-sans font-light tracking-[0.2em] text-xs md:text-sm text-neutral-400 max-w-xl leading-relaxed uppercase opacity-80"
>
  <DecryptedText text="Where logic meets creativity. A student-led community" animateOn="view" speed={200} /> <br className="hidden md:block"/> 
  <DecryptedText text="A student-led community pushing the boundaries of technology." animateOn="view" speed={200} />
</motion.p>
      </motion.div>

      {/* 3. ATMOSPHERIC OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/30 z-[5]" />
      
      {/* FEATURE BAR: Anchored to bottom */}


    </motion.section>
  );
}

export default SectionOne;