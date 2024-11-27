'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from 'lucide-react'
import directus from "@/lib/directus"
import { readItems } from '@directus/sdk'

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

interface RelatedPostsProps {
  currentPostId: string
  category: string
  slug: string // Only pass the slug (e.g., 'tin-tuc')
  limit?: number
}

export default function RelatedPosts({ currentPostId, category, slug, limit = 6 }: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])

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

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const result = await directus.request(
          readItems('chuan_dau_ra', {
            limit: limit,
            fields: ['id', 'title', 'created_at', 'description', 'slug', 'image', 'category'],
            filter: {
              _and: [
                { category: { _eq: category } },
                { id: { _neq: currentPostId } }
              ]
            },
            sort: ['-created_at'],
          })
        )
        setRelatedPosts(result as Post[])
      } catch (error) {
        console.error("Error fetching related posts:", error)
      }
    }

    fetchRelatedPosts()
  }, [currentPostId, category, limit])

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className="mt-8 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center relative">
        <div className="w-1/3 h-1 bg-gradient-to-r from-transparent via-green-500 dark:via-green-600 to-transparent" />
        <span className="px-4 z-10 transition-colors duration-300">
          BÀI VIẾT LIÊN QUAN
        </span>
        <div className="w-1/3 h-1 bg-gradient-to-l from-transparent via-green-500 dark:via-green-600 to-transparent" />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {relatedPosts.map((post) => {
          const date = formatDate(post.created_at)
          return (
            <Link href={`/category/${slug}/${post.slug}`} key={post.id}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg h-48">
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
                        width={100}
                        height={100}
                        className="opacity-50"
                      />
                    </div>
                  )}
                </div>
                <CardContent className="p-4 dark:text-gray-300 flex-grow">
                  {date && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1 dark:text-gray-400">
                      <CalendarDays className="h-4 w-4" />
                      <time dateTime={date.iso}>{date.localized}</time>
                    </div>
                  )}
                  <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors dark:text-gray-100">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 text-sm dark:text-gray-400">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
