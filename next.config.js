const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/velocity-ui' : '',
  basePath: isProd ? '/velocity-ui' : '',
  pageExtensions: ['tsx'],
};
