menu = document.querySelector(".nav ul");
menuToggler = document.querySelector(".nav .navbar");

menuToggler.onclick = () => {
  menuToggler.classList.toggle("fa-times");
  menu.classList.toggle("active");
};
