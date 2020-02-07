// module.exports = {
//   entry: './src/js/dora/dora.js',
//   output: {
//     path: __dirname+'/dist',
//     filename: 'main.js',
//     libraryTarget: 'global'
//   },
//   devtool: 'source-map',
// }

const path = require('path')

module.exports = {
  entry: './src/js/dora/dora.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'global'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map'
}