// Menu
menu = document.querySelector(".nav ul");
menuToggler = document.querySelector(".nav .menuBtn");

menuToggler.onclick = () => {
  menuToggler.classList.toggle("fa-times");
  menu.classList.toggle("active");
};
