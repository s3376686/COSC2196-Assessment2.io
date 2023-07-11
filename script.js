const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("navbar");
  container.classList.toggle("pushed-content")
})

