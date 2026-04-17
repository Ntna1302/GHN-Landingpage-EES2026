"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

interface Props {
  onScheduleClick: () => void;
}

export default function UrgencyBar({ onScheduleClick }: Props) {
  const { days, isExpired } = useCountdown("2026-05-02T00:00:00");

  return (
    <div
      className="ghn-urgency-bar"
      style={{
        background: "linear-gradient(90deg, #ff51009d -50%, #FF5200 50%, #FF5200 75.62%)",
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
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {/* Pulse dot */}
        <span
          style={{
            width: "6px",
            height: "6px",
            background: isExpired ? "#22C55E" : "#007ED4",
            borderRadius: "50%",
            display: "inline-block",
            animation: "blink 1.4s ease-in-out infinite",
            flexShrink: 0,
          }}
        />

        <span style={{ color: "#F5F2F2" }}>EES 2026</span>
        <span style={{ color: "rgba(255, 255, 255, 0.86)" }}>·</span>

        {isExpired ? (
          <span style={{ color: "#F8B200" }}>Đang diễn ra</span>
        ) : (
          <>
            <span style={{ color: "#F5F2F2" }}>Bắt đầu 02/05</span>
            <span className="ghn-urgency-days"  style={{ color: "rgba(255, 255, 255, 0.73)" }}>·</span>
            <span
               className="ghn-urgency-days"
              style={{ color: "#F5F2F2" }}
            >
              {days} ngày còn lại
            </span>
          </>
        )}

        <span className="ghn-urgency-long" style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
        <span className="ghn-urgency-long" style={{ color: "rgba(255,255,255,0.4)" }}>
          Giải thưởng 30.000.000 VNĐ
        </span>
        {/* <span className="ghn-urgency-long" style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
        <span className="ghn-urgency-long" style={{ color: "rgba(255,255,255,0.4)" }}>
          20.000+ nhân viên GHN
        </span> */}
      </div>

      {/* Right — CTA */}
      <motion.button
        className="ghn-urgency-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onScheduleClick}
        style={{
          background: "#fff",
          color: "#FF5200",
          padding: "0.3rem 0.9rem",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer",
          borderRadius: "2px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          fontFamily: "var(--font-heading)",
        }}
      >
        Xem Lịch Nhóm
        <span style={{ fontSize: "0.75rem" }}>→</span>
      </motion.button>
    </div>
  );
}