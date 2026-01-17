"use client";
import Link from "next/link";
import navlinks, { LINKS_GROUP_ONE_COUNT } from "./navlinks";
import Image from "next/image";
import { motion } from "framer-motion";
import NavbarButton from "./navbar-button";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    // OUTER WRAPPER: This is what stays pinned to the top
    <div className="fixed top-0 left-0 right-0 z-[100] w-full flex justify-center pt-4 pointer-events-none">
      
      {/* INNER CONTENT: This is the floating "frosty" bar */}
      <motion.div 
  className="pointer-events-auto flex h-16 w-[95%] max-w-7xl items-center justify-between px-6 
             /* 1. DARKER TINT: Use neutral-950 at 30-40% opacity to 'ground' the colors */
             bg-white/30 dark:bg-neutral-950/40 
             
             /* 2. BLUR: Keep it high for the frost effect */
             backdrop-blur-xl 
             
             /* 3. CONTRAST PROTECTION: This ensures the blue doesn't wash out the text */
             dark:backdrop-brightness-75 dark:backdrop-saturate-150
             
             /* 4. BORDER: Make the border slightly more visible so the shape is clear */
             border border-white/20 dark:border-white/10 
             
             rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"

        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex flex-row items-center gap-2 cursor-pointer">
          <Image className="w-8" src="/logo.png" alt="logo" width={40} height={40} />
          <span className="font-Exo font-semibold text-lg text-neutral-800 dark:text-neutral-200">
            GDG NITH
          </span>
        </Link>

        <div className="lg:flex items-center hidden flex-row gap-2">
          {navlinks.slice(0, LINKS_GROUP_ONE_COUNT).map((link) => (
            <NavbarButton key={link.text} text={link.text} to={link.to} />
          ))}
          
          <div className="ml-2 pl-2 border-l border-neutral-200 dark:border-neutral-800">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
          <Menu className="cursor-pointer" onClick={toggleSidebar} />
        </div>

        {showSidebar && <Sidebar isOpen={showSidebar} onClose={toggleSidebar} />}
      </motion.div>
    </div>
  );
}
