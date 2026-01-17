"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Members", value: "500+", color: "#4285F4" }, 
  { label: "Events", value: "30+", color: "#EA4335" },   
  { label: "Projects", value: "20+", color: "#FBBC04" }, 
  { label: "Workshops", value: "15+", color: "#34A853" }, 
];

export default function SectionTwo() {
  const containerRef = useRef(null);
  
  // 1. Setup Scroll Tracking for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Triggers as soon as the section enters the bottom of the screen
  });

  // 2. Define Parallax Transforms
  // Illustrations drift slowly in opposite directions
  const imgOneY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const imgTwoY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  
  // Stats bar scales up slightly as it reaches the center of the screen
  const statsScale = useTransform(scrollYProgress, [0.1, 0.4], [0.85, 1]);
  const statsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // Section heading slight drift
  const textDrift = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 bg-background bg-grid-pattern text-foreground overflow-hidden transition-colors duration-500"
    >
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-48">
        
        {/* --- ABOUT US SECTION --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Parallax Illustration 1 */}
          <motion.div style={{ y: imgOneY }} className="relative group order-2 md:order-1">
            <div className="absolute -inset-4 bg-[#4285F4]/10 rounded-full blur-3xl opacity-50" />
            <Image 
              src="/what-we-do-illustration.png" 
              width={600} height={400} 
              alt="About Illustration"
              className="relative z-10 w-full object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.div {...fadeIn} style={{ y: textDrift }} className="flex flex-col gap-8 order-1 md:order-2">
            <h2 className="font-serif italic text-5xl md:text-7xl tracking-tight">
              About Us
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed text-lg md:text-xl max-w-lg">
              Google Developer Group (GDG) is a student-led community backed by Google Developers aimed at 
              empowering undergraduate students to grow their knowledge in technology and build solutions for local communities.
            </p>

            {/* ANIMATED STATS BAR */}
            <motion.div 
              style={{ scale: statsScale, opacity: statsOpacity }}
              className="mt-6 p-2 rounded-[2.5rem] bg-neutral-100/50 dark:bg-white/5 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 flex flex-wrap justify-around items-center shadow-2xl"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 flex flex-col items-center min-w-[110px]">
                  <span style={{ color: stat.color }} className="text-3xl md:text-4xl font-bold font-serif italic">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* --- WHAT WE DO SECTION --- */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} className="flex flex-col gap-8">
            <h2 className="font-serif italic text-5xl md:text-7xl tracking-tight">
              What We Do
            </h2>
            <div className="space-y-8">
                <p className="text-muted-foreground font-sans leading-relaxed text-lg md:text-xl">
                  We provide a platform for students to learn new skills, solve real-world problems, and 
                  build a network with like-minded individuals.
                </p>
                {/* Visual Highlight */}
                <div className="pl-6 border-l-4 border-[#34A853] py-2">
                    <h4 className="font-bold text-foreground text-2xl italic font-serif leading-snug">
                        Creating impact and empowering students through technology
                    </h4>
                    <p className="text-muted-foreground text-base mt-3 max-w-md">
                        Whether you are new to software development or you've been developing for quite a while, 
                        we have something for everyone.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* Parallax Illustration 2 */}
          <motion.div style={{ y: imgTwoY }} className="relative">
             <div className="absolute -inset-4 bg-[#34A853]/10 rounded-full blur-3xl opacity-50" />
             <Image 
              src="/about-illustration.png" 
              width={600} height={400} 
              alt="Network Illustration"
              className="relative z-10 w-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

      </div>

      {/* Decorative background element for extra depth */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/5 to-transparent z-0" />
    </section>
  );
}