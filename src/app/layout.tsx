import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pistol Group | Official College Innovation & Engineering Syndicate",
  description: "Official website of Pistol Group - premier college engineering, robotics, creative media, AI research & student leadership group.",
  keywords: ["Pistol Group", "College Group", "Student Syndicate", "Robotics Club", "Tech Club", "College Innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} bg-background text-foreground antialiased selection:bg-rose-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
