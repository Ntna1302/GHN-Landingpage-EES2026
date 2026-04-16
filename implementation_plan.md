# Responsive Fix Execution Plan — EES RACE 2026

## Problem Statement

The following sections **break on mobile/tablet devices** (Samsung, iPhone, MacBook, etc.):

| # | Component | File | Severity |
|---|-----------|------|----------|
| 1 | **Hero** | `components/sections/Hero.tsx` | 🔴 Critical |
| 2 | **WhySection** | `components/sections/WhySection.tsx` | 🔴 Critical |
| 3 | **QuoteSection** | `components/sections/QuoteSection.tsx` | 🟠 High |
| 4 | **Navbar** | `components/layout/Navbar.tsx` | 🟠 High |
| 5 | **UrgencyBar** | `components/layout/UrgencyBar.tsx` | 🟡 Medium |
| 6 | **Footer** | `components/layout/Footer.tsx` | 🟡 Medium |
| 7 | **GroupSchedulePopup** | `components/sections/GroupSchedulePopup.tsx` | 🟡 Medium |

> [!NOTE]
> These sections are **already responsive** and need NO changes:
> `AnonymitySection`, `GroupFinder`, `HowSection`, `RaceSection`, `Timeline`, `FaqSection`, `CtaFinal`

---

## Root Cause Analysis

The broken sections share these common problems:

1. **Hard-coded inline font sizes** (e.g. `fontSize: "50px"`, `"40px"`, `"3rem"`) — no `clamp()` or media-query reduction
2. **Fixed inline paddings** that override CSS media queries (inline styles have higher specificity than class-based CSS)
3. **Inner grids without responsive breakpoints** — sub-grids inside already-responsive outer grids don't stack
4. **Missing `blink` keyframe** — the pulse dot animation in UrgencyBar/GroupSchedulePopup
5. **`--header-total` vs `--header-height` mismatch** — Hero references a CSS variable that doesn't exist

---

## Execution Tasks

### Task 0: Global CSS Fixes
**File:** [globals.css](file:///d:/ees-race-2026/app/globals.css)

- [ ] Add missing `blink` keyframe animation (used by UrgencyBar & GroupSchedulePopup pulse dots)
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
```

- [ ] Fix `--header-total` → use `--header-height` consistently (or add alias)
```css
:root {
  --header-total: var(--header-height);
}
```

- [ ] Add global responsive typography guards for WhySection & QuoteSection
```css
/* WhySection inner typography */
@media (max-width: 900px) {
  #why .ghn-grid-3col > div:first-child .ghn-why-ees-title { font-size: 2rem !important; }
  #why .ghn-grid-3col > div:first-child .ghn-why-inner-grid { 
    grid-template-columns: 1fr !important; 
    gap: 1.5rem !important;
  }
  #why .ghn-grid-3col > div:first-child .ghn-why-sidebar {
    font-size: 1.8rem !important;
    border-right: none !important;
    padding-right: 0 !important;
    border-bottom: 1px solid #E0DDD6 !important;
    padding-bottom: 1rem !important;
  }
}
@media (max-width: 640px) {
  #why .ghn-grid-3col > div:first-child .ghn-why-ees-title { font-size: 1.5rem !important; }
  #why .ghn-grid-3col > div:first-child .ghn-why-sidebar { font-size: 1.4rem !important; }
}

/* QuoteSection inner grid */
@media (max-width: 900px) {
  .ghn-quote-right-inner {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
  .ghn-quote-stat-value { font-size: 2rem !important; }
}
@media (max-width: 640px) {
  .ghn-quote-big-mark { font-size: 3rem !important; }
}
```

---

### Task 1: Hero Section 🔴
**File:** [Hero.tsx](file:///d:/ees-race-2026/components/sections/Hero.tsx)

#### Issues Found:
1. **Line 79:** `minHeight: "calc(100dvh - var(--header-total, 140px))"` — uses `--header-total` which doesn't exist in CSS (CSS defines `--header-height`)
2. **Line 152:** `letterSpacing: "-0.24em"` — extremely tight, causes text overlap on small screens
3. **Line 153:** `marginBottom: "-0.8rem"` — negative margin causes overlap on mobile stacked layout
4. **Line 165:** `marginTop: "-1.5em"` — negative margin on each headline line, causes collapse on mobile
5. **Line 215:** Stats grid `repeat(3, 1fr)` — CSS overrides to 2-col at ≤640px ✅ but stats items have fixed `paddingLeft: "1rem"` which wastes space on small screens
6. **Right panel** font sizes: `clamp(2.5rem, 9vw, 8.5rem)` — at 375px this is ~33px which is fine, but at 768px tablet it's ~69px which is very large when stacked

#### Fixes:
- [ ] Fix CSS variable: change `--header-total` to `--header-height` in line 79
- [ ] Reduce `letterSpacing` to `"-0.06em"` or use clamp
- [ ] Remove or reduce negative `marginTop: "-1.5em"` on headline lines — use smaller value like `"-0.3em"`
- [ ] Reduce negative `marginBottom: "-0.8rem"` to `0`
- [ ] Add responsive `paddingBottom` on headline lines using clamp (already partially done)
- [ ] Right panel: reduce race title max-size or add tablet clamp — change to `clamp(2.5rem, 7vw, 6rem)` for better tablet display when stacked

---

### Task 2: WhySection 🔴
**File:** [WhySection.tsx](file:///d:/ees-race-2026/components/sections/WhySection.tsx)

#### Issues Found:
1. **Line 195:** `fontSize: "50px"` — EES title is hard-coded, way too big for mobile (≤375px screens)
2. **Line 211:** `fontSize: "40px"` — "GHN Nghe Thật Làm Thật" sidebar text fixed at 40px
3. **Line 206:** Inner grid `gridTemplateColumns: "auto 1fr"` with `gap: "3rem"` — doesn't stack on mobile, causes horizontal overflow
4. **Line 216:** `paddingRight: "2rem"` and `borderRight: "1px solid #E0DDD6"` on sidebar — doesn't clear on mobile stack
5. **Lines 226-240:** Body text `fontSize: "1.05rem"` is OK but `lineHeight: 1.7` takes too much vertical space on mobile

#### Fixes:
- [ ] Change `fontSize: "50px"` → `fontSize: "clamp(1.5rem, 5vw, 50px)"` and add CSS class `ghn-why-ees-title`
- [ ] Change `fontSize: "40px"` → `fontSize: "clamp(1.4rem, 4vw, 40px)"` and add CSS class `ghn-why-sidebar`
- [ ] Add CSS class `ghn-why-inner-grid` to the inner 2-column grid and add media query to stack it
- [ ] Remove the sidebar `borderRight` and `paddingRight` on mobile via CSS (add class for targeting)
- [ ] Reduce inner `gap: "3rem"` → `gap: "clamp(1.5rem, 3vw, 3rem)"`
- [ ] Reduce column padding from `3rem 2.5rem` to use clamp for mobile

---

### Task 3: QuoteSection 🟠
**File:** [QuoteSection.tsx](file:///d:/ees-race-2026/components/sections/QuoteSection.tsx)

#### Issues Found:
1. **Line 41:** `fontSize: "6rem"` on opening quote mark `"` — doesn't scale down
2. **Line 98:** Right panel inner grid `gridTemplateColumns: "1fr auto"` — doesn't stack on mobile, image and stats compete for space
3. **Line 125:** Stat values `fontSize: "3rem"` — fixed, too big for small mobile
4. **Line 178:** `paddingRight: "5rem"` on the CPO image — wastes space on mobile
5. **Lines 96-102:** Right panel layout — `gridTemplateColumns: "1fr auto"` doesn't have a mobile breakpoint

#### Fixes:
- [ ] Change quote mark `fontSize: "6rem"` → `fontSize: "clamp(3rem, 8vw, 6rem)"` and add CSS class `ghn-quote-big-mark`
- [ ] Add CSS class `ghn-quote-right-inner` to the right panel's inner grid
- [ ] Add media query to stack the right panel inner grid on ≤900px (stats on top, image below)
- [ ] Change stat value `fontSize: "3rem"` → `fontSize: "clamp(1.8rem, 4vw, 3rem)"` and add CSS class `ghn-quote-stat-value`
- [ ] Remove or clamp `paddingRight: "5rem"` on image → `paddingRight: "clamp(0, 3vw, 5rem)"`
- [ ] Reduce stat `borderLeft` padding on mobile

---

### Task 4: Navbar 🟠
**File:** [Navbar.tsx](file:///d:/ees-race-2026/components/layout/Navbar.tsx)

#### Issues Found:
1. **Line 64:** Logo text `fontSize: "1.75rem"` × 2 (both spans) — too wide on small phones (≤375px), causes the logo + CTA to overflow
2. **Line 64:** The blue text "× Bạn Nói, GHN Nghe" + orange "2026" is a long string with no wrapping
3. **Line 46:** `fontSize: "1.8rem"` on logo wrapper — doesn't scale
4. **Line 57:** Logo image `height: "50px"` — CSS overrides to 36px on ≤640px ✅
5. **Line 33:** `height: "68px"` and `padding: "0 2.5rem"` — CSS overrides on ≤640px ✅

#### Fixes:
- [ ] Change logo text `fontSize: "1.75rem"` → `fontSize: "clamp(0.85rem, 2.5vw, 1.75rem)"`
- [ ] Change logo wrapper `fontSize: "1.8rem"` → `fontSize: "clamp(0.9rem, 2.5vw, 1.8rem)"`
- [ ] Add `overflow: "hidden"` and `whiteSpace: "nowrap"` or `textOverflow: "ellipsis"` on the logo text container — OR wrap the text to 2 lines on mobile
- [ ] Consider hiding the "× Bạn Nói, GHN Nghe 2026" text on very small screens (≤400px) via a CSS class + `display: none`

---

### Task 5: UrgencyBar 🟡
**File:** [UrgencyBar.tsx](file:///d:/ees-race-2026/components/layout/UrgencyBar.tsx)

#### Issues Found:
1. **Line 49:** `animation: "blink 1.4s ease-in-out infinite"` — the `blink` keyframe is **missing** from `globals.css` → pulse dot doesn't animate
2. **Line 34:** `fontSize: "0.7rem"` — already small, OK
3. CSS media queries handle most layout issues ✅
4. On very small phones (≤320px), the left text + right button may still overflow

#### Fixes:
- [ ] Add the `blink` keyframe to `globals.css` (covered in Task 0)
- [ ] Add `min-width: 0` and `overflow: hidden` to the left text container to prevent overflow on ≤320px screens
- [ ] Add `flex-shrink: 0` on the CTA button (already done ✅)

---

### Task 6: Footer 🟡
**File:** [Footer.tsx](file:///d:/ees-race-2026/components/layout/Footer.tsx)

#### Issues Found:
1. **Line 16:** `padding: "3rem 2.5rem"` — CSS overrides on ≤900px but inner columns don't fully adapt
2. **Line 19:** Brand column `paddingRight: "3rem"` — unnecessary space on mobile
3. **Line 49:** `paddingLeft: "2rem"` on contact/docs columns — fixed, doesn't reduce on mobile
4. **Line 38:** `maxWidth: "260px"` on brand description — constrains text on small screens where full width is available

#### Fixes:
- [ ] Wrap brand column paddingRight in clamp: `paddingRight: "clamp(0, 2vw, 3rem)"`
- [ ] Change contact/docs column `paddingLeft: "2rem"` → CSS handles removal on ≤900px ✅ (border-left removed, padding-left set to 0)
- [ ] Change `maxWidth: "260px"` on brand desc → `maxWidth: "100%"` for mobile, or remove it (CSS handles layout)
- [ ] Verify last-updated date visibility on mobile

---

### Task 7: GroupSchedulePopup 🟡
**File:** [GroupSchedulePopup.tsx](file:///d:/ees-race-2026/components/sections/GroupSchedulePopup.tsx)

#### Issues Found:
1. **Line 299:** `animation: "blink ..."` — same missing keyframe as UrgencyBar
2. **Line 257-263:** Header title `clamp(1.4rem, 4vw, 1.8rem)` — OK ✅
3. **Line 398-411:** Schedule card styling uses inline `scale: 1.02` on active — this is not a valid inline style property (it's a framer-motion-only prop mixed into style)
4. **Line 594:** Footer shows "25.000.000 VNĐ" but the actual prize is 30.000.000 VNĐ — data inconsistency
5. **Card layout** uses CSS class `ghn-sched-card` which stacks on ≤640px ✅

#### Fixes:
- [ ] Add `blink` keyframe (covered in Task 0)
- [ ] Fix prize amount from "25.000.000" to "30.000.000" VNĐ (data consistency)
- [ ] Move `scale: 1.02` from inline `style` to framer-motion's `animate` prop or remove it
- [ ] Ensure header padding reduces on small screens: `padding: "clamp(1rem, 3vw, 1.75rem) clamp(1rem, 3vw, 1.75rem)"`

---

## Execution Order

> [!IMPORTANT]
> Fix in this order — highest visual impact first:

```
1. Task 0 → Global CSS (blink keyframe + variable alias)
2. Task 1 → Hero (most visible, first thing users see)
3. Task 2 → WhySection (large text overflow on mobile)
4. Task 3 → QuoteSection (inner grid doesn't stack)
5. Task 4 → Navbar (logo overflow on small phones)
6. Task 5 → UrgencyBar (minor, mostly handled)
7. Task 6 → Footer (minor padding issues)
8. Task 7 → GroupSchedulePopup (modal, lower priority)
```

---

## Verification Plan

### Device Testing Matrix
Test each fix at these breakpoints:

| Device | Width | Key Check |
|--------|-------|-----------|
| iPhone SE | 375px | Smallest common phone |
| iPhone 14 | 390px | Standard iPhone |
| Samsung Galaxy S21 | 360px | Common Android |
| iPad Mini | 768px | Tablet portrait |
| iPad Pro | 1024px | Tablet landscape |
| MacBook Air | 1440px | Laptop |
| Desktop | 1920px | Full HD |

### For Each Section, Verify:
- [ ] No horizontal scrollbar appears
- [ ] Text doesn't overflow its container
- [ ] Grids stack properly on mobile
- [ ] Font sizes are readable (≥14px body, ≥20px headings on mobile)
- [ ] Touch targets are ≥44px (buttons, links)
- [ ] Images scale down without cropping important content
- [ ] Spacing is proportional (no huge gaps or cramped content)

### Browser Testing:
```
pnpm run dev
```
Use Chrome DevTools → Device Toolbar to test each resolution listed above.
