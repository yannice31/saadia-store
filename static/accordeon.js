const accordions = document.querySelectorAll(".accordion");

accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    // Fermer les autres
    accordions.forEach(otherBtn => {
      if (otherBtn !== btn) {
        const otherPanel = otherBtn.nextElementSibling;
        otherPanel.classList.add("hidden");
      }
    });

    // Ouvrir/fermer celui cliqué
    const panel = btn.nextElementSibling;
    panel.classList.toggle("hidden");
  });
});