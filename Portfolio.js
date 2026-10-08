
document.addEventListener("mouseenter", function () {
    const elements = document.querySelectorAll(".letsWork, .creatSomething");

    elements.forEach(element => {
        element.style.animation = "fadeIn 2.5s ease-in-out forwards";
    });
}, { once: true }); // Ensures it runs only once


// Prevent right-click on artwork images
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".artwork-preview-piece img").forEach(function (img) {
        img.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        });
    });
});