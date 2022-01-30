const controller = new ScrollMagic.Controller();
const boxes = document.querySelectorAll('.box');
const tl = gsap.timeline();

tl
   .to('.main-title', 10, { y: -400 })
   .to('.main-title', 10, { opacity: 0 }, '-=10')
   .to('.img1', 10, { scale: 1.2 }, '-=10')
   .to('.img2', 10, { scale: 1.2 }, '-=10')
   .to('.img2', 10, { y: -300 }, '-=5')
   .to('main', { top: '0%', duration: 4 }, '-=10')
   .to(boxes, { opacity: 1, duration: 3, stagger: 1 }, '-=5')
   .to("main p", { opacity: 0.8, duration: 3 });

const scene = new ScrollMagic.Scene({
   triggerElement: 'section',
   triggerHook: 0,
   duration: '300%'
})
   .setTween(tl)
   .setPin("section")
   .addTo(controller);