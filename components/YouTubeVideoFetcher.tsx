// components/YouTubeVideoFetcher.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Define interfaces for the response structure
interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

interface YouTubeApiResponse {
  items: {
    id: {
      kind: string;
      videoId: string;
    };
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
    };
  }[];
}

const YouTubeVideoFetcher = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const channelId = 'UCLtll0roAIliWEQkb9JC-gA'; // Replace with your YouTube channel ID
  const apiKey = 'AIzaSyD4OEHoXw8JXZZWZ5ZXC6shAO9Xg5CjFrM'; // Replace with your YouTube API key

  const fetchLatestVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet,id&maxResults=5`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }

      const data: YouTubeApiResponse = await response.json();
      const videoItems: YouTubeVideo[] = data.items
        .filter(item => item.id.kind === 'youtube#video')
        .map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url, // Get the high-resolution thumbnail
        }));

      setVideos(videoItems);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestVideos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map(video => (
        <div key={video.id} className="bg-gray-100 rounded overflow-hidden shadow">
          {/* Use Next.js Image component */}
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={640}
            height={360}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{video.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubeVideoFetcher;
