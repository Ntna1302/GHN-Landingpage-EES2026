import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EES RACE 2026 — GiaoHangNhanh",
  description:
    "Khảo sát gắn kết nhân viên GHN 2026. Tiếng nói của bạn định hình tương lai GHN. Tổng giải thưởng 30.000.000 VNĐ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
