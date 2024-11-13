// Global Variables

const menuLink = document.querySelector(".menu a");
const header = document.querySelector("header");

// Listeners

document.querySelector(".menu").addEventListener("click", toggleMenu);



// Functions

function toggleMenu() {
    menuLink.classList.toggle("active");
    header.classList.toggle("black");
}