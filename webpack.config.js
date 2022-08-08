const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: ['./src/index.jsx'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    assetModuleFilename: 'bundle[ext]',
  },

  resolve: {
    alias: {
      '/assets': path.resolve(__dirname, 'src/assets'),
    },
    extensions: ['.js', '.jsx'],
    fallback: {
      fs: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
    compress: true
  },
}