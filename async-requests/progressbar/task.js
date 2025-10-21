const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];
  if (!file) {
    alert("Выберите файл для загрузки!");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.upload.addEventListener("progress", (event) => {
    if (event.lengthComputable) {
      const percent = event.loaded / event.total;
      progress.value = percent;
    }
  });

  xhr.addEventListener("load", () => {
    if (xhr.status === 201) {
      alert("Файл успешно загружен!");
      progress.value = 1;
    } else {
      alert("Ошибка при загрузке файла");
    }
  });

  xhr.addEventListener("error", () => {
    alert("Произошла ошибка сети при загрузке файла.");
  });

  const formData = new FormData(form);
  xhr.send(formData);
});
