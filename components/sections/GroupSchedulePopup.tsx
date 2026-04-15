"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

const SCHEDULE = [
  {
    id: "1A/1B",
    name: "Shipper & Tài xế",
    desc: "NVPTTT, NVGN, GXT, TXXT",
    start: "12/05",
    end: "20/05",
    color: "#FF5200",
  },
  {
    id: "2A",
    name: "Vận hành Kho",
    desc: "NVXL, NVPH, Admin KHL",
    start: "12/05",
    end: "20/05",
    color: "#FF5200",
  },
  {
    id: "2B",
    name: "Quản lý tuyến đầu",
    desc: "AM/OM, Supervisor, TBC, TL",
    start: "02/05",
    end: "05/05",
    color: "#0A1F44",
  },
  {
    id: "3A/3B",
    name: "Văn phòng & Quản trị",
    desc: "Indirect HO, Manager, Director",
    start: "06/05",
    end: "11/05",
    color: "#0A1F44",
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.25, ease: [0.55, 0, 1, 0.45] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const barVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function parseDate(dateStr: string): Date {
  const [day, month] = dateStr.split("/");
  return new Date(2026, Number(month) - 1, Number(day));
}

export default function GroupSchedulePopup({ open, onClose }: Props) {
  const { days, hours, minutes, isExpired } = useCountdown("2026-05-01T00:00:00");

  const today = new Date(2026,4,3);
  const hasActiveGroup = SCHEDULE.some((s) => {
    return today >= parseDate(s.start) && today <= parseDate(s.end);
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(141, 159, 189, 0.6)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            padding: "1rem",
          }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: "850px",
              maxHeight: "90vh",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* ── Header ── */}
            <div
              style={{
                background: "#0A1F44",
                padding: "1.75rem 1.75rem 1.5rem",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "2px",
                        background: "#FF5200",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#FF5200",
                      }}
                    >
                      EES Race 2026
                    </span>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "none",
                      color: "rgba(255,255,255,0.5)",
                      width: "30px",
                      height: "30px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ✕
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    style={{
                      fontFamily: 'SVN-Helvetica Now',
                      fontWeight: 700,
                      fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.4,
                      marginBottom: "0.75rem",
                    }}
                  >
                    Lịch khảo sát
                    <span style={{ color: "#F8B200" }}> theo nhóm</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  {isExpired ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "rgba(248,178,0,0.15)",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "2px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#F8B200",
                          animation: "blink 1.4s ease-in-out infinite",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#F8B200",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Đang diễn ra
                      </span>
                    </div>
                  ) : (
                    <>
                      {[
                        { v: days, l: "ngày" },
                        { v: hours, l: "giờ" },
                        { v: minutes, l: "phút" },
                      ].map(({ v, l }) => (
                        <div
                          key={l}
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            padding: "0.3rem 0.6rem",
                            borderRadius: "2px",
                            textAlign: "center",
                            minWidth: "48px",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontWeight: 700,
                              fontSize: "1.3rem",
                              color: "#fff",
                              lineHeight: 1,
                            }}
                          >
                            {String(v).padStart(2, "0")}
                          </div>
                          <div
                            style={{
                              fontSize: "0.55rem",
                              fontWeight: 500,
                              color: "rgba(255,255,255,0.4)",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              marginTop: "0.15rem",
                            }}
                          >
                            {l}
                          </div>
                        </div>
                      ))}
                      <span
                        style={{
                          fontSize: "0.65rem",
                          color: "rgba(255,255,255,0.4)",
                          fontWeight: 500,
                        }}
                      >
                        còn lại
                      </span>
                    </>
                  )}
                </motion.div>
              </div>
            </div>

            {/* ── Schedule cards ── */}
            <div
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                overflowY: "auto",
                flex: 1,
              }}
            >
              {SCHEDULE.map((g, i) => {
                const startDate = parseDate(g.start);
                const endDate = parseDate(g.end);
                const isActive = today >= startDate && today <= endDate;
                const isDimmed = hasActiveGroup && !isActive;

                return (
                  <motion.div
                    key={g.id}
                    className="ghn-sched-card"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ x: isDimmed ? 0 : 4 }}
                    style={{
                      padding: "1.25rem 1.75rem",
                      border: isActive
                        ? `4px solid ${g.color}`
                        : "1px solid #E0DDD6",
                      borderRadius: "14px",
                      background: isActive ? `${g.color}10` : "#fff",
                      boxShadow: isActive
                        ? `0 4px 16px ${g.color}25`
                        : "none",
                      scale: isActive ? 1.02 : 1,
                      opacity: isDimmed ? 0.4 : 1,
                      filter: isDimmed ? "blur(1.5px)" : "none",
                      transition: "opacity 0.3s ease, filter 0.3s ease",
                    }}
                  >
                    {isActive && (
                      <div
                        style={{
                          position: "absolute",
                          top: "8px",
                          left: "10px",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "#fff",
                          background: g.color,
                          padding: "0.2rem 0.5rem",
                          borderRadius: "10px",
                          letterSpacing: "0.05em",
                        }}
                      >
                        ĐANG DIỄN RA
                      </div>
                    )}

                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.6rem",
                        color: g.color,
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {g.id}
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "1.2rem",
                          color: "#0A1F44",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {g.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#888",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {g.desc}
                      </div>
                      <div
                        style={{
                          height: "4px",
                          background: "#E0DDD6",
                          borderRadius: "2px",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          custom={i}
                          variants={barVariants}
                          initial="hidden"
                          animate="visible"
                          style={{
                            height: "100%",
                            background: g.color,
                            transformOrigin: "left",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="ghn-sched-dates"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "0.4rem",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: "#22C55E",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                        }}
                      >
                        MỞ
                      </div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#0A1F44",
                        }}
                      >
                        {g.start}/2026
                      </div>
                      <div
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: "#f50505",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                        }}
                      >
                        KẾT THÚC
                      </div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#f85306",
                        }}
                      >
                        {g.end}/2026
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Footer ── */}
            <div
              style={{
                background: "#F5F4F0",
                padding: "1rem 1.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #E0DDD6",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "0.68rem",
                  color: "#888",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#22C55E",
                      display: "inline-block",
                    }}
                  />
                  100% ẩn danh
                </span>
                <span>·</span>
                <span>10 phút</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "#FF5200",
                  letterSpacing: "-0.01em",
                }}
              >
                25.000.000 VNĐ
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}