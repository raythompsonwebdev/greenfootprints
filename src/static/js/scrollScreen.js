// Add smooth scrolling to all links
const navLinks = document.getElementsByClassName("nav-links");
// get body and html elements
const scrollScreen = document.querySelector(["body", "html"]);
// get header element
const siteHeader = document.querySelector("#site_header");
// In JavaScript, using the addEventListener() method:  object.addEventListener("scroll", myScript);
window.onscroll = function () {
  // fixes header to top of page on page scroll.
  if (scrollScreen.scrollTop >= 115) {
    siteHeader.classList.add("fixed-header");
  } else {
    siteHeader.classList.remove("fixed-header");
  }
  // handle scroll animation
  handleScrollAnimation();
};
// scrolling function - (https://codepen.io/ugg0t/pen/mqBBBY)
const scrollTo = (element) => {
  scrollScreen.scrollTo({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop - 120, // deduct height of header.
  });
};

// turn HTML collection list of objects into an array
// Iterated over array with forEach.
Array.from(navLinks).forEach((link) => {
  // add event listener to each link
  link.addEventListener("click", (event) => {
    // Store hash
    const { hash } = event.target;
    // check if has empty
    if (hash !== "") {
      // if not, Prevent default anchor click behavior
      event.preventDefault();
      // select element id converting hash to string using template literal and use as argument in scrolling function.
      scrollTo(document.querySelector(`${hash}`));
    } // End if
  });
});
