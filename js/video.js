let video;
let play;
let durationControl;
let soundControl;
let intervalId;

document.addEventListener("DOMContentLoaded", (event) => {
  video = document.getElementById("video");
  durationControl = document.getElementById("durationLevel");
  soundControl = document.getElementById("soundLevel");
  play = document.querySelectorAll(".play");

  durationControl.value = 0;
  durationControl.min=0;

    for (let i = 0; i<play.length; i++){
        play[i].addEventListener("click", ()=>{

          let playImg = document.querySelector('.play-btn');
          playImg.classList.toggle('play-btn--active');

          durationControl.max = video.duration;

          if (video.paused) {
            video.play();
            intervalId = setInterval(updateDuration,100/150)
          } else {
            video.pause();
            clearInterval(intervalId);
          }
        }
    )}

    function updateDuration(){
      durationControl.value = video.currentTime;
    } 

});