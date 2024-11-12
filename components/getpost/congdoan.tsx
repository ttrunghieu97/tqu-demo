"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
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

export default function CongDoan() {
  const [posts, setPosts] = useState<Post[]>([]);
  const postsPerPage = 3;
  const pathname = usePathname();

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
            filter: { category: { _eq: 'Công đoàn' } },
          })
        );
        setPosts(result as Post[]); // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchInitialPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="space-y-8">
        {posts.map((post) => {
          const date = formatDate(post.created_at);
          return (
            <>
              <Link href={`${pathname}/${post.slug}`}>
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto">
                      {post.image ? (
                        <Image
                          alt={post.title}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          src={`${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
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

                    <CardContent className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <Link href={`/tin-tuc-su-kien/${post.slug}`} className="block group-hover:text-primary transition-colors">
                          <h2 className="font-bold text-xl mb-2 line-clamp-2">
                            {post.title}
                          </h2>
                        </Link>

                        <p className="text-muted-foreground line-clamp-3 text-sm mb-4">
                          {post.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
            </>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link href="href">
          <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
            Xem thêm
          </Button>
        </Link>
      </div>
    </div>
  );
}
