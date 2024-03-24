document.addEventListener("DOMContentLoaded", function() {
    function adjustBackgroundSize() {
        if (window.innerHeight > window.innerWidth) {
            // Portrait orientation
            document.body.style.backgroundSize = 'contain';
        } else {
            // Landscape orientation
            document.body.style.backgroundSize = 'cover';
        }
    }

    // Adjust on initial load
    adjustBackgroundSize();

    // Adjust on resizing the window
    window.addEventListener('resize', adjustBackgroundSize);
});
