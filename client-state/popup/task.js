const modal = document.getElementById("subscribe-modal");
const closeButton = modal.querySelector(".modal__close");

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

if (!getCookie("modalClosed")) {
  modal.classList.add("modal_active");
}

closeButton.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modalClosed=true; max-age=31536000; path=/";
});
