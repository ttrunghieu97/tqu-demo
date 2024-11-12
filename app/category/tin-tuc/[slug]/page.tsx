import { ParsedUrlQuery } from 'querystring'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import directus from "@/lib/directus"
import { readItems } from '@directus/sdk'
import { CalendarDays } from "lucide-react"
import RelatedPosts from '@/components/getpost/RelatedPosts'

interface Params extends ParsedUrlQuery {
  slug: string
}

interface DateFormat {
  iso: string
  localized: string
}

interface Post {
  id: string
  slug: string
  title: string
  content: string
  created_at: string
  description: string | null
}

export async function generateStaticParams() {
  const posts = await directus.request(
    readItems('posts', {
      fields: ['slug'],
    })
  ) as Post[]

  return posts.map((post: Post) => ({
    slug: post.slug,
  }))
}

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

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  const posts = await directus.request(
    readItems('posts', {
      filter: { slug: { _eq: slug } },
      limit: 1,
      fields: ['title', 'content', 'created_at', 'description'],
    })
  ) as Post[]

  const post = posts && posts.length > 0 ? posts[0] : null

  if (!post) {
    return <div>Không tìm thấy bài viết.</div>
  }

  const { title, content, created_at, description } = post
  const htmlContent = await remark()
    .use(remarkHtml)
    .process(content)
    .then((file) => String(file))

  const date = formatDate(created_at)

  return (
    <>
      <article className="container prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words [&_img]:mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">{title}</h1>
        <div className="flex items-center justify-end text-sm opacity-60 mt-4">
          {date && (
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              <time dateTime={date.iso}>{date.localized}</time>
            </div>
          )}
        </div>
        {description && (
          <p className="text-lg opacity-80">{description}</p>
        )}
        <div
          className="mt-8 text-2xl text-justify [&_img]:mx-auto [&_img]:block [&_img]:max-h-[1000px] [&_img]:object-contain"
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
        <RelatedPosts currentPostId={post.id} />

      </article>
    </>
  )
}