'use client';

import { useEffect, useState } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

const YouTubeVideoFetcher = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLatestVideos = async () => {
    try {
      const response = await fetch('/api/youtube-videos');
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }

      const videoData: YouTubeVideo[] = await response.json();
      setVideos(videoData);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestVideos();
  }, []);

  return { videos, loading, error };
};

export default YouTubeVideoFetcher;
