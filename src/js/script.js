// menu --------------------------------------------------------------------
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}


// carousel-------------------------------------------------------------



const carousel = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

if (carousel) {
    prevButton.addEventListener("click", () => {
        carousel.scrollLeft -= carousel.offsetWidth;
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollLeft += carousel.offsetWidth;
    });
}


// formulaire de contacte ---------------------------------------------

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire
    alert("Votre message a été envoyé !");
});