"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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

export default function MirandaTeam() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.4], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textDriftY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const getStaggerDelay = (index: number, total: number) => {
    const center = (total - 1) / 2;
    const distFromCenter = Math.abs(index - center);
    return distFromCenter * 0.02; 
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ 
        rotateX, 
        scale, 
        opacity,
        perspective: "1200px" 
      }}
      /* CHANGED: Removed bg-[#0f0f0f], added bg-transparent */
      className="relative w-full h-screen bg-transparent flex flex-col justify-center items-center overflow-hidden transition-colors duration-500"
    >
      {/* ADDED: TOP REVEAL DIVIDER (Blends with previous section) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 1. PROFILE IMAGES ROW */}
      <motion.div 
        style={{ y: avatarY }}
        className="flex justify-center items-end gap-3 md:gap-10 mb-8 z-20 h-40 w-full px-10"
        onMouseLeave={() => setActiveIdx(null)}
      >
        {members.map((member, idx) => (
          <motion.div
            key={member.id}
            onMouseEnter={() => setActiveIdx(idx)}
            className="relative cursor-pointer overflow-hidden rounded-md border border-white/10 shadow-2xl"
            animate={{
              width: activeIdx === idx ? 160 : 70, 
              height: activeIdx === idx ? 160 : 70,
              filter: activeIdx !== null && activeIdx !== idx ? "grayscale(100%) blur(4px)" : "grayscale(0%) blur(0px)",
              opacity: activeIdx !== null && activeIdx !== idx ? 0.3 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Image
              src={member.src}
              alt={member.name}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 2. PROFILE NAMES */}
      <motion.div 
        style={{ y: textDriftY }}
        className="relative w-full h-[30vh] md:h-[45vh] flex items-center justify-center overflow-hidden [clip-path:inset(0_0_0_0)]"
      >
        <AnimatePresence mode="popLayout">
          <motion.h1
            key={activeIdx !== null ? members[activeIdx].name : "default"}
            className={`absolute flex w-full justify-center uppercase text-[18vw] font-black leading-none tracking-normal select-none font-barlow
                       ${activeIdx === null ? "text-miranda-cream" : "text-miranda-red"}`}
          >
            {(activeIdx !== null ? members[activeIdx].name : "THE SQUAD")
              .split("")
              .map((char, charIdx, array) => (
                <motion.span
                  key={charIdx}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-110%" }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                    delay: getStaggerDelay(charIdx, array.length),
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </motion.h1>
        </AnimatePresence>
      </motion.div>

      {/* 3. CTA BUTTON */}
      <motion.button 
        style={{ y: avatarY }}
        className="mt-4 z-30 px-8 py-3 rounded-full border border-white/10 text-miranda-cream text-[10px] uppercase tracking-[0.5em] hover:bg-miranda-red hover:text-white transition-all backdrop-blur-sm bg-white/5 shadow-2xl"
      >
        Meet the whole team
      </motion.button>

      {/* BACKGROUND ACCENTS */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[1px] bg-white/5 z-0" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-miranda-red/5 blur-[120px] rounded-full" />
    </motion.section>
  );
}