// Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
    loop: true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true
      }
  });




var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 5500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
  },
});


var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
});

 

// nav-bar effects on scroll

window.addEventListener("scroll", function() {
  const header = this.document.querySelector("header");

  header.classList.toggle("sticky", this.window.scrollY > 0);
});

//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn")
const closeBtn = document.querySelector(".nav-close-btn")
const navigation = document.querySelector(".navigation")

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
})

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
})