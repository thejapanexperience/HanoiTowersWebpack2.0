module.exports = {

   entry: './src/index.js',
   output: { path: './build', filename: 'bundle.js' },
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