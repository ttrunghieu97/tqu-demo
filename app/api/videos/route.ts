// app/api/videos/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // API Key từ YouTube
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID; // ID kênh YouTube
const FETCH_INTERVAL_HOURS = 2; // Khoảng cách thời gian (2 tiếng)

// Bộ nhớ tạm trên server để lưu trữ thời gian và dữ liệu lần fetch gần nhất
let lastFetchTime: Date | null = null;
let cachedVideos: Video[] | null = null;

// Định nghĩa kiểu dữ liệu cho video
type Video = {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { default: { url: string } };
  };
};

// Định nghĩa kiểu dữ liệu cho phản hồi từ YouTube API
type YouTubeApiResponse = {
  items: Video[];
};

export async function GET() {
  const now = new Date();

  // Kiểm tra nếu đã quá 2 tiếng kể từ lần fetch cuối cùng
  if (
    lastFetchTime &&
    cachedVideos &&
    now.getTime() - lastFetchTime.getTime() <
      FETCH_INTERVAL_HOURS * 60 * 60 * 1000
  ) {
    return NextResponse.json({ videos: cachedVideos, fromCache: true });
  }

  try {
    // Gọi YouTube API để fetch 10 video mới nhất
    const response = await axios.get<YouTubeApiResponse>(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
    );

    // Kiểm tra phản hồi hợp lệ
    if (!response.data.items || !Array.isArray(response.data.items)) {
      throw new Error("Invalid response format from YouTube API");
    }

    cachedVideos = response.data.items;
    lastFetchTime = now;
    console.log(
      "Fetched videos successfully:",
      new Date().toLocaleTimeString()
    );

    return NextResponse.json({ videos: cachedVideos, fromCache: false });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching videos:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    return NextResponse.json(
      { error: "Failed to fetch videos", details: "Unknown error" },
      { status: 500 }
    );
  }
}
