function isVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top < windowHeight && rect.bottom > 0;
}

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => {
    if (isVisible(el)) {
      el.classList.add("reveal_active");
    } else {
      el.classList.remove("reveal_active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
