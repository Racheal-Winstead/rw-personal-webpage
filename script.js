const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { rootMargin: '-35% 0px -45% 0px', threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));

const yearLabel = document.getElementById('year');
if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}
