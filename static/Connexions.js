document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.getElementById("signin-form");
  const signUpForm = document.getElementById("signup-form");
  const signBtns = document.querySelector(".sign-btns");
  const welcomeUser = document.getElementById("welcome-user");

  // Au départ : aucun bouton
  signBtns.innerHTML = "";

  // Vérifier si utilisateur déjà connecté
  if (localStorage.getItem("loggedIn") === "true") {
    const username = localStorage.getItem("username") || "";
    showLogout(username);
  } else {
    // Si pas connecté → on peut afficher les boutons seulement si on veut
    createAuthButtons();
  }

  // Création des boutons Sign In / Sign Up
  function createAuthButtons() {
    signBtns.innerHTML = `
      <button id="signin-btn">Sign In</button>
      <button id="signup-btn">Sign Up</button>
    `;

    document.getElementById("signin-btn").addEventListener("click", () => openModal("signin-modal"));
    document.getElementById("signup-btn").addEventListener("click", () => openModal("signup-modal"));
  }

  // Soumission formulaire Sign In
  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("loggedIn", "true");
      closeModal("signin-modal");
      showLogout();
    });
  }

  // Soumission formulaire Sign Up
  if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = signUpForm.querySelector("input[type='text']").value;
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", nameInput);
      closeModal("signup-modal");
      showLogout(nameInput);
    });
  }

  // Fonction afficher logout + message
  function showLogout(name = "") {
    signBtns.innerHTML = `<button id="logout-btn">Sign Out</button>`;
    document.getElementById("logout-btn").addEventListener("click", logout);

    if (name) {
      welcomeUser.textContent = `Bienvenue, ${name} `;
    } else {
      welcomeUser.textContent = `Bienvenue `;
    }
  }

  // Déconnexion
  function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    signBtns.innerHTML = ""; // plus de boutons
    welcomeUser.textContent = "";
    createAuthButtons(); // recrée Sign In / Sign Up
  }
});