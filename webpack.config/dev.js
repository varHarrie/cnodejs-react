const path = require('path')
const merge = require('webpack-merge')
const HtmlwebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./base')
const root = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React Demo'
    })
  ]
})