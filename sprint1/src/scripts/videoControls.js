import React from "react";
import fullScreen from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volume from "../assets/Icons/SVG/Icon-volume.svg";
import playIcon from "../assets/Icons/SVG/Icon-play.svg";

export default function videoContorls() {
  //const video = document.querySelector(".video__playing");
  //video.controls = false;
  //   function togglePlayPause() {
  //     var playpause = document.getElementById("playpause");
  //     if (video.paused || video.ended) {
  //       playpause.title = "pause";
  //       playpause.innerHTML = "pause";
  //       video.play();
  //     } else {
  //       playpause.title = "play";
  //       playpause.innerHTML = "play";
  //       video.pause();
  //     }
  //   }
  //   var playpause = document.getElementById("playpause");
  //   function setVolume() {
  //     var volume = document.getElementById("volume");
  //     video.volume = volume.value;
  //   }
  //   function toggleMute() {
  //     video.muted = !video.muted;
  // //   }
  // function updateProgress() {
  //   var progress = document.getElementById("progress");
  //   var value = 0;
  //   if (video.currentTime > 0) {
  //     value = Math.floor((100 / video.duration) * video.currentTime);
  //   }
  //   progress.style.width = value + "%";
  // }
  // video.addEventListener("timeupdate", updateProgress, false);
  return (
    <>
      <div className="control">
        <div className="control__playPause">
          <img src={playIcon} alt="" />
        </div>
        <div className="control__progressBar">
          <span className="control__progress"></span>
        </div>
        <div className="control__volumeScreen">
          <img src={fullScreen} alt="" />
          <img src={volume} alt="" />
        </div>
      </div>
    </>
  );
}
