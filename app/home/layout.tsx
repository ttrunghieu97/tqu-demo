// app/home/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trường Đại Học Tân Trào',
  description: 'Demo For Learning',
  icons: {
    icon: "/img/logo.png",
  },
  openGraph: {
    title: 'Demo TQU Website by TTH',
    description: 'Demo For Learning',
    images: [
      {
        url: '/img/logo.png',
        width: 800,
        height: 600,
        alt: 'Demo TQU Website Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo TQU Website by TTH',
    description: 'Demo For Learning',
    images: [
      {
        url: '/img/logo.png',
        width: 800,
        height: 600,
        alt: 'Demo TQU Website Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
