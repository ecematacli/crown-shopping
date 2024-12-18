const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  de: 'de',
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
      localeSubpaths,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};