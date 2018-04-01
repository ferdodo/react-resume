

bundle: node_modules
	webpack --mode development --display=errors-only --display-error-details


bundle-production: node_modules
	webpack --mode production


node_modules:
	npm install -s webpack
	npm install -s css-loader
	npm install -s style-loader
	npm install -s babel-core
	npm install -s babel-loader
	npm install -s babel-preset-env
	npm install -s babel-preset-react
	npm install -s react
	npm install -s react-dom


clean:
	rm -f package-lock.json


clean-all: clean
	rm -rf node_modules
	rm -f www/bundle.js
	