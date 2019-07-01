let webpack = require('webpack')
let path = require('path')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

let babelOptions = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "modules": false
      }
    ]
  ]
};

let config = {
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        },
        {
          loader: 'ts-loader'
        }
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        }
      ]
    }]
  },

  entry: {
    app: path.resolve(__dirname, 'src/UserAgant.ts')
  },

  output: {
    filename: 'UserAgant.js',
    path: path.resolve(__dirname, './dist'),
    library: 'UserAgant',
    libraryTarget: 'umd'
  },

  mode: 'development',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  optimization: {
    minimize: false
  }
}

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  const loaderOption = new webpack.LoaderOptionsPlugin({
    minimize: true
  })

  config.devtool = false
  config.optimization.minimize = true
  config.plugins.push(loaderOption)
}

module.exports = config
