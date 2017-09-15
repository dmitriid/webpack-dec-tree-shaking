var path    = require('path')
var webpack = require('webpack')

var paths = {
  src:   path.join(__dirname, 'compiled'),
  entry: path.join(__dirname, 'compiled', 'index.js'),
  out:   path.join(__dirname, 'build')
}

var buildType = 'production'

plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug:    false
  }),
  //new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name:      'lib',
    minChunks: function(module) {
      return module.context && module.context.indexOf('node_modules') !== -1
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8:     true, // React doesn't support IE8
      warnings:      false,
      dead_code:     true,
      drop_debugger: true,
      conditionals:  false,
      comparisons:   true,
      booleans:      true,
      loops:         true,
      unused:        true,
      if_return:     true,
      drop_console:  true,
      unsafe:        true
    },
    mangle:   {
      screw_ie8: true
    },
    output:   {
      comments:  true,
      screw_ie8: true
    }
  })
]

module.exports = {
  bail:    true,
  entry:   {
    app: paths.entry
  },
  output:  {
    path:          paths.out,
    publicPath:    '/events/build/js',
    filename:      '[name].js',
    chunkFilename: '[chunkname].js'
  },
  plugins: plugins,
  module:  {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:     [
          'babel-loader'
        ]
      }
    ]
  },
  target:  'web'
}
