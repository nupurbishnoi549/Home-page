let nav = document.querySelector("nav")
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        nav.style.backgroundColor = "black";

    }
    else {
        nav.style.backgroundColor = "transparent";
    }
})