const controller = new ScrollMagic.Controller();

const tl = gsap.timeline();
tl
    .to('.paper', {
        scale: 1.2,
        opacity: 0,
        motionPath: {
            path: '#path',
            align: '#path',
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
        }
    })

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    triggerHook: 0.5,
    offset: Math.round(window.innerHeight / 2),
    duration: '250%'
})
    .setTween(tl)
    .setPin(".animation")
    // uncomment to add indicators
    // .addIndicators({ name: "1" })
    .addTo(controller);