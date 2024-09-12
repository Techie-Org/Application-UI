const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackConfig = require('../../webpack.config.js');
const compiler = webpack(webpackConfig);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js file as base
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: 'errors-only',
  })
);
app.use(
  webpackHotMiddleware(compiler, {
    ignoreUnaccepted: false,
  })
);

app.use(express.static(path.join(__dirname, '../../dist')));


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
