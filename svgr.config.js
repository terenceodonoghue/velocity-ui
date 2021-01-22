const path = require('path');

const template = (
  { template: componentTemplate },
  opts,
  { imports, interfaces, componentName, props, jsx, exports },
) => {
  const plugins = ['jsx'];

  if (opts.typescript) {
    plugins.push('typescript');
  }

  const typeScriptTpl = componentTemplate.smart({ plugins });

  return typeScriptTpl.ast`
    ${imports}

    ${interfaces}

    const ${componentName} = (${props}) => (
      ${jsx}
    );

    ${exports}
  `;
};

const indexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName}Icon } from './${basename}';\n`;
  });

  if (exportEntries.length === 1) {
    exportEntries.unshift(
      '/* eslint-disable import/prefer-default-export */\n',
    );
  }

  return exportEntries.join('');
};

module.exports = {
  dimensions: false,
  ext: 'tsx',
  indexTemplate,
  replaceAttrValues: {
    '#BFC5D2': 'currentColor',
  },
  template,
  typescript: true,
};
