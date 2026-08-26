// Ouvrir un modal
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

// Fermer un modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Fermer si clic en dehors du modal
window.onclick = function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Boutons Sign In / Sign Up
document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.querySelector(".sign-btns button:nth-child(1)");
  const signUpBtn = document.querySelector(".sign-btns button:nth-child(2)");

  if (signInBtn) signInBtn.addEventListener("click", () => openModal("signin-modal"));
  if (signUpBtn) signUpBtn.addEventListener("click", () => openModal("signup-modal"));
});