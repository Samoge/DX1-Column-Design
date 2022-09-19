ScrollReveal({
  reset: true,
  duration: 2000,
  distance: "70px",
});

ScrollReveal().reveal(".header-headingtext", { delay: 500, origin: "left" });

ScrollReveal().reveal(".header-logotext", { delay: 500, origin: "right" });

ScrollReveal().reveal(".header-longtext", { delay: 500, origin: "bottom" });

ScrollReveal().reveal(".icon-holder i", {
  delay: 500,
  origin: "top",
  interval: 150,
});
