"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    value: "12.500",
    lines: ["Nhân viên đã tham gia EES 2025." ,"Mục tiêu 2026: tăng ≥10%"],
  },
  {
    value: "5",
    lines: ["Hành động cụ thể được triển khai sau kết quả EES."],
  },
  {
    value: "T7",
    lines: ["Kết quả phân tích & hành động thực tế, công bố toàn công ty vào tháng 7/2026"],
  },
];

export default function QuoteSection() {
  return (
    <section className="ghn-quote-section">
      {/* LEFT */}
      <div
        style={{
          padding: "4rem 2.5rem",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="ghn-quote-big-mark"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 0.8,
              color: "#fff",
              fontFamily: "Georgia, serif",
              fontWeight: 900,
            }}
          >
            &ldquo;
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              lineHeight: 1.35,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginTop: "1rem",
    textAlign: "justify",           // ← thêm dòng này
    textJustify: "inter-word",
            }}
          >
            Kết quả EES là dữ liệu quý nhất giúp tôi có để ra quyết định đúng.
            Khi bạn điền thật tôi hành động đúng chỗ. Khi không, tôi ra
            quyết định dựa trên phỏng đoán. Và phỏng đoán thì ít khi đúng.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontSize: "clamp(0.85rem, 2.4vw, 0.85rem)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "rgb(255, 255, 255)",
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          className="ghn-quote-credit"
        >
          CPO - P.TGĐ Khối Nhân Lực - Lê Thị Đoan Trinh
                  </motion.div>
      </div>

      {/* RIGHT */}
      {/* RIGHT */}
<div
  className="ghn-quote-right-inner"
  style={{
    position: "relative",
    padding: "4rem 2.5rem 0 2.5rem",
    alignItems: "center",
    overflow: "hidden",
  }}
>
  {/* Stats column */}
    <div
      className="ghn-quote-stats-col"
      style={{
        zIndex: 2,
        position: "relative",
        justifyContent: "flex-end",
      }}
    >
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1 + i * 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            borderLeft: "3px solid #FF5200",
            paddingLeft: "1rem",
          }}
        >
          <div
            className="ghn-quote-stat-value"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.04 em",
              lineHeight: 1,
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: "0.95rem",
              color: "#d4d1d1",
              marginTop: "0.3rem",
              lineHeight: 1.4,
            }}
          >
            {stat.lines.map((line, j) => (
              <span key={j}>
                {line}
                {j < stat.lines.length - 1 && <br />}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* IMAGE — cùng hàng bên phải */}
    <motion.div
      className="ghn-quote-img-wrap"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        zIndex: 2,
        lineHeight: 0,
        // marginBottom: "-80px",
      }}
    >
      <img
        src="/img/CPO.png"
        alt="GHN CPO"
        style={{
          maxHeight: "520px",
          width: "auto",
          objectFit: "contain",
          
          display: "block",      // ĐỔI TỪ FLEX SANG BLOCK
          marginBottom: 0,
          paddingRight: "clamp(0px, 3vw, 5rem)",
          //marginBottom: "-80px",
          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))",
        }}
      />
    </motion.div>
  </div>
    </section>
  );
}