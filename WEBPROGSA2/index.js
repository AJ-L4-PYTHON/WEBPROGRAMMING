document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    content.classList.add('fade-out');
    window.addEventListener('beforeunload', function () {
        content.style.transition = 'none'; 
    });
});
