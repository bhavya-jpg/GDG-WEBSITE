"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Github, Mail } from "lucide-react";

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
  return (
    /* CHANGED: Used bg-background and text-foreground for automatic theme switching */
    <footer className="flex flex-col w-full bg-background text-foreground overflow-hidden pt-20 transition-colors duration-500">
      
      {/* 1. FLOATING CTA CARD (Frost Glass) */}
      <div className="relative w-[90%] max-w-7xl z-20 flex flex-col md:flex-row items-center justify-between rounded-3xl overflow-hidden px-10 py-12 mx-auto translate-y-12 
                    /* LIGHT: White frost | DARK: Deep neutral frost */
                    bg-neutral-100/80 dark:bg-neutral-900/40 
                    backdrop-blur-2xl border border-neutral-200 dark:border-white/10 
                    shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Google Accent Line (Always visible) */}
        <div className="absolute top-0 left-0 right-0 h-[2px] flex">
            <div className="h-full w-1/4 bg-[#4285F4]" />
            <div className="h-full w-1/4 bg-[#EA4335]" />
            <div className="h-full w-1/4 bg-[#FBBC04]" />
            <div className="h-full w-1/4 bg-[#34A853]" />
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-serif italic text-3xl md:text-5xl text-foreground tracking-tight">
            Ready to <span className="text-[#4285F4]">Build</span> the Future?
          </h2>
          <p className="text-muted-foreground text-lg font-light tracking-wide">
            Join the GDG NIT Hamirpur community today.
          </p>
        </div>

        <Link href="/sign-up" className="mt-8 md:mt-0">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            /* LIGHT: Black button | DARK: White button */
            className="px-10 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:bg-[#4285F4] dark:hover:bg-[#4285F4] dark:hover:text-white transition-all"
          >
            Join Chapter
          </motion.button>
        </Link>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      {/* CHANGED: Subtle light gray for light mode, transparent black for dark mode */}
      <div className="bg-neutral-50 dark:bg-black/50 border-t border-neutral-200 dark:border-white/5 pt-40 pb-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* BRANDING COLUMN */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
               <Image src="/logo.png" alt="GDG Logo" width={48} height={48} className="w-12 h-12" />
               <div className="flex flex-col">
                  <span className="text-foreground text-2xl font-serif italic tracking-tight">GDG NITH</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">NIT Hamirpur Chapter - GDG Ludhiana</span>
               </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              A community where student developers from NIT Hamirpur collaborate, learn, and solve real-world problems. 
              Part of the global Google Developers program.
            </p>
            
            {/* SOCIALS - Dynamic borders */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="p-2 rounded-full border border-neutral-200 dark:border-white/5 text-muted-foreground hover:text-[#4285F4] hover:border-[#4285F4]/50 transition-all"><Linkedin size={20}/></a>
              <a href="#" className="p-2 rounded-full border border-neutral-200 dark:border-white/5 text-muted-foreground hover:text-[#EA4335] hover:border-[#EA4335]/50 transition-all"><Instagram size={20}/></a>
              <a href="#" className="p-2 rounded-full border border-neutral-200 dark:border-white/5 text-muted-foreground hover:text-[#FBBC04] hover:border-[#FBBC04]/50 transition-all"><Twitter size={20}/></a>
              <a href="#" className="p-2 rounded-full border border-neutral-200 dark:border-white/5 text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all"><Github size={20}/></a>
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 md:ml-auto">
            {Object.entries(lists).map(([key, value]) => (
              <div key={key} className="flex flex-col gap-6">
                <span className="text-muted-foreground text-[11px] tracking-[0.4em] font-bold uppercase">
                  {key}
                </span>
                <ul className="flex flex-col gap-4">
                  {value.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.link}
                        className="text-foreground/70 text-sm font-light hover:text-[#4285F4] transition-colors"
                      >
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
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-muted-foreground text-[10px] uppercase tracking-widest">
            © 2024 GDG NITH — All Rights Reserved
          </span>
          <div className="flex gap-6">
             <span className="text-muted-foreground text-[10px] uppercase tracking-widest">
                Parent Chapter: <span className="text-foreground/60">GDG Ludhiana</span>
             </span>
             <Link href="/privacy" className="text-muted-foreground text-[10px] uppercase tracking-widest hover:text-foreground transition-colors">
                Privacy Policy
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}