'use client'
import { useEffect, useState } from "react";
import { createWispClient } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  image: string | null;
  publishedAt: Date | null;
};

interface BlogPostsProps {
  blogId: string;
  limit?: number; // Optional limit for the number of posts
}

const BlogPosts: React.FC<BlogPostsProps> = ({ blogId, limit = 6 }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const wisp = createWispClient(blogId);
    const fetchPosts = async () => {
      try {
        const result = await wisp.getPosts({ limit });
        setPosts(result.posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts.");
      }
    };

    fetchPosts();
  }, [blogId, limit]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8">
      {posts.map((post) => (
        <div className="break-words" key={post.id}>
          <Link href={`/${post.slug}`}>
            <div className="aspect-[16/9] relative">
              {post.image ? (
                <Image
                  alt={post.title}
                  className="object-cover"
                  src={post.image}
                  fill
                />
              ) : (
                <img src="https://placehold.co/600x400" alt="Placeholder" />
              )}
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
            <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
              <Link href={`/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
              {(post.publishedAt || new Date()).toLocaleString()}
            </div>
            <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
              {post.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
