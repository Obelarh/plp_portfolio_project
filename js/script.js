document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  // Toggle mobile menu visibility
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Handle dropdown toggles (for mobile view)
  const dropdowns = document.querySelectorAll(".dropdown > a");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (e) {
      // Check if screen width is mobile
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Prevent default link behavior
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle("show"); // Toggle visibility of dropdown
      }
    });
  });
});
