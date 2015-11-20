
var path = require('path');

module.exports = {
  entry: {
  	'index': './index.js'
  },
  output: {
    path: './build',
    filename: 'entry.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query:{
        presets: ['es2015','react']
      }

    }]
  }
};
