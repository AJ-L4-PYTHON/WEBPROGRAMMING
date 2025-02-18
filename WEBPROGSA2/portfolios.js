
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
