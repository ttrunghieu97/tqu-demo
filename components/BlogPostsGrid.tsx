"use client";

import { useState, useEffect } from "react";
import { createWispClient } from "@/lib/wisp";
import type { Author as WispAuthor } from "@wisp-cms/client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the Post interface
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

// Add a blogId prop
interface BlogPostsGridProps {
  blogId: string;
}

export default function BlogPostsGrid({ blogId }: BlogPostsGridProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
      const wisp = createWispClient(blogId); // Use the blogId prop

      setIsLoading(true);
      try {
        const result = await wisp.getPosts({
          page: 1,
          limit: postsPerPage,
        });
        setPosts(result.posts as Post[]);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialPosts();
  }, [blogId]); // Add blogId as a dependency

  const loadMorePosts = async () => {
    const wisp = createWispClient(blogId); // Use the blogId prop

    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const result = await wisp.getPosts({
        page: nextPage,
        limit: postsPerPage,
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
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-yellow-500 to-white text-white p-2 font-extrabold font-sans flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
        </svg>
        <h2 className="text-4xl font-extrabold uppercase text-red-600">Tin tức - Sự kiện</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {posts.map((post) => {
          const date = formatDate(post.publishedAt || post.updatedAt);
          const author = post.author;

          return (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
              <Link href={`/tin-tuc-su-kien/${post.slug}`}>
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
