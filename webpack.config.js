const path = require('path');

//vezme vsechny entry a mergne je na ..../target: NPM START  do mdlog.js :)
module.exports = {
  mode: 'production',
  optimization: {
    // We do not want to minimize our code.
    minimize: false
  },
  entry: {
    'output/inspector.js': [
      //path.resolve(__dirname, 'source/Region.js'),
      path.resolve(__dirname, 'source/Generator.js')
    ]
  },
  output: {
    filename: 'inspector.js',
    path: path.resolve(__dirname, 'output/'),
  },module: {
    rules: [
      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
