import { dropdown } from "./dropdown.js";
import { cat, dog } from "./exports.js";
import { carousel } from "./carousel.js";

for (let i in cat) {
	console.log(cat[i]);
};

dropdown();
