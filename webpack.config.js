const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const srcDir = path.resolve(__dirname, "src");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

let htmlPageNames = ["about", "404", "500"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `${srcDir}/html/${name}.html`,
    filename:
      mode === "production" ? `${name}.[contenthash].html` : `${name}.html`,
  });
});

module.exports = {
  mode: mode,
  entry: {
    App: "./src/js/App.js",
    // about: "./src/js/about.js",
  },
  output: {
    filename: "[name].js",
    // path: `${srcDir}/dist`,
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[hash][ext][query]",
  },
  
  optimization: {
    runtimeChunk: 'single',
   splitChunks: {
     cacheGroups: {
       vendor: {
         test: /[\\/]node_modules[\\/]/,
         name: 'vendors',
         chunks: 'all',
       },
     },
   },
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
    new PrettierPlugin(),
    new MiniCssExtractPlugin({
      filename:
        mode === "production" ? "[name].[contenthash].css" : "[name].css",
    }),

    new HtmlWebpackPlugin({
      title: "home", // index.html
      template: `${srcDir}/index.html`, 
      filename: mode === "production" ? "index.[contenthash].html" : "index.html",
      chunks: ["App"],
    }),
  ].concat(multipleHtmlPlugins),

  devtool: "source-map",
  devServer: {
    static: {
      directory: `${srcDir}/dist`,
    },
    port: 8080,
    hot: "only",
  },
};
