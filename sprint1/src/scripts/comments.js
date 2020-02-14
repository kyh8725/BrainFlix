import React from "react";
import uuid from "uuid/v1";
import formatDate from "./utils";
//import faceImage from "../assets/Images/face.png";

export default function comments(props) {
  const commentList = props.comments.map(com => {
    return (
      <div key={uuid()} className="comment">
        <div className="comment__left">
          <img src={com.img} alt="user-face" />
        </div>
        <div className="comment__right">
          <div className="comment__right-top">
            <p className="comment__right-top-name">{com.name}</p>
            <p className="comment__right-top-date">{formatDate(com.date)}</p>
          </div>
          <div className="comment__paragraph">
            <p className="comment__paragraph-text">{com.comment}</p>
          </div>
        </div>
      </div>
    );
  });

  return <>{commentList}</>;
}
