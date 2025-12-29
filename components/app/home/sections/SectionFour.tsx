"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SectionFour() {
  return (
    <motion.section className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden transition-colors duration-500 bg-background">
      
      {/* 1. BACKGROUND IMAGE WITH DARK GRADIENT */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/event1.jpg" // Replace with your workshop/classroom photo
          fill
          alt="Workshops Background"
          className="object-cover opacity-40 dark:opacity-30"
        />
        {/* Gradient to make text pop and transition between sections */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center py-24">
        
        {/* 2. LEFT SIDE: STACKED IMAGE GALLERY */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[550px] order-2 md:order-1">
          
          {/* Background Glow (Google Red) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#EA4335]/10 rounded-full blur-[120px] z-0" />

          {/* Main Card (Center-Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-20 w-3/4 aspect-[4/5] rounded-3xl overflow-hidden border-[6px] border-white dark:border-neutral-800 shadow-2xl"
          >
            <Image
              src="/event1.jpg" // Main speaker photo
              fill
              className="object-cover"
              alt="Main Workshop"
            />
          </motion.div>

          {/* Decorative Card (Bottom-Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute z-30 -bottom-6 -left-4 md:-left-12 w-1/2 aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl"
          >
            <Image
              src="/event2.jpg" // Close-up of laptop/coding
              fill
              className="object-cover"
              alt="Hands-on Workshop"
            />
          </motion.div>

          {/* Faded Background Card (Top-Right) */}
          <motion.div 
            className="absolute z-10 -top-8 -right-4 w-1/3 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/20 opacity-40 blur-[2px]"
          >
            <Image src="/event2.jpg" fill className="object-cover" alt="Background event" />
          </motion.div>
        </div>

        {/* 3. RIGHT SIDE: CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 order-1 md:order-2 text-right md:text-left"
        >
          <h2 className="font-serif italic text-6xl md:text-8xl text-foreground tracking-tight">
            Workshops
          </h2>
          <p className="text-muted-foreground font-sans text-lg md:text-xl leading-relaxed max-w-xl ml-auto md:ml-0">
            Dive deep into the latest technologies through our hands-on workshops. 
            From mastering <span className="text-[#EA4335] font-medium">Cloud Architecture</span> to 
            building cross-platform apps with <span className="text-[#4285F4] font-medium">Flutter</span>, 
            we bridge the gap between theory and real-world implementation.
          </p>

          <div className="flex justify-end md:justify-start">
            <button className="group w-fit bg-[#EA4335] text-white px-8 py-4 rounded-full font-sans font-bold flex items-center gap-3 hover:bg-neutral-900 dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-lg shadow-red-500/20">
              Explore Now 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* REVEAL DIVIDER (Google Red) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EA4335]/30 to-transparent" />
    </motion.section>
  );
}