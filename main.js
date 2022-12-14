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
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
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

// ABOUT TABS
const tabs = document.querySelectorAll(".single--about--btn");
const tabsContainer = document.querySelector(".about--btn--box");
const tabContent = document.querySelectorAll(".general--about--box");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".single--about--btn");
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("single--about--btn--active"));
  tabContent.forEach((c) => c.classList.remove("general--about--box--active"));

  clicked.classList.add("single--about--btn--active");
  document
    .querySelector(`.about--container--${clicked.dataset.tab}`)
    .classList.add("general--about--box--active");
});

// CTA--3
const imgSlides = document.querySelectorAll(".cta--3--img--box");
const ctaBtn = document.querySelectorAll(".cta--3-btn");

let currentImgSlide = 0;
const maximumSlide = imgSlides.length;

const moveSlideTo = function (slide) {
  imgSlides.forEach((s, i) => {
    s.style.transform = `translateY(${100 * (i - slide)}%)`;
  });
};
moveSlideTo(0);

const activeBtn = function (slide) {
  ctaBtn.forEach((btn) => btn.classList.remove("cta--3-btn-active"));

  document
    .querySelector(`.cta--3-btn[data-slide="${slide}"]`)
    .classList.add("cta--3-btn-active");
};

const moveSlide = function () {
  if (currentImgSlide === maximumSlide - 1) {
    currentImgSlide = 0;
  } else {
    currentImgSlide++;
  }
  moveSlideTo(currentImgSlide);
  activeBtn(currentImgSlide);
};

ctaBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    const slide = btn.dataset.slide;
    moveSlideTo(slide);
    activeBtn(slide);
  })
);

setInterval(() => {
  moveSlide();
}, 2000);
