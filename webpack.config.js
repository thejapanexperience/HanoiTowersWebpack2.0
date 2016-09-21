module.exports = {

   entry: './src/index.js',
   output: { path: './build', filename: 'bundle.js' },
   devtool: 'inline-source-map',
   module: {
    loaders: [
      {
        loader: 'babel-loader', 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
   }
}