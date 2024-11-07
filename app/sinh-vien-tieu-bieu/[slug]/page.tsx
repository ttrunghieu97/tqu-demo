import BlogPost from "@/components/BlogPost";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Params {
  slug: string;
}

// Trả về các tham số động từ đường dẫn, chẳng hạn như slug
export function generateStaticParams() {
  // Trả về các tham số mà bạn cần cho các đường dẫn tĩnh
  return [{ slug: "example-slug" }]; // Thay đổi hoặc lấy động theo nhu cầu của bạn
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const blogId = "clys59v8l001jm4u10m0eryw0"; // Sử dụng blogId cố định hoặc truyền từ props

  return (
    <>
      <Header department="Home" />
      <BlogPost blogId={blogId} slug={slug} />
      <Footer />
    </>
  );
}