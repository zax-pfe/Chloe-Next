"use client";

import type { Metadata } from "next";
import { lora } from "@/app/fonts";
import Navbar from "@/components/navbar";
import "./globals.css";
import Providers from "@/app/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
