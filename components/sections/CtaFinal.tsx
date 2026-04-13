"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function CtaFinal() {
  return (
    <section
      id="cta"
      style={{
        background: "#0A1F44",
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: "3rem",
          padding: "5rem 3.5rem",
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left — headline */}
        <ScrollReveal>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "1.5rem",
            }}
          >
            EES RACE 2026 · GiaoHangNhanh
          </div>

          <h2
            style={{
              fontFamily:
                "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ color: "#fff" }}>Sẵn Sàng</div>
            <div style={{ color: "#fff" }}>Nói Thật</div>
            <div style={{ color: "#F8B200" }}>Chưa?</div>
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              color: "#aaa",
              lineHeight: 1.65,
              maxWidth: "440px",
            }}
          >
            Mỗi phiếu khảo sát là một lá phiếu xây dựng GHN tốt hơn. Chọn
            nhóm của bạn, hoàn thành trong 10 phút và cùng đưa GHN vào top
            EES 2026.
          </p>
        </ScrollReveal>

        {/* Right — CTA */}
        <ScrollReveal delay={0.15}>
          <div style={{ textAlign: "center" }}>
            <motion.a
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
                  "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
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
                color: "rgba(255,255,255,0.3)",
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
