const webpackConfig = require('./webpack.config.base');

module.exports = Object.assign({
  entry: './test/calculatorSpec.tsx',
  devtool: 'inline-source-map',
}, webpackConfig);
