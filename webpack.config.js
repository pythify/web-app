const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function webpackConfig(env) {
	let plugins = [
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
				}
			]
		},
		plugins,
		optimization: {
			minimizer: [new OptimizeCSSAssetsPlugin({})]
		}
	}
}
