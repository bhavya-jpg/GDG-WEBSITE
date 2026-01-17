"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const members = [
  { id: 1, name: "COLIN", src: "/member1.jpg" },
  { id: 2, name: "LIAM", src: "/member2.jpg" },
  { id: 3, name: "TABITHA", src: "/member3.jpg" },
  { id: 4, name: "TYSON", src: "/member4.jpg" },
  { id: 5, name: "MAX", src: "/member5.jpg" },
  { id: 6, name: "EVEREST", src: "/member6.jpg" },
  { id: 7, name: "SIMON", src: "/member7.jpg" },
  { id: 8, name: "GIDEON", src: "/member8.jpg" },
];

export default function MirandaTeamSection() {
  // Track which member is hovered. null = "THE SQUAD" (default)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 bg-background flex flex-col items-center justify-center overflow-hidden transition-colors duration-500">
      
      {/* 1. TOP AVATAR ROW */}
      <div className="flex items-end justify-center gap-2 mb-12 h-32">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="relative cursor-pointer overflow-hidden rounded-md border border-white/10"
            initial={{ width: 60, height: 80 }}
            animate={{ 
              width: activeIndex === index ? 100 : 60,
              height: activeIndex === index ? 130 : 80,
              filter: activeIndex !== null && activeIndex !== index ? "grayscale(100%) blur(2px)" : "grayscale(0%) blur(0px)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={member.src}
              alt={member.name}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* 2. THE BIG NAME DISPLAY (Miranda Style) */}
      <div className="relative w-full flex flex-col items-center">
        
        {/* REVELATOR CURSOR (The Red Circle in your ref) */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-12 z-20 w-16 h-16 bg-[#EA4335] rounded-full flex items-center justify-center text-white"
            >
              <ArrowUpRight size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* LARGE TEXT CONTAINER */}
        <div className="overflow-hidden h-[120px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeIndex ?? "default"}
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              exit={{ y: -150 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-black text-[12vw] leading-none text-[#EA4335] uppercase tracking-tighter"
            >
              {activeIndex !== null ? members[activeIndex].name : "THE SQUAD"}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. CTA BUTTON */}
      <motion.div className="mt-12">
        <Link href="/team">
          <button className="px-8 py-3 rounded-full border border-neutral-200 dark:border-white/10 text-foreground hover:bg-foreground hover:text-background transition-all font-medium uppercase tracking-widest text-xs">
            Meet the full team
          </button>
        </Link>
      </motion.div>

    </section>
  );
}