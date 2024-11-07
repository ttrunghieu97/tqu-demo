"use client"
import { createWispClient } from "@/lib/wisp"; // Import function để tạo Wisp client
import { useEffect, useState } from "react";

// Định nghĩa kiểu cho tham số props
interface BlogPostProps {
  blogId: string;
  slug: string;
}

interface Tag {
  name: string;
}

interface Author {
  name: string | null; // Chấp nhận null
  avatar?: string;
}

interface BlogPostData {
  id: string;
  createdAt: Date;
  teamId: string;
  description: string | null;
  title: string;
  content: string;
  slug: string;
  image: string | null;
  metadata: Record<string, unknown> | null;
  publishedAt: Date | null;
  updatedAt: Date | null;
  tags: Tag[];
  author: Author; // Cập nhật author để hỗ trợ name là string | null
}

const BlogPost = ({ blogId, slug }: BlogPostProps) => {
  const [post, setPost] = useState<BlogPostData | null>(null); // State để lưu bài viết
  const [loading, setLoading] = useState(true); // State loading để xử lý việc tải dữ liệu

  useEffect(() => {
    const fetchPost = async () => {
      const wisp = createWispClient(blogId); // Tạo client Wisp với blogId động
      const result = await wisp.getPost(slug);
      setPost(result.post);
      setLoading(false);
    };

    fetchPost();
  }, [blogId, slug]); // Chạy lại khi blogId hoặc slug thay đổi

  // Nếu dữ liệu đang được tải
  if (loading) {
    return <div>Loading...</div>;
  }

  // Nếu không tìm thấy bài viết
  if (!post) {
    return <div>Bài viết không tồn tại.</div>;
  }

  // Hiển thị nội dung bài viết
  const { title, publishedAt, content, tags } = post;

  // Chuyển đổi publishedAt từ Date sang chuỗi nếu cần
  const formattedPublishedAt = publishedAt ? Intl.DateTimeFormat("en-US").format(new Date(publishedAt)) : "Không có thông tin";

  return (
    <div>
      <div className="prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words">
        <h1>{title}</h1>
        <div className="blog-content mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="mt-10 opacity-40 text-sm">
          {tags.map((tag) => (
            <span key={tag.name}>#{tag.name}</span>
          ))}
        </div>
        <div className="text-sm opacity-40 mt-4">
          {formattedPublishedAt}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
