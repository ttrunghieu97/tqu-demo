"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from 'lucide-react';
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
      try {
        const result = await directus.request(
          readItems('gioi_thieu_dbcl', {
            limit: postsPerPage,
            fields: ['id', 'title', 'content', 'date_created', 'date_updated', 'category', 'slug'],
            filter: { category: { _eq: 'he-thong-dbcl' } },
            sort: ['-date_created'],
          })
        );
        setPosts(result as Post[]);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchInitialPosts();
  }, []);

  return (
    <div className=" px-4 mt-5 dark:bg-gray-900">
      <div className="container mx-auto" >

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Hệ thống ĐBCL</h1>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const date = formatDate(post.created_at);
            return (
              <Link href={`/ql-chat-luong-thanh-tra/gioi-thieu-dbcl/he-thong-dbcl/${post.slug}`} key={post.id}>
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

      <div className="flex justify-center items-center my-5">

      </div>
    </div>
  );
}