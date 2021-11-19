// Mobile Nav
const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  burger.classList.toggle('active');
})

// Nav on Scroll Down
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('active', window.scrollY > 0);
});

// Hide Nav on Scroll Down
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= 110 && scrollTop > lastScrollTop) {
    nav.style.transform = "translateY(-150%)";
  } else {
    nav.style.transform = "translateY(0)";
  }
  
  lastScrollTop = scrollTop;
});
