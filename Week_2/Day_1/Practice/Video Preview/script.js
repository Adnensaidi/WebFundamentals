console.log("page loaded...");

const video = document.getElementById('maVideo');
const toggleBtn = document.getElementById('toggleBtn');
const muteBtn = document.getElementById('muteBtn');


toggleBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        toggleBtn.textContent = 'Pause'; 
    } else {
        video.pause();
        toggleBtn.textContent = 'Play'; 
    }
});

muteBtn.addEventListener('click', function() {
    video.muted = !video.muted; 
    muteBtn.textContent = video.muted ? 'Unmute' : 'Mute'; 
});



