function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");

  // ⚠️ On vide les boutons au lieu de les recréer
  signBtns.innerHTML = "";

  // On met un message par défaut dans le menu utilisateur
  const userMenu = document.querySelector(".user-menu");
  if (userMenu) {
    userMenu.innerHTML = `
      <div class="mobile-auth">
        <button class="signin-mobile" onclick="openModal('signin-modal')">Sign In</button>
        <button class="signup-mobile" onclick="openModal('signup-modal')">Sign Up</button>
      </div>
      <div id="welcome-user-mobile">Bienvenue invité </div>
    `;
  }
}