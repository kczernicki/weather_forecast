const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': `${SRC_PATH}/ui/components`,
      '@interfaces': `${SRC_PATH}/interfaces`,
      '@repository': `${SRC_PATH}/repository`,
      '@pages': `${SRC_PATH}/ui/pages`,
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /.(scss|sass)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
