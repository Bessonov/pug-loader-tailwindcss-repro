const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const PugPlugin = require('pug-plugin')

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
		new PugPlugin({
			modules: [
				PugPlugin.extractCss()
			],
		}),
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
				loader: PugPlugin.loader,
			},
			{
				test: /\.css$/i,
				use: [
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
}
