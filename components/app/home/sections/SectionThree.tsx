"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const eventImages = [
  { src: "/event1.jpg", alt: "Auditorium Event" },
  { src: "/event2.jpg", alt: "Speaker Session" },
  { src: "/event3.jpg", alt: "Hackathon" },
];

export default function SectionThree() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE WITH DARK OVERLAY */}
      <div className="absolute inset-0 z-0">
              <Image
                src="/event1.jpg" // High-tech code or typing photo
                fill
                alt="Projects Background"
                className="object-cover opacity-30 dark:opacity-20"
              />
              {/* Darkening Gradients for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        
        {/* 2. LEFT SIDE: CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-serif italic text-6xl md:text-8xl text-white tracking-tight">
            Events
          </h2>
          <p className="text-neutral-300 font-sans text-lg md:text-xl max-w-lg leading-relaxed">
            At GDG, we host events that bring developers, designers, and tech enthusiasts 
            together to learn, build, and grow. From hands-on workshops to large-scale 
            hackathons and project challenges.
          </p>

          <button className="group mt-4 w-fit bg-white text-black px-8 py-4 rounded-full font-sans font-bold flex items-center gap-3 hover:bg-[#4285F4] hover:text-white transition-all duration-300">
            Explore Now 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* 3. RIGHT SIDE: FLOATING GALLERY */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
          
          {/* Main Featured Image (Centered) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-20 w-3/4 aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white shadow-2xl"
          >
            <Image
              src="/event1.jpg"
              fill
              className="object-cover"
              alt="Main Event"
            />
          </motion.div>

          {/* Secondary Floating Image (Right Offset) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute z-10 -right-4 md:-right-10 w-1/2 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white/20 blur-[1px] hover:blur-0 transition-all cursor-pointer opacity-60 md:opacity-100"
          >
            <Image
              src="/event2.jpg"
              fill
              className="object-cover"
              alt="Secondary Event"
            />
          </motion.div>

          {/* Background Decorative "Classic Google" Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#4285F4]/10 rounded-full blur-[100px] z-0" />
        </div>

      </div>

      {/* BOTTOM TRANSITION LINE (Google Colors) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[4px] flex z-30">
        <div className="flex-1 bg-[#4285F4]" />
        <div className="flex-1 bg-[#EA4335]" />
        <div className="flex-1 bg-[#FBBC04]" />
        <div className="flex-1 bg-[#34A853]" />
      </div> */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EA4335]/30 to-transparent" />
    </section>
  );
}