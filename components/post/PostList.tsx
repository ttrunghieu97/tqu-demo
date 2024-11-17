"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from 'lucide-react';
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

interface PostListProps {
  category: string;
  linkPrefix: string;
  viewMoreLink: string;
  viewMoreText?: string;
}

export default function PostList({ category, linkPrefix, viewMoreLink, viewMoreText = "Xem thêm" }: PostListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
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

  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const result = await directus.request(
          readItems('posts', {
            limit: postsPerPage,
            page: 1,
            fields: ['id', 'title', 'created_at', 'description', 'slug', 'image', 'category', 'content'],
            filter: { category: { _eq: category } },
          })
        );
        setPosts(result as Post[]);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchInitialPosts();
  }, [category]);

  return (
    <div className="container mx-auto px-4">
      <div className="space-y-8">
        {posts.map((post) => {
          const date = formatDate(post.created_at);
          return (
            <Link href={`${linkPrefix}/${post.slug}`} key={post.id}>
              <Card className="group hover:shadow-lg dark:hover:shadow-primary/25 transition-shadow duration-300 overflow-hidden bg-background dark:bg-gray-800 flex flex-col h-full">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto h-40">
                    {post.image ? (
                      <Image
                        alt={post.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        src={`${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted dark:bg-gray-700 flex items-center justify-center">
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

                  <CardContent className="p-6 md:w-2/3 flex flex-col justify-between h-full">
                    <div>
                      <h2 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors dark:text-gray-100">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground dark:text-gray-300 line-clamp-3 text-sm mb-4">
                        {post.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground dark:text-gray-400">
                      {date && (
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="h-4 w-4" />
                          <time dateTime={date.iso}>{date.localized}</time>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link href={viewMoreLink}>
          <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300 dark:from-red-600 dark:to-yellow-600 dark:hover:from-yellow-600 dark:hover:to-red-600">
            {viewMoreText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
