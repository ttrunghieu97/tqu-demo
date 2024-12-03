"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AutoBreadcrumb from '@/components/AutoBreadcrumb';

interface Post {
  id: string;
  create_at: string;
  description: string | null;
  title: string;
  slug: string;
  image: string | null;
  category: string;
  content: string;
}

export default function SinhVienTieuBieu() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 6;

  // Hàm format ngày
  const formatDate = useCallback((date: string): string | null => {
    try {
      const dateObj = new Date(date);
      return dateObj.toLocaleString("vi-VN");
    } catch {
      return null;
    }
  }, []);

  // Fetch bài viết từ API
  const fetchPosts = useCallback(async (page: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}items/sinh_vien_tieu_bieu?limit=${postsPerPage}&page=${page}&filter[category][_eq]=sinh_vien_tieu_bieu&sort=-create_at&meta=total_count`
      );
      const result = await response.json();

      if (result.meta && result.data) {
        setPosts(result.data);
        setTotalPages(Math.ceil(result.meta.total_count / postsPerPage));
      } else {
        console.error("Invalid API response structure");
        setPosts([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, [postsPerPage]);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage, fetchPosts]);

  // Render bài viết
  const renderPosts = useMemo(
    () =>
      posts.length > 0 ? (
        posts.map((post) => (
          <Link href={`/sinh-vien-tieu-bieu/${post.slug}`} key={post.id}>
            <Card className="group hover:shadow-lg dark:hover:shadow-primary/25 transition-shadow duration-300 bg-background dark:bg-gray-900">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                {post.image ? (
                  <Image
                    alt={post.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    src={`${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
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
                <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-gray-400 mb-1">
                  <CalendarDays className="h-4 w-4" />
                  <time>{formatDate(post.create_at)}</time>
                </div>
                <h2 className="font-bold text-xl mb-1 line-clamp-2 group-hover:text-primary transition-colors dark:text-gray-100">
                  {post.title}
                </h2>
                <p className="text-muted-foreground dark:text-gray-300 line-clamp-3 text-sm">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">Không có bài viết nào để hiển thị.</p>
      ),
    [posts, formatDate]
  );

  // Render phân trang
  const renderPagination = useMemo(() => {
    const pageNumbers = [];
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      pageNumbers.push(i);
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
            />
          </PaginationItem>

          {currentPage > 2 && (
            <>
              <PaginationItem>
                <PaginationLink href="#" onClick={() => setCurrentPage(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationEllipsis />
            </>
          )}

          {pageNumbers.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {currentPage < totalPages - 1 && (
            <>
              <PaginationEllipsis />
              <PaginationItem>
                <PaginationLink href="#" onClick={() => setCurrentPage(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }, [currentPage, totalPages]);

  return (
    <>
      <AutoBreadcrumb />
      <div className="px-4 mt-5 dark:bg-gray-900">
        <div className="container mx-auto mb-5">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sinh viên tiêu biểu</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300"></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">{renderPosts}</div>
          {renderPagination}
        </div>
      </div>
    </>
  );
}
