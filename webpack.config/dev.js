const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlwebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./base')
const root = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
  entry: [
    'webpack/hot/dev-server',
    path.join(root, 'src/index.js')
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    colors: true,
    port: 3000
  },
  devtool: 'source-map',
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React Demo',
      template: path.join(root, 'templates/index.ejs'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
