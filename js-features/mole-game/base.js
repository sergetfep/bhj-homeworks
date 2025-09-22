function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function activateHole() {
  const activeHole = document.querySelector(".hole_has-mole");
  if (activeHole) {
    activeHole.classList.remove("hole_has-mole");
  }

  const randomIndex = Math.floor(1 + Math.random() * 9);
  const newHole = getHole(randomIndex);
  newHole.classList.add("hole_has-mole");
}

setInterval(activateHole, 800);
