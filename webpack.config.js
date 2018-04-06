var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  // first file to start packing up (central component)
  // webpack will start at that entry part and roll up all the imported components into one single js file
  output: {
    // and then it will output here
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
  // refers to the bundle itself
    loaders : [
      // tools or plugins to change the bundle in some way
      {
        test : /\.jsx?/,
        // does it for only jsx files
        // can also change to js if you named your files js
        include : SRC_DIR,
        // only include stuff in the src directory (which is the client src)
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  }
};