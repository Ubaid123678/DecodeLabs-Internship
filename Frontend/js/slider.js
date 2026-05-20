function initSlider() {
  const slides = document.querySelectorAll('.testimonial-card');
  if (!slides.length) {
    return;
  }

  let index = 0;
  const prev = document.querySelector('.testimonial-btn[data-dir="prev"], .slider-btn.prev');
  const next = document.querySelector('.testimonial-btn[data-dir="next"], .slider-btn.next');

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === i);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  if (prev) prev.addEventListener('click', prevSlide);
  if (next) next.addEventListener('click', nextSlide);

  setInterval(nextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', initSlider);
