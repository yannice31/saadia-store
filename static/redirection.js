const pages = document.querySelectorAll(".direction");
pages.forEach(page => {
page.addEventListener("click", (event) => {
    event.preventDefault();
    const destination = page.getAttribute("href");
    location.href = destination; //window.location.assign("shoes.html");
});
});