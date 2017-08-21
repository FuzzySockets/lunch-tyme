const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/components/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{ 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Lunch Tyme' 
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [{
        path: 'https://fonts.googleapis.com/css?family=Nunito:200,600',
        type: 'css'
      }, {
        path: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyARYdXl9kLUX1IcUBy6T9VtXqjyzSx0leE',
        type: 'js'
      }],
      append: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
