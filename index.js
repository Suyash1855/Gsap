gsap.from(".big-font", { duration: 1.1, y: "30%", ease: "power2" });
gsap.from(".containerP", { duration: 1.5, opacity: 0 });
gsap.from(".nav-p", { duration: 1.5, opacity: 0 });
// gspa.from(".image-tagI", { duration: 1.5, scale: 0.5 });
gsap.registerPlugin(ScrollTrigger);
gsap.set(".single-step", { opacity: 0 });
const allSteps = gsap.utils.toArray(".single-step");

/* settings */
const totalDuration = 11000;
const singleStepDuration = totalDuration / allSteps.length;

/* section */
ScrollTrigger.create({
  trigger: ".two",
  start: "center center",
  end: "+=" + totalDuration,
  pin: true,
  //pinSpacing: false,
  // markers: true,
  toggleActions: "restart pause reverse pause",
  id: "two",
  onEnter: () => console.log("entering"),
  onLeave: () => console.log("leaving"),
});
console.log(singleStepDuration);

/* texts inside section */
const stepsTimeline = gsap.timeline();
ScrollTrigger.create({
  trigger: ".two .stepped-animation",
  start: "top center",
  end: "+=" + totalDuration,
  animation: stepsTimeline,
  scrub: true,
  snap: 1 / allSteps.length - 1,
});

/* Manual timeline to fade in / out the single steps */
stepsTimeline
  .to(".two .stepped-animation>:nth-child(1)", { duration: 0.3, opacity: 1 })
  .to(".two .stepped-animation>:nth-child(1)", {
    duration: 0.2,
    opacity: 0,
    ease: "none",

    stagger: singleStepDuration * 1,
  })
  .to(".two .stepped-animation>:nth-child(2)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 1,
  })
  .to(".two .stepped-animation>:nth-child(2)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 2,
  })
  .to(".two .stepped-animation>:nth-child(3)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 2,
  })
  .to(".two .stepped-animation>:nth-child(3)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 3,
  })
  .to(".two .stepped-animation>:nth-child(4)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 3,
  })
  .to(".two .stepped-animation>:nth-child(4)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 4,
  })
  .to(".two .stepped-animation>:nth-child(5)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 4,
  })
  .to(".two .stepped-animation>:nth-child(5)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 5,
  })
  .to(".two .stepped-animation>:nth-child(6)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 5,
  })
  .to(".two .stepped-animation>:nth-child(6)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 6,
  })
  .to(".two .stepped-animation>:nth-child(7)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 6,
  })
  .to(".two .stepped-animation>:nth-child(7)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 7,
  })
  .to(".two .stepped-animation>:nth-child(8)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 7,
  })
  .to(".two .stepped-animation>:nth-child(8)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 8,
  })
  .to(".two .stepped-animation>:nth-child(9)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 8,
  })
  .to(".two .stepped-animation>:nth-child(9)", {
    duration: 0.3,
    opacity: 0,
    stagger: singleStepDuration * 9,
  })
  .to(".two .stepped-animation>:nth-child(10)", {
    duration: 0.2,
    opacity: 1,
    stagger: singleStepDuration * 9,
  })
  .to(".two .stepped-animation>:nth-child(10)", {
    duration: 0.3,
    opacity: 0,
    stagger: singleStepDuration * 10,
  })
  .to(".two .stepped-animation>:nth-child(11)", {
    duration: 0.2,
    opacity: 1,
    stagger: singleStepDuration * 10,
  });

gsap.registerPlugin(ScrollTrigger);
gsap.set(".single-step-img", { opacity: 0 });
const allSteps1 = gsap.utils.toArray(".single-step-img");
/* settings */
const totalDuration1 = 11000;
const singleStepDuration1 = totalDuration1 / allSteps1.length;

/* section */
ScrollTrigger.create({
  trigger: ".one",
  start: "center center",
  end: "+=" + totalDuration1,
  pin: true,
  //pinSpacing: false,
  // markers: true,
  toggleActions: "restart pause reverse pause",
  id: "one",
  onEnter: () => console.log("entering"),
  onLeave: () => console.log("leaving"),
});

const stepsTimeline1 = gsap.timeline();
ScrollTrigger.create({
  trigger: ".one .stepped-animation-img",
  start: "top center",
  end: "+=" + totalDuration1,
  animation: stepsTimeline1,
  scrub: true,
  snap: 1 / allSteps1.length - 1,
});

stepsTimeline1
  .to(".one .stepped-animation-img>:nth-child(1)", {
    duration: 0.3,
    opacity: 1,
  })
  .to(".one .stepped-animation-img>:nth-child(1)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 1,
  })
  .to(".one .stepped-animation-img>:nth-child(2)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 1,
  })
  .to(".one .stepped-animation-img>:nth-child(2)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 2,
  })
  .to(".one .stepped-animation-img>:nth-child(3)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 2,
  })
  .to(".one .stepped-animation-img>:nth-child(3)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 3,
  })
  .to(".one .stepped-animation-img>:nth-child(4)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 3,
  })
  .to(".one .stepped-animation-img>:nth-child(4)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 4,
  })
  .to(".one .stepped-animation-img>:nth-child(5)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 4,
  })
  .to(".one .stepped-animation-img>:nth-child(5)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 5,
  })
  .to(".one .stepped-animation-img>:nth-child(6)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 5,
  })
  .to(".one .stepped-animation-img>:nth-child(6)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 6,
  })
  .to(".one .stepped-animation-img>:nth-child(7)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 6,
  })
  .to(".one .stepped-animation-img>:nth-child(7)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 7,
  })
  .to(".one .stepped-animation-img>:nth-child(8)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 7,
  })
  .to(".one .stepped-animation-img>:nth-child(8)", {
    duration: 0.2,
    opacity: 0,
    stagger: singleStepDuration * 8,
  })
  .to(".one .stepped-animation-img>:nth-child(9)", {
    duration: 0.3,
    opacity: 1,
    stagger: singleStepDuration * 8,
  })
  .to(".one .stepped-animation-img>:nth-child(9)", {
    duration: 0.3,
    opacity: 0,
    stagger: singleStepDuration * 9,
  })
  .to(".one .stepped-animation-img>:nth-child(10)", {
    duration: 0.2,
    opacity: 1,
    stagger: singleStepDuration * 9,
  })
  .to(".one .stepped-animation-img>:nth-child(10)", {
    duration: 0.3,
    opacity: 0,
    stagger: singleStepDuration * 10,
  })
  .to(".one .stepped-animation-img>:nth-child(11)", {
    duration: 0.2,
    opacity: 1,
    stagger: singleStepDuration * 10,
  });
