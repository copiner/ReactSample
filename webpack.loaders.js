var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		test: /\.js?$/,
		exclude: /(node_modules|bower_components)/,
		use: ['react-hot-loader', 'babel-loader']
	},

	// {
	// 	test: /\.css$/,
	// 	// loader: 'style-loader!css-loader'
	// 	loader: ExtractTextPlugin.extract("style?sourceMap!" + "css?sourceMap!")
	// },
	{
	  test: /\.css$/,
	  use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: "css-loader"
		})
	},
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		loader: "file-loader"
	},
	{
		test: /\.(woff|woff2)$/,
		loader: "url-loader?prefix=font/&limit=5000"
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		loader: "url-loader?limit=10000&mimetype=application/octet-stream"
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		loader: "url-loader?limit=10000&mimetype=image/svg+xml"
	},
	{
		test: /\.gif/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.jpg/,
		loader: "url-loader?limit=10000&mimetype=image/jpg"
	},
	{
		test: /\.png/,
		loader: "url-loader?limit=10000&mimetype=image/png"
	}
];
