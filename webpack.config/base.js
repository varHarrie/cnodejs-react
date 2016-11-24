const path = require('path')

const root = path.resolve(__dirname, '../')

module.exports = {
  entry: [path.join(root, 'src/index.js')],
  output: {
    path: path.join(root, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.styl$/, loader: 'style!css!stylus'}
    ]
  },
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  }
}