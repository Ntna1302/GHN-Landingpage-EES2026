"use client";

import { useScrolled } from "@/hooks/useScrolled";

const NAV_LINKS = [
  { href: "#why", label: "EES là gì?" },
  { href: "#groups", label: "Nhóm Tham Gia" },
  { href: "#race", label: "EES RACE 2026" },
  { href: "#after", label: "Sự kiện diễn ra" },
  { href: "#footer", label: "Q&A" },
];

interface NavbarProps {
  onGateClick?: () => void;
}

export default function Navbar({ onGateClick }: NavbarProps) {
  const scrolled = useScrolled();

  return (
    <nav
      className="ghn-navbar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid #E0DDD6",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        height: "68px",
        boxShadow: scrolled ? "0 2px 12px rgba(10,31,68,0.06)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Logo */}
      <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.8rem",
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    userSelect: "none",
  }}
>
  <img
    className="ghn-logo-img"
    src="/img/GHN_logo.png"
    alt="GHN"
    style={{
      height: "50px",
      width: "auto",
      borderRadius: "10px",
      objectFit: "contain",
      display: "block",
    }}
  />
  <span className="ghn-logo-text" style={{ color: "#006FAD", fontSize: "2.15rem" }}>× Bạn Nói, GHN Nghe <span className="ghn-logo-text" style={{ color: "#FF5200", fontSize: "2.15rem" }}>2026</span></span>
</div>

      {/* Nav links — hidden on mobile */}
      <div
        className="ghn-hide-mobile"
        style={{ display: "flex", gap: "2rem", alignItems: "center" }}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            style={{
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#444444",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#FF5200")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#444444")
            }
          >
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button
        className="ghn-nav-cta"
        onClick={() => {
  document.getElementById("groups")?.scrollIntoView({
    behavior: "smooth",
  });
}}
        style={{
          background: "#FF5200",
          color: "#fff",
          padding: "0.5rem 1.25rem",
          fontSize: "0.8rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          border: "none",
          borderRadius: "2px",
          fontFamily: "var(--font-heading)",
          transition: "background 0.2s",
          whiteSpace: "nowrap",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#E04800")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "#FF5200")
        }
      >
        Tham Gia Ngay →
      </button>
    </nav>
  );
}
