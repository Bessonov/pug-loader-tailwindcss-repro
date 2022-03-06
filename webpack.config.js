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
		// didn't help
		// new PugPlugin({
		// 	verbose: true,
		// 	modules: [
		// 		PugPlugin.extractHtml({
		// 			test: /\.(pug)$/,
		// 			filename: 'assets/css/[name].[contenthash:8].html',
		// 		}),
		// 	],
		// }),
	].filter(Boolean),
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
				use: [
					{
						loader: PugPlugin.loader,
					},
				]
			},
		],
	},
}
