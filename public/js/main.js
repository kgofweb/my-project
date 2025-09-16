// DOM Elements
const main = document.getElementById('main')
const navMenu = document.getElementById('menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.menu__item a')


// =========== Show The Menu =========== //
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show_menu')

      // Adding Blur Effect
      if (navMenu.classList.contains('show_menu')) {
         main.style.filter = 'blur(5px)'
      }
   })
}
// =========== Remove The Menu =========== //
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show_menu')

      // Remove Blur Effect 
      if (!navMenu.classList.contains('show_menu')) {
         main.style.filter = 'blur(0px)';
      }
   }) 
}

// ======= Remove Menu after click on link ======== //
const linkAction = () => {
   navMenu.classList.remove('show_menu')
}
navLink.forEach(el => el.addEventListener('click', linkAction))