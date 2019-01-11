// @ts-check

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

require("dotenv").config();

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.tsx")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader"
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: process.env.PUBLIC_PATH
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([
      {
        from: "src/static"
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/static/index.html"
    }),
    new Dotenv({
      systemvars: true
    })
  ],
  devServer: {
    host: "localhost",
    contentBase: __dirname,
    historyApiFallback: true
  }
};
