import path from 'path';

const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


export default {

  mode: 'production',
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },

  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    
    new CleanWebpackPlugin({}),

    // Minify JS
    new UglifyJsPlugin(
      {
        sourceMap: true,
        cache: true
      }
    ),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),

    new HtmlWebpackPlugin({
      inject: true, //dynamically adds script tags
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
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

      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: '43ad216f57d94259968435894490a5c7'
    }),
    new WebpackMd5Hash(),

    
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
              {
                loader: MiniCssExtractPlugin.loader
              }, 
              "css-loader", 
              "sass-loader"
            ]
        },
        //file loader for fonts
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: ["file-loader"]
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
};
