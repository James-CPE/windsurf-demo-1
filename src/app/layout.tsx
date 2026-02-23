import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ระบบบริการสุขภาพจังหวัดเชียงราย",
  description: "แดชบอร์ดสำหรับติดตามข้อมูลการพัฒนาระบบบริการสุขภาพในจังหวัดเชียงราย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} font-prompt antialiased`}>
        {children}
      </body>
    </html>
  );
}
