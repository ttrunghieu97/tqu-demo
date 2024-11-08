'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import VideoPopUp from '@/components/VideoPopup';
import Autoplay from "embla-carousel-autoplay";
import { VideoIcon, ImageIcon, SunIcon, PlayIcon } from 'lucide-react';
import { createWispClient } from "@/lib/wisp";
import type { Author as WispAuthor } from "@wisp-cms/client";

type Video = {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string, width: number, height: number };
      medium: { url: string, width: number, height: number };
      high: { url: string, width: number, height: number };
    };
  };
};

interface CarouselItemType {
  thumbnail: string;
  videoUrl?: string;
  caption?: string;
  image?: string;
  slug?: string;
}

interface Post {
  id: string;
  createdAt: Date;
  teamId: string;
  description: string | null;
  title: string;
  slug: string;
  image: string | null;
  authorId: string;
  updatedAt: Date;
  publishedAt: Date | null;
  author: WispAuthor;
  tags: {
    id: string;
    name: string;
  }[];
}

function CustomCarousel({ title, items, icon: Icon }: {
  title: string;
  items: CarouselItemType[];
  icon: React.ElementType;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setModalVideoUrl(null);
    });
  }, [api]);

  return (
    <Card className="w-full h-full flex flex-col overflow-hidden">
      <CardContent className="p-0 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-white bg-red-800 p-2 flex items-center gap-2 rounded-tr-2xl">
          <Icon className="w-5 h-5" />
          {title}
        </h2>
        <div className="flex-1 relative">
          <Carousel
            plugins={[
              Autoplay({ delay: 5000 }),
            ]}
            setApi={setApi}
            className="w-full h-full relative">
            <CarouselContent className="h-full">
              {items.map((item, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative h-64 w-full">
                    {item.videoUrl ? (
                      <div className="relative h-full w-full cursor-pointer" onClick={() => {
                        setModalOpen(true);
                        setModalVideoUrl(`https://www.youtube.com/embed/${item.videoUrl}`);
                      }}>
                        <Image
                          src={item.thumbnail}
                          alt={item.caption || `Video ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-red-600 p-2 rounded-full">
                            <PlayIcon className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <Link href={item.slug ? `/sinh-vien-tieu-bieu/${item.slug}` : '#'} className="block h-full">
                        <Image
                          src={item.image || '/placeholder.svg?height=400&width=600'}
                          alt={item.caption || `Slide ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </Link>
                    )}
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                        {item.caption}
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Carousel>
        </div>

        <div className="flex justify-center mt-2 pb-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${current === index ? 'bg-red-800' : 'bg-gray-300'}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </CardContent>

      <VideoPopUp
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={modalVideoUrl || ''}
      />
    </Card>
  );
}

export default function Section7() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/videos');
        const data = await res.json();
        setVideos(data.videos);
        setVideoLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setVideoError('Failed to fetch videos');
        setVideoLoading(false);
      }
    };

    const fetchPosts = async () => {
      setLoading(true);
      const wisp = createWispClient('clys59v8l001jm4u10m0eryw0');

      try {
        const result = await wisp.getPosts({
          page: 1,
          limit: 5,
        });
        console.log('Fetched posts:', result.posts);
        setPosts(result.posts as Post[]);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
    fetchPosts();
  }, []);

  const defaultStudentItems = [
    {
      image: "/placeholder.svg?height=400&width=600",
      caption: "Loading student highlights...",
      thumbnail: "/placeholder.svg?height=400&width=600",
      slug: "#",
    },
  ];

  const carouselData = [
    {
      title: "THƯ VIỆN VIDEO",
      icon: VideoIcon,
      items: videoLoading || videoError ? [
        {
          videoUrl: "gJ8VF3YRqEM",
          caption: "Loading videos...",
          thumbnail: "/placeholder.svg?height=400&width=600"
        }
      ] : videos.map(video => ({
        videoUrl: video.id.videoId,
        caption: video.snippet.title,
        thumbnail: video.snippet.thumbnails.high.url, // Sử dụng thumbnail chất lượng cao
      })),
    },
    {
      title: "THƯ VIỆN HÌNH",
      icon: ImageIcon,
      items: [
        {
          image: "/images/gallery/campus-life-1.jpg",
          caption: "Lễ tốt nghiệp khoa CNTT năm 2024",
          thumbnail: "/images/gallery/campus-life-1.jpg",
          slug: "le-tot-nghiep-2024",
        },
        {
          image: "/images/gallery/campus-life-2.jpg",
          caption: "Hoạt động nghiên cứu tại phòng lab",
          thumbnail: "/images/gallery/campus-life-2.jpg",
          slug: "hoat-dong-nghien-cuu",
        },
      ],
    },
    {
      title: "SINH VIÊN TIÊU BIỂU",
      icon: SunIcon,
      items: loading || error ? defaultStudentItems : posts.map(post => ({
        image: post.image || '/placeholder.svg?height=400&width=600',
        caption: post.title,
        thumbnail: post.image || '/placeholder.svg?height=400&width=600',
        slug: post.slug,
      })),
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {carouselData.map((data, index) => (
          <div key={index} className="flex flex-col">
            <CustomCarousel
              title={data.title}
              items={data.items}
              icon={data.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}