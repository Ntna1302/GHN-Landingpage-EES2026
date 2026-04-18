"use client";

import { useState } from "react";
import { color, motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const EES_2025_RESULTS = [
  "App Tài xế được nâng cấp giao diện.",
  "Quy trình chụp POD đã lượt bỏ 2 bước phức tạp.",
  "Miền Bắc với chương trình giữ chân nhân sự đã chạy.",
  "Cải thiện suất ăn và hỗ trợ thêm chi phí cho NV tại KTC.",
  "Nâng cao sức khỏe tinh thần và thể chất cho nhóm NV gặp bất ổn về Sức khỏe.",
  "Quy trình cấp thiết bị IT đã có rà soát cùng Mua hàng & Tài chính.",
];

const EES_2026_USAGE = [
  "Cải thiện công cụ và quy trình thực tế",
  "Chính sách phù hợp đối với từng nhóm nhân viên",
  "Trình bày kế hoạch hành động năm 2026 cho Ban Lãnh Đạo",
  "Chia sẻ kết quả tới toàn Công ty",
  "Đo lường tiến độ cải tiến sau các hành động đã triển khai",
];

// Warm → cool gradient across items
const WARM_COLORS = ["#FF5200", "#F67700", "#F8B200", "#FF5200", "#F67700"];
const COOL_COLORS = ["#0055F4", "#006FAD", "#009BE0", "#0055F4", "#006FAD"];

// hex → rgba with alpha
function tint(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

interface InteractiveListProps {
  title: string;
  items: string[];
  colors: string[];
}

function InteractiveList({ title, items, colors }: InteractiveListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Column header */}
      <div
        style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "1.2rem",
          paddingBottom: "0.6rem",
          borderBottom: "2px solid #0A1F44",
          color: "#0A1F44",
        }}
      >
        {title}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item, i) => {
          const color = colors[i % colors.length];
          const isActive = activeIndex === i;

          return (
            <motion.div
              key={i}
              onHoverStart={() => setActiveIndex(i)}
              onHoverEnd={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : i)}
              animate={{
                backgroundColor: isActive ? tint(color, 0.07) : "rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.18 }}
              style={{
                display: "grid",
                gridTemplateColumns: "2.5rem 1fr",
                gap: "0.75rem",
                alignItems: "center",
                padding: "0.7rem 0.5rem 0.7rem 0.5rem",
                borderBottom: "1px solid #E0DDD6",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {/* Accent bar — per-item color */}
              <motion.div
                animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "15%",
                  bottom: "15%",
                  width: "3px",
                  background: color,
                  transformOrigin: "top",
                }}
              />

              {/* Number — colored by item */}
              <motion.span
                animate={{
                  color: isActive ? color : tint(color, 0.35),
                  scale: isActive ? 1.15 : 1,
                  x: isActive ? 4 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  transformOrigin: "left center",
                  display: "block",
                  color: tint(color, 0.35),
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>

              {/* Text */}
              <motion.span
                animate={{
                  color: isActive ? "#0A1F44" : "#666",
                  x: isActive ? 4 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.45,
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {item}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer counter */}
      <div
        style={{
          marginTop: "1rem",
          fontSize: "0.7rem",
          color: activeIndex !== null ? colors[activeIndex % colors.length] : "#aaa",
          letterSpacing: "0.05em",
          fontWeight: 500,
          transition: "color 0.2s",
        }}
      >

      </div>
    </div>
  );
}

export default function WhySection() {
  return (
    <section
      id="why"
      style={{ borderBottom: "1px solid #E0DDD6", background: "#fff" }}
    >
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: 900,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#FF5200",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          paddingTop: "2.5rem",
          paddingLeft: "2.5rem",
        }}
      >
        EES LÀ GÌ ?
        <span style={{ flex: 1, height: "1px", background: "#E0DDD6" }} />
      </div>

      <div className="ghn-grid-3col" >
        {/* Col 1 — Big statement */}
        <div style={{ padding: "3rem 2.5rem", borderRight: "1px solid #E0DDD6" }}>
          <ScrollReveal>
            {/* Title EES */}
            <div className="ghn-why-ees-title" style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(0.72rem, 3vw, 50px)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              <span style={{ color: "#FF5200" }}>EES</span>{" "}
              <span style={{ color: "#006FAD" }}>- Khảo sát gắn kết nhân viên.</span>
            </div>

            {/* 2 cột bên trong */}
            <div className="ghn-why-inner-grid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1.5rem, 3vw, 3rem)" }}>
              {/* Trái: GHN Nghe Thật Làm Thật */}
              <div className="ghn-why-sidebar" style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 4vw, 40px)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
                paddingRight: "2rem",
                borderRight: "1px solid #E0DDD6",
              }}>
                <div style={{ color: "#0A1F44" }}>GHN</div>
                <div style={{ color: "#0A1F44" }}>Nghe</div>
                <div style={{ color: "#0A1F44" }}>Thật</div>
                <div style={{ color: "#0A1F44" }}>Làm Thật</div>
              </div>

              {/* Phải: text giải thích */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}>
                <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.7, margin: 0 }}>
                  Khảo sát để lắng nghe tâm tư anh chị em đang cảm thấy thế nào khi làm việc tại GHN.
                  Không phải để đánh giá ai mà để hiểu điều gì đang ổn và điều gì cần tốt hơn.
                </p>
                <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.7, margin: 0 }}>
                  EES không phải khảo sát hình thức. Kết quả năm 2025 trực tiếp
                  tạo ra 5 hành động cụ thể từ cải tiến App Tài xế đến chương
                  trình giữ chân nhân sự Miền Bắc.{" "}
                  <strong style={{ color: "#0A1F44" }}>
                    Với hơn 78% nhân viên toàn công ty đã tham gia.
                  </strong>
                  <br />
                  <strong style={{ color: "#0A1F44" }}>Năm 2026</strong> GHN
                  muốn đi xa hơn. Và điều đó bắt đầu từ tiếng nói của bạn.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Col 2 — Past results: warm palette */}
        <div style={{ padding: "3rem 2rem", borderRight: "1px solid #E0DDD6" }}>
          <ScrollReveal delay={0.1}>
            <InteractiveList
              title="Kết quả EES 2025:"
              items={EES_2025_RESULTS}
              colors={WARM_COLORS}
            />
          </ScrollReveal>
        </div>

        {/* Col 3 — 2026 usage: cool palette */}
        <div style={{ padding: "3rem 2rem" }}>
          <ScrollReveal delay={0.2}>
            <InteractiveList
              title="Kết quả EES 2026 sẽ dùng để:"
              items={EES_2026_USAGE}
              colors={COOL_COLORS}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
