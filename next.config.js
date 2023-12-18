const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  sassOptions: {
    prependData: `@import "@styles/colors.scss";
                  @import "@styles/media.scss";
                  @import "@styles/fonts.scss";`,
  },

  // https://vercel.com/guides/how-to-enable-cors
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};
