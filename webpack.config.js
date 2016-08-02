const {
  join,
  resolve
} = require('path');

module.exports = (env) => {
  return {
    devtool: 'source-map',
    entry: './client/dev/index.js',
    output: {
      path: './client/dev/',
      publicPath: '/client/dev',
      filename: 'bundle.js'
    },
    resolve: {
      root: resolve(__dirname, '.')
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css!'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /(node_modules)/
        }
      ]
    }
  }
}
