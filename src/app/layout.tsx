import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Pistal Group | Official College Innovation & Engineering Syndicate",
  description: "Official website of Pistal Group - premier college engineering, robotics, creative media, AI research & student leadership group.",
  keywords: ["Pistal Group", "College Group", "Student Syndicate", "Robotics Club", "Tech Club", "College Innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${spaceGrotesk.variable} ${outfit.variable} bg-background text-foreground antialiased selection:bg-rose-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
