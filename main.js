const textRight = document.querySelector('.text-slide-right');
const textLeft = document.querySelector('.text-slide-left');

window.addEventListener('scroll', function() {
    // Calculate the percentage scrolled
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));

    // Translate the text based on the scroll percentage and viewport width
    const viewportWidth = window.innerWidth;

    // Calculate the amount of translation for both left and right
    const leftTranslation = (-viewportWidth * scrollPercentage) + "px";
    const rightTranslation = (viewportWidth * scrollPercentage) + "px";

    textLeft.style.transform = `translateX(${leftTranslation})`;
    textRight.style.transform = `translateX(${rightTranslation})`;
});

document.addEventListener("DOMContentLoaded", function() {
    const controller = new ScrollMagic.Controller();

    // Animation for email text
    const emailTimeline = gsap.timeline();
    emailTimeline.to('.regular-text', {
        duration: 1,
        opacity: 0,
        x: '-50%'
    });

    new ScrollMagic.Scene({
        triggerElement: '.middle-section',
        triggerHook: 0.5,
        duration: '100%'
    })
    .setTween(emailTimeline)
    .addTo(controller);

    // Animation for landing image
    const imageTimeline = gsap.timeline();
    imageTimeline.to('.landing-image', {
        duration: 1,
        opacity: 0,
        scale: 1.5
    });

    new ScrollMagic.Scene({
        triggerElement: '.middle-section',
        triggerHook: 0.5,
        duration: '100%'
    })
    .setTween(imageTimeline)
    .addTo(controller);

    // Animation for socials
    const socialsTimeline = gsap.timeline();
    socialsTimeline.to('.landing-socials', {
        duration: 1,
        opacity: 0,
        x: '50%'
    });

    new ScrollMagic.Scene({
        triggerElement: '.middle-section',
        triggerHook: 0.5,
        duration: '100%'
    })
    .setTween(socialsTimeline)
    .addTo(controller);
});
