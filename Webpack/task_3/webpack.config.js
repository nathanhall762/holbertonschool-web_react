const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Set mode to development
  entry: './js/dashboard_main.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve content from the public directory
    port: 8564, // Port to run the dev server on
    open: true, // Open browser automatically
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans output folder before build
    new HtmlWebpackPlugin({
      template: './public/index.html', // Source HTML file
      filename: 'index.html', // Output HTML file
    }), // Generates HTML file and injects script
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // Test for CSS files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader', // Translates CSS into CommonJS
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Test for image files
        use: [
          {
            loader: 'file-loader', // Handles file imports and emits them as files
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Output path for images
            },
          },
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
};
