"use client";

import ScrollReveal from "@/components/ScrollReveal";

const PRIZE_BOARDS = [
  {
    letter: "A",
    name: "Bảng A: Vận hành B2B - Giao Hàng Nặng",
    unit: "(Các Bộ Phận Vận Hành - Trừ HN và HCM)",
    prize: "3.000.000 VNĐ",
    filled: true,
  },
  {
    letter: "B",
    name: "Bảng B: Vùng ",
    unit: "(14 Vùng bao gồm Bộ phận Vận hành B2B HN và HCM)",
    prize: "15.000.000 VNĐ",
    filled: false,
  },
  {
    letter: "C",
    name: "Bảng C: Kho Trung Chuyển",
    unit: "(04 cụm KTC lớn)",
    prize: "8.000.000 VNĐ",
    filled: true,
  },
  {
    letter: "D",
    name: "Bảng D: Văn Phòng",
    unit: "(Các khối Phòng ban HO)",
    prize: "5.000.000 VNĐ",
    filled: false,
  },
];

const GIFT_IMAGES = [
  { src: "/img/gifts/gift-01.png", alt: "Nón Bảo Hiểm" },
  { src: "/img/gifts/gift-02.png", alt: "Áo khỉ" },
  { src: "/img/gifts/gift-03.png", alt: "Áo Polo Tay Dài" },
  { src: "/img/gifts/gift-04.png", alt: "Áo Polo Tay Ngắn" },
  { src: "/img/gifts/gift-05.png", alt: "Túi Bao Tử" },
  // { src: "/img/gifts/gift-06.png", alt: "" },
];

export default function RaceSection() {
  return (
    <section
      id="race"
      style={{ borderBottom: "1px solid #E0DDD6" }}
    >
      <div style={{ display: "flex" }}>
        {/* ── LEFT — dark ── */}
        <div
          style={{
            width: "50%",
            flexShrink: 0,
            // background: "#0A1F44",
            background: "linear-gradient(135deg, #006FAD 0%, #006FAD 50%, #03293f83 100%)", 
            padding: "3.5rem 3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
              // gap: "3rem",
            position: "relative",
            overflow: "hidden",
          }} className="race-left"
        >
          {/* Grid texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              pointerEvents: "none",
            }}
          />

          {/* TOP: Label + Title */}
          <div style={{ position: "relative" }}>
            <ScrollReveal>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#F8B200",
                  marginBottom: "1.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                EES Race 2026
                <span
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "1px",
                    background: "#F8B200",
                  }}
                />
              </div>

              <div
              className="race-is-on"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                  lineHeight: 1.25,
                  marginBottom: "2rem",
                }}
              > 
                <div style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#fff" }}>CUỘC ĐUA</div>
                <div style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#fc7739" }}>BẮT ĐẦU</div>
                <div style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#fff" }}></div>
                <div style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#fff" }}></div>
                <div style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#fff" }}>TỪ ĐÂY</div>

              </div>
            </ScrollReveal>
          </div>

          {/* BOTTOM: 2 blocks */}
          <div style={{ position: "relative" }}>
            <ScrollReveal delay={0.15}>
              {/* Block 1 — Tập thể */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "1.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#fff",
                    marginBottom: "0.75rem",
                  }}
                >
                  Giải thưởng dành cho tập thể :
                </div>
                <div
                className="ghn-block-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#ffffff",
                      lineHeight: 1.7,
                      maxWidth: "320px",
                      textAlign: "justify",
                    }}
                  >
                    Khối phòng ban đạt tỉ lệ tham gia cao nhất và làm khảo sát nhanh nhất sẽ có cơ hội nhận thưởng. <br />
                    Cùng nhau tạo nên sự khác biệt, mỗi phiếu khảo sát đều 
                    có giá trị.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", minWidth: "260px" }}>
                    {[
                      { value: "4", label: "Bảng thi đua" },
                      { value: "30M", label: "Tổng giải thưởng" },
                    ].map(({ value, label }) => (
                      <div
                        key={value}
                        style={{
                          textAlign: "center",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "6px",
                          padding: "1rem 1.25rem",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "2.8rem",
                            letterSpacing: "-0.04em",
                            color: "#fff",
                            lineHeight: 1,
                            textShadow: "0 0 20px rgba(248,178,0,0.3)",
                          }}
                        >
                          {value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.65rem",
                            color: "rgba(255,255,255,0.4)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontWeight: 600,
                            marginTop: "0.4rem",
                          }}
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Block 2 — Cá nhân */}
              <div
                style={{
                  background: "rgba(255,82,0,0.08)",
                  border: "1px solid rgba(255,82,0,0.15)",
                  borderLeft: "3px solid #FF5200",
                  borderRadius: "8px",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#fff",
                    marginBottom: "0.75rem",
                  }}
                >
                  Giải thưởng dành cho cá nhân :
                </div>
                <div
                className="ghn-block-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "2rem",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      lineHeight: 1.7,
                      maxWidth: "320px",
                      textAlign: "justify",
                    }}
                  >
                    Mỗi cá nhân tham gia khảo sát không chỉ góp phần tạo nên thành công chung, mà còn có cơ hội nhận những phần quà hấp dẫn. <br />
                    Tốc độ hoàn thành, mức độ tham gia và tinh thần đóng góp sẽ là yếu tố quyết định để ghi danh các cá nhân may mắn và xuất sắc nhất.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", minWidth: "260px" }}>
                    <div
                      style={{
                        gridColumn: "1 / -1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "6px",
                        padding: "1rem 1.25rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "clamp(2.8rem, 4vw, 3.5rem)",
                          letterSpacing: "-0.04em",
                          color: "#fff",
                          lineHeight: 1,
                          textShadow: "0 0 20px rgba(248,178,0,0.3)",
                        }}
                      >
                        + 200
                      </div>
                      <div
                        style={{
                          fontSize: "0.65rem",
                          color: "rgba(255,255,255,0.4)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 600,
                          marginTop: "0.4rem",
                        }}
                      >
                        Phần Quà hấp dẫn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── RIGHT — white + strip bar ── */}
        <div
          style={{
            width: "50%",
            minWidth: 0,
            background: "#fff",
            borderLeft: "1px solid #E0DDD6",
            display: "flex",
            flexDirection: "column",
          }} className="race-right"
        >
          {/* Prize rows */}
          <div
            style={{
              padding: "3.5rem 3rem",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <ScrollReveal delay={0.1}>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "1.5rem",
                }}
              >
                4 Bảng Thi Đua: Tổng Giải 30.000.000 VNĐ
              </div>

              <div style={{ background: "linear-gradient(180deg, #FAFAF8 0%, #fff 100%)", borderRadius: "4px", overflow: "hidden" }}>
                {PRIZE_BOARDS.map((board, i) => (
                  <div
                    key={board.letter}
                    className="ghn-prize-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      padding: "1.25rem 1rem",
                      borderBottom: i < PRIZE_BOARDS.length - 1 ? "1px solid #E0DDD6" : "none",
                      backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(255,82,0,0.03) 100%)",
                      cursor: "pointer",
                      transition: "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
                      borderRadius: "2px",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(8px)";
                      e.currentTarget.style.background = "linear-gradient(90deg, transparent 0%, rgba(255,82,0,0.06) 100%)";
                      e.currentTarget.style.boxShadow = "inset 3px 0 0 #FF5200";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.background = "linear-gradient(90deg, transparent 0%, rgba(255,82,0,0.03) 100%)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "2px",
                        background: board.filled ? "#006FAD" : "transparent",
                        border: board.filled ? "none" : "2px solid #006FAD",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: board.filled ? "#fff" : "#006FAD",
                        flexShrink: 0,
                      }}
                    >
                      {board.letter}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="ghn-prize-row"
                        style={{
                            fontWeight: 700,
                            fontSize: "0.92rem",
                            color: "#0A1F44",
                            textTransform: "uppercase",
                            letterSpacing: "0.02em",
                            marginBottom: "0.15rem",
                            fontFamily: "var(--font-heading)",
                        }}
                      >
                        {board.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#888" }}>
                        {board.unit}
                      </div>
                    </div>
                    <div className="ghn-prize-row"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        letterSpacing: "-0.02em",
                        color: "#FF5200",
                        whiteSpace: "nowrap",
                        background: "rgba(255,82,0,0.06)",
                        padding: "0.4rem 0.75rem",
                        borderRadius: "4px",
                        border: "1px solid rgba(255,82,0,0.1)",
                      }}
                    >
                      {board.prize}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total bar */}
              <div
                style={{
                  
                  background: "linear-gradient(90deg, #FF5200, #FF6B00)",
                    padding: "1.1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "1.5rem",
                    borderRadius: "4px",
                    boxShadow: "0 4px 16px rgba(255,82,0,0.25)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  Tổng giải thưởng
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    letterSpacing: "-0.02em",
                    color: "#fff",
                  }}
                >
                  30.000.000 VNĐ
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Giải thưởng cá nhân + Gift Strip Bar ── */}
          <div
            style={{
              background:"linear-gradient(145deg, #03293f83 0%, #006FAD 50%, #006FAD 100%)",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              width: "100%",
              boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Label */}
            <div
              style={{
                padding: "1rem 3rem 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                Phần quà dành cho các cá nhân xuất sắc và may mắn nhất
              </div>
            </div>

            {/* Strip */}
            <div
              style={{
                padding: "1rem 0",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  animation: "giftMarquee 60s linear infinite",
                  width: "max-content",
                }}
              >
                {[...GIFT_IMAGES, ...GIFT_IMAGES, ...GIFT_IMAGES, ...GIFT_IMAGES].map((gift, i) => (
                  <div
                    key={i}
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    
                    <div
                      style={{
                        width: "clamp(80px, 25vw, 200px)",
                        height: "clamp(70px, 22vw, 175px)",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.2)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={gift.src}
                        alt={gift.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                        onError={(e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          if (el.parentElement) {
                            el.parentElement.innerHTML = `<span style="font-size:1.8rem">🎁</span>`;
                          }
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 0.85)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        textAlign: "center",
                        maxWidth: "80px",
                        lineHeight: 1.3,
                        textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                      }}
                    >
                      {gift.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}