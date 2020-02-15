import React from "react";
import uuid from "uuid/v1";

export default function videoList(props) {
  const videoList = props.videoList.map(video => {
    return (
      <div key={uuid()} className="video-list__single">
        <div className="video-list__single-img">
          <img src={video.image} alt="video-list-img" />
        </div>
        <div className="video-list__single-info">
          <p className="video-list__single-info-title">{video.title}</p>
          <p className="video-list__single-info-channel">{video.channel}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="video-list">
      <h1 className="video-list__heading">NEXT VIDEO</h1>
      {videoList}
    </div>
  );
}
