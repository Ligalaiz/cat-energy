var toggle = document.querySelector(".page-toggle");
var mainNav = document.querySelector(".main-nav");

toggle.classList.remove("page-toggle--none");
mainNav.classList.remove("main-nav--show");

toggle.addEventListener("click", function () {
  mainNav.classList.toggle("main-nav--show");
  toggle.classList.toggle("page-toggle--close");
});
