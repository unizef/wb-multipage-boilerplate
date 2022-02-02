const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  entry: {
    app: "./src/js/app.js",
    about: "./src/js/about.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            // rootMode: "upward",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "home", // index.html
      template: path.resolve(__dirname, "./src/index.html"), // template file
      filename: "index.html", // output file
      chunks: ["app"],
    }),
    // second html file linked to about.js
    new HtmlWebpackPlugin({
      title: "about", // about.html
      template: path.resolve(__dirname, "./src/html/about.html"), // template file
      filename: "about.html", // output file
      chunks: ["about"],
    }),
  ],
  devtool: "source-map",
  devServer: {
    // used to be: contentBase: "./dist",
    static: {
      directory: path.join(__dirname, "dist/"),
    },
    port: 8080,
    // devMiddleware: {
    //   publicPath: "https://localhost:8080/dist/",
    // },
    hot: "only",
  },
};
