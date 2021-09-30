import "./static/sass/normalize.scss";
import "./static/sass/style.scss";
import homePageSlider from "./static/js/slide-functions/homePageSlider";
import "./static/js/menusToggle";
import homeIcon from "./static/images/Large/gif-images/logo-greenfootprints-com.gif";
import "./static/js/scrollScreen";
// header image
const homeImg = document.querySelector("#homeImage");
homeImg.src = homeIcon;

homePageSlider();
