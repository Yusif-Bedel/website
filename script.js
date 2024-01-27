//menu start
const menuIcon = document.querySelector(".menu");
const xIcon = document.querySelector(".x");
const navMenu = document.querySelector("nav");
const body = document.querySelector("body");
const section = document.querySelector("section");

menuIcon.addEventListener("click", () => {
  if (navMenu.style.left == "-250px") {
    navMenu.style.left = "0px";
    body.style.overflow = "hidden";
    section.style.opacity = "0.5";
  } else {
    navMenu.style.left = "-250px";
    body.style.overflow = "auto";
    section.style.opacity = "1";
  }
});
xIcon.addEventListener("click", () => {
  navMenu.style.left = "-250px";
  body.style.overflow = "auto";
  section.style.opacity = "1";
});
//menu end
