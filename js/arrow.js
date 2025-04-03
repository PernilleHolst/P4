document.querySelector(".cta-button").addEventListener("click", function(event) {
    event.preventDefault(); // Forhindrer standardlink-adfærd
    this.classList.toggle("active");
});