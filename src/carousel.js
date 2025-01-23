
const numbers = document.querySelectorAll(".number button");

const imageTimeout = (i, num) => {
	let n = num;
	let img = document.querySelector(".imageCarousel img")
	img.setAttribute("src", i[n]);
	setTimeout(() => {
		if (n < i.length) {
			n++;
			imageTimeout(i, n);
		}
	}, 10000);
};

export function carousel(images) {
	imageTimeout(images, 0);
};


function displayButton() {
	for (let i in numbers) {
		console.log(numbers[i].className.replace("img", ""));
	}
};	

