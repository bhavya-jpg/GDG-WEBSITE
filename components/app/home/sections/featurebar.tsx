import { ArrowRight, Settings, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureBar() {
  return (
    <div className="relative z-30 w-full bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 shadow-2xl">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-stretch">
        
        {/* 1. ACTION SECTION */}
        <div className="flex-1 flex items-center justify-center p-6 md:border-r border-neutral-200 dark:border-neutral-800">
          <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-Exo font-medium text-sm hover:scale-105 transition-transform flex items-center gap-2">
            View All Events <ArrowRight size={16} />
          </button>
        </div>

        {/* 2. WORKSHOPS */}
        <div className="flex-[1.5] p-6 flex flex-col md:flex-row gap-4 md:border-r border-neutral-200 dark:border-neutral-800 group hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
          <div className="text-[#4285F4]">
            <Settings size={28} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-Exo font-bold text-sm dark:text-white flex items-center gap-1">
              Workshops & Talks <span className="text-neutral-400">»</span>
            </h3>
            <p className="text-neutral-500 text-[11px] leading-relaxed mt-1 max-w-[200px]">
              Learn technologies like Flutter, Firebase, and Machine Learning.
            </p>
          </div>
        </div>

        {/* 3. TEAM PROJECTS */}
        <div className="flex-[1.5] p-6 flex flex-col md:flex-row gap-4 md:border-r border-neutral-200 dark:border-neutral-800 group hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
          <div className="text-[#EA4335]">
            <Laptop size={28} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-Exo font-bold text-sm dark:text-white flex items-center gap-1">
              Team Projects <span className="text-neutral-400">»</span>
            </h3>
            <p className="text-neutral-500 text-[11px] leading-relaxed mt-1 max-w-[200px]">
              Showcase GDG project highlights and the benefits of collaboration.
            </p>
          </div>
        </div>

        {/* 4. COMMUNITY SUPPORT */}
        <div className="flex-[1.5] p-6 flex flex-col md:flex-row gap-4 group hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
          <div className="text-[#34A853]">
            <Users size={28} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-Exo font-bold text-sm dark:text-white flex items-center gap-1">
              Community Support <span className="text-neutral-400">»</span>
            </h3>
            <p className="text-neutral-500 text-[11px] leading-relaxed mt-1 max-w-[200px]">
              Highlight the community support for developers and innovators.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}