'use client'

import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Loading from './loading'
import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Head from 'next/head'

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
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
      document.title = 'Đang tải...'
      updateFavicon('/favicon-loading.ico')
    }
    const handleComplete = () => {
      setIsLoading(false)
      document.title = 'Trường Đại học Tân Trào' // Replace with your actual app name
      updateFavicon('/favicon.ico')
    }

    window.addEventListener('routeChangeStart', handleStart)
    window.addEventListener('routeChangeComplete', handleComplete)
    window.addEventListener('routeChangeError', handleComplete)

    return () => {
      window.removeEventListener('routeChangeStart', handleStart)
      window.removeEventListener('routeChangeComplete', handleComplete)
      window.removeEventListener('routeChangeError', handleComplete)
    }
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  const updateFavicon = (href: string) => {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = href
    document.getElementsByTagName('head')[0].appendChild(link)
  }

  return (
    <html lang="vi">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {isLoading && <Loading />}
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}