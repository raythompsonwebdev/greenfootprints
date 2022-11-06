import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import postcssPresetEnv from 'postcss-preset-env';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    vendor: ['react', 'react-dom'],
  },
  target: 'web',
  output: {
    filename: 'js/[name].bundle.[fullhash].js',
    chunkFilename: 'chunks/[name].chunk.[fullhash].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  optimization: {
    // splitChunks replaces CommonsChunkPlugin
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      // Minify JS
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            passes: 3,
            pure_getters: true,
            unsafe: true,
          },
          ecma: undefined,
          warnings: false,
          parse: {
            html5_comments: false,
          },
          mangle: true,
          module: false,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: false,
          keep_fnames: false,
          safari10: false,
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          //   implementation: ImageMinimizerPlugin.imageminMinify,
          //   options: {
          //     // Lossless optimization with custom option
          //     // Feel free to experiment with options for better result for you
          //     plugins: [
          //       ['gifsicle', { interlaced: true }],
          //       ['jpegtran', { progressive: true }],
          //       ['optipng', { optimizationLevel: 5 }],
          //     ],
          //   },
          // },
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            encodeOptions: {
              mozjpeg: {
                // That setting might be close to lossless, but it’s not guaranteed
                // https://github.com/GoogleChromeLabs/squoosh/issues/85
                quality: 100,
              },
              webp: {
                lossless: 1,
              },
              avif: {
                // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
                cqLevel: 0,
              },
            },
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      // file loader for javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // file loader for html
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({
                    /* use stage 3 features + css nesting rules */
                    stage: 3,
                    features: {
                      'nesting-rules': true,
                    },
                  }),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      // file loader for fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        use: ['file-loader'],
      },
      // file loader for images
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf|ico|webp)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      hash: true,
      filename: 'index.html',
      template: path.join(__dirname, '/public/index.html'),
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.[fullhash].css',
      chunkFilename: 'chunks/[id].chunk.[fullhash].css',
    }),
  ],
  stats: {
    children: true,
    errorDetails: true,
  },
};
