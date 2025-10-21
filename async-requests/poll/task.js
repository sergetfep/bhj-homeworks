"use strict";

const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

function loadPoll() {
  fetch("https://students.netoservices.ru/nestjs-backend/poll")
    .then((response) => response.json())
    .then((data) => {
      const pollId = data.id;
      const { title, answers } = data.data;

      pollTitle.textContent = title;
      pollAnswers.innerHTML = "";

      answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "poll__answer";
        button.textContent = answer;
        pollAnswers.appendChild(button);

        button.addEventListener("click", () => {
          alert("Спасибо, ваш голос засчитан!");

          fetch("https://students.netoservices.ru/nestjs-backend/poll", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `vote=${pollId}&answer=${index}`,
          })
            .then((response) => response.json())
            .then((result) => {
              showResults(result.stat);
            });
        });
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке опроса:", error);
      pollTitle.textContent = "Ошибка загрузки данных. Попробуйте позже.";
    });
}

function showResults(stat) {
  pollAnswers.innerHTML = "";

  stat.forEach((item) => {
    const div = document.createElement("div");
    const percent = ((item.votes / totalVotes(stat)) * 100).toFixed(2);
    div.textContent = `${item.answer}: ${percent}%`;
    pollAnswers.appendChild(div);
  });

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Следующий вопрос";
  nextBtn.className = "poll__answer";
  nextBtn.addEventListener("click", loadPoll);
  pollAnswers.appendChild(nextBtn);
}

function totalVotes(stat) {
  return stat.reduce((sum, item) => sum + item.votes, 0);
}

loadPoll();
