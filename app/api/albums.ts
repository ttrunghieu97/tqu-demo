// pages/api/albums.ts

import { google } from "googleapis";

const photos = google.photos("v1");

export default async function handler(req, res) {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

  try {
    const response = await photos.albums.list({ auth });
    const albums = response.data.albums || [];

    // Lấy 5 album mới nhất
    const recentAlbums = albums.slice(0, 5).map((album) => ({
      id: album.id,
      title: album.title,
      coverPhotoBaseUrl: album.coverPhotoBaseUrl,
    }));

    res.status(200).json(recentAlbums);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
}
