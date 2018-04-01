
module.exports = {
	"entry"  : './src/index.js',
	"output" : {
    	"path"     : __dirname + "/www",
    	"filename" : "bundle.js"
	},
	"module" : {
    	"rules" : [{
			"test" : /\.css$/,
			"use"  : ['style-loader', 'css-loader']
		},{
			"test"    : /\.jsx$/,
			"exclude" : /(node_modules|bower_components)/,
      		"use"     : {
        		"loader"  : 'babel-loader',
        		"options" : {"presets" : ['env', 'react']}
      		}
    	}]
	}
};