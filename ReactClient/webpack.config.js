var webpack = require("webpack");
var path = require("path");
module.exports = {
	entry: './index.tsx',
	output: {
		path: __dirname + '/../Server/wwwroot/js/',
		filename: 'bundle.js'
	},
	// Turn on sourcemaps
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
	},
	module: {
		loaders: [{ 
			test: /\.ts(x?)$/,
			loader: 'ts-loader' 
		}]
	}
}