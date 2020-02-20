import React from "react";
import uuid from "uuid/v1";
import formatDate from "./utils";
import faceImage from "../assets/Images/face.png";
import axios from "axios";
const $url = "https://project-2-api.herokuapp.com/videos/";
const $key = "?api_key=Daniel";
//  /videos/:videoId/comments/:commentId`

export default function comments(props) {
  const clickHandler = event => {
    axios
      .delete(`${$url}${props.mainVideoId}/comments/${event.target.id}${$key}`)
      .then(response => {
        props.deleteHandler();
      });
  };

  const commentList = props.comments
    .slice(0)
    .reverse()
    .map(com => {
      return (
        <div key={uuid()} className="comment">
          <div className="comment__left">
            <img src={faceImage} alt="user-face" />
          </div>
          <div className="comment__right">
            <div className="comment__right-top">
              <p className="comment__right-top-name">{com.name}</p>
              <p className="comment__right-top-date">
                {formatDate(com.timestamp)}
              </p>
            </div>
            <div className="comment__paragraph">
              <p className="comment__paragraph-text">{com.comment}</p>
              <button
                onClick={clickHandler}
                id={com.id}
                className="comment__delete-button"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      );
    });

  return <>{commentList}</>;
}
