import React from 'react';
import { useState } from "react";
import "./Comments.css";
import { useCommentForm } from '../hooks/useCommentForm';

export const Comments = ({ comments, postId }) => {
    const { values: newComment, handleChange, handleSubmit } = useCommentForm(postId);

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

            <h2>Add a Comment</h2>
            <form className="comment-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" name="name" value={newComment.name} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" value={newComment.email} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                    <label htmlFor="body" className="form-label">Comment:</label>
                    <textarea id="body" name="body" value={newComment.body} onChange={handleChange} className="form-textarea" required />
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
};


