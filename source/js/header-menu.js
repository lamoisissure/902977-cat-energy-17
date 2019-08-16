
var navMenu = document.querySelector(".header-menu");
var navToggle = document.querySelector(".header-menu__button");

navMenu.classList.remove("header-menu--nojs");

navToggle.addEventListener("click", function() {
  navMenu.classList.toggle("header-menu--opened");
  navMenu.classList.toggle("header-menu--closed");
});
