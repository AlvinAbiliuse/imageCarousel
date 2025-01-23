function dropdownToggle() {
	document.querySelector(".dropDown ul").classList.toggle(
		"show");
}


export function dropdown() {
	let dropDownBtn = document.querySelector(".dropDownButton");
	dropDownBtn.addEventListener("click", dropdownToggle);
};



