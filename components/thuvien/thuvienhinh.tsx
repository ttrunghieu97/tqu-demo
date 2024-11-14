'use client'

import React, { useState, useEffect } from 'react';
import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';
import CustomCarousel from '@/components/thuvien/CustomCarousel';
import { ImageIcon } from 'lucide-react';

interface ImageSet {
  id: string;
  title: string;
  img: {
    id: number;
    img_id: string;
    directus_files_id: string;
  }[];
}

interface CarouselItem {
  thumbnail: string;
  caption: string;
  image: string;
}

const ImageLibrary: React.FC = () => {
  const [imageSets, setImageSets] = useState<ImageSet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await directus.request(
          readItems('img', {
            fields: ['id', 'title', 'img.id', 'img.img_id', 'img.directus_files_id'],
            limit: 1,
          })
        ) as ImageSet[];
        setImageSets(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const carouselItems: CarouselItem[] = imageSets.flatMap((imageSet) =>
    imageSet.img.map((image) => ({
      thumbnail: `${process.env.NEXT_PUBLIC_API_URL}assets/${image.directus_files_id}?width=400&height=300`,
      caption: imageSet.title,
      image: `${process.env.NEXT_PUBLIC_API_URL}assets/${image.directus_files_id}`,
    }))
  );

  return (
    <>
      <CustomCarousel
        title="THƯ VIỆN ẢNH"
        icon={ImageIcon}
        items={carouselItems}
      />
    </>
  );
};

export default ImageLibrary;
