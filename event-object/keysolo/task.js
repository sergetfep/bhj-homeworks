class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.timerElement = container.querySelector(".status__timer");

    this.timerId = null;
    this.timeLeft = 0;

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener("keyup", (event) => {
      const pressed = event.key.toLowerCase();
      const current = this.currentSymbol.textContent.toLowerCase();

      if (pressed.length !== 1) return;

      if (pressed === current) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  startTimer(wordLength) {
    clearInterval(this.timerId);
    this.timeLeft = wordLength;
    this.timerElement.textContent = this.timeLeft;

    this.timerId = setInterval(() => {
      this.timeLeft--;
      this.timerElement.textContent = this.timeLeft;

      if (this.timeLeft <= 0) {
        clearInterval(this.timerId);
        alert("Время вышло!");
        this.fail();
      }
    }, 1000);
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) {
      this.currentSymbol.classList.remove("symbol_current");
    }
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add("symbol_current");
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
      return;
    }
    this.setNewWord();
  }

  fail() {
    clearInterval(this.timerId);
    if (++this.lossElement.textContent === 3) {
      alert("Вы проиграли!");
      this.reset();
      return;
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.startTimer(word.length);
  }

  getWord() {
    const words = [
      "bob",
      "awesome",
      "netology",
      "hello",
      "kitty",
      "rock",
      "youtube",
      "popcorn",
      "cinema",
      "love",
      "javascript",
    ];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));
