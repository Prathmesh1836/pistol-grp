"use client";

import { useState } from "react";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import Domains from "@/components/Domains";
import Team from "@/components/Team";
import JoinUsModal from "@/components/JoinUsModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedWingForJoin, setSelectedWingForJoin] = useState<string | undefined>(undefined);

  const handleOpenJoinModal = (wingId?: string) => {
    setSelectedWingForJoin(wingId);
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-[#080c14] text-gray-100 overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Dynamic Background Particle Canvas */}
      <BackgroundCanvas />

      {/* Navigation Header */}
      <Navbar onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />
        <AboutStats />
        <Domains onSelectWingToJoin={(wingId) => handleOpenJoinModal(wingId)} />
        <Team />
        <Footer />
      </div>

      {/* Recruitment Join Modal */}
      <JoinUsModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
        defaultWingId={selectedWingForJoin}
      />
    </main>
  );
}
