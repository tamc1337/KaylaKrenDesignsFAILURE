
const nav = document.getElementById('nav');

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("sticky");
        nav.classList.remove("fixed");
    } else {
        nav.classList.remove("sticky");
        nav.classList.add("fixed");
    }
};