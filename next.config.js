const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ["pystorebackend.herokuapp.com", "localhost"],
    formats: ["image/avif", "image/webp"],
  },
});
