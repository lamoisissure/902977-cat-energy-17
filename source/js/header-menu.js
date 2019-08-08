
var navMenu = document.querySelector(".header-menu");
var navToggle = document.querySelector(".header-menu__button");

navMenu.classList.remove("header-menu--nojs");

navToggle.addEventListener("click", function() {
  if (navMenu.classList.contains("header-menu--closed")) {
    navMenu.classList.remove("header-menu--closed");
    navMenu.classList.add("header-menu--opened");
  } else {
    navMenu.classList.remove("header-menu--opened");
    navMenu.classList.add("header-menu--closed");
  }
});
