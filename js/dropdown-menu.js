document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.getElementById("ctaButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    ctaButton.addEventListener("click", function (event) {
        event.preventDefault(); // Stopper siden fra at hoppe til top
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Luk dropdown, hvis der klikkes udenfor
    document.addEventListener("click", function (event) {
        if (!ctaButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
