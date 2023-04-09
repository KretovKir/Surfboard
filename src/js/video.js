(function(){
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

  soundControl.addEventListener('click', changeSound);
  soundControl.addEventListener('mouseup', changeSound);

  durationControl.value = 0;
  durationControl.min=0;
  durationControl.max = Math.round(video.duration);

  
  durationControl.addEventListener('input', setVideoDuration);

  function mouseUp(){
    setVideoDuration();
    video.play();
  }

    for (let i = 0; i<play.length; i++){
        play[i].addEventListener("click", ()=>{

          let playImg = document.querySelector('.play-btn');
          playImg.classList.toggle('play-btn--active');



          if (video.paused) {
            video.play();
            intervalId = setInterval(updateDuration,1000/66)
          } else {
            video.pause();
            clearInterval(intervalId);
          }
        }
    )}

    function updateDuration(){
      durationControl.value = video.currentTime;
    } 

    let micControl = document.getElementById('micLevel');
    micControl.addEventListener('click', soundOff);

    function soundOff(){
      if(video.volume === 0){
        video.volume = soundControl; 
        soundControl.value = soundControl *10;
      }
      else{
        soundControl=video.volume;
        video.volume = 0;
        soundControl.value=0;
      }
    }

    function stopInterval(){
      video.pause();
      clearInterval(intervalId);
    }

    function setVideoDuration(){
      // if(video.paused){
      //   video.play();

      // }else{
      //   video.pause();
      // }

      video.currentTime = durationControl.value;
      intervalId = setInterval(updateDuration, 1000/66);
    }

    function changeSound(){
      video.volume = soundControl.value/10;
    }

});
})();