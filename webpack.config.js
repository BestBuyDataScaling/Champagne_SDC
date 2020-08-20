const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './client/public/');
const APP_DIR = path.resolve(__dirname, './client');

module.exports = {
  // Starting point of app
  entry: {
    main: __dirname + '/client/src/index.js'
  },
  // Instructions for Webpack to output bundle.js after bundling process
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}
