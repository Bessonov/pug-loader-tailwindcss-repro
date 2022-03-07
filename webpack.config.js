const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
	name: 'repro',
	target: 'node',
	mode: 'production',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/',
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	optimization: {
		minimize: false,
		moduleIds: 'named',
		mangleExports: false,
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
	],
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
			},
			{
				test: /\.pug$/,
				loader: '@webdiscus/pug-loader',
			},
			{
				test: /\.css$/,
				type: 'asset/resource',
				use: 'postcss-loader',
			},
		],
	},
}
