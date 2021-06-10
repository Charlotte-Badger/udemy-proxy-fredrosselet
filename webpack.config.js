const path = require('path');
const entryPath = path.join(__dirname, '/client/src/index.jsx');
const outputPath = path.join(__dirname, '/client/public');

module.exports = {
  entry: entryPath,
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    path: outputPath,
    filename: 'proxyBundle.js'
  },
  devtool: 'eval-cheap-source-map'
};