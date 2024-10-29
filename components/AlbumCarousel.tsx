'use client'

import { useEffect, useState } from 'react';

const AlbumCarousel = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch('/api/albums');
      const data = await response.json();
      setAlbums(data);
    };

    fetchAlbums();
  }, []);

  return (
    <div className="relative">
      <div className="flex overflow-x-scroll space-x-4">
        {albums.map(album => (
          <a
            key={album.id}
            href={`https://photos.google.com/albums/${album.id}`} // Đường dẫn đến album
            className="flex-shrink-0 w-48 h-48 bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={album.coverPhotoBaseUrl}
              alt={album.title}
              className="w-full h-full object-cover"
            />
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
