"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Members", value: "500+", color: "#4285F4" }, 
  { label: "Events", value: "30+", color: "#EA4335" },   
  { label: "Projects", value: "20+", color: "#FBBC04" }, 
  { label: "Workshops", value: "15+", color: "#34A853" }, 
];

export default function SectionTwo() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    /* 
       CHANGED: 
       'bg-[#050505]' -> 'bg-background' 
       'text-white'    -> 'text-foreground' 
    */
    <section className="relative w-full py-24 bg-background bg-grid-pattern text-foreground overflow-hidden transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        
        {/* --- ABOUT US SECTION --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="relative group">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Using a placeholder if you don't have the image yet */}
            <Image 
              src="/what-we-do-illustration.png" // Use your network illustration here
              width={600} height={400} 
              alt="Network Illustration"
              className="relative z-10 w-full object-contain"
            />
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-6">
            <h2 className="font-serif italic text-4xl md:text-6xl tracking-tight">
              About Us
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed text-lg">
              Google Developer Group (GDG) is a student-led community backed by Google Developers aimed at 
              empowering undergraduate students from all disciplines to grow their knowledge in technology...
            </p>

            {/* FROSTED STATS BAR */}
            <div className="mt-4 p-1 rounded-3xl bg-neutral-100/50 dark:bg-white/5 backdrop-blur-md border border-neutral-200 dark:border-white/10 flex flex-wrap justify-around items-center shadow-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 flex flex-col items-center min-w-[100px]">
                  <span style={{ color: stat.color }} className="text-2xl md:text-3xl font-bold font-serif italic">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- WHAT WE DO SECTION --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="flex flex-col gap-6 order-2 md:order-1">
            <h2 className="font-serif italic text-4xl md:text-6xl tracking-tight">
              What We Do
            </h2>
            <div className="space-y-4">
                <p className="text-muted-foreground font-sans leading-relaxed text-lg">
                We provide a platform for students to learn new skills, solve real-world problems, and 
                build a network with like-minded individuals.
                </p>
                {/* Dynamic border color */}
                <div className="pl-4 border-l-2 border-[#34A853]">
                    <h4 className="font-bold text-foreground text-xl italic font-serif">
                        Creating impact and empowering students through technology
                    </h4>
                    <p className="text-muted-foreground text-sm mt-2">
                        Whether you are new to software development or you've been developing for quite a while, 
                        we have something for everyone.
                    </p>
                </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="relative order-1 md:order-2">
             <Image 
              src="/about-illustration.png" // Use your network illustration here
              width={600} height={400} 
              alt="Network Illustration"
              className="relative z-10 w-full object-contain"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}