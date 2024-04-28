

document.addEventListener('DOMContentLoaded', function () {
  const subheadings = document.querySelectorAll('.fade-out');

  function handleScroll() {
    subheadings.forEach(subheading => {
      const bounding = subheading.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
        subheading.classList.add('bounce');
        subheading.style.opacity = 1;
      } else {
        subheading.classList.remove('bounce');
        subheading.style.opacity = 0;
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
});
