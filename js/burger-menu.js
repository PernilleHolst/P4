document.addEventListener("DOMContentLoaded", function () {
  const burgerMenus = document.querySelectorAll(".burger-menu"); // Array of all .burger-menu elements
  const menuContent = document.querySelector(".burger-menu-content");

  const ctaButtonDesktop = document.getElementById("ctaButton");
  const dropdownDesktop = document.getElementById("dropdownMenuDesktop");

  const ctaButtonMobile = document.querySelector(".burger-call-to-action .cta-button"); // mine const (konstant) er variabler som ikke bør ændre sig
  const dropdownMobile = document.getElementById("dropdownMenuMobile"); // Alt det der står document. henter ting fra DOM (Document Object Model)

  // Burger-menu toggle
  for (let burgerMenu of burgerMenus) { // For each element in the burgerMenus array of elements (for loop)
    burgerMenu.addEventListener("click", function (event) { // Er en anonym funktion som bliver kaldt når det bliver trykket på burgerMenu elementet
      event.stopPropagation();
      burgerMenu.classList.toggle("open"); // Mine objekter er . . . og de har properties og metoder 
      menuContent.classList.toggle("show");
    });

  }
  // CTA dropdown toggle – Desktop
  if (ctaButtonDesktop && dropdownDesktop) {
    ctaButtonDesktop.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropdownDesktop.classList.toggle("show");
      ctaButtonDesktop.classList.toggle("active");
    });
  }

  // CTA dropdown toggle – Mobil
  if (ctaButtonMobile && dropdownMobile) {
    ctaButtonMobile.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropdownMobile.classList.toggle("show");
      ctaButtonMobile.classList.toggle("active");
    });
  }

  // Klik udenfor lukker dropdowns
  document.addEventListener("click", function (e) {
    if (
      dropdownDesktop &&
      !dropdownDesktop.contains(e.target) &&
      !ctaButtonDesktop.contains(e.target)
    ) {
      dropdownDesktop.classList.remove("show");
      ctaButtonDesktop.classList.remove("active");
    }

    if (
      dropdownMobile &&
      !dropdownMobile.contains(e.target) &&
      !ctaButtonMobile.contains(e.target)
    ) { // er en kontrolstruktur (også selvom den ikke siger if else) og det er fordi at hvis "" ikke findes, så gør den bare ikke noget
      dropdownMobile.classList.remove("show");
      ctaButtonMobile.classList.remove("active"); 
    }
  });
});
  