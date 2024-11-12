'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent } from '@/components/ui/card'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

interface Post {
  id: string
  title: string
  slug: string
  description: string
  image: string
}

export default function RelatedPosts({ currentPostId }: { currentPostId: string }) {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const relatedPosts = await directus.request(
          readItems('posts', {
            fields: ['id', 'title', 'slug', 'description', 'image'],
            filter: { id: { _neq: currentPostId } },
            limit: 3,
            sort: ['-date_created'],
          })
        ) as Post[]
        setPosts(relatedPosts)
      } catch (error) {
        console.error('Error fetching related posts:', error)
      }
    }

    fetchRelatedPosts()
  }, [currentPostId])

  if (posts.length === 0) {
    return null
  }

  return (
    <div className="my-8 max-w-prose text-xl mx-auto">
      <h2 className="mb-6 text-lg font-semibold tracking-tight">Related Posts</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={post.image || '/placeholder.svg?height=225&width=400'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </Link>
            <CardContent className="p-4">
              <h3 className="font-semibold line-clamp-2 mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-medium">
                Read Full Story
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}