import AutoBreadcrumbs from "@/components/AutoBreadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header department="Home" />
        <AutoBreadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
