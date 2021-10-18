Vue.component("fixed-part", {
  props: {
    layer: {},
  },
  template: `<div class="side-content">
  <div class="line1"></div>
  <ul class="social">
    <li><i class="fab fa-facebook"></i></li>
    <li><i class="fab fa-twitter"></i></li>
    <li><i class="fab fa-instagram"></i></li>
  </ul>
  <div class="line2"></div>
  <h3> {{layer}} <span>/ 05</span></h3>
  <hr />
</div>`,
});
new Vue({
  el: "#pagepiling",
});
// Menu
menu = document.querySelector(".nav ul");
menuToggler = document.querySelector(".nav .menuBtn");
menuToggler.onclick = () => {
  menuToggler.classList.toggle("fa-times");
  menu.classList.toggle("active");
};
