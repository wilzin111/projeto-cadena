var html = document.querySelector("html");
var darkMode = document.querySelector(".muda-dark-modo");
var lightMode = document.querySelector(".muda-light-modo");

darkMode.addEventListener("click", function () {
    html.classList.remove("light-mode");
    html.classList.add("dark-mode")
});

lightMode.addEventListener("click", function () {
    html.classList.remove("dark-mode");
    html.classList.add("light-mode")
});