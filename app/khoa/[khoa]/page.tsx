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
    khoa: string;
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
  const { khoa } = resolvedParams;

  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
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

  const fetchPosts = React.useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const result = await directus.request(
        readItems(khoa, {
          limit: postsPerPage,
          page,
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
  }, [khoa, postsPerPage]);

  useEffect(() => {
    fetchPosts(1);
  }, [fetchPosts]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchPosts(nextPage);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-red-900 to-white dark:from-gray-800 dark:to-gray-900 p-2 font-extrabold font-sans flex items-center mt-5 transition-colors duration-300">
        <div className="container mx-auto flex items-center">
          <h2 className="text-3xl font-bold text-red-100 dark:text-gray-100">HOẠT ĐỘNG</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const date = formatDate(post.created_at);
            return (
              <Link href={`${khoa}/${post.category}/${post.slug}`} key={post.id} className="block h-full">
                <Card className="group hover:shadow-lg dark:hover:shadow-primary/25 transition-shadow duration-300 bg-background dark:bg-gray-900 h-full flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
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

                  <CardContent className="p-6 flex flex-col flex-grow">
                    {date && (
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-gray-400 mb-1">
                        <CalendarDays className="h-4 w-4" />
                        <time dateTime={date.iso}>{date.localized}</time>
                      </div>
                    )}
                    <h2 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors dark:text-gray-100">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground dark:text-gray-300 line-clamp-3 text-sm flex-grow">
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

