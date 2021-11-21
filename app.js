//Load
const loadAnimation = document.querySelector('.load-wrapper');
window.addEventListener('load', function () {
  loadAnimation.parentElement.removeChild(loadAnimation);
  window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
  }
});

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
    // nav.style.transform = "translateY(-150%)";
    nav.classList.add('active-hide');
  } else {
    // nav.style.transform = "translateY(0)";
    nav.classList.remove('active-hide');
  }

  lastScrollTop = scrollTop;
});
