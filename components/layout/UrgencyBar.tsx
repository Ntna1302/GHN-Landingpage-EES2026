"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

interface Props {
  onScheduleClick: () => void;
}

export default function UrgencyBar({ onScheduleClick }: Props) {
  const { days, isExpired } = useCountdown("2026-05-01T00:00:00");

  return (
    <div
      style={{
        background: "#0A1F44",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        height: "38px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left — scrolling info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {/* Pulse dot */}
        <span
          style={{
            width: "6px",
            height: "6px",
            background: isExpired ? "#22C55E" : "#F8B200",
            borderRadius: "50%",
            display: "inline-block",
            animation: "blink 1.4s ease-in-out infinite",
            flexShrink: 0,
          }}
        />

        <span style={{ color: "rgba(255,255,255,0.5)" }}>EES Race 2026</span>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>

        {isExpired ? (
          <span style={{ color: "#F8B200" }}>Đang diễn ra</span>
        ) : (
          <>
            <span style={{ color: "#fff" }}>Khai mạc 01/05</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "#F8B200" }}
            >
              {days} ngày còn lại
            </motion.span>
          </>
        )}

        <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
        <span style={{ color: "rgba(255,255,255,0.4)" }}>
          Giải thưởng 25.000.000 VNĐ
        </span>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
        <span style={{ color: "rgba(255,255,255,0.4)" }}>
          20.000+ nhân viên GHN
        </span>
      </div>

      {/* Right — CTA */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onScheduleClick}
        style={{
          background: "#FF5200",
          color: "#fff",
          padding: "0.3rem 0.9rem",
          fontSize: "0.65rem",
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer",
          borderRadius: "2px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          fontFamily: "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
        }}
      >
        Xem Lịch Nhóm
        <span style={{ fontSize: "0.75rem" }}>→</span>
      </motion.button>
    </div>
  );
}