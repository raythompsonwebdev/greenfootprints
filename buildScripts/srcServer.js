//import fs from "fs";
import express from "express";
import { createServer } from "http";
import history from "connect-history-api-fallback";
import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import webmiddleware from "webpack-dev-middleware";
import config from "../webpack.config.dev";

const compiler = webpack(config);

/* eslint-disable no-console */
const PORT = process.env.PORT || 3000;
const app = express();
// webpack compiler

// integrate webpack with express using middleware
app.use(
  webmiddleware(compiler, {
    // noInfo: true,
    publicPath: config.output.publicPath,
  })
);

// content to be served from
const publicPath = `${__dirname}/public`;

// Fallback to index.html
app.use(
  history({
    verbose: true,
  })
);

app.use(middleware(compiler));
// Static assets
const staticMiddleware = app.static(publicPath);
app.use(staticMiddleware);

// Serve index on homepage
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}index.html`);
});

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
