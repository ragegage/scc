module.exports = {
  context: __dirname,
  entry: './entry.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: [require('babel-plugin-transform-object-rest-spread')]
        }
      }
    ]
  },
  devtool: 'source-maps'
};
