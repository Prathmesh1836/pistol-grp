"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PISTOL_TEAM, TeamMember } from "@/data/pistolData";
import { Linkedin, Github, Instagram, ShieldCheck, Sparkles, User } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const [filter, setFilter] = useState("all");

  const filteredMembers = PISTOL_TEAM.filter((member) => {
    if (filter === "all") return true;
    if (filter === "content" && member.wing === "content") return true;
    if (filter === "security" && member.wing === "security") return true;
    if (filter === "tech" && member.wing === "tech-ai") return true;
    if (filter === "production" && member.wing === "production") return true;
    return false;
  });

  return (
    <section id="team" className="relative py-24 bg-background/60 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/10 blur-[160px] rounded-full pointer-events-none" />

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
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Leadership Council</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Meet the Minds Behind <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-rose-500 to-cyan-400">
              Pistal Group Leadership
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base mt-4"
          >
            Visionary student heads driving technical innovation, operational mastery, and creative direction.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Council" },
            { id: "content", label: "Content" },
            { id: "security", label: "Security" },
            { id: "tech", label: "Tech & AI" },
            { id: "production", label: "Production Team" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                filter === item.id
                  ? "bg-gradient-to-r from-pistol-600 to-rose-500 text-white shadow-lg shadow-pistol-600/30 scale-105"
                  : "glass-panel text-gray-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Top Card Badge */}
              {member.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-rose-400" />
                  <span>Executive</span>
                </div>
              )}

              <div>
                {/* Avatar with Glow ring */}
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-cyber-cyan to-purple-600 group-hover:rotate-6 transition-transform duration-500">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-rose-400 mt-1">{member.role}</p>
                  <span className="inline-block text-[11px] font-medium text-gray-400 mt-0.5">
                    {member.year}
                  </span>
                </div>

                <p className="text-gray-300 text-xs text-center leading-relaxed mb-6 px-2">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-center space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-gray-400 hover:text-rose-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-gray-400 hover:text-rose-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-gray-400 hover:text-rose-400 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
