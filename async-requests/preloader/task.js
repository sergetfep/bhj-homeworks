const loader = document.getElementById("loader");
const itemsContainer = document.getElementById("items");

function showCurrencies(data) {
  const valutes = data.response.Valute;

  itemsContainer.innerHTML = "";

  for (const code in valutes) {
    const valute = valutes[code];
    const item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `
      <div class="item__code">${valute.CharCode}</div>
      <div class="item__value">${valute.Value}</div>
      <div class="item__currency">руб.</div>
    `;

    itemsContainer.appendChild(item);
  }
}

function loadCurrencies() {
  loader.classList.add("loader_active");

  fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
    .then((response) => response.json())
    .then((data) => {
      loader.classList.remove("loader_active");

      showCurrencies(data);
    })
    .catch((error) => {
      loader.classList.remove("loader_active");
      itemsContainer.innerHTML = "<p>Ошибка загрузки данных 😢</p>";
      console.error("Ошибка:", error);
    });
}

loadCurrencies();
