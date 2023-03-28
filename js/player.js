var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "391",
    width: "662",
    videoId: "nR-Zen2s2Qw",
    events: {
    //   onReady: onPlayerReady,
    //   onStateChange: onPlayerStateChange,
    },
  });
}
