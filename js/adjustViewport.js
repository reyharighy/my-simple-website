function adjustViewportWidth(initialWidth) {
    if (initialWidth < 765) {
        document.querySelector('meta[name="viewport"]').setAttribute('content', `width=764, initial-scale=${764/initialWidth}`);
    } else {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
}

let initialWidth = null;

// Call the function on page load
window.addEventListener('load', () => {
    initialWidth = window.innerWidth;
    adjustViewportWidth(initialWidth);
});
