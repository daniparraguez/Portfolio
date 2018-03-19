var typed = new Typed('span.element', {
 strings: ["'Front-End Developer';", "'Code Lover';"],
  smartBackspace: true,
  typeSpeed: 30,
  loop: true,
  loopCount: Infinity
});

// Changing the defaults
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal('.txtinicio', { duration: 2000 });

