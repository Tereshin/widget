'use strict';

module.exports = {
  context: __dirname + '/src',
  entry: './app',
  output: {
    path: __dirname + '/build',
    filename: 'widget.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
    ]
  }
}