// @ts-check

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const Dotenv = require("dotenv-webpack");

require("dotenv").config();

const appName = "Chordbook";
const appColor = "#ff6347";

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
    new Dotenv({
      systemvars: true
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "public"
      }
    ]),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, "src/sw.js"),
      publicPath: process.env.PUBLIC_PATH
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: process.env.PUBLIC_PATH,
      appName,
      appColor
    })
  ],
  devServer: {
    host: "localhost",
    contentBase: __dirname,
    historyApiFallback: true
  }
};
