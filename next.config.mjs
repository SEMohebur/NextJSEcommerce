/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "www.pexels.com",
      "images.pexels.com",
      "picsum.photos",
      "via.placeholder.com",
      "www.applegadgetsbd.com",
      "adminapi.applegadgetsbd.com",
      "cdn.pixabay.com",
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
