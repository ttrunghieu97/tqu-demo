'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon, SunIcon } from '@radix-ui/react-icons';
import VideoPopUp from '@/components/VideoPopup';
import Autoplay from "embla-carousel-autoplay";
import { VideoIcon, ImageIcon } from 'lucide-react';
import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

interface ImageSet {
  id: string;
  title: string;
  img: {
    id: string;
    img_id: string;
    directus_files_id: string;
  }[];
}
interface Post {
  id: string;
  title: string;
  image: string;
  description: string;
  slug: string;
  create_at: string;
}
interface CarouselItemType {
  thumbnail?: string;
  videoUrl?: string;
  caption?: string;
  image?: string;
  slug?: string;
}

const YouTubeVideoFetcher = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestVideos = async () => {

      try {
        const response = await fetch(
          '/api/youtube-videos'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        setVideos(data); // Lưu danh sách video vào state

      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideos();
  }, []);

  return { videos, loading, error };
};

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
            plugins={[Autoplay({ delay: 5000 })]}
            setApi={setApi}
            className="w-full h-full relative"
          >
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
                          src={item.thumbnail || '/img/logo.png?height=400&width=600'}
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
                      <Link href={item.slug ? item.slug : '#'} className="block h-full">
                        <Image
                          src={item.thumbnail || '/img/logo.png?height=400&width=600'}
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
  const { videos, loading: videoLoading, error: videoError } = YouTubeVideoFetcher();
  const [imageSets, setImageSets] = useState<ImageSet[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch images
        const imageResponse = await directus.request(
          readItems('img', {
            fields: ['id', 'title', 'img.id', 'img.img_id', 'img.directus_files_id'],
            limit: 2,
          })
        ) as ImageSet[];
        setImageSets(imageResponse);

        // Fetch outstanding students
        const studentsResponse = await directus.request(
          readItems('sinh_vien_tieu_bieu', {
            limit: 10,
            fields: ['id', 'title', 'image', 'description', 'slug', 'create_at'],
          })
        ) as Post[];
        setPosts(studentsResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const imageItems: CarouselItemType[] = imageSets.flatMap((imageSet) =>
    imageSet.img.map((image) => ({
      thumbnail: `${process.env.NEXT_PUBLIC_API_URL}assets/${image.directus_files_id}?width=400&height=300`,
      caption: imageSet.title,
      image: `${process.env.NEXT_PUBLIC_API_URL}assets/${image.directus_files_id}`,
      slug: "/thu-vien-anh"
    }))
  );

  const studentItems: CarouselItemType[] = posts.map((post) => ({
    thumbnail: `${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}?width=400&height=300`,
    caption: post.title,
    image: `${process.env.NEXT_PUBLIC_API_URL}assets/${post.image}`,
    slug: post.slug,
  }));

  const carouselData = [
    {
      title: "THƯ VIỆN VIDEO",
      icon: VideoIcon,
      items: videoLoading || videoError
        ? [
          {
            videoUrl: "gJ8VF3YRqEM",
            caption: "Loading videos...",
            thumbnail: "/img/logo.png?height=400&width=600",
          },
        ]
        : videos.map(video => ({
          videoUrl: video.id,
          caption: video.title,
          thumbnail: video.thumbnail,
        })),
    },
    {
      title: "THƯ VIỆN HÌNH ẢNH",
      icon: ImageIcon,
      items: loading
        ? [
          {
            image: "/img/logo.png?height=400&width=600",
            caption: "Loading images...",
            slug: "/thu-vien-anh"
          },
        ]
        : imageItems,
    },
    {
      title: "SINH VIÊN TIÊU BIỂU",
      icon: SunIcon,
      items: loading
        ? [
          {
            image: "/img/logo.png?height=400&width=600",
            caption: "Loading students...",
            slug: "#"
          },
        ]
        : studentItems,
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
