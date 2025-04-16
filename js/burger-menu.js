document.addEventListener("DOMContentLoaded", function () {
  const burgerMenus = document.querySelectorAll(".burger-menu");
  const menuContent = document.querySelector(".burger-menu-content");

  const ctaButtonDesktop = document.getElementById("ctaButton");
  const dropdownDesktop = document.getElementById("dropdownMenuDesktop");

  const ctaButtonMobile = document.querySelector(".burger-call-to-action .cta-button"); 
  const dropdownMobile = document.getElementById("dropdownMenuMobile"); 

  // Burger-menu toggle
  for (let burgerMenu of burgerMenus) { 
    burgerMenu.addEventListener("click", function (event) { 
      event.stopPropagation();
      burgerMenu.classList.toggle("open"); 
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
    ) {
      dropdownMobile.classList.remove("show");
      ctaButtonMobile.classList.remove("active"); 
    }
  });
});
  