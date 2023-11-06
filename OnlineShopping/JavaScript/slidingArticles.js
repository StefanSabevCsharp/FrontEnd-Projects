document.addEventListener("DOMContentLoaded", function () {
    const articleContainer = document.getElementById("articleContainer");
    const prevArrow = document.getElementById("prevArrow");
    const nextArrow = document.getElementById("nextArrow");

    const articleWidth = 420; 
    let currentPosition = 0;

    prevArrow.addEventListener("click", function () {
        currentPosition += articleWidth;
        if (currentPosition > 0) {
            currentPosition = 0;
        }
        articleContainer.style.transform = `translateX(${currentPosition}px)`;
    });

    nextArrow.addEventListener("click", function () {
        currentPosition -= articleWidth;
        const minPosition = -articleWidth * (articleContainer.children.length - 1);
        if (currentPosition < minPosition) {
            currentPosition = minPosition;
        }
        articleContainer.style.transform = `translateX(${currentPosition}px)`;
    });
});
