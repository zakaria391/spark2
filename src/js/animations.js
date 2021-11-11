gsap.registerPlugin(ScrollTrigger);

// Keep refreshing to get correct positions after lazy loading
setInterval(() => {
  ScrollTrigger.refresh();
}, 500);

// Frame fade in
gsap.to(".section9 .frame", {
  duration: 1.2,
  ease: "power2.in",
  opacity: 1,
  scrollTrigger: {
    trigger: document.querySelector(".section9 .frame"),
    start: "+=0", //"top center",
  },
});

// Consultant animation
/*gsap.to(".section13 .consultant-box", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".section13 .info.section-content",
    start: "top bottom",
  },
});
gsap.from(".section13 .consultant", {
  duration: 1,
  xPercent: -10,
  yPercent: -10,
  scrollTrigger: {
    trigger: ".section13 .info.section-content",
    start: "top bottom",
  },
});

gsap.from(".section13 .consultant-shadow", {
  duration: 1,
  xPercent: -14,
  yPercent: -50,
  scrollTrigger: {
    trigger: ".section13 .info.section-content",
    start: "top bottom",
  },
});*/

// Images slide in from right
const images = document.querySelectorAll(".section-slider");

images.forEach((image) => {
  gsap.set(image, {
    x: "33%",
    autoAlpha: 0,
    transformOrigin: "right center",
  });

  gsap.to(image, {
    duration: 2,
    autoAlpha: 1,
    x: "0%",
    force3D: true,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: image,
      start: "top center",
    },
  });
});
