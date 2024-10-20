document.addEventListener('DOMContentLoaded', function() {
    var stylesheet = document.getElementById("stylesheet");
    var dayNightButton = document.getElementById('day-night');

    console.log('Stylesheet:', stylesheet);
    console.log('Day-Night Button:', dayNightButton);

    if (stylesheet && dayNightButton) {
        dayNightButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            if (stylesheet.getAttribute('href') === 'l-style.css') {
                stylesheet.setAttribute('href', 'style.css');
                this.setAttribute('title', 'Switch to Day'); // Update the title attribute
            } else {
                stylesheet.setAttribute('href', 'l-style.css');
                this.setAttribute('title', 'Switch to Night'); // Update the title attribute
            }
        });
    } else {
        console.error('Stylesheet or day-night button not found.');
    }
});