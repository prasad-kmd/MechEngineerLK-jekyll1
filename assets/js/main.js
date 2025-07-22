const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const scrollProgress = document.getElementById('scroll-progress');
const scrollToTopBtn = document.getElementById('scroll-to-top');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${scrollPercent}%`;

  if (scrollTop > 200) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
