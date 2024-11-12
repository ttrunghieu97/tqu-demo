/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "vttu.edu.vn",
      "imagedelivery.net",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "img.youtube.com",
      "i.ytimg.com",
      "scontent.fhph1-1.fna.fbcdn.net",
      "lh3.googleusercontent.com",
      "daihoctantrao.edu.vn",
      "res.cloudinary.com",
      "tqu-demo.vercel.app",
      "100.100.10.103",
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("sharp");
    }
    return config;
  },
};

export default nextConfig;
