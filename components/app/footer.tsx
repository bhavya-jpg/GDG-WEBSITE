"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Linkedin, Twitter, Github, LinkedinIcon } from "lucide-react";

const lists = {
  "ABOUT US": [
    { title: "Our Story", link: "/about" },
    { title: "The Team", link: "/Team" },
    { title: "Events", link: "/events" },
    { title: "Guidelines", link: "/guidelines" },
  ],
  "GET INVOLVED": [
    { title: "Join Chapter", link: "/sign-up" },
    { title: "Our Projects", link: "/projects" },
    { title: "Sponsorships", link: "/contact" },
  ],
};

export default function Footer() {
  const containerRef = useRef(null);

  // 1. Setup Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // 2. Define Parallax Transforms
  // The CTA card slides up faster (parallax)
  const cardY = useTransform(scrollYProgress, [0, 1], [100, -40]);
  // The footer body scales slightly for a "reveal" feel
  const footerScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer 
      ref={containerRef}
      className="flex flex-col w-full bg-background text-foreground overflow-hidden pt-20 transition-colors duration-500"
    >
      
      {/* 1. FLOATING CTA CARD (Frosted Parallax) */}
      <motion.div 
        style={{ y: cardY }}
        className="relative w-[92%] max-w-7xl z-20 flex flex-col md:flex-row items-center justify-between rounded-[2.5rem] overflow-hidden px-10 py-14 mx-auto 
                    bg-neutral-100/80 dark:bg-neutral-900/40 
                    backdrop-blur-3xl border border-neutral-200 dark:border-white/10 
                    shadow-2xl dark:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
      >
        {/* Google Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] flex">
            <div className="h-full w-1/4 bg-[#4285F4]" />
            <div className="h-full w-1/4 bg-[#EA4335]" />
            <div className="h-full w-1/4 bg-[#FBBC04]" />
            <div className="h-full w-1/4 bg-[#34A853]" />
        </div>

        <div className="flex flex-col gap-3 text-center md:text-left max-w-2xl">
          <h2 className="font-serif italic text-4xl md:text-6xl text-foreground tracking-tight leading-tight">
            Ready to <span className="text-[#4285F4]">Build</span> the Future?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light tracking-wide">
            Join the GDG NIT Hamirpur community and turn your ideas into reality.
          </p>
        </div>

        <Link href="/sign-up" className="mt-10 md:mt-0">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(66, 133, 244, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-sans font-bold text-xl transition-all duration-300"
          >
            Join Chapter
          </motion.button>
        </Link>
      </motion.div>

      {/* 2. MAIN FOOTER CONTENT (Animated Entry) */}
      <motion.div 
        style={{ scale: footerScale, opacity: footerOpacity }}
        className="bg-neutral-50/50 dark:bg-black/40 border-t border-neutral-200 dark:border-white/5 pt-48 pb-12 px-8 mt-[-60px]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* BRANDING COLUMN */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="flex items-center gap-4">
               <div className="p-2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
                <Image src="/logo.png" alt="GDG Logo" width={40} height={40} />
               </div>
               <div className="flex flex-col">
                  <span className="text-foreground text-3xl font-serif italic tracking-tight">GDG NITH</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-bold">NIT Hamirpur Chapter</span>
               </div>
            </div>
            
            <p className="text-muted-foreground text-md leading-relaxed max-w-sm font-light">
              We are a community of student developers at NIT Hamirpur, dedicated to exploring technology and fostering innovation. 
              Proudly affiliated with <span className="text-foreground font-medium border-b border-[#4285F4]/30">GDG Ludhiana</span>.
            </p>
            
            {/* SOCIALS with Hover Accents */}
            <div className="flex gap-5 mt-2">
              {[
                { icon: Linkedin, color: "#4285F4" },
                { icon: Instagram, color: "#EA4335" },
                { icon: Twitter, color: "#FBBC04" },
                { icon: Github, color: "#34A853" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -5 }}
                  style={{ "--hover-color": social.color } as any}
                  className="p-3 rounded-2xl border border-neutral-200 dark:border-white/10 text-muted-foreground transition-all hover:text-[var(--hover-color)] hover:border-[var(--hover-color)] hover:shadow-lg hover:shadow-[var(--hover-color)]/10"
                >
                  <social.icon size={22}/>
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="md:col-span-7 grid grid-cols-2 gap-12 md:ml-auto">
            {Object.entries(lists).map(([key, value]) => (
              <div key={key} className="flex flex-col gap-8">
                <span className="text-muted-foreground text-[12px] tracking-[0.5em] font-black uppercase opacity-50">
                  {key}
                </span>
                <ul className="flex flex-col gap-5">
                  {value.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.link}
                        className="text-foreground/80 text-sm font-light hover:text-[#4285F4] transition-all flex items-center group"
                      >
                        <span className="w-0 h-[1px] bg-[#4285F4] transition-all group-hover:w-4 mr-0 group-hover:mr-2" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-neutral-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-neutral-500 text-[10px] uppercase tracking-widest font-bold">
            <span>© 2026 GDG NITH</span>
            <span className="hidden md:block opacity-20">|</span>
            <span>Parent: <span className="text-foreground/60">GDG Ludhiana</span></span>
          </div>
          
          <div className="flex gap-8">
             <Link href="/privacy" className="text-neutral-500 text-[10px] uppercase tracking-widest hover:text-foreground transition-colors font-bold">
                Privacy
             </Link>
             <Link href="/terms" className="text-neutral-500 text-[10px] uppercase tracking-widest hover:text-foreground transition-colors font-bold">
                Terms
             </Link>
          </div>
        </div>
      </motion.div>

      {/* Decorative Final Gradient Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#4285F4]/20 to-transparent blur-sm" />
    </footer>
  );
}