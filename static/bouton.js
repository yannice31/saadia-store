// Associer chaque bouton accordéon à une page
const pages = {
 // "force" : "force.html"
 "shoes" : "shoes.html",
  "force" : "force.html",
  "nike": "nike.html",
  "adidas": "adidas.html",
  "jewerl": "jewerl.html",
  "pants": "pantalons.html",
  "T-shirts": "tshirt.html",
  "Chemises": "chemises.html",
  "sweaters" : "sweaters.html",
  "jerseys" : "jerseys.html",
  "jordan" : "Jordan.html"
  

};

document.querySelectorAll(".accordion").forEach(acc => {
  acc.addEventListener("click", function () {
    const label = this.textContent.trim();
    if (pages[label]) {
      window.location.href = pages[label];
    }
  });
});