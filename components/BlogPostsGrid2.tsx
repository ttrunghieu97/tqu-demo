"use client";

import { useState, useEffect } from "react";
import { createWispClient } from "@/lib/wisp";
import type { Author as WispAuthor } from "@wisp-cms/client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
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

      try {
        const result = await wisp.getPosts({
          page: 1,
          limit: 2,
          tags: tag ? [tag] : undefined,
        });
        setPosts(result.posts as Post[]);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchInitialPosts();
  }, [blogId, tag]);


  return (
    <div className="container mx-auto px-4 py-5">
      <div className="space-y-8">
        {posts.map((post) => {
          const date = formatDate(post.publishedAt || post.updatedAt);
          const author = post.author;

          return (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto">
                  <Link href={`${pathname}/${post.slug}`}>
                    {post.image ? (
                      <Image
                        alt={post.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        src={post.image}
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
                  </Link>
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
                    {author && (
                      <div className="flex items-center space-x-2">
                        {author.image ? (
                          <Image
                            src={author.image.startsWith("http") ? author.image : `/${author.image}`}
                            alt={author.name ?? "Tác giả"}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        ) : (
                          <Image
                            src="/img/logo.png"
                            alt="Default Avatar"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        )}
                        <span>{author.name ?? "Chưa rõ"}</span>
                      </div>
                    )}
                    {/* {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag.id} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )} */}
                  </div>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}