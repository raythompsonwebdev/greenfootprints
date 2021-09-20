// Add smooth scrolling to all links
const navLinks = document.getElementsByClassName("nav-links");
// get body and html elements
const scrollScreen = document.querySelector(["body", "html"]);
// get header element
const siteHeader = document.querySelector("#site_header");
// get all divs with class tab content.
const scrollElements = document.querySelectorAll(".grid_24");

// scrollElements.forEach((el) => {
//   el.style.opacity = 0;
// });

// detect page scroll function
const elementInView = (el, scrollOffset = 115) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};

// display element on page scroll
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// hide element on page scroll
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

// add animation to element on page scroll
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 115)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

handleScrollAnimation();

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

    // hide menu when link is clicked
    if (slideoutMenu.classList.contains("open")) {
      slideoutMenu.style.top = `${-slideoutMenuHeight}px`;
      slideoutMenu.classList.remove("open");
    } else {
      slideoutMenu.style.top = "0px";
    }
  });
});
