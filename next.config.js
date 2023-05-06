
// const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  // webpack: (config) => {
  //   config.node = {
  //     fs: 'empty'
  //   }
  //   return config
  // },
  reactStrictMode: false,

  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  // publicRuntimeConfig: {
  //   localeSubpaths,
  // },
  images: {
    domains:['images.prismic.io'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
