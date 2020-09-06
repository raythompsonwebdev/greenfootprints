
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const PORT = process.env.PORT || 3000;
const app = express();
//webpack compiler
const compiler = webpack(config);

//integrate webpack with express using middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//routing to root index file
app.get('/', (req, res) => {

  res.sendFile(path.join( __dirname, '../src/index.html'));

});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
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
