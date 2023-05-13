// title animation

let heading = document.querySelector("#header h1");

document.addEventListener("DOMContentLoaded", () => {
    heading.classList.remove("passive");
    heading.classList.add("active");
});



// preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", () => {
    loader.style.top = 0;

    setTimeout(() => {
        loader.style.top = "100vh";
    }, 100);
});