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
  entry: "./src/app.js",
  output: {
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
      title: "webpack Boilerplate", // title of index.html
      template: path.resolve(__dirname, "./src/template.html"), // template file
      filename: "index.html", // output file
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
