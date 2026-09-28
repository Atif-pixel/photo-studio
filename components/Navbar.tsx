// src/app/components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/stories", name: "Stories" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 pt-5">
      <nav className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 group"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/logo.jpeg"
              alt="Wedding Studio"
              className="w-auto h-12 md:h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = item.path === pathname;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative group px-5 py-2 text-white mix-blend-difference"
                >
                  <span className="relative z-10 text-[11px] tracking-[0.18em] uppercase">
                    {item.name}
                  </span>

                  {/* Hover pill */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* Hover text */}
                  <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                    {item.name}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex md:hidden items-center gap-3 text-white mix-blend-difference"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase">
              {menuOpen ? "Close" : "Menu"}
            </span>

            <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center">
              <div className="relative w-4 h-3">
                <motion.span
                  animate={{
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 5 : 0,
                  }}
                  className="absolute left-0 top-0 w-full h-[1px] bg-white"
                />

                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -5 : 0,
                  }}
                  className="absolute left-0 bottom-0 w-full h-[1px] bg-white"
                />
              </div>
            </div>
          </button>
        </div>

        {/* Fullscreen Menu */}
        <motion.div
          initial={false}
          animate={{
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
          }}
          className="fixed inset-0 bg-[#111] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-5">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ y: 40, opacity: 0 }}
                animate={{
                  y: menuOpen ? 0 : 40,
                  opacity: menuOpen ? 1 : 0,
                }}
                transition={{
                  delay: menuOpen ? index * 0.08 : 0,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-serif text-5xl md:text-7xl hover:italic transition-all duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Decorative text */}
          <div className="absolute bottom-8 left-8 text-white/40 text-[9px] tracking-[0.3em] uppercase">
            Capturing moments
          </div>

          <div className="absolute bottom-8 right-8 text-white/40 text-[9px] tracking-[0.3em] uppercase">
            Since 2026
          </div>
        </motion.div>
      </nav>
    </header>
  );
}   