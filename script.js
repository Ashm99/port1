document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Scroll Spy & Hover Highlight for Sidebar Navigation
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('#sidebar nav ul li a');

  // IntersectionObserver options
  const observerOptions = {
    root: document.querySelector('#main-content'),
    rootMargin: '0px',
    threshold: 0.5 // when 50% of the section is visible
  };

  // Observer callback to add/remove active class
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the link corresponding to the visible section
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`#sidebar nav ul li a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
    // Additionally, highlight nav link on hover over a section
    section.addEventListener('mouseover', () => {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = section.getAttribute('id');
      const activeLink = document.querySelector(`#sidebar nav ul li a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    });
  });

  // Smooth scrolling for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
