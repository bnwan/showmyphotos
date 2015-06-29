var getConfig = require('hjs-webpack');
var isDev = process.env.NODE_ENV !== 'production';

var config = getConfig({
  in: 'client/app.js',
  out: 'public',
  isDev: isDev
});

config.resolve = {
	alias: {
		'deepstream.io-client-js$': 'deepstream.io-client-js/dist/deepstream.js'    
	}
};

module.exports = config;
