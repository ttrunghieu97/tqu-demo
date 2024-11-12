// components/VideoLibrary.tsx
import React, { useState, useEffect } from 'react';
import CustomCarousel from '@/components/CustomCarousel';
import { VideoIcon } from 'lucide-react';

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

const VideoLibrary = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/videos');
        const data = await res.json();
        setVideos(data.videos);
        setVideoLoading(false);
      } catch {
        setVideoLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const videoItems = videoLoading
    ? [{ thumbnail: "/placeholder.svg", caption: "Loading videos..." }]
    : videos.map(video => ({
      videoUrl: video.id.videoId,
      caption: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
    }));

  return (
    <CustomCarousel
      title="THƯ VIỆN VIDEO"
      icon={VideoIcon}
      items={videoItems}
    />
  );
};

export default VideoLibrary;
