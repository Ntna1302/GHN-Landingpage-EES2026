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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontSize: "clamp(0.6rem, 1.2vw, 0.8rem)",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#FF5200",
            marginBottom: "3.5rem",
            fontFamily: "var(--font-body)",
          }}
        >
          GiaoHangNhanh · Employee Engagement Survey
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

            {/* LOGO — góc trên phải chữ S */}
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
                width: "clamp(2.5rem, 15vw, 10rem)",
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
          {/* SUBTEXT — thêm lại */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
              color: "#fff",
              letterSpacing: "0.02em",
              marginTop: "1.5rem",
              fontFamily: "var(--font-body)",
              fontWeight: 400,
            }}
          >
            Khảo sát mức độ gắn kết nhân viên
          </motion.div>
        </div>

        {/* BUTTON / LOADING */}
        <div
          style={{
            marginTop: "3rem",
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
                  padding: "14px 44px",
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