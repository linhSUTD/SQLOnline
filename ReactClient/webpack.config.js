var webpack = require("webpack");
var path = require("path");
module.exports = {
	entry: './Client/index.tsx',
	output: {
		path: __dirname + '/wwwroot/js/',
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
			include: [
				path.resolve(__dirname, "Client")
			],
			loader: 'ts-loader' 
		}]
	}
}