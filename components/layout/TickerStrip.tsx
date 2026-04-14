"use client";

const ITEMS = [
  { text: "EES RACE 2026", accent: false },
  { text: "01/05 – 20/05/2026", accent: true },
  { text: "TỔNG GIẢI THƯỞNG", accent: false },
  { text: "25.000.000 VNĐ", accent: true },
  { text: "20.000+ NHÂN VIÊN GHN", accent: false },
  { text: "MỤC TIÊU ≥75%", accent: true },
  { text: "6 NHÓM THAM GIA", accent: false },
  { text: "TIẾNG NÓI CỦA BẠN", accent: true },
  { text: "HOÀN THÀNH TRONG 10'", accent: false },
  { text: "100% ẨN DANH", accent: true },
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
      style={{
        background: "#0A1F44",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
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
          animation: "ticker 25s linear infinite",
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
                    ? "#F8B200"
                    : "rgba(255,255,255,0.75)",
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
