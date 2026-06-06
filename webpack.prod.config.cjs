
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Recommended for prod

module.exports = {
  mode: 'production', // Optimization & minification enabled by default
  entry: [
    path.join(process.cwd(), 'app/index.js'), // Removed Hot Reloading entry
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[contenthash].js', // Hashes for long-term caching
    chunkFilename: '[name].[contenthash].chunk.js',
    publicPath: '/',
    clean: true, // Automatically cleans 'dist' before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[hash:base64:5]',
                namedExport: false,
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          'postcss-loader', // Ensure you have a postcss.config.js or remove this if not using it
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
                includePaths: ['app/styles'], // Match your dev includePaths
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx', '.react.js'],
    alias: {
      // '@internals': path.resolve(__dirname, './internals'),
      // moment$: 'moment/moment.js',
      // components: path.resolve(__dirname, 'app/components'),
      // containers: path.resolve(__dirname, 'app/containers'),
      config: path.join(process.cwd(), 'app/config/production.js'), // Force prod config
    },
  },
  plugins: [
    // Extracts CSS into its own file so it doesn't flicker on load
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
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
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
  devtool: 'source-map', // Lightweight source map for production debugging
  target: 'web',
};
