// Set current year and last modified
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Product list
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product dropdown
const selectElement = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

// Star rating logic
const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

stars.forEach((star) => {
    star.addEventListener("mouseenter", () => {
        highlightStars(star.dataset.value);
    });

    star.addEventListener("mouseleave", () => {
        resetStars();
    });

    star.addEventListener("click", () => {
        setRating(star.dataset.value);
    });
});

function highlightStars(value) {
    stars.forEach((star) => {
        star.classList.toggle("hover", star.dataset.value <= value);
    });
}

function resetStars() {
    stars.forEach((star) => {
        star.classList.remove("hover");
    });
}

function setRating(value) {
    ratingInput.value = value;
    stars.forEach((star) => {
        star.classList.toggle("selected", star.dataset.value <= value);
    });
}
