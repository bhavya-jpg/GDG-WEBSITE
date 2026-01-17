"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SectionThree() {
  const containerRef = useRef(null);

  // 1. Setup Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 2. Define Layered Parallax Transforms
  // Background image subtle scale and drift
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  // Left Content drift
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Main Image (Center) drifts Up
  const imgMainY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  // Secondary Image (Right) drifts Down (creates a "shear" effect)
  const imgSecY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Background Glow pulse/scale
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-background transition-colors duration-500"
    >
      
      {/* 1. PARALLAX BACKGROUND LAYER */}
      <motion.div 
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/event1.jpg"
          fill
          alt="Events Background"
          className="object-cover opacity-40 dark:opacity-25"
        />
        {/* Readability Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center py-32">
        
        {/* 2. LEFT SIDE: CONTENT (Drifting) */}
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
              Events
            </motion.h2>
            <div className="h-1 w-20 bg-[#4285F4] rounded-full" />
          </div>

          <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-lg leading-relaxed">
            At GDG, we host events that bring developers, designers, and tech enthusiasts 
            together to learn, build, and grow. From hands-on workshops to large-scale 
            hackathons and project challenges.
          </p>

          <button className="group mt-4 w-fit bg-foreground text-background px-10 py-4 rounded-full font-sans font-bold flex items-center gap-3 hover:bg-[#4285F4] hover:text-white transition-all duration-500 shadow-xl shadow-[#4285F4]/10">
            Explore Now 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* 3. RIGHT SIDE: MULTI-SPEED FLOATING GALLERY */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[650px]">
          
          {/* Background Decorative Glow (Animated by Scroll) */}
          <motion.div 
            style={{ scale: glowScale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#4285F4]/15 rounded-full blur-[120px] z-0" 
          />

          {/* Main Featured Image (Drifts Up) */}
          <motion.div 
            style={{ y: imgMainY }}
            className="relative z-20 w-3/4 aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] border-white dark:border-neutral-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-colors duration-500"
          >
            <Image
              src="/event1.jpg"
              fill
              className="object-cover"
              alt="Main Event"
            />
          </motion.div>

          {/* Secondary Floating Image (Drifts Down - Faster) */}
          <motion.div 
            style={{ y: imgSecY }}
            className="absolute z-30 -right-4 md:-right-12 w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/30 dark:border-neutral-700/50 backdrop-blur-md shadow-2xl transition-all"
          >
            <Image
              src="/event2.jpg"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Secondary Event"
            />
            {/* Glossy overlay for the secondary card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </motion.div>

        </div>

      </div>

      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4285F4]/30 to-transparent" />
    </motion.section>
  );
}