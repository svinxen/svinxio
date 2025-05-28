// Scrollspy för aktiv nav-länk
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop - sectionHeight / 3){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });
});


const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Stäng meny vid klick på länk
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

// Stäng meny vid klick utanför
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("show") &&
    !mobileMenu.contains(e.target) &&
    e.target !== hamburgerBtn &&
    !hamburgerBtn.contains(e.target)
  ) {
    mobileMenu.classList.remove("show");
  }
});
