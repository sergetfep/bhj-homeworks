const form = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");

const savedUserId = localStorage.getItem("user_id");
if (savedUserId) {
  showWelcome(savedUserId);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("https://students.netoservices.ru/nestjs-backend/auth", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem("user_id", data.user_id);
        showWelcome(data.user_id);
        form.reset();
      } else {
        alert("Неверный логин/пароль");
        form.reset();
      }
    })
    .catch(() => {
      alert("Ошибка соединения с сервером");
    });
});

function showWelcome(userId) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userIdSpan.textContent = userId;
}

const logoutBtn = document.createElement("button");
logoutBtn.textContent = "Выйти";
logoutBtn.classList.add("btn");
welcome.appendChild(document.createElement("br"));
welcome.appendChild(logoutBtn);

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user_id");
  welcome.classList.remove("welcome_active");
  signin.classList.add("signin_active");
});
