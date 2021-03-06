const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './client/dev/index.js',
  output: {
    path: './client/dev/',
    publicPath: '/client/dev',
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve(__dirname, '.'),
    alias: {
      vue: 'vue/dist/vue.js',
      ubus: 'ubus/dist/commonjs/bus.min.js'
    }
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
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.png$/,
        lodader: 'file'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}
