const sections = document.querySelectorAll(".animated-section");

const observerOptions = {
  threshold: 0.2,
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.setProperty(
        "--animation-speed",
        entry.target.getAttribute("data-speed") + "s"
      );
      entry.target.classList.add("in-view");
      sectionObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

/***
 * Author: MD Asad
 * Author URL: http://asadpro.com
 * You can use this anywhere,
 * Thanks for using this
 */
