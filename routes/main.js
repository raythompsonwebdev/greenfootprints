var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {

  res.render('main', {title:'Home Page'});

});

/* GET What Can do page. */
router.get("/whatcando", (req, res) => {

  res.render("whatcando" ,{ title: 'What Can Do Page'});

});

/* GET Recycling page. */
router.get("/recycling", (req, res) => {

  res.render("recycling" ,{ title: 'recycling Page'});

});

/* GET collections page. */
router.get("/collections", (req, res) => {

  res.render("collections" ,{ title: 'collections Page'});

});

/* GET tenways page. */
router.get("/tenways", (req, res) => {

  res.render("tenways" ,{ title: 'tenways Page'});

});

/* GET facts page. */
router.get("/recyclingfacts", (req, res) => {

  res.render("recyclingfacts" ,{ title: 'recyclingfacts Page'});

});


/* GET Contact page. */
router.get("/contact", (req, res) => {

  res.render("contact" ,{ title: 'contact Page'});

});

module.exports = router;
