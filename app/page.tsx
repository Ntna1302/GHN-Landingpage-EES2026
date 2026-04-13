"use client";

import { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHistoryStep } from "@/hooks/useHistoryStep";

import SplashScreen from "@/components/sections/SplashScreen";
import RoleGate from "@/components/sections/RoleGate";
import Navbar from "@/components/layout/Navbar";
import TickerStrip from "@/components/layout/TickerStrip";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import GroupsSection from "@/components/sections/GroupsSection";
import RaceSection from "@/components/sections/RaceSection";
import AnonymitySection from "@/components/sections/AnonymitySection";
import Timeline from "@/components/sections/Timeline";
import CtaFinal from "@/components/sections/CtaFinal";

// export default function Page() {
//   const { step, advance, isReady } = useHistoryStep();

//   const handleSplashComplete = useCallback(() => {
//     advance("main");
//   }, [advance]);

//   const handleGateClick = useCallback(() => {
//     advance("gate");
//   }, [advance]);

// const handleGateBack = useCallback(() => {
//   window.history.back();
// }, []);

// const handleGateComplete = useCallback((_groupId: string) => {
//   window.history.back();
// }, []);
export default function Page() {
  const { step, advance, isReady } = useHistoryStep();

const handleSplashComplete = useCallback(() => {
  // Không truyền true, mặc định sẽ là pushState
  // Lịch sử sẽ là: [splash] -> [main]
  advance("main"); 
}, [advance]);

const handleGateClick = useCallback(() => {
  // Lịch sử sẽ là: [splash] -> [main] -> [gate]
  advance("gate"); 
}, [advance]);

  const handleGateBack = useCallback(() => {
    // Lùi lại lịch sử (về main)
    window.history.back();
  }, []);

  const handleGateComplete = useCallback((_groupId: string) => {
    // Chọn xong cũng lùi lại lịch sử (về main)
    window.history.back();
  }, []);
  
  if (!isReady || !step) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#0A1F44",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#FF5200",
            animation: "progressBar 1.5s ease infinite",
            transformOrigin: "left",
          }}
        />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {step === "splash" ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SplashScreen onComplete={handleSplashComplete} />
        </motion.div>
      ) : step === "gate" ? (
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <RoleGate
            onComplete={handleGateComplete}
            onBack={handleGateBack}
          />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar onGateClick={handleGateClick} />
          <TickerStrip />
          <main>
            <Hero />
            <WhySection />
            <GroupsSection />
            <RaceSection />
            <AnonymitySection />
            <Timeline />
            <CtaFinal />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}