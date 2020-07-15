
//Grab the toggle button and navlinks
const toggle = document.querySelector('.toggle');
const navbarLinks = document.querySelector('.nav-links');

//Click function to active
toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});