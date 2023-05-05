const audio = document.getElementById("myAudio");
const audioBtn = document.getElementById("audioBtn");

function toggleAudio() {
	audio.volume = 0.1;
  if (audio.paused) {
    audio.play();
    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i> Turn sound off';
    audioBtn.classList.add("active");
  } else {
    audio.pause();
    audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Turn sound on';
    audioBtn.classList.remove("active");
  }
}