"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationEllipsis, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Post {
  id: string;
  created_at: string;
  title: string;
  file: string | null; // Updated field name to match API response
}
export default function SinhVienTieuBieu() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10; // Change posts per page as needed

  // Format the date
  const formatDate = useCallback((date: string): string | null => {
    try {
      const dateObj = new Date(date);
      return dateObj.toLocaleString("vi-VN");
    } catch {
      return null;
    }
  }, []);

  // Fetch posts from API
  const fetchPosts = useCallback(async (page: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}items/hoc_bong_tro_cap_xh?limit=${postsPerPage}&page=${page}&sort=-created_at&meta=total_count`
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

  // Render posts
  const renderPosts = useMemo(
    () =>
      posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="border-b border-gray-300 py-4">
            <Link href={`${process.env.NEXT_PUBLIC_API_URL}assets/${post.file}`} className="text-xl font-bold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <div className="text-sm text-gray-500">{formatDate(post.created_at)}</div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Không có bài viết nào để hiển thị.</p>
      ),
    [posts, formatDate]
  );

  // Render pagination
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
    <div className="px-4 mt-5 dark:bg-gray-900">
      <div className="container mx-auto mb-5">
        <div className="text-center mb-5">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">HỌC BỔNG - TRỢ CẤP XÃ HỘI</h1>
        </div>
        <div>{renderPosts}</div>
        {renderPagination}
      </div>
    </div>
  );
}
