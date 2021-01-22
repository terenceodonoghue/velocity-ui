module.exports = (api) => {
  const isTest = api.env('test');

  const presets = [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ];

  const plugins = ['@emotion/babel-plugin'];

  if (isTest) {
    presets.push(['@babel/preset-env', { targets: { node: 'current' } }]);
    presets.push('@babel/preset-typescript');
  }

  return {
    presets,
    plugins,
  };
};
