"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0A1F44",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* LEFT SHIPPER GROUP */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          left: -70,
          right: 20,
          bottom: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <img
          src="/img/12.png"
          alt="GHN Team"
          style={{
            height: "clamp(200px, 45vh, 500px)",
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </motion.div>

      {/* RIGHT SHIPPER */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <img
          src="/img/11.png"
          alt="GHN Shipper"
          style={{
            height: "clamp(200px, 100vh, 900px)",
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </motion.div>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* GHN LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          <img
            src="/img/GHN_2.png"
            alt="GiaoHangNhanh"
            style={{
              height: "clamp(50px, 10vw, 115px)",
              width: "100%",
              objectFit: "contain",
              display: "block",
              borderRadius: "20px",
            }}
          />
        </motion.div>

        {/* MAIN TITLE BLOCK */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {/* EES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(5rem, 18vw, 14rem)",
              color: "#fff",
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
              position: "relative",
            }}
          >
            EES

            {/* CHAT ICON — top right */}
            <motion.img
              src="/img/logo.png"
              alt="logo"
              initial={{ opacity: 0, scale: 0.5, rotate: 80 }}
              animate={{ opacity: 1, scale: 1, rotate: 10 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              style={{
                position: "absolute",
                top: "-33%",
                right: "-15%",
                width: "clamp(2.5rem, 10vw, 15rem)",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </motion.div>

          {/* 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              color: "#F8B200",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              marginTop: "-0.05em",
            }}
          >
            2026
          </motion.div>

          {/* SUBTEXT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontSize: "clamp(0.75rem, 1.8vw, 1.1rem)",
              color: "#fff",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginTop: "clamp(1rem, 2vw, 1.5rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
            }}
          >
            Khảo sát mức độ gắn kết nhân viên
          </motion.div>
        </div>

        {/* BUTTON / LOADING */}
        <div
          style={{
            marginTop: "clamp(1.5rem, 3vw, 3rem)",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode="wait">
            {!isLoaded ? (
              <motion.div key="loader" exit={{ opacity: 0 }}>
                <div
                  style={{
                    height: "2px",
                    background: "rgba(255,255,255,0.08)",
                    width: "200px",
                    overflow: "hidden",
                    borderRadius: "4px",
                  }}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 3, ease: "linear" }}
                    style={{
                      height: "100%",
                      background: "#FF5200",
                      transformOrigin: "left",
                    }}
                  />
                </div>
                <p
                  style={{
                    marginTop: "0.8rem",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Đang tải...
                </p>
              </motion.div>
            ) : (
              <motion.button
                key="cta"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onComplete}
                style={{
                  background: "#FF5200",
                  color: "#fff",
                  border: "none",
                  padding: "14px 52px",
                  fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                  fontWeight: 700,
                  borderRadius: "6px",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Khám phá ngay
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}