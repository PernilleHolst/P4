document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menuContent = document.querySelector(".burger-menu-content");
    const ctaButton = document.getElementById("ctaButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Burger-menu toggle
    burgerMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        burgerMenu.classList.toggle("open");
        menuContent.classList.toggle("show");
    });

    // Call-to-action dropdown toggle
    ctaButton.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    // Luk menuer, når man klikker udenfor
    document.addEventListener("click", function (event) {
        if (!burgerMenu.contains(event.target) && !menuContent.contains(event.target)) {
            burgerMenu.classList.remove("open");
            menuContent.classList.remove("show");
        }
        if (!ctaButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});