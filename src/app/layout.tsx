"use client";

import type { Metadata } from "next";
import { lora } from "@/app/fonts";
import Navbar from "@/components/navbar";
import NavbarPhone from "@/components/navbar-phone";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
