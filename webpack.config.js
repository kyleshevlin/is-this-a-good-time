const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/App.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.es6']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    preLoaders: [
      {
        test: /\.(jsx?|es6)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(jsx?|es6)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
