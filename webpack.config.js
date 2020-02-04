const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const HTML_PLUGIN = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
  favicon: "./public/favicon.ico"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [HTML_PLUGIN]
};
