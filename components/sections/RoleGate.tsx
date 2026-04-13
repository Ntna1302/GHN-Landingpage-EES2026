"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { surveyGroups, groupPasswords } from "@/lib/survey-data";
import type { SurveyGroup } from "@/lib/survey-data";

interface RoleGateProps {
  onComplete: (groupId: string) => void;
  onBack?: () => void;
}

export default function RoleGate({ onComplete, onBack }: RoleGateProps) {
  const [selected, setSelected] = useState<SurveyGroup | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [entering, setEntering] = useState(false);

  const handleGroupSelect = (group: SurveyGroup) => {
    if (entering) return;
    setSelected(group);
    setError("");
    setPassword("");

    if (!group.requiresPassword) {
      setEntering(true);
      setTimeout(() => onComplete(group.id), 500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected || entering) return;

    const correct = groupPasswords[selected.id];
    if (password === correct) {
      setEntering(true);
      setTimeout(() => onComplete(selected.id), 400);
    } else {
      setError("Mật khẩu không đúng. Vui lòng kiểm tra email cá nhân hóa.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F4F0",
        fontFamily: "var(--font-body, 'Inter', sans-serif)",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: "#0A1F44",
          padding: "1rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
            fontWeight: 900,
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#FF5200" }}>GHN</span>
          <span style={{ color: "#fff" }}> × EES RACE 2026</span>
        </div>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "color 0.2s",
              fontFamily: "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            ← Quay lại
          </button>
        )}
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "4rem 2.5rem",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "3rem" }}
        >
          <div className="section-label">Bước 1 — Chọn nhóm của bạn</div>
          <h1
            style={{
              fontFamily: "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              color: "#0A1F44",
              marginBottom: "0.75rem",
              lineHeight: 1,
            }}
          >
            Bạn thuộc{" "}
            <span style={{ color: "#FF5200" }}>nhóm nào?</span>
          </h1>
          <p style={{ color: "#444", fontSize: "1rem", maxWidth: "480px" }}>
            Chọn đúng nhóm để truy cập khảo sát phù hợp. Một số nhóm yêu cầu
            mật khẩu từ email cá nhân hóa.
          </p>
        </motion.div>

        {/* Group cards grid */}
        <div
          className="ghn-grid-cards"
          style={{ border: "1px solid #E0DDD6" }}
        >
          {surveyGroups.map((group, i) => {
            const isSelected = selected?.id === group.id;
            const col = i % 3;
            const row = Math.floor(i / 3);

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onClick={() => handleGroupSelect(group)}
                style={{
                  padding: "1.75rem",
                  borderRight: col !== 2 ? "1px solid #E0DDD6" : "none",
                  borderBottom: row === 0 ? "1px solid #E0DDD6" : "none",
                  cursor: entering ? "default" : "pointer",
                  background: isSelected ? "#0A1F44" : "#fff",
                  transition: "background 0.25s ease",
                  position: "relative",
                }}
              >
                {/* Faded number */}
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    fontFamily:
                      "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
                    color: isSelected
                      ? "rgba(255,255,255,0.08)"
                      : "#E0DDD6",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {i + 1}
                </div>

                {/* Badge */}
                <div
                  style={{
                    display: "inline-block",
                    background: isSelected ? "#FF5200" : "#0A1F44",
                    color: "#fff",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.2rem 0.55rem",
                    borderRadius: "2px",
                    marginBottom: "0.75rem",
                  }}
                >
                  {group.badge}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: isSelected ? "#fff" : "#0A1F44",
                    marginBottom: "0.35rem",
                    lineHeight: 1.4,
                    textTransform: "uppercase",
                    letterSpacing: "0.01em",
                  }}
                >
                  {group.title}
                </div>

                {/* Tool */}
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: isSelected ? "#F8B200" : "#FF5200",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                    marginBottom: "0.9rem",
                  }}
                >
                  {group.tool}
                </div>

                {/* Bottom row */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  <span
                    style={{
                      background: group.targetHigh
                        ? "#FF5200"
                        : isSelected
                        ? "rgba(255,255,255,0.15)"
                        : "#0A1F44",
                      color: "#fff",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "0.15rem 0.45rem",
                      borderRadius: "2px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {group.target}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: isSelected
                        ? "rgba(255,255,255,0.5)"
                        : "#888",
                    }}
                  >
                    {group.startDate} – {group.endDate}
                  </span>
                </div>

                {/* Lock indicator */}
                {group.requiresPassword && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: isSelected
                        ? "rgba(248,178,0,0.2)"
                        : "rgba(10,31,68,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.65rem",
                    }}
                  >
                    🔒
                  </div>
                )}

                {/* Selected check */}
                {isSelected && !group.requiresPassword && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "#FF5200",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Password prompt */}
        <AnimatePresence>
          {selected?.requiresPassword && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{
                marginTop: "2rem",
                padding: "2rem",
                border: "1px solid #0A1F44",
                background: "#fff",
              }}
            >
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                {selected.badge} — Yêu cầu mật khẩu
              </div>
              <p
                style={{
                  color: "#444",
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                  lineHeight: 1.65,
                }}
              >
                Nhập mật khẩu được gửi trong{" "}
                <strong>email cá nhân hóa EES 2026</strong> của bạn.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Nhập mật khẩu..."
                  autoFocus
                  style={{
                    flex: "1 1 220px",
                    padding: "0.75rem 1rem",
                    border: `1px solid ${error ? "#FF5200" : "#E0DDD6"}`,
                    borderRadius: "2px",
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-body, 'Inter', sans-serif)",
                    outline: "none",
                    color: "#0A1F44",
                    background: "#fff",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.75rem 2rem",
                    background: "#FF5200",
                    color: "#fff",
                    border: "none",
                    borderRadius: "2px",
                    fontFamily:
                      "var(--font-heading, 'Be Vietnam Pro', sans-serif)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  Xác nhận →
                </button>
              </form>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    color: "#FF5200",
                    fontSize: "0.82rem",
                    marginTop: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  ✕ {error}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <p
          style={{
            marginTop: "2rem",
            fontSize: "0.75rem",
            color: "#aaa",
            textAlign: "center",
          }}
        >
          Cần hỗ trợ? Liên hệ{" "}
          <span style={{ color: "#FF5200" }}>ees2026@ghn.vn</span>
        </p>
      </div>
    </div>
  );
}
