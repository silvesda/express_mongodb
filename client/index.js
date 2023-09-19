
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navbar = document.getElementById('navbar');
  
    mobileMenuButton.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  });
