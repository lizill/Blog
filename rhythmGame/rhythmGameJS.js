window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const topMenu = document.querySelector('.topMenu');

    let openMenu = false;

    header.addEventListener('click', function() {
        if(openMenu) {
            topMenu.style.height = '0px';
            header.style.height = '0px';
            openMenu = false;
        } else {
            topMenu.style.height = '222px'; // 37px
            header.style.height = '100vh';
            openMenu = true;
        }
    });
});