import React from 'react';
import "./Comments.css";

export const Comments = ({ comments }) => {
  return (
    <div className="comments-container">
      <h2 className="comments-heading">Comments</h2>
      <ul className="comments-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            <div className="comment-header">
              <strong>{comment.name}</strong> - <span className="comment-email">{comment.email}</span>
            </div>
            <p className="comment-body">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

 
