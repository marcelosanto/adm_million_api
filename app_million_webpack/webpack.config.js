const path = require('path')

module.exports = {
  mode: 'development',
  entry: './main/index',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
}
