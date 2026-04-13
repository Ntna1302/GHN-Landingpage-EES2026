import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EES RACE 2026 — GiaoHangNhanh",
  description:
    "Khảo sát gắn kết nhân viên GHN 2026. Tiếng nói của bạn định hình tương lai GHN. Tổng giải thưởng 25.000.000 VNĐ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
