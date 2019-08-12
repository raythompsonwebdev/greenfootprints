import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
  
  mode: 'development',

  entry: {main:  './src/index' },
  
  //entry: [
  //  path.resolve(__dirname, 'src/index')
  //],
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: 'index.html',
    }),

    

  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: [/.css$|.scss$/],
        use: [
          "style-loader", 
          'css-loader', 
          'sass-loader'
          
        ]
      },
      //file loader for fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
              
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]'
              
              
            }
          }
        ]
      }

    ]
  },

  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'src/images/'),
      Fonts: path.resolve(__dirname, 'src/fonts/')
    }
  },

  

  watch: true
}
