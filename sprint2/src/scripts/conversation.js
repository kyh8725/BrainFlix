import React from "react";
import faceImage from "../assets/Images/face.png";

export default function conversation(props) {
  return (
    <div className="conv">
      <h1 className="conv__title">{`${props.comments.length} Comments`}</h1>
      <form
        id="comments"
        onSubmit={props.onSubmit}
        className="conv__join"
        name="comment-form"
      >
        <div className="conv__join-left">
          <img src={faceImage} alt="user-face" />
        </div>
        <div className="conv__join-right">
          <p className="conv__join-right-title">JOIN THE CONVERSATION</p>
          <input
            className="conv__join-right-input"
            name="input"
            placeholder="your comments"
          ></input>
          <button className="conv__join-right-button">COMMENT</button>
        </div>
      </form>
    </div>
  );
}
