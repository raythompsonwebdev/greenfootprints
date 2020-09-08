import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
const exphbs = require("express-handlebars");
import config from "./webpack.config.dev";
var routes = require('./routes/index');

/* eslint-disable no-console */
const PORT = process.env.PORT || 3000;
const app = express();
//webpack compiler
const compiler = webpack(config);

//integrate webpack with express using middleware
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

// Set static folder - may not need this as well as above home page route
app.use(express.static(path.join(__dirname, "src/static")));


// Handlebars Middleware
app.engine(
  "hbs",
  exphbs({
    extname: '.hbs',
    defaultLayout: "layout",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials")

  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use('/', routes);


app.get("/contact", (req, res) => {
  res.render("contact" ,{ title: 'contact Page'});
});

app.get("/collections", (req, res) => {
  res.render("collections" ,{ title: 'collections Page'});
});

app.get("/recycling", (req, res) => {
  res.render("recycling" ,{ title: 'recycling Page'});
});

app.get("/recyclingfacts", (req, res) => {
  res.render("recyclingfacts" ,{ title: 'recyclingfacts Page'});
});

app.get("/tenways", (req, res) => {
  res.render("tenways" ,{ title: 'tenways Page'});
});

app.get("/whatcando", (req, res) => {
  res.render("whatcando" ,{ title: 'whatcando'});
});


//error handling
app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//opens browser
app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + PORT);
  }
});
