document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.getElementById("sidebar");

  // Vérifie que les éléments existent
  if (!hamburger || !sidebar) {
    console.error("⚠️ Hamburger ou sidebar introuvable !");
    return;
  }

  // Fonction toggle ouverture/fermeture
  const toggleSidebar = () => {
    hamburger.classList.toggle("open");
    sidebar.classList.toggle("open");

    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);

    console.log("Sidebar ouverte ?", !isExpanded);
  };

  // Écoute du clic sur le hamburger
  hamburger.addEventListener("click", toggleSidebar);

  // Fermer la barre verticale si on clique sur un lien
  sidebar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", false);
      console.log("Sidebar fermée après clic sur un lien");
    });
  });
});
