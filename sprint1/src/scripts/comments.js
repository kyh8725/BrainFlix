import React from "react";


export default function comments(props) {
  const commentList = props.comments.map(com => {
    return (
      <div className="comment">
        <div className="comment__left">
          <img src={com.img} alt="user-face" />
        </div>
        <div className="comment__right">
          <div className="comment__right-top">
            <p className="comment__right-top-name">{com.name}</p>
            <p className="comment__right-top-date">{com.date}</p>
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
