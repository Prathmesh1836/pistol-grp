"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown, ChevronRight, Zap, Shield, Flame } from "lucide-react";

interface HeroProps {
  onOpenJoinModal: () => void;
}

export default function Hero({ onOpenJoinModal }: HeroProps) {
  const handleScrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToWings = () => {
    const el = document.getElementById("wings");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide mb-8 shadow-xl shadow-rose-950/40"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <Flame className="w-4 h-4 text-rose-400" />
          <span>The Premier College Engineering & Innovation Syndicate</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-6"
        >
          WE ARE THE <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-rose-400 to-rose-600 glow-text-rose">
            PISTOL GROUP
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 font-normal leading-relaxed mb-10"
        >
          Empowering college minds through cutting-edge technology, hardware robotics, 
          creative design, and high-octane leadership. We don&apos;t just build projects—we build legends.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-pistol-600 via-rose-500 to-cyber-cyan shadow-xl shadow-pistol-600/40 hover:shadow-rose-500/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 group"
          >
            <Sparkles className="w-5 h-5 text-cyan-300 group-hover:rotate-45 transition-transform" />
            <span>Apply to Join Us</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleScrollToWings}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-gray-200 glass-panel border border-white/10 hover:border-cyan-400/50 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>Explore Wings & Domains</span>
          </button>
        </motion.div>

        {/* Feature Highlights Pill Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, title: "150+ Members", desc: "Active Innovators" },
            { icon: Shield, title: "6 Domain Wings", desc: "Specialized Labs" },
            { icon: Flame, title: "35+ Bootcamps", desc: "Hands-on Workshops" },
            { icon: Sparkles, title: "18+ Trophies", desc: "National Victories" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center hover:border-rose-500/40 transition-colors"
            >
              <item.icon className="w-6 h-6 text-rose-400 mb-2" />
              <span className="text-white font-bold text-base">{item.title}</span>
              <span className="text-gray-400 text-xs">{item.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleScrollToAbout}
          className="mt-16 inline-flex flex-col items-center text-gray-400 hover:text-white cursor-pointer transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-semibold mb-2">Scroll to Discover</span>
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 glass-panel">
            <div className="w-1.5 h-3 bg-rose-500 rounded-full animate-bounce" />
          </div>
          <ArrowDown className="w-4 h-4 mt-2 text-rose-400" />
        </motion.div>
      </div>
    </section>
  );
}
