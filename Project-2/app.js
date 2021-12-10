const controller = new ScrollMagic.Controller();

const slide1 = new ScrollMagic.Scene({
    triggerElement: '.sec1 .bg',
    triggerHook: 0,
    duration: '100%'
})
    .setPin('.sec1 .bg')
    .addTo(controller);

const slide2 = new ScrollMagic.Scene({
    triggerElement: '.sec2 .bg',
    triggerHook: 0,
    duration: '200%'
})
    .setPin('.sec2 .bg')
    .addTo(controller);
