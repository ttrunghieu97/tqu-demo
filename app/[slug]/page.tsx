import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { wisp } from "@/lib/wisp"

type Author = {
  name: string | null
}

type Post = {
  id: string
  createdAt: Date
  teamId: string
  description: string | null
  title: string
  content: string
  slug: string
  image: string | null
  metadata: Record<string, unknown> | null
  publishedAt: Date | null
  tags: Array<{ id: string; name: string }>
  author: Author
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const result = await wisp.getPost(slug)
    return result.post || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const result = await wisp.getPosts()
    return result.posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description || undefined,
  }
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const {
    title,
    publishedAt,
    createdAt,
    description,
    tags,
    author,
    content
  } = post

  const publicationDate = publishedAt ? new Date(publishedAt) : new Date(createdAt)

  return (
    <article className="container prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words">
      <h1>{title}</h1>
      {description && (
        <p className="text-lg opacity-80">
          {description}
        </p>
      )}
      <div className="flex items-center gap-2 text-sm opacity-60">
        {author.name ? (
          <span>{author.name}</span>
        ) : (
          <span>Anonymous</span>
        )}
        <span aria-hidden="true">•</span>
        <time dateTime={publicationDate.toISOString()}>
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: 'long'
          }).format(publicationDate)}
        </time>      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="text-sm opacity-40"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      )}
      <div className="mt-8" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}