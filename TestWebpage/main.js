
document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const link of smoothScrollLinks) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const yOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: yOffset,
                    behavior: "smooth"
                });
            }
        });
    }
});
