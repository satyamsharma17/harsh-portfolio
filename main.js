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
