"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

const HEADLINE_LINES: { text: string; style: "solid" | "outline" | "accent" }[] = [
  { text: "TIẾNG", style: "solid" },
  { text: "NÓI", style: "outline" },
  { text: "CỦA", style: "accent" },
  { text: "BẠN", style: "solid" },
];

const STATS = [
  { value: "≥ 75%", label: "Mục tiêu tham gia" },
  { value: "10 phút", label: "Thời gian điền" },
  { value: "6", label: "Nhóm khảo sát" },
];

const RACE_TITLE_LINES = ["EES", "RACE", "2026"];

const headlineContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

const headlineLine: Variants = {
  hidden: { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const raceTitleContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const raceTitleLine: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const countdownContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.9 },
  },
};

const countdownItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { days, hours, minutes } = useCountdown("2026-05-01T00:00:00");
  const isExpired = new Date() >= new Date("2026-05-01T00:00:00");

  return (
    <section id="hero" style={{ borderBottom: "1px solid #E0DDD6" }}>
      <div className="ghn-grid-2col" style={{ minHeight: "min(100dvh, 900px)" }}>

        {/* ── LEFT PANEL ── */}
        <div
          className="ghn-hero-pad"
          style={{
            padding: "2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#fff",
            borderRight: "1px solid #E0DDD6",
          }}
        >
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "inline-flex",
                fontWeight: 600,
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  background: "#ff5100",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 900,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#FF5200",
                }}
              >
                EES 2026 — GiaoHangNhanh
              </span>
            </motion.div>

            {/* Headline + Image row */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.25rem" }}>
              <motion.div
                variants={headlineContainer}
                initial="hidden"
                animate="visible"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: 0.75,
                  letterSpacing: "-0.24em",
                  marginBottom: "-0.7rem",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {HEADLINE_LINES.map(({ text, style }, i) => (
                  <div
                    key={text}
                    style={{
                      overflow: "hidden",
                      overflowClipMargin: "0.4em",
                      paddingTop: "0.15em",
                      marginTop: "-1.5em",
                    }}
                  >
                    <motion.div
                      variants={headlineLine}
                      style={{
                        fontSize: "var(--fs-hero)",
                        paddingTop: "0.2em",
                        paddingBottom: "35px",
                        color:
                          style === "solid"
                            ? "#0A1F44"
                            : style === "accent"
                            ? "#FF5200"
                            : "transparent",
                        WebkitTextStroke:
                          style === "outline" ? "4px #0A1F44" : undefined,
                        display: "block",
                      }}
                    >
                      {text}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: "1.05rem",
                color: "#444444",
                lineHeight: 1.7,
                maxWidth: "720px",
              }}
            >
              Khảo sát gắn kết nhân viên thường niên của GHN. Ý kiến của bạn là nền tảng để chúng ta cùng xây dựng GHN tốt hơn mỗi năm.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid #E0DDD6",
              paddingTop: "1.25rem",
              marginTop: "1.25rem",
            }}
          >
            {STATS.map(({ value, label }, i) => (
              <div
                key={value}
                style={{
                  borderLeft: "3px solid #FF5200",
                  paddingLeft: "1rem",
                  paddingRight: i < 2 ? "1rem" : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                    letterSpacing: "-0.04em",
                    color: "#0A1F44",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 500,
                    marginTop: "0.3rem",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <motion.div
          className="ghn-hero-right ghn-hero-pad"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "#ff5d11",
            padding: "2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* TOP GROUP */}
          <div>
            {/* Date label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                marginBottom: "1.5rem",
              }}
            >
              Khai mạc 01/05/2026 — Kết thúc 20/05/2026
            </motion.div>

            {/* Race title */}
            <motion.div
              variants={raceTitleContainer}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
                marginBottom: "1.5rem",
              }}
            >
              {RACE_TITLE_LINES.map((line) => (
                <motion.div
                  key={line}
                  variants={raceTitleLine}
                  style={{
                    fontSize: "clamp(3rem, 10vw, 10rem)",
                    color: "#fff",
                    display: "block",
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>

            {/* Countdown */}
            <div style={{ marginBottom: "1.5rem" }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.4 }}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                  marginBottom: "1rem",
                  lineHeight: 1.5,
                }}
              >
                {isExpired
                  ? "Trạng thái"
                  : "Cuộc đua tham gia khảo sát — Đơn vị nào về đích đầu tiên? Tổng giải thưởng 25 triệu đồng."}
              </motion.div>

              {isExpired ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.95, duration: 0.5 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    background: "rgba(255,255,255,0.15)",
                    padding: "0.6rem 1rem",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#F8B200",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#fff",
                    }}
                  >
                    ĐANG DIỄN RA
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  variants={countdownContainer}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.5rem",
                  }}
                >
                  {[
                    { value: days, label: "Ngày" },
                    { value: hours, label: "Giờ" },
                    { value: minutes, label: "Phút" },
                  ].map(({ value, label }) => (
                    <motion.div
                      key={label}
                      variants={countdownItem}
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        padding: "0.5rem 0.4rem",
                        textAlign: "center",
                        borderRadius: "2px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                          letterSpacing: "-0.03em",
                          color: "#fff",
                          lineHeight: 1,
                          overflow: "hidden",
                          height: "1.15em",
                          position: "relative",
                        }}
                      >
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={value}
                            initial={{ y: 10, opacity: 0, scale: 0.8 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -10, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            style={{ display: "block", lineHeight: 1.15 }}
                          >
                            {String(value).padStart(2, "0")}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      <div
                        style={{
                          fontSize: "0.58rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.55)",
                          marginTop: "0.2rem",
                        }}
                      >
                        {label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA button */}
          <motion.a
            href="#groups"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "#fff",
              color: "#FF5200",
              padding: "0.8rem 1.5rem",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textDecoration: "none",
              borderRadius: "2px",
              alignSelf: "flex-start",
            }}
          >
            Tìm hiểu ngay <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}