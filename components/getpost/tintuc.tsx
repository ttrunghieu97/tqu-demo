"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import directus from "@/lib/directus";
import { readItems } from '@directus/sdk';

interface Post {
  id: string;
  created_at: string;
  description: string | null;
  title: string;
  slug: string;
  image: string;
  category: string;
  content: string;
}

interface DateFormat {
  iso: string;
  localized: string;
}

export default function TinTuc() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const formatDate = (date: string | undefined): DateFormat | null => {
    if (!date) return null;
    try {
      const dateObj = new Date(date);
      return {
        iso: dateObj.toISOString(),
        localized: dateObj.toLocaleString("vi-VN"),
      };
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const fetchInitialPosts = async () => {
      setIsLoading(true);
      try {
        const result = await directus.request(
          readItems('posts', {
            limit: postsPerPage,
            page: 1,
            fields: ['id', 'title', 'created_at', 'description', 'slug', 'image', 'category', 'content'],
            filter: { category: { _eq: 'Tin tức' } },
          })
        );
        // Ép kiểu rõ ràng từ any sang Post[]
        setPosts(result as Post[]);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialPosts();
  }, []);

  const loadMorePosts = async () => {
    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const result = await directus.request(
        readItems('posts', {
          limit: postsPerPage,
          page: nextPage,
          fields: ['id', 'title', 'created_at', 'description', 'slug', 'image', 'category', 'content'],
          filter: { category: { _eq: 'Tin tức' } },
        })
      );
      // Ép kiểu rõ ràng từ any sang Post[]
      setPosts((prevPosts) => [...prevPosts, ...result as Post[]]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const date = formatDate(post.created_at);
          return (
            <>
              <Link href={`/category/tin-tuc/${post.slug}`}>
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg flex items-center justify-center">
                    {post.image ? (
                      <Image
                        alt={post.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105 "
                        src={`${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}`}
                        width={250}
                        height={150}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Image
                          src="/img/logo.png"
                          alt="Default"
                          width={250}
                          height={150}
                          className="opacity-50"
                        />
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    {date && (
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                        <CalendarDays className="h-4 w-4" />
                        <time dateTime={date.iso}>{date.localized}</time>
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
              </Link>
            </>
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
