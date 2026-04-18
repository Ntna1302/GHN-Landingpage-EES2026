"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { filter } from "framer-motion/m";

const STATS = [
  { value: "≥ 75%", label: "Mục tiêu tham gia" },
  { value: "10 phút", label: "Thời gian điền" },
  { value: "6", label: "Nhóm khảo sát" },
];

const RACE_TITLE_LINES = ["EES", "RACE", "2026"];

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
  const { days, hours, minutes } = useCountdown("2026-05-02T00:00:00");
  const isExpired = new Date() >= new Date("2026-05-01T00:00:00");

  return (
    <section
      id="hero"
      style={{
        borderBottom: "1px solid #E0DDD6",
      }}
    >
      <div className="ghn-grid-2col">

        {/* ── LEFT PANEL ── */}
        <div
          className="ghn-hero-pad"
          style={{
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#fff",
            borderRight: "1px solid #E0DDD6",
            overflow: "visible",
          }}
        >
          <div>
            {/* Headline */}
            <h1 className="ghn-hero-headline" style={{ margin: 0 }}>
              <motion.div
                className="ghn-hero-line ghn-hero-line-solid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                BẠN
              </motion.div>
              <motion.div
                className="ghn-hero-line-2 ghn-hero-line-solid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                NÓI
              </motion.div>
              <motion.div
                className="ghn-hero-line ghn-hero-line-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                GHN
              </motion.div>
              <motion.div
                className="ghn-hero-line ghn-hero-line-solid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                NGHE
              </motion.div>
            </h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: "clamp(0.82rem, 1.2vw, 1.05rem)",
                color: "#444444",
                lineHeight: 1.7,
                maxWidth: "900px",
              }}
            >
              Khảo sát gắn kết nhân viên được thực hiện thường niên của GHN. Ý kiến của bạn là nền tảng để chúng ta cùng xây dựng GHN tốt hơn mỗi ngày.
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
              paddingTop: "clamp(0.5rem, 1.2vh, 1.25rem)",
              marginTop: "clamp(0.5rem, 1.2vh, 1.25rem)",
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
                    fontSize: "clamp(1.1rem, 2vw, 2rem)",
                    letterSpacing: "-0.04em",
                    color: "#006FAD",
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
            background: "linear-gradient(122.61deg, #DEF0FF -55%, #006FAD 36.56%, #006FAD 75.62%)",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "visible",
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
              className="ghn-hero-date-label"
              style={{
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.83)",
                marginBottom: "clamp(0.4rem, 1.5vh, 1.5rem)",
              }}
            >
              Bắt đầu 02/05/2026 — Kết thúc 20/05/2026
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
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "clamp(0.75rem, 2vw, 1.5rem)",
              }}
            >
              {RACE_TITLE_LINES.map((line) => (
                <motion.div
                  key={line}
                  variants={raceTitleLine}
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 7rem)",
                    color: "#fff",
                    display: "block",
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>

            {/* Countdown */}
            <div style={{ marginBottom: "clamp(0.4rem, 1.2vh, 1.5rem)" }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.4 }}
                style={{
                  fontSize: "clamp(0.78rem, 1vw, 0.9rem)",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: "clamp(0.5rem, 1.5vw, 1rem)",
                  lineHeight: 1.6,
                }}
              >
                {isExpired
                  ? "Trạng thái"
                  : <>Cuộc đua tham gia khảo sát. Bộ phận nào sẽ về đích đầu tiên.<br /><span style={{ textTransform: "uppercase", fontWeight: 700, }}>Tổng giải thưởng 30 triệu đồng. </span></>}
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
                      fontSize: "1.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#fff",
                    }}
                  >
                    CUỘC ĐUA ĐANG DIỄN RA
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
                    gap: "clamp(0.3rem, 0.8vw, 1rem)",
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
                        background: "linear-gradient(-90deg, #fffbfb -100%, #FF5200 36.56%, #FF5200 75.62%)",
                        padding: "clamp(0.75rem, 1.5vw, 1.25rem) clamp(0.5rem, 1vw, 1rem)",
                        textAlign: "center",
                        borderRadius: "4px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                          letterSpacing: "-0.03em",
                          color: "#fff",
                          lineHeight: 1.2,
                          overflow: "hidden",
                          minHeight: "1.2em",
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
                          fontSize: "clamp(0.6rem, 0.8vw, 0.75rem)",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.7)",
                          marginTop: "0.35rem",
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
            href="#race"
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
              padding: "clamp(0.65rem, 1.2vw, 0.9rem) clamp(1.25rem, 2.5vw, 2rem)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(0.78rem, 1vw, 0.9rem)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textDecoration: "none",
              borderRadius: "10px",
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