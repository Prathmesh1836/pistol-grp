"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PISTOL_STATS } from "@/data/pistolData";
import { Users, Layers, BookOpen, Trophy, Target, Heart, Award, CheckCircle } from "lucide-react";

export default function AboutStats() {
  const [activeTab, setActiveTab] = useState<"mission" | "culture" | "impact">("mission");

  const statIconMap: Record<string, React.ElementType> = {
    Users,
    Layers,
    BookOpen,
    Trophy,
  };

  const tabsContent = {
    mission: {
      title: "Engineered for Student Innovation",
      desc: "Pistal Group was established to bridge the gap between academic theory and high-impact practical execution. We empower student engineers, designers, and visionaries to collaborate on ambitious technical & creative ventures.",
      bullets: [
        "Fostering peer-to-peer mentorship across all college years",
        "Providing state-of-the-art lab hardware and software tooling",
        "Encouraging cross-disciplinary collaboration between engineers and designers",
      ],
    },
    culture: {
      title: "Hard Work, High Energy, Zero Limits",
      desc: "Our culture thrives on late-night hackathons, relentless debugging sessions, dynamic brainstorming, and celebrating every victory together as one united college family.",
      bullets: [
        "Open-source mindset and collaborative knowledge sharing",
        "High-performance work ethics coupled with campus festival spirit",
        "Direct access to alumni mentors leading global tech firms",
      ],
    },
    impact: {
      title: "Leaving an Indelible Campus Footprint",
      desc: "From winning national hackathons to launching student-led startups and building campus utility applications, Pistal Group continues to redefine student leadership.",
      bullets: [
        "Top rankings in national university tech & robotics leagues",
        "Building digital tools used daily by 5,000+ campus students",
        "100% placement rate for active core team members in top tier firms",
      ],
    },
  };

  return (
    <section id="about" className="relative py-24 bg-background/50 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span>Who We Are</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Driven by Passion. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-rose-500 to-cyber-cyan">
              United by Excellence.
            </span>
          </motion.h2>
        </div>

        {/* Story & Interactive Tabs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          {/* Left Column: Interactive Tab Buttons */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { id: "mission", label: "Our Mission", icon: Target },
              { id: "culture", label: "Our Culture", icon: Heart },
              { id: "impact", label: "Our Impact", icon: Award },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id as "mission" | "culture" | "impact")}
                  className={`w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "glass-panel bg-gradient-to-r from-pistol-900/60 to-rose-950/40 border-rose-500/50 shadow-lg shadow-rose-950/50"
                      : "glass-panel border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-xl ${
                        isActive ? "bg-rose-500 text-white" : "bg-white/5 text-gray-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`font-bold text-lg ${isActive ? "text-white" : "text-gray-300"}`}>
                        {tab.label}
                      </h4>
                      <p className="text-xs text-gray-400">Discover what defines Pistal Group</p>
                    </div>
                  </div>
                  {isActive && <CheckCircle className="w-5 h-5 text-rose-400" />}
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Tab Content Panel */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-2xl font-extrabold text-white mb-4">
                {tabsContent[activeTab].title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {tabsContent[activeTab].desc}
              </p>

              <div className="space-y-3">
                {tabsContent[activeTab].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mt-0.5 shrink-0">
                      ✓
                    </div>
                    <span className="text-sm text-gray-200">{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics Cards Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PISTOL_STATS.map((stat, idx) => {
            const IconComponent = statIconMap[stat.icon] || Trophy;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 relative group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500/20 to-cyber-cyan/20 border border-rose-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-rose-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div className="flex items-baseline space-x-1 mb-1">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-3xl font-extrabold text-rose-400">{stat.suffix}</span>
                </div>

                <h4 className="text-lg font-bold text-gray-200 mb-1">{stat.label}</h4>
                <p className="text-xs text-gray-400">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
