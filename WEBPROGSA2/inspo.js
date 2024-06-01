
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector("header");

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    }, false);
});

const bgMusic = document.getElementById('bgm');
const muteButton = document.getElementById('mutebutton');

muteButton.addEventListener('click', () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteButton.textContent = 'Mute';
  } else {
    bgMusic.muted = true;
    muteButton.textContent = 'Unmute';
  }
});