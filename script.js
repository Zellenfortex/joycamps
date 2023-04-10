const hamburger = document.querySelector("#menu");
const nav = document.querySelector("ul");

hamburger.addEventListener("click", () => {
    nav.classList.toggle('active');
})