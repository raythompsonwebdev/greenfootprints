import tenways from "../src/static/data/tenways.json";
import collections from "../src/static/data/collections.json";
import recyclingfacts from "../src/static/data/recyclingfacts.json";
// import showSlides from "../src/static/js/showSlides";

const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("main", {
    title: "Home Page",
    layout: "index",
  });
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
    listExists: true,
  });
});

/* GET Contact page. */
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
