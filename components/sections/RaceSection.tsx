"use client";

import ScrollReveal from "@/components/ScrollReveal";

const PRIZE_BOARDS = [
  {
    letter: "A",
    name: "Bảng A — GXT",
    unit: "Tài xế vận tải toàn quốc",
    prize: "5.000.000 VNĐ",
    filled: true,
  },
  {
    letter: "B",
    name: "Bảng B — Miền Bắc + Trung",
    unit: "Vùng + Freight Ops. HN",
    prize: "8.000.000 VNĐ",
    filled: false,
  },
  {
    letter: "C",
    name: "Bảng C — Miền Nam",
    unit: "Vùng + Freight Ops. HCM",
    prize: "8.000.000 VNĐ",
    filled: false,
  },
  {
    letter: "D",
    name: "Bảng D — VP & KTC",
    unit: "Văn phòng HO + Các nhánh Freight",
    prize: "4.000.000 VNĐ",
    filled: false,
  },
];

export default function RaceSection() {
  return (
    <section
      id="race"
      style={{ borderBottom: "1px solid #E0DDD6" }}
    >
      {/* Full-bleed 2-col, no wrapper padding */}
      <div className="ghn-grid-2col">
        {/* Left — dark */}
        <div
          style={{
            background: "#0A1F44",
            padding: "5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <ScrollReveal>
              {/* Label */}
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#F8B200",
                  marginBottom: "1.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                EES Race 2026
                <span
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "1px",
                    background: "#F8B200",
                  }}
                />
              </div>

              {/* Giant title */}
              <div
                style={{
                  fontFamily:
                    "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                  lineHeight: 0.85,
                  marginBottom: "2.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                    color: "#fff",
                  }}
                >
                  THE
                </div>
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                    color: "#F8B200",
                  }}
                >
                  RACE
                </div>
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                    color: "#fff",
                  }}
                >
                  IS ON
                </div>
              </div>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#aaa",
                  lineHeight: 1.7,
                  maxWidth: "340px",
                }}
              >
                Nhóm đạt tỷ lệ tham gia cao nhất trong bảng sẽ nhận thưởng.
                Cùng nhau tạo nên sự khác biệt — mỗi phiếu đều có giá trị.
              </p>
            </ScrollReveal>
          </div>

          {/* Bottom stat */}
          <div
            style={{
              position: "relative",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "2rem",
              display: "flex",
              gap: "3rem",
            }}
          >
            {[
              { value: "4", label: "Bảng thi đua" },
              { value: "25M", label: "Tổng giải thưởng" },
            ].map(({ value, label }) => (
              <div key={value}>
                <div
                  style={{
                    fontFamily:
                      "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "2.5rem",
                    letterSpacing: "-0.04em",
                    color: "#fff",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — white */}
        <div
          style={{
            background: "#fff",
            borderLeft: "1px solid #E0DDD6",
            padding: "5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ScrollReveal delay={0.1}>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: "1.5rem",
              }}
            >
              4 Bảng Thi Đua — Tổng Giải 25.000.000 VNĐ
            </div>

            {/* Prize rows */}
            <div style={{ marginBottom: "0" }}>
              {PRIZE_BOARDS.map((board, i) => (
                <div
                  key={board.letter}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1.25rem 0",
                    borderBottom:
                      i < PRIZE_BOARDS.length - 1
                        ? "1px solid #E0DDD6"
                        : "none",
                  }}
                >
                  {/* Badge letter */}
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "2px",
                      background: board.filled ? "#0A1F44" : "transparent",
                      border: board.filled
                        ? "none"
                        : "2px solid #0A1F44",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily:
                        "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: board.filled ? "#fff" : "#0A1F44",
                      flexShrink: 0,
                    }}
                  >
                    {board.letter}
                  </div>

                  {/* Name + unit */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        color: "#0A1F44",
                        textTransform: "uppercase",
                        letterSpacing: "0.01em",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {board.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#888",
                      }}
                    >
                      {board.unit}
                    </div>
                  </div>

                  {/* Prize */}
                  <div
                    style={{
                      fontFamily:
                        "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "-0.02em",
                      color: "#FF5200",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {board.prize}
                  </div>
                </div>
              ))}
            </div>

            {/* Total bar */}
            <div
              style={{
                background: "#FF5200",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                Tổng giải thưởng
              </span>
              <span
                style={{
                  fontFamily:
                    "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}
              >
                25.000.000 VNĐ
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
