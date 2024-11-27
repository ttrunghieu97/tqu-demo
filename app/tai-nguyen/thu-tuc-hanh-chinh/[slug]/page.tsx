import directus from "@/lib/directus"
import { readItems } from '@directus/sdk'
import { CalendarDays } from "lucide-react"
import React, { Suspense } from 'react';
const RelatedPosts = React.lazy(() => import('./RelatedPosts'));


interface Params {
  slug: string;
}

interface DateFormat {
  iso: string;
  localized: string;
}

interface Post {
  id: string;
  slug: string;
  title: string;
  content: string; // Assume this is WYSIWYG HTML content
  created_at: string;
  description: string | null;
  category: string;
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
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const posts = await directus.request(
    readItems('thu_tuc_hanh_chinh', {
      filter: { slug: { _eq: slug } },
      limit: 1,
      fields: ['id', 'title', 'content', 'created_at', 'description', 'category'],
    })
  ) as Post[];

  const post = posts && posts.length > 0 ? posts[0] : null;

  if (!post) {
    return <div>Không tìm thấy bài viết.</div>;
  }

  const { id, title, content, created_at, description, category } = post;

  const date = formatDate(created_at);

  return (
    <>
      <article className="container prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words [&_img]:mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">{title}</h1>
        <div className="flex items-center justify-end text-sm opacity-60 mt-4">
          {date && (
            <div className="flex items-center space-x-2 mb-5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              <time dateTime={date.iso}>{date.localized}</time>
            </div>
          )}
        </div>
        {description && (
          <p className="text-2xl opacity-80 font-bold text-justify">{description}</p>
        )}
        <div
          className="mt-8 text-2xl text-justify [&_img]:mx-auto [&_img]:block [&_img]:max-h-[1000px] [&_img]:object-contain"
          dangerouslySetInnerHTML={{
            __html: content, // Render HTML content directly
          }}
        />

        <Suspense>
          <RelatedPosts currentPostId={id} category={category} slug='' />
        </Suspense>
      </article>
    </>
  );
}
