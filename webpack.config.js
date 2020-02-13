var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	"mode" : "production",
	"entry"  : './index.jsx',
	"output" : {
		"path"     : __dirname + "/www",
		"filename" : "bundle.js"
	},
	"plugins": [new HtmlWebpackPlugin()],
	"module" : {
		"rules" : [{
				"test" : /\.css$/,
				"use"  : ['style-loader', 'css-loader']
			},{
				"test"    : /\.jsx$/,
				"exclude" : /(node_modules|bower_components)/,
				"use"     : {
					"loader"  : 'babel-loader',
					"options": {"presets": ['@babel/preset-env', '@babel/preset-react']}
				}
			},{
				"test"   : /\.(png|woff|woff2|eot|ttf|svg)$/,
				"loader" : 'url-loader?limit=100000' 
			},{
				"test" : /\.(png|jpg|gif)$/,
				"use"  : [{
					"loader": 'file-loader',
					"options": {}  
			}]
		}]
	}
};