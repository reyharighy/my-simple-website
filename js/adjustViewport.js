function adjustViewportWidth(initialWidth) {
    if (initialWidth < 765) {
        document.querySelector('meta[name="viewport"]').setAttribute('content', `width=764, initial-scale=${initialWidth/764}`);
    } else {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
}

let initialWidth = null;

window.addEventListener('load', () => {
    initialWidth = window.innerWidth;
    adjustViewportWidth(initialWidth);
});
