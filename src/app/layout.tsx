import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import HydrationCleanup from "@/components/HydrationCleanup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/logoAds.png",
  },
  title: "AdsManagement - AI Digital Agency",
  description: "Comprehensive digital service ecosystem with innovative solutions for long-term growth journey",
  keywords: "digital marketing, facebook ads, social media marketing, SEO, web development, marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        suppressHydrationWarning={true}
      >
        {/* Hydration Cleanup */}
        <HydrationCleanup />
        
        {/* Global Animated Background */}
        <AnimatedBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
