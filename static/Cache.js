document.addEventListener("DOMContentLoaded", () => {
  const contentSections = document.querySelectorAll(".content-section");
  const accueilSections = [
    document.getElementById('home'),
    document.querySelector('.presentation'),
    document.querySelector('.pre')
  ];

  function hideEverything() {
    contentSections.forEach(sec => {
      sec.classList.remove('active');
      sec.classList.add('hidden');
    });
    accueilSections.forEach(sec => {
      if (sec) {
        sec.classList.remove('active');
        sec.classList.add('hidden');
      }
    });
  }

  function showAccueil() {
    accueilSections.forEach(sec => {
      if (sec) {
        sec.classList.remove('hidden');
        sec.classList.add('active');
      }
    });
  }

  // 🔹 Gestion des clics internes
  const navLinks = document.querySelectorAll('.navlinks-container a, .sidebar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-section');
      hideEverything();

      if (targetId === 'home') {
        showAccueil();
      } else {
        const target = document.getElementById(targetId);
        if (target) {
          target.classList.remove('hidden');
          target.classList.add('active');
        }
      }
    });
  });

  // 🔹 Gestion des arrivées depuis une autre page (hash dans l’URL)
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      hideEverything(); // cache accueil + toutes les sections
      target.classList.remove("hidden");
      target.classList.add("active");
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      // si pas de hash → afficher accueil
      showAccueil();
    }
  } else {
    // si pas de hash → afficher accueil
    showAccueil();
  }
});
