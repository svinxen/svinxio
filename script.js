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


 const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMenu() {
    mobileMenu.classList.remove("show");
  }

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  // Klick på länk stänger meny
  mobileMenu.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      closeMenu();
    })
  );

  // Klick utanför meny stänger den
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
