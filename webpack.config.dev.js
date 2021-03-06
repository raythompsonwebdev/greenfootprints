import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import StyleLintPlugin from "stylelint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
 mode: "development",
 entry: {
  main: "./src/index",
 },
 target: "web",
 devtool: "inline-source-map",
 output: {
  //serves build from memory
  path: path.resolve(__dirname, "./src/"),
  publicPath: "/",
  filename: "bundle.js",
  //chunkFilename: "[name].chunk.js",
 },
 plugins: [
  // Create HTML file that includes reference to bundled JS.
  new HtmlWebpackPlugin({
   inject: true,
   //hash: true,
   template: "./src/index.html",
   filename: "index.html",
  }),
  new StyleLintPlugin({
   configFile: "./.stylelintrc.json",
   files: "./src/static/sass/*.scss",
   syntax: "scss",
  }),

  new MiniCssExtractPlugin(),
 ],
 module: {
  rules: [
   {
    test: /\.hbs$/,
    use: [
     {
      loader: "handlebars-loader",
     },
    ],
   },
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
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
   },
   {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
   },
   //file loader for fonts
   {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: ["file-loader"],
   },
   //file loader for images
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
        quality: [0.65, 0.9],
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

 resolve: {
  alias: {
   Images: path.resolve(__dirname, "./src/static/images/"),
   Fonts: path.resolve(__dirname, "./src/static/fonts/"),
  },
 },

 watch: true,
};
