// app/tuyen-sinh/[he]/page.tsx
'use client';

import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from 'lucide-react';
import { Button } from "@/components/ui/button";
import directus from "@/lib/directus";
import { readItems } from '@directus/sdk';

type Params = {
  params: Promise<{
    category: string;
  }>;
};

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

export default function KhoaPage({ params }: Params) {
  const resolvedParams = React.use(params);
  const { category } = resolvedParams;

  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const postsPerPage = 3;

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

  const fetchPosts = React.useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const result = await directus.request(
        readItems('tuyen_sinh', {
          limit: postsPerPage,
          page,
          filter: { category },
          fields: ['id', 'title', 'created_at', 'description', 'slug', 'image', 'category', 'content'],
          sort: ['-created_at'],
        })
      );

      const newPosts = result as Post[];

      setPosts((prevPosts) => {
        const existingIds = new Set(prevPosts.map((post) => post.id));
        const filteredPosts = newPosts.filter((post) => !existingIds.has(post.id));
        return [...prevPosts, ...filteredPosts];
      });

      if (newPosts.length < postsPerPage) {
        setHasMorePosts(false);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, [category, postsPerPage]);

  useEffect(() => {
    fetchPosts(1);
  }, [fetchPosts]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchPosts(nextPage);
  };
  console.log("Resolved category:", category);

  return (
    <>
      <div className="container mx-auto px-4 mt-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const date = formatDate(post.created_at);
            return (
              <Link href={`${post.category}/${post.slug}`} key={post.id}>
                <Card className="group hover:shadow-lg dark:hover:shadow-primary/25 transition-shadow duration-300 bg-background dark:bg-gray-900">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg flex items-center justify-center">
                    {post.image ? (
                      <Image
                        alt={post.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        src={`${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted dark:bg-gray-700 flex items-center justify-center">
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
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-gray-400 mb-1">
                        <CalendarDays className="h-4 w-4" />
                        <time dateTime={date.iso}>{date.localized}</time>
                      </div>
                    )}
                    <h2 className="font-bold text-xl mb-1 line-clamp-2 group-hover:text-primary transition-colors dark:text-gray-100">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground dark:text-gray-300 line-clamp-3 text-sm">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {hasMorePosts && (
        <div className="flex justify-center items-center mt-5 my-5">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300 dark:from-red-600 dark:to-yellow-600 dark:hover:from-yellow-600 dark:hover:to-red-600"
          >
            {isLoading ? "Đang tải..." : "Xem thêm"}
          </Button>
        </div>
      )}
    </>
  );
}