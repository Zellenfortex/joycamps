// Carousel img - header
const buttons = document.querySelectorAll("[data-carousel-button]");
const nextButton = document.querySelector("[data-carousel-button='next']");
let intervalId;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(intervalId); // reset interval on click

    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    intervalId = setInterval(autoSwipe, 7000); // restart interval after click
  });
});

// Auto Swipe
function autoSwipe() {
  nextButton.click();
}
intervalId = setInterval(autoSwipe, 3500); // start first interval

// Hamburger animation active

const hamburger = document.querySelector(".hamburger");
const layers = document.querySelectorAll(".hamburger div");

hamburger.addEventListener("click", () => {
  layers.forEach((layers) => layers.classList.toggle("activeHamburger"));
});

// Toggle Mobile Menu

const nav = document.querySelector("nav ul");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  nav.classList.toggle("MobileMenu");
});

// REVEAL

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
