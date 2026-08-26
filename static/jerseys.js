document.addEventListener("DOMContentLoaded", () => {
  const jerseys = [];
for (let i = 1; i <= 200; i++) {
  if (i <= 10) {
    jerseys.push(`../ma${i}.jpg`); // Les 10 premiers en .jpeg
  } 
}
const gallery = document.getElementById("jerseys-gallery");
  const pagination = document.getElementById("pagination");

  let currentPage = 1;
  const perPage = 20; // nb de photos par page
  const totalPages = Math.ceil(
    jerseys.length / perPage);

  // --- Affiche une page ---
  function showPage(page) {
    gallery.innerHTML = "";
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const items = jerseys.slice(start, end);

    items.forEach(src => {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.innerHTML = `<img src="${src}" alt="chaussure">`;
      gallery.appendChild(div);
    });

    renderPagination();
  }

  // --- Affiche les boutons de pagination ---
  function renderPagination() {
    pagination.innerHTML = "";

    // Bouton Précédent
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Précédent";
    prevBtn.disabled = (currentPage === 1);
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
    pagination.appendChild(prevBtn);

    // Boutons numéros de pages
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i;
      pageBtn.classList.add("page-number");
      if (i === currentPage) pageBtn.classList.add("active");

      pageBtn.addEventListener("click", () => {
        currentPage = i;
        showPage(currentPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      pagination.appendChild(pageBtn);
    }

    // Bouton Suivant
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Suivant";
    nextBtn.disabled = (currentPage === totalPages);
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
    pagination.appendChild(nextBtn);
  }

  // --- Charger la 1ère page ---
  showPage(currentPage);
  window.scrollTo({ top: 0, behavior: "smooth" });
  
 
const modal = document.getElementById("product-modal");
const closeBtn = document.querySelector(".close-btn");
const productName = document.getElementById("product-name");

const buyBtn = document.getElementById("buy-btn");

let currentProduct = {};

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    currentProduct = {
      name: e.target.dataset.name,
      price: e.target.dataset.price,
      img: e.target.dataset.img
    };
    productName.textContent = currentProduct.name;
   
    modal.style.display = "block";
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

buyBtn.addEventListener("click", () => {
  const message = `Bonjour, je souhaite acheter ${currentProduct.name} (${currentProduct.price}). Voici la photo : ${window.location.origin}/${currentProduct.img}`;
  const phone = "22674646209"; // ton numéro WhatsApp
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
});


document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navlinks-container a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const section = link.getAttribute("data-section");
      window.location.href = `index.html#${section}`;
    });
  });
});
