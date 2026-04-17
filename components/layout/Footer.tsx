"use client";

export default function Footer() {
  return (
    <footer
    id="footer"
      style={{
        borderTop: "1px solid #E0DDD6",
        background: "#fff",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Main grid */}
      <div
        className="ghn-grid-footer ghn-footer-grid"
        style={{ padding: "3rem 2.5rem", gap: 0 }}
      >
        {/* Brand col */}
        <div style={{ paddingRight: "clamp(0px, 2vw, 3rem)" }}>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.1rem",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            <span style={{ color: "#FF5200" }}>GHN</span>
            <span style={{ color: "#0A1F44" }}> × EES 2026</span>
          </div>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#444",
              lineHeight: 1.65,
              maxWidth: "100%",
              marginBottom: "1.25rem",
            }}
          >
            Khảo sát gắn kết nhân viên thường niên của GiaoHangNhanh với tiếng
            nói của 20.000+ nhân viên định hình tương lai công ty.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#FF5200",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.3rem 0.7rem",
              borderRadius: "2px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#fff",
                display: "inline-block",
                animation: "fadeIn 1s ease infinite alternate",
              }}
            />
            Khảo sát mở: 01/05/2026
          </div>
        </div>

        {/* Contact col */}
        <div
          style={{
            borderLeft: "1px solid #E0DDD6",
            paddingLeft: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#FF5200",
              marginBottom: "1rem",
            }}
          >
            Liên hệ hỗ trợ
          </div>
          {[
            { label: "HR Business Partner", value: "hr.bp@ghn.vn" },
            { label: "Đội EES 2026", value: "ees2026@ghn.vn" },
            { label: "Hotline nội bộ", value: "1900-GHN" },
          ].map(({ label, value }) => (
            <div key={label} style={{ marginBottom: "0.75rem" }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "0.15rem",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#0A1F44",
                  fontWeight: 500,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Docs col */}
        <div
          style={{
            borderLeft: "1px solid #E0DDD6",
            paddingLeft: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#FF5200",
              marginBottom: "1rem",
            }}
          >
            Tài liệu
          </div>
          {[
            "Hướng dẫn tham gia",
            "FAQ — Câu hỏi thường gặp",
            "Chính sách bảo mật",
            "Kết quả EES 2025",
            "Liên hệ Ban EES",
          ].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                display: "block",
                fontSize: "0.82rem",
                color: "#444",
                marginBottom: "0.6rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#FF5200")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#444")
              }
            >
              → {item}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="ghn-footer-bottom"
        style={{
          borderTop: "1px solid #E0DDD6",
          padding: "1rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "#888" }}>
          © 2026 GiaoHangNhanh. Nội bộ — Không phát hành ra ngoài.
        </span>
      </div>
    </footer>
  );
}
