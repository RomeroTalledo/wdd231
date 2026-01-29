const hamBtn = document.getElementById("ham-btn");
const navMenu = document.getElementById("nav-menu");

hamBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
