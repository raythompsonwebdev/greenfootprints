
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//routing to root index file
app.get('/', (req, res) => {

  res.sendFile(path.join( __dirname, '../src/index.html'));

});


//error handling
app.use(function (err, req, res) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

//opens browser
app.listen(PORT, function(err){

  if(err){

    console.log(err);

  } else{

    open('http://localhost:' + PORT);
  }

});