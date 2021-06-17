/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')

const withSVGr = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const config = withPlugins([[withSVGr]], {
  images: {
    disableStaticImages: true,
  },
})

module.exports = config
