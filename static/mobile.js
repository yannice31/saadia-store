document.addEventListener("DOMContentLoaded", () => {
  const userToggler = document.querySelector(".user-toggler");
  const userMenu = document.querySelector(".user-menu");

  const signinMobile = document.querySelector(".signin-mobile");
  const signupMobile = document.querySelector(".signup-mobile");
  const logoutMobile = document.querySelector(".logout-mobile");
  const welcomeUserMobile = document.getElementById("welcome-user-mobile");

  // --- Toggle menu mobile ---
  if (userToggler) {
    userToggler.addEventListener("click", () => {
      userMenu.classList.toggle("hidden");
    });
  }

  // --- Ouvrir le modal Sign In ---
  if (signinMobile) {
    signinMobile.addEventListener("click", () => {
      openModal("signin-modal"); // fonction déjà définie ailleurs
      userMenu.classList.add("hidden");
    });
  }

  // --- Ouvrir le modal Sign Up ---
  if (signupMobile) {
    signupMobile.addEventListener("click", () => {
      openModal("signup-modal");
      userMenu.classList.add("hidden");
    });
  }

  // --- Vérifier si déjà connecté ---
  if (localStorage.getItem("loggedIn") === "true") {
    const username = localStorage.getItem("username") || "";
    showLogout(username);
  }

  // --- Afficher logout + message ---
  function showLogout(name = "") {
    signinMobile.classList.add("hidden");
    signupMobile.classList.add("hidden");
    logoutMobile.classList.remove("hidden");

    welcomeUserMobile.textContent = name
      ? `Bienvenue, ${name} 👋`
      : "Bienvenue 👋";

    logoutMobile.addEventListener("click", logout);
  }

  // --- Déconnexion ---
  function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    signinMobile.classList.remove("hidden");
    signupMobile.classList.remove("hidden");
    logoutMobile.classList.add("hidden");

    welcomeUserMobile.textContent = "";
  }
});