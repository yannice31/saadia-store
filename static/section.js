// Gestion des sections affichées/cachées
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navlinks-container a");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // évite le rechargement de la page

      const target = link.getAttribute("data-section");

      // cacher toutes les sections
      sections.forEach(sec => sec.classList.remove("active"));

      // afficher seulement la section correspondante
      document.getElementById(target).classList.add("active");

      // refermer le menu si on est sur mobile
      const hamburger = document.querySelector(".hamburger");
      const navlinksContainer = document.querySelector(".navlinks-container");
      if (hamburger && navlinksContainer) {
        hamburger.classList.remove("open");
        navlinksContainer.classList.remove("open");
        hamburger.setAttribute("aria-expanded", false);
      }
    });
  });
});