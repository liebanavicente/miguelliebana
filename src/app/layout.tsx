import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel Liébana — Orientación digital e IA práctica",
  description: "Miguel Liébana — Orientación digital, IA práctica y comunicación clara. Barcelona.",
  openGraph: {
    title: "Miguel Liébana — Orientación digital e IA práctica",
    description: "Orientación digital, IA práctica y comunicación clara. Barcelona.",
    url: "https://miguelliebana.com",
    images: [{ url: "https://miguelliebana.com/social-card.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://miguelliebana.com/social-card.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
