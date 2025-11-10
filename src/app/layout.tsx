
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AnimatePresence, motion } from "framer-motion";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arslan - Jr. Full Stack Developer Portfolio",
  description:
    "Jr. Full Stack Developer specializing in Next.js & Laravel. Explore my projects, dashboards, and AI-powered tools.",
    verification: {
    google: "-L-Lb66Y16FhRw5TQiXoH7qj3wRN-r5qYyBe2UsMxII",
  },
  openGraph: {
    type: "website",
    url: "https://arslan-dev.vercel.app",
    title: "Arslan - Jr. Full Stack Developer Portfolio",
    description:
      "Building scalable web apps, analytics dashboards, and AI-powered projects with clean and efficient code.",
    images: [
      {
        url: "https://arslan-dev.vercel.app/assets/og-image.webp", 
        width: 1200,
        height: 630,
        alt: "Arslan Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan - Full Stack Developer Portfolio",
    description:
      "Next.js & Laravel expert | E-commerce, Dashboards, AI Projects | Explore my work.",
    images: ["https://arslan-dev.vercel.app/assets/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatePresence mode="wait">
            <div>
              {children}
            </div>
          </AnimatePresence>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
