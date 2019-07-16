// Select DOM (Document Object Model, HTML tags, atributes) Items
// querySelector grabs the first one
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
// Nav items are home, about me, my work, how to reach me
// querySelectorAll uzima sve i stavlja u "node list", similar to an array
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of the Menu (the overlay)
// check to if it is opened or closed
// Const is for constant, and let is to directly reasign
// Meni je po difoltu zatvoren
let showMenu = false;

// We need an event listener
menuBtn.addEventListener("click", toggleMenu);
// toggleMenu je funkcija koju cemo sada napraviti
function toggleMenu() {
  // if the menu is not shown
  if (!showMenu) {
    // making a class in JavaScript
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // since there are multiple navItems, we need to loop through and add class to each one
    navItems.forEach(item => item.classList.add("show"));
    // Change Menu state, now it should be open
    showMenu = true;
  } else {
    // u elsu radimo sve obrnuto
    // making a class in JavaScript
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    // since there are multiple navItems, we need to loop through and remove class from each one
    navItems.forEach(item => item.classList.remove("show"));
    // Change Menu state, now it should be closed
    showMenu = false;
  }
}
