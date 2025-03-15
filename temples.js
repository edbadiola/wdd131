document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuToggle = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        menuToggle.textContent = "☰"; // Change back to hamburger icon
    } else {
        navMenu.classList.add("open");
        menuToggle.textContent = "X"; // Change to 'X' when open
    }
});