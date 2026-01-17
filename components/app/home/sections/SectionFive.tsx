"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SectionFive() {
  const containerRef = useRef(null);

  // 1. Setup Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 2. Define High-End Parallax Transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  
  // Text drift logic
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Gallery Layers (The "Shear" Effect)
  const imgMainY = useTransform(scrollYProgress, [0, 1], [-50, 50]);   // Drifts Up
  const imgSecY = useTransform(scrollYProgress, [0, 1], [100, -100]);  // Drifts Down (Faster)
  const imgDecorY = useTransform(scrollYProgress, [0, 1], [-30, 30]);  // Subtle drift

  // Visual Polish: Yellow Glow pulse
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.8]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500 bg-background"
    >
      
      {/* 1. PARALLAX BACKGROUND LAYER */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/tech-background.png" 
          fill
          alt="Projects Background"
          className="object-cover opacity-25 dark:opacity-15"
        />
        {/* Gradients for section continuity */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center py-32">
        
        {/* 2. LEFT SIDE: CONTENT (Drifting Text) */}
        <motion.div 
          style={{ y: textY }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif italic text-6xl md:text-8xl text-foreground tracking-tight"
            >
              Projects
            </motion.h2>
            <div className="h-1.5 w-24 bg-[#FBBC04] rounded-full" />
          </div>

          <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-lg leading-relaxed">
            At GDG, we believe in building for the community. Our members collaborate 
            on <span className="text-[#FBBC04] font-semibold">real-world solutions</span>, 
            ranging from mobile applications that solve local problems to 
            <span className="text-[#34A853] font-semibold border-b border-[#34A853]/30">open-source</span> contributions 
            that reach a global audience.
          </p>

          <button className="group mt-4 w-fit bg-[#FBBC04] text-black px-10 py-4 rounded-full font-sans font-bold flex items-center gap-3 hover:bg-neutral-900 dark:hover:bg-white dark:hover:text-black transition-all duration-500 shadow-xl shadow-[#FBBC04]/20">
            Explore Now 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* 3. RIGHT SIDE: MULTI-SPEED FLOATING GALLERY */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[650px]">
          
          {/* Animated Background Glow (Google Yellow) */}
          <motion.div 
            style={{ scale: glowScale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#FBBC04]/15 rounded-full blur-[120px] z-0" 
          />

          {/* Decorative Card (Bottom Left - Slow) */}
          <motion.div 
            style={{ y: imgDecorY }}
            className="absolute z-10 -bottom-12 -left-8 w-1/3 aspect-video rounded-2xl overflow-hidden border-2 border-white/10 opacity-30 blur-[2px]"
          >
            <Image src="/event2.jpg" fill className="object-cover" alt="Project detail" />
          </motion.div>

          {/* Main Card (Center - Medium Speed) */}
          <motion.div 
            style={{ y: imgMainY }}
            className="relative z-20 w-4/5 aspect-square rounded-[2.5rem] overflow-hidden border-[6px] border-white dark:border-neutral-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/event2.jpg"
              fill
              className="object-cover"
              alt="Main Project Showcase"
            />
          </motion.div>

          {/* Secondary Card (Offset Right - Fastest Speed) */}
          <motion.div 
            style={{ y: imgSecY }}
            className="absolute z-30 -right-6 md:-right-12 w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/40 dark:border-neutral-700/50 backdrop-blur-xl shadow-2xl transition-all"
          >
            <Image
              src="/event2.jpg"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Mobile Application Project"
            />
            {/* Glossy Reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
          </motion.div>

        </div>

      </div>

      {/* TOP REVEAL DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FBBC04]/30 to-transparent" />

      {/* FINAL TRANSITION TO FOOTER: The 4-Color Signature Line */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] flex z-30">
        <div className="flex-1 bg-[#4285F4]" />
        <div className="flex-1 bg-[#EA4335]" />
        <div className="flex-1 bg-[#FBBC04]" />
        <div className="flex-1 bg-[#34A853]" />
      </div>
    </motion.section>
  );
}