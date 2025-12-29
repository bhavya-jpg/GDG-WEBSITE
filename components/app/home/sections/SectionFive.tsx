"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SectionFive() {
  return (
    <motion.section 
      className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden transition-colors duration-500 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      
      {/* 1. BACKGROUND IMAGE WITH DARK GRADIENT */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tech-background.png" // High-tech code or typing photo
          fill
          alt="Projects Background"
          className="object-cover opacity-30 dark:opacity-20"
        />
        {/* Darkening Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center py-24">
        
        {/* 2. LEFT SIDE: CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-serif italic text-6xl md:text-8xl text-foreground tracking-tight">
            Projects
          </h2>
          <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-lg leading-relaxed">
            At GDG, we believe in building for the community. Our members collaborate 
            on <span className="text-[#FBBC04] font-medium">real-world solutions</span>, 
            ranging from mobile applications that solve local problems to 
            <span className="text-[#34A853] font-medium">open-source</span> contributions 
            that reach a global audience.
          </p>

          <button className="group mt-4 w-fit bg-[#FBBC04] text-black px-8 py-4 rounded-full font-sans font-bold flex items-center gap-3 hover:bg-neutral-900 dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-lg shadow-yellow-500/20">
            Explore Now 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* 3. RIGHT SIDE: STACKED GALLERY */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
          
          {/* Background Glow (Google Yellow) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#FBBC04]/10 rounded-full blur-[100px] z-0" />

          {/* Main Card (Center) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-20 w-3/4 aspect-square rounded-3xl overflow-hidden border-[6px] border-white dark:border-neutral-800 shadow-2xl"
          >
            <Image
              src="/event2.jpg" // High-quality screenshot or project photo
              fill
              className="object-cover"
              alt="Main Project"
            />
          </motion.div>

          {/* Secondary Card (Offset Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute z-10 -right-4 md:-right-8 w-1/2 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white/20 blur-[1px] hover:blur-0 transition-all opacity-60 md:opacity-100 shadow-xl"
          >
            <Image
              src="/event2.jpg"
              fill
              className="object-cover"
              alt="Secondary Project"
            />
          </motion.div>

          {/* Faded Background Card (Bottom Left) */}
          <motion.div 
            className="absolute z-10 -bottom-10 -left-6 w-1/3 aspect-video rounded-2xl overflow-hidden border-2 border-white/10 opacity-30 blur-[2px]"
          >
            <Image src="/event2.jpg" fill className="object-cover" alt="Background deco" />
          </motion.div>
        </div>

      </div>

      {/* REVEAL DIVIDER (Google Yellow) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FBBC04]/30 to-transparent" />
      
      {/* FINAL TRANSITION TO FOOTER (The 4-color line) */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] flex z-30">
        <div className="flex-1 bg-[#4285F4]" />
        <div className="flex-1 bg-[#EA4335]" />
        <div className="flex-1 bg-[#FBBC04]" />
        <div className="flex-1 bg-[#34A853]" />
      </div>
    </motion.section>
  );
}