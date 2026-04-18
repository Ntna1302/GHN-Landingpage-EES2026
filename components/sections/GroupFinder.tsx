"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Portal from "@/components/Portal";

const GROUPS = [
  {
    num: "01",
    code: "Nhóm 1A", 
    name: "NV Giao nhận",
    detail: "NVPTTT, NVGN (GTX)\nLàm khảo sát qua App Driver hoặc quét QR tại bưu cục / kho xuất phát.",
    method: "App Driver + QR tại bưu cục",
    date: "08/05 – 20/05/2026",
    start: "2026-05-08",
    end: "2026-05-20",
    target: "Mục tiêu ≥70%",
    tabLabel: "Nhóm 1A",
    tabName: "NV Giao nhận",
    tabSub: "NVPTTT, NVGN (GTX)",
    link: "https://docs.google.com/forms/d/e/xxxxx/viewform",
  },
    {
    num: "02",
    code: "Nhóm 1B",
    name: "Tài xế vận tải",
    detail: "Tài xế GXT & Tài Xế Xe Tải\nLàm khảo sát qua App Driver hoặc quét QR tại bưu cục / kho xuất phát.",
    method: "App Driver + QR tại bưu cục",
    date: "08/05 – 20/05/2026",
    start: "2026-05-08",
    end: "2026-05-20",
    target: "Mục tiêu ≥70%",
    tabLabel: "Nhóm 1B",
    tabName: "Tài xế vận tải",
    tabSub: "Tài xế GXT & Tài Xế Xe Tải (KTC)",
    link: "https://forms.gle/jfar4njijTKCT2J37",
  },
  {
    num: "03",
    code: "Nhóm 2A",
    name: "Vận hành Kho",
    detail: "NVXL (Vùng), NVPH (KTC), KHL, Warehouse\nLàm khảo sát tập trung on-site tại KTC theo ca — EX Team hỗ trợ trực tiếp.",
    method: "On-site KTC + Tablet + Google Form",
    date: "08/05 – 20/05/2026",
    start: "2026-05-08",
    end: "2026-05-20",
    target: "Mục tiêu ≥70%",
    tabLabel: "Nhóm 2A",
    tabName: "Vận hành Kho",
    tabSub: "NVXL (Vùng), NVPH (KTC), KHL, Warehouse",
    link: "https://docs.google.com/forms/d/e/xxxxx/viewform",
  },
  {
    num: "04",
    code: "Nhóm 2B",
    name: "Quản lý Tuyến đầu",
    detail: "AM, OM, Supervisor, TBC, Ops. Team Leaders\nNhận link cá nhân qua email hoặc GTalk.",
    method: "Email cá nhân + GTalk + Landing Page",
    date: "01/05 – 07/05/2026",
    start: "2026-05-02",
    end: "2026-05-07",
    target: "Mục tiêu ≥85%",
    tabLabel: "Nhóm 2B",
    tabName: "Quản lý Tuyến đầu",
    tabSub: "AM, OM, Supervisor, TBC, Team Leaders",
    link: "https://docs.google.com/forms/d/e/xxxxx/viewform",
  },
  {
    num: "05",
    code: "Nhóm 3A",
    name: "NV Văn phòng",
    detail: "Khối Hỗ trợ, NV gián tiếp (Indirect)\nNhận email cá nhân hóa + GTalk + Mini App.",
    method: "Email mail-merge + GTalk + Mini App",
    date: "01/05 – 07/05/2026",
    start: "2026-05-02",
    end: "2026-05-07",
    target: "Mục tiêu ≥85%",
    tabLabel: "Nhóm 3A",
    tabName: "Văn phòng HO",
    tabSub: "Khối Hỗ trợ, NV gián tiếp (Indirect)",
    link: "https://docs.google.com/forms/d/e/xxxxx/viewform",
  },
   {
    num: "06",
    code: "Nhóm 3B",
    name: "Quản lý HO",
    detail: "Manager & Director các phòng ban\nNhận email cá nhân hóa + GTalk + Mini App.",
    method: "Email mail-merge + GTalk + Mini App",
    date: "01/05 – 07/05/2026",
    start: "2026-05-02",
    end: "2026-05-07",
    target: "Mục tiêu ≥85%",
    tabLabel: "Nhóm 3B",
    tabName: "Quản lý HO",
    tabSub: "Manager & Director các phòng ban",
    link: "https://docs.google.com/forms/d/e/xxxxx/viewform",
  },
];

function getStatus(start: string, end: string) {
  const now = new Date();
  const s = new Date(start + "T00:00:00");
  const e = new Date(end + "T23:59:59");
  if (now < s) return "upcoming";
  if (now <= e) return "active";
  return "ended";
}

export default function GroupFinder() {
  const [selected, setSelected] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const group = selected !== null ? GROUPS[selected] : null;
  const status = group ? getStatus(group.start, group.end) : null;

  const handleSelect = (i: number) => {
    setSelected(selected === i ? null : i);
  };

  const handleSurvey = () => {
    if (!group || status !== "active") return;
    setIframeLoaded(false);
    setProgress(0);
    setModalOpen(true);
    setTimeout(() => setProgress(30), 100);
    setTimeout(() => setProgress(70), 600);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIframeLoaded(false);
    setProgress(0);
  };

  // Lock body scroll while modal is open (preserves scroll position on close)
  useEffect(() => {
    if (modalOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [modalOpen]);

  return (
    <section
      id="groups"
      style={{
        padding: "3.5rem 2.5rem",
        borderBottom: "1px solid #E0DDD6",
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
        Bạn thuộc nhóm nào ?
        <span style={{ flex: 1, height: "1px", background: "#E0DDD6" }} />
      </div>

      {/* Intro */}
      <div className="ghn-finder-intro">
        <motion.div
          className="ghn-finder-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#006FAD",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Tìm</span>
          <span>Nhóm</span>
          <span style={{ color: "#FF5200" }}>Của Tôi</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.92rem",
            color: "#444",
            lineHeight: 1.65,
          }}
        >
          GHN thiết kế 6 bộ câu hỏi khác nhau cho từng nhóm, đảm bảo bạn
          được hỏi đúng về công việc thực tế của mình. Chọn nhóm
          của bạn bên dưới để xem lịch và cách làm khảo sát.
        </motion.div>
      </div>

      {/* Group tabs */}
      <div className="ghn-finder-tabs">
        {GROUPS.map((g, i) => {
          const isSel = selected === i;
          return (
            <motion.div
              key={g.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              onClick={() => handleSelect(i)}
              style={{
                padding: "1.2rem 1rem",
                borderRight: (i + 1) % 3 !== 0 ? "1px solid #E0DDD6" : "none",
                cursor: "pointer",
                background: isSel ? "#007ED4" : "#fff",
                transition: "background 0.2s",
                userSelect: "none",
                borderBottom: i < 3 ? "1px solid #E0DDD6" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isSel ? "#F8B200" : "#FF5200",
                  marginBottom: "0.4rem",
                }}
              >
                {g.tabLabel}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: isSel ? "#fff" : "#007ED4",
                  marginBottom: "0.2rem",
                }}
              >
                {g.tabName}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: isSel ? "rgba(255,255,255,0.5)" : "#888",
                  lineHeight: 1.3,
                }}
              >
                {g.tabSub}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Result card */}
      <AnimatePresence>
        {group && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="ghn-finder-card">
              <div
                className="ghn-finder-big-num"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "4rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: "#E0DDD6",
                  lineHeight: 1,
                }}
              >
                {group.num}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FF5200",
                    marginBottom: "0.3rem",
                  }}
                >
                  {group.code}
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#007ED4",
                    marginBottom: "0.4rem",
                  }}
                >
                  {group.name}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#888",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {group.detail}
                </div>
              </div>
              <div className="ghn-finder-right" style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "0.4rem",
                  }}
                >
                  {group.method}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#0A1F44",
                    marginBottom: "0.6rem",
                  }}
                >
                  {group.date}
                </div>
                <div
                  style={{
                    background: "#FF5200",
                    color: "#fff",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "1px",
                    display: "inline-block",
                    marginBottom: "0.7rem",
                  }}
                >
                  {group.target}
                </div>
                <br />
                <motion.button
                  className="ghn-finder-btn"
                  whileHover={{ scale: status === "active" ? 1.03 : 1 }}
                  whileTap={{ scale: status === "active" ? 0.97 : 1 }}
                  onClick={handleSurvey}
                  style={{
                    background: status === "active" ? "#007ED4" : "#aaa",
                    color: "#fff",
                    border: "none",
                    padding: "0.65rem 1.3rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: status === "active" ? "pointer" : "default",
                    borderRadius: "2px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  {status === "upcoming" && "Sắp diễn ra"}
                  {status === "active" && "Làm Khảo Sát →"}
                  {status === "ended" && "Đã kết thúc"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Survey Modal (inline, không cần SurveyModal component) ── */}
      <Portal>
      <AnimatePresence>
        {modalOpen && group && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(10, 31, 68, 0.75)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "1rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                width: "96vw",
                maxWidth: "1100px",
                height: "92vh",
                maxHeight: "92vh",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Accent bar */}
              <div style={{ height: 4, background: "linear-gradient(90deg, #FF5200, #FF8C00, #FFB347)", flexShrink: 0 }} />

              {/* Chrome bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                  borderBottom: "1px solid #F0F0F0",
                  background: "#FAFAFA",
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                      background: "linear-gradient(135deg, #FF5200, #FF8C00)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <rect x="1" y="1" width="4" height="4" rx="1" fill="white" />
                      <rect x="6" y="1" width="4" height="4" rx="1" fill="white" opacity=".6" />
                      <rect x="1" y="6" width="4" height="4" rx="1" fill="white" opacity=".6" />
                      <rect x="6" y="6" width="4" height="4" rx="1" fill="white" opacity=".35" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 12, color: "#6E6E73", fontWeight: 500 }}>
                    docs.google.com /{" "}
                    <span style={{ color: "#1C1C1E", fontWeight: 600 }}>
                      {group.code}: {group.name}
                    </span>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      background: "#F0FDF4",
                      border: "1px solid #BBF7D0",
                      borderRadius: 100,
                      padding: "3px 10px",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#166534",
                    }}
                  >
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
                    Ẩn danh
                  </div>
                  <button
                    onClick={closeModal}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      border: "1px solid #E8E8E8",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#6E6E73",
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Progress */}
              <div style={{ padding: "10px 16px 0", background: "#fff", flexShrink: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 11, color: "#8E8E93", fontWeight: 500 }}>
                    {iframeLoaded ? "Form đã tải xong" : "Đang tải khảo sát..."}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#FF5200" }}>
                    {iframeLoaded ? 100 : progress}%
                  </span>
                </div>
                <div style={{ height: 4, background: "#F0F0F0", borderRadius: 4, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${iframeLoaded ? 100 : progress}%`,
                      background: "linear-gradient(90deg, #FF5200, #FF8C00, #FFB347)",
                      borderRadius: 4,
                      transition: "width 0.6s cubic-bezier(.4,0,.2,1)",
                    }}
                  />
                </div>
              </div>

              {/* Iframe */}
              <div style={{ position: "relative", background: "#F9F9FB", flex: 1, minHeight: 0, overflow: "auto" }}>
                {!iframeLoaded && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      background: "#F9F9FB",
                      zIndex: 1,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "3px solid #FFF0EB",
                        borderTopColor: "#FF5200",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                    <span style={{ fontSize: 13, color: "#8E8E93", fontWeight: 500 }}>
                      Đang tải form khảo sát...
                    </span>
                    <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
                  </div>
                )}
                <iframe
                  src={`${group.link}?embedded=true`}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "400px",
                    border: "none",
                    display: "block",
                    opacity: iframeLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                  onLoad={() => {
                    setIframeLoaded(true);
                    setProgress(100);
                  }}
                />
              </div>

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderTop: "1px solid #F0F0F0",
                  background: "#fff",
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#8E8E93" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
                  Ẩn danh hoàn toàn · Không lưu thông tin cá nhân
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </Portal>
    </section>
  );
}