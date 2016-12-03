const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
  const config = {
    context: __dirname,
    entry: './src/js/entry.js',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
      publicPath: '/build/'
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json', '.es6']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    devtool: env.prod ? 'source-map' : 'eval',
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
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap'
          })
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?sourceMap!postcss-loader?sourceMap'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
  }

  return config
}
