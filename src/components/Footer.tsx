"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ArrowUp, Linkedin, Github, Instagram, MessageSquare, Youtube, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950/80 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pistol-600 via-rose-500 to-cyber-cyan flex items-center justify-center shadow-lg shadow-pistol-600/30">
                <ShieldAlert className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white">
                PISTOL<span className="text-rose-500">GROUP</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The premier student innovation syndicate & official college group. Empowering engineers, designers, and creators to shape the technology of tomorrow.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: MessageSquare, href: "https://discord.com", label: "Discord" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-colors"
                    aria-label={item.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-rose-400 transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-400 transition-colors">
                  About & Mission
                </a>
              </li>
              <li>
                <a href="#wings" className="hover:text-rose-400 transition-colors">
                  Innovation Wings
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-rose-400 transition-colors">
                  Leadership Council
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: College Chapter Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">Campus Chapter</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Main Innovation Lab & Tech Studio, <br />
              Department of Computer Science & Engineering, <br />
              Campus Block 4, University Headquarters.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                ● Recruitment 2026 Currently Open
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 flex items-center space-x-1">
            <span>&copy; {new Date().getFullYear()} Pistol Group. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>by Pistol Group Tech Team.</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pistol-600 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-pistol-600/30 hover:shadow-rose-500/50 transition-shadow"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
