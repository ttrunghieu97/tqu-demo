import React, { FunctionComponent } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { GetRelatedPostsResult } from "@wisp-cms/client";
import Image from "next/image";
import Link from "next/link";
import { createWispClient } from '@/lib/wisp';

interface RelatedPostsProps {
  blogId: string; // Thêm blogId
  slug: string; // Slug của bài viết hiện tại
}

export const RelatedPosts: FunctionComponent<RelatedPostsProps> = ({ blogId, slug }) => {
  const [posts, setPosts] = React.useState<GetRelatedPostsResult["posts"]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Sử dụng useEffect để lấy dữ liệu bài viết liên quan
  React.useEffect(() => {
    const fetchRelatedPosts = async () => {
      const wisp = createWispClient(blogId); // Tạo client với blogId
      try {
        const result = await wisp.getRelatedPosts({ slug, limit: 7 }); // Giả định có hàm này
        setPosts(result.posts);
      } catch (error) { // Sử dụng biến error
        console.error('Error fetching related posts:', error); // Log lỗi ra console
        setError('Đã có lỗi xảy ra khi tải bài viết liên quan.');
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [blogId, slug]); // Thêm blogId và slug vào dependencies

  if (loading) {
    return <div className="container mx-auto my-8 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto my-8 text-xl text-red-600">{error}</div>;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto my-8 text-xl">
      <div className="mb-6 text-lg font-semibold tracking-tight">Gần đây</div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        {posts.slice(0, 7).map((post) => (
          <div className="bg-muted overflow-hidden rounded-lg" key={post.id}>
            <Link href={`/post.slug/${post.slug}`}>
              <AspectRatio ratio={16 / 9} className="w-full">
                <Image
                  src={post.image || "/img/logo.png"}
                  alt={post.title}
                  fill
                  className="h-full min-h-full min-w-full object-cover object-center"
                />
              </AspectRatio>
              <div className="prose prose-sm dark:prose-invert p-2">
                <h3 className="line-clamp-2">{post.title}</h3>
                <p className="line-clamp-3">{post.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
