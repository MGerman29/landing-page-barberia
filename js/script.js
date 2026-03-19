const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});