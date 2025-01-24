import { dropdown } from "./dropdown.js";
import { cat, dog } from "./exports.js";
import { carousel } from "./carousel.js";

for (let i in cat) {
	console.log(cat[i]);
};

let data = {"Cats": cat, "Dogs": dog};

dropdown();
carousel(data.Dogs);

document.querySelector(".dropDownItems").addEventListener(
	"click", (e) => {
	if (e.target.nodeName == "BUTTON") {
		carousel(data[e.target.textContent]);
	}
});
