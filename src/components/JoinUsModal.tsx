"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import confetti from "canvas-confetti";
import { PISTOL_WINGS } from "@/data/pistolData";

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultWingId?: string;
}

export default function JoinUsModal({ isOpen, onClose, defaultWingId }: JoinUsModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    yearOfStudy: "2nd Year",
    wingId: defaultWingId || "tech-software",
    skills: "",
    statement: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultWingId) {
      setFormData((prev) => ({ ...prev, wingId: defaultWingId }));
    }
  }, [defaultWingId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f43f5e", "#00f0ff", "#7000ff", "#ffd700"],
      });
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="glass-panel max-w-xl w-full p-8 rounded-3xl border border-white/20 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Radial Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/15 blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg">
                  <img src="/logo.png" alt="Pistal Group Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Join Pistal Group</h3>
                  <p className="text-xs text-rose-400 font-semibold">Official Student Recruitment Application</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                      College Email / Roll No *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                      Year of Study *
                    </label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Preferred Wing / Vertical *
                  </label>
                  <select
                    value={formData.wingId}
                    onChange={(e) => setFormData({ ...formData, wingId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm"
                  >
                    {PISTOL_WINGS.map((wing) => (
                      <option key={wing.id} value={wing.id}>
                        {wing.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Skills & Past Work (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. React, C++, Blender 3D, Event Management"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Why do you want to join Pistal Group? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us what drives you..."
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-pistol-600 via-rose-500 to-cyber-cyan shadow-lg shadow-pistol-600/30 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-cyan-300" />
                        <span>Submit Application</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-6 shadow-xl shadow-emerald-950/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">Application Received!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
                Thank you <span className="font-bold text-rose-400">{formData.fullName}</span>! Your recruitment application for Pistal Group has been logged. Our leadership council will contact you via your email for the interview round.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pistol-600 to-rose-500 shadow-lg shadow-pistol-600/30 hover:scale-105 transition-transform"
              >
                Back to Home Page
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
