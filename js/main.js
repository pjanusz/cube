(function () {
    console.log(`
        Works in Opera and Chrome,
        does not work in Safari,
        and it's not "responsive".
    `);

    function option(e) {
        const id = e.target.id;
        const cube = document.getElementById('cube');
        const walls = document.getElementsByClassName('wall');

        if (e.target.value <= 6) {
            cube.className = 'cube show-' + id;
        } else if (e.target.value == 7) {
            for (let wall of walls) {
                wall.classList.toggle('wall-backface');
            }
        }
    }
    document.getElementById('nav-list').addEventListener('click', option);

    // TITLE SCREEN - FRONT WALL
    var nav = document.getElementById('nav'),
        titleButton = document.getElementById('title-button'),
        titleContainer = document.getElementById('title-container'),
        titleMoveDiv = document.getElementById('title-move'),
        html = document.documentElement,
        titleMove = 40,
        titleRotate = 20;

    titleButton.addEventListener('click', function () {
        titleButton.textContent = (titleButton.textContent === 'MOAR!!') ? 'HIDE!' : 'MOAR!!';
        titleContainer.classList.toggle('title-hide');
        titleMoveDiv.classList.toggle('title-moving-transform');
        nav.classList.toggle('nav-hidden');
    });

    html.addEventListener('mousemove', function (e) {
        //Moving div on title screen
        var documentX = html.offsetWidth,
            documentY = html.offsetHeight,
            titleMoveX = ((e.pageX - documentX / 2) / (documentX / 2)) * -titleMove,
            titleMoveY = ((e.pageY - documentY / 2) / (documentY / 2)) * -titleMove,
            titleRotateY = (e.pageX / documentX) * titleRotate * 2 - titleRotate,
            titleRotateX = -((e.pageY / documentY) * titleRotate * 2 - titleRotate);

        titleMoveDiv.style.left = titleMoveX + 'px';
        titleMoveDiv.style.top = titleMoveY + 'px';
        titleMoveDiv.style.transform = 'rotateX(' + titleRotateX + 'deg) rotateY(' + titleRotateY + 'deg)';
    });
})();