
const numbers = document.querySelector(".number");

let n = 0;
let images;
let interval;


function start(img) {
	interval = setInterval(() => {
		imageTimeout(img, n);
	}, 5000);
};


numbers.addEventListener("click", (e) => {
	if (e.target.nodeName == "BUTTON") {
		n = Number(e.target.classList[0].replace("img", "")) - 1;
		clearInterval(interval);
		imageTimeout(images);
		start(images);
	}
});

document.querySelector(".left").addEventListener("click", 
		() => {
		console.log(n);
		if (n < 1) {
			console.log("heyo");
			n = 5;
		} else {
			n = n - 2;
		};
		clearInterval(interval);
		imageTimeout(images);
		start(images);
});

document.querySelector(".right").addEventListener("click", 
		() => {
		if (n == 6) {
			n = 0;
		} else {
			n = n++;
		};
		clearInterval(interval);
		imageTimeout(images);
		start(images);
});

const imageTimeout = (i, num) => {
	let img = document.querySelector(".imageCarousel img")
	img.setAttribute("src", i[n]);
	for (let j=0; j < 6; j++) {
		if (j == n) {
			numbers.querySelectorAll("button")[j].classList.add("selected");
		} else {
			try {
				numbers.querySelectorAll("button")[j].classList.remove("selected");
			} catch (e) {
				console.log(e);
			}
		}
	};
	if (n == 5) {
		n = 0;
	} else {
		n++;
	};
/*
	setTimeout(() => {
		if (n < i.length-1) {
			n++;
			imageTimeout(i, n);
		} else {
			n = 0;
			imageTimeout(i, 0);
		}
	}, 5000);
*/
};

export function carousel(img) {
		images = img;
		imageTimeout(img, 0);
		start(images);
};


function displayButton() {
	for (let i in numbers) {
		console.log(numbers[i].className.replace("img", ""));
	}
};	

