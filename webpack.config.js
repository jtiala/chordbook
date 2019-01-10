// @ts-check

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const env = process.env.NODE_ENV;

const plugins = [
  new CleanWebpackPlugin(["dist"]),
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
  new Dotenv()
];

if (env === "production") {
  plugins.push(
    new UglifyJsPlugin({
      sourceMap: true,
      cache: true,
      uglifyOptions: {
        compress: true
      },
      parallel: 4
    })
  );
}

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
    path: path.resolve(__dirname, "dist")
  },
  plugins,
  devServer: {
    host: "0.0.0.0",
    contentBase: __dirname,
    historyApiFallback: true
  }
};
