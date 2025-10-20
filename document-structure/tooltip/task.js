const tooltips = document.querySelectorAll(".has-tooltip");
let activeTooltip = null;

tooltips.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    if (activeTooltip && activeTooltip.previousElementSibling === el) {
      activeTooltip.remove();
      activeTooltip = null;
      return;
    }

    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip tooltip_active";
    tooltip.textContent = el.title;
    document.body.appendChild(tooltip);

    const rect = el.getBoundingClientRect();
    tooltip.style.left = rect.left + "px";
    tooltip.style.top = rect.bottom + "px";

    activeTooltip = tooltip;
  });
});

document.addEventListener("click", (event) => {
  if (activeTooltip && !event.target.classList.contains("has-tooltip")) {
    activeTooltip.remove();
    activeTooltip = null;
  }
});
