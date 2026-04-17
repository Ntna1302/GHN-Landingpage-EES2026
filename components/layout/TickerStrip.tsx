"use client";

const ITEMS = [
  { text: "EES RACE 2026", accent: false },
  { text: "02/05 – 20/05/2026", accent: true },
  { text: "TỔNG GIẢI THƯỞNG", accent: false },
  { text: "30.000.000 VNĐ", accent: true },
  { text: "20.000+ NHÂN VIÊN GHN", accent: false },
  { text: "MỤC TIÊU ≥75%", accent: true },
  { text: "6 NHÓM THAM GIA", accent: false },
  { text: "TIẾNG NÓI CỦA BẠN", accent: true },
  { text: "HOÀN THÀNH TRONG 10'", accent: false },
  { text: "100% Bảo mật", accent: true },
  { text: "GHN × EES 2026", accent: false },
  { text: "RACE IS ON", accent: true },
];

const SEPARATOR = "·";

export default function TickerStrip() {
  const content = ITEMS.flatMap((item, i) => [
    item,
    { text: SEPARATOR, accent: false, isSep: true },
  ]);

  return (
    <div
      className="ghn-ticker-wrap"
      style={{
            background: "linear-gradient(122.61deg, #DEF0FF -55%, #006FAD 36.56%, #DEF0FF 200.62%)",

        borderBottom: "2.5px solid rgb(239, 160, 14)",
        borderTop: "2.5px solid rgb(239, 160, 14)",
        overflow: "hidden",
        height: "35px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          animation: "ticker 35s linear infinite",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {/* Duplicated for seamless loop */}
        {[0, 1].map((copy) => (
          <span key={copy} style={{ display: "flex", alignItems: "center" }}>
            {content.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: (item as { isSep?: boolean }).isSep
                    ? "rgba(255,255,255,0.2)"
                    : item.accent
                    ? "#d2cfcf"
                    : "rgb(255, 255, 255)",
                  padding: (item as { isSep?: boolean }).isSep
                    ? "0 0.75rem"
                    : "0 0.5rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                {item.text}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
