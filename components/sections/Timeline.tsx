"use client";

import ScrollReveal from "@/components/ScrollReveal";

const PHASES = [
  {
    num: "01",
    date: "12–30 APR",
    name: "Chuẩn bị",
    bullets: [
      "Xác định nhóm & phân quyền",
      "Thiết lập hệ thống khảo sát",
      "Gửi email thông báo nội bộ",
      "Training HRBP toàn quốc",
    ],
    startDate: new Date("2026-04-12"),
    endDate: new Date("2026-04-30"),
  },
  {
    num: "02",
    date: "01–07 MAY",
    name: "Kick-off",
    bullets: [
      "Khảo sát Nhóm 2B, 3A, 3B mở",
      "Email cá nhân hóa gửi tới 3A/3B",
      "HRBP hỗ trợ tại HO",
      "Dashboard tracking real-time",
    ],
    startDate: new Date("2026-05-01"),
    endDate: new Date("2026-05-07"),
  },
  {
    num: "03",
    date: "08–20 MAY",
    name: "Triển khai diện rộng",
    bullets: [
      "Mở khảo sát Nhóm 1A, 1B, 2A",
      "QR bưu cục & kho xuất phát",
      "Reminder push notification",
      "Theo dõi tỷ lệ theo vùng",
    ],
    startDate: new Date("2026-05-08"),
    endDate: new Date("2026-05-20"),
  },
  {
    num: "04",
    date: "21–31 MAY",
    name: "Tổng kết",
    bullets: [
      "Đóng khảo sát & xuất kết quả",
      "Phân tích & báo cáo nhóm",
      "Công bố nhóm thắng Race",
      "Trao thưởng & chia sẻ insights",
    ],
    startDate: new Date("2026-05-21"),
    endDate: new Date("2026-05-31"),
  },
];

function getActivePhase(): number {
  const now = new Date();
  for (let i = 0; i < PHASES.length; i++) {
    if (now >= PHASES[i].startDate && now <= PHASES[i].endDate) {
      return i;
    }
  }
  // If before all phases, show first; if after, show last
  if (now < PHASES[0].startDate) return 0;
  return PHASES.length - 1;
}

export default function Timeline() {
  const activeIdx = getActivePhase();

  return (
    <section
      id="timeline"
      style={{
        borderBottom: "1px solid #E0DDD6",
        background: "#fff",
      }}
    >
      <div style={{ padding: "3rem 2.5rem 0" }}>
        <div className="section-label">Lịch triển khai</div>
      </div>

      {/* 4-col bordered grid */}
      <div
        className="ghn-grid-4col"
        style={{
          borderTop: "1px solid #E0DDD6",
          borderLeft: "1px solid #E0DDD6",
          borderRight: "1px solid #E0DDD6",
          borderBottom: "1px solid #E0DDD6",
          margin: "0 0 0 0",
        }}
      >
        {PHASES.map((phase, i) => {
          const isActive = i === activeIdx;

          return (
            <ScrollReveal key={phase.num} delay={i * 0.1}>
              <div
                style={{
                  padding: "2.5rem 2rem",
                  borderRight:
                    i < PHASES.length - 1
                      ? "1px solid #E0DDD6"
                      : "none",
                  background: isActive ? "#FF5200" : "#fff",
                  height: "100%",
                  transition: "background 0.3s",
                }}
              >
                {/* Big faded number */}
                <div
                  style={{
                    fontFamily:
                      "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
                    fontWeight: 900,
                    fontSize: "4rem",
                    letterSpacing: "-0.05em",
                    color: isActive
                      ? "rgba(255,255,255,0.15)"
                      : "#E0DDD6",
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {phase.num}
                </div>

                {/* Date */}
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: isActive ? "rgba(255,255,255,0.75)" : "#FF5200",
                    marginBottom: "0.5rem",
                  }}
                >
                  {phase.date}
                </div>

                {/* Phase name */}
                <div
                  style={{
                    fontFamily:
                      "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
                    fontWeight: 900,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: isActive ? "#fff" : "#0A1F44",
                    marginBottom: "1.5rem",
                    lineHeight: 1.2,
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
                        color: isActive
                          ? "rgba(255,255,255,0.8)"
                          : "#444",
                        lineHeight: 1.55,
                        padding: "0.4rem 0",
                        borderBottom: `1px solid ${
                          isActive
                            ? "rgba(255,255,255,0.1)"
                            : "#E0DDD6"
                        }`,
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: isActive
                            ? "rgba(255,255,255,0.5)"
                            : "#bbb",
                          flexShrink: 0,
                        }}
                      >
                        ·
                      </span>
                      {bullet}
                    </div>
                  ))}
                </div>

                {/* Active badge */}
                {isActive && (
                  <div
                    style={{
                      marginTop: "1.5rem",
                      display: "inline-block",
                      background: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "2px",
                    }}
                  >
                    ● Hiện tại
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
