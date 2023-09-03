const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const audioPlayer = document.getElementById("audioPlayer");

playBtn.addEventListener("click", function() {
  audioPlayer.play();
});

pauseBtn.addEventListener("click", function() {
  audioPlayer.pause();
});
