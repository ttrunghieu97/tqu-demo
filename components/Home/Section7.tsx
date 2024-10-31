'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from '@radix-ui/react-icons';
import VideoPopUp from '@/components/VideoPopup';
import Autoplay from "embla-carousel-autoplay";
import { VideoIcon, ImageIcon, SunIcon } from 'lucide-react';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

interface CarouselItemType {
  thumbnail: string;
  videoUrl?: string;
  caption?: string;
  image?: string;
}

const YouTubeVideoFetcher = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestVideos = async () => {
      const channelId = 'UCLtll0roAIliWEQkb9JC-gA';
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet,id&maxResults=5`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        const videoItems: YouTubeVideo[] = data.items
          .filter((item: { id: { kind: string } }) => item.id.kind === 'youtube#video')
          .map((item: { id: { videoId: string }; snippet: { title: string; thumbnails: { high: { url: string } } } }) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
          }));

        setVideos(videoItems);
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

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setModalVideoUrl(null);
    });
  }, [api]);

  const goToPrevious = () => api?.scrollTo(current - 1);
  const goToNext = () => api?.scrollTo(current + 1);

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
                          src={item.thumbnail || 'placeholder.jpg'}
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
                      <Image
                        src={item.image || '/placeholder.svg?height=400&width=600'}
                        alt={item.caption || `Slide ${index + 1}`}
                        fill
                        className="object-cover"
                      />
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
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
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
  const { videos, loading, error } = YouTubeVideoFetcher();

  // Fallback videos in case API fails or during loading
  const fallbackVideos = [
    {
      videoUrl: "gJ8VF3YRqEM",
      caption: "Test Fallback",
      thumbnail: "/img/logo.png"
    },
  ];

  const carouselData: {
    title: string;
    items: CarouselItemType[];
    icon: React.ElementType;
  }[] = [
      {
        title: "THƯ VIỆN VIDEO",
        icon: VideoIcon,
        items: loading || error ? fallbackVideos : videos.map(video => ({
          videoUrl: video.id,
          caption: video.title,
          thumbnail: video.thumbnail,
        })),
      },
      {
        title: "THƯ VIỆN HÌNH",
        icon: ImageIcon,
        items: [
          {
            image: "/images/gallery/campus-life-1.jpg",
            caption: "Lễ tốt nghiệp khoa CNTT năm 2024",
            thumbnail: "/images/gallery/campus-life-1.jpg"
          },
          {
            image: "/images/gallery/campus-life-2.jpg",
            caption: "Hoạt động nghiên cứu tại phòng lab",
            thumbnail: "/images/gallery/campus-life-2.jpg"
          },
        ],
      },
      {
        title: "SINH VIÊN TIÊU BIỂU",
        icon: SunIcon,
        items: [
          {
            image: "/images/students/student-1.jpg",
            caption: "Nguyễn Văn An - Giải nhất Olympic Tin học SV 2024",
            thumbnail: "/images/students/student-1.jpg"
          },
          {
            image: "/img/sondh.png",
            caption: "Đỗ Hữu Sơn",
            thumbnail: "/img/sondh.png"
          },
          {
            image: "/",
            caption: "Lê Hoàng Cường - Quán quân Hackathon 2024",
            thumbnail: "/images/students/student-3.jpg"
          },
          {
            image: "/images/students/student-4.jpg",
            caption: "Phạm Thị Dung - Học bổng toàn phần tại Stanford",
            thumbnail: "/images/students/student-4.jpg"
          },
          {
            image: "/images/students/student-5.jpg",
            caption: "Hoàng Minh Em - Giải nhất cuộc thi AI Challenge",
            thumbnail: "/images/students/student-5.jpg"
          }
        ],
      },
    ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {carouselData.map((data, index) => (
          <CustomCarousel
            key={index}
            title={data.title}
            items={data.items}
            icon={data.icon}
          />
        ))}
      </div>

    </div>
  );
}
