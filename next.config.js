const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withImages(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    }
  }),
  {
    inlineImageLimit: 16384,
    webpack(config, options) {
      return config;
    }
  }
);