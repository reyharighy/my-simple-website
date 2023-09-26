function adjustViewportWidth() {
    if (window.innerWidth < 765) {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=764, initial-scale=2.0, maximum-scale=1.0,);
    } else {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
    }
}

// Call the function on page load
window.addEventListener('load', () => {
    adjustViewportWidth();
});

// Call the function when the window is resized
window.addEventListener('resize', () => {
    adjustViewportWidth(); // Adjust viewport settings
});
