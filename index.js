const { path } = require('@vuepress/shared-utils');

module.exports = (options, context) => ({
  name: 'Fish',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
});
