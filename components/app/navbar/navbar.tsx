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
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // const logoVariants = {
  //   hidden: { opacity: 0, x: -20 },
  //   visible: { opacity: 1, x: 0 },
  // };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <motion.div
      className="sticky top-0 left-0 right-0 flex  h-12  justify-between items-center px-4 py-8 bg-white dark:bg-neutral-900 border-b-2 border-b-neutral-100 dark:border-b-neutral-800 z-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Link href="/" className="flex flex-row items-center gap-2 cursor-pointer">
        <div className="flex flex-row items-center gap-2 md:gap-3">
          {/* GDG Logo SVG */}
          <Image
            className="h-8 w-8 md:h-10 md:w-10 object-contain"
            src="/gdg_logo.svg"
            alt="GDG Logo"
            width={40}
            height={40}
            priority
          />
          {/* Text Branding */}
          <div className="flex flex-col">
            <span className="font-Exo font-medium text-sm md:text-lg text-neutral-800 dark:text-neutral-100 leading-tight">
              Google Developer Group
            </span>
            <span className="font-Exo font-normal text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-tight">
              NIT Hamirpur Chapter, GDG Ludhiana
            </span>
          </div>
        </div>
      </Link>
      <div className="lg:flex items-center hidden flex-row gap-4">
        {navlinks.slice(0, LINKS_GROUP_ONE_COUNT).map((link) => (
          <motion.div key={link.text} variants={linkVariants}>
            <NavbarButton text={link.text} to={link.to} />
          </motion.div>
        ))}
        <div className="cursor-pointer">
          {theme === "dark" ? (
            <Button
              size="icon"
              className="border border-white rounded-full bg-white text-neutral-900 hover:bg-white shadow-none"
              onClick={() => setTheme("light")}
            >
              <Sun size={18} />
            </Button>
          ) : (
            <Button
              size="icon"
              className="border border-neutral-300 text-white shadow-none bg-neutral-900 hover:bg-neutral-900 rounded-full"
              onClick={() => setTheme("dark")}
            >
              <Moon size={18} />
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:hidden">
        <Menu className="cursor-pointer" onClick={toggleSidebar} />
      </div>
      {showSidebar && <Sidebar isOpen={showSidebar} onClose={toggleSidebar} />}
    </motion.div>
  );
}
