import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-gray-100 dark:bg-gray-900">
        <Header department="Home" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
