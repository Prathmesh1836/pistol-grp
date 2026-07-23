"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PISTOL_WINGS, Wing } from "@/data/pistolData";
import { Code2, Cpu, BrainCircuit, Palette, Calendar, Rocket, X, ArrowRight, Layers, Users } from "lucide-react";

interface DomainsProps {
  onSelectWingToJoin: (wingId: string) => void;
}

export default function Domains({ onSelectWingToJoin }: DomainsProps) {
  const [selectedWing, setSelectedWing] = useState<Wing | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Cpu,
    BrainCircuit,
    Palette,
    Calendar,
    Rocket,
  };

  return (
    <section id="wings" className="relative py-24 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyber-purple/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-rose-400" />
            <span>Specialized Verticals</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Explore Our <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-rose-500 to-cyan-400">
              6 Innovation Wings
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base mt-4"
          >
            Each wing operates as an independent powerhouse while collaborating seamlessly across projects.
          </motion.p>
        </div>

        {/* Domain Wings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PISTOL_WINGS.map((wing, idx) => {
            const IconComponent = iconMap[wing.iconName] || Code2;
            return (
              <motion.div
                key={wing.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedWing(wing)}
              >
                {/* Top Accent Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${wing.color}`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${wing.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-background/90 rounded-[14px] flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full glass-panel border border-white/10 text-gray-300 flex items-center space-x-1">
                      <Users className="w-3 h-3 text-rose-400" />
                      <span>{wing.memberCount} Members</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                    {wing.name}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {wing.shortDesc}
                  </p>

                  {/* Skills Pill Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {wing.skills.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {wing.skills.length > 4 && (
                      <span className="text-[11px] font-medium px-2 py-1 rounded-lg bg-white/5 text-gray-400">
                        +{wing.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-rose-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Lead: {wing.leadName}</span>
                  <span className="flex items-center space-x-1">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Detail View */}
        <AnimatePresence>
          {selectedWing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
              onClick={() => setSelectedWing(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="glass-panel max-w-2xl w-full p-8 rounded-3xl border border-white/20 relative overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedWing(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${selectedWing.color} p-3 text-white flex items-center justify-center shadow-xl`}>
                    {(() => {
                      const IconComp = iconMap[selectedWing.iconName] || Code2;
                      return <IconComp className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{selectedWing.name}</h3>
                    <p className="text-xs text-rose-400 font-semibold">Led by {selectedWing.leadName} &bull; {selectedWing.memberCount} Active Members</p>
                  </div>
                </div>

                <p className="text-gray-200 text-base leading-relaxed mb-6">
                  {selectedWing.fullDesc}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Key Technologies & Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWing.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-white/10">
                  <button
                    onClick={() => setSelectedWing(null)}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const wingId = selectedWing.id;
                      setSelectedWing(null);
                      onSelectWingToJoin(wingId);
                    }}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-pistol-600 to-rose-500 shadow-lg shadow-pistol-600/30 hover:scale-105 transition-transform"
                  >
                    Apply for this Wing
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
