// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");
  
    // Toggle mobile menu
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });

    const container = document.querySelector('.container');
            // Trigger reflow to enable the transition
            void container.offsetWidth;
            container.classList.add('slide-in');

            const skillBars = document.querySelectorAll('.bar');
            skillBars.forEach(bar => {
                const targetWidth = bar.dataset.width;
                // Trigger reflow for skill bar animation
                void bar.offsetWidth;
                bar.style.width = targetWidth;
            });
  
    // Handle dropdown toggles
    const dropdowns = document.querySelectorAll(".dropdown > a");
  
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const dropdownMenu = this.nextElementSibling;
          dropdownMenu.classList.toggle("show");
        }
      });
    });
  });
  

