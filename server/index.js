const express = require('express');
const path = require('path');
const webpack = require('webpack');
const { createProxyMiddleware } = require('http-proxy-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

// const pxhost = process.env.npm_config_pxhost || 'http://localhost:5000';
const pxhost = process.env.npm_config_pxhost || 'https://dev-kalakaar.onrender.com';

app.use(
  '/api',
  createProxyMiddleware({
    target: `${pxhost}/api`, // Added api with base as pathRewrite not working in proxy middleware
    changeOrigin: true,
    secure: true,
    // pathRewrite: { '^/api': '/api' }, // pathRewrite is not working in latest node version, http-proxy hasn't updated dependency
  })
);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js file as base
const middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: 'errors-only',
});

app.use(middleware);

app.use(
  webpackHotMiddleware(compiler, {
    ignoreUnaccepted: false,
  })
);

app.use(express.static(path.join(__dirname, '../dist'))); // TODO: need to modify the path

// Since webpackDevMiddleware uses memory-fs internally to store build artifacts, we use it instead
const fs = middleware.context.outputFileSystem;

app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
