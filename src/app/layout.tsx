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
  title: 'ADS Management',
  description: 'ADS Management - Digital Marketing Agency',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logoAds.png', type: 'image/png' }
    ],
    apple: '/logoAds.png',
  },
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
