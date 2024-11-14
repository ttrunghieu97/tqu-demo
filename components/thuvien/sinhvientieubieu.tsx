'use client'

import React, { useState, useEffect } from 'react';
import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';
import CustomCarousel from '@/components/thuvien/CustomCarousel';
import { SunIcon } from 'lucide-react';

interface Post {
  id: string;
  created_at: string;
  description: string | null;
  title: string;
  slug: string;
  image: string;
  category: string;
}

interface CarouselItem {
  thumbnail: string;
  caption: string;
  image: string;
  slug: string;
}

const StudentHighlights: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const result = await directus.request(
          readItems('sinh_vien_tieu_bieu', {
            limit: 10,
            fields: ['id', 'title', 'image', 'description', 'slug', 'create_at'],
          })
        );
        setPosts(result as Post[]);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // Map over the posts to create the carousel items
  const postItems: CarouselItem[] = posts.map((post) => ({
    thumbnail: `${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}?width=400&height=300`,
    caption: post.title,
    image: `${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}`,
    slug: post.slug, // Include the slug here
  }));

  return (
    <>
      <CustomCarousel
        title="SINH VIÊN TIÊU BIỂU"
        icon={SunIcon}
        items={postItems}
        linkPrefix="/sinh-vien-tieu-bieu/" // Specify the link prefix for individual items
      />
    </>
  );
};

export default StudentHighlights;
