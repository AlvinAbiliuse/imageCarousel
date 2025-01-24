let path = document.querySelector(".dropDown ul");

function toggle() {
	path.classList.toggle("show");
}


export function dropdown() {
	let dropDownBtn = document.querySelector(".dropDownButton");
	dropDownBtn.addEventListener("click", toggle);
	dropDownBtn.addEventListener("focusout", () => {
		path.classList.remove("show")
	});
};



