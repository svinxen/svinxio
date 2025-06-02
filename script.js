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

function handleScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Gör så animationen kan spelas igen
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', handleScrollAnimations);

const items = document.querySelectorAll(".interest-item");
const display = document.getElementById("interest-display");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    display.textContent = `Du klickade på: ${item.dataset.name}`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.carousel-item');
  const descriptions = document.querySelectorAll('.desc');
  const interestImage = document.getElementById('interest-image');

  // Bild-URL:er kopplade till varje key
  const images = {
    outdoors: '/styling/outdoor2.jpeg',
    pcmodding: '/styling/pc1.jpg',
    books: '/styling/books.jpg',
    animals: '/styling/animals.jpg',
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Ta bort active från alla knappar
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
        b.setAttribute('tabindex', '-1');
      });

      // Lägg på active på klickad knapp
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      btn.setAttribute('tabindex', '0');
      btn.focus();

      // Visa rätt beskrivning
      const key = btn.getAttribute('data-key');
      descriptions.forEach(desc => {
        if (desc.id === 'desc-' + key) {
          desc.classList.add('active');
        } else {
          desc.classList.remove('active');
        }
      });

      // Byt bild
      if (interestImage) {
        interestImage.src = images[key] || '';
        interestImage.alt = key.charAt(0).toUpperCase() + key.slice(1);
      }
    });
  });

  // Kör en gång vid start för att visa rätt bild och beskrivning om någon är aktiv
  const activeBtn = document.querySelector('.carousel-item.active');
  if (activeBtn) {
    activeBtn.click();
  }
});


const animatedLines = document.querySelectorAll('.line-animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.6 });

animatedLines.forEach(line => {
  line.style.animationPlayState = 'paused';
  observer.observe(line);
});

