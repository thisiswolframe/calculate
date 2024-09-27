const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header ul.centered');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });