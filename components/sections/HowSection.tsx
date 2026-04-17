"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    chip: "Bất kỳ lúc nào",
    title: "Nhận link / Quét QR",
    body: "Link khảo sát được gửi qua email, GTalk OG, App Driver hoặc dán QR tại bưu cục/KTC của bạn. Không cần đăng nhập thêm.",
  },
  {
    num: "02",
    chip: "10 phút là xong",
    title: "Điền thật 26 câu hỏi",
    body: "Mỗi nhóm có 26 câu được thiết kế riêng. Phần lớn là chọn từ 1-10. Có 3 câu hỏi mở để bạn nói thêm nếu muốn.",
  },
  {
    num: "03",
    chip: "Tháng 7/2026",
    title: "GHN chia sẻ lại với bạn",
    body: 'Kết quả phân tích và kế hoạch hành động sẽ được công bố toàn công ty. Ý kiến của bạn sẽ được chuyển thành những thay đổi cụ thể.',
  },
];

export default function HowSection() {
  return (
    <section
      id="how"
      style={{
        padding: "3.5rem 2.5rem",
        borderBottom: "1px solid #E0DDD6",
        background: "#F5F4F0",
      }}
    >
      {/* Label */}
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#FF5200",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          marginBottom: "1.5rem",
        }}
      >
        Cách làm 
        <span style={{ flex: 1, height: "1px", background: "#E0DDD6" }} />
      </div>

      {/* Steps grid */}
      <div className="ghn-steps-grid">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              padding: "2rem 1.5rem",
              borderRight: i < 2 ? "1px solid #E0DDD6" : "none",
              position: "relative",
              background: "#fff",
            }}
          >
            {/* Arrow connector */}
            {i < 2 && (
              <div
                className="ghn-step-arrow"
                style={{
                  position: "absolute",
                  right: "-1px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#E0DDD6",
                  width: "20px",
                  height: "20px",
                  clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                  zIndex: 1,
                }}
              />
            )}

            {/* Big number */}
            <motion.div
              className="ghn-step-num"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "5rem",
                fontWeight: 700,
                color: "#ff5100",
                lineHeight: 0.9,
                letterSpacing: "-0.05em",
              }}
            >
              {step.num}
            </motion.div>

            {/* Chip */}
            <div
              style={{
                display: "inline-block",
                background: "#006FAD",
                color: "#fff",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.25rem 0.6rem",
                borderRadius: "1px",
                marginBottom: "0.5rem",
                marginTop: "0.6rem",
              }}
            >
              {step.chip}
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#007ED4",
                letterSpacing: "-0.01em",
                margin: "0.6rem 0 0.4rem",
              }}
            >
              {step.title}
            </div>

            {/* Body */}
            <div
              style={{
                fontSize: "0.82rem",
                color: "#888",
                lineHeight: 1.55,
              }}
            >
              {step.body}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}