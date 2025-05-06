const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove("show-mobile-menu");
  });
});

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
})


menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

const swiper = new Swiper('.testimonial-swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var my_element = document.getElementById("my_element");

const scrollBtn = document.querySelector('.stt');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });