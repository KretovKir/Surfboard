let video;
let durationControl;
let soundControl;
let intervalId;

document.addEventListener('DOMContentLoaded', event =>{
    video = document.getElementById('video-item');
    video.addEventListener('click',playStop);
    let playButtons = document.querySelector('.play');
    for (let i=0; i<playButtons.length; i++){
        playButtons[i].addEventListener('click', playStop);
    }

    let micControl = document.getElementById('soundLevel');
    micControl.addEventListener('click', soundOff);

    durationControl = document.getElementById('durationLevel');
    durationControl.addEventListener('mousedown', stopInterval);
    durationControl.addEventListener('click', setVideoDuration);

    durationControl.min = 0;
    durationControl.max=10;


    soundControl = document.getElementById('volumeLevel');
    soundControl.addEventListener('click', changeSoundVolume);

    soundControl.min = 0;
    soundControl.max = 10;

    soundControl.value = soundControl.max;





    function playStop(){
        let playImg = document.querySelector('.video__play');
        playImg.classList.toggle('video__play')

        durationControl.max = video.duration;

        if(video.paused){
            video.play();
            intervalId = setInterval(updateDuration(),1000/66);
        }else{
            video.paused();
            clearInterval(intervalId);
        }
    }

    function updateDuration() {
        durationControl.value = video.currentTime;
    }

    function soundOff(){
        if(video.volume === 0){
            video.volume = soundLevel;
            soundControl.value = soundLevel *1;
        }else{
            soundLevel = video.volume;
            video.volume = 0;
            soundControl.value = 0;
        }
    }

    function stopInterval(){
        video.pause()
        clearInterval(intervalId);
    }

    function setVideoDuration(){
        if(video.paused){
            video.play()
        }else{
            video.pause();
        }
        video.currentTime = durationControl.value;
        intervalId= setInterval(updateDuration(),1000/66);
    }

    function changeSoundVolume(){
        video.volume = soundControl.value/10;
    }

    
})