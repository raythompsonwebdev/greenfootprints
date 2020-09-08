import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import  StyleLintPlugin from 'stylelint-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const HandlebarsPlugin = require("handlebars-webpack-plugin");

export default {
    mode: "development",
    entry: { main: "./src/index" },
    target: "web",
    devtool: "inline-source-map",
    output: {
        //serves build from memory
        path: path.resolve(__dirname, 'src'),
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            // template: './src/index.html',
            // filename: 'index.html',
            template: './views/layouts/index.hbs',
            filename: 'index.hbs',
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            },


        }),
        new StyleLintPlugin({
         configFile: './.stylelintrc.json',
         files: './src/css/*.scss',
         syntax: 'scss'
        }),
        new HandlebarsPlugin({
          // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
          entry: path.join(process.cwd(), "views", "**", "*.hbs"),
          // output path and filename(s). This should lie within the webpacks output-folder
          // if ommited, the input filepath stripped of its extension will be used
          output: path.join(process.cwd(), "dist", "[name].html"),
          // you can als add a [path] variable, which will emit the files with their relative path, like
          // output: path.join(process.cwd(), "build", [path], "[name].html"),

          // globbed path to partials, where folder/filename is unique
          partials: [
            path.join(process.cwd(), "views", "partials", "*.hbs")
          ],

        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [

                  MiniCssExtractPlugin.loader,
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ]
            },
            //file loader for fonts
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
            //file loader for images
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            Images: path.resolve( __dirname, "src/images/"),
            Fonts: path.resolve( __dirname, "src/images/")
        }
    },

    watch: true
};
