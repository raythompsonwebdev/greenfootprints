
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

/* eslint-disable no-console */
const PORT = process.env.PORT || 3000;
const app = express();

//add gzip compression
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Use an external store for consistency across multiple server instances.
});

// Apply the rate limiting middleware to all requests
app.use(limiter);


app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//opens browser
app.listen(PORT, function(err){

  if(err){

    console.log(err);

  } else{

    open('http://localhost:' + PORT);
  }

});
