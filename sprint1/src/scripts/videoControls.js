import React from "react";
import fullScreen from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volume from "../assets/Icons/SVG/Icon-volume.svg";
import playIcon from "../assets/Icons/SVG/Icon-play.svg";

export default function videoContorls(props) {
  //duration hard coded for now.
  return (
    <>
      <div className="control">
        <div className="control__playPause">
          <img src={playIcon} alt="" />
        </div>
        <div className="control__progressBar">
          <span className="control__progress"></span>
          <span className="control__time">
            0:00/0:{props.mainVideo.duration}
          </span>
        </div>
        <div className="control__volumeScreen">
          <img src={fullScreen} alt="" />
          <img src={volume} alt="" />
        </div>
      </div>
    </>
  );
}
