import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar/navbar";

const geistFont = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naufal Purnama",
  description: "Personal portfolio website of Naufal Purnama, showcasing resume, projects, and blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={geistFont.className} lang="en">
      <body
        className="font-sans"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
