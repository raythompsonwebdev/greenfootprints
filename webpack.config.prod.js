import path from "path";
import WebpackMd5Hash from "webpack-md5-hash";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
//const HandlebarsPlugin = require("handlebars-webpack-plugin");

export default {
 mode: "production",
 devtool: "source-map",
 entry: {
  vendor: path.resolve(__dirname, "./src/vendor"),
  main: path.resolve(__dirname, "./src/index"),
 },
 target: "web",
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "[name].[chunkhash].js",
  publicPath: "/",
 },

 optimization: {
  // splitChunks replaces CommonsChunkPluginwhich
  splitChunks: {
   // include all types of chunks
   chunks: "all",
  },
  minimize: true,
  minimizer: [
   // Minify JS
   new TerserPlugin({
    terserOptions: {
     compress: {},
    },
   }),
   new OptimizeCSSAssetsPlugin(),
  ],
 },
 plugins: [
  new CleanWebpackPlugin({
   // Simulate the removal of files
   //
   // default: false
   dry: false,

   // Write Logs to Console
   // (Always enabled when dry is true)
   //
   // default: false
   verbose: false,
  }),

  new MiniCssExtractPlugin({
   filename: "style.[contenthash].css",
  }),

  new HtmlWebpackPlugin(),
  {
   inject: true, //dynamically adds script tags
   hash: true,
   template: path.resolve("./src/index.html"),
   filename: path.join(__dirname, "dist/index.html"),
  },

  // new HandlebarsPlugin({
  //  // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
  //  entry: path.join(process.cwd(), "src", "views", "**", "*.hbs"),
  //  // output path and filename(s). This should lie within the webpacks output-folder
  //  // if ommited, the input filepath stripped of its extension will be used
  //  output: path.join(process.cwd(), "dist", "[name].html"),
  //  // you can also add a [path] variable, which will emit the files with their relative path, like
  //  // output: path.join(process.cwd(), "build", [path], "[name].html"),
  // }),

  new WebpackMd5Hash(),
 ],

 module: {
  rules: [
   // {
   //  test: /\.hbs$/,
   //  use: [
   //   {
   //    loader: "handlebars-loader",
   //   },
   //  ],
   // },
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: "babel-loader",
     options: {
      presets: ["@babel/preset-env"],
     },
    },
   },
   {
    test: /\.html$/,
    loader: "html-loader",
   },
   {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
   },
   {
    test: /\.scss$/,
    use: [
     MiniCssExtractPlugin.loader,

     {
      loader: "css-loader",
      options: {
       modules: true,
      },
     },
     { loader: "sass-loader" },
    ],
   },
   //file loader for fonts
   {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: ["file-loader"],
   },
   {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
     "file-loader",
     {
      loader: "image-webpack-loader",
      options: {
       mozjpeg: {
        progressive: true,
        quality: 65,
       },
       // optipng.enabled: false will disable optipng
       optipng: {
        enabled: false,
       },
       pngquant: {
        quality: "65-90",
        speed: 4,
       },
       gifsicle: {
        interlaced: false,
       },
       // the webp option will enable WEBP
       webp: {
        quality: 75,
       },
      },
     },
    ],
   },
  ],
 },
};
