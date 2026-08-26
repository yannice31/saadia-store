// Sélectionne tous les éléments
const images = document.querySelectorAll(".grids-items img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

// Quand on clique sur une image
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Quand on clique sur fermer
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Quand on clique en dehors de l’image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});