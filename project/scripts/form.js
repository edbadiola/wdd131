// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Auto-close menu on link click (mobile only)
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

// Star rating system
const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
        highlightStars(index);
    });

    star.addEventListener("mouseout", () => {
        clearHighlights();
        highlightSelected();
    });

    star.addEventListener("click", () => {
        selectStars(index);
    });
});

let selectedRating = -1;

function highlightStars(index) {
    for (let i = 0; i <= index; i++) {
        stars[i].classList.add("hover");
    }
}

function clearHighlights() {
    stars.forEach(star => star.classList.remove("hover"));
}

function selectStars(index) {
    selectedRating = index;
    highlightSelected();
}

function highlightSelected() {
    stars.forEach((star, i) => {
        if (i <= selectedRating) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }
    });
}
