'use client';

import React from 'react';
import { createWispClient } from '@/lib/wisp';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AutoBreadcrumbs from '@/components/AutoBreadcrumb';
import { DepartmentName } from '@/data/Header';
import menuData from '@/data/Header'; // Import menuData
import { RelatedPosts } from '@/components/RelatedPosts';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  publishedAt: Date | null; // Update to allow Date or null
  tags: { name: string }[];
}

const BlogPostPage = () => {
  const params = useParams();
  const khoa = params?.khoa as DepartmentName;
  let slug = params?.slug;

  const [postData, setPostData] = React.useState<BlogPost | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Ensure slug is a string
  if (Array.isArray(slug)) {
    slug = slug[0]; // Use the first element if slug is an array
  }

  // Get the blogId dynamically
  const departmentData = menuData[khoa];
  const wisp = createWispClient(departmentData.blogId);

  React.useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const result = await wisp.getPost(slug);
        if (result.post) {
          setPostData(result.post);
        } else {
          setError('Bài viết không tồn tại.');
        }
      } catch {
        setError('Đã có lỗi xảy ra khi tải bài viết.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, wisp]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-600">{error}</h1>
      </div>
    );
  }

  if (!postData) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-600">Bài viết không tồn tại</h1>
      </div>
    );
  }

  return (
    <>
      <Header department={khoa} />
      <AutoBreadcrumbs />
      <div className="container prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words [&_img]:mx-auto">
        <h1 className='text-4xl font-bold text-center mb-5'>{postData.title}</h1>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
        <div className="text-sm opacity-40 mt-4">
          {postData.publishedAt ? Intl.DateTimeFormat('vi-VN').format(new Date(postData.publishedAt)) : 'Ngày không xác định'}
        </div>        <div className="mt-10 opacity-40 text-sm">
          {postData.tags.map((tag) => (
            <span key={tag.name}>#{tag.name} </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPostPage;
