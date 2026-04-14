"use client";

import { surveyGroups } from "@/lib/survey-data";
import ScrollReveal from "@/components/ScrollReveal";

export default function GroupsSection() {
  return (
    <section
      id="groups"
      style={{
        borderBottom: "1px solid #E0DDD6",
        background: "#fff",
      }}
    >
      {/* Header — 2-col */}
      <div
        className="ghn-grid-2col"
        style={{
          borderBottom: "1px solid #E0DDD6",
          padding: "3rem 2.5rem",
        }}
      >
        <div style={{ paddingRight: "3rem" }}>
          <div className="section-label">6 Nhóm Tham Gia</div>
          <h2
            style={{
              fontFamily:
                "var(--font-heading)",
              fontWeight: 700,
              fontSize: "var(--fs-xl)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              color: "#0A1F44",
              lineHeight: 1.2,
            }}
          >
            Khảo Sát Riêng
            <br />
            Cho Từng{" "}
            <span style={{ color: "#FF5200" }}>Nhóm</span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderLeft: "1px solid #E0DDD6",
            paddingLeft: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              color: "#444",
              lineHeight: 1.7,
              maxWidth: "900px",
            }}
          >
            GHN thiết kế <strong style={{ color: "#0A1F44" }}>6 bộ câu hỏi riêng biệt</strong> để đảm bảo mỗi nhóm nhân viên được hỏi đúng những gì họ đang trải qua — 
            không dùng chung một bộ câu hỏi cho tất cả.
          </p>
        </div>
      </div>

      {/* 3×2 card grid */}
      <div
        className="ghn-grid-cards"
        style={{ border: "0", borderTop: "0" }}
      >
        {surveyGroups.map((group, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);

          return (
            <ScrollReveal key={group.id} delay={i * 0.08}>
              <div
                style={{
                  padding: "2rem 2rem 1.75rem",
                  borderRight: col !== 2 ? "1px solid #E0DDD6" : "none",
                  borderBottom: row === 0 ? "1px solid #E0DDD6" : "none",
                  borderLeft: col === 0 ? "none" : "none",
                  background: "#fff",
                  height: "100%",
                  position: "relative",
                }}
              >
                {/* Faded number */}
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    fontFamily:
                      "var(--font-heading)",
                    color: "#E0DDD6",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Group code */}
                <div
                  style={{
                    fontFamily:
                      "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: "#0A1F44",
                    marginBottom: "0.2rem",
                  }}
                >
                  {group.badge}
                </div>

                {/* Group name */}
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "#888",
                    marginBottom: "0.9rem",
                    lineHeight: 1.45,
                  }}
                >
                  {group.title}
                </div>

                {/* Tool */}
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#FF5200",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  {group.tool}
                </div>

                {/* Bottom row: badge + dates */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid #E0DDD6",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      background: group.targetHigh ? "#FF5200" : "#0A1F44",
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      padding: "0.3rem 1.5rem",
                      borderRadius: "2px",
                    }}
                  >
                    {group.target}
                  </span>
                  <span
                    style={{ fontSize: "0.72rem", color: "#aaa" }}
                  >
                    {group.startDate}–{group.endDate}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Outer borders to complete grid box */}
      <style>{`
        #groups .ghn-grid-cards {
          border-left: 1px solid #E0DDD6;
          border-right: 1px solid #E0DDD6;
          border-bottom: 1px solid #E0DDD6;
        }
      `}</style>
    </section>
  );
}
