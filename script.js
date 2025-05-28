const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Stäng meny när man klickar utanför
document.addEventListener('click', (event) => {
  const isClickInside = hamburgerBtn.contains(event.target) || mobileMenu.contains(event.target);

  if (!isClickInside) {
    mobileMenu.classList.remove('active');
  }
});

// Stäng meny vid klick på en länk
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
