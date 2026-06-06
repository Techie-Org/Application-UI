import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const isProduction = process.env.NODE_ENV === 'production';

// const pxhost = process.env.npm_config_pxhost || 'http://localhost:5000';
const pxhost = process.env.npm_config_pxhost || 'https://dev-kalakaar.onrender.com';

app.use(
  '/api',
  createProxyMiddleware({
    target: `${pxhost}/api`, // Added api with base as pathRewrite not working in proxy middleware
    changeOrigin: true,
    secure: true,
  })
);

// CONDITIONAL MIDDLEWARE
if (!isProduction) {
  // DEVELOPMENT: Dynamic imports for dev-only dependencies
  console.log('🛠️ Running in Development Mode...');
  const webpack = (await import('webpack')).default;
  const webpackDevMiddleware = (await import('webpack-dev-middleware')).default;
  const webpackHotMiddleware = (await import('webpack-hot-middleware')).default;
  // eslint-disable-next-line import/extensions
  const webpackConfig = (await import('../webpack.config.js')).default;

  const compiler = webpack(webpackConfig);

  // Save the middleware instance to a variable so we can access its virtual file system
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // This catch-all route serves index.html from Webpack's memory on refresh
  app.get('*', (req, res, next) => {
    // Avoid intercepting API calls or webpack hot reload updates
    if (req.url.startsWith('/api') || req.url.includes('webpack')) {
      next();
    }

    const fs = middleware.context.outputFileSystem;
    const fallbackPath = path.join(compiler.outputPath, 'index.html');

    fs.readFile(fallbackPath, (err, file) => {
      if (err) {
        next(err); // Pass error to express handling
      }
      res.set('content-type', 'text/html');
      res.send(file);
      res.end();
    });
  });
} else {
  console.log('🚀 Running in Production Mode...');
  const distPath = path.resolve(__dirname, '../dist');
  console.log(`📂 Serving static files from: ${distPath}`);

  app.use(express.static(distPath));

  app.get('*', (req, res) => {
    // In production, the file actually exists on disk, so res.sendFile works perfectly
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// START SERVER
const PORT = process.env.PORT || 3000;
// We listen on 0.0.0.0 to ensure Render can detect the port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is live on port ${PORT}`);
});
