const sm = require("./slicemachine.config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en-us", "es-co"],
    defaultLocale: "en-us",
  },
  images: {
    domains: ['images.prismic.io'],
  },
};

module.exports = nextConfig;