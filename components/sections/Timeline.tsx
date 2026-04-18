"use client";

import { motion } from "framer-motion";

const PHASES = [
  {
    num: "01",
    month: "20/05/2026",
    name: "Đóng khảo sát",
    bullets: [
      "Thông báo cảm ơn toàn công ty",
      "Công bố kết quả EES Race (cá nhân, tập thể)",
      "Trao giải ",
    ],
    startDate: new Date("2026-05-20"),
    endDate: new Date("2026-05-31"),
  },
  {
    num: "02",
    month: "Tháng 6/2026",
    name: "Phân tích & Báo cáo",
    bullets: [
      "Tính các chỉ số gắn kết",
      "Phân loại và phân tích theo nhóm chủ đề",
      "Báo cáo kết quả theo Khối, phòng ban",
      "Kế hoạch và hành động cụ thể",
    ],
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-06-30"),
  },
  {
    num: "03",
    month: "Tháng 7/2026",
    name: "Chia sẻ toàn công ty",
    bullets: [
      "Công bố kết quả tổng quan",
      "Những điểm mà GHN đang làm tốt",
      "Các hành động dự kiến cải tiến từ GHN",
      "Trao đổi cụ thể đối với từng Khối/Phòng ban",
    ],
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-07-31"),
  },
  {
    num: "04",
    month: "T8 – T9/2026",
    name: "Theo dõi và Đo lường hành động",
    bullets: [
      "Triển khai kế hoạch hành động",
      "Báo cáo tiến độ cải tiến hàng tháng",
      "Đo lường tiến độ cải tiến",
    ],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-09-30"),
  },
];

function getActivePhase(): number {
  const now = new Date();
  for (let i = 0; i < PHASES.length; i++) {
    if (now >= PHASES[i].startDate && now <= PHASES[i].endDate) return i;
  }
  if (now < PHASES[0].startDate) return -1;
  return -1;
}

export default function AfterSection() {
  const activeIdx = getActivePhase();

  return (
    <section
      id="after"
      style={{
        padding: "3.5rem 2.5rem",
        borderBottom: "1px solid #E0DDD6",
      }}
    >
      {/* Label */}
      <div
        className="ghn-timeline-heading"
        style={{
          fontWeight: 900,
          textTransform: "uppercase",
          color: "#FF5200",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          marginBottom: "1.5rem",
          minWidth: 0,
        }}
      >
        <span
          style={{
            whiteSpace: "nowrap",
            fontSize: "clamp(1.1rem, 3vw, 1.2rem)",
            letterSpacing: "0.08em",
            flexShrink: 0,
          }}
        >
          Sau khảo sát GHN sẽ làm gì
        </span>
        <span style={{ flex: 1, height: "1px", background: "#E0DDD6", minWidth: 0 }} />
      </div>

      {/* 4-col grid */}
      <div className="ghn-after-grid">
        {PHASES.map((phase, i) => {
          const isActive = i === activeIdx;

          return (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                padding: "1.5rem",
                borderRight: i < 3 ? "1px solid #E0DDD6" : "none",
                position: "relative",
                background: isActive ? "#f75d16fd"  : "#fff",
                transition: "background 0.3s",
              }}
            >
              {/* Arrow connector */}
              {i < 3 && (
                <div
                  className="ghn-after-arrow"
                  style={{
                    position: "absolute",
                    right: "-10px",
                    top: "1.5rem",
                    width: "18px",
                    height: "18px",
                    background: isActive ? "#ff5e00"  : "#E0DDD6",
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                    zIndex: 1,
                    transition: "background 0.3s",
                  }}
                />
              )}

              {/* Big number */}
              <motion.div
                className="ghn-phase-num"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: isActive ? "rgb(255, 255, 255)" : "#006FAD",
                  lineHeight: 1,
                }}
              >
                {phase.num}
              </motion.div>

              {/* Month */}
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: isActive ? "rgba(255,255,255,0.6)" : "#FF5200",
                  margin: "0.3rem 0",
                }}
              >
                {phase.month}
              </div>

              {/* Name */}
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: isActive ? "#fff" : "#0A1F44",
                  marginBottom: "0.7rem",
                }}
              >
                {phase.name}
              </div>

              {/* Bullets */}
              <div>
                {phase.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    style={{
                      fontSize: "0.78rem",
                      color: isActive ? "rgba(255,255,255,0.8)" : "#888",
                      lineHeight: 1.35,
                      padding: "0.3rem 0",
                      borderBottom: `1px dashed ${isActive ? "rgba(255,255,255,0.2)" : "#E0DDD6"}`,
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: isActive ? "#fff" : "#FF5200",
                        fontSize: "1.3rem",
                        lineHeight: 0.9,
                        flexShrink: 0,
                      }}
                    >
                      ·
                    </span>
                    {bullet}
                  </div>
                ))}
              </div>

             
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}