//import fs from "fs";
import express from 'express';
// import { createServer } from 'http';
import history from 'connect-history-api-fallback';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import webmiddleware from 'webpack-dev-middleware';
import path from 'path';
import config from '../webpack.config.dev.js';
import rateLimit from 'express-rate-limit';

const compiler = webpack(config);

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const PORT = process.env.PORT || 3000;
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Use an external store for consistency across multiple server instances.
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// integrate webpack with express using middleware
app.use(
  webmiddleware(compiler, {
    // noInfo: true,
    publicPath: config.output.publicPath,
  })
);

// content to be served from
// const publicPath = path.join(__dirname + '/public');

app.use(
  history({
    verbose: true,
  })
);

app.use(middleware(compiler));

// Static assets
app.use(express.static(path.join(__dirname + '/public')));

// Serve index on homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

// const httpServer = createServer(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
