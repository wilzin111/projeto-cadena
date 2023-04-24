var html = document.querySelector("html");
var darkMode = document.querySelector(".cd-togle-dark-mode");
var lightMode = document.querySelector(".cd-togle-light-mode");

darkMode.addEventListener("click", function () {
    html.classList.remove("light-mode");
    html.classList.add("dark-mode")
});

lightMode.addEventListener("click", function () {
    html.classList.remove("dark-mode");
    html.classList.add("light-mode")
});