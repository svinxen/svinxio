document.addEventListener("DOMContentLoaded", () => {
  // --- Hamburger meny ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');

    // Växla ikon mellan hamburgare och kryss
    hamburgerBtn.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
  });

  // Stäng mobilmeny om man klickar på länk
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburgerBtn.querySelector('i').className = 'fas fa-bars';
    });
  });

  // --- Service sektion toggle ---
  const serviceToggles = document.querySelectorAll('.service-toggle');
  serviceToggles.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.service-item');
      const isOpen = item.classList.contains('open');

      // Stäng alla
      document.querySelectorAll('.service-item.open').forEach(i => i.classList.remove('open'));

      // Om den som klickades på inte var öppen, öppna den
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // --- Intresse-carousel i About ---
  const carouselItems = document.querySelectorAll('.carousel-item');
  const descriptions = document.querySelectorAll('.desc');
  const interestImage = document.getElementById('interest-image');

  // Kartläggning av nycklar till bild-URL (exempel)
  const interestImages = {
    outdoors: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    pcmodding: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    books: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    animals: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80"
  };

  carouselItems.forEach(button => {
    button.addEventListener('click', () => {
      // Avmarkera alla knappar
      carouselItems.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        btn.setAttribute('tabindex', '-1');
      });

      // Dölj alla beskrivningar
      descriptions.forEach(desc => desc.classList.remove('active'));

      // Markera vald knapp
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      button.setAttribute('tabindex', '0');

      // Visa relevant beskrivning
      const key = button.dataset.key;
      const activeDesc = document.getElementById('desc-' + key);
      if (activeDesc) activeDesc.classList.add('active');

      // Byt bild
      if (interestImages[key]) {
        interestImage.src = interestImages[key];
      }
    });
  });

  // --- GSAP scroll-trigger animation (exempel på animate-on-scroll) ---
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.utils.toArray('.animate-on-scroll').forEach(elem => {
      gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        });
    });
  }
});
