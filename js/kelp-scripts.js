// Define the function to toggle background sound
function toggleBackgroundSound() {
    const backgroundAudio = document.getElementById('background-audio');
    if (backgroundAudio.paused) {
        backgroundAudio.play();
    } else {
        backgroundAudio.pause();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');

    // Ensure the background audio starts paused
    const backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.pause(); // Start paused

    // Add the event listener to the overlay for toggling background sound
    overlay.addEventListener('click', function() {
        toggleBackgroundSound();
    });
});
