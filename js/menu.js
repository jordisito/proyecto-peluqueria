
let toggleMenu = document.getElementById('toggle-menu'),
    nav = document.getElementById('HeaderMain-nav');

toggleMenu.addEventListener('click', llamarMenu);

function llamarMenu(e) {
    nav.classList.toggle('mostrar');
    document.body.classList.toggle('mostrar');
}
