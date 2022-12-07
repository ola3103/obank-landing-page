const navBtn = document.querySelector(".nav--icon--btn");
const menuIcon = document.querySelector(".menu--icon");
const closeIcon = document.querySelector(".close--nav--icon");
const navBox = document.querySelector(".nav--box");

navBtn.addEventListener("click", function () {
  navBox.classList.toggle("show--nav");
  menuIcon.classList.toggle("nav--icon--hidden");
  closeIcon.classList.toggle("nav--icon--hidden");
});

// Hero Slider
const heroSlide = document.querySelectorAll(".hero--slide");

let currentSlide = 0;
const maxSlide = heroSlide.length;

const gotoSlide = function (slide) {
  heroSlide.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
};
gotoSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  gotoSlide(currentSlide);
};

setInterval(() => {
  if (window.innerWidth > 576) {
    nextSlide();
  }
}, 2000);
