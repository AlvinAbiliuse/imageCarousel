import "./styles.css";
import { dropdown } from "./dropdown.js";
import { cat, dog } from "./images.js";

console.log("hello world");

let dropDownBtn = document.querySelector(".dropDownButton");
for (let i in cat) {
	console.log(cat[i]);
};

dropDownBtn.addEventListener("click", dropdown);
