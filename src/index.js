import "./styles.css";
import "./dropdownStyles.css";
// import "./carouselStyles.css";


import { dropdown } from "./dropdown.js";
import { cat, dog } from "./images.js";
import { carousel } from "./carousel.js";
console.log("hello world");

let dropDownBtn = document.querySelector(".dropDownButton");
for (let i in cat) {
	console.log(cat[i]);
};

dropDownBtn.addEventListener("click", dropdown);
