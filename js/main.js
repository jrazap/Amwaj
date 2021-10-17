menu = document.querySelector(".nav ul");
menuToggler = document.querySelector(".nav .menu");

menuToggler.onclick = () => {
  menuToggler.classList.toggle("fa-times");
  menu.classList.toggle("active");
};
