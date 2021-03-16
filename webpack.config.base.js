const webpack = require('webpack');

module.exports = config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'awesome-typescript-loader',
      //     options: {
      //       transpileOnly: true
      //     }
      //   }
      // }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    moduleIds: 'named'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
};
