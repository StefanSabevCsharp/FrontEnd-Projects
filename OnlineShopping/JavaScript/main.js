document.addEventListener("DOMContentLoaded", function () {
    const articleContainer = document.querySelector(".article-container");
    const articleWidth = 420; 
    let currentPosition = 0;
    let isDown = false;
    let startX;
    let scrollLeft;

    articleContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - articleContainer.offsetLeft;
        scrollLeft = articleContainer.scrollLeft;
    });

    articleContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    articleContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    articleContainer.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - articleContainer.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        articleContainer.scrollLeft = scrollLeft - walk;
    });
});