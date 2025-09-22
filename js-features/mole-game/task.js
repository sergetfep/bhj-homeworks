const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }

    checkGameStatus();
  };
}

function checkGameStatus() {
  if (Number(dead.textContent) >= 10) {
    alert("Поздравляем! Вы победили 🏆");
    resetGame();
  } else if (Number(lost.textContent) >= 5) {
    alert("Увы, вы проиграли 😢");
    resetGame();
  }
}

function resetGame() {
  dead.textContent = 0;
  lost.textContent = 0;
}
