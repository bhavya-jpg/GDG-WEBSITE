"use client";
import { ArrowRight, Settings, Laptop, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Workshops & Talks",
    desc: "Learn technologies like Flutter, Firebase, and ML.",
    icon: Settings,
    color: "#4285F4", // Blue
    link: "/events"
  },
  {
    title: "Team Projects",
    desc: "Showcase GDG project highlights and collaboration.",
    icon: Laptop,
    color: "#EA4335", // Red
    link: "/projects"
  },
  {
    title: "Community Support",
    desc: "Mentorship and support for student innovators.",
    icon: Users,
    color: "#34A853", // Green
    link: "/about"
  }
];

export default function FeatureBar() {
  return (
    <div className="relative z-30 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-3xl border-t border-neutral-200 dark:border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-colors duration-500">
      
      {/* GOOGLE ACCENT TOP BORDER (Extremely thin & elegant) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] flex opacity-30">
        <div className="h-full w-1/4 bg-[#4285F4]" />
        <div className="h-full w-1/4 bg-[#EA4335]" />
        <div className="h-full w-1/4 bg-[#FBBC04]" />
        <div className="h-full w-1/4 bg-[#34A853]" />
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-stretch">
        
        {/* 1. PRIMARY ACTION SECTION */}
        <div className="flex-1 flex items-center justify-center p-8 md:border-r border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02]">
          <Link href="/events" className="w-full max-w-[200px]">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-foreground text-background py-4 rounded-2xl font-sans font-bold text-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all flex items-center justify-center gap-3 group"
            >
              View All Events 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* 2. FEATURE ITEMS */}
        {features.map((item, idx) => (
          <Link 
            href={item.link} 
            key={idx}
            className={`flex-[1.5] p-8 flex flex-col lg:flex-row gap-5 group hover:bg-neutral-50 dark:hover:bg-white/[0.03] transition-all duration-500 relative
              ${idx !== features.length - 1 ? 'md:border-r border-neutral-200 dark:border-white/5' : ''}`}
          >
            {/* ICON WITH DYNAMIC GLOW */}
            <div 
              style={{ color: item.color }} 
              className="relative transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12"
            >
              <item.icon size={32} strokeWidth={1.5} />
              <div 
                className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: item.color }}
              />
            </div>

            <div className="flex flex-col text-left">
              <h3 className="font-serif italic font-bold text-lg dark:text-white flex items-center gap-2">
                {item.title} 
                <span className="text-neutral-300 dark:text-neutral-700 group-hover:text-foreground transition-colors group-hover:translate-x-1 transition-transform duration-500">
                  »
                </span>
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-1 font-light tracking-wide max-w-[240px]">
                {item.desc}
              </p>
            </div>

            {/* SELECTION INDICATOR (Bottom Line) */}
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-foreground origin-left"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              style={{ backgroundColor: item.color }}
            />
          </Link>
        ))}

      </div>
    </div>
  );
}