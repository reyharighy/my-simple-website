function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function adjustViewportWidth() {
    if (isTouchDevice()) {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=764, initial-scale=1.0');
    } else {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
    }
}

// Function to check and reload the page if necessary
function checkAndReload() {
    const currentWidth = window.innerWidth;
    if ((initialWidth <= 764 && currentWidth > 764) || (initialWidth > 764 && currentWidth <= 764)) {
        window.location.reload();
    }
}

// Call the function on page load
// window.addEventListener('load', () => {
    // initialWidth = window.innerWidth; // Store the initial width
    // adjustViewportWidth();
// });

// Call the function when the window is resized
window.addEventListener('resize', () => {
    // checkAndReload(); // Check and reload if necessary
    adjustViewportWidth(); // Adjust viewport settings
});

// let initialWidth = window.innerWidth;
