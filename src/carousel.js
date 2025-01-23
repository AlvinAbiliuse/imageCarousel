
export function carousel(image) {
	document.querySelector(".imageCarousel img").setAttribute(
		"src", image);
	const numbers = document.querySelectorAll("number button");
	for (let i in numbers) {
		console.log(numbers[i]);
	}
};

