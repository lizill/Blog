window.addEventListener('load', function() {
    const music = document.getElementsByTagName('audio');
    let musicIndex = 0;

    const playAndpauseBT = document.querySelector('#playAndpause');
    const playNextBT = document.getElementById('playNext');
    const playBackBT = document.getElementById('playBack');

    playAndpauseBT.addEventListener('click', playAndpause);
    playNextBT.addEventListener('click', playNext);
    playBackBT.addEventListener('click', playBack);

    musicBar();
    // 뮤직바 생성
    function musicBar() {
        music[musicIndex].style.visibility = "visible"
    }

    // 뮤직바 제거
    function delMusicBar() {
        music[musicIndex].style.visibility = "hidden"
    }

    // 재생, 정지
    let playORpause = 1;
    function playAndpause() {
        if(playORpause>0) {
            pauseMusicBT();
            music[musicIndex].play();
        } else {
            playMusicBT();
            music[musicIndex].pause();
        }
    }

    // 재생 버튼
    function pauseMusicBT() {
        playAndpauseBT.innerHTML = '<img src="../img/pauseBT.png">';
        playORpause = -1;
    }
    function playMusicBT() {
        playAndpauseBT.innerHTML = '<img src="../img/playBT.png">';
        playORpause = 1;
    }

    // 다음재생
    function playNext() {
        music[musicIndex].pause();
        music[musicIndex].currentTime = 0;
        delMusicBar();
        if(++musicIndex >= music.length) musicIndex = musicIndex - music.length;
        musicBar();
        music[musicIndex].play();
        pauseMusicBT();
        autoPlay();
    }

    // 이전재생
    function playBack() {
        music[musicIndex].pause();
        music[musicIndex].currentTime = 0;
        delMusicBar();
        if(--musicIndex < 0) musicIndex = musicIndex + music.length;
        musicBar();
        music[musicIndex].play();
        pauseMusicBT();
        autoPlay();
    }

    // 다음곡 자동재생
    autoPlay();
    function autoPlay() {
        music[musicIndex].addEventListener('ended', playNext);

        music[musicIndex].addEventListener('play', function() {
            pauseMusicBT();
        });
        music[musicIndex].addEventListener('pause', function() {
            playMusicBT();
        });
    }
});