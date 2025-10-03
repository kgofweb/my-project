// DOM
const main = document.querySelector('.main')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navMenu = document.getElementById('menu')

// Function to show the menu
const showMenu = () => {
   navMenu.classList.add('show')
}
navToggle.addEventListener('click', showMenu)

// Function to hide menu
const hideMenu = () => {
   navMenu.classList.remove('show')
}
navClose.addEventListener('click', hideMenu)