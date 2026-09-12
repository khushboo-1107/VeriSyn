document.addEventListener("DOMContentLoaded", () => {
  // Reveal all sections instantly (temporary fallback)
  document.querySelectorAll(".hero-left, .device-mock, .card, .cta-inner").forEach(el => {
    el.classList.add("reveal");
  });

  // Year update
  document.getElementById("year").textContent = new Date().getFullYear();
});
