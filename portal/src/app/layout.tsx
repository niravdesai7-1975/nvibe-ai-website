import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NVibe AI Platform",
  description: "High-performance LLM inference, fine-tuning, and pretraining",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">{children}</body>
    </html>
  );
}
