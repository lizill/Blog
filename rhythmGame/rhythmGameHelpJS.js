window.addEventListener('load', function() {
    const articleP = document.querySelector('.articleP');
    const articleUl = document.querySelector('.articleUl');

    let openMenu = false;

    articleP.addEventListener('click', function() {
        if(openMenu) {
            articleUl.style.display = 'none';
            openMenu = false;
        } else {
            articleUl.style.display = 'block';
            openMenu = true;
        }
    });
});