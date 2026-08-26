// Associer chaque bouton accordéon à une page
const pages = {
 // "force" : "force.html"
 "shoes" : "/static/shoes.html",
  "force" : "/static/force.html",
  "nike": "/static/nike.html",
  "adidas": "/static/adidas.html",
  "jewerl": "/static/jewerl.html",
  "pants": "/static/pantalons.html",
  "T-shirts": "/static/tshirt.html",
  "Chemises": "/static/chemises.html",
  "sweaters" : "/static/sweaters.html",
  "jerseys" : "/static/jerseys.html",
  "jordan" : "/static/Jordan.html"
  

};

document.querySelectorAll(".accordion").forEach(acc => {
  acc.addEventListener("click", function () {
    const label = this.textContent.trim();
    if (pages[label]) {
      window.location.href = pages[label];
    }
  });
});