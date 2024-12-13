// menu --------------------------------------------------------------------
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        // Mise à jour des attributs ARIA pour accessibilité
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}


// carousel-------------------------------------------------------------



// *** CAROUSEL ***
// TODO
const carousel = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollLeft -= carousel.offsetWidth;
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollLeft += carousel.offsetWidth;
    });
}

