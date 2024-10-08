/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "printlabapi.devtaijul.com",
      "placehold.co",
      "test.api.weareprintlab.co.uk",
    ],
  },
};

export default nextConfig;
