// mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
// year
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');

  let index = 0;

  function showSlide(i) {
    index = (i + slides.length) % slides.length; // loop around
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => showSlide(index + 1));
  prevBtn.addEventListener('click', () => showSlide(index - 1));

  // autoplay
  setInterval(() => showSlide(index + 1), 5000);
