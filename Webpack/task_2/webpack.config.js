const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production
  entry: './js/dashboard_main.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'public') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Test for CSS files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader' // Translates CSS into CommonJS
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Test for image files
        use: [
          {
            loader: 'file-loader', // Handles file imports and emits them as files
            options: {
              name: '[name].[ext]',
              outputPath: 'images/' // Output path for images
            }
          }
        ]
      }
    ]
  }
};
