// Get the text element
const textRight = document.querySelector('.text-slide-right');
const textLeft = document.querySelector('.text-slide-left');

// Listen for the scroll event
window.addEventListener('scroll', function() {
    // Calculate the percentage scrolled
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));

    // Translate the text based on the scroll percentage
    const maxTranslation = -500; // Adjust based on how far left you want the text to move (this is in % of its width)
    const leftTranslation = maxTranslation * scrollPercentage;

    textLeft.style.transform = `translateX(${leftTranslation}%)`;
});

// Listen for the scroll event
window.addEventListener('scroll', function() {
    // Calculate the percentage scrolled
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));

    // Translate the text based on the scroll percentage
    const maxTranslation = 500; // Adjust based on how far left you want the text to move (this is in % of its width)
    const rightTranslation = maxTranslation * scrollPercentage;

    textRight.style.transform = `translateX(${rightTranslation}%)`;
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
        scale: 2
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
