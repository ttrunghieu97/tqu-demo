import { remark } from 'remark';
import remarkHtml from 'remark-html';
import directus from "@/lib/directus";
import { readItems } from '@directus/sdk';
import { CalendarDays } from 'lucide-react';
import React from 'react';

interface DateFormat {
  iso: string;
  localized: string;
}

interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  date_created: string;
  date_updated: string;
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

export default async function BlogPost() {
  const posts = await directus.request(
    readItems('gioi_thieu_dbcl', {
      filter: { slug: { _eq: 'chuc-nang-nhiem-vu' } },
      limit: 1,
      fields: ['id', 'title', 'content', 'date_created', 'date_updated', 'category'],
    })
  ) as Post[];

  const post = posts && posts.length > 0 ? posts[0] : null;

  if (!post) {
    return <div className="container mx-auto px-4 py-8 text-center">Không tìm thấy bài viết.</div>;
  }

  const { title, content, date_updated } = post;
  const htmlContent = await remark()
    .use(remarkHtml)
    .process(content)
    .then((file) => String(file));

  // const createdDate = formatDate(date_created);
  const updatedDate = formatDate(date_updated);

  return (
    <article className="container prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words [&_img]:mx-auto">
      <h1 className="text-4xl font-bold text-center mb-2">{title}</h1>
      <div className="flex items-center justify-end text-sm opacity-60 mt-4">
        {updatedDate && (
          <div className="flex items-center space-x-2 mb-5">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            <time dateTime={updatedDate.iso}>{updatedDate.localized}</time>
          </div>
        )}
      </div>
      <div
        className="mt-8 text-2xl text-justify [&_img]:mx-auto [&_img]:block [&_img]:max-h-[1000px] [&_img]:object-contain"
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
      />
    </article>
  );
}

