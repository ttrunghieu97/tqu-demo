'use client'

import { useState, useCallback, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import React from "react"

interface Post {
  id: string
  created_at: string
  description: string | null
  title: string
  slug: string
  image: string
  category: string
  content: string
}

interface DateFormat {
  iso: string
  localized: string
}

interface OptimizedNewsComponentProps {
  initialPosts: Post[]
  totalPages: number
  currentPage: number
  category: string
  title: string
}

const PostCard = React.memo(({ post, category }: { post: Post; category: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  const date = useMemo(() => formatDate(post.created_at), [post.created_at])

  return (
    <Link href={`/${category}/${post.slug}`}>
      <Card className="group hover:shadow-lg transition-shadow duration-300" ref={ref}>
        {inView && (
          <>
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
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <Image src="/img/logo.png" alt="Default" width={250} height={150} className="opacity-50" />
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
              <h2 className="font-bold text-xl mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground line-clamp-3 text-sm">{post.description}</p>
            </CardContent>
          </>
        )}
      </Card>
    </Link>
  )
})

PostCard.displayName = 'PostCard'

const formatDate = (date: string | undefined): DateFormat | null => {
  if (!date) return null
  try {
    const dateObj = new Date(date)
    return {
      iso: dateObj.toISOString(),
      localized: dateObj.toLocaleString("vi-VN"),
    }
  } catch {
    return null
  }
}

export default function OptimizedNewsComponent({ initialPosts, totalPages, currentPage, category, title }: OptimizedNewsComponentProps) {
  const [posts] = useState<Post[]>(initialPosts)
  const router = useRouter()

  const handlePageChange = useCallback((newPage: number) => {
    router.push(`/category/${category}?page=${newPage}`)
  }, [router, category])

  const paginationItems = useMemo(() => {
    return [...Array(totalPages)].map((_, index) => (
      <PaginationItem key={index}>
        <PaginationLink
          onClick={() => handlePageChange(index + 1)}
          isActive={currentPage === index + 1}
        >
          {index + 1}
        </PaginationLink>
      </PaginationItem>
    ))
  }, [totalPages, currentPage, handlePageChange])

  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-3xl text-center font-bold mb-5">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} category={category} />
        ))}
      </div>

      <Pagination className="flex justify-center my-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {paginationItems}

          {totalPages > 3 && <PaginationEllipsis />}

          <PaginationItem>
            <PaginationNext
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}