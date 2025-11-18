/* Menu hamburger */ 

const menuBtn = document.querySelector('.nav-hamburger-btn');

/* Sidebar */

const sidebar = document.querySelector('.sidebar');

/* Escuta do clique */

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-is-active');
});