const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function webpackConfig(env) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(new CleanWebpackPlugin())
  }

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: env.NODE_ENV,
    devServer: {
      compress: true,
      port: 3000,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: '/node_modules',
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.module.scss?$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.scss$/,
          exclude: /\.module.(scss)$/,
          loader: [
            {
              loader:
                env.NODE_ENV === 'development'
                  ? 'style-loader'
                  : MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]'
            }
          }
        }
      ]
    },
    plugins,
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
  }
}
