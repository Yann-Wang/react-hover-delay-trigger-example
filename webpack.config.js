const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  // devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'react hover delay trigger'
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
