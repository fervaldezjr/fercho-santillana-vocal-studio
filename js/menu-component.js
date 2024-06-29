document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const close = document.getElementById('menu-close');
    const menu = document.getElementById('menu');
    const navLinks = document.querySelectorAll('.link-close');

    const toggleMenu = () => {
        menuIcon.classList.toggle('active');
        menu.classList.toggle('active');
        close.classList.toggle('active');
    };

    menuIcon.addEventListener('click', toggleMenu);
    close.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});
