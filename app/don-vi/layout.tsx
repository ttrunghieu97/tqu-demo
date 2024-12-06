import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AutoBreadcrumb from '@/components/AutoBreadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đơn vị - Trường Đại Học Tân Trào',
  description: 'Demo For Learning',
  icons: {
    icon: "/img/logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-gray-100 dark:bg-gray-900">
        <Header department="Home" />
        <AutoBreadcrumb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
