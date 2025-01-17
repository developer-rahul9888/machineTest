//     window.addEventListener('scroll', function() {
//     var header = document.getElementById('header');
//     var heroLogo = document.getElementById('hero-logo');
//     var scrollPosition = window.scrollY;

//     if (scrollPosition > window.innerHeight - 50) {
//         header.classList.add('show-header');
//     } else {
//         header.classList.remove('show-header');
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
});

 // Function to smoothly scroll to the footer
 function scrollToFooter() {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
}

function scrollToHeader() {
  document.getElementById("header").scrollIntoView({ behavior: "smooth" });
}

// Set up IntersectionObserver to detect when the footer is in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToFooter(); // Trigger smooth scroll when footer is in view
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the footer is visible
});

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToHeader(); // Trigger smooth scroll when footer is in view
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the footer is visible
});

// Observe the footer element
observer.observe(document.getElementById("footer"));
observer1.observe(document.getElementById("header"));

function disableScroll() {
  document.body.classList.add("noscroll");
}

// Function to enable scrolling
function enableScroll() {
  document.body.classList.remove("noscroll");
}

gsap.registerPlugin(ScrollTrigger);

let smoother;

const animateHeroSection = () => {
  // smoother = ScrollSmoother.create({
  //   smooth: 1.5,
  //   normalizeScroll: true
  // });

  // gsap.fromTo("#logo", {
  //   opacity: 0,
  //   duration: 3,
  //   y: 0,

  //   // scrollTrigger: {
  //   //   trigger: "#hero",
  //   //   start: "top top",
  //   //   end: "bottom top",
  //   //   scrub: 1,
  //   // },
  // }, {
  //   scale: 3,
  //   opacity: 1,
  //   duration: 1,
  //   delay: 1,
  //   y: "35vh",
  //   x: "29vw",
  // })

  const tl = gsap.timeline({
    onStart: disableScroll, // Disable scroll when animation starts
    onComplete: enableScroll, // Re-enable scroll when animation completes
  });

  tl
    .fromTo(
      "#hero-text",
      {
        scale: 10,
        duration: 1,
        y: -100,
      },
      {
        scale: 1,
        duration: 1,
        stagger: 1,
        y: 0,
        ease: "power2.out",
      }
    )
    .from("#hero-logo", {
      opacity: 0,
      duration: 1,
    });
};

const animateHeader = () => {
  let tlHeader = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#hero",
      start: "20% top",
      end: "40% top",
      duration: 0.5,
      // markers: true,
      ease: "power2.out",
      pin: true, // Remove this and it SORT OF works. But I want the hero image to be frozen
      scrub: 1,
    },
  });

  tlHeader.to(
    "#hero-logo",
    {
      scale: 0.2,
      y: "-100vh",
      x: "-75vw",
      duration: 1,
      opacity: 0,
    },
    "logo"
  );

  tlHeader.fromTo(
    "#logo",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    "logo"
  );
};

const animateFooter = () => {
  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      scroller: "body",
      top: "top 50%",
      end: "top 10%",
      // markers: true,
      scrub: 1,
    },
  });

  tlFooter.from(".footer-logo", {
    x:"-40vw",
    y: "-70vh",
    ease: "power2.out",
    delay: 1,
    duration: 1,
    opacity: 0,
  });

  tlFooter.to("#logo", {
    opacity: 0,
    duration: 0.5,
  }, "logo");

  tlFooter.from("#footerText", {
    x: "-50%",
    ease: "power2.out",
    opacity: 0,
  }, "logo");



  tlFooter.to("#footerText", {
    ease: "power2.out",
    opacity: 1,
    onComplete: function () {
      // Once box1 is invisible, hide it and show box2
      gsap.fromTo("#footerBtn", { opacity: 0 }, { opacity: 1, duration: 0.5 }); // Fade in box2
    },
  });
};

const animateProducts = () => {
  gsap.from("#products .group", {
    scrollTrigger: {
      trigger: "#products",
      scroller: "body",
      start: "top 50%",
      end: "top 10%",
      // markers: true,
      scrub: 1,
    },
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.1,
  })
}


animateHeader();
animateHeroSection();
animateFooter();
animateProducts();
