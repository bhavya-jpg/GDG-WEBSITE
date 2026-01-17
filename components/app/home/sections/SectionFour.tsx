"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SectionFour() {
  const containerRef = useRef(null);

  // 1. Setup Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 2. Define Parallax Transforms
  // Background moves at a slower pace
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Text content drift
  const textY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  // Gallery Parallax: Opposite directions for depth
  const imgMainY = useTransform(scrollYProgress, [0, 1], [60, -60]); // Drifts Up
  const imgDecorY = useTransform(scrollYProgress, [0, 1], [-80, 80]); // Drifts Down faster
  const imgFadedY = useTransform(scrollYProgress, [0, 1], [20, -20]); // Slow drift

  // Red Glow scale
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.2, 0.9]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500 bg-background"
    >
      
      {/* 1. PARALLAX BACKGROUND */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/event1.jpg" // Replace with workshop specific bg if available
          fill
          alt="Workshops Background"
          className="object-cover opacity-30 dark:opacity-20"
        />
        {/* Gradients for section blending and readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center py-32">
        
        {/* 2. LEFT SIDE: MULTI-SPEED GALLERY (Images) */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[650px] order-2 md:order-1">
          
          {/* Animated Background Glow (Google Red) */}
          <motion.div 
            style={{ scale: glowScale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#EA4335]/15 rounded-full blur-[120px] z-0" 
          />

          {/* Faded Background Card (Top-Right - Slowest) */}
          <motion.div 
            style={{ y: imgFadedY }}
            className="absolute z-10 -top-12 -right-4 w-1/3 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10 opacity-30 blur-[2px]"
          >
            <Image src="/event2.jpg" fill className="object-cover" alt="Workshop atmosphere" />
          </motion.div>

          {/* Main Card (Center-Right - Medium Speed) */}
          <motion.div 
            style={{ y: imgMainY }}
            className="relative z-20 w-3/4 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-[6px] border-white dark:border-neutral-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/event1.jpg"
              fill
              className="object-cover"
              alt="Workshop Main Session"
            />
          </motion.div>

          {/* Decorative Foreground Card (Bottom-Left - Fastest Speed) */}
          <motion.div 
            style={{ y: imgDecorY }}
            className="absolute z-30 -bottom-10 -left-4 md:-left-16 w-1/2 aspect-square rounded-[2rem] overflow-hidden border-4 border-white/40 dark:border-neutral-700/50 backdrop-blur-xl shadow-2xl transition-all"
          >
            <Image
              src="/event2.jpg"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Hands-on coding"
            />
            {/* Glossy Reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* 3. RIGHT SIDE: CONTENT (Drifting Text) */}
        <motion.div 
          style={{ y: textY }}
          className="flex flex-col gap-8 order-1 md:order-2 text-right md:text-left"
        >
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif italic text-6xl md:text-8xl text-foreground tracking-tight"
            >
              Workshops
            </motion.h2>
            <div className="h-1.5 w-24 bg-[#EA4335] rounded-full ml-auto md:ml-0" />
          </div>

          <p className="text-muted-foreground font-sans text-lg md:text-xl leading-relaxed max-w-xl ml-auto md:ml-0">
            Dive deep into the latest technologies through our hands-on workshops. 
            From mastering <span className="text-[#EA4335] font-semibold">Cloud Architecture</span> to 
            building cross-platform apps with <span className="text-[#4285F4] font-semibold">Flutter</span>, 
            we bridge the gap between theory and real-world implementation.
          </p>

          <div className="flex justify-end md:justify-start">
            <button className="group w-fit bg-[#EA4335] text-white px-10 py-4 rounded-full font-sans font-bold flex items-center gap-3 hover:bg-neutral-900 dark:hover:bg-white dark:hover:text-black transition-all duration-500 shadow-xl shadow-[#EA4335]/20">
              Explore Now 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* TOP REVEAL DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EA4335]/30 to-transparent" />
    </motion.section>
  );
}