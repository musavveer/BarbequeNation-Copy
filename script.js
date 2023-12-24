const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-links")

navLink.forEach(n => n.addEventListener("click",closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
}