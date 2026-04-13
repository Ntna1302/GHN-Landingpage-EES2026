# GHN EES RACE 2026 — Landing Page

Internal employee engagement survey landing page for ~20,000+ GHN employees.
Design direction: **Editorial / Magazine / Brutalist-Corporate** — high-contrast grid layouts, bold uppercase typography, red + dark accent palette adapted to GHN brand orange + navy.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16.1.7 + React 19 + TypeScript |
| Styling | Tailwind v4 (CSS-based config — no tailwind.config.ts) |
| UI components | shadcn base-nova (@base-ui/react, NOT radix-ui) |
| Animation | framer-motion ^12 |
| Icons | lucide-react |
| Package manager | pnpm |

**Critical Tailwind v4 note:** All design tokens are in `@theme {}` blocks inside `app/globals.css`. There is no `tailwind.config.ts`.

**Critical shadcn note:** Uses `render={}` prop pattern, NOT `asChild`. Base-ui convention.

---

## Design System — Editorial Magazine Style

### Color Palette (in `globals.css`)

Adapted from the new design's red/dark palette → GHN brand colors:

```css
/* ── Primary brand ── */
--color-ghn-primary: #FF5200;      /* GHN orange → replaces design's --red (#D0021B) */
--color-ghn-accent: #F8B200;       /* golden accent → replaces design's --orange (#F5A623) */

/* ── Neutrals ── */
--color-dark: #0A1F44;             /* GHN navy → replaces design's --dark (#111) */
--color-mid: #444444;              /* body text, secondary labels */
--color-light: #F5F4F0;            /* warm neutral background */
--color-white: #FFFFFF;
--color-border: #E0DDD6;           /* section dividers, card borders, grid lines */

/* ── Extended GHN palette (for gradients / badges) ── */
--color-ghn-o1: #FF5200;
--color-ghn-o2: #F67700;
--color-ghn-o3: #F8B200;
--color-ghn-b1: #006FAD;
--color-ghn-b2: #009BE0;
--color-ghn-b3: #0055F4;
--color-ghn-navy: #0A1F44;
--color-ghn-navy-mid: #132E63;
--color-surface: #F5F7FA;
--color-surface-warm: #FFF8F3;
--color-surface-blue: #F0F7FF;
```

### Typography

```css
--font-heading: 'Be Vietnam Pro', sans-serif;   /* all headings, uppercase, tight tracking */
--font-body: 'Inter', sans-serif;                /* body text, labels */

/* ── Fluid type scale ── */
--fs-hero: clamp(2.8rem, 8vw, 7rem);     /* hero headlines */
--fs-xl: clamp(2rem, 5vw, 4rem);          /* section titles */
--fs-lg: clamp(1.3rem, 3vw, 2rem);        /* subsection titles */
--fs-md: 1.05rem;                          /* body paragraphs */
--fs-sm: 0.82rem;                          /* labels, nav links */
```

**Typography conventions:**
- All headings: **UPPERCASE**, `font-weight: 900`, negative letter-spacing (`-0.03em` to `-0.05em`)
- Section labels: `0.7rem`, `font-weight: 700`, `letter-spacing: 0.14em`, uppercase, GHN orange, with trailing `1px` line (`::after` pseudo-element)
- Body text: `color: var(--color-mid)`, `line-height: 1.65`
- Stat numbers: `font-weight: 900`, `2rem–3.5rem`, negative tracking
- Outline text effect: `-webkit-text-stroke: 2px var(--color-dark); color: transparent` for hollow letterforms

### Layout Principles

- **Grid-heavy, border-divided** — sections separated by `1px solid var(--color-border)`, cards in bordered grids (not gap-based card layouts)
- **2-column split sections** — hero, race, anonymity sections all use `grid-template-columns: 1fr 1fr` with distinct left/right treatments (e.g., left = content, right = colored panel)
- **Full-bleed colored panels** — alternating white/dark/orange backgrounds per section half
- **Minimal border-radius** — `2px` on buttons and badges only. No rounded cards. Sharp, editorial feel.
- **Dense information grid** — group cards in `3-column bordered grid`, timeline in `4-column bordered grid`
- **Sticky nav** with border-bottom divider
- **Mobile breakpoint at 900px** — all 2-col layouts collapse to single column, grid cards go `2-col` or `1-col`

### Spacing & Rhythm

- Section padding: `4rem 2.5rem`
- Grid gap: `0` (borders act as dividers, padding inside cells)
- Card internal padding: `1.5rem`
- Consistent `border-bottom: 1px solid var(--color-border)` between all major sections

---

## Project Structure

```
app/
  globals.css       ← Tailwind v4 @theme tokens + GHN brand colors + keyframes (ticker, etc.)
  layout.tsx        ← Root layout, Google Fonts (Be Vietnam Pro + Inter)
  page.tsx          ← Main page — 3-step flow controller

components/
  layout/
    Navbar.tsx          ← Sticky nav: logo left, links center, CTA button right
    Footer.tsx          ← 3-col grid footer + bottom bar
    TickerStrip.tsx     ← ★ NEW — Dark bg infinite scrolling ticker (replaces MarqueeStrip)
  sections/
    Hero.tsx            ← ★ REDESIGNED — 2-col split: left = headline + stats, right = orange panel with countdown
    WhySection.tsx      ← ★ NEW — 3-col editorial grid with dividers (why participate + past results + usage)
    GroupsSection.tsx   ← ★ NEW — 6-card bordered grid (replaces SurveyPortal card layout)
    RaceSection.tsx     ← ★ NEW — Full-bleed 2-col: left dark panel, right leaderboard with prize rows
    AnonymitySection.tsx ← ★ NEW — 2-col split: left FAQ + pills, right "3 facts" numbered list
    Timeline.tsx        ← ★ REDESIGNED — 4-col bordered grid, one column highlighted (active state)
    CtaFinal.tsx        ← ★ NEW — Dark bg 2-col CTA with headline + button
    SplashScreen.tsx    ← Auto-playing logo splash (3.5s, then advances)
    RoleGate.tsx        ← 6-group role selector + password gate for 3A/3B
  ui/                   ← shadcn components (button, card, badge, dialog, sheet, separator)
  ScrollReveal.tsx
  theme-provider.tsx

hooks/
  useHistoryStep.ts     ← Step-based browser history (splash → gate → main)
  useCountdown.ts       ← ★ NEW — Countdown timer hook targeting 2026-05-01
  useScrolled.ts

lib/
  survey-data.ts    ← Survey group definitions (id, badge, title, link, theme, target%, dates)
  utils.ts          ← cn() utility
```

---

## Page Flow

```
Load → (not ready) → Navy loading screen
     → step === 'splash' → SplashScreen (3.5s auto-advance)
     → step === 'gate'   → RoleGate (select group, password for 3A/3B)
     → step === 'main'   → Full landing page
```

State is persisted in `sessionStorage` via `useHistoryStep`. Browser back-button navigates between steps.

---

## Main Page Section Order (New Design)

| # | Component | Layout | Background |
|---|---|---|---|
| 1 | **Navbar** | Sticky, flex row: logo · links · CTA button | White, border-bottom |
| 2 | **TickerStrip** | Infinite horizontal scroll, duplicated content | Dark (`--color-dark`) |
| 3 | **Hero** | 2-col grid: `1fr 1fr`, min-height 88vh | Left: white. Right: GHN orange (`--color-ghn-primary`) |
| 4 | **WhySection** | 3-col grid with `1px` dividers: big statement · past results list · usage list | White |
| 5 | **GroupsSection** | Header: 2-col (title + intro). Body: 3×2 bordered card grid | White |
| 6 | **RaceSection** | 2-col full-bleed: left dark panel · right prize table | Left: dark. Right: white |
| 7 | **AnonymitySection** | 2-col: left warm bg FAQ · right numbered facts | Left: `--color-light`. Right: white |
| 8 | **Timeline** | 4-col bordered grid, one column `.active` with orange bg | White, active col: orange |
| 9 | **CtaFinal** | 2-col on dark bg: headline left · CTA button right | Dark |
| 10 | **Footer** | 3-col grid + bottom bar | White |

---

## Section Specs

### Navbar (`components/layout/Navbar.tsx`)
- `position: sticky; top: 0; z-index: 100`
- Logo: `"GHN × EES RACE 2026"` — "GHN" in `--color-ghn-primary`
- Nav links: uppercase, `0.82rem`, `letter-spacing: 0.05em`, color `--color-mid`
- CTA button: `bg: --color-ghn-primary`, white text, `2px` radius, bold uppercase

### TickerStrip (`components/layout/TickerStrip.tsx`)
- Replaces old `MarqueeStrip`
- Dark background, white text, `0.75rem`, bold uppercase
- Highlight values in `--color-ghn-accent` (golden): dates, percentages, prize amounts
- CSS `@keyframes ticker` — `translateX(0) → translateX(-50%)`, 18s linear infinite
- Content duplicated for seamless loop

### Hero (`components/sections/Hero.tsx`)
- **Left panel (white):**
  - Badge: `"EES 2026 — GiaoHangNhanh"` with `::before` 20px red line
  - Headline: Stacked uppercase lines — `"Tiếng / Nói / Của / Bạn"` with mixed fills (solid, outline `-webkit-text-stroke`, orange accent)
  - Subline: `1.1rem`, `--color-mid`, max-width 420px
  - Bottom stats row: 3 items with `border-left: 3px solid orange` — `≥75%` / `10'` / `6`
- **Right panel (GHN orange):**
  - Date stack: small uppercase, 70% opacity
  - Race title: `"EES RACE 2026"` — massive (clamp 3rem–8rem), white, uppercase
  - Countdown: 3-item grid (days/hours/minutes) with `rgba(255,255,255,0.12)` background items
  - CTA button: white bg, orange text, `→` arrow after

### WhySection (`components/sections/WhySection.tsx`)
- Section label: `"Vì sao tham gia?"`
- 3-col grid with `1px` divider columns between:
  - **Col 1 (2fr):** Big statement `"GHN Nghe Thật"` (xl size, "Thật" in orange) + body paragraph
  - **Col 2 (1fr):** Mini header + list of 5 past EES 2025 results with `→` markers
  - **Col 3 (1fr):** Mini header + list of 5 usage outcomes with `→` markers
- List items: `0.88rem`, `border-bottom: 1px solid var(--color-border)`

### GroupsSection (`components/sections/GroupsSection.tsx`)
- Section label: `"6 Nhóm Tham Gia"`
- Header: 2-col grid — left: big title `"Khảo Sát Riêng Cho Từng Nhóm"`, right: intro paragraph
- Body: 3×2 bordered grid (all borders, no gap)
- Each card: large faded number (`3rem`, color `--color-border`) → group code (bold) → group name (small, gray) → tool label (orange uppercase) → target badge (dark or `.high` = orange bg)
- Dates shown: `0.72rem`, gray

### RaceSection (`components/sections/RaceSection.tsx`)
- Full-bleed 2-col, no section wrapper padding
- **Left (dark bg, white text):**
  - Label: `"EES Race 2026"` in golden
  - Giant title: `"THE RACE IS ON"` — "RACE" in `--color-ghn-accent`
  - Description paragraph in `#ccc`
- **Right (white):**
  - Board title: `"4 Bảng Thi Đua — Tổng Giải 25.000.000 VNĐ"`
  - 4 prize rows: badge letter (A/B/C/D, first is filled dark) → name + unit → prize amount in orange
  - Total bar: orange bg, white text, flex between label and `25,000,000 VNĐ`

### AnonymitySection (`components/sections/AnonymitySection.tsx`)
- 2-col split
- **Left (`--color-light` bg):**
  - Big question: `"Sếp có biết tôi điền gì không?"`
  - Answer: `"KHÔNG."` in orange, `2.5rem`, 900 weight
  - Body paragraph about anonymity
  - Pill row: dark bg pills — `"Không có tên"` / `"Không có mã NV"` / `"Chỉ báo cáo nhóm ≥5"` / `"100% ẩn danh"`
- **Right (white):**
  - Section label: `"3 sự thật về EES 2026"`
  - 3 fact items: big orange number (`10'` / `1×` / `T7`) + text block with bold intro

### Timeline (`components/sections/Timeline.tsx`)
- Section label: `"Lịch triển khai"`
- 4-col bordered grid, each column: big faded number → date (orange, uppercase) → phase name (bold) → bullet list with `·` markers
- **Active column** (phase 2: Kick-off): orange background, white text, numbers `rgba(255,255,255,0.2)`
- Active state determined by current date vs phase date ranges

### CtaFinal (`components/sections/CtaFinal.tsx`)
- Dark background, 2-col grid: `1fr auto`
- Left: big headline `"Sẵn Sàng Nói Thật Chưa?"` — `"Chưa?"` in `--color-ghn-accent`
- Sub text in `#aaa`
- Right: orange CTA button with `→` + small note underneath

### Footer (`components/layout/Footer.tsx`)
- 3-col grid: brand col · contact col · docs col
- Bottom bar: `border-top`, flex between copyright and update info

---

## Survey Groups (`lib/survey-data.ts`)

| ID | Badge | Title | Tool | Target | Dates | Password |
|---|---|---|---|---|---|---|
| 1A | Nhóm 1A | NVPTTT (Vùng) & NVGN (Freight) | App Driver + QR Bưu cục | ≥70% | 08/05 – 20/05 | No |
| 1B | Nhóm 1B | Tài xế vận tải GXT & TXXT | App + QR Kho xuất phát | ≥70% | 08/05 – 20/05 | No |
| 2A | Nhóm 2A | NV Vận hành Kho: NVXL, NVPH, Admin KHL | On-site KTC + Google Form | ≥70% | 08/05 – 20/05 | No |
| 2B | Nhóm 2B | Quản lý tuyến đầu: AM/OM, Supervisor, TBC, TL | Email + Landing Page + GTalk | ≥85% | 01/05 – 07/05 | No |
| 3A | Nhóm 3A | NV Văn phòng & Hỗ trợ: Indirect HO | Email + GTalk + Mini App | ≥85% | 01/05 – 07/05 | Yes |
| 3B | Nhóm 3B | Quản lý cấp trung & cao HO: Manager & Director | Email cá nhân hóa + GTalk | ≥85% | 01/05 – 07/05 | Yes |

---

## EES Race Prize Structure

| Board | Name | Scope | Prize |
|---|---|---|---|
| A | Bảng A — GXT | Tài xế vận tải toàn quốc | 5,000,000 VNĐ |
| B | Bảng B — Miền Bắc + Trung | Vùng + Freight Ops. HN | 8,000,000 VNĐ |
| C | Bảng C — Miền Nam | Vùng + Freight Ops. HCM | 8,000,000 VNĐ |
| D | Bảng D — VP & KTC | Văn phòng HO + Các nhánh Freight | 4,000,000 VNĐ |
| **Total** | | | **25,000,000 VNĐ** |

---

## Animation Patterns

- **ScrollReveal** (`components/ScrollReveal.tsx`) — `motion.div` wrapper, `initial: { y: 45, opacity: 0 }`, `whileInView`, viewport once
- **Ticker animation** — CSS `@keyframes ticker { 0% { translateX(0) } 100% { translateX(-50%) } }`, 18s linear infinite
- **Countdown timer** — `useCountdown` hook targeting `2026-05-01T00:00:00`, updates every 30s
- **Staggered reveals** — `whileInView` with `transition.delay` stagger `0.12s` per card in grid sections
- **Hero headline** — stacked lines with mixed treatment (solid / outline / colored), fade-up on load
- **Active timeline column** — conditional class `.active` applied based on current date

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤ 900px` | All 2-col splits → 1-col. Colored right panels stack above content. Nav links hidden. |
| `≤ 900px` | `WhySection` 3-col → 1-col, dividers hidden |
| `≤ 900px` | `GroupsSection` 3-col grid → 2-col |
| `≤ 900px` | `Timeline` 4-col → 1-col |
| `≤ 900px` | `Footer` 3-col → 1-col |

---

## Key Conventions

- All sections are `'use client'` if they use framer-motion or hooks
- No `src/` directory — components at root level
- Fonts: `--font-heading` (Be Vietnam Pro), `--font-body` / `--font-sans` (Inter)
- **Minimal border-radius** — `2px` on buttons/badges only. No rounded cards.
- **Border-divided layouts** — grids use `1px solid var(--color-border)` between cells, not gap spacing
- **Section dividers** — every major section has `border-bottom: 1px solid var(--color-border)`
- Mobile-first responsive: primary breakpoint at `900px`
- All headings: uppercase, weight 900, negative letter-spacing
- Color coding: GHN orange for primary actions/accents, dark navy for authority/contrast, golden for highlights/awards
