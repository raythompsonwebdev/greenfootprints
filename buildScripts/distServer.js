
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
var routes = require('../routes/main');
const handlebars = require('express-handlebars');
var sassMiddleware = require('node-sass-middleware');

/* eslint-disable no-console */
const port = 3000;
const app = express();

app.set("views", path.resolve(__dirname, '../views/') );
app.set("view engine", "hbs");

app.use(sassMiddleware({
  /* Options */
  src: path.resolve(__dirname, '../src/css/sass/'),
  dest: path.resolve(__dirname, '../src/css/'),
  debug: true,
  outputStyle: 'compressed',
  prefix:  '/prefix'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

// Handlebars Middleware
app.engine(
  "hbs",
  handlebars({
    extname: '.hbs',
    defaultLayout: "index",
    layoutsDir: path.resolve(__dirname, '../views/layouts/'),

  })
);


//add gzip compression
app.use(compression());

app.use(express.static('dist'));

app.use('/', routes);

//testAPI
//Hard coding for simplicity. Pretend this hits a real database
//remove this app.get for production build. Data now should come from hosted api i.e. heroku ect.
app.get('/users', function(req, res) {
 res.json([
   {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
   {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
   {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
 ]);
});

//opens browser
app.listen(port, function(err){

  if(err){

    console.log(err);

  } else{

    open('http://localhost:' + port);
  }

});
