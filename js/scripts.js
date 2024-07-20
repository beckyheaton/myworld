// Define the function to play the audio
function playAudio() {
    const audio = document.getElementById('audio');
    audio.play();
}

// Define the function to toggle background sound
function toggleBackgroundSound() {
    const backgroundAudio = document.getElementById('background-audio');
    if (backgroundAudio.paused) {
        backgroundAudio.play();
    } else {
        backgroundAudio.pause();
    }
}

// Define the function to navigate to the kelp page
function goToKelpPage() {
    window.location.href = 'kelp.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const beckyImg = document.querySelector('#becky img');
    const kelpImg = document.querySelector('#kelp img');
    const overlay = document.getElementById('overlay');

    // Add the event listener to the image
    beckyImg.addEventListener('click', playAudio);

    // Add the event listener to the kelp image
    kelpImg.addEventListener('click', goToKelpPage);

    // Ensure the background audio starts paused
    const backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.pause(); // Start paused

    // Add the event listener to the overlay for toggling background sound
    overlay.addEventListener('click', function(event) {
        // Ensure the click is not on the image
        if (!beckyImg.contains(event.target) && !kelpImg.contains(event.target)) {
            toggleBackgroundSound();
        }
    });
});
