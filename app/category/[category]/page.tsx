// CategoryPage.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { getPostsForCategory, getCategoryTitle } from "@/app/api/directus/utils";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination"; // Pagination từ ShadCN

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
interface PageProps {
  params: {
    category: string; // Danh mục từ URL
  };
  searchParams: {
    page: string; // Trang từ URL (thường là query string)
  };
}

export default function CategoryPage({ params, searchParams }: PageProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const category = params.category;
  const page = Number(searchParams.page) || 1;

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
    const fetchCategoryPosts = async () => {
      try {
        const { posts, totalPages } = await getPostsForCategory(category, page);
        setPosts(posts);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchCategoryPosts();
  }, [category, page]);

  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-3xl text-center font-bold mb-5">{getCategoryTitle(category)}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const date = formatDate(post.created_at);
          return (
            <Link href={`/category/${category}/${post.slug}`} key={post.id}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg flex items-center justify-center">
                  {post.image ? (
                    <Image
                      alt={post.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      src={`http://100.100.10.103:8055/assets/${post.image}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Image src="/img/logo.png" alt="Default" width={250} height={150} className="opacity-50" />
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  {date && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                      <CalendarDays className="h-4 w-4" />
                      <time dateTime={date.iso}>{date.localized}</time>
                    </div>
                  )}
                  <Link href={`/category/${category}/${post.slug}`} className="block group-hover:text-primary transition-colors">
                    <h2 className="font-bold text-xl mb-1 line-clamp-2">{post.title}</h2>
                  </Link>
                  <p className="text-muted-foreground line-clamp-3 text-sm flex-1">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <Pagination className="flex justify-center my-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={currentPage > 1 ? () => setCurrentPage(currentPage - 1) : undefined}
              className={currentPage === 1 ? "text-gray-400 pointer-events-none" : ""}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 3 && <PaginationEllipsis />}

          <PaginationItem>
            <PaginationNext
              onClick={currentPage < totalPages ? () => setCurrentPage(currentPage + 1) : undefined}
              className={currentPage === totalPages ? "text-gray-400 pointer-events-none" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
