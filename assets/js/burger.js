document.addEventListener("DOMContentLoaded", function () {
    let icons = document.querySelector('#icons');
    let nav = document.querySelector('.nav_menu');


    icons.addEventListener("click", () => {
        nav.classList.toggle("active");
        icons.classList.toggle("active");
    });
})