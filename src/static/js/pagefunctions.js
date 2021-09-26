// home page
const template = require("../../views/main.hbs");

const homePage = template();
const homeContainer = document.getElementById("home");
homeContainer.innerHTML = homePage;

// whatcando page
const template2 = require("../../views/whatcando.hbs");

const whatPage = template2();
const whatContainer = document.getElementById("whatcando");
whatContainer.innerHTML = whatPage;

// recycling page
const template3 = require("../../views/recycling.hbs");

const recyclingPage = template3();
const recyclingContainer = document.getElementById("recycling");
recyclingContainer.innerHTML = recyclingPage;

// recycling facts page
const template4 = require("../../views/recyclingfacts.hbs");

const factsPage = template4({ recyclingfacts });
const recyclingfactsContainer = document.getElementById("recycling-facts");
recyclingfactsContainer.innerHTML = factsPage;

// collections page
const template5 = require("../../views/collections.hbs");

const collectionsPage = template5({ collections });
const collectionsContainer = document.getElementById("collections");
collectionsContainer.innerHTML = collectionsPage;

// tenways page
const template6 = require("../../views/tenways.hbs");

const tenPage = template6({ tenways });
const tenwaysContainer = document.getElementById("ten-ways");
tenwaysContainer.innerHTML = tenPage;

// contact page
const template7 = require("../../views/contact.hbs");

const contactPage = template7();
const contactContainer = document.getElementById("contact");
contactContainer.innerHTML = contactPage;
