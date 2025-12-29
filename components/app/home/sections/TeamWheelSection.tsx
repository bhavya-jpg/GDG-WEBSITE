"use client";
import React, { useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Placeholder photos - Replace these with your actual member images
const members = [
  { id: 1, src: "/member1.avif" },
  { id: 2, src: "/member2.avif" },
  { id: 3, src: "/member3.avif" },
  { id: 4, src: "/member4.avif" },
  { id: 5, src: "/member5.avif" },
  { id: 6, src: "/member6.avif" },
  { id: 7, src: "/member7.avif" },
  { id: 8, src: "/member8.avif" },
];

export default function TeamWheelSection() {
  const [rotation, setRotation] = useState(0);

  // This creates the continuous slow rotation
  useAnimationFrame((t) => {
    setRotation(t * 0.02); // Adjust speed here
  });

  return (
    <motion.section className="relative w-full py-32 bg-background overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">
      
      {/* 1. HEADING */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-serif italic text-5xl md:text-7xl text-foreground mb-24 z-10"
      >
        Meet our team
      </motion.h2>

      {/* 2. THE 3D WHEEL CONTAINER */}
      <div className="relative h-[400px] w-full flex items-center justify-center [perspective:1200px]">
        
        {/* CENTER GLOW (Google Colors Mix) */}
        <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />

        <motion.div
          className="relative w-48 h-64 [transform-style:preserve-3d]"
          style={{ rotateY: rotation }}
        >
          {members.map((member, index) => {
            const angle = (index / members.length) * 360;
            return (
              <div
                key={member.id}
                className="absolute inset-0 [backface-visibility:hidden]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(300px)`, // 300px is the radius of the wheel
                }}
              >
                {/* THE CARD */}
                <div className="w-full h-full rounded-2xl overflow-hidden border-[3px] border-white/20 dark:border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-110 hover:border-[#4285F4]">
                  <Image
                    src={member.src}
                    alt="Team Member"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 3. NAVIGATION BUTTON */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-24 z-10"
      >
        <Link href="/team">
          <button className="group relative px-10 py-4 bg-foreground text-background rounded-full font-sans font-bold text-lg flex items-center gap-3 overflow-hidden transition-all hover:pr-14">
            View Full Team
            <ArrowRight size={20} className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all" />
            
            {/* Subtle Google accent border on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] flex opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex-1 bg-[#4285F4]" />
                <div className="flex-1 bg-[#EA4335]" />
                <div className="flex-1 bg-[#FBBC04]" />
                <div className="flex-1 bg-[#34A853]" />
            </div>
          </button>
        </Link>
      </motion.div>

    </motion.section>
  );
}