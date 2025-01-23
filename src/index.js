import "./styles.css";
import { dropdown } from "./dropdown.js";

console.log("hello world");

let dropDownBtn = document.querySelector(".dropDownButton");

dropDownBtn.addEventListener("click", dropdown);
