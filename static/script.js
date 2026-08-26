// Fonction qui initialise le menu hamburger

// Fonction qui initialise le menu hamburger


// On essaie d’exécuter l’init dès que possible

// On essaie d’exécuter l’init dès que possible
function initHamburgerMenu() {
 
  const navlinksContainer = document.querySelector(".navlinks-container");

  // Vérifie que les éléments existent
  if (!navlinksContainer) {
    console.error(" Hamburger ou navlinks-container introuvable !");
    return;
  }

  // Affiche les éléments dans la console pour vérifier
  
  console.log("Navlinks Container trouvé :", navlinksContainer);

  // Fonction pour ouvrir/fermer le menu
  const toggleNav = () => {
   
    navlinksContainer.classList.toggle("open");

    
  };

  

}
// Fonction qui initialise le menu hamburger









