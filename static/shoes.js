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
