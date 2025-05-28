// Select all nav links and sections
const navLinks = document.querySelectorAll('nav a');
const sections = [...document.querySelectorAll('section')];

// Function to update active nav link based on scroll position
function updateActiveLink() {
  const scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}

// Run on scroll
window.addEventListener('scroll', updateActiveLink);

// Run on load
updateActiveLink();


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
