import { cat, dog } from "./exports.js";
const numbers = document.querySelector(".number");

let n = 0;
let interval;

let data = { Cats: cat, Dogs: dog };
let current = data["Cats"];

function start(img) {
  clearInterval(interval);
  imageTimeout(img);
  interval = setInterval(() => {
    imageTimeout(img, n);
  }, 5000);
}

document.querySelector(".dropDownItems").addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    n = 0;
    current = data[e.target.textContent];
    start(current);
    document.querySelector(".dropDownItems").classList.toggle("show");
  }
});

numbers.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    n = Number(e.target.classList[0].replace("img", "")) - 1;
    start(current);
  }
});

document.querySelector(".left").addEventListener("click", () => {
  if (n == 0) {
    n = 4;
  } else if (n < 2) {
    n = 5;
  } else {
    n = n - 2;
  }
  start(current);
});

document.querySelector(".right").addEventListener("click", () => {
  if (n == 6) {
    n = 0;
  } else {
    n = n++;
  }
  start(current);
});

const imageTimeout = (i) => {
  let img = document.querySelector(".imageCarousel img");
  img.setAttribute("src", i[n]);
  for (let j = 0; j < 6; j++) {
    if (j == n) {
      numbers.querySelectorAll("button")[j].classList.add("selected");
    } else {
      numbers.querySelectorAll("button")[j].classList.remove("selected");
    }
  }
  if (n == 5) {
    n = 0;
  } else {
    n++;
  }
};

export function carousel() {
  start(current);
}
