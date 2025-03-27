
function toggleNav() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  }
  
  document.getElementById("menu-btn").addEventListener("click", toggleNav);


var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: { delay: 3000 },
        pagination: { el: ".swiper-pagination", clickable: true },
    });