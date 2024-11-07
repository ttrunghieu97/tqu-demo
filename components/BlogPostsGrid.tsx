"use client";

import { useState, useEffect } from "react";
import { createWispClient } from "@/lib/wisp";
import type { Author as WispAuthor } from "@wisp-cms/client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';

interface Post {
  id: string;
  createdAt: Date;
  teamId: string;
  description: string | null;
  title: string;
  slug: string;
  image: string | null;
  authorId: string;
  updatedAt: Date;
  publishedAt: Date | null;
  author: WispAuthor;
  tags: {
    id: string;
    name: string;
  }[];
}

interface DateFormat {
  iso: string;
  localized: string;
}

interface BlogPostsGridProps {
  blogId: string;
  tag?: string;
}

export default function BlogPostsGrid({ blogId, tag }: BlogPostsGridProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const pathname = usePathname();

  const formatDate = (date: Date | string | undefined): DateFormat | null => {
    if (!date) return null;
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      return {
        iso: dateObj.toISOString(),
        localized: dateObj.toLocaleString(),
      };
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const fetchInitialPosts = async () => {
      const wisp = createWispClient(blogId);

      setIsLoading(true);
      try {
        const result = await wisp.getPosts({
          page: 1,
          limit: postsPerPage,
          tags: tag ? [tag] : undefined,
        });
        setPosts(result.posts as Post[]);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialPosts();
  }, [blogId, tag]);

  const loadMorePosts = async () => {
    const wisp = createWispClient(blogId);

    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const result = await wisp.getPosts({
        page: nextPage,
        limit: postsPerPage,
        tags: tag ? [tag] : undefined,
      });
      setPosts((prevPosts) => [...prevPosts, ...(result.posts as Post[])]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const date = formatDate(post.publishedAt || post.updatedAt);
          const author = post.author;

          return (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
              <Link href={`${pathname}/${post.slug}`}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                  {post.image ? (
                    <Image
                      alt={post.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      src={post.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Image
                        src="/img/logo.png"
                        alt="Default"
                        width={64}
                        height={64}
                        className="opacity-50"
                      />
                    </div>
                  )}
                </div>
              </Link>

              <CardContent className="p-6">
                {(date || author) && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                    {date && (
                      <>
                        <CalendarDays className="h-4 w-4" />
                        <time dateTime={date.iso}>{date.localized}</time>
                      </>
                    )}
                    {author && (
                      <div className="flex items-center space-x-2">
                        {author.image ? (
                          <Image
                            src={author.image.startsWith("http") ? author.image : `/${author.image}`}
                            alt={author.name ?? "Tác giả"}
                            width={16}
                            height={16}
                            className="rounded-full"
                          />
                        ) : (
                          <Image
                            src="/img/logo.png"
                            alt="Default Avatar"
                            width={16}
                            height={16}
                            className="rounded-full"
                          />
                        )}
                        <span>{author.name ?? "Chưa rõ"}</span>
                      </div>
                    )}
                  </div>
                )}
                <Link href={`/tin-tuc-su-kien/${post.slug}`} className="block group-hover:text-primary transition-colors">
                  <h2 className="font-bold text-xl mb-1 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          onClick={loadMorePosts}
          disabled={isLoading}
          className="mt-2 px-4 py-2 border border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 rounded-full hover:bg-red-500 dark:hover:bg-red-400 hover:text-white transition-colors"
          variant="outline"
        >
          {isLoading ? "Đang tải..." : "Xem thêm"}
        </Button>
      </div>
    </div>
  );
}