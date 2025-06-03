import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parth Ahir | Software Engineer & Tech Founder",
  description: "Software Engineer at Boeing and Tech Founder of Kalyxa. Passionate about building innovative solutions and driving technological advancement.",
  keywords: ["Software Engineer", "Boeing", "Kalyxa", "Tech Founder", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
