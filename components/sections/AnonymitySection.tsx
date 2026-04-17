"use client";

import ScrollReveal from "@/components/ScrollReveal";

const PILLS = [
  "Không có tên",
  "Không có mã NV",
  "Chỉ báo cáo nhóm ≥5",
  "100% bảo mật",
];

const FACTS = [
  {
    value: "10'",
    title: "Chỉ 10 phút",
    body: "Khảo sát được thiết kế gọn gàng, hoàn thành trong 10 phút. Không yêu cầu đăng nhập hay cài ứng dụng mới.",
  },
  {
    value: "1×",
    title: "Mỗi người một lần",
    body: "Mỗi nhân viên chỉ điền một lần duy nhất. Hệ thống không cho phép điền lại hay sửa sau khi gửi.",
  },
  {
    value: "T7",
    title: "Mở cả ngày nghỉ",
    body: "Khảo sát mở 24/7 trong suốt thời gian triển khai, kể cả thứ 7 và chủ nhật. Bạn tự chọn lúc thuận tiện.",
  },
];

export default function AnonymitySection() {
  return (
    <section
      id="anonymity"
      style={{ borderBottom: "1px solid #E0DDD6" 
      }}
    >
      <div className="ghn-grid-2col">
        {/* Left — warm bg */}
        <div
          style={{
            background: "#fff",
            padding: "3rem 3.5rem",
            borderRight: "1px solid #E0DDD6",
          }}
        >
          <ScrollReveal>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#f55e07",
                marginBottom: "1.5rem",
                display: "flex",          // ← thêm dòng này
                alignItems: "center",    // ← thêm dòng này
                gap: "0.7rem",            // ← thêm dòng này
                }}
                > 
                Bảo Mật
                <span style={{ flex: 1, height: "1px", background: "#E0DDD6" }} />
            </div>

            {/* Big question */}
            <div
              style={{
                fontFamily:
                  "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 2.5vw, 2.25rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                color: "#006FAD",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              "Sếp có biết tôi
              điền gì không ?"
            </div>

            {/* Big answer */}
            <div
              style={{
                fontFamily:
                  "var(--font-heading)",
                fontWeight: 700,
                fontSize: "4.75rem",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                color: "#FF5200",
                marginBottom: "1.5rem",
              }}
            >
              KHÔNG.
            </div>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#444",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "380px",
              }}
            >
              Câu trả lời được bảo mật. Không tên, không mã NV. Dữ liệu chỉ báo cáo theo nhóm 
              tối thiểu 5 người để không ai bị nhận diện cá nhân. Kể cả HR cũng không thấy câu trả lời của từng người.
            </p>

            {/* Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  style={{
                    background: "#006FAD",
                    color: "#fff",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right — white */}
        <div style={{ background: "#F5F4F0", padding: "3rem 3.5rem" }}>
          <ScrollReveal delay={0.1}>
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
                    marginBottom: "1.5rem",
                  }}
                >
                  3 Điều cần biết
                  <span style={{ flex: 1, height: "1px", background: "#E0DDD6" }} />
                </div>

            {FACTS.map(({ value, title, body }, i) => (
              <div
                key={value}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  padding: "2rem 0",
                  borderBottom:
                    i < FACTS.length - 1
                      ? "1px solid #E0DDD6"
                      : "none",
                  alignItems: "flex-start",
                }}
              >
                {/* Big value */}
                <div
                  className="ghn-fact-val"
                  style={{
                    fontFamily:
                      "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "4.5rem",
                    letterSpacing: "-0.04em",
                    color: "#FF5200",
                    lineHeight: 1,
                    minWidth: "80px",
                    flexShrink: 0,
                  }}
                >
                  {value}
                </div>

                {/* Text block */}
                <div>
                  <div
                    style={{
                      fontFamily:
                        "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      color: "#007ED4",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#444",
                      lineHeight: 1.65,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
