const HTMLWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");
const path = require("path");

const handler = (percentage, message, ...args) => {
  console.info(percentage, message, ...args);
};

module.exports = {
  entry: {
    vendor: "./src/index.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./src/index.html" }),
    new webpack.ProgressPlugin({
      entries: true,
      modules: true,
      modulesCount: 100,
      profile: true,
      handler: handler
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial"
        }
      }
    },
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    })],
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
}
