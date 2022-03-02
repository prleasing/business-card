const path = require('path');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
	entry: {
		sw: './src/js/service-worker.ts'
	},
	target: 'node',
	resolve: { extensions: ['.js', '.ts'] },
	output: {
		path: path.join(__dirname, '../../dist'),
		filename: 'service-worker.js'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				]
			}
		]
	},
	watch: false,
	plugins: [
		new EnvironmentPlugin({
			NODE_ENV: 'production',
			'process.env.NODE_ENV': 'production',
			DEBUG: false
		})
	]
};
