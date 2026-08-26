document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.getElementById("signin-form");
  const signUpForm = document.getElementById("signup-form");

  // --- Connexion (Sign In) ---
  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = signInForm.querySelector("input[name='username']").value;
      const passInput = signInForm.querySelector("input[name='password']").value;

      const savedUser = localStorage.getItem("username");
      const savedPass = localStorage.getItem("password");

      const errorMsg = document.getElementById("signin-error");

      if (nameInput === savedUser && passInput === savedPass) {
        localStorage.setItem("loggedIn", "true");
        if (errorMsg) errorMsg.textContent = "";
        alert(`✅ Bienvenue ${nameInput} !`);
      } else {
        if (errorMsg) {
          errorMsg.textContent = "❌ Nom d’utilisateur ou mot de passe incorrect";
          errorMsg.style.color = "red";
        }
        localStorage.removeItem("loggedIn");
      }

      // 🔑 Vider les champs après tentative
      signInForm.reset();
    });
  }

  // --- Inscription (Sign Up) ---
  if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = signUpForm.querySelector("input[name='username']").value;
      const passInput = signUpForm.querySelector("input[name='password']").value;

      localStorage.setItem("username", nameInput);
      localStorage.setItem("password", passInput);
      localStorage.setItem("loggedIn", "true");

      alert("Compte créé avec succès !");
      
      // 🔑 Vider les champs après inscription
      signUpForm.reset();
    });
  }
});