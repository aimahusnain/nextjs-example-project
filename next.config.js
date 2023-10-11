/** @type {import('next').NextConfig} */
const nextConfig = {}

const withImages = require('next-images');

module.exports = withImages({
  ...nextConfig, // Include any other configuration options from nextConfig
  images: {
    domains: ['dummyimage.com', 'img.freepik.com'], // Add the allowed domains here
  },
});
