module.exports = config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
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
    extensions: ['.ts', '.js']
  },
  optimization: {
    moduleIds: 'named'
  }
};
