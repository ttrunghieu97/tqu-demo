// app/api/youtube-videos.ts
import type { NextApiRequest, NextApiResponse } from "next";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

// Define the structure of the YouTube API response
interface YouTubeApiResponse {
  items: Array<{
    id: { kind: string; videoId: string };
    snippet: {
      title: string;
      thumbnails: { high: { url: string } };
    };
  }>;
}

// Biến lưu cache trong bộ nhớ
let cachedVideos: YouTubeVideo[] | null = null;
let lastFetched = 0;
const CACHE_DURATION = 2 * 60 * 60 * 1000; // 2 tiếng (tính theo milliseconds)

const fetchLatestVideos = async (): Promise<YouTubeVideo[]> => {
  const channelId = "UCLtll0roAIliWEQkb9JC-gA";
  const apiKey = process.env.YOUTUBE_API_KEY; // Lấy API key từ biến môi trường

  if (!apiKey) {
    throw new Error("API key is not defined");
  }

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet,id&maxResults=5`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }

  const data: YouTubeApiResponse = await response.json();
  return data.items
    .filter((item) => item.id.kind === "youtube#video")
    .map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const now = Date.now();

  // Kiểm tra xem cache đã quá hạn chưa
  if (!cachedVideos || now - lastFetched > CACHE_DURATION) {
    try {
      const videos = await fetchLatestVideos();
      cachedVideos = videos;
      lastFetched = now;
    } catch {
      return res.status(500).json({ error: "Failed to fetch YouTube videos" });
    }
  }

  res.status(200).json(cachedVideos);
}
