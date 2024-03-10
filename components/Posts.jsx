import React from 'react';
import { usePostsData } from '../hooks/usePostsData'; 
import './Posts.css'; 
// import postImage from '../images/post.jpeg'; 

export const Posts = () => {
const {posts} = usePostsData();
console.log(posts, "state");

  return (
    <div>
      <h1>Posts Page</h1>
      <p>Welcome to the Posts Page!!!!</p>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src="/images/post.jpeg" alt={post.title} className="post-picture" />
          <div className="post-content">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-summary">{post.summary}</p>
            <button className="post-button">Read More</button>
          </div>
        </div>
      ))}

    </div>
  );
};

