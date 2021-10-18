totalLayers = document.querySelectorAll(".section").length;
Vue.component("fixed-part", {
  data() {
    return {
      total: totalLayers,
    };
  },
  props: {
    layer: {},
  },
  methods: {
    pad(n, width, z) {
      z = z || "0";
      n = n + "";
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join(z) + n;
    },
  },
  template: `<div class="side-content">
  <div class="line1"></div>
  <ul class="social">
    <li><i class="fab fa-facebook"></i></li>
    <li><i class="fab fa-twitter"></i></li>
    <li><i class="fab fa-instagram"></i></li>
  </ul>
  <div class="line2"></div>
  <h3> {{layer}} <span>/ {{pad(total,2)}}</span></h3>
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