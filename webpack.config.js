var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: {
		main: './app/index.js',
	},
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'js/[id]-[name].bundel.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				exclude: path.resolve(__dirname, 'node_modules'),
				query: {
					presets: ['latest']
				}
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				exclude: path.resolve(__dirname, 'node_modules'),
				use: [
					'style-loader',
					{ loader: 'css-loader' , options: {importLoaders: 1}},
					{
						loader:'postcss-loader',
						options: {
							plugins: () => [
		                        require('autoprefixer')({
		                            broswers : ['last 5 versions']
		                        })
							]
						}
						
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{ loader: 'css-loader'},
					{
						loader:'postcss-loader',
						options: {
							plugins: () => [
		                        require('autoprefixer')({
		                            broswers : ['last 5 versions']
		                        })
							]
						}
						
					},
					'sass-loader'
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				query: {
					limit: 20000,
					name: 'assets/[name]-[hash:5].[ext]'
				}
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'app/index.html',
			inject: 'body',
		})
	]
}