/* JavaScript for On-Scroll Animations */
  document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".lui-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lui-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollElements.forEach((el) => observer.observe(el));
  });