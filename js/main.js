const iconoMovil = document.querySelector(".mobile-icon");
const mobileMenu = document.querySelector(".mobile-menu");

iconoMovil.addEventListener("click", function () {
    mobileMenu.classList.toggle("mobile-menu-clicked");
});