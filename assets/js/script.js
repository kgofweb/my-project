// DOM Element
const main = document.querySelector('.main')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.menu_link')
const navMenu = document.getElementById('menu')
const themeButton = document.getElementById('themeBtn');

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

// =========== Remove The Menu Mobile after click =========== //
const linkAction = () => {
   navMenu.classList.remove('show')
}
navLink.forEach(element => element.addEventListener('click', linkAction))


// =========== Dark Mode =========== //
// Event Listener To change Theme Page
themeButton.addEventListener('click', changeTheme);

const darkTheme = 'darkMode'

// If user select option
const selectTheme = localStorage.getItem('selected-theme')

// Get current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

// If user choose previously topic
if(selectTheme) {
   // Validation fulfilled
   document.body.classList[selectTheme === 'dark' ? 'add' : 'remove'](darkTheme);
}

// Enable/desable theme with button
function changeTheme() {
   // Add or remove dark/icon theme
   document.body.classList.toggle(darkTheme);
   // Save current theme and icon in the Storage
   localStorage.setItem('selected-theme', getCurrentTheme());
}