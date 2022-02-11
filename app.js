const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("hamburger-active");
});

const navlinksLi = document.querySelectorAll(".nav-links li");

navlinksLi.forEach((li) => {
  li.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navLinks.classList.toggle("nav-active");
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  //cards effect
  effect: "cards",
  cardsEffect: {
    slideShadows: true,
  },
  mousewheel: {
    invert: true,
  },
});
