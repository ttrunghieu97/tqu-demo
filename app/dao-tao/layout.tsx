import AutoBreadcrumbs from "@/components/AutoBreadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đào tạo - Trường Đại Học Tân Trào',
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
      <body>
        <Header department="Home" />
        <div className="dark:bg-gray-900 white:bg-gray-100">
          <div className="container mx-auto">
            <AutoBreadcrumbs />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
