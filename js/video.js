let video;
let play;
let durationControl;
let soundControl;
let intervalId;

document.addEventListener("DOMContentLoaded", (event) => {
  video = document.getElementById("video");
  durationControl = document.getElementById("durationLevel");
  soundControl = document.getElementById("soundLevel");
  play = document.getElementById("play");

  play.addEventListener("click", function(){
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }, false);
});
