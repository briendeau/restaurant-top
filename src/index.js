import aboutPage from "./about";
import menuPage from "./menu";
import pageLoad from "./pageLoad";

// Add the image to our existing div.
pageLoad();

let homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", pageLoad);

let menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", menuPage);

let aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", aboutPage);
// document.body.appendChild(component());
