import { useEffect, useState } from "react";

function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //const slideoutMenu = document.querySelector('#site-navigation');
    // const slideoutMenuHeight = slideoutMenu.offsetHeight;
    const menuToggle = document.querySelector("#mobile-toggle");

    const toggleMenu = (event) => {
      event.preventDefault();
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    menuToggle.addEventListener("click", toggleMenu);

    return () => {
      menuToggle.removeEventListener("click", toggleMenu);
    };
  }, []);

  useEffect(() => {
    const slideoutMenu = document.querySelector("#site-navigation");
    const slideoutMenuHeight = slideoutMenu.offsetHeight;

    if (slideoutMenu) {
      slideoutMenu.style.transition = "all 0.3s ease-in 0s";
      slideoutMenu.style.top = isOpen ? "0px" : `${-slideoutMenuHeight}px`;
    }
  }, [isOpen]);

  return (
    <button id="mobile-toggle" title="menu">
      <i className="fa-solid fa-bars"></i>
    </button>
  );
}

export default ToggleButton;
