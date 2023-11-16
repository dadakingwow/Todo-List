const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", // The output file
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your source index.html
    }),
  ],
  // ... (rest of your webpack config)
};
