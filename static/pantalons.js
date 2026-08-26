document.addEventListener("DOMContentLoaded", () => {
  // --- Tableau de toutes les images ---
  const pants = [];
for (let i = 1; i <= 200; i++) {
  if (i <= 8) {
    pants.push(`../pam${i}.jpeg`);
  
  } 
}
  
  const gallery = document.getElementById("pants-gallery");
  const pagination = document.getElementById("pagination");

  let currentPage = 1;
  const perPage = 20; // nb de photos par page
  const totalPages = Math.ceil(pants.length / perPage);

  // --- Affiche une page ---
  function showPage(page) {
    gallery.innerHTML = "";
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const items = pants.slice(start, end);

    items.forEach(src => {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.innerHTML = `<img src="${src}" alt="pantalon ${start + pants.indexOf(src) + 1}" style="cursor: pointer;">`;
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
      }
    });
    pagination.appendChild(nextBtn);
  }

  // --- Charger la 1ère page ---
  showPage(currentPage);
//gallery.addEventListener("click", (e) => {
  //if(e.target.tagName == "IMG"){
    //const productName = e.target.alt || "produit";
    //const productImg = e.target.getAttribute("src");


    //Message prérempli
    //const message = `Bonjour, je souhaite acheter ${productName}. Voici la photo : ${window.location.origin}/${productImg}`;
    //const phone = "22674646209"; // ton numéro WhatsApp
    //const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    //window.open(url, "_blank");
  //}
//});






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
//
  
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
