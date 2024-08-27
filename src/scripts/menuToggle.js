document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("open-menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu-icon");
  const menuLinks = mobileMenu?.querySelectorAll("a");

  if (menuToggle && mobileMenu && closeMenu) {
    const toggleMenu = () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    };

    menuToggle.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", toggleMenu);

    menuLinks?.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileMenu.classList.contains("flex")) {
          toggleMenu();
        }
      });
    });
  }
});
