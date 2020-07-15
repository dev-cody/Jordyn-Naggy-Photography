

const toggle = document.querySelector('.toggle');
const navbarLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});