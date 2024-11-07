import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AutoBreadcrumbs from '@/components/AutoBreadcrumb';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header department="supham" />
        <AutoBreadcrumbs />

        {children}
        <Footer />
      </body>
    </html>
  );
}
