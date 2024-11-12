'use client'

import React, { useState, useEffect } from 'react';
import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';
import CustomCarousel from '@/components/CustomCarousel';
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
}

const StudentHighlights: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Initialize state for posts
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const result = await directus.request(
          readItems('sinh_vien_tieu_bieu', {
            limit: 10, // Specify the number of posts per page
            fields: ['id', 'title', 'image', 'content ', 'description', 'slug', 'create_at'],
          })
        );
        setPosts(result as Post[]); // Store the fetched posts in the state
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchInitialPosts(); // Fetch posts when the component is mounted
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // Map over the posts to create the carousel items
  const postItems: CarouselItem[] = posts.map((post) => ({
    thumbnail: `${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}?width=400&height=300`,
    caption: post.title,
    image: `${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}`,
  }));

  return (
    <>
      <CustomCarousel
        title="SINH VIÊN TIÊU BIỂU"
        icon={SunIcon}
        items={postItems}
      />
    </>
  );
};

export default StudentHighlights;

