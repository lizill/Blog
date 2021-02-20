window.addEventListener('load', function() {
    const menuBar = document.querySelector('.menuBar');
    const topMenu = document.querySelector('.topMenu');

    let openMenu = false;

    menuBar.addEventListener('click', function() {
        if(openMenu) {
            topMenu.style.height = '0px';
            openMenu = false;
        } else {
            topMenu.style.height = '148px';
            openMenu = true;
        }
    });
});