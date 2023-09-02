document.addEventListener("DOMContentLoaded", function () {
 const menuToggle = document.querySelector(".menu-toggle");
 const menu = document.querySelector(".menu");

 // Toggle the menu when the menu toggle button is clicked
 menuToggle.addEventListener("click", function () {
     menu.classList.toggle("active");
     menuToggle.classList.toggle("active");
 });
});
