var express = require("express");
var router = express.Router();
import tenways from "../src/static/data/tenways.json";
import collections from "../src/static/data/collections.json";
import recyclingfacts from "../src/static/data/recyclingfacts.json";

/* GET home page. */
router.get("/", (req, res) => {
 res.render("index", { title: "Home Page" });
});

/* GET What Can do page. */
router.get("/whatcando", (req, res) => {
 res.render("whatcando", { title: "What You Can Do" });
});

/* GET Recycling page. */
router.get("/recycling", (req, res) => {
 res.render("recycling", { title: "Recycling" });
});

/* GET collections page. */
router.get("/collections", (req, res) => {
 res.render("collections", { title: "Collections", data: collections });
});

/* GET tenways page. */
router.get("/tenways", (req, res) => {
 res.render("tenways", { title: "Ten Ways", data: tenways });
});

/* GET facts page. */
router.get("/recyclingfacts", (req, res) => {
 res.render("recyclingfacts", {
  title: "Recycling Facts",
  data: recyclingfacts,
 });
});

/* GET Contact page. */
router.get("/contact", (req, res) => {
 res.render("contact", { title: "Contact" });
});

module.exports = router;
