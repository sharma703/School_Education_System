import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EduSpark — Transforming School Education Through AI & Innovation",
  description:
    "EduSpark empowers students with personalized AI learning, supports teachers with smart tools, and enables schools to make data-driven decisions across India.",
  keywords: [
    "education",
    "AI learning",
    "school platform",
    "edtech",
    "India education",
    "personalized learning",
    "teacher support",
    "school dashboard",
  ],
  authors: [{ name: "EduSpark" }],
  openGraph: {
    title: "EduSpark — Transforming School Education Through AI & Innovation",
    description:
      "Empowering 50,000+ students, 1,200+ schools, and 8,500+ teachers across India with AI-powered education.",
    type: "website",
    locale: "en_IN",
    siteName: "EduSpark",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduSpark — Transforming School Education",
    description:
      "AI-powered personalized learning, teacher support, and school analytics for India's education transformation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
