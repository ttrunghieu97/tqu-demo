// app/videos/page.tsx
"use client";

import { useEffect, useState } from 'react';

// Định nghĩa kiểu Video cho dữ liệu nhận được từ API
type Video = {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { default: { url: string } };
  };
};

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fromCache, setFromCache] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/videos');
        const data = await res.json();

        setVideos(data.videos);
        setFromCache(data.fromCache);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>YouTube Videos</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {fromCache && <p>Fetched from cache (less than 2 hours ago)</p>}
          <ul>
            {videos.map((video) => (
              <li key={video.id.videoId}>
                <h2>{video.snippet.title}</h2>
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                <p>{video.snippet.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
