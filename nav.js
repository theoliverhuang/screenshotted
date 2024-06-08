const hamburger = document.querySelector(".hamburger");
const navright = document.querySelector(".navright")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navright.classList.toggle("active");
})