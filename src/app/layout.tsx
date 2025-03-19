import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LanguageProvider from "@/components/LanguageProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aro Software Group - 次世代AIソリューション",
  description: "Aro Software Groupは、あったらいいなを実現するために存在するチームです。プライバシーとセキュリティを重視した先進的なAIツールとソリューションを開発しています。",
  authors: [{ name: "Aro Software Group" }],
  keywords: ["AI", "Artificial Intelligence", "Software", "Technology", "Agent", "Brain Studio", "Japan", "Aro", "Team", "Privacy-focused"],
  metadataBase: new URL("https://aro-software-group.vercel.app"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://aro-software-group.vercel.app",
    siteName: "Aro Software Group",
    title: "Aro Software Group - 次世代AIソリューション",
    description: "Aro Software Groupは、あったらいいなを実現するために存在するチームです。プライバシーとセキュリティを重視した先進的なAIツールとソリューションを開発しています。",
    images: [
      {
        url: "/images/aro-logo.png",
        width: 800,
        height: 600,
        alt: "Aro Software Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aro Software Group - 次世代AIソリューション",
    description: "Aro Software Groupは、あったらいいなを実現するために存在するチームです。プライバシーとセキュリティを重視した先進的なAIツールとソリューションを開発しています。",
    creator: "@Group_Aro",
    images: ["/images/aro-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark scroll-smooth">
      <body className={cn(
        "min-h-screen bg-black font-sans antialiased",
        inter.variable
      )}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
