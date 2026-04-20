import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar-view";

const InterVar = Inter({
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Enops - Design better database scheam ",
  description: "A platform to share and discover products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`  ${InterVar.variable}   antialiased  bg-white `}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
