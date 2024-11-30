// app/layout.tsx
'use client'

import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Loading from './loading';
import Head from 'next/head';
import { Suspense } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
