'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Define the structure of an album
interface Album {
  id: string;
  coverPhotoBaseUrl: string;
  title: string;
}

const AlbumCarousel = () => {
  const [albums, setAlbums] = useState<Album[]>([]); // Use the Album type here

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch('/api/albums');
      const data: Album[] = await response.json();
      setAlbums(data);
    };

    fetchAlbums();
  }, []);

  return (
    <div className="relative">
      <div className="flex overflow-x-scroll space-x-4">
        {albums.map((album) => (
          <a
            key={album.id}
            href={`https://photos.google.com/albums/${album.id}`} // Link to the album
            className="flex-shrink-0 w-48 h-48 bg-gray-200 rounded-lg overflow-hidden"
          >
            <Image src={album.coverPhotoBaseUrl} alt={album.title} width={192} height={192} />
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold">{album.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AlbumCarousel;
