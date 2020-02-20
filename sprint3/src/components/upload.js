import React from "react";
import uploadImage from "../assets/Images/Upload-video-preview.jpg";

export default function upload() {
  return (
    <div className="upload">
      <div className="upload__header">
        <h1>Upload Video</h1>
      </div>
      <div className="upload__contents">
        <div className="upload__thumbnail">
          <p className="upload__thumbnail-title">VIDEO THUMBNAIL</p>
          <div className="upload__thumbnail-image">
            <img src={uploadImage} alt="upload" />
          </div>
        </div>
        <div className="upload__video">
          <form>
            <p className="upload__video-title">TITLE YOUR VIDEO</p>
            <input
              className="upload__video-title-input"
              name="video-input"
              type="/text"
              placeholder="Add a title to your video"
            ></input>
            <p className="upload__video-desc-title">ADD A VIDEO DESCRIPTION</p>
            <textarea
              className="upload__video-desc-input"
              name="video-input"
              type="/text"
              placeholder="Add a description of your video"
            ></textarea>
          </form>
        </div>
      </div>
      <div className="upload__buttons">
        <button className="upload__buttons-publish">PUBLISH</button>
        <button className="upload__buttons-cancel">CANCEL</button>
      </div>
    </div>
  );
}
