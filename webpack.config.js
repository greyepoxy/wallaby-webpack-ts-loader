const webpackConfig = require('./webpack.config.base');

module.exports = Object.assign({
  entry: './test/calculatorSpec.ts',
  devtool: 'inline-source-map',
}, webpackConfig);
