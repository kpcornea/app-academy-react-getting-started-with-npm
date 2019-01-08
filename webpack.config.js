// module.exports = {
//   entry: "./entry.jsx",
//   output: {
//     path: "./",
//     filename: "bundle.js",
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /(node_modules)/,
//         loader: 'babel',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ["", ".js", ".jsx" ]
//   }
// };

// ask question about this i think.

const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./entry.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
