function toggleMenu() {
    let menu = document.getElementById('mobile-menu');
    let icon = document.getElementById('menu-icon');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.src = "icons/hamb-menu.svg";
    } else {
        menu.classList.add('open');
        icon.src = "icons/hamb-menu-closed.svg";
    }
}

icon = addEventListener('click', function () {
    toggleMenu();
})