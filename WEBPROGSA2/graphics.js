document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    content.classList.add('fade-out');
    window.addEventListener('beforeunload', function () {
        content.style.transition = 'none'; 
    });
});


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
function showModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgModal");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
