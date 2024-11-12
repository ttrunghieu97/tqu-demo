// components/CustomCarousel.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import VideoPopUp from './VideoPopup';
import Autoplay from "embla-carousel-autoplay";
import { PlayIcon } from 'lucide-react';

interface CarouselItemType {
  thumbnail: string;
  videoUrl?: string;
  caption?: string;
  image?: string;
  slug?: string;
}

interface CustomCarouselProps {
  title: string;
  items: CarouselItemType[];
  icon: React.ElementType;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ title, items, icon: Icon }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!api) return;

    const updateCurrentSlide = () => setCurrent(api.selectedScrollSnap());
    api.on("select", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
    };
  }, [api]);

  const handleVideoClick = (videoUrl: string) => {
    setModalOpen(true);
    setModalVideoUrl(`https://www.youtube.com/embed/${videoUrl}`);
  };

  return (
    <Card className="w-full h-full flex flex-col overflow-hidden">
      <CardContent className="p-0 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-white bg-red-800 p-2 flex items-center gap-2 rounded-tr-2xl">
          <Icon className="w-5 h-5" />
          {title}
        </h2>
        <div className="flex-1 relative">
          <Carousel plugins={[Autoplay({ delay: 5000 })]} setApi={setApi} className="w-full h-full relative">
            <CarouselContent className="h-full">
              {items.map((item, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative h-64 w-full">
                    {item.videoUrl ? (
                      <div className="relative h-full w-full cursor-pointer" onClick={() => handleVideoClick(item.videoUrl!)}>
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
                          src={item.image || '/placeholder.svg'}
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
};

export default CustomCarousel;
