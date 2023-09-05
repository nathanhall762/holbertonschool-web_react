const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production
  entry: './js/dashboard_main.js', // Entry point of your application (change this path if needed)
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'public') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Test for JavaScript files
        exclude: /node_modules/, // Exclude node_modules
      }
    ]
  }
};
