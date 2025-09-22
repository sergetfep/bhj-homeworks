// const counter = document.getElementById("clicker__counter");
// const cookie = document.getElementById("cookie");

// let count = 0;
// let big = false;

// cookie.onclick = function () {
//   count++;
//   counter.textContent = count;

//   if (big) {
//     cookie.width = 200;
//   } else {
//     cookie.width = 220;
//   }
//   big = !big;
// };

const counter = document.getElementById("clicker__counter");
const speedElement = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");

let count = 0;
let big = false;
let lastClickTime = null;

cookie.onclick = function () {
  count++;
  counter.textContent = count;

  cookie.width = big ? 200 : 220;
  big = !big;

  const now = new Date();
  if (lastClickTime) {
    const diff = (now - lastClickTime) / 1000;
    const speed = (1 / diff).toFixed(2);
    speedElement.textContent = speed;
  }
  lastClickTime = now;
};
