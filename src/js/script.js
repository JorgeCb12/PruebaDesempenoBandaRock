const menuButton = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuButton.classList.toggle("active");
});
