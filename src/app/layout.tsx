
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AnimatePresence, motion } from "framer-motion";
import Script from 'next/script';
import ChatBot from "@/components/ChatBot"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arslan Muhammad | Web & Generative AI Developer Portfolio",
  description:
    "Hi, I'm Arslan. I build smart, fast, and scalable web apps. By combining Laravel and Next.js with Generative AI, Python, and LangChain, I create next-level digital experiences. Check out my latest work!",
  keywords: [
    "hire web developer",
    "hire generative AI developer",
    "hire full stack developer",
    "freelance generative AI developer",
    "Laravel backend developer",
    "Next.js web apps",
    "custom AI chatbot developer",
    "Python and LangChain integration",
    "local LLM and RAG apps",
    "e-commerce dashboard developer"
  ],
  verification: {
    google: "-L-Lb66Y16FhRw5TQiXoH7qj3wRN-r5qYyBe2UsMxII",
  },
  openGraph: {
    type: "website",
    url: "https://arslan-dev.vercel.app",
    title: "Arslan Muhammad | Web & Generative AI Developer",
    description:
      "Looking for a developer who bridges traditional web development with cutting-edge AI? Explore my portfolio featuring e-commerce platforms, custom AI chatbots, and smart data dashboards.",
    images: [
      {
        url: "https://arslan-dev.vercel.app/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Arslan Muhammad - Web and AI Projects Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan Muhammad | Web & Generative AI Developer",
    description:
      "I build smart web applications using Laravel, Next.js, and Python. Explore my real-world projects, from robust e-commerce backends to custom local AI chat models.",
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
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FFV976J51W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FFV976J51W');
          `}
        </Script>

      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatePresence mode="wait">
            <div>
              {children}
            </div>
          </AnimatePresence>
          <SpeedInsights />
        </ThemeProvider>
        <ChatBot />
      </body>
    </html>
  );
}
