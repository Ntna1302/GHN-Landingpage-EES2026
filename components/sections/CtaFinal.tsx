"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function CtaFinal() {
  return (
    <section
      id="cta"
      style={{
        background: "linear-gradient(90deg, #cfccccb6 -100%, #007ED4 50%, #007ED4 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      <div className="ghn-cta-inner">
        {/* Left — headline */}
        <ScrollReveal>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#FFF",
              marginBottom: "1.5rem",
            }}
          >
            EES 2026 · BẠN NÓI,GHN NGHE
          </div>

          <h2
            style={{
              fontFamily:
                "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ color: "#fff" }}>Sẵn Sàng</div>
            <div style={{ color: "#fff" }}>Nói Thật</div>
            <div style={{ color: "#fc7739" }}>Chưa?</div>
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              color: "#fff",
              lineHeight: 1.65,
              maxWidth: "440px",
            }}
          >
              
            Mỗi phiếu khảo sát là một đóng góp để GHN tốt hơn mỗi ngày. Chọn nhóm của bạn, hoàn thành trong 10 phút và cùng đưa GHN bứt phá trong năm 2026.
          </p>
        </ScrollReveal>

        {/* Right — CTA */}
        <ScrollReveal delay={0.15}>
          <div style={{ textAlign: "center" }}>
            <motion.a
              className="ghn-cta-btn"
              href="#groups"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "#FF5200",
                color: "#fff",
                padding: "1.1rem 2.25rem",
                fontFamily:
                  "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                textDecoration: "none",
                borderRadius: "2px",
                marginBottom: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              Tham Gia Ngay →
            </motion.a>

            <div
              style={{
                fontSize: "0.72rem",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Hoàn thành trong 10 phút · 100% ẩn danh
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #FF5200, #F8B200, #FF5200)",
        }}
      />
    </section>
  );
}
