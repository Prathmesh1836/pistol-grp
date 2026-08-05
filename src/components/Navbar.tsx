"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export default function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "wings", "team"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Wings & Domains", href: "#wings", id: "wings" },
    { label: "Leadership & Team", href: "#team", id: "team" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg shadow-pistol-600/30 group-hover:scale-110 transition-transform duration-300">
                <img src="/logo.png" alt="Pistal Group Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-rose-400 group-hover:text-rose-400 transition-colors">
                  PISTAL<span className="text-pistol-500">GROUP</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-cyan-400/80 -mt-1">
                  Innovate &bull; Elevate &bull; Lead
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-pistol-600/80 to-rose-500/80 rounded-full -z-10 shadow-md shadow-pistol-600/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onOpenJoinModal}
                className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden bg-gradient-to-r from-pistol-600 via-rose-500 to-cyber-purple shadow-lg shadow-pistol-600/30 hover:shadow-rose-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Join Pistal Group</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan via-pistol-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    activeSection === link.id
                      ? "bg-gradient-to-r from-pistol-600 to-rose-500 text-white shadow-md"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-pistol-600 via-rose-500 to-cyber-cyan shadow-lg flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5 text-cyan-300" />
                <span>Apply for Recruitment</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
