document.addEventListener("DOMContentLoaded", () => {
  const rotators = document.querySelectorAll(".rotator");

  rotators.forEach((rotator) => {
    const cases = Array.from(rotator.querySelectorAll(".rotator__case"));
    let activeIndex = cases.findIndex((c) =>
      c.classList.contains("rotator__case_active")
    );

    function changeCase() {
      cases[activeIndex].classList.remove("rotator__case_active");

      activeIndex = (activeIndex + 1) % cases.length;

      const nextCase = cases[activeIndex];
      nextCase.classList.add("rotator__case_active");

      const color = nextCase.dataset.color || "black";
      rotator.style.color = color;

      const speed = parseInt(nextCase.dataset.speed) || 1000;

      setTimeout(changeCase, speed);
    }

    const firstColor = cases[activeIndex].dataset.color || "black";
    rotator.style.color = firstColor;

    const firstSpeed = parseInt(cases[activeIndex].dataset.speed) || 1000;
    setTimeout(changeCase, firstSpeed);
  });
});
