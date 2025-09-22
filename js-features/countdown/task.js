//////////
// Task #1
//////////

// const timerElement = document.getElementById("timer");
// let timeLeft = parseInt(timerElement.textContent, 10);

//////////
// Task #2
//////////

// const countdown = setInterval(() => {
//   timeLeft -= 1;
//   timerElement.textContent = timeLeft;

//   if (timeLeft <= 0) {
//     clearInterval(countdown);
//     alert("Вы победили в конкурсе!");
//   }
// }, 1000);

// function formatTime(seconds) {
//   const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
//   const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//   const secs = String(seconds % 60).padStart(2, "0");
//   return `${hrs}:${mins}:${secs}`;
// }

// const timerElement = document.getElementById("timer");
// let timeLeft = parseInt(timerElement.textContent, 10);

// timerElement.textContent = formatTime(timeLeft);

// const countdown = setInterval(() => {
//   timeLeft -= 1;
//   timerElement.textContent = formatTime(timeLeft);

//   if (timeLeft <= 0) {
//     clearInterval(countdown);
//     alert("Вы победили в конкурсе!");
//   }
// }, 1000);

//////////
// Task #3
//////////

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

const timerElement = document.getElementById("timer");

let timeLeft = parseInt(timerElement.textContent, 10);

timerElement.textContent = formatTime(timeLeft);

const countdown = setInterval(() => {
  timeLeft -= 1;
  timerElement.textContent = formatTime(timeLeft);

  if (timeLeft <= 0) {
    clearInterval(countdown);

    alert("Вы победили в конкурсе!");

    const link = document.createElement("a");
    link.href = "https://example.com/prize.txt";
    link.download = "prize.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}, 1000);
